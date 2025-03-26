const $getCatBtn = document.getElementById("get-btn");
const $idCat = document.getElementById("cat");
const $clickSound = document.getElementById("click-sound");
const $loadingInd = document.getElementById("loading-ind");
const $result = document.getElementById("result");

$getCatBtn.addEventListener("click", () => {
  $clickSound.play();
});

$getCatBtn.addEventListener("click", async () => {
  $loadingInd.style.display = "block";
  $idCat.style.visibility = "hidden";
  $result.classList.remove("show");

  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();

  $idCat.src = data[0].url;

  $idCat.onload = () => {
    $idCat.style.visibility = "visible";
    $loadingInd.style.display = "none";

    setTimeout(() => {
      $result.classList.add("show");
    }, 1000);
  };
});
