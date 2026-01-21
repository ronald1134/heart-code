import { TemplateCard } from '../../components/TemplateCard';
import { Parallax } from '../../components/Pallarax';
import { ParallaxSection } from '../../components/PallaraxSection';
import { Container, Grid, Footer } from './style';
import { WaveSeparator } from '../../components/WaveSeparator';


import couple7 from '../../assets/images/couple7.jpeg';
import couple2 from '../../assets/images/couple2.jpg';
import couple3 from '../../assets/images/couple3.jpg';
import couple4 from '../../assets/images/couple4.png';

import parallax1 from '../../assets/images/parallax-1.jpg';
import parallax2 from '../../assets/images/parallax-2.jpg';
import parallax3 from '../../assets/images/parallax-3.jpg';
import { DaysTogether } from '../../components/DaysTogether';
import { SidebarLetter } from '../../components/SidebarLetter';

export function Home() {

    const templates = [
        {
            title: 'Nossa melhor foto',
            description: 'Esse momento ficou incrível ❤️',
            image: couple7,
            position: 'center bottom',
        },
        {
            title: 'Piada interna',
            description: 'Lembra daquela vez que… 😂',
            image: couple2,
            position: 'center center',
        },
        {
            title: 'Mensagem especial',
            description: 'Só pra dizer… te amo 💕',
            image: couple3,
            position: 'center 30%',
        },
        {
            title: 'Surpresa!',
            description: 'Vai descobrir quando clicar ✨',
            image: couple4,
            position: 'center center',
        },
    ];


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
                <SidebarLetter /> {/* ou SidebarPhrases / SidebarTimeline */}
                <Grid>
                    {templates.map((item, index) => (
                        <TemplateCard key={index} {...item} />
                    ))}
                </Grid>
            </Container>


            <WaveSeparator />

            <Parallax bg={parallax2} height="60vh">
                <ParallaxSection>
                    <h2>Você é meu lugar favorito</h2>
                    <span>Até quando você rouba a coberta 😌</span>
                </ParallaxSection>
            </Parallax>

            <WaveSeparator />

            <Parallax bg={parallax3} height="80vh">
                <Footer>
                    <h2>Continua descendo…</h2>
                    <span>Tem mais coisas feitas com carinho ❤️</span>
                </Footer>
            </Parallax>

        </>
    );
}
