import styled from "styled-components";

export const SliderContainer = styled.div`
  max-height: 90vh;
  position: relative;

  @media (max-width: 600px) {
    img {
      width: 360px;
      height: 80vh;
      object-fit: cover;
    }
  }
  
`

export const Titles = styled.div`
  color: white;
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 60px;
    font-weight: 300;
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: sans-serif;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.0);
  }

  h1::after {
    content: '';
    display: block;
    width: 90%;
    height: 4px;
    margin-top: 10px;
    background-color: black;
    transition: transform 0.3s ease-in-out;
    transform: scaleX(1);
  }
  
  h2 {
    font-size: 30px;
    font-weight: 300;
    padding-top: 1px;
    padding-bottom: 20px;
    font-family: sans-serif;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.0);
  }
  
  @media (max-width: 600px) {
    h1 { 
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
    }
  }
`