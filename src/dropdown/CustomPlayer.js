import React from 'react'
import Select from 'react-select'



function CustomPlayer({label,options,onChangeofPlayer,isMulti}){
    
    return (
    <div className='player'>
        <div className='playerLabel'>
            <h3>{label}</h3>
        </div>
        <div className='dropdown'>
            <Select 
                isMulti={isMulti} 
                options={options} 
                onChange={onChangeofPlayer}
            />
        </div>
    </div>
    )
}

export default CustomPlayer;