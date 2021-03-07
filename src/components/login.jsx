import React, {useEffect, useState} from 'react'
import firebase from "firebase";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { config } from "../config";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from 'react-bootstrap/Button';





const Logueando =() => {


             const [sizeW , setSizeW]= useState([window.innerWidth]);

              useEffect(()=>{

                const handleResize = () =>{

  

                    setSizeW([window.innerWidth])

                }

                window.addEventListener("resize", handleResize);
            },[])

 


  return (

  

   <FirebaseAuthProvider {...config} firebase={firebase}>


              <AppBar position="static" style={{backgroundColor:'#263238', width:`${sizeW}px`,height:'50px'}}>
                <Toolbar variant="dense">
                
                  <Typography variant="h6" color="inherit">
                    <p style={{marginTop:'20px'}}>Messenger by React</p>
                  </Typography>

                </Toolbar>
              </AppBar>


              <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', backgroundColor:'#eeeeee'}}>

                    

                    <div style={{marginTop:'0px', width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                      
                          <p style={{ fontFamily:'Roboto, sans-serif', fontSize:'20px', color:'grey'}}>Welcome please login to join</p>
                             
                          
                              <Paper elevation={3} style={{marginTop:'40px', height:'200px', width:'300px', backgroundColor:'white'}} className="container"> 


                                  

                                        <div style={{display:'Flex', flexDirection:'column', alignItems:'center'}}>

                                              <Button
                                                style={{marginTop:'80px', backgroundColor:'#263238', color:'white', width:'200px', height:'40px'}}
                                                variant="contained"
                                                onClick={() => {
                                                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                                  firebase.auth().signInWithPopup(googleAuthProvider);
                                                }}
                                              >
                                                Login with Google
                                              </Button>

                                        </div>


                              


                                </Paper>

                      </div>


                      <div>
                      <img  src="https://image.freepik.com/vector-gratis/coleccion-mensajes-emojis_23-2148258219.jpg" style={{width:'600px'}}/>
                      </div>

              </div>
    

        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            
            
            //return (
              //<div>
              //<pre style={{ height: 300, overflow: "auto" }}>
                //{JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              //</pre>
              
              //</div>
           // );
          }}
        </FirebaseAuthConsumer>


        
        


          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>


          

          
            
      
   </FirebaseAuthProvider>  

    
  );
}

export default Logueando;
