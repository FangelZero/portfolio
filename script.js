const modal = document.getElementById("modal");
const modalImage = modal.querySelector("img")
const caption = document.getElementById("caption");
const span = document.getElementById("close");
const allImages = document.querySelectorAll(".row .column img")

const $ = (i) => document.querySelector(i);

allImages.forEach(img => {
  if (!img || img == undefined || img == null || !img instanceof HTMLImageElement) return;
  if (img instanceof HTMLImageElement) {
    img.onclick = function () {
      modal.style.display = "block";
      modalImage.src = img.src
      caption.textContent = img.alt
    }
  }
})

span.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";
modalImage.onclick = () => modal.style.display = "none";


//SVG logic
const portfolio = $("#Portfolio")
const aboutMe = $("#About_me")
const comms = $("#Comms")

const changeColor = (element) => {
  if (element instanceof SVGPathElement) element.style.fill = "#AE7435"
}
const changeBackColor = (element) => {
  if (element instanceof SVGPathElement) element.style.fill = "#51414b"
}

const makeListener = (element) => {
  element.parentElement.addEventListener("mouseenter", (ev) => {
    for (const child of element.children) changeColor(child)
  })
  element.parentElement.addEventListener("mouseleave", (ev) => {
    for (const child of element.children) changeBackColor(child)
  })
}

makeListener(portfolio)
makeListener(aboutMe)
makeListener(comms)

for (const child of portfolio.children) {
  if (child instanceof SVGPathElement) {
    child.addEventListener("mouseenter", (ev) => {
      for (const child of portfolio.children) changeColor(child)
    })
    child.addEventListener("mouseleave", (ev) => {
      for (const child of portfolio.children) changeBackColor(child)
    })
  }
}

for (const child of aboutMe.children) {
  if (child instanceof SVGPathElement) {
    child.addEventListener("mouseenter", (ev) => {
      for (const child of aboutMe.children) changeColor(child)
    })
    child.addEventListener("mouseleave", (ev) => {
      for (const child of aboutMe.children) changeBackColor(child)
    })
  }
}

for (const child of comms.children) {
  if (child instanceof SVGPathElement) {
    child.addEventListener("mouseenter", (ev) => {
      for (const child of comms.children) changeColor(child)
    })
    child.addEventListener("mouseleave", (ev) => {
      for (const child of comms.children) changeBackColor(child)
    })
  }
}

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
