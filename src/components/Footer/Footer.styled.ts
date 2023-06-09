import styled from "styled-components";

export const FooterContainer = styled.footer`

  padding: 30px;
  background-color: rgb(40, 40, 40);
  display: flex;
  align-items: center;
  font-size: 15px;
  flex-direction: column;
  color: white;
  
  .copyright {
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
  }
  
  .footer_wrapper {
    max-width: 1220px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }

  .info {
    text-align: center;
  }


  @media (max-width: 1000px) {
    .footer_wrapper {
      font-size: 10px;
    }
  }
  
  @media (max-width: 600px) {
    .footer_wrapper {
      flex-direction: column;
      font-size: 10px;
      gap: 2px;
    }
  }
  
  @media (max-width: 1000px) {
    .copyright {
      margin-top: 4px;
      font-size: 8px;
    }
  }

`