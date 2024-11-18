window.addEventListener('load', function () {
  const mainvideo = document.getElementById('mainvid');
  const routevid = document.getElementById('routevid');
  const routeA = document.getElementById('routeA');
  const routeB = document.getElementById('routeB');

  // 2초 후에 비디오가 서서히 나타나도록 설정
  setTimeout(function () {
    mainvideo.style.opacity = '1';
  }, 1000); // 2000ms = 2초

  // 버튼 클릭 시 비디오 재생/일시정지
  refreshBtn.addEventListener('click', function () {
    if (mainvideo.paused) {
      mainvideo.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  });

  // 특정 시간에 두 개의 이미지를 표시
  const displayTime = 145; // 비디오가 10초 지점에 두 개의 이미지 표시 (초 단위)

  // YouTube API가 준비되었을 때 호출되는 함수
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      events: {
        onStateChange: onPlayerStateChange,
      },
    });
  }

  // YouTube 플레이어 상태가 변경될 때 호출되는 함수
  function onPlayerStateChange(event) {
    // 비디오가 재생 중일 때만 시간 체크
    if (event.data == YT.PlayerState.PLAYING) {
      setInterval(checkVideoTime, 1000); // 1초마다 현재 시간 체크
    }
  }

  // 비디오 메타데이터가 로드된 후 이벤트 리스너 추가
  mainvideo.addEventListener('timeupdate', function () {
    console.log('Current Time:', mainvideo.currentTime); // 현재 재생 시간 콘솔 로그

    if (
      mainvideo.currentTime >= displayTime &&
      mainvideo.currentTime < displayTime + 9
    ) {
      routevid.style.display = 'flex';
      routevid.style.opacity = 1;
      routevid.style.cursor = pointer;
    } else {
      routevid.style.display = 'none';
    }
  });

  // 이미지 클릭 시 페이지 이동
  routeA.addEventListener('click', function () {
    window.location.href = '../pages/routeA.html'; // 이미지 A 클릭 시 이동할 페이지
  });

  routeB.addEventListener('click', function () {
    window.location.href = '../pages/routeB.html'; // 이미지 B 클릭 시 이동할 페이지
  });
});
