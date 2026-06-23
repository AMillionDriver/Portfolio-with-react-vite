import React from 'react';
import resumeMy from '../../assets/resume.pdf';

function Header() {
    return (
        <header data-aos="fade-down" id="header" className="bg-dark w-100 d-flex flex-md-row flex-column justify-content-md-between align-items-center px-4 py-2">
            <div className="icon">
                <p className="text-white fs-5 mb-0">Nanang Nurmansah</p>
            </div>
            <nav className="navbar d-flex gap-3">
                <a className="text-secondary text-decoration-none" href="#dashboard">Dashboard</a>
                <a className="text-secondary text-decoration-none" href="#about">About me</a>
                <a className="text-secondary text-decoration-none" href="#journey">Journey</a>
                <a className="text-secondary text-decoration-none" href="#projects">Project</a>
                <a className="text-secondary text-decoration-none" href="#contact">Contact</a>
            </nav>
            <div className="resume">
                <a
                    href={resumeMy}
                    download="resume.pdf"
                    className='text-white p-1 my-2 mb-5 rounded-5 bg-transparent border border-white text-decoration-none fs-6'
                    style={{cursor: 'pointer'}}
                >Resume</a>
            </div>
        </header>
    );
}
export default Header;
