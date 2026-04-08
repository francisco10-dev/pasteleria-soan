import { FaWhatsapp } from 'react-icons/fa6';
import './Orders.css';
import { MdOutlineLightMode } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { AiOutlineFormatPainter } from 'react-icons/ai';
import { BsCake2 } from 'react-icons/bs';
import { CiClock2, CiLocationOn } from 'react-icons/ci';

const steps = [
  {
    number: '1',
    icon: <FaWhatsapp size={20} />,
    title: 'Contáctenos',
    desc: 'Escríbenos por WhatsApp o Instagram con tu idea y la fecha del evento.',
  },
  {
    number: '2',
    icon: <MdOutlineLightMode size={20} />,
    title: 'Diseño y Detalles',
    desc: 'Conversamos sobre el diseño, tamaño, sabores y todos los detalles de su pastel.',
  },
  {
    number: '3',
    icon: <GiTakeMyMoney size={20} />,
    title: 'Confirma con el 50%',
    desc: 'Para reservar tu pedido, realiza el pago del 50% del costo total con al menos 3 días de anticipación.',
  },
  {
    number: '4',
    icon: <AiOutlineFormatPainter size={20} />,
    title: 'Creamos con Amor',
    desc: 'Nos ponemos manos a la obra para crear tu pastel desde cero con los mejores ingredientes.',
  },
  {
    number: '5',
    icon: <BsCake2 size={20} />,
    title: '¡Recibe tu Pastel!',
    desc: 'Coordina la entrega o retiro en Santa Cruz, Guanacaste. El restante 50% se paga al recibir.',
  },
];

const policies = [
  {
    icon: <CiClock2 size={20} />,
    title: 'Pedido con Anticipación',
    desc: 'Realiza tu pedido con al menos 3 días de anticipación para garantizar disponibilidad.',
  },
  {
    icon: <GiTakeMyMoney size={20} />,
    title: 'Pago del 50% por Adelantado',
    desc: 'Para confirmar tu pedido se requiere el 50% del costo total. El restante al recibir.',
  },
  {
    icon:  <CiLocationOn size={20}  />,
    title: 'Santa Cruz, Guanacaste',
    desc: 'Servicio disponible en Santa Cruz y zonas cercanas. Consulta sobre entregas a domicilio.',
  },
];

export default function Orders() {
  return (
    <section id="pedidos" className="orders">
      <div className="container orders__inner">
        <div className="orders__header">
          <span className="section-tag">Cómo Pedir?</span>
          <h2 className="section-title">Tu pastel perfecto<br />en 5 pasos</h2>
          <p className="section-subtitle">
            Hacer su pedido es muy fácil. Siganos en el proceso y muy pronto
            tendrá su pastel listo!
          </p>
        </div>

        <div className="orders__grid">
          {/* Steps */}
          <div className="orders__steps">
            {steps.map((step) => (
              <div className="orders__step" key={step.number}>
                <div className="orders__step-number">{step.number}</div>
                <div className="orders__step-content">
                  <h3 className="orders__step-title">{step.title}</h3>
                  <p className="orders__step-desc">{step.desc}</p>
                </div>
                <span className="orders__step-icon">{step.icon}</span>
              </div>
            ))}
          </div>

          {/* Policy card */}
          <div className="orders__policy">
            <div className="orders__policy-header">
              <span className="orders__policy-tag">Política de Pedidos</span>
              <h3 className="orders__policy-title">
                Todo lo que necesitas saber para pedir
              </h3>
            </div>

            <div className="orders__policy-items">
              {policies.map((p) => (
                <div className="orders__policy-item" key={p.title}>
                  <span className="orders__policy-item-icon">{p.icon}</span>
                  <div className="orders__policy-item-content">
                    <h4 className="orders__policy-item-title">{p.title}</h4>
                    <p className="orders__policy-item-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="orders__policy-highlight">
              <div className="orders__policy-highlight-number">50%</div>
              <p className="orders__policy-highlight-label">
                de adelanto para confirmar tu pedido
              </p>
            </div>

            <div className="orders__policy-cta">
              <a
                href="https://wa.me/50684160236?text=Hola%20Pastelería%20Soan!%20Quisiera%20hacer%20un%20pedido%20🎂"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--white"
              >
                <FaWhatsapp size={20} /> Realizar pedido por WhatsApp
              </a>
              <p className="orders__policy-cta-note"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
