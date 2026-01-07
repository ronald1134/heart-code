import { TemplateCard } from '../../components/TemplateCard';
import { Container, Grid, Parallax, ParallaxContent } from './style';


import couple1 from '../../assets/images/couple1.jpg';
import couple2 from '../../assets/images/couple2.jpg';
import couple3 from '../../assets/images/couple3.jpg';
import couple4 from '../../assets/images/couple4.png';

import parallax1 from '../../assets/images/parallax-1.jpg';
import parallax2 from '../../assets/images/parallax-2.jpg';
import parallax3 from '../../assets/images/parallax-3.jpg';



export function Home() {
    const templates = [
        {
            title: 'Nossa melhor foto',
            description: 'Esse momento ficou incrível ❤️',
            image: couple1,
        },
        {
            title: 'Piada interna',
            description: 'Lembra daquela vez que… 😂',
            image: couple2,
        },
        {
            title: 'Mensagem especial',
            description: 'Só pra dizer… te amo 💕',
            image: couple3,
        },
        {
            title: 'Surpresa!',
            description: 'Vai descobrir quando clicar ✨',
            image: couple4,
        },
    ];


    return (
        <>
            {/* PARALLAX HERO */}
            <Parallax bg={parallax1} height="100vh"/>
            <ParallaxContent>
                <h1>Oi, meu amor</h1>
                <p>tudo para ti pensando em você</p>
            </ParallaxContent>


            {/* CONTEÚDO */}
            <Container>
                <Grid>
                    {templates.map((item, index) => (
                        <TemplateCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </Grid>
            </Container>

            {/* PARALLAX MENSAGEM */}
            <Parallax bg={parallax2} height="60vh"/>
                <ParallaxContent>
                    <h2>Você é meu lugar favorito</h2>
                    <span>Até quando você rouba a coberta 😌</span>
                </ParallaxContent>
            

            {/* PARALLAX FINAL */}
            <Parallax bg={parallax3} height='80vh'/>
                <ParallaxContent>
                    <h2>Continua descendo…</h2>
                    <span>Tem mais coisas feitas com carinho ❤️</span>
                </ParallaxContent>
            
        </>
    );
}

