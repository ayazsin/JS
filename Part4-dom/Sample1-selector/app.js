// ======================================================
//                   GETELEMENTBYID()
// ======================================================

const paragraph = document.getElementById("par");
paragraph.style.backgroundColor = "black";
paragraph.style.color = "white";
paragraph.style.fontSize = "20px";

const button = document.getElementById("btn");
button.style.width = "100px";
button.style.height = "30px";
button.style.backgroundColor = "black";
button.style.color = "yellow";
button.style.fontSize = "18px";
button.innerHTML = "Find";

// ======================================================
//                   GETELEMENTSBYTAGNAME()
// ======================================================

const image = document.getElementsByTagName("img");
console.log(image[0]);
image[0].style.width = "300px";
image[0].style.height = "300px";
image[1].style.border = "3px solid red";

// ======================================================
//                   GETELEMENTSBYCLASSNAME()
// ======================================================

const h2 = document.getElementsByClassName("h2");
h2[0].style.color = "red";
h2[0].style.textAlign = "center";

// ======================================================
//                   QUERYSELECTOR()
// ======================================================

const title = document.querySelector(".title");
title.innerHTML = "DOM Selector 👀";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(green, blue)";

// ======================================================
//                        EVENTS
// ======================================================
// ÖRNEK-1 (Mouse Over, Mouse Out )
//-------------------------------------------------------

document.querySelector(".h2").onmouseover = function () {
  const h2 = document.querySelector(".h2");
  h2.style.color = "white";
  h2.style.backgroundColor = "black";
};

document.querySelector(".h2").onmouseout = function () {
  const h2 = document.querySelector(".h2");
  h2.style.color = "black";
  h2.style.backgroundColor = "transparent";
};

// addEventListener()
document.querySelector("#btn").addEventListener("mouseover", function () {
  document.querySelector("#btn").style.width = "150px";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
  document.querySelector("#btn").style.width = "100px";
});
