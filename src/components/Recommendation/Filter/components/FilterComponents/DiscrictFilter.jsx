import React from "react";
import Parameter from "../parameter/parameter";

const DistrictFilter = ({value, onChange, districts}) => {
    return (
        <>
            {
                districts.map(d => (
                        <Parameter key={d} t={d} value={value} onChange={onChange} /> ))
            }
        </>
    )
}

export default DistrictFilter;