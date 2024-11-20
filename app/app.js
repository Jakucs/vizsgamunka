$(document).ready(function() {
    // jQuery kód itt
    console.log("jQuery működik!");
});


/*CSAK A HEADER RÉSZ OVERLAY-E MIATTI JS KÓD: */ 
const modal = document.getElementById('exampleModal');
const secondModal = document.getElementById('exampleModalToggle2');
const headerOverlay = document.getElementById('header-overlay');

modal.addEventListener('show.bs.modal', () => {
  headerOverlay.style.display = 'block';
});

modal.addEventListener('hidden.bs.modal', () => {
  // Csak akkor rejtsd el az overlay-t, ha a második modal nem aktív
  if (!secondModal.classList.contains('show')) {
    headerOverlay.style.display = 'none';
  }
});

secondModal.addEventListener('show.bs.modal', () => {
  headerOverlay.style.display = 'block'; // Maradjon látható az overlay
});

secondModal.addEventListener('hidden.bs.modal', () => {
  headerOverlay.style.display = 'none'; // Ekkor rejtse el az overlay-t
});
//</nav>zárótag előtti div a headerOverlay...
/*HEADER LÉC OVERLAY JS VÉGE*/