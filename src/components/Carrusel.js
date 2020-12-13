import React from 'react'

const Carrusel = () =>{
    return(
    <div className='container carrusel'>
        <div className='row'>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <a title="Vital Network" href="https://sites.google.com/vitalnetwork.org/ellahacehistoria" target="_blank"><img className="d-block w-100" src="imgs/img1.png" alt="First slide"/></a>
            </div>
            <div className="carousel-item">
                <a title="Alumni Voces Vitales" href="https://www.instagram.com/alumnivocesvitales/" target="_blank"><img className="d-block w-100" src="imgs/img2.png" alt="Second slide"/></a>
            </div>
            <div className="carousel-item">
                <a title="" href="" target="_blank"><img className="d-block w-100" src="imgs/img3.png" alt="Third slide"/></a>
            </div>
        </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
            </div>
        </div>
    </div>
    )
}

export default Carrusel