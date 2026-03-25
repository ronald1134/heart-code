import { useState } from 'react';
import {
    Card,
    Content,
    Overlay,
    MessageBox,
    CloseButton,
    Hint,
    MessageText,
    ImageWrapper,
    ImageBackground,
    ImageForeground
} from './style';

type TemplateCardProps = {
    title: string;
    description: string;
    image: string;
    message: string[];
};

export function TemplateCard({
    title,
    description,
    image,
    message,
}: TemplateCardProps) {
    const [open, setOpen] = useState(false);
    const [line, setLine] = useState(0);

    function openCard() {
        setOpen(true);
        setLine(0);
    }

    function closeCard() {
        setOpen(false);
        setLine(0);
    }

    function nextLine() {
        if (line < message.length - 1) {
            setLine(prev => prev + 1);
        } else {
            closeCard();
        }
    }

    return (
        <>
            {open && <Overlay onClick={closeCard} />}

            <Card
                isOpen={open}
                onClick={openCard}
                aria-expanded={open}
            >

                <ImageWrapper>
                    <ImageBackground src={image} alt="" />
                    <ImageForeground src={image} alt={title} />
                </ImageWrapper>

                <Content>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Content>

                {open && (
                    <MessageBox
                        onClick={(e) => {
                            e.stopPropagation();
                            nextLine();
                        }}
                    >
                        <MessageText key={line}>
                            {message[line]}
                        </MessageText>

                        <Hint>
                            {line < message.length - 1
                                ? 'clique para continuar'
                                : 'clique para fechar'}
                        </Hint>

                        <CloseButton
                            onClick={(e) => {
                                e.stopPropagation();
                                closeCard();
                            }}
                            aria-label="Fechar mensagem"
                        >
                            ✕
                        </CloseButton>
                    </MessageBox>
                )}
            </Card>
        </>
    );
}
