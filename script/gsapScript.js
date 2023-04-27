const tl = gsap.timeline();
tl.from(
  "#share .moving-txt",
  { duration: 1, opacity: 0, x: 0, y: 50 },
  { duration: 1, opacity: 0, x: 0, y: 50 }
); // 이전 트윈 종료 후 1초 뒤에 시작
tl.from(
  "#share .txt-container p",
  { duration: 1, opacity: 0, y: -50 },
  "-=0.3"
); // 이전 트윈 종료 1초 전에 시작
tl.from(
  "#share .txt-container a",
  { duration: 1, opacity: 0, y: -50 },
  "-=0.5"
); // 이전 트윈 시작될 때 동시에 실행
tl.from(".art00", { duration: 1, opacity: 0, y: 100, stagger: 0.2 });
tl.from(".art01", { duration: 1, opacity: 0, y: 100, stagger: 0.2 });
tl.from(".art02", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".art03", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".art04", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".art05", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".art06", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".art07", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".art08", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".art09", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".art10", { duration: 1, opacity: 0, y: 100 }, 1.5);
tl.from(".mobile", { duration: 1, opacity: 0, y: 150 }, 1.5);

// tl.to(object, { opacity: 0.5 }, "<1"); // 이전 트윈 시작 된 후 1초 뒤에 실행
// tl.to(object2, { x: 200 }, 1); // 타임라인 1초에 실행

// const func = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".img02",
//     pin: true,
//   },
// });

// func.from(".img00", { duration: 1, opacity: 0, y: 100, stagger: 0.2 });
// func.from(".img01", { duration: 1, opacity: 0, y: 100 });
// func.from(".img02", { duration: 1, opacity: 0, x: 100, y: 100 });
// func.from(".img03", { duration: 1, opacity: 0, x: 100, y: 100 });
// func.from(".img04", { duration: 1, opacity: 0, x: 100, y: 100 });

let func = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".img02",
    pin: true, // pin the trigger element while active
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
});

// add animations and labels to the timeline
func
  .addLabel("start")
  .from(".img00", { scale: 0.3, rotation: 45, autoAlpha: 0 })
  .addLabel("color")
  .from(".img01", { scale: 0.3, rotation: 45, autoAlpha: 0 })
  .addLabel("spin")
  .to(".img02", { rotation: 360 })
  .addLabel("end")
  .to(".img03", { rotation: 360 })
  .addLabel("end");

// let srp = gsap.timeline({
//   // yes, we can add it to an entire timeline!
//   scrollTrigger: {
//     trigger: "#srp .txt-container",
//     pin: true, // pin the trigger element while active
//     start: "top bottom", // when the top of the trigger hits the top of the viewport
//   },
// });

// srp.from("#srp .txt-container p", { duration: 1, opacity: 0, y: -50 }, "-=0.3"); // 이전 트윈 종료 1초 전에 시작
// srp.from("#srp .txt-container a", { duration: 1, opacity: 0, y: -50 }, "-=0.5"); // 이전 트윈 시작될 때 동시에 실행
// srp.from("#srp .art01", { duration: 1, opacity: 0, y: 100, stagger: 0.2 });
