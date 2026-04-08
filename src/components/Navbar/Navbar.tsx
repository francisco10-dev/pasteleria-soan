import { useState, useEffect } from 'react';
import './Navbar.css';
import { BsCake2 } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa6';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre nosotros', href: '#historia' },
  { label: 'Pedidos', href: '#pedidos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a
            href="#inicio"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
          >
            <div className="navbar__logo-icon">
              <BsCake2 size={20} color='white' />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Pastelería Soan</span>
              <span className="navbar__logo-tagline">Sabor de Hogar</span>
            </div>
          </a>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/50662899719"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            ¡Hacer Pedido!
          </a>

          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/50662899719?text=Hola%20Pastelería%20Soan!%20Quisiera%20hacer%20un%20pedido%20🎂"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__mobile-link navbar__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          <FaWhatsapp size={20} style={{marginRight: '0.5rem'}} />   WhatsApp
        </a>
      </div>
    </>
  );
}
