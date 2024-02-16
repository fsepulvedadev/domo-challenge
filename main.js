document.addEventListener("DOMContentLoaded", function () {
  var botonVolverArriba = document.getElementById("botonVolverArriba");

  window.addEventListener("scroll", function () {
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop + (document.documentElement.scrollTop || 0);

    if (scrollY > clientHeight / 2) {
      botonVolverArriba.style.display = "block";
    } else {
      botonVolverArriba.style.display = "none";
    }
  });

  botonVolverArriba.style.display = "none";

  botonVolverArriba.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  let boton = document.querySelector(
    "body > div.container-fluid.p-0.hero > div > nav > div > button"
  );
  console.log(boton);

  boton.addEventListener("click", () => {
    let iconoDeMenu = document.getElementsByClassName("navbar-toggler-icon");
    iconoDeMenu = iconoDeMenu[0];

    if (!boton.classList.contains("collapsed")) {
      boton.removeChild(iconoDeMenu);

      boton.innerHTML = `<img id="cerrar" width='26px' heigth='26px' src="/img/cerrar.svg" alt="logo-domo" class="cerrar" />`;

      let btnCerrar = document.getElementById("cerrar");
      btnCerrar.addEventListener("click", () => {
        console.log(iconoDeMenu[0]);
        boton.appendChild(iconoDeMenu);
        btnCerrar.remove();
      });
    }
  });
});
