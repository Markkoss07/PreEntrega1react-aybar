import React from 'react'
import { CartWidget } from './CartWidget'



const NavBar = () => {
    return(
        <nav className ="navbar navbar-expand-lg navbar-dark bg-body-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="ddsd">Artes Rk</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href=".">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://arteskr1-aybar.vercel.app/paginas/productos.html" >Todos los productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="." >Destacados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled"  href="." aria-disabled="true">Decorativos</a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar