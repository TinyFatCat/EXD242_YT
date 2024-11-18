window.addEventListener('load', function () {
  const mainvideo = document.getElementById('mainvideo');
  const routevid = document.getElementById('routevid');
  const routeA = document.getElementById('routeA');
  const routeB = document.getElementById('routeB');

  // 버튼 클릭 시 비디오 재생/일시정지
  refreshBtn.addEventListener('click', function () {
    if (mainvideo.paused) {
      mainvideo.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  });
});
