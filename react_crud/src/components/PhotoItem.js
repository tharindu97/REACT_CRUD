import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../services';

const PhotoItem = ({ id, title, thumbnailUrl }) => {

    const deletePhoto = async() => {
        try {
            await services.deletePhoto(id);
            alert('Photo Deleted Succefully!');
            window.location.reload();
            
        } catch (error) {
            alert('Delete photo failed');
        }
    }

    return (
       <Col md="auto" style={{ marginTop: 10 }}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={thumbnailUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/edit/${id}`}>
                    <Button variant="primary">Edit</Button>
                </Link>
                <Button onClick={deletePhoto} variant="danger" style={{ marginLeft: 16 }}>Delete</Button>
            </Card.Body>
            </Card>
       </Col>
    )
}

export default PhotoItem;
