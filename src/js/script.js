
const botonMenu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-principal');
const links = document.querySelectorAll('.nav-principal a');



botonMenu.addEventListener('click', () => {
  nav.classList.toggle('activo'); 
  botonMenu.classList.toggle('activo'); 
});


links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('activo');
    botonMenu.classList.remove('activo');
  });
});

const cofre = document.querySelector('.cofre-proyectos');
const contenidoCofre = document.querySelector('.contenido-cofre');
const imagenCofre = document.querySelector('.icono-cofre');


const sonidoAbrir = document.querySelector('#sonido-abrir');
const sonidoCerrar = document.querySelector('#sonido-cerrar');

cofre.addEventListener('click', () => {
  const estaAbierto = cofre.classList.contains('abierto');
  

  cofre.classList.toggle('abierto');
  contenidoCofre.classList.toggle('abierto');
  
  if (!estaAbierto) {
  
    imagenCofre.src = 'public/img/cofre-abierto.png';
    imagenCofre.alt = 'Cofre de proyectos abierto';
    sonidoAbrir.currentTime = 0; 
    sonidoAbrir.play();
  } else {

    imagenCofre.src = 'public/img/cofre-cerrado.png';
    imagenCofre.alt = 'Cofre de proyectos cerrado';
    sonidoCerrar.currentTime = 0;
    sonidoCerrar.play();
  }
});