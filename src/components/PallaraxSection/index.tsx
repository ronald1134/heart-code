import type { ReactNode } from 'react';
import * as S from './styles';

type Props = {
    children: ReactNode;
};

export function ParallaxSection({ children }: Props) {
    return <S.Content>{children}</S.Content>;
}
