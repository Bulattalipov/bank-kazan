import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {

  let animationBlock = document.querySelector('.js-animation-appearance')

  if (!animationBlock) return

  const header = document.querySelector('.header');

  const timeLine = gsap.timeline({
    paused: true,
    reversed: true
  })


  gsap.set(header, {
    yPercent: 8
  });
  gsap.set(".intro__box", {
    yPercent: 8
  })

  timeLine
    .add("start")
    .to(".intro__box", {
      yPercent: 0,
      opacity: 1,
      duration: 0.9
    }, "start")
    .to(header, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8
    }, "start")
    .to(".intro__items", {
      yPercent: 0,
      opacity: 1,
      duration: 0.5
    }, "start")


  gsap.fromTo(".guarantees__wrapper", {
    yPercent: 18,
    opacity: 0
  }, {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".guarantees__wrapper",
      smooth: true,
      multiplier: 1.6
    }
  })

  gsap.fromTo(".decor__wrapper", {
    yPercent: 18,
    opacity: 0
  }, {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".decor__wrapper",
      smooth: true,
      multiplier: 1.6
    }
  })

  gsap.fromTo(".stages__wrapper", {
    yPercent: 18,
    opacity: 0
  }, {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".stages__wrapper",
      smooth: true,
      multiplier: 1.6
    }
  })

  timeLine.play();
}
