import React, { useEffect, useState } from 'react'
import catImg from '../assets/cat.jpg';

function Main() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false)
            }
        };
            document.addEventListener('scroll', handleScroll);

            return () => document.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <main className='d-flex flex-row'>
        {/* profile about me */}
        <div className='w-100 rounded-bottom-5 shadow'>
            <div className='d-flex align-items-center justify-content-center'>
                <img className='fotoKucing object-fit-cover' src={catImg}></img>
            </div>
            <div className='my-5 d-flex flex-column align-items-center justify-content-center'>
                <h1 className='fw-bolder fs-5'>Nanang Nurmansah</h1>
                <details>
                    <summary className='fw-bold'>About Me</summary>
                    <p className='text-secondary'>
                        Saya kucing
                    </p>
                </details>
            </div>
        </div>

        {/* FAB BUTTON */}
        <aside className={`fab ${isVisible ? 'active' : ''}`}>
            <a className='text-primary' href="#header">^</a>
        </aside>
    </main>
  );
}

export default Main;