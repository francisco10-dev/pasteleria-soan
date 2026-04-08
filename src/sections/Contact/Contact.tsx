import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';
import { IoCallOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';

const contactCards = [
  {
    type: 'whatsapp',
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    title: '+506 6289-9719',
    subtitle: 'Escríbenos directo por WhatsApp para hacer tu pedido o consulta.',
    action: 'Escribir ahora',
    href: 'https://wa.me/50684160236?text=Hola%20Pastelería%20Soan!%20Me%20gustaría%20hacer%20un%20pedido%20🎂',
  },
  {
    type: 'instagram',
    icon: <FaInstagram size={20} />,
    label: 'Instagram',
    title: '@pasteleria___soan',
    subtitle: 'Síguenos para ver nuestros diseños y trabajos más recientes.',
    action: 'Ver perfil',
    href: 'https://www.instagram.com/pasteleria___soan/',
  },
  {
    type: 'phone',
    icon: <IoCallOutline size={20} />,
    label: 'Llamadas',
    title: '+506 6289-9719',
    subtitle: 'También puedes llamarnos directamente para consultas o pedidos.',
    action: 'Llamar ahora',
    href: 'tel:+50662899719',
  },
  {
    type: 'location',
    icon: <CiLocationOn size={20} />,
    label: 'Ubicación',
    title: 'Santa Cruz',
    subtitle: 'Santa Cruz, Guanacaste, Costa Rica. Consulta nuestros horarios de entrega.',
    action: 'Ver ubicación',
    href: 'https://maps.google.com/?q=Santa+Cruz+Guanacaste+Costa+Rica',
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact__inner">
        <div className="contact__header">
          <span className="section-tag"> <IoCallOutline size={20} /> Contacto</span>
          <h2 className="section-title">¡Hablemos y creemos<br />algo especial!</h2>
          <p className="section-subtitle">
            Estamos disponibles para responder tus consultas y ayudarte a
            planificar el pastel perfecto para tu ocasión.
          </p>
        </div>

        {/* Contact cards */}
        <div className="contact__cards">
          {contactCards.map((card) => (
            <a
              key={card.type}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-card contact-card--${card.type}`}
            >
              <div className="contact-card__icon-wrap">{card.icon}</div>
              <span className="contact-card__label">{card.label}</span>
              <h3 className="contact-card__title">{card.title}</h3>
              <p className="contact-card__subtitle">{card.subtitle}</p>
              <span className="contact-card__action">
                {card.action} →
              </span>
            </a>
          ))}
        </div>

        <div className="contact__bottom">
          {/* Location block 
          <div className="contact__location">
            <div className="contact__location-map">
              <div className="contact__location-pin">
                <div className="contact__location-pin-icon">📍</div>
                <div className="contact__location-pin-label">Santa Cruz, Guanacaste</div>
              </div>
            </div>
            <div className="contact__location-info">
              <h3 className="contact__location-title">¿Dónde estamos?</h3>
              <p className="contact__location-desc">
                Nos encontramos en Santa Cruz, Guanacaste, Costa Rica. Realizamos
                entregas en la zona. Escríbenos para coordinar entrega o retiro
                de tu pedido.
              </p>
              <a
                href="https://maps.google.com/?q=Santa+Cruz+Guanacaste+Costa+Rica"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                style={{ marginTop: '0.5rem', width: 'fit-content' }}
              >
                🗺️ Ver en Google Maps
              </a>
            </div>
          </div>*/}

          {/* CTA strip */}
          <div className="contact__strip">
            <h3 className="contact__strip-title">
              ¿List@ para ordenar tu pastel soñado?
            </h3>
            <p className="contact__strip-sub">
              - Realiza tu pedido y recibe tu pastel sin salir de casa. <br />
              - Se cancela el costo del pedido + costo de envío. <br />
              - Envíos GRATIS en pedidos mayores a ₡20,000 (Aplican restricciones).
            </p>
            {/** 
            <div className="contact__strip-actions">
              <a
                href="https://wa.me/50684160236?text=Hola%20Pastelería%20Soan!%20Quiero%20hacer%20un%20pedido%20🎂"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--white"
              >
                💬 Pedir por WhatsApp
              </a>
              <a
                href="https://www.instagram.com/pasteleria___soan/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--white"
              >
                📸 Instagram
              </a>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
