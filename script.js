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
            $(".img-background").html(`<img src="${response.hdurl}" alt="Foto do espaço hoje">`); //Header
            $(".titulo-ajax").html(`${response.title}`); //Titulo header
            $(".img-dia").html(`<img src="${response.hdurl}" class="img-hoje" alt="Foto do espaço hoje">`);

        },
        error: function(error){
            console.error(error);
        }
    });
}
imagemHoje();