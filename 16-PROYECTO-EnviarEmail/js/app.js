// Asegura que todo el HTML haya sido descargado
document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#asunto");
  const inputMessage = document.querySelector("#mensaje");
  const form = document.querySelector("#formulario");
  const btnSubmit = document.querySelector("#formulario button[type='submit']");
  const btnReset = document.querySelector("#formulario button[type='reset']");
  const spinner = document.querySelector("#spinner");

  // Asignar eventos
  inputEmail.addEventListener("input", validate);

  inputSubject.addEventListener("input", validate);

  inputMessage.addEventListener("input", validate);

  form.addEventListener("submit", sendEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();

    resetForm();
  });

  function sendEmail(e) {
    e.preventDefault();
    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");

      resetForm();

      //   Crear una alerta
      const successAlert = document.createElement("P");
      successAlert.classList.add(
        "bg-green-500",
        "text-white",
        "p-1",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bols",
        "text-sm",
        "uppercase"
      );
      successAlert.textContent = "Mensaje enviado correctamente";
      form.appendChild(successAlert);

      setTimeout(() => {
        successAlert.remove();
      }, 3000);
    }, 3000);
  }

  function validate(e) {
    if (e.target.value.trim() === "") {
      alertShow(
        `El campo ${e.target.id}, es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      checkEmail();
      //   Detiene la ejecución del código
      return;
    }

    if (e.target.id === "email" && !validateEmail(e.target.value)) {
      alertShow("El email nos es valido", e.target.parentElement);
      email[e.target.name] = "";
      checkEmail();
      return;
    }

    cleanAlert(e.target.parentElement);

    // Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase();

    // Comprobar el objerto de email
    checkEmail();
  }

  function alertShow(message, reference) {
    cleanAlert(reference);

    // Generar alerta en html
    const error = document.createElement("P");
    error.textContent = message;
    error.classList.add(
      "bg-red-600",
      "text-white",
      "p-1",
      "text-center",
      "alert"
    );

    // Mostrar error en el formulario
    reference.appendChild(error);
  }

  function cleanAlert(reference) {
    // Comprueba si ya existe la alerta
    const alert = reference.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }

  function validateEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //   regresa true o false
    const result = regex.test(email);
    return result;
  }

  function checkEmail() {
    // Si alguno de los elementos del form tiene un campo vacio, retorna true
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }

    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetForm() {
    // Reiniciarl el objeto email
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    form.reset();
    checkEmail();
  }
});
