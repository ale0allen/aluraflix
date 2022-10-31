import React from 'react'

function ButtonLink(props) {

    console.log(props);
    return (
        <a href="vareia" className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;