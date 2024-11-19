// Factory

class InputHTML {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  createInput() {
    return `<input type="${this.type}" name="${this.name}" id="${this.name}">`;
  }
}

class HTMLFactory {
  crearElement(type, name) {
    switch (type) {
      case "text":
        return new InputHTML("text", name);
      case "tel":
        return new InputHTML("tel", name);
      case "email":
        return new InputHTML("email", name);
      default:
        return;
    }
  }
}

const elementText = new HTMLFactory();
const inputText = elementText.crearElement("text", "name-cliente");
console.log(inputText.createInput());

const elementPhone = new HTMLFactory();
const inputPhone = elementPhone.crearElement("tel", "tel-cliente");
console.log(inputPhone.createInput());

const elementEmail = new HTMLFactory();
const inputEmail = elementEmail.crearElement("email", "email-cliente");
console.log(inputEmail.createInput());
