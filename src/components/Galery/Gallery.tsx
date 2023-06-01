import React, {useState} from 'react';
import photo1 from "./../../common/images/1.jpg"
import photo2 from "./../../common/images/2.jpg"
import photo3 from "./../../common/images/3.jpg"
import photo4 from "./../../common/images/4.jpg"
import {
    BigImg,
    BigPhotoContainer,
    GalleryContainer, GalleryTitle,
    SmallImg,
    SmallPhotosContainer,
} from "./Gallery.styled";
import {Container} from "../../common/Container.styled";

type photosType= {
    id: number, src: string, alt: string
}

const Gallery = () => {
    const photos: Array<photosType> = [
        {id: 1, src: photo1, alt: "1"},
        {id: 2, src: photo2, alt: "2"},
        {id: 3, src: photo3, alt: "3"},
        {id: 4, src: photo4, alt: "4"}
    ]

    const [current, setCurrent] = useState<string>(photo1)

    const smallPhotos = photos.map(photo => {

        const setBigHandler = (src: string) => {
            setCurrent(src)
        }

        const border = current === photo.src ? {border: "4px solid black", opacity: "0.8"} : {border: "2px solid black"}

        return <SmallImg
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            onClick={() => setBigHandler(photo.src)}
            style={border}
        />
    })

    return (
        <Container>
            <GalleryContainer>
                <GalleryTitle>Галерея </GalleryTitle>
                <BigPhotoContainer><BigImg src={current} alt="big photo"/></BigPhotoContainer>
                <SmallPhotosContainer>
                    {smallPhotos}
                </SmallPhotosContainer>
            </GalleryContainer>
        </Container>

    );
};

export default Gallery;