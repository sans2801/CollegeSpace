import React from 'react'

const Comment = ({name, text, time}) => {
    return (
        <div>
            <div className="media mb-4" style={{display: "inline-block"}}>
                <div className="media-body">
                    <h3 className="mt-0">{name}</h3>
                    <h6>{time}</h6>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Comment