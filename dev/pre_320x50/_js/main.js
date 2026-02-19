import { init, READ, size, stag } from "../../_common/js/common.js";
import { olg } from "../../_common/js/proline.js";

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
  tl.to(".t3", { opacity: 0, duration: 0.3 }, "+=2.5");

  tl.from([".cta", ".legalBtn", ".playsmart"], { duration: 0.3, opacity: 0 }, "+=.4");

  tl.add(olg());
}

const colors = ["00c748", "17cc46", "2ed145", "46d442", "5eda40", "76de3d", "8de23b", "a4e739", "bbeb37"];

const barOptions = {
  colors,
  verHor: "v",
  TOTAL: 9,
  WIDTH: 8,
  HEIGHT: 360,
  GAP: 10,
  id: "bars",
};

const barOptions2 = {
  ...barOptions,
  id: "bars2",
};

start_landscape({ y: size.h });

module.exports = {};
