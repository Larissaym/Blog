/* Executes the functions only when the document is finished loading */
$(document).ready(function(){

    /* Loading navigation and footer in all html documents */
    $('#navigation').load('/elements/navigation.html', function() {
        setActiveNavItem();
    });
    $('#footer').load('/elements/footer.html');

    /* Load JSON-encoded data for the articles */
    $.getJSON('articles.json', function(respons){
        // console.log(respons)
        $.each(respons, function(i, article){
            // console.log(article.title)
            
            /* assembles the html structure with the JSON strings for the article list (with the class article-list) */
            $('.article-list').append(`
            <li>
                <a href="${article.url}">
                    <img class="w-100" src="${article.img}">
                    ${article.title}
                </a>
            </li>
            `);

            /* assembles the html structure with the JSON strings for the overview with all the articles (with the class all-articles) */
            $('.all-articles').append(`
            <div class="col mb-5">
                <div class="card">
                    <a href="${article.url}">
                        <img src="${article.img}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.teaser}</p>
                                <p class="text-right mb-0"><small>${article.date}</small></p>
                            </div>
                    </a>
                </div>
            </div>
            `);

            /* Gets the single articles by URL for the artcile details and assembles the html structure with the JSON strings */
            let articleId = parseInt(getArticleIdByUrl());

            if (article.id === articleId) {
                console.log(article.title);
                $('#article-details').append(`
                    <p class="text-right"><small>${article.date}</small></p>
                    <img src="${article.img}" class="w-100">
                    <h2>${article.title}</h2>
                    <p>${article.pharagraph1}</p>
                    <p>${article.pharagraph2}</p>
                    <p>${article.pharagraph3}</p>
                    <p class="text-right"><small>${article.author}</small></p>
                `)
            }

        })
    });

    /** Forms the Artcile ID from a string to a number for the if above */
    function getArticleIdByUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');
       
        return articleId;
    }

    /* adds the active class to the URL from where on the page the viewer is right now */
    function setActiveNavItem() {
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path

        $('.nav-link').each(function() {
            if (this.href === path) {
             $(this).addClass('active');
            }
        });
    }


});