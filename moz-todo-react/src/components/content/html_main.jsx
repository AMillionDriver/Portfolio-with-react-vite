import React, { useEffect, useState } from 'react'
import catImg from '../../assets/cat.jpg';

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
            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <main className='w-100 d-flex flex-row'>
        {/* profile about me */}
        <div className='w-100 rounded-bottom-5 shadow'>
            <div className='d-flex align-items-center justify-content-center'>
                <img className='fotoKucing object-fit-cover' src={catImg}></img>
            </div>
            <div className='my-5 d-flex flex-column align-items-center justify-content-center'>
                <h1 className='fw-bolder text-white fs-5'>Nanang Nurmansah</h1>
                <details>
                    <summary className='fw-bold text-white'>About Me</summary>
                    <p className='text-secondary'>
                        Saya kucing
                    </p>
                </details>
            </div>
        </div>

        {/* FAB BUTTON */}
        <aside className={`fab d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}>
            <a className='text-body-primary' href="#header">^</a>
        </aside>
    </main>
  );
}

export default Main;