//menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    }
    else {
        x.className = "";
    }
}

//menu responsive seleccionado
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    var x = document.getElementById("nav");
    x.className = "";
    link.className = "seleccionado";
}


//barra de habilidades
window.onscroll = function () {
    efectoHabilidades()
};

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        document.getElementById("c").classList.add("barra-progreso1");
        document.getElementById("html").classList.add("barra-progreso2");
        document.getElementById("java").classList.add("barra-progreso3");
        document.getElementById("js").classList.add("barra-progreso4");
        document.getElementById("angular").classList.add("barra-progreso5");
        document.getElementById("sql").classList.add("barra-progreso6");
    }
}


//MODAL PROYECYOS

document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos
    var modal = document.getElementById("myModal");
    var proyectos = document.querySelectorAll(".proyecto");
    var closeBtn = document.querySelector(".closeBtn");

    var modalTitle = document.getElementById("modal-title");
    var modalPrincipalTitle = document.getElementById("modal-principalTitle");
    var modalLink = document.getElementById("modal-link");
    var modalSite = document.getElementById("modal-site");
    var modalDescription = document.getElementById("modal-description");
    var modalImage = document.getElementById("modal-image");
    var siteContainer = modalSite.parentElement; //contenedor para sitio

    // Abro el modal al hacer clic en cualquier proyecto
    proyectos.forEach(function (proyecto) {
        proyecto.addEventListener("click", function () {
            var title = proyecto.getAttribute("data-title");
            var principalTitle = proyecto.getAttribute("data-principalTitle");
            var link = proyecto.getAttribute("data-link");
            var site = proyecto.getAttribute("data-site");
            var description = proyecto.getAttribute("data-description");
            var image = proyecto.getAttribute("data-image");
            
            if (site) {
                modalSite.href = site;
                siteContainer.style.display = "block"; 
            } else {
                siteContainer.style.display = "none"; // Ocultar el contenedor del enlace
            }


            modalTitle.textContent = title;
            modalPrincipalTitle.textContent = principalTitle;
            modalLink.href = link;
            modalSite.href = site;
            modalDescription.textContent = description;
            modalImage.src = image;

            modal.style.display = "block";
        });
    });

    // Cierro el modal al hacer clic en el botón de cerrar 
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
