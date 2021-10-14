import React from "react";
import { Card } from 'react-bootstrap';

export default function Movie (props) {
    const { movie } = props;

    return(
        <div className="center">
            <br />
            <Card style={{ width: '22rem' }} className="Ok">
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="img"/>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Year}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}