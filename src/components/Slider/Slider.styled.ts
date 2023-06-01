import styled from "styled-components";

export const SliderContainer = styled.section`
  position: relative;
  display: block;
  object-fit: cover;
  @media (max-width: 600px) {
    img {
      object-fit: cover;
      width: 360px;
      height: 80vh;
    }
  }

`

export const Titles = styled.div`
  color: white;
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-50%, -60%);

  .big_title {
    text-align: left;
    font-size: 55px;
    font-weight: 300;
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: sans-serif;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.0);
  }

  .big_title::after {
    content: '';
    display: block;
    width: 70%;
    height: 4px;
    margin-top: 10px;
    background-color: black;
    transition: transform 0.3s ease-in-out;
    transform: scaleX(1);
  }

  .sub_title {
    text-align: left;
    font-size: 30px;
    font-weight: 300;
    padding-top: 1px;
    padding-bottom: 20px;
    font-family: sans-serif;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.0);
  }

  @media (max-width: 900px) {
    .big_title {
      font-size: 28px;
    }

    //@media (max-width: 600px) {
    //  .big_title:last-child {
    //    font-size: 20px;
    //  }
    }
`