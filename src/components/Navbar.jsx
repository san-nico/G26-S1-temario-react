import { styled } from "@linaria/react";
import logo from "../assets/logo.png";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Content = styled.div`
  display: grid;
  align-content: center;
  gap: 0.5rem;
  text-align: left;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #e2e8f0;
`;

const Link = styled.a``;

const DateText = styled.p``;

const Image = styled.img``;

function Navbar({ metadata }) {
  return (
    <Nav>
      <Image src={logo} alt="" />
      <Content>
        <Title>{metadata.titulo}</Title>
        <Link href={metadata.url}>{metadata.url}</Link>
        <DateText>Ultima Actualizacion: {metadata.fecha}</DateText>
      </Content>
    </Nav>
  );
}

export default Navbar;
