import React from 'react'

const Home = () => {
  return (
    <div className="grid-container mt-16">
      {/* Cuadrado 1 */}
      <div className="grid-item">
        <p className="text-black">Cuadrado 1</p>
      </div>

      {/* Línea vertical */}
      <div className="bg-gray-600 h-200px w-2"></div>

      {/* Cuadrado 2 */}
      <div className="grid-item">
        <p className="text-black">Cuadrado 2</p>
      </div>

      {/* Línea vertical */}
      <div className="bg-gray-600 h-200px w-2"></div>

      {/* Cuadrado 3 */}
      <div className="grid-item">
        <p className="text-black">Cuadrado 3</p>
      </div>

      {/* Línea vertical */}
      <div className="bg-gray-600 h-200px w-2"></div>

      {/* Cuadrado 4 */}
      <div className="grid-item">
        <p className="text-black">Cuadrado 4</p>
      </div>
    </div>
  )
}

export default Home