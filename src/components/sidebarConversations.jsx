import React, {Fragment, useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import firebase from "firebase";
  




       const SidebarConversations = (props) =>{

                        var user = firebase.auth().currentUser;
                        var nam, email, photo, uid, emailVerified;

                        nam = user.displayName;
                        email = user.email;
                        photo = user.photoURL;
                        emailVerified = user.emailVerified;
                        uid = user.uid;



                return  (

        

                    <Fragment>

                    <div button style={{borderRadius:'20px', backgroundColor:'#616161', marginTop:'20px', padding:'5px'}} >

                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}} > 

                                    <div>

                                            
                                            <Avatar alt="Remy Sharp" src="https://image.freepik.com/vector-gratis/lindo-bot-decir-usuarios-hola-chatbot-saluda-consulta-online_80328-195.jpg" 
                                            style={{boxShadow:'2px 2px 2px rgb(100, 100, 100)',width:'50px', height:'50px', marginLeft:'20px'}} />
                                          

                                    </div>

    
                                     <div style={{marginLeft:'20px'}}>
                            
                                            <p style={{color:'white', 
                                                        fontFamily:'Roboto, sans-serif', 
                                                        fontSize:'18px',
                                                        textDecoration:'none'
                                                        }}>
                                                            {props.name}

                                                        </p>
                            
                                     </div>



                         </div>
               
                    </div>

                    </Fragment>
                    
            
                )

        };

        export default SidebarConversations;