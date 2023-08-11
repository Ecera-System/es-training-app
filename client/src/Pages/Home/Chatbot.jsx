// import React from "react";
// import ChatBot from 'react-simple-chatbot';
// import {Segment} from 'semantic-ui-react';
// function Chatbot() {
//   const steps=[
//     {
//       id:'Greet',//some common name 
//       message:"Hello, Welcome to our Website",//what you want to display to the user
//       trigger:'Ask Name',//next id or any other object
//     },
//     {
//       id:'Ask Name',
//       message:'Please enter your name',
//       trigger:'waiting...'
//     },
//     {
//       id:'waiting',
//       user:true,
//       trigger:'Name'
//     },
//     {
//       id:'Name',
//       message:'Hi {previousValue}, Please, select your course',
//       trigger:'How are you?'
//     },
//     {
//       id:'course',
//       options:[
//       {value:"MERN Stack Development", label:"MERN Stack Development", trigger:"MERN Stack Development"},
//       {value:"Web Development", label:"Web Development", trigger:"Web Development"}],
      
//     },
//     {
//       id:"MERN Stack Development",
//       message:"Thanku for your information",
//       end:true
//     },
//     {
//       id:"Web Development",
//       message:"Thanku for your information",
//       end:true
//     }
//   ];
//   return( <>
//     <Segment floated="right">
//       <ChatBot steps={steps}/>
//     </Segment>
//   </>);
// };
// export default Chatbot;