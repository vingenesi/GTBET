import React, { useState } from 'react';
import './Main.css';

function Main() {
    // Estados para gerenciar os slides de ambos os carrosséis
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);
  
    const items = ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4'];
    const items2 = ['Novidade 1', 'Novidade 2', 'Novidade 3', 'Novidade 4'];
  
    const totalItems = items.length;
    const totalItems2 = items2.length;
  
    // Funções para mover os slides
    const moveCarousel = (direction) => {
      let newSlide = currentSlide + direction;
      if (newSlide >= totalItems) {
        newSlide = 0;
      } else if (newSlide < 0) {
        newSlide = totalItems - 1;
      }
      setCurrentSlide(newSlide);
    };
  
    const moveCarousel2 = (direction) => {
      let newSlide2 = currentSlide2 + direction;
      if (newSlide2 >= totalItems2) {
        newSlide2 = 0;
      } else if (newSlide2 < 0) {
        newSlide2 = totalItems2 - 1;
      }
      setCurrentSlide2(newSlide2);
    };
  
    return (
      <>
        {/* Carrossel de Produtos em Destaque */}
        <section className="produtos">
          <h2>Produtos em Destaque</h2>
          <div className="carousel-container">
            <button className="prev" onClick={() => moveCarousel(-1)}>
              &#10094;
            </button>
            <div className="carousel" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
              {items.map((item, index) => (
                <div key={index} className="item">
                  {item}
                </div>
              ))}
            </div>
            <button className="next" onClick={() => moveCarousel(1)}>
              &#10095;
            </button>
          </div>
        </section>
  
        {/* Carrossel de Novidades */}
        <section className="novidades">
          <h2>Novidades</h2>
          <div className="carousel-container">
            <button className="prev" onClick={() => moveCarousel2(-1)}>
              &#10094;
            </button>
            <div className="carousel" style={{ transform: `translateX(-${currentSlide2 * 25}%)` }}>
              {items2.map((item, index) => (
                <div key={index} className="item">
                  {item}
                </div>
              ))}
            </div>
            <button className="next" onClick={() => moveCarousel2(1)}>
              &#10095;
            </button>
          </div>
        </section>
      </>
    );
};

export default Main;
