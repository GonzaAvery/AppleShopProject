const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-85 py-2">
            <div className="container mx-auto flex justify-center items-center">
                <div>
                    <button className="text-white">Botón Izquierda</button>
                </div>
                <nav>
                    <ul className="flex space-x-8">
                        <li><a href="#" className="text-white hover:text-gray-300">Store</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Mac</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">iPad</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">iPhone</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Watch</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">AirPods</a></li>
                    </ul>
                </nav>
                <div>
                    <button className="text-white">Botón derecha</button>
                </div>
            </div>
        </header>
    )
}

export default Header