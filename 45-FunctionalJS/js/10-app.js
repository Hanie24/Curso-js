const getName = (info) => ({
  showName() {
    console.log(`Nombre: ${info.name}`);
  },
});

const saveEmail = (info) => ({
  addEmail(email) {
    console.log(`Guardando email en: ${info.name}`);
    info.email = email;
  },
});

const getEmail = (info) => ({
  showEmail() {
    console.log(`Email: ${info.email}`);
  },
});

const getCompanie = (info) => ({
  showCompanie() {
    console.log(`Empresa: ${info.companie}`);
  },
});

const getPosition = (info) => ({
  showPosition() {
    console.log(`Posicion: ${info.position}`);
  },
});

// Composition
function Client(name, email, companie) {
  let info = {
    name,
    email,
    companie,
  };

  //   Object assing toma una funcion y la copia dentro de el objeto, en este caso del objeto Client
  return Object.assign(
    info,
    getName(info),
    saveEmail(info),
    getEmail(info),
    getCompanie(info)
  );
}

function Employee(name, email, position) {
  let info = {
    name,
    email,
    position,
  };

  return Object.assign(
    info,
    getName(info),
    saveEmail(info),
    getEmail(info),
    getPosition(info)
  );
}

const client = Client("Hanie", null, "Oye");
client.showName();
client.addEmail("hanie.0324");
client.showEmail();
client.showCompanie();

const employee = Employee("Hanie", null, "Programadora");
employee.showName();
employee.addEmail("sailor_121108");
employee.showEmail();
employee.showPosition();
