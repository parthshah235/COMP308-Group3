import React, { useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Item from './Item';
import { Container, Paper } from '@mui/material';

const GET_MOTIVATIONS = gql`
    query Query($patientId: ID) {
        motivationsByPatientId(patientId: $patientId) {
            _id
            content
            type
            patientId
        }
    }
`

const Motivation = (props) => {
    const { loading, error, data } = useQuery(GET_MOTIVATIONS, {
        variables: {patientId: '6424e8128307a7bb7db20d46'}
    });

    if (data) {
        console.log('data', data.motivationsByPatientId);
    }

    // return (
    //     <>
    //     { data && 
    //         <Carousel>
    //             {data.motivationsByPatientId.map((item, index) => <Item key={index}></Item>)}
    //         </Carousel>
    //     }
    //     </>
    // );

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Container
            maxWidth="sm"
        >
            <Carousel showThumbs={false}>
                {
                    data && data.motivationsByPatientId.map(
                        (motivation, index) => <Item key={index} motivation={motivation}></Item>
                    )
                }
            </Carousel>
        </Container>
    )
}

export default Motivation