
function Titulo() {
  return (
    <header
      className=" bg-gray-900 flex justify-around items-center p-8 border-2 mt-16 mr-21 ml-21">
        <div className="flex items-center">
          <a href="#"><img src="/src/assets/traje.png" alt="" className="w-20"/></a>
          <h2 className=" text-2xl ml-4">Maximiliano Rodriguez 1ro "B"</h2>
        </div>
      <div className="flex justify-center flex-col items-center">
        <h1 className=" text-2xl">Gestor de <br/> Biblioteca Persona</h1>
        <img src="/src/assets/IconPagina.png" alt="" className="w-22" />
      </div>
      <div className="flex items-center">
        <a href="https://github.com/rodMaximiliano/Gestor-de-Biblioteca-Persona"><img src="/src/assets/github.png" alt="" className="w-20"/></a>
        <h2 className=" text-2xl ml-4">Repositorio de GitHub</h2>
      </div>
    </header>
  )
}

export default Titulo