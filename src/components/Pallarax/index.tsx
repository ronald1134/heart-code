import type { ReactNode } from 'react';
import * as S from './styles';
import { useParallax } from '../../hooks/UsePallarax';

type Props = {
    bg: string;
    height?: string;
    overlay?: number;
    speed?: number;
    children?: ReactNode;
};

export function Parallax({
    bg,
    height,
    overlay,
    speed = 0.3,
    children,
}: Props) {
    const offset = useParallax(speed);

    return (
        <S.Wrapper
            bg={bg}
            height={height}
            overlay={overlay}
            style={{
                backgroundPosition: `center top calc(100% + ${offset}px)`,
            }}
        >
            {children}
        </S.Wrapper>
    );
}
