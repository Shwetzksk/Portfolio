import React from 'react';
import hobbies from './Datas/hobbies';

function HobbiesCard() {

    const img = 'https://images.pexels.com/photos/4219101/pexels-photo-4219101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    return (<aside className='card hobbiesCard'>
        <h1>Hobbies</h1>
        {hobbies.map(hobby => <Hobbie key={hobby.key} img={hobby.imageURL} title={hobby.name} content={hobby.describe} />)}

    </aside >)
}

function Hobbie(props) {
    return (<div className='hobbie' id={props.key}>
        <div className='hobbies--img' style={{ backgroundImage: ` url(${props.img})` }} ></div>
        <div className='hobbies--text'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    </div>)
}



export default HobbiesCard;