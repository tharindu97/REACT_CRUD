import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../services';


const AddScreen = () => {

    const history = useHistory();
    const [photoTitle, setPhotoTitle] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const handleSubmit = async () => {
        try {

            if(!photoTitle || !photoURL){
                alert('Title or Photo URL is required!');
                return;
            }
            const photo = { photoURL, photoTitle};
            await services.addPhoto(photo);
            console.log(photo)
            alert('Photo Added Successfully!');
            history.replace('/');

            
        } catch (error) {
            console.log(error);
            alert('Add photo failed!')
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Photo Title</Form.Label>
                            <Form.Control 
                                type="title" 
                                placeholder="Enter Photo title"
                                onChange={e => setPhotoTitle(e.target.value)}
                                value={photoTitle}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control 
                                type="photourl" 
                                placeholder="http://example/photo.jpg"
                                onChange={e => setPhotoURL(e.target.value)}
                                value={photoURL}
                                required 
                            />
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddScreen;
