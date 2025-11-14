function Tabla({ items, handleEliminarLibro, handleEditarLibro}) {

        let editar = false
    
    return (
        <div>
            <table id="tablaProductos" className="w-4/5 border-collapse mt-16 bg-gray-900">
                <thead>
                    <tr className="bg-poncho-medio text-poncho-dorado">
                        <th className="border border-poncho-dorado font-bold pt-2 pr-24 pb-2 pl-24">ISBN</th>
                        <th className="border border-poncho-dorado font-bold pt-2 pr-24 pb-2 pl-24">Titulo</th>
                        <th className="border border-poncho-dorado font-bold pt-2 pr-24 pb-2 pl-24">Autor</th>
                        <th className="border border-poncho-dorado font-bold pt-2 pr-24 pb-2 pl-24">Genero</th>
                        <th className="border border-poncho-dorado font-bold pt-2 pr-24 pb-2 pl-24">Opción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, indice) => {
                            return (
                                <tr
                                    key={indice}
                                    id={indice}
                                    className="bg-gray-100 text-gray-900 border border-gray-400"
                                >
                                    <td className=" pt-2 pb-2">{item.isbn}</td>
                                    <td className=" pt-2 pb-2">{item.titulo}</td>
                                    <td className=" pt-2 pb-2">{item.autor}</td>
                                    <td className=" pt-2 pb-2">{item.genero}</td>
                                    <td className=" pt-2 pb-2">
                                        <button onClick={(e) => handleEliminarLibro(item.isbn)}
                                            className="rounded px-2 py-1 hover:cursor-pointer hover:scale-105 transition mr-1 ml-1 invert-100">
                                            <img src="/src/assets/cubo-de-basura.png" alt="Eliminar" className="w-8"></img>
                                        </button>
                                        <button onClick={(e) => handleEditarLibro(item.isbn, item.titulo, item.autor, item.genero, true)}
                                            id="clickEdicion"
                                            className=" rounded px-2 py-1 hover:cursor-pointer hover:scale-105 transition mr-1 ml-1 invert-100">
                                            <img src="/src/assets/boton-de-edicion.png" alt="Editar" className="w-8"></img>
                                        </button>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
                   
    );
}

export default Tabla;
