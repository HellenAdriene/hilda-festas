// Usando links online das imagens
const images = [
    'https://cdn.pixabay.com/photo/2015/07/02/10/22/balloons-828648_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/06/23/14/party-2594244_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/05/08/balloons-1869730_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/06/06/17/32/birthday-2372792_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/12/17/16/31/party-3022290_1280.jpg',
  ];
  
  // Galeria onde vamos colocar as imagens
  const gallery = document.getElementById('gallery');
  
  // Div onde vão os balões animados
  const balloonsContainer = document.querySelector('.floating-balloons');
  
  // Função para embaralhar o array (Fisher-Yates)
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
  // Carregar imagens embaralhadas
  function loadImages() {
    const shuffledImages = shuffle(images);
    shuffledImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      gallery.appendChild(img);
    });
  }
  
  // Criar balões animados
  function createBalloons() {
    for (let i = 0; i < 15; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = Math.random() * 100 + 'vw';
      balloon.style.animationDuration = (10 + Math.random() * 10) + 's';
      balloon.style.opacity = Math.random();
      balloonsContainer.appendChild(balloon);
    }
  }
  
  // Inicializar página
  window.onload = function() {
    loadImages();
    createBalloons();
  }
  
  