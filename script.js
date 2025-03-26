const $getCatBtn = document.getElementById("get-btn");
const $idCat = document.getElementById("cat");

$getCatBtn.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((response) => {
      console.log(response);

      const randomCat = response[0].url;
      $idCat.src = randomCat;
    });
});
