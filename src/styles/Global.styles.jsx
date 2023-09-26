const dark1 = "#1B2430",
  dark2 = "#51557E",
  dark3 = "#816797",
  dark4 = "#D6D5A8";
const light1 = "#CFF5E7",
  light2 = "#A0E4CB",
  light3 = "#59C1BD",
  light4 = "#0D4C92";

const dNavbg = { backgroundColor: dark1, height: "5rem" };
const dNavitem = { color: dark4, textDecoration: "none", fontSize: "1.2rem" };
const dNavbrand = { color: dark3, fontSize: "2rem", fontWeight: "600" };
const dHomebg = {
  backgroundColor: dark2,
  minHeight: "calc(100vh - 10rem)",
  paddingTop: "2rem",
};
const dHeaderbg = {
  backgroundColor: dark3,
  width: "600px",
  padding: "1rem",
  borderRadius: "1rem",
};
const dHeadercolor = { color: dark1 };
const dFooterbg = {
  backgroundColor: dark1,
  color: dark4,
  height: "5rem",
  padding: "1rem 3rem",
};

const lNavbg = { backgroundColor: light3, height: "5rem" };
const lNavitem = { color: dark1, textDecoration: "none", fontSize: "1.2rem" };
const lNavbrand = { color: dark2, fontSize: "2rem", fontWeight: "600" };
const lHomebg = {
  backgroundColor: light1,
  minHeight: "calc(100vh - 10rem)",
  paddingTop: "2rem",
};
const lHeaderbg = {
  backgroundColor: light2,
  width: "600px",
  padding: "1rem",
  borderRadius: "1rem",
};
const lHeadercolor = { color: light1 };
const lFooterbg = {
  backgroundColor: light3,
  height: "5rem",
  padding: "1rem 3rem",
};

export const global = {
  dNavbg: dNavbg,
  dNavitem: dNavitem,
  dNavbrand: dNavbrand,
  dHomebg: dHomebg,
  dHeaderbg: dHeaderbg,
  dHeadercolor: dHeadercolor,
  dFooterbg: dFooterbg,

  lNavbg: lNavbg,
  lNavitem: lNavitem,
  lNavbrand: lNavbrand,
  lHomebg: lHomebg,
  lHeaderbg: lHeaderbg,
  lHeadercolor: lHeadercolor,
  lFooterbg: lFooterbg,
};
