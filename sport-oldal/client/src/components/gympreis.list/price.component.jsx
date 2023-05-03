import React from "react";

const GymPreis = (props) => {
    const { textFirst, textSecond, preisHuf } = props;
    return (
        <div className='text-xl text-blue-100 m-3 text font-mono font-bold bg-white  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
            <div className="p-2 m-2 flex-none">
                <h2 className="flex">{textFirst}</h2>
                <div className="flex justify-between">
                    <p className="">{textSecond}</p>
                    <p className="">Ár: {preisHuf} HUF</p>
                </div>

            </div>
        </div>
    )

}

export default GymPreis