/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';
import warrior from "/img/warrior.png";
import mage from "/img/mage.png";
import rogue from "/img/rogue.png";
// import paladin from "/img/paladin.png"; // Nova imagem
// import druid from "/img/druid.png"; // Nova imagem
// import hunter from "/img/hunter.png"; // Nova imagem

export default function App(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 10000; // 10 segundos

  const slides = [
    {
      image: '/img/img01.png',
      title: 'Novo sistema de classes',
      description: 'Descrição do Slide 1',
    },
    {
      image: '/img/img02.png',
      title: 'Eventos Únicos',
      description: 'Descrição do Slide 2',
    },
    {
      image: '/img/img03.png',
      title: 'Diversão Garantida',
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

  const characters = [
    { image: warrior, name: "WARRIOR", description: "A strong and brave fighter, ready for battle." },
    { image: mage, name: "MAGE", description: "A master of arcane arts, wielding powerful spells." },
    { image: rogue, name: "ROGUE", description: "A stealthy assassin striking from the shadows." },
    // { image: paladin, name: "PALADIN", description: "A holy warrior with divine powers." }, // Novo personagem
    // { image: druid, name: "DRUID", description: "A nature guardian with shapeshifting abilities." }, // Novo personagem
    // { image: hunter, name: "HUNTER", description: "A master of ranged weapons and tracking." } // Novo personagem
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCharacter((prev) => {
        const currentIndex = characters.findIndex((char) => char.name === prev.name);
        const nextIndex = (currentIndex + 1) % characters.length;
        return characters[nextIndex];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="section my-4">

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
      <div className="row my-4">
        <div className="col">
          <div className="slider-section mb-5">
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
                  <button onClick={prevSlide}><i className="bi bi-caret-left"></i></button>
                  <button onClick={nextSlide}><i className="bi bi-caret-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col align-self-start">
          <div className="slider-description">
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description}</p>
          </div>
        </div>
      </div>
      {/* Fim do Slide */}

      {/* Seção de Informações */}
      {/* Personagens card 01 */}
      <div className="row py-4">
        <div className="col-md-4 text-center rounded card-master">
          <h2 className='mb-5'>Espadachim</h2>
          <div className="character-card">
            <img src={characters[0].image} className="character-img" alt={characters[0].name} />
            <h2 className='char-h2'>{characters[0].name}</h2>
            <p className='char-p'>{characters[0].description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {characters.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacter(char)}
                  className={`rounded ${selectedCharacter.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacter.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacter.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 02 */}
        <div className="col-md-4 text-center rounded card-master">
          <h2 className='mb-5'>Mago</h2>
          <div className="character-card">
            <img src={characters[1].image} className="character-img" alt={characters[1].name} />
            <h2 className='char-h2'>{characters[1].name}</h2>
            <p className='char-p'>{characters[1].description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {characters.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacter(char)}
                  className={`rounded ${selectedCharacter.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacter.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacter.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 03 */}
        <div className="col-md-4 text-center rounded card-master">
          <h2 className='mb-5'>Arqueiro</h2>
          <div className="character-card">
            <img src={characters[2].image} className="character-img" alt={characters[2].name} />
            <h2 className='char-h2'>{characters[2].name}</h2>
            <p className='char-p'>{characters[2].description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {characters.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacter(char)}
                  className={`rounded ${selectedCharacter.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacter.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacter.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 04 */}
        <div className="col-md-4 text-center rounded card-master">
          <h2 className='mb-5'>Gatuno</h2>
          <div className="character-card">
            <img src={characters[0].image} className="character-img" alt={characters[0].name} />
            <h2 className='char-h2'>{characters[0].name}</h2>
            <p className='char-p'>{characters[0].description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {characters.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacter(char)}
                  className={`rounded ${selectedCharacter.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacter.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacter.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 05 */}
        <div className="col-md-4 text-center rounded card-master">
          <h2 className='mb-5'>Noviço</h2>
          <div className="character-card">
            <img src={characters[1].image} className="character-img" alt={characters[1].name} />
            <h2 className='char-h2'>{characters[1].name}</h2>
            <p className='char-p'>{characters[1].description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {characters.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacter(char)}
                  className={`rounded ${selectedCharacter.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacter.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacter.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 06 */}
        <div className="col-md-4 text-center rounded card-master">
          <h2 className='mb-5'>Mercador</h2>
          <div className="character-card">
            <img src={characters[2].image} className="character-img" alt={characters[2].name} />
            <h2 className='char-h2'>{characters[2].name}</h2>
            <p className='char-p'>{characters[2].description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {characters.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacter(char)}
                  className={`rounded ${selectedCharacter.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacter.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacter.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Fim da seção de informações */}

    </>
  );
}
