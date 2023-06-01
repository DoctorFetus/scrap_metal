import styled from "styled-components";

export const GalleryContainer = styled.section`
  margin-top: 50px;
  @media (max-width: 600px) {
    //display: none;
  }
`

export const GalleryTitle = styled.h2`
  text-align: center;
  font-size: 40px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`

export const SmallPhotosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`

export const BigPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SmallImg = styled.img`
  width: 20%;
  height: auto;
  cursor: pointer;
`

export const BigImg = styled.img`
  margin-top: 30px;
  width: 95%;
  height: auto;
  border: 3px solid black;
  
`