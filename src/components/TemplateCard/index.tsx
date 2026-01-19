import { useState } from 'react';
import {
    Card,
    Image,
    Content,
    Overlay,
    MessageBox,
    CloseButton,
} from './style';

type TemplateCardProps = {
    title: string;
    description: string;
    image: string;
    position?: string;
};


export function TemplateCard({
    title,
    description,
    image,
}: TemplateCardProps) {
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(prev => !prev);
    }

    return (
        <>
            {open && <Overlay onClick={toggle} />}

            <Card isOpen={open} onClick={toggle}>

                <Image src={image} alt={title} />

                <Content>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Content>

                {open && (
                    <MessageBox>
                        <p>
                            Aqui entra a mensagem especial desse card 💖
                            Pode ser texto longo, surpresa, piada interna, etc.
                        </p>
                        <CloseButton
                            onClick={(e) => {
                                e.stopPropagation();
                                toggle();
                            }}
                        >
                            ✕
                        </CloseButton>

                    </MessageBox>
                )}
            </Card>
        </>
    );
}
