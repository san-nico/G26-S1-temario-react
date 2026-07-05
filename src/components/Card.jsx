import { styled } from "@linaria/react";

const Article = styled.article`
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --text: #f8fafc;
  --text-soft: #cbd5e1;
  --text-strong: #e2e8f0;
  --transition: all 0.2s ease;

  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  overflow: hidden;
  padding: var(--space-md);
  gap: var(--space-md);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(145deg, hsl(221, 47%, 30%), hsl(221, 47%, 20%));
  color: var(--text);
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
  display: flex;
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
  color: var(--text-strong);
`;

const Icon = styled.img`
  height: 2.75rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
`;

const Stats = styled.div`
  display: grid;
  gap: var(--space-xs);
  padding: var(--space-sm);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-soft);
`;

const Label = styled.span`
  opacity: 0.7;
`;

const Value = styled.span`
  font-weight: 500;
  color: var(--text);
`;

const Bloques = styled.div`
  display: grid;
  gap: var(--space-sm);
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
  color: white;
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
  --color: 140, 50%;
`;

const DiapositivaChip = styled(Chip)`
  --color: 221, 50%;
`;

const FormularioChip = styled(Chip)`
  --color: 0, 50%;
`;

function Card({ card }) {
  return (
    <Article>
      <Header>
        <Title>
          Clase {card.id}: {card.titulo}
        </Title>
        <Icon src={`img/${card.icono}`} alt="" />
      </Header>

      <Stats>
        <Row>
          <Label>Fecha</Label>
          <Value>{card.fecha}</Value>
        </Row>

        <Row>
          <Label>Modalidad</Label>
          <Value>{card.modalidad}</Value>
        </Row>
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
            <BloqueChip
              href={card.ayudantia}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ayudantia
            </BloqueChip>
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
    </Article>
  );
}

export default Card;
