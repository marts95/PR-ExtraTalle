// Lista de imágenes
var images = [
  "./img/enterito.png",
  "./img/pantalon.png",
  "./img/vestidoNaranja.png",
  "./img/topRayas.png",
  "./img/pantalonVerde.png",
  "./img/topNegro.png",
  "./img/ubkbpt941.png",
  "./img/flores.png",
  "./img/halterTop.png",
  "./img/imagen.png",
  "./img/imagen.png",
  "./img/imagen.png",
   
  ];
  
    
    // Función para dividir las imágenes en grupos de dos para dispositivos móviles y grupos de tres para dispositivos de escritorio
    function chunkArray(array, chunkSize) {
      var chunks = [];
      for (var i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    }
    
    // Función para generar los slides y los indicadores
    function generateSlides(images) {
      var slidesPerView = window.innerWidth >= 768 ? 3 : 2; // Determina el número de slides por vista
      var chunks = chunkArray(images, slidesPerView); // Dividir en grupos según el número de slides por vista
      var innerHtml = '';
      var indicatorsHtml = '';
      chunks.forEach(function(chunk, index) {
        var activeClass = index === 0 ? 'active' : ''; // Marca el primer slide como activo
        innerHtml += '<div class="carousel-item ' + activeClass + '"><div class="row">';
        chunk.forEach(function(image) {
          innerHtml += '<figure class="col position-relative"><img src="' + image + '" class="d-block w-100 fotoPrenda" alt="...">';
          innerHtml += '<div class="capa"><div class="textoImagen">Prenda</div><button class="boton botonImagen">Ver más</button></div>';
          innerHtml += '</figure>';        
        });
        innerHtml += '</div></div>';
        
        indicatorsHtml += '<li data-bs-target="#carouselExample" data-bs-slide-to="' + index + '" class= "' + activeClass + '"></li>';
      });
      document.getElementById('carousel-inner').innerHTML = innerHtml;
      document.getElementById('carousel-indicators').innerHTML = indicatorsHtml;
    }
    
    // Llamar a la función inicial para generar los slides
    generateSlides(images);
    
    // Evento para actualizar los slides cuando se redimensiona la ventana
    window.addEventListener('resize', function() {
      generateSlides(images);
    });
    