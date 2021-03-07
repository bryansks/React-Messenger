import './App.css';
import './App.css';
import React, {useState,useEffect} from 'react';


import firebase from "firebase";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,

} from "@react-firebase/auth";
import { config } from "./config";
import Login  from './components/login.jsx'
import ChatWindow from './components/chatWindow';


function App() {


  const [state, setState] = useState(false);

    useEffect(() => setTimeout(()=>setState(true), 2000), []);

  


  return(


         <FirebaseAuthProvider {...config} firebase={firebase}>

         <FirebaseAuthConsumer>


       
         
       {() => {

        

       
           var user = firebase.auth().currentUser;
           
        

            if (user) {
               // User is signed in.

               return(
                 
                 <div>

                   <ChatWindow/>
                  
                   
                 </div>
                
                  
               );
            } else if (user===null&& state==true)  {

               // No user is signed in.

                return(
                  
                  <div>
                    
                    <Login />
                    
                  </div>
                  
                  
               )
             } 

             
       }}

       </FirebaseAuthConsumer> 

        </FirebaseAuthProvider>  
  )
 
}

export default App;
