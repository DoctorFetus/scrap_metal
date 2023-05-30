import styled from "styled-components";

export const FooterContainer = styled.div`
    padding: 30px;
    background-color: rgb(40,40,40);
    display: flex;
    align-items: center;
    font-size: 15px;
  .wrapper {
    max-width: 1220px;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  .info {
    text-align: center;
  }
  
  @media (max-width: 600px) {
    padding: 10px;
    .wrapper {
      flex-direction: column;
      font-size: 10px;
      gap: 2px;
    }
  }
  
`