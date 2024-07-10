import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SeccionFlotante = styled.section`
  flex-grow: 1;
`;

const ImagenContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`;

const Galeria = ({
  fotos = [],
  setTag,
  alSeleccionarFoto,
  alAlternarFavorito,
}) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GaleriaContainer>
        <SeccionFlotante>
          <Titulo>Navega por la galería</Titulo>
          <ImagenContainer>
            {fotos.map((foto) => (
              <Imagen
                foto={foto}
                key={foto.id}
                alSolicitarZoom={alSeleccionarFoto}
                alAlternarFavorito={alAlternarFavorito}
              />
            ))}
          </ImagenContainer>
        </SeccionFlotante>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
