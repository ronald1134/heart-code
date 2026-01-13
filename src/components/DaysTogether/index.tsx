import { Container, TimeGrid, Box } from './styles';
import { useDaysTogether } from './useDaysTogether';

type Props = {
    since: string;
};

export function DaysTogether({ since }: Props) {
    const { days, hours, minutes, seconds } = useDaysTogether(since);

    return (
        <Container>
            <h2>Nosso tempo juntos 💕</h2>

            <TimeGrid>
                <Box>
                    <strong>{days}</strong>
                    <span>dias</span>
                </Box>
                <Box>
                    <strong>{hours}</strong>
                    <span>horas</span>
                </Box>
                <Box>
                    <strong>{minutes}</strong>
                    <span>min</span>
                </Box>
                <Box>
                    <strong>{seconds}</strong>
                    <span>seg</span>
                </Box>
            </TimeGrid>
        </Container>
    );
}
