import React, { useState } from 'react';

function ListElement(props) {
    let [elementList, setJob] = useState(props.elementList);

    return(
        <p>{elementList}</p>
    )
} 

export default ListElement;