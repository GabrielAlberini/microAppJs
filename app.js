
function traerDatos() {

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', 'imgList.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {
            let numRandom = Math.round(Math.random()*10);
            let image1 = images[numRandom].url;
            
            $(".imgGame").attr('src', image1);
        }
    }
}