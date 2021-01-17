$(document).ready(function(){

    /* loads a given attribute (href) and the given Link to the html tag with the id "switch".  */
    $('#dark-theme').click(function(){
        $('#switch').attr('href', '/style/stylesheet-dark-mode.css');
        // $('#dark-theme').attr('disabled', 'disabled');
        // $('#light-theme').removeAttr('disabled', 'disabled');
        // $('#pink-theme').removeAttr('disabled', 'disabled');
    });

    $('#pink-theme').click(function(){
        $('#switch').attr('href', '/style/stylesheet-pink-mode.css');
    });

    $('#light-theme').click(function(){
        $('#switch').attr('href', '/style/stylesheet-light-mode.css');

    });

});