import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand mb-0 h1" to={'/'}>
                        Board Books
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                           
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CGBSE HINDI
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to={'/ebooks'} className="dropdown-item">Class 9th</Link></li>
                                    <li><a className="dropdown-item" href="#">Class 10th</a></li>
                                    <li><a className="dropdown-item" href="#">Class 11th</a></li>
                                    <li><a className="dropdown-item" href="#">Class 12th</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else?</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CGBSE ENGLISH
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Class 9th</a></li>
                                    <li><a className="dropdown-item" href="#">Class 10th</a></li>
                                    <li><a className="dropdown-item" href="#">Class 11th</a></li>
                                    <li><a className="dropdown-item" href="#">Class 12th</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else?</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
