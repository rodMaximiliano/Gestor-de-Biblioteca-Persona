import { useState } from "react"
import Libro from "./classes/Libro";

import Titulo from "./components/Header"
import Tabla from "./components/TablaLibro"
import Formulario from "./components/FormularioLibro"
import Piepagina from "./components/Footer";


function App() {
  const [libro, setLibro] = useState(Libro.items)
  const [libroEditando, setLibroEditando] = useState(null);

  function ingresarLibro(isbn, titulo, autor, genero) {
    Libro.crear(isbn, titulo, autor, genero)
    setLibro([...Libro.items])
  }

  function eliminarLibro(isbn) {
    console.log("Eliminando libro, su isbn es: ", isbn)
    Libro.eliminar(isbn)
    setLibro([...Libro.items])
  }

  function editarLibro(isbn, titulo, autor, genero) {
    setLibroEditando({ isbn, titulo, autor, genero });
    console.log("El libro que se esta editando es: ", isbn);
    console.log(isbn, autor, titulo, genero);
  }

  function guardarCambios(isbn, nuevoTitulo, nuevoAutor, nuevoGenero) {
    Libro.editar(isbn, nuevoTitulo, nuevoAutor, nuevoGenero);
    setLibro([...Libro.items]);
    setLibroEditando(null);
  }

  return (
    <>
      <div className=" text-white text-center min-h-screen bg-gray-950">

        <div className="flex justify-around">

          <Formulario handleNuevoLibro={ingresarLibro} handleEditarLibro={guardarCambios} libroEditando={libroEditando} />

          <Tabla items={libro} handleEliminarLibro={eliminarLibro} handleEditarLibro={editarLibro} />

        </div>
        <Titulo></Titulo>
      </div>

    </>
  )
}

export default App
