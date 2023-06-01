import styled from "styled-components";

export const PurchaseContainer = styled.section`
    display: flex;
    //justify-content: space-between;
    flex-direction: column;
    font-size: 30px;
    //min-height: 35vh;
    align-items: center;
    margin-top: 30px;
  
  .call {
    display: block;
    text-decoration: none;
    background-color: red;
    color: white;
    padding: 20px;
    margin-top: 80px;
    border-radius: 5px;
    transition: 0.3s all;
  }
  .call:hover {
    background-color: rgb(196,30,58);
  }
  
  @media (max-width: 600px) {
    font-size: 20px;
    min-height: 0;
  }
  .call {
    margin-top: 50px;
  }
`