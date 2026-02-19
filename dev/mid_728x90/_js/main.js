import { init, olg, READ, stag, size } from "../../_common/js/common.js";

function start_landscape(barOptions, vh = { x: -size.w }) {
  let delay = 0.2;

  const tl = init();
  tl.add("start");
  // const barTL = barOptions.verHor==="h" ? animate_bars_vertical(barOptions, false) : animate_bars_horizontal(barOptions)

  // tl.add(barTL, "start")
  // console.log(delay);

  tl.add("start", delay);

  tl.from(".t1", stag(vh), "start");
  // tl.from('.logos', {duration:.3, opacity:0}, "end+=.3");
  tl.to(".t1", { duration: 0.3, opacity: 0 }, `+=${READ.t1}`);
  tl.from(".t2", stag(vh));
  tl.to(".t2", { duration: 0.3, opacity: 0 }, `+=${READ.t2}`);

  if (universalBanner.size === "300x250") {
    tl.add("bb");
    tl.to(".bars", { duration: 0.5, y: 119 }, "bb");
    tl.from([".bar-bottom", ".bar-top"], { duration: 0.3, opacity: 0 }, "bb");
  } else if (universalBanner.size === "728x90") {
    tl.add("bb");
    tl.to(".bars", { duration: 0.5, x: -350 }, "bb");
    tl.from([".bar-bottom", ".bar-top"], { duration: 0.3, opacity: 0 }, "bb");
  }

  tl.from(".t3", stag(vh));

  tl.from([".cta", ".legalBtn", ".playsmart"], { duration: 0.3, opacity: 0 }, "+=.4");

  tl.add(olg());
}

const colors = [
  "d3ef35",
  "c4ec37",
  "b3ea38",
  "a2e739",
  "92e33a",
  "82e03c",
  "71de3d",
  "61da40",
  "52d641",
  "41d343",
  "30d144",
  "20ce46",
  "10ca46",
];

const barOptions = {
  colors,
  verHor: "v",
  TOTAL: 8,
  WIDTH: 6,
  HEIGHT: 360,
  GAP: -19,
  id: "bars",
};

const barOptions2 = {
  ...barOptions,
  id: "bars2",
};

start_landscape(barOptions, { y: size.h });

module.exports = {};
