main()

function main() {
    var container = document.querySelector('#contenedor');

    var img = document.createElement("img");
    img.setAttribute('src', 'img/videos/escena_part1.gif');
    img.setAttribute('class', 'img-main')
    container.appendChild(img);
    
    setTimeout(function(){
        img.setAttribute('src', 'img/videos/escena_part2.gif');
    }, 2500);
}