import React from "react";
import Parameter from "../parameter/parameter";

const TypeFilter = ({value, onChange, types}) => {
    return (
        <div>
            {
                types.map(t => <Parameter key={t} t={t} value={value} onChange={onChange}/>)
            }
        </div>
    )
}

export default TypeFilter;