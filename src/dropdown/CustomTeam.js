import React from 'react'
import Select from 'react-select'

function CustomTeam({label,options,onChange}){
    return (
    <div className='team'>
        <div className='teamLabel'>
            <h3>{label}</h3>
        </div>
        <div className='dropdown'>
            <Select options={options} onChange={onChange} />
        </div>
    </div>
    )
}

export default CustomTeam;