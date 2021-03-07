import React, {Fragment , useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import firebase from "firebase";
import {db} from '../FirebaseDb.js';
import {storage} from '../FirebaseDb';
import SidebarConversations from './sidebarConversations'
import Conversation from './conversation';
import WriteMessage from './writeMessage.jsx';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Form from 'react-bootstrap/Form';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import CurrentRoom from './currentRoom.jsx';
import MediaQuery from 'react-responsive'
import useResizeAware from 'react-resize-aware';

import {
    BrowserRouter as Router,
    Route,
    Link,

  } from "react-router-dom";







        const ChatWindow = () =>{


                        var user = firebase.auth().currentUser;
                        var name, email, photo, uid, emailVerified;

                        name = user.displayName;
                        email = user.email;
                        photo = user.photoURL;
                        emailVerified = user.emailVerified;
                        uid = user.uid;

                     


                        const [input, setInput]=useState("");
                        const [inputR, setInputR]=useState("");
                        const [rooms, setRooms]=useState([]);

                        useEffect(() =>{

                            const unsubscribe = db.collection('rooms').onSnapshot(snapshot =>(

                            setRooms(snapshot.docs.map(doc =>
                            ({

                            id:doc.id,
                            data:doc.data(),

                            }))
                            )
                            ));

                                return () =>{
                                    unsubscribe();
                                }

                    }, [])

                    const [open, setOpen] = React.useState(false);

                    const handleOpen = () => {
                      setOpen(true);
                    };
                  
                    const handleClose = () => {
                      setOpen(false);
                    };


                    const [openM, setOpenM] = React.useState(false);

                    const handleOpenM = () => {
                      setOpenM(true);
                    };
                  
                    const handleCloseM = () => {
                      setOpenM(false);
                    };


                    

                    const [imageProfile, setImageProfile]=useState( null);
                    const [url, setUrl]=useState("");
                    const [progress, setProgress]=useState(0);
                    const [error, setError]=useState("")

                    const handleChange = e =>{
                        const file =e.target.files[0];
                        if (file) {

                        const fileType = file ["type"]
                        const validImageTypes = ["image/gif", "image/jpeg", "image/jpg", "image/png"]
                        if (validImageTypes.includes(fileType)) {

                            setError("");
                            setImageProfile(file);

                        }else{
                            setError("Por favor selecciona una imagen")
                        }
                        }
                    }
                    



                    const createChat = () =>{
                 
                        db.collection("rooms").doc().set({
                            
                            name: inputR,
                            
                        })

                        setInputR("")
                        setOpenM(false)
            
                   
                     }; 





                     const UpDate = () =>{

                        if (imageProfile){

                               const uploadTaks= storage.ref(email).put(imageProfile)
                    
                                uploadTaks.on(
                                    "state_changed",
                                    snapshot =>{
                    
                                        const progress = Math.round(
                                        (snapshot.bytesTransferred / snapshot.totalBytes)* 100
                                     );
                    
                                     setProgress(progress);
                    
                                     },
                                     error => {
                    
                                     setError(error)
                    
                                     },
                                     () => {
                    
                                    storage
                                    .ref(email)
                                    .getDownloadURL()
                                    .then(url =>{
                                        setUrl(url);
                                        setProgress(0);
                                    });
                                    }
                                    );

                    
                                    }else{
                                    setError("")
                                    }

                                    db.collection('profile').doc(email).set({
                                        UserName:input
                                    })

                                    setOpen(false)
                    
                                }

                                const [profilePicurl, setProfilePicurl]=useState();

                                storage.ref(email).getDownloadURL()
                                .then(profilePicurl =>{ setProfilePicurl(profilePicurl); setProgress(0)}); {
            
                                 }


                                 const [myName , setMyName] =useState ("")
                                 useEffect(() =>{

                                    db.collection('profile').doc(email).onSnapshot(snapshot=>(
                                        setMyName(snapshot.data().UserName)
                                    ));
                                        
                        
                                    }, [])

                                

                                const [sizeH , setSizeH]= useState([window.innerHeight]);

                                const [sizeW , setSizeW]= useState([window.innerWidth]);

                                const [paperH , setPaperH] =useState([window.innerWidth]*0.25)
                                const [paperW , setPaperW] =useState([window.innerWidth]*0.6)

                                useEffect(()=>{

                                    const handleResize = () =>{

                                        setSizeH([window.innerHeight])

                                        setSizeW([window.innerWidth])

                                        setPaperW([window.innerWidth]*0.6)

                                        setPaperH([window.innerWidth]*0.25)

                                    }

                                    window.addEventListener("resize", handleResize);
                                },[])

                            {/*const [resizeListener, sizes] = useResizeAware();*/}
                                



    return(

        <Fragment>

                    <AppBar position="static" style={{backgroundColor:'#263238', width:'100%', height:'50px'}}>
                            <Toolbar variant="dense">

                                

                                    <Typography variant="h6" color="inherit">
                                        <p style={{marginTop:'20px'}}>Messenger By React</p>
                                    </Typography>

                                    <Tooltip title={<h5 id="tootips">Logout</h5>} placement="bottom" >
                                        <IconButton style={{marginLeft:'50px', width:'40px', height:'40px', color:'white', border:'1px solid white'}}
                                                    onClick={() =>{firebase.auth().signOut();}} >

                                                <ExitToAppIcon />
                                        </IconButton>
                                    </Tooltip>

                               
                            

                            </Toolbar>
                   </AppBar>

                   <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        style={{display:'flex', flexDirection:'column', alignItems:'center'}}
                    >

                        <Paper style={{width:'300px', height:'330px', marginTop:'160px', padding:'20px', borderRadius:'20px'}}>

                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

                                    
                                                       <div>
                                                            <input
                                                                accept="image/*"
                                                                id="contained-button-file"
                                                                multiple
                                                                type="file"
                                                                onChange={handleChange}
                                                                style={{display:'none'}}
                                                            />
                                                            <label htmlFor="contained-button-file">
                                                            <IconButton aria-label="edit" component="span" style={{width:'90px', height:'90px', border:'1px solid grey'}}>
                                                                <AddAPhotoIcon style={{width:'50px', height:'50px'}}/>
                                                            </IconButton>

                                                            </label>

                                                        </div> 

                                    <div style={{marginTop:'10px', display:'flex', flexDirection:'column', alignItems:'center'}}>

                                        <p>Set your name</p>

                                        <Form.Control  type="text" placeholder=" My name"
                                        value={input} onChange={e=>setInput(e.target.value)} style={{}} />

                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <Button variant="contained" color="primary" onClick={UpDate}>Save</Button>
                                    </div>

                            </div>

                        

                        </Paper>
                        
                    </Modal>
                    


                    <Modal
                        open={openM}
                        onClose={handleCloseM}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        style={{display:'flex', flexDirection:'column', alignItems:'center'}}
                    >

                        <Paper style={{width:'300px', height:'200px', marginTop:'160px', padding:'20px', borderRadius:'20px'}}>

                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

                                    

                                    <div style={{marginTop:'10px', display:'flex', flexDirection:'column', alignItems:'center'}}>

                                        <p style={{fontFamily:'Roboto, sans-serif', fontSize:'20px'}}>Set room name</p>

                                        <Form.Control  type="text" placeholder=" Room name"
                                        value={inputR} onChange={e=>setInputR(e.target.value)} style={{height:'30px'}} />

                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <Button variant="contained" color="primary" onClick={createChat}>Create new room</Button>
                                    </div>

                            </div>

                        

                        </Paper>
                        
                    </Modal>

            <div style={{display:'flex', 
                        flexDirection:'row', 
                        alignItems:'center', 
                        backgroundColor:'#212121', 
                        
                        height:'92.4vh',
                        padding:'0px',
                        justifyContent:'space-around'
                        

                        }}>

               <Router>

                

                
                    <div >

                        <Paper  elevation={3}  style={{width:`${paperH}px`,
                                                     height:'550px', 
                                                     padding:'20px',
                                                     overflow:'auto', 
                                                     borderRadius:'20px', 
                                                     marginLeft:'10px',
                                                     backgroundColor:'#212121',
                                                     
                                                     }}>

                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'20px'}}>

                                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>

                                             <div style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'space-around', width:'100%'}}>
                                             
                                                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                                    
                                                            <Avatar alt="Remy Sharp" src={profilePicurl}
                                                            style={{boxShadow:'2px 2px 2px rgb(100, 100, 100)', 
                                                            width:'60px', height:'60px'}} 
                                                            />

                                                            <p style={{marginLeft:'20px', fontFamily:'Roboto, sans-serif', color:'white'}}>{myName}</p>

                                                    </div>


                                                    <div>

                                                            <IconButton aria-label="edit" onClick={(e)=>setOpen(true)}
                                                            style={{border:'1px solid white'}}>
                                                                <EditIcon style={{color:'white'}} />
                                                            </IconButton>

                                                    </div>

                                            </div>
                                            
                                        </div>

                             </div>

                             <Divider/>

                                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'20px'}}>
                                        <IconButton style={{border:' 1px solid white'}} onClick={(e)=>setOpenM(true)}>
                                        <AddIcon style={{color:'white'}}/>
                                        </IconButton>
                                    </div>

                                    

                                    <div style={{marginTop:'30px'}}>

                                     
                                        {rooms.map(room =>(
                                            
                                                <Link to={`/rooms/${room.id}`}>

                                            

                                                    <SidebarConversations key={room.id} id={room.id} name={room.data.name}/>


                    
                                                
                                                </Link>
                                            
                                        ))}

                                    


                            </div>

                        </Paper>

                    </div>
                


                    <div   style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'0px'}} >

                           

                                    <Paper className="container" style={{
                                                height:'490px', 
                                                borderRadius:'30px', 
                                                padding:'20px', 
                                                overflow:'auto',
                                                marginRight:'0px',
                                                backgroundColor:'transparent',
                                                width:`${paperW}px`
                                                
                                                }}>
                                                    

                                        <Route exact path="/rooms/:roomId" children={<CurrentRoom/> }/>
                                        <Route exact path="/rooms/:roomId" children={<Conversation profileName={myName}/> }/>
                                    
                                    </Paper>

                           
                           

                         
                               <Paper style={{marginTop:'20px', width:`${paperW}px`}}>
                               <Route exact path="/rooms/:roomId" children={<WriteMessage profilePic={profilePicurl} profileName={myName}/>}/>
                               </Paper>
                           

                    </div>

               

               </Router>  

            </div>

        </Fragment>

    )
}

export default ChatWindow;