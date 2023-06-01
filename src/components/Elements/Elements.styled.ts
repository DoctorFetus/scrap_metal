import styled from "styled-components";

export const ElementsContainer = styled.div`

  text-align: center;
  //min-height: 50vh;

  img {
    height: 150px;
    width: 150px;
  }

  .elements_wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
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
    .elements_wrapper {
      flex-direction: column;
      align-items: center;
    }
  }

    @media (max-width: 600px) {
      .title {
        font-size: 25px;
      }
  }
`