document.getElementById("menu-icon").onclick = function () {
    if (window.innerWidth < 768) {
        document.getElementById("sideBar").classList.toggle("default");
        document.getElementById("field-main").classList.toggle("default-main");
    }
    else {
        document.getElementById("sideBar").classList.toggle("active");
        document.getElementById("field-main").classList.toggle("active-main");
    }

}
