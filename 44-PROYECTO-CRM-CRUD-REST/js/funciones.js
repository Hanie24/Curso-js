export function showAlert(message) {
  const alert = document.querySelector(".alert");

  if (!alert) {
    const alert = document.createElement("P");
    alert.classList.add(
      "bg-red-100",
      "alert",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "mas-w-lg",
      "mx-auto",
      "text-center",
      "mt-6"
    );

    alert.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${message}</span>
    `;

    const form = document.querySelector("#formulario");

    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

export function validate(obj) {
  return !Object.values(obj).every((input) => input !== "");
}
