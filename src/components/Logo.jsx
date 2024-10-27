import imagem from "../assets/image.png"
import styled from "styled-components"

function Logo() {


    return (
      <>
      <div>
        <Imagem src={imagem} alt="" />
      </div>

      </>
    )
  }
  
  export default Logo

  const Imagem=styled.img`
    width: 180px;
    height: 178px;
`
  