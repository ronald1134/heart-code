import type { ReactNode } from 'react';
import * as S from './styles';

type Props = {
    bg: string;
    height?: string;
    overlay?: number;
    children?: ReactNode;
};

export function Parallax({ bg, height, overlay, children }: Props) {
    return (
        <S.Wrapper bg={bg} height={height} overlay={overlay}>
            {children}
        </S.Wrapper>
    );
}
