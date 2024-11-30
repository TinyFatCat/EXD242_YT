const idleTimeLimit = 120000; // 1분 = 60000

let idleTimer;

function resetIdleTimer() {
  clearTimeout(idleTimer);
  // 타이머를 재설정
  idleTimer = setTimeout(() => {
    // 1분간 활동이 없으면 index.html로 리디렉션
    window.location.href = '../../index.html';
  }, idleTimeLimit);
}

// 사용자 활동 이벤트 리스너 등록
window.addEventListener('mousemove', resetIdleTimer); // 마우스 이동
window.addEventListener('keydown', resetIdleTimer); // 키보드 입력
window.addEventListener('click', resetIdleTimer); // 클릭

// 초기 타이머 설정
resetIdleTimer();
