$(document).ready(function() {
  // GSAP ScrollTrigger 플러그인 등록
  gsap.registerPlugin(ScrollTrigger);

  let $box = $('.box');

  // 1. jQuery UI: 드래그 기능 적용
  $box.draggable();

  // 2. GSAP & ScrollTrigger: 스크롤 시 애니메이션 적용
  gsap.to($box, {
    scrollTrigger: {
      trigger: $box,
      start: "top 80%", // 박스의 top이 뷰포트의 80% 지점에 올 때 시작
      markers: true     // 디버깅용 마커 (완료 후 제거)
    },
    x: 300,
    rotation: 360,
    duration: 1.5
  });
});