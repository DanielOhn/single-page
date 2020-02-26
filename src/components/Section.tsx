import * as React from 'react'

interface Props {
    title: string
    body: string
    side: string
}

let Section = (props: Props): JSX.Element => {
    // let getSide = ({props.side: string}) => {

    // }

    return(
        <div className="section">
            <div>
                <p className="heavy">{props.title}</p>
                <p className="light">{props.body}</p>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Section