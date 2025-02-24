function loadCat() {
    const catImage = document.querySelector(".cat-img");

    fetch("https://api.thecatapi.com/v1/images/search")
        .then(
            response => response.json()
        )
        .then(data => {
            catImage.src = data[0].url;
        })
        .catch(error => {
            console.error("Xii meu fi não vai da pra carregar a imagem não:", error);
        });
}

loadCat();
