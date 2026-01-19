import { useState } from 'react';
import * as S from './style';

const messages = [
  'Nada aqui é por acaso.\nCada detalhe foi pensado com carinho.',
  'Você deve estar sorrindo agora.\nEu conheço esse sorriso.',
  'Se chegou até aqui,\né porque sente o mesmo que eu.',
  'Ainda tem mais.\nSempre vai ter.'
];

export function SidebarLetter() {
  const [index, setIndex] = useState(0);

  function handleNextMessage() {
    setIndex((prev) => (prev + 1) % messages.length);
  }

  return (
    <S.Wrapper onClick={handleNextMessage}>
      <S.Badge>Clique aqui ✨</S.Badge>

      <S.Text key={index}>
        {messages[index].split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </S.Text>

      <S.Hint>
        {index + 1}/{messages.length}
      </S.Hint>
    </S.Wrapper>
  );
}
