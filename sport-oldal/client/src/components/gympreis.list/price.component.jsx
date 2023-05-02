import React from "react";

const GymPreis = (props) => {
    const {textFirst, textSecond, preisHuf} = props;
    return(
        <div  className=''>
             <div>
                <h2>{textFirst}</h2>
                <p>{textSecond}</p>
                <p>Ár: {preisHuf} HUF</p>
             </div>
        </div>
    )

}

export default GymPreis