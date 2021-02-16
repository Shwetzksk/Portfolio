import React from 'react';
import frontend from './Datas/skills';


function Skill(props) {
    return (
        <div className='skill' id={props.key}>
            <p>{props.tool}</p>
            <div className='skill--bar' ><div className='skill--parameter'
                style={{ width: `${props.range}` }} ></div> </div>
        </div>
    );
}
export default Skill;