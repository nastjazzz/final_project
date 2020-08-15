import React from "react";
import Parameter from "../parameter/parameter";

const GenderFilter = ({value, onChange, genders}) => {
    return (
        <>
            {
                genders.map(g => (
                        <Parameter key={g} t={g} value={value} onChange={onChange} /> ))
            }
        </>
    )
}

export default GenderFilter;