const modal = document.getElementById("modal");
const modalImage = modal.querySelector("img")
const caption = document.getElementById("caption");
const span = document.getElementById("close");
const allImages = document.querySelectorAll(".row .column img")

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