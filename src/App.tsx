import { useState, useEffect, useCallback } from 'react';
import paladin from "/img/paladin.png";
import lorde from "/img/lorde.png";
import cavrun from "/img/cavrun.png";
import guardian from "/img/guardian.png";
import bruxo from "/img/bruxo.png";
import professor from "/img/professor.png";
import arcano from "/img/arcano.png";
import feiticeiro from "/img/feiticeiro.png";
import atirador from "/img/atirador.png";
import menestrel from "/img/menestrel.png";
import sentinela from "/img/sentinela.png";
import musa from "/img/musa.png";
import algoz from "/img/algoz.png";
import desordeiro from "/img/desordeiro.png";
import sicario from "/img/sicario.png";
import renegado from "/img/renegado.png";
import sumoSacerdote from "/img/sumo_sacerdote.png";
import mestre from "/img/mestres.png";
import arcebispo from "/img/arcebispos.png";
import shura from "/img/shura.png";
import mestreFerreiro from "/img/mestreferreiro.png";
import criador from "/img/criador.png";
import mecanico from "/img/mecanico.png";
import bioquimico from "/img/bioquimico.png";

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
    { image: bruxo, name: "BRUXO", description: "A strong and brave fighter, ready for battle." },
    { image: professor, name: "PROFESSOR", description: "A master of arcane arts, wielding powerful spells." },
    { image: arcano, name: "ARCANO", description: "A stealthy assassin striking from the shadows." },
    { image: feiticeiro, name: "FEITICEIRO", description: "A stealthy assassin striking from the shadows." }
  ];

  const charactersCard2 = [
    { image: lorde, name: "LORDE", description: "A nature guardian with shapeshifting abilities." },
    { image: paladin, name: "PALADINO", description: "A holy warrior with divine powers." },
    { image: cavrun, name: "CAVALEIRO RÚNICO", description: "A master of ranged weapons and tracking." },
    { image: guardian, name: "GUARDIÃO", description: "A master of ranged weapons and tracking." }
  ];

  const charactersCard3 = [
    { image: atirador, name: "ATIRADOR DE ELITE", description: "A nature guardian with shapeshifting abilities." },
    { image: menestrel, name: "MENESTREL/CIGANA", description: "A holy warrior with divine powers abilites." },
    { image: sentinela, name: "SENTINELA", description: "A master of ranged weapons and tracking." },
    { image: musa, name: "TROVADOR/MUSA", description: "A master of ranged weapons and tracking." }
  ];

  const charactersCard4 = [
    { image: algoz, name: "ALGOZ", description: "A strong and brave fighter, ready for battle." },
    { image: desordeiro, name: "DESORDEIRO", description: "A master of arcane arts, wielding powerful spells." },
    { image: sicario, name: "SICÁRIO", description: "A stealthy assassin striking from the shadows." },
    { image: renegado, name: "RENEGADO", description: "A stealthy assassin striking from the shadows." }
  ];

  const charactersCard5 = [
    { image: sumoSacerdote, name: "SUMO SACERDOTE", description: "A nature guardian with shapeshifting abilities." },
    { image: mestre, name: "MESTRE", description: "A holy warrior with divine powers." },
    { image: arcebispo, name: "ARCEBISPO", description: "A master of ranged weapons and tracking." },
    { image: shura, name: "SHURA", description: "A master of ranged weapons and tracking." }
  ];

  const charactersCard6 = [
    { image: mestreFerreiro, name: "MESTRE FERREIRO", description: "A nature guardian with shapeshifting abilities." },
    { image: criador, name: "CRIADOR", description: "A holy warrior with divine powers abilites." },
    { image: mecanico, name: "MECÂNICO", description: "A master of ranged weapons and tracking." },
    { image: bioquimico, name: "BIOQUÍMICO", description: "A master of ranged weapons and tracking." }
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [selectedCharacterCard2, setSelectedCharacterCard2] = useState(charactersCard2[0]);
  const [selectedCharacterCard3, setSelectedCharacterCard3] = useState(charactersCard3[0]);
  const [selectedCharacterCard4, setSelectedCharacterCard4] = useState(charactersCard4[0]);
  const [selectedCharacterCard5, setSelectedCharacterCard5] = useState(charactersCard5[0]);
  const [selectedCharacterCard6, setSelectedCharacterCard6] = useState(charactersCard6[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSelectedCharacter((prev) => {
  //       const currentIndex = characters.findIndex((char) => char.name === prev.name);
  //       const nextIndex = (currentIndex + 1) % characters.length;
  //       return characters[nextIndex];
  //     });
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [characters]);

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
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center rounded card-master">
          <h2 className='mb-5'>Mago</h2>
          <div className="character-card">
            <img src={selectedCharacter.image} className="character-img" alt={selectedCharacter.name} />
            <h2 className='char-h2'>{selectedCharacter.name}</h2>
            <p className='char-p'>{selectedCharacter.description}</p>
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
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center rounded card-master">
          <h2 className='mb-5'>Espadachim</h2>
          <div className="character-card">
            <img src={selectedCharacterCard2.image} className="character-img" alt={selectedCharacterCard2.name} />
            <h2 className='char-h2'>{selectedCharacterCard2.name}</h2>
            <p className='char-p'>{selectedCharacterCard2.description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {charactersCard2.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacterCard2(char)}
                  className={`rounded ${selectedCharacterCard2.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacterCard2.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacterCard2.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 03 */}
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center rounded card-master">
          <h2 className='mb-5'>Arqueiro</h2>
          <div className="character-card">
            <img src={selectedCharacterCard3.image} className="character-img" alt={selectedCharacterCard3.name} />
            <h2 className='char-h2'>{selectedCharacterCard3.name}</h2>
            <p className='char-p'>{selectedCharacterCard3.description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {charactersCard3.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacterCard3(char)}
                  className={`rounded ${selectedCharacterCard3.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacterCard3.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacterCard3.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 04 */}
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center rounded card-master">
          <h2 className='mb-5'>Gatuno</h2>
          <div className="character-card">
            <img src={selectedCharacterCard4.image} className="character-img" alt={selectedCharacterCard4.name} />
            <h2 className='char-h2'>{selectedCharacterCard4.name}</h2>
            <p className='char-p'>{selectedCharacterCard4.description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {charactersCard4.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacterCard4(char)}
                  className={`rounded ${selectedCharacterCard4.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacterCard4.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacterCard4.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 05 */}
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center rounded card-master">
          <h2 className='mb-5'>Noviço</h2>
          <div className="character-card">
            <img src={selectedCharacterCard5.image} className="character-img" alt={selectedCharacterCard5.name} />
            <h2 className='char-h2'>{selectedCharacterCard5.name}</h2>
            <p className='char-p'>{selectedCharacterCard5.description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {charactersCard5.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacterCard5(char)}
                  className={`rounded ${selectedCharacterCard5.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacterCard5.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacterCard5.name === char.name ? "1" : "0.5"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personagens card 06 */}
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center rounded card-master">
          <h2 className='mb-5'>Mercador</h2>
          <div className="character-card">
            <img src={selectedCharacterCard6.image} className="character-img" alt={selectedCharacterCard6.name} />
            <h2 className='char-h2'>{selectedCharacterCard6.name}</h2>
            <p className='char-p'>{selectedCharacterCard6.description}</p>
            <div className="d-flex justify-content-center gap-2 mt-4">
              {charactersCard6.map((char, index) => (
                <img
                  key={index}
                  src={char.image}
                  alt={char.name}
                  onClick={() => setSelectedCharacterCard6(char)}
                  className={`rounded ${selectedCharacterCard6.name === char.name ? "border border-primary" : ""}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    filter: selectedCharacterCard6.name === char.name ? "none" : "grayscale(100%)",
                    opacity: selectedCharacterCard6.name === char.name ? "1" : "0.5"
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
