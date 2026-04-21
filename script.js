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

// --- COFRE DE PROYECTOS ---
const cofre = document.querySelector('.cofre-proyectos');
const contenidoCofre = document.querySelector('.contenido-cofre');

cofre.addEventListener('click', () => {
  // Alterna la clase 'abierto' en ambos elementos
  cofre.classList.toggle('abierto');
  contenidoCofre.classList.toggle('abierto');
});