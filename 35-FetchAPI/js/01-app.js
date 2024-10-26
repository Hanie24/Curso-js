const uploadTxtBtn = document.querySelector("#cargarTxt");
uploadTxtBtn.addEventListener("click", getData);

function getData() {
  const url = "data/datos.txt";
  fetch(url)
    .then((result) => {
      console.log(result);

      return result.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
