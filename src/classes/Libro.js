export default class Libro {
  isbn;
  titulo;
  autor;
  genero;
  editar;

  static items = [];

  static {
    if (localStorage.getItem("libros")) {
      this.items = JSON.parse(localStorage.getItem("libros"))
    }
  }

  static save() {
    localStorage.setItem("libros", JSON.stringify(this.items))
  }

  constructor(isbn, titulo, autor, genero) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.editar = false;
  }

  static crear(isbn, titulo, autor, genero) {
    const libro = new Libro(isbn, titulo, autor, genero);
    Libro.items.push(libro);
    Libro.save()

    return libro;
  }

  static eliminar(isbn) {
    Libro.items = Libro.items.filter(function (p) {
      return p.isbn !== isbn;
    });
    Libro.save()
  }

  static editar(isbn, nuevoTitulo, nuevoAutor, nuevoGenero) {
  const libro = this.items.find((l) => l.isbn === isbn);
  if (libro) {
    libro.titulo = nuevoTitulo;
    libro.autor = nuevoAutor;
    libro.genero = nuevoGenero;
    this.save();
  }
}

}
