let botao = $('#botao');
let titulo = $('#titulo');
let img = $('#img');
let video = $('#video');

botao.on('click', function () {
    pesquisar();
});

function pesquisar() {
    let date = $('#data').val();
    
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=j7wma1QEQdzhPOsRug8TglGQspEbZDNvIAy8ABAp&date=${date}`,
        type: "GET",
        contentType: "application/json",

        success: function (response) {
            titulo.html(`${response.title}`);
            if (response.media_type == "image") {
                img.attr("src", response.url);
                img.css("display", "block");
                video.css("display", "none");
            } else {
                video.attr("src", response.url);
                video.css("display", "block");
                img.css("display", "none");
            }
            return response;
        }
    })
}