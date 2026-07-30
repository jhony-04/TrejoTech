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
        "JHONY TREJO",
       /* "INGENIERO EN SISTEMAS",
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