const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const menuLinks = menu.querySelectorAll("a");

// Función para abrir
const showMenu = () => {
	menu.classList.remove("opacity-0", "pointer-events-none");
	menu.classList.add("opacity-100");
};

// Función para cerrar
const hideMenu = () => {
	menu.classList.remove("opacity-100");
	menu.classList.add("opacity-0", "pointer-events-none");
};

// Abrir con hamburguesa
openMenu.addEventListener("click", showMenu);

// Cerrar con X
closeMenu.addEventListener("click", hideMenu);

// Cerrar al clicar cualquier link del menú
menuLinks.forEach((link) => {
	link.addEventListener("click", hideMenu);
});
