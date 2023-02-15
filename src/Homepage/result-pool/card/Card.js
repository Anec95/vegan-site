import React, {useState} from 'react'

export default function Card(props) {

    return (
        <div>
            <img src={props.info.image} />
            <h3>{props.info.title}</h3>
            <p>{props.info.summary}</p>
        </div>
    )
}