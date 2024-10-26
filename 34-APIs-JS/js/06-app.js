const exit = document.querySelector("#salida");
const microphone = document.querySelector("#microfono");

microphone.addEventListener("click", executeSpeechAPI);

function executeSpeechAPI() {
  const SpeechRecognition = webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.start();

  // Va a comenzar a grabar
  recognition.onstart = function () {
    exit.classList.add("mostrar");
    exit.textContent = "Escuchando...";
  };

  recognition.onspeechend = function () {
    exit.textContent = "Se dejo de grabar";
    recognition.stop();
  };

  // Convertira el audio en texto
  recognition.onresult = function (e) {
    console.log(e.results);

    const { confidence, transcript } = e.results[0][0];

    const speech = document.createElement("p");
    speech.innerHTML = `Grabando: ${transcript}`;

    const security = document.createElement("p");
    security.innerHTML = `Seguridad: ${parseInt(confidence * 100)}`;

    exit.appendChild(speech);
    exit.appendChild(security);
  };
}
