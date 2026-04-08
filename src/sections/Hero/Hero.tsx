import './Hero.css';
import { FaWhatsapp } from "react-icons/fa";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { BsCake2 } from "react-icons/bs";
import { GiPineapple } from 'react-icons/gi';

export default function Hero() {
  
  {/**const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
  */}

  return (
    <section id="inicio" className="hero">
      {/* Background decoration */}
      <div className="hero__dots" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--1" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--2" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--3" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <CiLocationOn size={20}  />
            <span>Pastelería en Santa Cruz, Guanacaste</span>
          </div>

          <h1 className="hero__title">
            Pasteles con
            <span className="hero__title-highlight">Sabor de Hogar</span>
          </h1>

          <p className="hero__tagline">
            Pasteles personalizados hechos desde cero, con ingredientes reales
            y sin premezclas. Cada bocado es una experiencia única llena de amor
            y dedicación.
          </p>

          <div className="hero__features">
            <div className="hero__feature">
              <BsCake2 size={20} />
              <span>Pasteles Personalizados</span>
            </div>
            <div className="hero__feature">
              <GiPineapple size={20} />
              <span>Ingredientes Reales</span>
            </div>
            <div className="hero__feature">
              <CiHeart size={20} />
              <span>Hechos con Amor</span>
            </div>
          </div>

          <div className="hero__actions">
            <a
              href="https://wa.me/50684160236?text=Hola%20Pastelería%20Soan%2C%20me%20gustaría%20hacer%20un%20pedido%20🎂"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <FaWhatsapp size={20} /> ¡Hacer mi Pedido Ahora!
            </a>
           {/**<button
              className="btn btn--secondary"
              onClick={() => handleScroll('#especialidades')}
            >
              Ver Especialidades
            </button>
            */} 
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">100%</div>
              <div className="hero__stat-label">Sin premezclas</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">3+</div>
              <div className="hero__stat-label">Días Anticipación</div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="hero__visual">
          <div className="hero__cake-wrapper">
            <div className="hero__cake-card">
              <span className="hero__cake-emoji">🍰</span>
              <p className="hero__cake-label">Pastelería Soan</p>
              <p className="hero__cake-sublabel">Sabor de Hogar</p>
            </div>

            <div className="hero__float-badge hero__float-badge--1">
              Sin Premezclas
            </div>
            <div className="hero__float-badge hero__float-badge--3">
              Hecho con Amor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
