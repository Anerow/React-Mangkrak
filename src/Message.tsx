import React from "react";
import Pic from './assets/peakpx.jpg';

// Component
function Message(){
    const Moonlight = React.createElement('h5' ,null,'Daydream');

    console.log(Moonlight);
//     if(name)
//         return <div>
            
//         </div>
//     return <h1>Raja Jawa </h1>

    const Persona = React.createElement('h1' ,null,'Thantos');
    const skill1 = React.createElement('li',null,'Maeigaon');
    const skill2 = React.createElement('li',null,'Mamudoon')
    const skill3 =React.createElement('li',null,'Die For Me!');
    // const img = React.createElement('img',null,'./peakpx.jpg');
    const PersonaSkill = React.createElement('ul',null,[skill1,skill2,skill3]);
    return <div>{Persona} {PersonaSkill} <img src={Pic} alt="" /> </div>
}
// Component Properity
// function Message(prop){
//     const nama = prop.nama
//     const party = prop.party
    

//     return <p>
//         {nama} Join {party}
//     </p>
// }
// Component Childern
// function Message(name){
//     return <p>Hello {name}</p>
// }
// <Message name= 'Diddy'/>

export default Message;