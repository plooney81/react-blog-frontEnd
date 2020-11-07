import React from 'react';
import {Card} from 'react-bootstrap';

import './ArticleCard.css';

export default function ArticleCard(props) {
    const { title, author, content, createdAt, published } = props.postData
    const timeCreated = new Date(createdAt);
    return (
        <Card className="mt-4">
            <Card.Header className="cardTitle">{title}</Card.Header>
            <Card.Body className="d-flex flex-column">
                <Card.Text>
                    {content}
                </Card.Text>
                <div className="d-flex">
                        <span className="mr-4">{author}</span>
                        <span className="timeCreated">
                            {timeCreated.getDay()}/
                            {timeCreated.getMonth()}/
                            {timeCreated.getFullYear()}
                        </span>
                    </div>
            </Card.Body>
        </Card>
    )
}
