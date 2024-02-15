let result = document.querySelector("#result");
let show = document.querySelector("#show");

show.addEventListener("click", showPicture, false);

function showPicture(){
let resultImage = document.createElement("img");
resultImage.setAttribute(
  "src",
  "manateeees.jpeg"
);
result.appendChild(resultImage);
}