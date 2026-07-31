particlesJS("particles-js", {
  particles: {
    number: {
      value: 70
    },
    color: {
      value: "#175acd"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    },
    line_linked: {
      enable: true,
      color: "#0839ab",
      opacity: 0.3
    }
  }
});

AOS.init({
    duration: 1000,
    once: true
});

new Typed("#nombre", {
    strings: [
       /*  "JHONY TREJO",
       "INGENIERO EN SISTEMAS",
        "DESARROLLADOR WEB",
        "ESPECIALISTA EN FIBRA ÓPTICA"*/
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
});


window.addEventListener("load", ()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},800);

},2000);

});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const contadores = document.querySelectorAll(".contador");

const iniciarContadores = () => {
  contadores.forEach(contador => {
    const objetivo = +contador.dataset.target;
    let numero = 0;

    const actualizar = () => {
      const incremento = Math.ceil(objetivo / 80);

      numero += incremento;

      if (numero >= objetivo) {
        contador.innerText = objetivo + "+";
      } else {
        contador.innerText = numero;
        requestAnimationFrame(actualizar);
      }
    };

    actualizar();
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      iniciarContadores();
      observer.disconnect();
    }
  });
});

const estadisticas = document.querySelector("#estadisticas");

if (estadisticas) {
    observer.observe(estadisticas);
}

const menu = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector("nav ul");

menu.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
});


emailjs.init("3jZn9JulRHy5KfVo9");

const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        "service_6tdbh0a",
        "template_go9xy6z",
        this
    ).then(() => {

        alert("✅ Mensaje enviado correctamente.");

        formulario.reset();

    }).catch((error)=>{

        alert("❌ Ocurrió un error al enviar.");

        console.log(error);

    });

});