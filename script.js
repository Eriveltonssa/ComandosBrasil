window.addEventListener('scroll', function () {
  var menuScroll = document.querySelector(`.nav`);
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menuScroll.style.top = '0px';
    menuScroll.style.transition = "0.3s"

  } else {
    menuScroll.style.top = '8vh';
   

  }
});

// _____________________________________
// nav-devide 411px

window.addEventListener('scroll', function () {
  var menuScroll = document.querySelector(`.nav-device`);
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menuScroll.style.top = '4vh';
    menuScroll.style.transition = "0.3s"

  } else {
    menuScroll.style.top = '3vh';
   

  }
});


// _____________________________________

// menu escondido



function menuEscondido() {
  var divMenu = window.document.getElementById(`menu-escondido`)
  var btnSeta = window.document.getElementById(`button-menu`)
  divMenu.style.animationName = "slide-from-left"
  divMenu.style.animationDuration = "1s"

  

  if (divMenu.style.display === "none") {
    divMenu.style.display = "block";
    btnSeta.innerHTML = "◀"
    
  } else {
    divMenu.style.display = "none";
    btnSeta.innerHTML = "▶"
  }
}


const body = document.body;

body.addEventListener('click', (event) => {
  const toggleButton = document.getElementById('button-menu');
  var divMenu = window.document.getElementById(`menu-escondido`)
  var btnSeta = window.document.getElementById(`button-menu`)


  // Verifica se o clique ocorreu fora do menu e fora do botão
  if (!divMenu.contains(event.target) && event.target !== toggleButton) {
    // Oculta o menu
    divMenu.style.display = 'none';
    btnSeta.innerHTML = "▶"

  }
});




// _____________________________________

// menu device 412px

function menuDevice() {
  var menuDevice = window.document.getElementById(`menu-device`)
  var btnMenuDevice = window.document.getElementById(`btn-menu-device`)
  menuDevice.style.animationName = "slide-from-top-device"
  menuDevice.style.animationDuration = "0.5s"
  

  if (menuDevice.style.display === "none") {
    menuDevice.style.display = "block";
    btnMenuDevice.innerHTML = "X"
    btnMenuDevice.style.backgroundColor = "red"

  } else {
    menuDevice.style.display = "none";
    btnMenuDevice.innerHTML = "Menu"
    btnMenuDevice.style.backgroundColor = "#00ff00"

  }
}


body.addEventListener('click', (event) => {
  const toggleButton = document.getElementById('btn-menu-device');
  var divMenu = window.document.getElementById(`menu-device`)
  var btnMenuDevice = window.document.getElementById(`btn-menu-device`)


  // Verifica se o clique ocorreu fora do menu e fora do botão
  if (!divMenu.contains(event.target) && event.target !== toggleButton) {
    // Oculta o menu
    divMenu.style.display = 'none';
    btnMenuDevice.innerHTML = "Menu"
    btnMenuDevice.style.backgroundColor = "#00ff00"

  }
});

















// _____________________________________

// mostrarCard (CODM)
function abrirCard() {
  var card = document.getElementById(`card-escondido-codm`)
  if (card.style.display === "none") {
    card.style.display = "block"
  } else {
    card.style.display = "none"
  }



}
function fecharCardCodm() {
  var card = document.getElementById(`card-escondido-codm`)
  if (card.style.display === "block") {
    card.style.display = "none"
  } else {
    card.style.display = "block"
  }
}


// _____________________________________
// novidades codm
function mostrarCard() {
  var card = document.getElementById(`card-novidades`)
  if (card.style.display === "none") {
    card.style.display = "block"
  } else {
    card.style.display = "none"
  }



}
function fecharCardCodmPasse() {
  var card = document.getElementById(`card-novidades`)
  if (card.style.display === "block") {
    card.style.display = "none"
  } else {
    card.style.display = "block"
  }
}


// _____________________________________
// novaTemporada()

function temporada() {

  var temporada = document.querySelector(`.passe-de-batalha-video`)


  if (temporada.style.display === "none") {

    temporada.style.display = "block"


  } else {
    temporada.style.display = "none"
  }
}




function fecharPasse() {
  var temporada = document.querySelector(`.passe-de-batalha-video`)
  var video = document.getElementById('iframe');

  if (temporada.style.display === "none" ) {
    temporada.style.display = "block"
    
  } else {
    temporada.style.display = "none"
   
  }



}






