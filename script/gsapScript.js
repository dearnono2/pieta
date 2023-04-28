/**
  애니메이션을 순차적으로 주려면 timeline을 사용하자!
  스크롤 트리거를 사용하려면 타임라인 함수 안에 작성하면 된다.
 */

// &
// section 1 share
const share = gsap.timeline();
share
  // 텍스트 컨테이너 요소들
  .from("#share .moving-txt", { duration: 1, opacity: 0, x: 0, y: 50 })
  .from("#share .txt-container p", { duration: 1, opacity: 0, y: -50 }, "-=0.3") // 이전 트윈 종료 0.3초 전에 시작
  .from("#share .txt-container a", { duration: 1, opacity: 0, y: -50 }, "-=0.5")
  // 이미지 컨테이너 요소들
  .from(".art00", { duration: 0.5, opacity: 0, y: 100 }, 1.5)
  .from(".art01", { duration: 0.5, opacity: 0, y: 100 }, 1.5)
  .from(".art02", { duration: 0.5, opacity: 0, y: 100 }, 1.5)
  .from(".art03", { duration: 0.5, opacity: 0, y: 100 }, 1.5)
  .from(".art04", { duration: 1, opacity: 0, y: 100 }, 1.5)
  .from(".art05", { duration: 1, opacity: 0, y: 100 }, 1.5)
  .from(".art06", { duration: 1, opacity: 0, y: 100 }, 1.5)
  .from(".art07", { duration: 0.5, opacity: 0, y: 100 }, 1.5)
  .from(".art08", { duration: 0.5, opacity: 0, y: 100 }, 1.5)
  .from(".art09", { duration: 0.5, opacity: 0, y: 100 }, 1.5)
  .from(".art10", { duration: 0.5, opacity: 0, y: 100 }, 1.5)
  .from(".mobile", { duration: 1, opacity: 0, y: 150 }, 1.5);

// &&
// section2 func
const func = gsap.timeline({
  scrollTrigger: {
    trigger: ".img02",
    pin: true, // pin the trigger element while active
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "+=800", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
});
func
  .addLabel("start")
  .from(".img00", { scale: 0.3, rotation: 45, autoAlpha: 0 })
  .from(".img01", { scale: 0.3, rotation: 45, autoAlpha: 0 })
  .addLabel("spin")
  .to(".img02", { rotation: 360 })
  .addLabel("end")
  .to(".img03", { rotation: 360 })
  .addLabel("end")
  .to(".img04", { x: 100, y: -200, rotation: 90 })
  .addLabel("end");

// &&&
// section 3 srp
const srp = gsap.timeline({
  scrollTrigger: {
    trigger: "#srp .txt-container",
    toggleActions: "restart none reverse none",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "+=500",
  },
});
srp
  .from("#srp .txt-container h2", { duration: 1, opacity: 0, y: -50 })
  .from("#srp .txt-container p", { duration: 1, opacity: 0, y: -50 }, "-=0.3")
  .from("#srp .detailViewBtn", { duration: 1, opacity: 0, y: -50 }, "-=0.5");

// &&&&
// section 4 down-app
const downApp = gsap.timeline({
  scrollTrigger: {
    trigger: "#down-app .bg",
    toggleActions: "restart",
    start: "top bottom",
    // end: "+=500",
  },
});
downApp
  .from("#down-app .txt-container h2", { duration: 1, opacity: 0, x: -100 })
  .from(
    "#down-app .txt-container p",
    { duration: 1, opacity: 0, x: -100 },
    "-=0.5"
  )
  .from(
    "#down-app .txt-container .store-box",
    {
      duration: 1,
      opacity: 0,
      x: -100,
    },
    "<"
  );

gsap.to("#down-app .img", {
  scrollTrigger: {
    trigger: "#down-app .bg",
    scrub: 3,
  },
  duration: 0.8,
  x: 100,
  y: -200,
  opacity: 1,
});
