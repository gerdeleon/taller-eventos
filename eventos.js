document.addEventListener('DOMContentLoaded', function() {
  const styleBtn = document.getElementById('styleBtn');
  const saludar = document.getElementById('saludar');

  styleBtn.addEventListener('click', function() {
    alert('Hola! Soy el div');
  });

  saludar.addEventListener('click', function(event) {
    event.stopPropagation(); 
    alert('Saludar');
  });
});
