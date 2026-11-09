/* section04 · 화면에 보이면 등장 애니메이션 + 영상 재생 */
(function () {
  var sec = document.querySelector('.s4');
  var video = sec.querySelector('video');
  if (!('IntersectionObserver' in window)) { sec.classList.add('is-in'); return; }
  // 아이프레임 안에서도 '라이브클래스 화면' 기준으로 보이는지 판단
  new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        sec.classList.add('is-in');
        var p = video.play(); if (p && p.catch) p.catch(function () {});
      } else if (sec.classList.contains('is-in')) {
        video.pause();
      }
    });
  }, { threshold: 0.2 }).observe(sec);
})();
