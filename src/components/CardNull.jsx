import { styled } from "@linaria/react";

export default function CardNull({ card }) {
  return (
    <Article>
      <Title>
        Clase {card.id}: {card.titulo}
      </Title>
    </Article>
  );
}

const Article = styled.article`
  display: grid;
  align-content: center;
  justify-content: center;

  height: 100%;

  border-radius: 12px;
  border: 1px solid #ffffff1d;

  color: gray;
  box-shadow: 0 10px 25px #0000003f;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
  color: gray;
`;
