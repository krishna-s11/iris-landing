const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-1",
    start: "50% 50%",
    end: "250% 50%",
    scrub: true,
    // markers:true,
    pin: true,
  },
});

tl.to(
  ".rotate-div",
  {
    rotate: 0,
    scale: 0.7,
  },
  "a"
);
tl.to(
  "#row-div-2",
  {
    marginTop: "5%",
  },
  "a"
);
tl.to(
  "#row-div-3",
  {
    marginTop: "-2%",
  },
  "a"
);
tl.to(
  "#row-div-4",
  {
    marginTop: "-8%",
  },
  "a"
);
tl.to(
  "#row-div-5",
  {
    marginTop: "-10%",
  },
  "a"
);
tl.to(
  ".overlay-div h1",
  {
    opacity: "1",
    delay: 0.2,
  },
  "a"
);
tl.to(
  ".overlay-div",
  {
    backgroundColor: "#000000b4",
  },
  "a"
);
tl.to(
  ".scrolling",
  {
    width: "100%",
  },
  "a"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "0% 70%",
    end: "50% 50%",
    scrub: true,
    // markers:true,
  },
});

tl2.to(".rounded-div-wrapper", {
  height: 0,
  marginTop: 0,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: "20% 50%",
    end: "100% 50%",
    // markers: true,
    scrub: 1,
  },
});
tl3.to(".content-2 .text-area-hover h1", {
  width: "100%",
});
tl3.to(".content-2 .text-area-hover h2", {
  delay: -0.4,
  width: "100%",
});

const blocks = document.querySelectorAll(".content-rght-part-4");
const wrapper = document.querySelector(".part-4-wrapper");

window.addEventListener("scroll", () => {
  const wrapperTop = wrapper.offsetTop;
  const scrollPos = window.scrollY - wrapperTop;
  const blockHeight = window.innerHeight * 0.95;

  blocks.forEach((block, i) => {
    const start = blockHeight * i;
    const end = blockHeight * (i + 1);

    if (scrollPos >= start && scrollPos < end) {
      block.classList.add("active");
    } else {
      block.classList.remove("active");
    }
  });

  // Add cir-part-4 animation
  const lastBlockStart = blockHeight * (blocks.length - 1);
  const cirElement = document.querySelector(".cir-part-4");

  if (cirElement) {
    if (scrollPos >= lastBlockStart) {
      const progress = Math.min(1, (scrollPos - lastBlockStart) / blockHeight);
      gsap.to(cirElement, {
        marginLeft: `${progress * 100}%`,
        rotation: progress * 360,
        duration: 0,
      });
    } else {
      gsap.to(cirElement, {
        marginLeft: "0%",
        rotation: 0,
        duration: 0,
      });
    }
  }
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-5",
    start: "20% 50%",
    end: "100% 50%",
    // markers: true,
    scrub: 1,
  },
});
tl5.to(".part-5 .text-area-hover h1", {
  width: "100%",
});
tl5.to(".part-5 .text-area-hover h2", {
  delay: -0.4,
  width: "100%",
});

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-6",
    start: "0% 70%",
    end: "15% 50%",
    // markers: true,
    scrub: 1,
  },
});
tl6.to(".rounded-div-wrapper-6", {
  height: "0%",
  marginTop: 0,
});

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-7",
    start: "50% 50%",
    end: "300% 50%",
    pin: true,
    // markers: true,
    scrub: 1,
  },
});
tl7.to("#demo", {
  bottom: "7%",
});
tl7.to(
  ".our-work-txt-div",
  {
    height: "60vh",
  },
  "height"
);
tl7.to(
  ".our-work-txt",
  {
    height: "60vh",
  },
  "height"
);
tl7.to(
  "#our",
  {
    left: "0%",
  },
  "height"
);
tl7.to(
  "#work",
  {
    right: "0%",
  },
  "height"
);
tl7.to(".scroll-img", {
  marginTop: "-300%",
});
