// 이미지 URL 배열
const images = [
  './src/img/titlebg1.jpg',
  './src/img/titlebg2.jpg',
  './src/img/titlebg3.jpg',
];

let currentIndex = 0; // 현재 이미지 인덱스 초기화
let currentBackground = 0; // 현재 활성화된 배경 레이어

const background1 = document.getElementById('background1');
const background2 = document.getElementById('background2');
const backgrounds = [background1, background2];

function setOrderedBackgroundImage() {
  const nextImage = images[currentIndex];
  const activeLayer = backgrounds[currentBackground];
  const nextLayer = backgrounds[1 - currentBackground];

  // 다음 이미지 설정
  nextLayer.style.backgroundImage = `url('${nextImage}')`;
  nextLayer.classList.add('visible'); // 다음 레이어 보이게 함
  activeLayer.classList.remove('visible'); // 현재 레이어 숨김

  // 다음 인덱스로 이동, 마지막 이미지에 도달하면 처음으로 돌아감
  currentIndex = (currentIndex + 1) % images.length;
  currentBackground = 1 - currentBackground; // 레이어 전환
}

// 페이지 로드 시 첫 이미지 설정 및 10초마다 변경
window.onload = () => {
  setOrderedBackgroundImage(); // 첫 이미지 설정
  setInterval(setOrderedBackgroundImage, 8000); // 10초마다 이미지 변경
};
