import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./components/Reveal";
import PrimaryButton from "./components/PrimaryButton";
import PremiumFooter from "./components/SiteFooter";
import heroReferenceFallback from "../References/home.png";

const homeNavItems = [
  { label: "Serviços", href: "/servicos" },
  { label: "Estética", href: "#tratamentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Agendamento", href: "#agendamento" },
];

const aboutNavItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Agendamento", href: "/#agendamento" },
];

const servicesNavItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Agendamento", href: "/#agendamento" },
];

const whatsappContact = {
  phone: "551130007788",
  message: "Olá, gostaria de saber mais sobre o tratamento estético",
};

const featuredTreatments = [
  {
    label: "REFINAMENTO DÉRMICO",
    title: "Harmonização Estrutural",
    description:
      "Protocolos personalizados para refinar contornos e restaurar vitalidade com resultado natural e elegante.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "LUMINOSIDADE A LASER",
    title: "Renovação de Luminosidade",
    description:
      "Tecnologia fracionada para suavizar textura, linhas finas e poros, elevando o brilho da pele com precisão.",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "BEM-ESTAR",
    title: "Ritual de Rejuvenescimento",
    description:
      "Combinação entre ciência da pele e bem-estar para uma transformação sofisticada e progressiva.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },
];

const heroPrimaryImage =
  "https://images.unsplash.com/photo-1700522924565-9fad1c05469e?auto=format&fit=crop&w=2200&q=80";
const heroFallbackImage =
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=2200&q=80";
const heroImages = [heroPrimaryImage, heroFallbackImage, heroReferenceFallback];

const studioImages = [
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    alt: "Suíte de atendimento Sempre Bela",
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=80",
    alt: "Toalhas e luz suave em ambiente de alto padrão",
  },
  {
    src: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=900&q=80",
    alt: "Poltronas em sala de espera sofisticada",
  },
  {
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    alt: "Equipamento estético de alta tecnologia",
  },
];

const teamMembers = [
  {
    name: "Dra. Elena Vance",
    role: "Diretora Clínica",
    bio: "Especialista em arquitetura facial com olhar clínico, preciso e profundamente natural.",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Julian Thorne",
    role: "Especialista em Estética",
    bio: "Medicina estética regenerativa, bioestímulo e protocolos de rejuvenescimento avançado.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sasha Moore",
    role: "Esteticista Facial",
    bio: "Tratamentos de pele, peelings químicos e terapias de textura com acabamento refinado.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
];

const serviceSections = [
  {
    number: "01.",
    title: "Rejuvenescimento Facial",
    description:
      "Restaure vitalidade, textura e luminosidade com protocolos faciais desenhados para preservar sua naturalidade e refinar cada detalhe.",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rosto feminino com pele iluminada em estética facial",
    imageSide: "right",
    protocols: [
      {
        title: "Bioestimuladores de Colágeno",
        text: "Estímulo progressivo de firmeza para uma pele mais densa, viçosa e elegante.",
      },
      {
        title: "Protocolos Faciais Personalizados",
        text: "Combinações sob medida para textura, poros, linhas finas e luminosidade.",
      },
    ],
  },
  {
    number: "02.",
    title: "Contorno Corporal",
    description:
      "Defina sua silhueta com precisão não invasiva. Nossos protocolos atuam em firmeza, medidas e remodelação com conforto e segurança.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Detalhe corporal em tratamento estético sofisticado",
    imageSide: "left",
    protocols: [
      {
        title: "Remodelação Corporal",
        text: "Planejamento por área para melhorar contorno, textura e proporção corporal.",
      },
      {
        title: "Drenagem Linfática Técnica",
        text: "Toque preciso para leveza, redução de retenção e bem-estar pós-protocolo.",
      },
    ],
  },
  {
    number: "03.",
    title: "Tecnologias Avançadas",
    description:
      "Tecnologia, ciência e cuidado clínico reunidos para tratar firmeza, pigmentação, textura e qualidade da pele com alto padrão.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Equipamentos e frascos laboratoriais em ambiente clínico",
    imageSide: "right",
    protocols: [
      {
        title: "Laser Fracionado",
        text: "Renovação controlada para suavizar manchas, linhas finas e irregularidades.",
      },
      {
        title: "Radiofrequência para Firmeza",
        text: "Tecnologia térmica para estimular colágeno e melhorar sustentação da pele.",
      },
    ],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const isAboutPage = window.location.pathname === "/sobre";
  const isServicesPage = window.location.pathname === "/servicos";
  const navItems = isServicesPage ? servicesNavItems : isAboutPage ? aboutNavItems : homeNavItems;

  return (
    <div className="page">
      <SiteHeader
        navItems={navItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        ctaHref={isAboutPage || isServicesPage ? "/#agendamento" : "#agendamento"}
      />

      <main>
        {isServicesPage ? (
          <ServicesPage />
        ) : isAboutPage ? (
          <AboutPage />
        ) : (
          <HomePage
            heroImage={heroImages[heroImageIndex]}
            onHeroImageError={() => {
              setHeroImageIndex((current) => Math.min(current + 1, heroImages.length - 1));
            }}
            shouldReduceMotion={shouldReduceMotion}
          />
        )}
      </main>

      <WhatsAppFloat />
      <PremiumFooter isInnerPage={isAboutPage || isServicesPage} />
    </div>
  );
}

function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${whatsappContact.phone}?text=${encodeURIComponent(
    whatsappContact.message,
  )}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Sempre Bela pelo WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16.03 4.5C9.7 4.5 4.55 9.57 4.55 15.8c0 2.15.62 4.25 1.8 6.06L4.5 27.5l5.86-1.8a11.58 11.58 0 0 0 5.67 1.46c6.33 0 11.47-5.07 11.47-11.3S22.36 4.5 16.03 4.5Zm0 20.68c-1.78 0-3.51-.49-5.03-1.42l-.36-.22-3.48 1.07 1.1-3.35-.24-.38a9.26 9.26 0 0 1-1.5-5.08c0-5.14 4.27-9.32 9.51-9.32 5.25 0 9.52 4.18 9.52 9.32s-4.27 9.38-9.52 9.38Zm5.22-6.98c-.29-.14-1.7-.83-1.96-.92-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.62.07-.29-.14-1.22-.44-2.32-1.41-.86-.75-1.44-1.68-1.6-1.96-.17-.28-.02-.44.12-.58.13-.13.29-.33.43-.49.14-.16.19-.28.29-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.52-.88-2.08-.23-.54-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.42 0 1.43 1.05 2.81 1.2 3 .14.19 2.07 3.1 5.02 4.35.7.3 1.25.48 1.68.61.71.22 1.35.19 1.85.12.57-.08 1.7-.68 1.94-1.34.24-.66.24-1.23.17-1.34-.07-.12-.26-.19-.55-.33Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}

function SiteHeader({ navItems, menuOpen, setMenuOpen, ctaHref }) {
  return (
    <>
      <header className="mobile-topbar">
        <button
          className="menu-btn"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <a href="/" className="brand">
          SEMPRE BELA
        </a>
        <a href={ctaHref} className="icon-circle" aria-label="Ir para agendamento">
          <span className="icon-plus" aria-hidden="true" />
        </a>
      </header>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <header className="desktop-nav">
        <div className="desktop-nav-container">
          <a href="/" className="brand">
            SEMPRE BELA
          </a>

          <div className="desktop-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <PrimaryButton href={ctaHref}>Consultoria</PrimaryButton>
        </div>
      </header>
    </>
  );
}

function HomePage({ heroImage, onHeroImageError, shouldReduceMotion }) {
  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-frame">
          <img
            className="hero-image"
            src={heroImage}
            onError={onHeroImageError}
            alt="Recepção de alto padrão de clínica estética"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="hero-guides" aria-hidden="true">
            <span />
            <span />
          </div>

          <Reveal className="hero-content">
            <div className="hero-text-wrap">
              <p className="kicker">EXCELÊNCIA CLÍNICA ATEMPORAL</p>
              <h1>
                Excelência Clínica, <em>Beleza Atemporal.</em>
              </h1>
              <p className="hero-description">
                Protocolos personalizados para realçar sua beleza com leveza, tecnologia
                avançada e acabamento sofisticado.
              </p>

              <div className="hero-actions">
                <PrimaryButton href="/sobre">Explore a experiência</PrimaryButton>
                <a href="#agendamento" className="text-link">
                  Agendar avaliação
                </a>
              </div>
            </div>
          </Reveal>
          <span className="scroll-hint">ROLE PARA EXPLORAR</span>
        </div>
      </section>

      <section className="section philosophy-intro">
        <Reveal className="philosophy-product">
          <img
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"
            alt="Frascos de cuidados com a pele em luz editorial"
          />
          <article className="philosophy-quote-card">
            <p>
              "A beleza é uma expressão de equilíbrio entre ciência, cuidado e
              sensibilidade."
            </p>
          </article>
        </Reveal>

        <Reveal className="philosophy-intro-copy" delay={0.08}>
          <p className="about-kicker">NOSSA FILOSOFIA</p>
          <h2>
            Uma curadoria da beleza com precisão, ciência e sensibilidade.
          </h2>
          <p>
            Na Sempre Bela, acreditamos que a estética vai além do procedimento:
            ela nasce do cuidado, da escuta e da personalização de cada detalhe.
            Nossa abordagem une técnica, leveza e sofisticação para valorizar a
            sua beleza de forma autêntica.
          </p>
          <p>
            Cada protocolo é pensado de maneira individual, respeitando suas
            características, objetivos e momento de vida. Combinamos tecnologia,
            conhecimento clínico e um olhar apurado para proporcionar uma
            experiência segura, refinada e verdadeiramente transformadora.
          </p>
          <a href="/sobre" className="text-link dark">
            Conheça nossa filosofia
          </a>
        </Reveal>
      </section>

      <section id="tratamentos" className="section treatments">
        <Reveal className="treatments-head">
          <div>
            <p className="kicker">SELEÇÃO ASSINADA</p>
            <h2>Tratamentos em Destaque</h2>
          </div>
          <p>
            Uma curadoria desenhada para mulheres que desejam naturalidade,
            luminosidade e sofisticação em cada detalhe.
          </p>
        </Reveal>

        <div className="cards">
          {featuredTreatments.map((treatment, index) => (
            <Reveal key={treatment.title} delay={index * 0.08}>
              <motion.article
                className="treatment-card"
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.32 }}
              >
                <img src={treatment.image} alt={treatment.title} />
                <div className="card-body">
                  <p className="card-label">{treatment.label}</p>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.description}</p>
                  <a href="#agendamento" className="text-link dark">
                    Saiba mais
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="treatments-more">
          <PrimaryButton href="/servicos" variant="outline">
            Ver mais
          </PrimaryButton>
        </Reveal>
      </section>

      <section className="quote-band">
        <Reveal className="quote-band-inner">
          <p className="quote-symbol">"</p>
          <blockquote>
            "A Sempre Bela é mais que uma clínica. É um novo padrão de cuidado,
            sofisticação e confiança para mulheres exigentes."
          </blockquote>
          <p className="quote-author">ELISA MOURA - DIRETORA CLÍNICA</p>
        </Reveal>
      </section>

      <section id="agendamento" className="section reserve">
        <Reveal className="reserve-inner">
          <div>
            <h2>Reserve sua experiência.</h2>
            <p>Consultas privadas e atendimento com horário marcado.</p>
          </div>

          <div className="reserve-actions">
            <PrimaryButton href="#agendamento">Agendar agora</PrimaryButton>
            <PrimaryButton href="/sobre" variant="outline">
              Falar com consultora
            </PrimaryButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-legacy section">
        <Reveal className="about-legacy-copy">
          <p className="about-kicker">NOSSA HISTÓRIA</p>
          <h1>
            Construindo a <em>Arte do Cuidado</em>
          </h1>
          <p>
            Fundada para elevar a experiência estética a um ritual de cuidado autoral, a
            Sempre Bela une excelência clínica, acolhimento e sofisticação silenciosa.
          </p>
          <p>
            Nossa jornada começa em um diagnóstico preciso e segue em protocolos
            desenhados para tratar cada rosto e cada pele como uma composição única.
          </p>
        </Reveal>

        <Reveal className="about-legacy-visual" delay={0.08}>
          <img
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"
            alt="Frascos de cuidados com a pele em luz suave"
          />
          <article className="about-quote-card">
            <p>"A beleza mora na precisão de cada detalhe."</p>
            <span>DRA. ELISA VALE, FUNDADORA</span>
          </article>
        </Reveal>
      </div>

      <section className="about-environment">
        <div className="section">
          <Reveal className="environment-head">
            <div>
              <p className="about-kicker">O AMBIENTE</p>
              <h2>
                Uma atmosfera de <em>luxo sereno.</em>
              </h2>
            </div>
            <p>01 / EXPERIÊNCIA DO ESTÚDIO</p>
          </Reveal>

          <div className="environment-grid">
            {studioImages.map((image, index) => (
              <Reveal key={image.src} className={`studio-image studio-image-${index + 1}`}>
                <img src={image.src} alt={image.alt} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-team">
        <Reveal className="team-head">
          <p className="about-kicker">EXCELÊNCIA CLÍNICA</p>
          <h2>
            As mentes por trás <br />
            da Sempre Bela
          </h2>
        </Reveal>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} className={`team-card team-card-${index + 1}`}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p>{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <Reveal className="about-cta-inner">
          <h2>Comece sua jornada para uma beleza refinada.</h2>
          <div>
            <PrimaryButton href="/servicos" variant="outline">
              Ver serviços
            </PrimaryButton>
            <PrimaryButton href="/#agendamento">Agendar consultoria</PrimaryButton>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="services-page">
      <section className="section services-hero">
        <Reveal className="services-hero-copy">
          <p className="about-kicker">SERVIÇOS E ESPECIALIDADES</p>
          <h1>
            Excelência <em>Clínica</em> Definida.
          </h1>
          <p>
            Explore uma seleção de tratamentos estéticos avançados, onde
            precisão médica encontra cuidado personalizado. Cada jornada é
            desenhada para revelar sua versão mais refinada.
          </p>
        </Reveal>
        <span className="services-scroll">ROLE PARA EXPLORAR</span>
      </section>

      <div className="section services-list">
        {serviceSections.map((service, index) => (
          <Reveal
            key={service.title}
            className={`service-detail service-detail-${service.imageSide}`}
            delay={index * 0.06}
          >
            <div className="service-detail-copy">
              <h2>
                <span>{service.number}</span> {service.title}
              </h2>
              <p>{service.description}</p>
              <div className="protocol-list">
                {service.protocols.map((protocol) => (
                  <article className="protocol-card" key={protocol.title}>
                    <div>
                      <h3>{protocol.title}</h3>
                      <p>{protocol.text}</p>
                    </div>
                    <a href="/#agendamento" aria-label={`Agendar ${protocol.title}`}>
                      ↗
                    </a>
                    <span>CONSULTA</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="service-detail-image">
              <img src={service.image} alt={service.imageAlt} />
            </div>
          </Reveal>
        ))}
      </div>

      <section className="section services-final-cta">
        <Reveal className="services-final-inner">
          <p className="about-kicker">CURADORIA PERSONALIZADA</p>
          <h2>
            Comece sua jornada <em>Sempre Bela.</em>
          </h2>
          <p>
            Cada face e cada corpo pedem uma leitura própria. Agende uma
            avaliação privativa para desenharmos um plano clínico sob medida.
          </p>
          <PrimaryButton href="/#agendamento">Agendar consultoria</PrimaryButton>
        </Reveal>
      </section>
    </div>
  );
}
