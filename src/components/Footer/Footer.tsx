import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import { CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { BsCake2 } from 'react-icons/bs';

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Cómo Pedir', href: '#pedidos' },
  { label: 'Contacto', href: '#contacto' },
];


export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true" />

      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo" onClick={(e) => handleNavClick(e, '#inicio')}>
              <div className="footer__logo-icon">
                <BsCake2 size={20} color='white' />
              </div>
              <div className="footer__logo-text">
                <span className="footer__logo-name">Pastelería Soan</span>
                <span className="footer__logo-tagline">Sabor de Hogar</span>
              </div>
            </a>
            <p className="footer__brand-desc">
              Pasteles artesanales hechos desde cero con ingredientes reales y sin premezclas.
              Cada creación nace con amor, dedicación y el toque especial de hogar.
              Santa Cruz, Guanacaste.
            </p>
            <div className="footer__social">
              <a
                href="https://www.instagram.com/pasteleria___soan/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/50684160236"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="WhatsApp"
              >
               <FaWhatsapp size={20} />
              </a>
              <a
                href="tel:+50684160236"
                className="footer__social-link"
                aria-label="Teléfono"
              >
                 <IoCallOutline size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h3 className="footer__col-title">Navegación</h3>
            <nav className="footer__links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className="footer__link-dot" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contacto</h3>
            <div className="footer__links">
              <div className="footer__contact-item">
                <IoCallOutline size={20} />
                <a href="tel:+50684160236" className="footer__link" style={{ padding: 0 }}>
                  +506 8416-0236
                </a>
              </div>
              <div className="footer__contact-item">
                <FaWhatsapp size={20} />
                <a
                  href="https://wa.me/50684160236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  style={{ padding: 0 }}
                >
                  WhatsApp
                </a>
              </div>
              <div className="footer__contact-item">
                <FaInstagram size={20} />
                <a
                  href="https://www.instagram.com/pasteleria___soan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  style={{ padding: 0 }}
                >
                  @pasteleria___soan
                </a>
              </div>
              <div className="footer__contact-item">
                <CiLocationOn size={20}  />
                <span>Santa Cruz, Guanacaste, Costa Rica</span>
              </div>
            </div>
          </div>

          {/* Schedule 
          <div className="footer__col">
            <h3 className="footer__col-title">Atención</h3>
            <div className="footer__schedule">
              {schedule.map((item) => (
                <div className="footer__schedule-item" key={item.day}>
                  <span className="footer__schedule-day">{item.day}</span>
                  <span className="footer__schedule-hours">{item.hours}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/50684160236?text=Hola%20Pastelería%20Soan!%20Quiero%20hacer%20un%20pedido%20🎂"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ marginTop: '0.75rem', justifyContent: 'center', fontSize: '0.85rem', padding: '0.7rem 1.25rem' }}
            >
              <FaWhatsapp size={20} /> ¡Hacer Pedido!
            </a>
          </div>
          */}
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Pastelería Soan.
          </p>
          <p className="footer__dev">
            Diseñado y desarrollado por{' '}
            <a
              href="https://franxisco.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__dev-link"
            >
              Francisco Ortiz
            </a>{' '}
            · {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
