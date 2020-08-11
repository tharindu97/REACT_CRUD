import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import PhotoItem from '../components/PhotoItem';
import services from '../services';


const HomeScreen = () => {

    const [photos, setPhotos] = useState(null);

    const fetchPhotos = async () => {
        try {
            const resp = await services.getAllPhotos();
            setPhotos(resp.data);
        }catch(error){
            alert('Failed to fetch photos');
        }
    }


    useEffect(() => {
        fetchPhotos()
    },[])


    if(!photos){
        return (
            <Container>
                <Row>
                    <p>Loading Photos......</p>
                </Row>
            </Container>
        )
    }

    return (
        <Container>
            <Row>

                {photos.slice(0,50).map(photoItem => (
                    <PhotoItem 
                          key={photoItem.id}
                          title={photoItem.title}
                          thumbnailUrl={photoItem.thumbnailUrl}              
                    />
                ))}

            </Row>
        </Container>
    )
}

export default HomeScreen;
