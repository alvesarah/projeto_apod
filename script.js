function hamburguer(){
    document.querySelector(".hamburguer").addEventListener("click", () => 
        document.querySelector(".container").classList.toggle("show-menu")
    );
}
hamburguer();

function imagemHoje(){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=xo7gH5Pw64xhWZkhgw4rvdZiBB6IoCztrMynSwRh`,
        success: function(response){
            if(response.media_type == "image"){
                $(".img-background").html(`<img src="${response.hdurl}" class="img-hoje" alt="Foto do espaço hoje">`);
            } else {
                $(".img-background").html(`<img src="./imagens/background_temporario.jpg" class="img-hoje" alt="Foto do espaço hoje">`);
            }
            $(".titulo-ajax").text(`${response.title}`); //Titulo header
            $(".data-ajax").text(`${response.date}`); //Data section imagem-dia
            if(response.media_type == "image"){
                $(".img-dia").html(`<img src="${response.hdurl}" class="img-hoje" alt="Foto do espaço hoje">`);
            } else {
                $(".img-dia").html(`<video src="${response.hdurl}" autoplay controls class="img-hoje" alt="Foto do espaço hoje"></video`);
            }
            $(".descricao-ajax").text(`${response.explanation}`); //Data section imagem-dia
            $(".result-pesquisa").css("display", "none");
        },
        error: function(error){
            console.error(error);
        }
    });
}
imagemHoje();

function filtrarPorData(){
    $('button').click(function(){
        let data = $("#data").val();
        $.ajax({
            url: `https://api.nasa.gov/planetary/apod?api_key=xo7gH5Pw64xhWZkhgw4rvdZiBB6IoCztrMynSwRh&date=${data}`,
            success: function(response){
                $(".result-pesquisa").css("display", "block");
                $(".titulo-ajax-pesquisa").text(`${response.title}`); //Titulo header
                $(".titulo-ajax-pesquisa").css("color", 'white');
                $(".data-ajax-pesquisa").text(`${response.date}`); //Data section imagem-dia
                if(response.media_type == "image"){
                    $(".img-dia-pesquisa").html(`<img src="${response.hdurl}" class="img-hoje" alt="Foto do espaço hoje">`);
                } else {
                    $(".img-dia-pesquisa").html(`<iframe width="420" height="315" src="${response.url}?autoplay=1&mute=1"></iframe>`);
                }
                $(".descricao-ajax-pesquisa").text(`${response.explanation}`); //Data section imagem-dia
                $(".imagem-dia_descricao").css("display", "none"); //Data section imagem-dia
            },
            error: function(error){
                console.error(error);
                $(".titulo-ajax-pesquisa").text(`Não foi possivel encontrar essa data, tente uma que exista!`); //Titulo header
                $(".titulo-ajax-pesquisa").css("color", 'red'); //Titulo header
                $(".result-pesquisa").css("display", 'none');
                $(".btn-pesquisa").css("border-color", 'red');
            }
        });
    });
}
filtrarPorData();