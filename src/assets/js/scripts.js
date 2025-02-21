
gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".bio span");
  const text = "Hola, mi nombre es Hervoy Ancacura. Desarrollador Backend Java, también me estoy aventurando en FrontEnd con Angular. Solo te puedo adelantar eso, si quieres saber mas de mi y de lo que hago, visita la seccion \"About me\".";

  const velocidadDeEscritura = 25; // Milisegundos por caracter
  const duracion = text.length * velocidadDeEscritura / 1000;

  const timeline = gsap.timeline();

  timeline.to(textElement, {
    text: text,
    duration: duracion,
    ease: "none"
  });
});
