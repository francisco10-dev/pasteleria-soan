import './Specialties.css';

const specialties = [
  {
    icon: '🎂',
    tag: 'Más Popular',
    title: 'Pasteles de Celebración',
    desc: 'Pasteles únicos para cumpleaños, quinceañeros y toda ocasión especial. Diseños completamente personalizados a tu gusto.',
    features: ['Diseño 100% personalizado', 'Varios tamaños disponibles', 'Entrega programada'],
    featured: false,
  },
  {
    icon: '💍',
    tag: 'Ocasión Especial',
    title: 'Pasteles de Boda',
    desc: 'Haz tu día más dulce con pasteles elegantes y deliciosos para bodas y compromisos. Diseñamos el pastel de tus sueños.',
    features: ['Diseño personalizado', 'Múltiples pisos', 'Decoraciones florales'],
    featured: true,
  },
  {
    icon: '🍰',
    tag: 'Artesanal',
    title: 'Postres Artesanales',
    desc: 'Cupcakes, brownies, tartas y más delicias hechas desde cero con ingredientes reales y sin premezclas.',
    features: ['Sin premezclas', 'Ingredientes frescos', 'Por pedido mínimo'],
    featured: false,
  },
  {
    icon: '🎁',
    tag: 'Regalo',
    title: 'Cajas de Regalo',
    desc: 'Sets especiales de postres para regalar. La opción perfecta para sorprender a alguien especial con un detalle dulce.',
    features: ['Empaque especial', 'Mensaje personalizado', 'Variedad de dulces'],
    featured: false,
  },
  {
    icon: '🌸',
    tag: 'Temático',
    title: 'Pasteles Temáticos',
    desc: 'Desde personajes animados hasta temas elegantes. Creamos el pastel que imaginaste con todo el detalle y amor.',
    features: ['Cualquier temática', 'Decoraciones 3D', 'Alta calidad artística'],
    featured: false,
  },
  {
    icon: '🥳',
    tag: 'Evento',
    title: 'Pedidos Corporativos',
    desc: 'Para eventos empresariales, reuniones y celebraciones. Variedad de porciones adaptadas al tamaño de tu grupo.',
    features: ['Grandes cantidades', 'Entrega a domicilio', 'Precio por volumen'],
    featured: false,
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="specialties">
      <div className="container specialties__inner">
        <div className="specialties__header">
          <span className="section-tag">🎂 Especialidades</span>
          <h2 className="section-title">Lo que hacemos<br />con más amor</h2>
          <p className="section-subtitle">
            Cada creación es única. Nos especializamos en pasteles artesanales
            personalizados para cada ocasión especial de tu vida.
          </p>
        </div>

        <div className="specialties__grid">
          {specialties.map((s) => (
            <div
              key={s.title}
              className={`specialty-card${s.featured ? ' specialty-card--featured' : ''}`}
            >
              <div className="specialty-card__icon-wrap">{s.icon}</div>
              <span className="specialty-card__tag">{s.tag}</span>
              <h3 className="specialty-card__title">{s.title}</h3>
              <p className="specialty-card__desc">{s.desc}</p>
              <div className="specialty-card__features">
                {s.features.map((f) => (
                  <div className="specialty-card__feature" key={f}>{f}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="specialties__banner">
          <h3 className="specialties__banner-title">
            ¿Tienes algo especial en mente? <span>Lo hacemos realidad</span>
          </h3>
          <p className="specialties__banner-text">
            Cuéntanos tu idea y creamos el pastel perfecto para tu ocasión.
            ¡No hay diseño imposible cuando hay amor!
          </p>
          <div className="specialties__banner-actions">
            <a
              href="https://wa.me/50684160236?text=Hola%20Pastelería%20Soan%2C%20quisiera%20consultar%20sobre%20un%20pastel%20personalizado%20🎂"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              💬 Consultar por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/pasteleria___soan/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              📸 Ver Trabajos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
