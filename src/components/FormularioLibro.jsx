import { useState, useEffect } from "react";

function Formulario({ handleNuevoLibro, handleEditarLibro, libroEditando }) {
    const [isbn, setIsbn] = useState('')
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [genero, setGenero] = useState('')

    function recogerDatos(e) {
        e.preventDefault();
        if (libroEditando) {
            handleEditarLibro(isbn, titulo, autor, genero);
        } else {
            handleNuevoLibro(isbn, titulo, autor, genero);
        }

        setIsbn('');
        setTitulo('');
        setAutor('');
        setGenero('');
    }

    useEffect(() => {
        if (libroEditando) {
            setIsbn(libroEditando.isbn);
            setTitulo(libroEditando.titulo);
            setAutor(libroEditando.autor);
            setGenero(libroEditando.genero);
        }
    }, [libroEditando]);

    useEffect(() => {
        if (!libroEditando) {
            setIsbn('');
            setTitulo('');
            setAutor('');
            setGenero('');
        }
    }, [libroEditando]);

    return (
        <div>
            <form
                onSubmit={(e) => recogerDatos(e)}
                id="formularioProducto" className="bg-poncho-medio border-2 border-poncho-dorado inline-block p-6 w-96 text-start mt-16 bg-gray-900">

                <div className="flex">
                    <h1 className=" font-bold text-2xl mr-4">Panel de admin</h1>
                    <img src="/src/assets/avatar-de-perfil.png" alt="IconAvatar" className="w-12 invert-100"></img>
                </div>


                <label for="pin">● Codigo del libro</label>
                <input
                    value={isbn}
                    disabled={!!libroEditando}
                    onChange={(e) => setIsbn(e.target.value)} required
                    type="text" id="pin" placeholder="Pin identificador del libro"
                    className="block m-2 p-2 min-w-19/20 rounded-md focus:ring-2 bg-gray-800"
                />

                <label for="Titulo">● Titulo de la obra</label>
                <input
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} required
                    type="text" id="Titulo" placeholder="Nombre de la obra"
                    className="block m-2 p-2 min-w-19/20 rounded-md focus:ring-2 bg-gray-800"
                />

                <label for="Autor">● Autor</label>
                <input
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)} required
                    type="text" id="Autor" placeholder="Nombre del escritor"
                    className="block m-2 p-2 min-w-19/20 rounded-md bg-gray-800"
                />

                <label for="Genero">● Genero de la obra</label>
                <input
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)} required
                    type="text" id="Genero" placeholder="Ficcion, Accion, comedia...etc"
                    className="block m-2 p-2 min-w-19/20 rounded-md bg-gray-800"
                />

                <button type="submit" id="guardar"
                    className="bg-indigo-950 text-poncho-oscuro font-bold rounded-md px-4 py-2 mt-2 transition hover:cursor-pointer hover:scale-105">
                    {libroEditando ? "Guardar Cambios" : "Agregar"}
                </button>
            </form>
        </div>

    )
}

export default Formulario