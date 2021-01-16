/* Executes the functions only when the document is finished loading */
$(document).ready(function(){

    /* Loading navigation and footer in all html documents */
    $('#navigation').load('/elements/navigation.html');
    $('#footer').load('/elements/footer.html');

    /* Load JSON-encoded data for the article list */
    $.getJSON('articles.json', function(respons){
        console.log(respons)
        $.each(respons, function(i, article){
            console.log(article.title)
            
            /* assembles the html structure with the JSON strings for the article list (with the class article-list) */
            $('.article-list').append('<li><a href="' + article.url + '"><img class="w-100" src="' + article.img + '">' + article.title + '</a></li>')

            /* assembles the html structure with the JSON strings for the overview with all the articles (with the class all-articles) */
            $('.all-articles').append('<li><a href="' + article.url + '"><img class="w-50" src="' + article.img + '">' + article.title + '</a></li>')

        })
    })




});