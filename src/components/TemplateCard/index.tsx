import { Card, Image, Content } from './style';

type TemplateCardProps = {
    title: string;
    description: string;
    image: string;
};

export function TemplateCard({
    title,
    description,
    image,
}: TemplateCardProps) {
    return (
        <Card>
            <Image src={image} alt={title} />
            <Content>
                <h3>{title}</h3>
                <p>{description}</p>
            </Content>
        </Card>
    );
}
