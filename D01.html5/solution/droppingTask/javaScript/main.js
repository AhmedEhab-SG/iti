window.addEventListener("load", function () {
  allimages = document.images;
  imagesbottom = document.getElementsByClassName("imagebottom")[0];
  imagestop = document.getElementsByClassName("imagetop")[0];

  for (let i = 0; i < allimages.length; i++) {
    allimages[i].addEventListener("dragstart", startdrag);
    allimages[i].addEventListener("dragend", enddrag);
  }

  imagesbottom.addEventListener("drop", dropped);
  imagesbottom.addEventListener("dragenter", enterdrag);
  imagesbottom.addEventListener("dragover", overdrag);

  imagestop.addEventListener("dragleave", leavedrag);
});

function startdrag(e) {
  e.dataTransfer.setData("myimg", e.target.outerHTML);
}

function enddrag(e) {
  e.preventDefault();
  e.target.style.display = "none";
  allimages = Array.from(allimages).filter((img) => img !== e.target);

  if (allimages.length - 1 == 0) {
    addNewParagraph(imagestop, "New paragraph content");
    imagestop.style.boxShadow =
      "lightblue 5px 5px 5px, inset rgb(15, 188, 9) 20px 20px 60px, inset rgb(25, 186, 11) -20px -20px 60px";
    imagesbottom.style.boxShadow =
      "lightblue 5px 5px 5px, inset rgb(15, 188, 9) 20px 20px 60px, inset rgb(25, 186, 11) -20px -20px 60px";
  }
}

function dropped(e) {
  e.preventDefault();
  imagesbottom.innerHTML += e.dataTransfer.getData("myimg");
}

function enterdrag(e) {
  e.preventDefault();
}

function leavedrag(e) {
  e.preventDefault();
}

function overdrag(e) {
  e.preventDefault();
}

function addNewParagraph(section, content) {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = content;
  newParagraph.style.margin = "auto";
  newParagraph.style.fontWeight = "bold";
  section.appendChild(newParagraph);
}
