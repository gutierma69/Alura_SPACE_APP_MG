import styled from "styled-components";
import CampoTexto from "../../Campotexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`;

const Cabecera = ({ filtro, setFiltro }) => {
  return (
    <HeaderEstilizado>
      <img src="img/logo.png" alt="Logo de Space App" />
      <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>
  );
};

export default Cabecera;
