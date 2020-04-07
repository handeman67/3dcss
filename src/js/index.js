const CL = (c) => console.log("consold " + c + " = " + c);

const loadsheetSpot = () => {
  let head = document.getElementsByTagName('head')[0];
  let nav = document.createElement('link');
  let styled = document.createElement('link');
  let house = document.createElement('link');
  styled.setAttribute('href', "src/css/style.css");
  nav.setAttribute('href', "src/css/nav.css");
  house.setAttribute('href', "src/css/houseClose.css");
  head.append(nav, styled, house);
  styled.id = "styled";
  styled.rel = "stylesheet";
  nav.id = "nav";
  nav.rel = "stylesheet";
  house.id = "house";
  house.rel = "stylesheet";

  return head
}




const sheets = [
  'src / css / nav.css', 'src / css / houseClose.css', 'src/css/houseClose.css', 'src / css / style.css'
]
const vs = document.body.getElementsByTagName("input"); //?
const Scene = document.all.scene.style;

const change = (x) => {
  const INput = document.querySelectorAll("input");
  const labelOutput = document.querySelectorAll("p");
  const input = [];

  const setArrValue = (e, f) => {
    for (let i in e) {
      input.push((e[i].innerText = f[i].value));
    }
  };

  const setText = (Value, Output) => {
    for (let n in Value) {
      x = Value[n].value;
      Output[n].innerText = x;
    }
  };

  setArrValue(labelOutput, INput); //?
  setText(INput, labelOutput);

  setVars = (e, f, g) => {
    X = e + "deg";
    Y = f + "deg";
    Z = g + "deg";
    return vsValue = [X, Y, Z];
  };
  const rangeX = vs.namedItem("rangeX").value;
  const rangeY = vs.namedItem("rangeY").value;
  const rangeZ = vs.namedItem("rangeZ").value;


  let r = setVars(rangeX, rangeY, rangeZ);

  Scene.transform =
    "rotateX(" + r[0] + ") rotateY(" + r[1] + ") rotateZ(" + r[2] + ")";

};
const zoom = document.getElementsByTagName("input");
zoom.namedItem("zoom").value;
Scene.perspective = "" + zoom + "px";

// pull classes in from dom
function toggle() {
  if (house.href.match("src/css/houseOpen.css")) {
    house.href = "src/css/houseClose.css";
  } else {
    house.href = "src/css/houseOpen.css";
  }
}