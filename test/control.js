// Aplica fallback a TODAS las imágenes de la página
document.querySelectorAll("img").forEach(img => {
  const fallbackHTML = `
        <div class="fallback">
          <img src="../img/control/control-err-img.png" alt="Imagen alternativa" style="width: padding-block: 10px;">
        </div>
      `;

  const mostrarFallback = () => {
    const temp = document.createElement("div");
    temp.innerHTML = fallbackHTML;
    img.replaceWith(temp.firstElementChild);
  };

  // Si la imagen falla al cargar
  img.onerror = mostrarFallback;

  // Si el src está vacío
  if (!img.getAttribute("src") || img.getAttribute("src") === "...") {
    mostrarFallback();
  }
});

// Esperar a que todo el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  var promoModal = new bootstrap.Modal(document.getElementById('promoModal'));
  //promoModal.show();
});