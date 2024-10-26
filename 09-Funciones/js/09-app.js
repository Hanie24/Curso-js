const reproductor = {
  sing: "",
  reproducir: (id) => console.log(`Reproduciendo canción id ${id}`),
  pausar: () => console.log("pausando..."),
  borrar: (id) => console.log(`Borrando canción con id: ${id}`),
  crearPlaylist: (nombre) => console.log(`Creando la Playlist ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo la Playlist ${nombre}`),

  set newSing(sing) {
    this.sing = sing;
    console.log(`Añadiendo ${sing}`);
  },

  get getSing() {
    console.log(`${this.sing}`);
  },
};

reproductor.newSing = "L O V E";
reproductor.getSing;
