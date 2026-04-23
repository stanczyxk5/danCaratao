function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

const links = document.querySelectorAll(".nav-links a");
const page = window.location.pathname.split("/").pop();

links.forEach(a => {
    if (a.getAttribute("href") === page) {
        a.classList.add("active");
    }
});

function updateTime() {
    const el = document.getElementById("time");
    if (el) {
        el.textContent = new Date().toLocaleTimeString();
    }
}

setInterval(updateTime, 1000);
updateTime();
