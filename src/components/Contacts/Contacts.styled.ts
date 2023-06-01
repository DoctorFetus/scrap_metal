import styled from "styled-components";

export const ContactsWrapper = styled.div`

  min-height: 50vh;
  margin: 0 auto;

  .title {
    font-size: 30px;
    text-align: center;
  }

  .information_wrapper {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .information {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .text {
    line-height: 27px;
  }

  @media (max-width: 1130px) {
    .information_wrapper {
      flex-direction: column;
      gap: 20px;
    }
  }
  
  @media (max-width: 600px) {
    .information_wrapper {
      margin: 20px auto;
      padding: 20px;
      gap: 20px;
      flex-direction: row;
    }
    .title {
      font-size: 25px;
    }
    .text {
      font-size: 17px;
    }
    .information {
      gap: 20px;
    }

  }
`;