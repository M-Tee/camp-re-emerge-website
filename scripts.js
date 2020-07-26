let textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

let subtitle = document.querySelector('.sub-title');
subtitle.innerHTML = subtitle.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.sub-title .letters',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 5000,
    delay: (el, i) => 1500 + 30 * i
  });

let homeContent = document.querySelector('.ml12');
homeContent.innerHTML = homeContent.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letters',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 2500 + 30 * i
  });
  // .add({
  //   targets: '.ml12 .letter',
  //   translateX: [0, 10],
  //   easing: "easeInExpo",
  //   duration: 1100,
  //   delay: (el, i) => 100 + 30 * i
  // })
