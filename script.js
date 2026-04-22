// Agarra el botón y el menú del DOM
const botonMenu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-principal');
const links = document.querySelectorAll('.nav-principal a');


// Cuando dan clic a la hamburguesa
botonMenu.addEventListener('click', () => {
  nav.classList.toggle('activo'); // Muestra/oculta el menú
  botonMenu.classList.toggle('activo'); // Anima la hamburguesa a X
});

// Cierra el menú cuando dan clic a un link
links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('activo');
    botonMenu.classList.remove('activo');
  });
});
// --- COFRE DE PROYECTOS CON SONIDO ---
const cofre = document.querySelector('.cofre-proyectos');
const contenidoCofre = document.querySelector('.contenido-cofre');
const imagenCofre = document.querySelector('.icono-cofre');

// Agarra los audios del DOM
const sonidoAbrir = document.querySelector('#sonido-abrir');
const sonidoCerrar = document.querySelector('#sonido-cerrar');

cofre.addEventListener('click', () => {
  const estaAbierto = cofre.classList.contains('abierto');
  
  // Alterna las clases para CSS
  cofre.classList.toggle('abierto');
  contenidoCofre.classList.toggle('abierto');
  
  if (!estaAbierto) {
    // Si estaba cerrado y ahora se abre
    imagenCofre.src = 'public/img/cofre-abierto.png';
    imagenCofre.alt = 'Cofre de proyectos abierto';
    sonidoAbrir.currentTime = 0; // Rebobina por si se spamea el clic
    sonidoAbrir.play();
  } else {
    // Si estaba abierto y ahora se cierra
    imagenCofre.src = 'public/img/cofre-cerrado.png';
    imagenCofre.alt = 'Cofre de proyectos cerrado';
    sonidoCerrar.currentTime = 0;
    sonidoCerrar.play();
  }
});