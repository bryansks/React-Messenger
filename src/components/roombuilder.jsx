import React, {Fragment, useState, useEffect} from 'react'

import {db} from '../FirebaseDb.js';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import firebase from "firebase";



const RoomBuilder = ( props) =>{

           



           var user = firebase.auth().currentUser;
           var nam, email, photo, uid, emailVerified;

           nam = user.displayName;
           email = user.email;
           photo = user.photoURL;
           emailVerified = user.emailVerified;
           uid = user.uid;

           const [yo, setYo]=useState("")
           const [profile, setProfile] =useState([]);

           React.useEffect(() =>{
            
            db.collection(`perfil${email}`).onSnapshot(snapshot=>(
                setProfile(snapshot.docs.map((doc)=>
                doc.data()))
            ))
        
            },[]);

            React.useEffect(() =>{
            
                profile.map(profile =>(
                    setYo(profile.nombre)
                    
                ));

                console.log(yo)
            
                },[]);

            
    


    const seleccion =()=>{

        db.collection(`integrantesTemporal${email}`).add({

            integrantes:{userName:props.nombre, userApellido:props.apellido, userEmail:props.idEmail, userPic:props.profilePic},
            integrantesPase: props.idEmail,

        })
        
    }



    return(

        <Fragment>

             

                  

                     <ListItem button onClick={seleccion} style={{backgroundColor:'#1976d2', borderRadius:'20px'}}>

                       <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop:'0px'}}>

                        <Avatar alt="Remy Sharp" src={props.profilePic} style={{border:'1px solid white'}} />
                        <p style={{marginLeft:'10px', color:'white', fontSize:'17px' , fontFamily:'Roboto, sans-serif'}}>{props.nombre} {props.apellido}</p>

                       </div>

                     </ListItem>

                


             

        </Fragment>

    );
}

export default RoomBuilder;