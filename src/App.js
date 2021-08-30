import React, { useState } from 'react'
import CustomPlayer from './dropdown/CustomPlayer';
import CustomTeam from './dropdown/CustomTeam';
import Options from './dropdown/options';
import './app.css'



const App = () => {
    const [count, setCount] = useState(0)
    const [players, setPlayers] = useState([])
    let x = 0;

    const onChangeInput = (item) => {
        x = item.num
        // console.log(`value of value.num is ${item.num}`);
        // console.log(`value of teamNum is ${x}`);

        // console.log(Options[x-1].value);
        setPlayers(Options[x-1].value);
    }

    
    
    const updateFunction = (value) => {
        setCount(value.length)
        // console.log(`value.length is ${value.length}`);
        // console.log(`count is ${count}`);
    }

    return (
        <div className='container'>
            <div className='header'>
                <h3>Team and Player Selection</h3>
            </div>
            <div>
                <CustomTeam onChange={onChangeInput} options={Options} label="Choose Team" />
            </div>
            <div style={ players.length===0 ? {display : 'none'} : {display: 'block'} }>
                <CustomPlayer isMulti={true} onChangeofPlayer={updateFunction} options={players} label="Choose Player (4 max)" />
            </div>
            <div className='button'>
                <button type="submit" className='btn' disabled={count>4 ? true : false} >PAY AND REGISTER</button>
            </div>
        </div>
    );
}

export default App;


// const options=[
//     {label:'Team1',value:["A","B","C","D","E","F"]},
//     {label:'Team2',value:["A","B","C","D","E"]},
//     {label:'Team3',value:["A","B","C","D","E","F","G"]},
//     {label:'Team4',value:["A","B","C","D","E","F","G","H","I"]},
// ]

// const players=[
//     {label:'Player1',value:'Player1'},
//     {label:'Player2',value:'Player2'},
//     {label:'Player3',value:'Player3'},
//     {label:'Player4',value:'Player4'},
//     {label:'Player5',value:'Player5'},
//     {label:'Player6',value:'Player6'},
//     {label:'Player7',value:'Player7'},
// ]
  


// [
//     {label:"player A", value:"A"},{label:"player B", value:"B"},{label:"player C", value:"C"},{label:"player D", value:"D"},{label:"player E", value:"E"},{label:"player F", value:"F"},{label:"player G", value:"G"},{label:"player H", value:"H"},{label:"player I", value:"I"}
//     {"B"},
//     {"C"},
//     {"D"},
//     {"E"},
//     {"F"}
// ]