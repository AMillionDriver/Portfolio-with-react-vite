import React, { useEffect, useState } from 'react';
import catImg from '../../assets/cat.jpg';
import { ReactTyped } from 'react-typed';


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
    <main data-aos="fade" className='container-fluid flex-md-column w-100 d-flex flex-row'>
        {/* profile about me */}
        <div className='w-100 rounded-bottom-5 shadow'>
            <div className='d-flex align-items-center justify-content-center'>
                <img className='fotoKucing object-fit-cover' src={catImg}></img>
            </div>
            
            <div className='d-flex align-items-center justify-content-center mt-3 mb-5'>
                <h2 className='text-body mb-0'>
                    <ReactTyped
                        strings={[
                            "Halo Saya, ",
                            "Nanang Nurmansah",
                            "Seorang",
                            "Web Developer",
                            "Android Developer",
                            "And Content Creator"
                        ]}
                        typeSpeed={80}
                        backSpeed={50}
                        backDelay={1500}
                        loop
                        className='text-primary'
                    />
                </h2>
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