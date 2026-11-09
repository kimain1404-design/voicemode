/* VOICE PT — Section 01: [ ] 파형 → 인생 → 직업 → 대학 반복, 첫 등장 모션 */
(function () {
  var root = document.documentElement;
  var items = [].slice.call(document.querySelectorAll(".s1__item"));
  var HOLD = [2600, 1900, 1900, 1900]; // 파형, 인생, 직업, 대학 (ms)
  var idx = 0,
    timer = null;
  function show(n) {
    var prev = items[idx];
    prev.classList.remove("is-on");
    prev.classList.add("is-out");
    setTimeout(function () {
      prev.classList.remove("is-out");
    }, 500);
    idx = n;
    var next = items[idx];
    setTimeout(function () {
      next.classList.add("is-on");
    }, 120);
    timer = setTimeout(function () {
      show((idx + 1) % items.length);
    }, HOLD[idx]);
  }
  function start() {
    clearTimeout(timer);
    items.forEach(function (el, i) {
      el.classList.remove("is-on", "is-out");
    });
    idx = 0;
    items[0].classList.add("is-on");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.add("play");
        setTimeout(function () {
          root.classList.add("settled");
        }, 1500);
      });
    });
    timer = setTimeout(function () {
      show(1);
    }, HOLD[0] + 900);
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    HOLD = [3000, 2400, 2400, 2400];
  }
  start();
})();
