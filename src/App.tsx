import { useState, useEffect, useCallback } from 'react';

export default function App(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000; // 5 segundos

  const slides = [
    {
      image: '/img/img01.png', // Certifique-se de que o caminho está correto
      title: 'Slide 1',
      description: 'Descrição do Slide 1',
    },
    {
      image: '/img/img02.png', // Certifique-se de que o caminho está correto
      title: 'Slide 2',
      description: 'Descrição do Slide 2',
    },
    {
      image: '/img/img03.png', // Certifique-se de que o caminho está correto
      title: 'Slide 3',
      description: 'Descrição do Slide 3',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      {/* Seção Hero */}
      <div className="row">
        <div className="hero">
          <div className="col-md-6 offset-md-0">
            <h1 className="hero-title">Bem-vindo ao nosso site!</h1>
            <p className="hero-text">Faça login para acessar sua conta.</p>
          </div>
        </div>
      </div>

      {/* Nova Seção */}
      <div className="section">
        <h2 className="section-title">Nossas Funcionalidades</h2>
        <p className="section-text">Descubra as incríveis funcionalidades que oferecemos.</p>
        <div className="features">
          <div className="feature-box">
            <i className="bi bi-speedometer2 feature-icon"></i>
            <h3 className="feature-title">Alta Velocidade</h3>
            <p className="feature-text">Desfrute de uma experiência rápida e eficiente.</p>
          </div>
          <div className="feature-box">
            <i className="bi bi-shield-lock feature-icon"></i>
            <h3 className="feature-title">Segurança</h3>
            <p className="feature-text">Seus dados estão seguros conosco.</p>
          </div>
          <div className="feature-box">
            <i className="bi bi-people feature-icon"></i>
            <h3 className="feature-title">Comunidade</h3>
            <p className="feature-text">Faça parte de uma comunidade vibrante.</p>
          </div>
        </div>
      </div>

      {/* Seção Slider */}
      <div className="slider-section">
        <div className="slider-container">
          <div className="slider">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.title}
                className={index === currentSlide ? 'active' : ''}
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                }}
              />
            ))}
            <div className="slider-nav">
              <button onClick={prevSlide}>&lt;</button>
              <button onClick={nextSlide}>&gt;</button>
            </div>
          </div>
          <div className="slider-description">
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

