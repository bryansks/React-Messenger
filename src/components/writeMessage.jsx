import React, { Fragment, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';
import {db} from '../FirebaseDb.js';
import firebase from "firebase";
import {useParams} from "react-router-dom"
import InputBase from '@material-ui/core/InputBase';



const WriteMessage = (props) =>{


    var user = firebase.auth().currentUser;
    var name, email, photo, uid, emailVerified;

    name = user.displayName;
    email = user.email;
    photo = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;



const {roomId} =useParams();



            const [input, setInput]=useState("");

            



        const sendMessage = (e) => {
             e.preventDefault();
              

             db.collection('rooms').doc(roomId).collection("message").add({
                message:input,
                name:props.profileName, 
                userId:email,
                myPic:props.profilePic,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),

             });
             console.log("escribiste", input);
             setInput("");
             };


                  



                    return(

                    <Fragment>


                        <Form >

                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} >

                            <InputBase
                                placeholder="Write your message"
                                inputProps={{ 'aria-label': 'Write your message' }}
                                value={input} onChange={e=>setInput(e.target.value)} style={{}} 
                                style={{marginLeft:'20px', width:'100%'}}
                                />
                                

                                <Button type="submit" variant="contained" color="primary" onClick={sendMessage} >
                                    Enviar
                                </Button>

                            </div>

                        
                            
                        </Form>    
                            

                        
                    </Fragment>
                    

                    );
                    }

export default WriteMessage;