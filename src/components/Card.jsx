import { styled } from "@linaria/react";

const Article = styled.article`
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --fondo-hue: 221;
  --transition: all 0.2s ease;

  filter: saturate(0.7);
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  overflow: hidden;
  padding: var(--space-md);
  gap: var(--space-md);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.08);

  background: linear-gradient(
    145deg,
    hsl(var(--fondo-hue), 47%, 30%),
    hsl(var(--fondo-hue), 47%, 20%)
  );

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-md);
  margin: calc(var(--space-md) * -1);
  margin-bottom: 0;
  padding: var(--space-md);
  background: #00000086;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
`;
const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: var(--radius-sm);
`;

const Stats = styled.div`
  display: flex;
  gap: var(--space-xs);
`;

const Value = styled.span`
  opacity: 0.8;
  font-size: 0.8rem;
  background: #0005;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
`;

const Bloques = styled.div`
  display: grid;
  gap: var(--space-sm);
  align-content: end;
`;

const Sub = styled.div`
  display: flex;
  gap: var(--space-sm);
`;

const Chip = styled.a`
  --color: 161, 0%;

  flex: 1;
  padding: 0.45rem 0.7rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgb(72, 72, 72);
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;

  cursor: pointer;
  transition: var(--transition);
  background: linear-gradient(
    135deg,
    hsl(var(--color), 40%),
    hsl(var(--color), 50%)
  );

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }
`;

const BloqueChip = styled(Chip)`
  --color: 120, 50%;
`;

const DiapositivaChip = styled(Chip)`
  --color: 210, 50%;
`;

const FormularioChip = styled(Chip)`
  --color: 0, 50%;
`;
const AyudantiaChip = styled(Chip)`
  --color: 320, 50%;
`;

export default function Card({ card }) {
  const Root = card.modalidad === "virtual" ? ArticleVirtual : Article;

  return (
    <Root>
      <Header>
        <Title>
          Clase {card.id}: {card.titulo}
        </Title>
        <IconWrapper>
          <Icon src={`img/${card.icono}`} alt="" />
        </IconWrapper>
      </Header>

      <Stats>
        <Value>{card.fecha}</Value>
        <Value>{card.modalidad}</Value>
      </Stats>

      <Bloques>
        <Sub>
          {card.bloques?.map((bloque, i) => (
            <BloqueChip
              key={bloque}
              href={bloque}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bloque {i + 1}
            </BloqueChip>
          ))}

          {card.ayudantia && (
            <AyudantiaChip
              href={card.ayudantia}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ayudantia
            </AyudantiaChip>
          )}
        </Sub>

        <Sub>
          <DiapositivaChip
            href={card.diapositiva}
            target="_blank"
            rel="noopener noreferrer"
          >
            Diapositiva
          </DiapositivaChip>

          <FormularioChip
            href={card.formulario}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entregar tarea
          </FormularioChip>
        </Sub>
      </Bloques>
    </Root>
  );
}

const ArticleVirtual = styled(Article)`
  --fondo-hue: 0;
`;
