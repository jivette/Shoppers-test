import React from 'react'

function CardContent(props) {
    const {item} = props;
    return (
        <div className="column">
            <div className="columns p-6">
                <div className="column is-one-fifth">
                </div>
                <div className="column">
                    <h1 className="is-size-5 is-size-5-mobile">{item.title}</h1>  
                    <p>{item.content}</p>
                </div>
            </div>
        </div>
    )
}

export default CardContent
