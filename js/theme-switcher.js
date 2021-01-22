/** Searches if a CSS Theme is saved in the Local Storage and if not, it saves the active CSS stylesheet in the LocalStorage. If there is no LocalStorage, it returns an error
 * @param theme */
function saveTheme(theme) {
    if ('localStorage' in window && window['localStorage'] !== null) {
        try {
            localStorage.setItem('theme', theme);
        } catch (error) {
            console.log(error);
            if (error == QUOTA_EXCEEDED_ERR) {
                alert('Quota exceeded!');
            }
        }
    } else {
        alert('Cannot store user preferences as your browser do not support local storage');
    }
}

/** Changes the CSS in the header. It makes a new Link with the CSS Stylesheet that was choosen
 * @param theme */
function changeCSS(theme) {
    var oldlink = document.getElementById("theme");

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("id", "theme");
    newlink.setAttribute("type", "text/css");
    saveTheme(theme);

    theme = 'style/stylesheet-' + theme + '-mode.css';
    newlink.setAttribute("href", theme);

    oldlink.replaceWith(newlink);
}


/** Loads the default theme or the last choosen CSS version from the localStorage */
window.onload = function() {
    // load set item from LocalStorage if it's possible. If there is no Local Storage, it gives out an error
    if ('localStorage' in window && window['localStorage'] !== null) {
        try {
            var theme = localStorage.getItem('theme');
             // if no theme is/was choosen, set default theme as CSS
            if(theme === null) {
                theme = 'light';
            }

            //sets the CSS in the header
            changeCSS(theme);

        } catch (error) {
            console.log(error);
            if (error == QUOTA_EXCEEDED_ERR) {
                alert('Quota exceeded!');
            }
        }
    } else {
        alert('Cannot store user preferences as your browser do not support local storage');
    }

   
}