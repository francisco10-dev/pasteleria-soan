import { FaInstagram } from 'react-icons/fa';
import './About.css';

const values = [
  {
    icon: '',
    title: 'Ingredientes Reales',
    desc: 'Sin premezclas. Cada receta desde cero con los mejores ingredientes.',
  },
  {
    icon: '',
    title: 'Hecho con Amor',
    desc: 'Cada pastel nace con dedicación y el toque especial de hogar.',
  },
  {
    icon: '',
    title: 'Diseños Únicos',
    desc: 'Pasteles completamente personalizados para cada ocasión especial.',
  },
  {
    icon: '',
    title: 'Calidad Premium',
    desc: 'Cuidamos cada detalle para brindarte una buena experiencia.',
  },
];

export default function About() {
  return (
    <section id="historia" className="about">
      <div className="container about__inner">
        {/* Visual */}
        <div className="about__visual">
          <div className="about__logo-display">
            <div className="about__logo-ring">
              <span className="about__logo-emoji">🎂</span>
            </div>
            <div className="about__badge-est">
              Desde<br />2026
            </div>
            <div className="about__badge-phone">
              📞 +506 6289-9719
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="about__content">
          <div className="about__header">
            <span className="section-tag">Sobre nosotros</span>
            <h2 className="about__title">
              Un sueño hecho<br />
              <span>realidad con amor</span>
            </h2>
          </div>

          <div className="about__story">
            <p className="about__paragraph">
              ¡Hola! Bienvenidos a <strong>Pastelería Soan</strong>. <br/> Soy una joven emprendedora
              apasionada por la pastelería, donde cada receta nace con amor, dedicación y ese
              toque especial de hogar.
            </p>
            <p className="about__paragraph">
              El nombre <strong>Soan</strong> tiene un significado muy especial: nace de la unión
              de mi nombre y el de mi mamá, haciendo de este proyecto algo aún más lleno de cariño.
            </p>
            <p className="about__paragraph">
              Nuestro sello <strong>"Sabor de Hogar"</strong> representa lo que somos: postres
              artesanales, hechos desde cero, con ingredientes reales y sin premezclas,
              cuidando cada detalle para brindarte una buena experiencia.
            </p>
          </div>

          <div className="about__values">
            {values.map((v) => (
              <div className="about__value-card" key={v.title}>
                <span className="about__value-icon">{v.icon}</span>
                <h3 className="about__value-title">{v.title}</h3>
                <p className="about__value-desc">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="about__cta">
            <p className="about__cta-text">¿List@ para ser parte de este dulce proyecto?</p>
            <a
              href="https://www.instagram.com/pasteleria___soan/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ marginTop: '0.5rem' }}
            >
              <FaInstagram size={20} /> Síguenos en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
