import React, { Fragment, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import {db} from '../FirebaseDb.js';
import firebase from "firebase";
import {useParams} from "react-router-dom"


const Conversation = (props) =>{


                            var user = firebase.auth().currentUser;
                            var name, email, photo, uid, emailVerified;

                            name = user.displayName;
                            email = user.email;
                            photo = user.photoURL;
                            emailVerified = user.emailVerified;
                            uid = user.uid;

    

                            const {roomId} =useParams();
                            
                            const [message, setMessage]=useState([]);


     


                         const [roomName, setRoomName]=useState("");

                        useEffect(() =>{
                            if (roomId!=="") {
                                db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                                    setRoomName(snapshot.data().name)
                                ));
                                db.collection("rooms")
                                .doc(roomId)
                                .collection("message")
                                .orderBy("timestamp","asc")
                                .onSnapshot((snapshot)=>
                                setMessage(snapshot.docs.map((doc)=>
                                doc.data()))
                                );
                            }
                        },[roomId])










    return(

        <Fragment>

            

            {message.map(message =>(
                
                 <div  className={`messageConvesacion ${message.userId===email && "messageConvesacion_R"}`} id="ctnConversacion" >
             
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}} >

                             <div>
                                  <p style={{marginRight:'10px', fontFamily:'Roboto, sans-serif'}}>{message.name}</p>
                             </div>

                              <div>

                                  <Avatar alt="User Pic" src={message.myPic} style={{width:'40px', height:'40px',marginBottom:'10px',boxShadow:'2px 2px 2px rgb(100, 100, 100)'}}/>
                            
                             </div>
                    </div>

                         <div style={{ width:'100%'}}>

                            <p style={{textAlign:'left',fontFamily:'Roboto, sans-serif'}}>{message.message}</p>

                        </div>


                 </div>
            ))}

           

            
        </Fragment>
        

    );
}

export default Conversation;