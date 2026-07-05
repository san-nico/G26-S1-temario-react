import { useEffect } from "react";
import { styled } from "@linaria/react";

import contenido from "./contenido/contenido.json";
import Card from "./components/Card";
import CardNull from "./components/CardNull";
import * as Clase from "./utils/clase";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <AppWrapper>
      <Navbar metadata={contenido.metadata} />

      <Main>
        <CardHolder>
          {contenido.clases.map((item, index) =>
            Clase.esVigente(item) ? (
              <Card key={item.id ?? index} card={item} />
            ) : (
              <CardNull key={item.id ?? index} card={item} />
            ),
          )}
        </CardHolder>
      </Main>
    </AppWrapper>
  );
}

/* ========== LAYOUT PRINCIPAL ========== */
const AppWrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(
    circle at top,
    #0b1220 0%,
    #070a12 60%,
    #05060a 100%
  );
  color: #fffc;
`;

/* ========== GRID ========== */
const CardHolder = styled.section`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 21rem));
  align-items: start;
  width: min(100%, 100rem);
  justify-self: center;
  margin: auto;
  justify-content: center;
`;

/* ========== CONTENIDO ========== */
const Main = styled.main`
  padding: 2rem 0.5rem;
  display: grid;
  gap: 2rem;
`;
