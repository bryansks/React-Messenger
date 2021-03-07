import React from 'react';
import { Fragment, useEffect, useState } from 'react';
import {db} from '../FirebaseDb.js';
import Paper from '@material-ui/core/Paper';
import {useParams} from "react-router-dom"



        const CurrentRoom = () =>{

            const {roomId} =useParams();
            const [roomName, setRoomName]=useState("");

            useEffect(() =>{
                if (roomId!=="") {
                    db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                        setRoomName(snapshot.data().name)
                    ));
                }
            },[roomId])



            return(

                <Fragment>
                    <Paper elevation={0} style={{ borderRadius:'10px', padding:'10px', backgroundColor:'transparent',marginTop:'-20px'}}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <p style={{ fontFamily:'Roboto, sans-serif', fontSize:'20px', color:'white'}}>Room Name:</p>
                            <p style={{ fontFamily:'Roboto, sans-serif', fontSize:'19px', color:'white', marginLeft:'10px'}}>{roomName}</p>
                        </div>
                    </Paper>
                </Fragment>

            )
        }

        export default CurrentRoom;