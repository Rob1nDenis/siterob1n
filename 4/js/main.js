// Ajoutez ici votre JavaScript pour ajouter de la fonctionnalité
//const buttons = document.querySelectorAll("button");
//buttons.forEach((button) => {
//  button.addEventListener("click", (event) => {
//    alert("Réservation effectuée avec succès!");
//  });
//});
const destinations = document.querySelectorAll('.destination__card');
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const filterValue = this.dataset.filter;
    destinations.forEach(destination => {
      if (filterValue === 'all') {
        destination.style.display = 'flex';
      } else {
        if (!destination.classList.contains(filterValue)) {
          destination.style.display = 'none';
        } else {
          destination.style.display = 'flex';
        }
      }
    });
  });
});
$(document).ready(function() {
  $('#menu > li > a').click(function() {
    $('#menu ul').slideToggle(300);
  });
});