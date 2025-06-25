// Espera que todo el documento esté cargado antes de ejecutar
$(document).ready(function() {

  // Evento click: Cambiar el texto del título
  $("#cambiarTitulo").click(function() {
    $("#header").text("Título Cambiado con jQuery Por Hector Sanchez");
  });

  // Evento click: Ocultar el producto con efecto
  $("#ocultarProducto").click(function() {
    $(".producto").fadeOut();
  });

  // Evento click: Mostrar el producto con efecto
  $("#mostrarProducto").click(function() {
    $(".producto").fadeIn();
  });

  // Evento click: Agregar nuevo párrafo al contenedor
  $("#agregarParrafo").click(function() {
    $("#contenido").append("<p>Este es un párrafo agregado dinámicamente.</p>");
    $("#contenido").append("<h3>Sub titulo.</h3>");
  });

  // Evento change: Detectar cambio en input
  $("#inputCorreo").change(function() {
    alert("¡El valor del campo ha cambiado!");
  });

  // Evento hover: Aplicar y quitar clase con estilo
  $(".box").hover(
    function() {
      $(this).addClass("hovered");
    },
    function() {
      $(this).removeClass("hovered");
    }
  );

});
