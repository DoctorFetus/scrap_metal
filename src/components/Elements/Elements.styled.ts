import styled from "styled-components";

export const ElementsContainer = styled.div`
  text-align: center;
  min-height: 50vh;

  img {
    height: 150px;
    width: 150px;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .title {
    font-size: 35px;
    margin-top: 35px;
    display: block;
  }

  .icon_title {
    margin-top: 70px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    
    .title {
      font-size: 25px;
    }
    
    .wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
`