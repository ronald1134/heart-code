import { TemplateCard } from "../../components/TemplateCard";
import { useState, useEffect } from "react";
import { Parallax } from "../../components/Pallarax";
import { ParallaxSection } from "../../components/PallaraxSection";
import { Container, Grid, Footer } from "./style";
import { WaveSeparator } from "../../components/WaveSeparator";


import couple7 from "../../assets/images/couple7.jpeg";
import couple2 from "../../assets/images/couple2.jpg";
import couple3 from "../../assets/images/couple3.jpg";
import couple4 from "../../assets/images/couple4.png";
import couple8 from "../../assets/images/couple8.jpg";
import couple9 from "../../assets/images/couple9.jpeg";

import parallax1 from "../../assets/images/parallax-1.jpg";
import parallax2 from "../../assets/images/parallax-2.jpg";
import parallax3 from "../../assets/images/parallax-3.jpg";
import { DaysTogether } from "../../components/DaysTogether";
import { SidebarLetter } from "../../components/SidebarLetter";
import { useNavigate } from "react-router-dom";

export function Home() {
const navigate = useNavigate();


  const templates = [
    {
      title: "Nossa melhor foto",
      description: "Esse momento ficou incrível ❤️",
      image: couple7,
      message: [
        "Nada aqui é por acaso.",
        "Essa foto guarda mais do que parece.",
        "Ela guarda nós dois.",
      ],
    },
    {
      title: "Piada interna",
      description: "Lembra daquela vez que… 😂",
      image: couple2,
      message: [
        "Só a gente entende.",
        "E isso é o que torna especial.",
        "Eu amo nossas bobagens.",
      ],
    },
    {
      title: "Mensagem especial",
      description: "Só pra dizer… te amo 💕",
      image: couple3,
      message: [
        "Eu não digo isso por hábito.",
        "Digo porque sinto.",
        "Te amo.",
      ],
    },
    {
      title: "Surpresa!",
      description: "Vai descobrir quando clicar ✨",
      image: couple4,
      message: [
        "Nem tudo precisa ser explicado.",
        "Algumas coisas só sentidas.",
        "Essa é uma delas.",
      ],
    },
    {
      title: "Dia do Parque",
      description: "tudo é melhor com você 🌳",
      image: couple8,
      message: [
        "Aquele dia foi especial.",
        "Passear contigo é sempre um presente.",
        "Mal posso esperar pelo próximo.",
      ],
    },
    {
      title: "Promessa",
      description: "Entre nós dois",
      image: couple9,
      message: ["Nem tudo é fácil.", "Mas é real.", "E eu escolho você."],
    },
  ];
  const frases = [
    "Com você, tudo é mais leve.",
    "Até os dias difíceis ficam suportáveis.",
    "Você é casa.",
    "Você é escolha.",
    "Você é paz.",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev: number) => (prev + 1) % frases.length);
        setVisible(true);
      }, 500); // tempo da saída
    }, 4000);

    return () => clearInterval(interval);
  }, [frases.length]);

  return (
    <>
      <Parallax bg={parallax1}>
        <ParallaxSection>
          <h1>Oi, meu amor</h1>
          <p>Tudo para ti pensando em você</p>
          <DaysTogether since="2025-11-25" />
        </ParallaxSection>
      </Parallax>

      <WaveSeparator />

      <Container>
        <SidebarLetter />
        <Grid>
          {templates.map((item, index) => (
            <TemplateCard key={index} {...item} />
          ))}
        </Grid>
      </Container>

      <WaveSeparator />

      <Parallax bg={parallax2} height="60vh">
        <ParallaxSection>
          <div className={`animated-text ${visible ? "show" : ""}`}>
            <h2>{frases[index]}</h2>
          </div>
          <span>eu te vivoooo 🌹</span>
        </ParallaxSection>
      </Parallax>

      <WaveSeparator />

      <Parallax bg={parallax3} height="80vh">
        <Footer>
          <h2>Isso ainda não acabou…</h2>
          <div className="decor-line" />
          <span>Tem algo especial esperando por você ❤️</span>
          <br />

          <button className="cta-button" onClick={() => navigate("/gallery")}>
            Descobrir
          </button>
        </Footer>
      </Parallax>
    </>
  );
}
