function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}


const links = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


function updateTime() {
    const time = document.getElementById("time");
    if (time) {
        time.textContent = new Date().toLocaleTimeString();
    }
}

setInterval(updateTime, 1000);
updateTime();
