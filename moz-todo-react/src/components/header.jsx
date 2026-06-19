import React from 'react';
import resumeMy from '../assets/resume.pdf';

function Header() {
    return (
        <header id="header" className="bg-dark w-100 d-flex flex-row justify-content-evenly">
            <div className="icon">
                <p className="text-body fs-5">Nanang Nurmansah</p>
            </div>
            <nav className="navbar d-flex gap-3">
                <a className=" text-body-tertiary" href="#">Dashboard</a>
                <a className="text-body-secondary" href="#">About me</a>
                <a className="text-body-secondary" href="#">Journey</a>
                <a className="text-body-secondary" href="#">Project</a>
                <a className="text-body-secondary" href="#">Contact</a>
            </nav>
            <div className="resume">
                <a
                    href={resumeMy}
                    download="resume.pdf"
                    className='text-white p-1 my-2 rounded-5 bg-tranparent border border-white text-decoration-none fs-6 transition-all'
                    style={{cursor: 'pointer'}}
                >Resume</a>
            </div>
        </header>
    );
}
export default Header;