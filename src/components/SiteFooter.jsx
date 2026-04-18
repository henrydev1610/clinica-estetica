const clinicInfo = {
  name: "Sempre Bela",
  tagline: "Excelencia clinica e beleza atemporal.",
  description:
    "Excelencia clinica, beleza atemporal e protocolos personalizados para valorizar a sua melhor versao com sofisticacao, leveza e cuidado.",
};

const contactInfo = {
  whatsappLabel: "(11) 99999-9999",
  whatsappLink: "https://wa.me/5511999999999",
  phoneLabel: "(11) 3000-7788",
  phoneLink: "tel:+551130007788",
  emailLabel: "contato@semprebela.com.br",
  emailLink: "mailto:contato@semprebela.com.br",
  addressLine: "Rua Exemplo, 123",
  cityState: "Sao Paulo, SP",
  businessHours: "Segunda a Sexta, das 9h as 19h",
};

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/5511999999999" },
  { label: "Facebook", href: "https://facebook.com" },
];

const navigationLinks = [
  { label: "Inicio", homeHref: "#inicio", innerHref: "/" },
  { label: "Sobre", homeHref: "/sobre", innerHref: "/sobre" },
  { label: "Servicos", homeHref: "/servicos", innerHref: "/servicos" },
  { label: "Filosofia", homeHref: "#tratamentos", innerHref: "/#tratamentos" },
  { label: "Agendamento", homeHref: "#agendamento", innerHref: "/#agendamento" },
  { label: "Contato", homeHref: "#agendamento", innerHref: "/#agendamento" },
];

const featuredServices = [
  "Rejuvenescimento Facial",
  "Contorno Corporal",
  "Tecnologias Esteticas",
  "Protocolos Personalizados",
  "Bioestimuladores",
  "Consultoria Estetica",
];

export default function SiteFooter({ isInnerPage }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-premium" aria-label="Rodape institucional Sempre Bela">
      <div className="footer-premium-inner">
        <div className="footer-main-grid">
          <section className="footer-brand-block">
            <p className="footer-brand-name">{clinicInfo.name}</p>
            <p className="footer-brand-tagline">{clinicInfo.tagline}</p>
            <p className="footer-brand-description">{clinicInfo.description}</p>
          </section>

          <nav className="footer-column" aria-label="Navegacao do rodape">
            <p className="footer-column-title">Navegacao</p>
            <ul className="footer-list">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a href={isInnerPage ? item.innerHref : item.homeHref}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-column" aria-label="Servicos em destaque">
            <p className="footer-column-title">Servicos Principais</p>
            <ul className="footer-list">
              {featuredServices.map((service) => (
                <li key={service}>
                  <a href={isInnerPage ? "/servicos" : "/servicos"}>{service}</a>
                </li>
              ))}
            </ul>
          </section>

          <address className="footer-column footer-contact" aria-label="Informacoes de contato">
            <p className="footer-column-title">Contato</p>
            <ul className="footer-list">
              <li>
                <span>WhatsApp</span>
                <a href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">
                  {contactInfo.whatsappLabel}
                </a>
              </li>
              <li>
                <span>Telefone</span>
                <a href={contactInfo.phoneLink}>{contactInfo.phoneLabel}</a>
              </li>
              <li>
                <span>E-mail</span>
                <a href={contactInfo.emailLink}>{contactInfo.emailLabel}</a>
              </li>
              <li>
                <span>Endereco</span>
                <p>{contactInfo.addressLine}</p>
                <p>{contactInfo.cityState}</p>
              </li>
              <li>
                <span>Atendimento</span>
                <p>{contactInfo.businessHours}</p>
              </li>
            </ul>
          </address>
        </div>

        <div className="footer-social-row" aria-label="Redes sociais">
          <p className="footer-column-title">Redes Sociais</p>
          <div className="footer-social-links">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-legal-row">
          <p>
            © {currentYear} {clinicInfo.name}. Todos os direitos reservados.
          </p>
          <div className="footer-legal-links">
            <a href={isInnerPage ? "/#agendamento" : "#agendamento"}>Politica de Privacidade</a>
            <a href={isInnerPage ? "/#agendamento" : "#agendamento"}>Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
