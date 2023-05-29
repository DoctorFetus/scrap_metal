import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100px;
  background-color: white;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 15;
  padding: 0 30px;
  font-size: 20px;

  @media (max-width: 600px) {
    display: none;
    z-index: -1;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  a {
    color: black;
    text-decoration: none;
  }
  
  a:hover {
    color: gray;
  }
`

export const HeaderTitle = styled.h2`
font-size: 25px;
`