import Citas from "../js/classes/Citas";

describe("Probar la Clase de citas", () => {
  const citas = new Citas();

  const id = Date.now();

  test("Agregar una nueva cita", () => {
    const citaObj = {
      id,
      mascota: "Foo",
      propietario: "Emmanuelle",
      telefono: "12344567",
      fecha: "10/10/2024",
      hora: "11:11",
      sintomas: "nada",
    };

    citas.agregarCita(citaObj);

    // Pueba
    expect(citas).toMatchSnapshot();
  });

  test("actualizar cita", () => {
    const citaActualizada = {
      id,
      mascota: "Simba",
      propietario: "Hanie",
      telefono: "12344567",
      fecha: "10/10/2024",
      hora: "11:11",
      sintomas: "nada",
    };

    citas.editarCita(citaActualizada);

    expect(citas).toMatchSnapshot();
  });

  test("Eliminar cita", () => {
    citas.eliminarCita(id);

    expect(citas).toMatchSnapshot();
  });
});
