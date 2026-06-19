import React from 'react';

function Contact() {
    return (
        <div className="py-5 text-center" data-aos="fade">
            <h2 className="fw-bold mb-4">Contact Me</h2>

            <div className='d-flex flex-column align-items-center justify-content-center gap-3' data-aos-delay="100">
                {/* Input field */}
                <label className='mx-4' htmlFor="inputName" data-aos-delay="300">Your Name</label>
                <input  type="text" name="inputName" id="inputName" placeholder='Your Name' data-aos-delay="300" />
                
                <label className='mx-4' htmlFor="inputEmail" data-aos-delay="600">Your Email</label>
                <input type="email" name="inputEmail" id="inputEmail" data-aos-delay="600" placeholder='Email' />
                
                <label className='mx-4' htmlFor="inputMessage" data-aos-delay="900">Your Message</label>
                <input  type="textarea" name="inputMessage" id="inputMessage" data-aos-delay="900" placeholder='Message'/>
                <button className='btn btn-primary rounded-pill' type="submit">Send</button>
            </div>

        </div>
    );
}

export default Contact;
