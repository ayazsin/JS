//When you click switch-on, show lamba-on.
document.querySelector(".on").onclick = function () {
  document.querySelector(".img").src = "./img/lamba_on.gif";
};
//When you click switch-off, show lamba-off.
document.querySelector(".off").onclick = function () {
  document.querySelector(".img").src = "./img/lamba_off.gif";
};

//when mouse come over, show lamba-on
document.querySelector(".img").addEventListener("mouseover", () => {
  document.querySelector(".img").src = "./img/lamba_on.gif";
});

document.querySelector(".img").addEventListener("mouseout", function () {
  document.querySelector(".img").src = "./img/lamba_off.gif";
});

//When you type it convert to uppercase
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");

  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

const lastDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const t1 = document.createTextNode("Programming Languages");
h1.appendChild(t1);
lastDiv.after(h1);
h1.className = "new-h1";

document.querySelector(".add").onclick = function () {
  //take a list
  const list = document.querySelector(".list");
  const line = document.querySelector(".language").value;
  const newList = document.createElement("li");
  const textNode = document.createTextNode(line);
  newList.appendChild(textNode);
  list.appendChild(newList);
};

document.querySelector(".dlt").onclick = function () {
  const list = document.querySelector(".list");
  list.removeChild(list.lastElementChild);
};
