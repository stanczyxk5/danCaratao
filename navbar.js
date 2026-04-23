function toggleMenu() {
const nav = document.getElementById("navLinks");
nav.classList.toggle("active");
}


links.forEach(link => {
if (link.getAttribute("href") === current) {
link.classList.add("active");
}
});
