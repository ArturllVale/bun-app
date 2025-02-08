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
    { image: bruxo, name: "BRUXO", description: "Mestre das magias negras, controla o campo de batalha." },
    { image: professor, name: "PROFESSOR", description: "Especialista em magias de suporte e controle." },
    { image: arcano, name: "ARCANO", description: "Poderoso mago com habilidades destrutivas." },
    { image: feiticeiro, name: "FEITICEIRO", description: "Manipulador de elementos, domina a magia." }
  ];

  const charactersCard2 = [
    { image: lorde, name: "LORDE", description: "Guerreiro de elite com habilidades de liderança." },
    { image: paladin, name: "PALADINO", description: "Defensor sagrado, protege aliados com fé." },
    { image: cavrun, name: "CAVALEIRO RÚNICO", description: "Cavaleiro que usa runas para aumentar seu poder." },
    { image: guardian, name: "GUARDIÃO", description: "Protetor implacável, mestre em defesa absoluta." }
  ];

  const charactersCard3 = [
    { image: atirador, name: "ATIRADOR DE ELITE", description: "Especialista em combate à distância com precisão." },
    { image: menestrel, name: "MENESTREL/CIGANA", description: "Usa músicas para apoiar e fortalecer aliados." },
    { image: sentinela, name: "SENTINELA", description: "Arqueiro ágil, mestre em emboscadas e armadilhas." },
    { image: musa, name: "TROVADOR/MUSA", description: "Encanta aliados e confunde inimigos com suas canções." }
  ];

  const charactersCard4 = [
    { image: algoz, name: "ALGOZ", description: "Assassino mortal, ataca com precisão letal." },
    { image: desordeiro, name: "DESORDEIRO", description: "Ladrão ágil, mestre em furtividade e roubo." },
    { image: sicario, name: "SICÁRIO", description: "Especialista em assassinatos rápidos e silenciosos." },
    { image: renegado, name: "RENEGADO", description: "Lutador versátil, usa táticas sujas para vencer." }
  ];

  const charactersCard5 = [
    { image: sumoSacerdote, name: "SUMO SACERDOTE", description: "Curandeiro supremo, protege e cura aliados." },
    { image: mestre, name: "MESTRE", description: "Monge poderoso, usa artes marciais e espiritualidade." },
    { image: arcebispo, name: "ARCEBISPO", description: "Líder espiritual, combina cura e ataque divino." },
    { image: shura, name: "SHURA", description: "Monge avançado, domina técnicas de combate corpo a corpo." }
  ];

  const charactersCard6 = [
    { image: mestreFerreiro, name: "MESTRE FERREIRO", description: "Forja armas poderosas e aprimora equipamentos." },
    { image: criador, name: "CRIADOR", description: "Alquimista talentoso, cria poções e monstros." },
    { image: mecanico, name: "MECÂNICO", description: "Engenheiro habilidoso, usa máquinas em combate." },
    { image: bioquimico, name: "BIOQUÍMICO", description: "Cientista louco, usa química para destruir inimigos." }
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
        <h2 className='mb-5'>Sistemas e Eventos</h2>
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
        <h2>Sistema de Classes Personalizado</h2>
        <div className='alert alert-warning'>
          <p className='text-center'>Após renascer, você poderá escolher até 4 classes disponíveis,
            <span className='resalt'> lembrando que o servidor não tem uma terceira classe</span>, o que conheciam como terceira classe irá fazer
            parte das segundas classes, com isso, você poderá escolher até 4 classes para seu personagem.
          </p>
        </div>
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

      {/* Seção de Ranks */}
      <div className="row py-4">
        <h2 className='mb-5 mt-4'>Top Ranks</h2>
        <div className='px-4 justify-content-center'>
          <ul className="nav nav-tabs justify-content-center" id="rankTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pvp-tab" data-bs-toggle="tab" data-bs-target="#pvp" type="button" role="tab" aria-controls="pvp" aria-selected="true">Rank PVP</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="gvg-tab" data-bs-toggle="tab" data-bs-target="#gvg" type="button" role="tab" aria-controls="gvg" aria-selected="false">Rank GvG</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="mvp-tab" data-bs-toggle="tab" data-bs-target="#mvp" type="button" role="tab" aria-controls="mvp" aria-selected="false">Rank MvP</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="atividades-tab" data-bs-toggle="tab" data-bs-target="#atividades" type="button" role="tab" aria-controls="atividades" aria-selected="false">Rank Atividades</button>
            </li>
          </ul>
          <div className="tab-content" id="rankTabsContent">
            <div className="tab-pane fade show active" id="pvp" role="tabpanel" aria-labelledby="pvp-tab">
              <div className="table-responsive mx-auto" style={{ maxWidth: '600px' }}>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Posição</th>
                      <th>Nome do Jogador</th>
                      <th>Abates</th>
                      <th>Mortes</th>
                      <th>KDA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className="bi bi-award-fill text-warning"></i></td>
                      <td>Jogador 1</td>
                      <td>100</td>
                      <td>50</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-award-fill text-secondary"></i></td>
                      <td>Jogador 2</td>
                      <td>90</td>
                      <td>45</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-award-fill text-danger"></i></td>
                      <td>Jogador 3</td>
                      <td>80</td>
                      <td>40</td>
                      <td>2.0</td>
                    </tr>
                    {/* ...posições 4 a 10... */}
                    <tr>
                      <td>4</td>
                      <td>Jogador 4</td>
                      <td>70</td>
                      <td>35</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Jogador 5</td>
                      <td>60</td>
                      <td>30</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Jogador 6</td>
                      <td>50</td>
                      <td>25</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Jogador 7</td>
                      <td>40</td>
                      <td>20</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Jogador 8</td>
                      <td>30</td>
                      <td>15</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Jogador 9</td>
                      <td>20</td>
                      <td>10</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Jogador 10</td>
                      <td>10</td>
                      <td>5</td>
                      <td>2.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade" id="gvg" role="tabpanel" aria-labelledby="gvg-tab">
              <div className="table-responsive mx-auto" style={{ maxWidth: '600px' }}>
                <table className="table table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Posição</th>
                      <th>Nome da Guilda</th>
                      <th>Vitórias</th>
                      <th>Derrotas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className="bi bi-award-fill text-warning"></i></td>
                      <td>Guilda 1</td>
                      <td>10</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-award-fill text-secondary"></i></td>
                      <td>Guilda 2</td>
                      <td>9</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-award-fill text-danger"></i></td>
                      <td>Guilda 3</td>
                      <td>8</td>
                      <td>4</td>
                    </tr>
                    {/* ...posições 4 a 10... */}
                    <tr>
                      <td>4</td>
                      <td>Guilda 4</td>
                      <td>7</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Guilda 5</td>
                      <td>6</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Guilda 6</td>
                      <td>5</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Guilda 7</td>
                      <td>4</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Guilda 8</td>
                      <td>3</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Guilda 9</td>
                      <td>2</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Guilda 10</td>
                      <td>1</td>
                      <td>11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade" id="mvp" role="tabpanel" aria-labelledby="mvp-tab">
              <div className="table-responsive mx-auto" style={{ maxWidth: '600px' }}>
                <table className="table table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Posição</th>
                      <th>Nome</th>
                      <th>Pontos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className="bi bi-award-fill text-warning"></i></td>
                      <td>Jogador 1</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-award-fill text-secondary"></i></td>
                      <td>Jogador 2</td>
                      <td>900</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-award-fill text-danger"></i></td>
                      <td>Jogador 3</td>
                      <td>800</td>
                    </tr>
                    {/* ...posições 4 a 10... */}
                    <tr>
                      <td>4</td>
                      <td>Jogador 4</td>
                      <td>700</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Jogador 5</td>
                      <td>600</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Jogador 6</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Jogador 7</td>
                      <td>400</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Jogador 8</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Jogador 9</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Jogador 10</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade" id="atividades" role="tabpanel" aria-labelledby="atividades-tab">
              <div className="table-responsive mx-auto" style={{ maxWidth: '600px' }}>
                <table className="table table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Posição</th>
                      <th>Nome</th>
                      <th>Pontos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className="bi bi-award-fill text-warning"></i></td>
                      <td>Jogador 1</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-award-fill text-secondary"></i></td>
                      <td>Jogador 2</td>
                      <td>900</td>
                    </tr>
                    <tr>
                      <td><i className="bi bi-award-fill text-danger"></i></td>
                      <td>Jogador 3</td>
                      <td>800</td>
                    </tr>
                    {/* ...posições 4 a 10... */}
                    <tr>
                      <td>4</td>
                      <td>Jogador 4</td>
                      <td>700</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Jogador 5</td>
                      <td>600</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Jogador 6</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Jogador 7</td>
                      <td>400</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Jogador 8</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Jogador 9</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Jogador 10</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fim da seção de Ranks */}
    </>
  );
}
