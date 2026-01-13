import { useState } from 'react';
import * as S from './styles';

type Props = {
    preview: string;
    message: string;
};

export function SecretMessage({ preview, message }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <S.Box onClick={() => setOpen(!open)}>
            {!open ? preview : message}
        </S.Box>
    );
}
