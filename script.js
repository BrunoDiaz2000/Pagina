document.getElementById('mostrarCalendario').addEventListener('click', function() {
    var calendarioContainer = document.getElementById('calendarioContainer');
    if (calendarioContainer.style.display === 'none') {
      calendarioContainer.style.display = 'block';
      // Aquí puedes agregar código para generar el calendario dinámicamente
    } else {
      calendarioContainer.style.display = 'none';
    }
  });