import React from 'react'


const Carrusel = () =>{
    return(
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100 p-5" src="imgs/replica1.png" alt="First slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 p-5" src="imgs/replica3.png" alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 p-5" src="https://media.discordapp.net/attachments/783341763124920360/787332073185738772/slider.png?width=970&height=409" alt="Third slide"/>
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
    )
}

export default Carrusel