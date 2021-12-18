const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const audio = document.getElementById('audio');
const sidebarButton = document.getElementById('sidebar-button');
const sidebar = document.querySelector('.sidebar');
const streamerDatos = document.querySelectorAll('.streamer-datos');
const titulo = document.querySelector('.streamers-conectados-cabecera-titulo');
const listaPadding = document.querySelector('.streamers-conectados-lista');

let value = true;
let valueButtomSidebar = true;



play.addEventListener('click', playVideo);
pause.addEventListener('click', pauseVideo);
audio.addEventListener('click', audioVideo);

function playVideo(){
    video.play()
}
function pauseVideo(){
    video.pause()
}
function audioVideo(){
    video.muted = false
}
video.addEventListener('click', playPauseVideo)

function playPauseVideo(){
    if(value){
        video.pause();
        value = false
    }else{
        video.play()
        value = true;
    }
}


sidebarButton.addEventListener('click', desplegarSidebar);
sidebarButton.addEventListener('click', mostrarTitulo)
sidebarButton.addEventListener('click', paddingSidebar)

function desplegarSidebar(){
    sidebar.classList.toggle('sidebar-desplegable');

    for (const key in streamerDatos) {
        if (Object.hasOwnProperty.call(streamerDatos, key)) {
            const element = streamerDatos[key];
            streamerDatos[key].classList.toggle('streamer-datos-mostrar');
            
        }
    }
    
}

function mostrarTitulo(){
    titulo.classList.toggle('streamers-conectados-cabecera-mostrar');
    if(valueButtomSidebar){
        sidebarButton.setAttribute('src','./icons/share-left.svg');
        valueButtomSidebar = false;
    }else{
        sidebarButton.setAttribute('src','./icons/share-rigth.svg');
        valueButtomSidebar = true;
    }
}
function paddingSidebar(){
    listaPadding.classList.toggle('streamers-conectados-lista-padding');
}


