(this.webpackJsonpmessage=this.webpackJsonpmessage||[]).push([[0],{107:function(e,t,i){},161:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),a=i(24),o=i.n(a),r=(i(107),i(42)),s=i(23),l=(i(77),i(19)),d=(i(80),i(37)),j={apiKey:"AIzaSyDmqWbrVwfV5Z_Ozv1y6PwaajYyG7eYmv0",authDomain:"gyno-3075.firebaseapp.com",projectId:"gyno-3075",storageBucket:"gyno-3075.appspot.com",messagingSenderId:"486630156308",appId:"1:486630156308:web:e7dbac631f61540e7edf01",measurementId:"G-G6N437DM6W"},p=i(184),x=i(187),b=i(188),h=i(163),u=i(92),m=i(4),f=function(){return Object(m.jsxs)(d.b,Object(r.a)(Object(r.a)({},j),{},{firebase:l.a,children:[Object(m.jsx)(p.a,{position:"static",style:{backgroundColor:"#263238",width:"100%",height:"50px"},children:Object(m.jsx)(x.a,{variant:"dense",children:Object(m.jsx)(b.a,{variant:"h6",color:"inherit",children:Object(m.jsx)("p",{id:"logoTxtFlepxii",children:"Messenger by React"})})})}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",backgroundColor:"#eeeeee"},children:[Object(m.jsxs)("div",{style:{marginTop:"0px",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)("p",{style:{fontFamily:"Roboto, sans-serif",fontSize:"20px",color:"grey"},children:"Welcome please login to join"}),Object(m.jsx)(h.a,{elevation:3,style:{marginTop:"40px",height:"200px",width:"300px",backgroundColor:"white"},className:"container",children:Object(m.jsx)("div",{style:{display:"Flex",flexDirection:"column",alignItems:"center"},children:Object(m.jsx)(u.a,{style:{marginTop:"80px",backgroundColor:"#263238",color:"white",width:"200px",height:"40px"},variant:"contained",onClick:function(){var e=new l.a.auth.GoogleAuthProvider;l.a.auth().signInWithPopup(e)},children:"Login with Google"})})})]}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"https://image.freepik.com/vector-gratis/coleccion-mensajes-emojis_23-2148258219.jpg",style:{width:"600px"}})})]}),Object(m.jsx)(d.a,{children:function(e){e.isSignedIn,e.user,e.providerId}}),Object(m.jsx)(d.c,{filter:function(e){return"anonymous"!==e.providerId},children:function(e){var t=e.providerId;return Object(m.jsxs)("div",{children:["You are authenticated with ",t]})}})]}))},g=l.a.initializeApp({apiKey:"AIzaSyDmqWbrVwfV5Z_Ozv1y6PwaajYyG7eYmv0",authDomain:"gyno-3075.firebaseapp.com",projectId:"gyno-3075",storageBucket:"gyno-3075.appspot.com",messagingSenderId:"486630156308",appId:"1:486630156308:web:e7dbac631f61540e7edf01",measurementId:"G-G6N437DM6W"}).firestore(),O=l.a.storage(),y=(l.a.auth(),new l.a.auth.GoogleAuthProvider,i(196)),v=function(e){var t=l.a.auth().currentUser;return t.displayName,t.email,t.photoURL,t.emailVerified,t.uid,Object(m.jsx)(n.Fragment,{children:Object(m.jsx)("div",{button:!0,style:{borderRadius:"20px",backgroundColor:"#616161",marginTop:"20px",padding:"5px"},children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(m.jsx)("div",{children:Object(m.jsx)(y.a,{alt:"Remy Sharp",src:"https://image.freepik.com/vector-gratis/lindo-bot-decir-usuarios-hola-chatbot-saluda-consulta-online_80328-195.jpg",style:{boxShadow:"2px 2px 2px rgb(100, 100, 100)",width:"50px",height:"50px",marginLeft:"20px"}})}),Object(m.jsx)("div",{style:{marginLeft:"20px"},children:Object(m.jsx)("p",{style:{color:"white",fontFamily:"Roboto, sans-serif",fontSize:"18px",textDecoration:"none"},children:e.name})})]})})})},w=i(21),I=function(e){var t,i=l.a.auth().currentUser;i.displayName,t=i.email,i.photoURL,i.emailVerified,i.uid;var c=Object(w.e)().roomId,a=Object(n.useState)([]),o=Object(s.a)(a,2),r=o[0],d=o[1],j=Object(n.useState)(""),p=Object(s.a)(j,2),x=(p[0],p[1]);return Object(n.useEffect)((function(){""!==c&&(g.collection("rooms").doc(c).onSnapshot((function(e){return x(e.data().name)})),g.collection("rooms").doc(c).collection("message").orderBy("timestamp","asc").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))})))}),[c]),Object(m.jsx)(n.Fragment,{children:r.map((function(e){return Object(m.jsxs)("div",{className:"messageConvesacion ".concat(e.userId===t&&"messageConvesacion_R"),id:"ctnConversacion",children:[Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(m.jsx)("div",{children:Object(m.jsx)("p",{style:{marginRight:"10px",fontFamily:"Roboto, sans-serif"},children:e.name})}),Object(m.jsx)("div",{children:Object(m.jsx)(y.a,{alt:"User Pic",src:e.myPic,style:{width:"40px",height:"40px",marginBottom:"10px",boxShadow:"2px 2px 2px rgb(100, 100, 100)"}})})]}),Object(m.jsx)("div",{style:{width:"100%"},children:Object(m.jsx)("p",{style:{textAlign:"left",fontFamily:"Roboto, sans-serif"},children:e.message})})]})}))})},S=i(59),C=i(47),D=i(189),R=i(195),k=function(e){var t,i=l.a.auth().currentUser;i.displayName,t=i.email,i.photoURL,i.emailVerified,i.uid;var c=Object(w.e)().roomId,a=Object(n.useState)(""),o=Object(s.a)(a,2),r=o[0],d=o[1];return Object(m.jsx)(n.Fragment,{children:Object(m.jsx)(C.a,{children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[Object(m.jsx)(R.a,Object(S.a)({placeholder:"Write your message",inputProps:{"aria-label":"Write your message"},value:r,onChange:function(e){return d(e.target.value)},style:{}},"style",{marginLeft:"20px",width:"100%"})),Object(m.jsx)(D.a,{type:"submit",variant:"contained",color:"primary",onClick:function(i){i.preventDefault(),g.collection("rooms").doc(c).collection("message").add({message:r,name:e.profileName,userId:t,myPic:e.profilePic,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),console.log("escribiste",r),d("")},children:"Enviar"})]})})})},T=i(192),F=i(191),L=i(88),N=i.n(L),P=i(90),U=i.n(P),z=i(194),B=i(89),G=i.n(B),V=i(91),W=i.n(V),E=i(193),M=function(){var e=Object(w.e)().roomId,t=Object(n.useState)(""),i=Object(s.a)(t,2),c=i[0],a=i[1];return Object(n.useEffect)((function(){""!==e&&g.collection("rooms").doc(e).onSnapshot((function(e){return a(e.data().name)}))}),[e]),Object(m.jsx)(n.Fragment,{children:Object(m.jsx)(h.a,{elevation:0,style:{borderRadius:"10px",padding:"10px",backgroundColor:"transparent",marginTop:"-20px"},children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(m.jsx)("p",{style:{fontFamily:"Roboto, sans-serif",fontSize:"20px",color:"white"},children:"Room Name:"}),Object(m.jsx)("p",{style:{fontFamily:"Roboto, sans-serif",fontSize:"19px",color:"white",marginLeft:"10px"},children:c})]})})})},A=i(40),_=function(){var e,t=l.a.auth().currentUser;t.displayName,e=t.email,t.photoURL,t.emailVerified,t.uid;var i=Object(n.useState)(""),a=Object(s.a)(i,2),o=a[0],r=a[1],d=Object(n.useState)(""),j=Object(s.a)(d,2),u=j[0],f=j[1],S=Object(n.useState)([]),R=Object(s.a)(S,2),L=R[0],P=R[1];Object(n.useEffect)((function(){var e=g.collection("rooms").onSnapshot((function(e){return P(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]);var B=c.a.useState(!1),V=Object(s.a)(B,2),_=V[0],Y=V[1],q=c.a.useState(!1),J=Object(s.a)(q,2),K=J[0],Z=J[1],H=Object(n.useState)(null),Q=Object(s.a)(H,2),X=Q[0],$=Q[1],ee=Object(n.useState)(""),te=Object(s.a)(ee,2),ie=(te[0],te[1]),ne=Object(n.useState)(0),ce=Object(s.a)(ne,2),ae=(ce[0],ce[1]),oe=Object(n.useState)(""),re=Object(s.a)(oe,2),se=(re[0],re[1]),le=Object(n.useState)(),de=Object(s.a)(le,2),je=de[0],pe=de[1];O.ref(e).getDownloadURL().then((function(e){pe(e),ae(0)}));var xe=Object(n.useState)(""),be=Object(s.a)(xe,2),he=be[0],ue=be[1];return Object(n.useEffect)((function(){g.collection("profile").doc(e).onSnapshot((function(e){return ue(e.data().UserName)}))}),[]),Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(p.a,{position:"static",style:{backgroundColor:"#263238",width:"100%",height:"50px"},children:Object(m.jsxs)(x.a,{variant:"dense",children:[Object(m.jsx)(b.a,{variant:"h6",color:"inherit",children:Object(m.jsx)("p",{id:"logoTxtFlepxii",children:"Messenger By React"})}),Object(m.jsx)(E.a,{title:Object(m.jsx)("h5",{id:"tootips",children:"Logout"}),placement:"bottom",children:Object(m.jsx)(F.a,{style:{marginLeft:"50px",width:"40px",height:"40px",color:"white",border:"1px solid white"},onClick:function(){l.a.auth().signOut()},children:Object(m.jsx)(N.a,{})})})]})}),Object(m.jsx)(z.a,{open:_,onClose:function(){Y(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(m.jsx)(h.a,{style:{width:"300px",height:"330px",marginTop:"160px",padding:"20px",borderRadius:"20px"},children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){var t=e.target.files[0];if(t){var i=t.type;["image/gif","image/jpeg","image/jpg","image/png"].includes(i)?(se(""),$(t)):se("Por favor selecciona una imagen")}},style:{display:"none"}}),Object(m.jsx)("label",{htmlFor:"contained-button-file",children:Object(m.jsx)(F.a,{"aria-label":"edit",component:"span",style:{width:"90px",height:"90px",border:"1px solid grey"},children:Object(m.jsx)(G.a,{style:{width:"50px",height:"50px"}})})})]}),Object(m.jsxs)("div",{style:{marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)("p",{children:"Set your name"}),Object(m.jsx)(C.a.Control,{type:"text",placeholder:" My name",value:o,onChange:function(e){return r(e.target.value)},style:{}})]}),Object(m.jsx)("div",{style:{marginTop:"20px"},children:Object(m.jsx)(D.a,{variant:"contained",color:"primary",onClick:function(){X?O.ref(e).put(X).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);ae(t)}),(function(e){se(e)}),(function(){O.ref(e).getDownloadURL().then((function(e){ie(e),ae(0)}))})):se("");g.collection("profile").doc(e).set({UserName:o}),Y(!1)},children:"Save"})})]})})}),Object(m.jsx)(z.a,{open:K,onClose:function(){Z(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(m.jsx)(h.a,{style:{width:"300px",height:"200px",marginTop:"160px",padding:"20px",borderRadius:"20px"},children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsxs)("div",{style:{marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)("p",{style:{fontFamily:"Roboto, sans-serif",fontSize:"20px"},children:"Set room name"}),Object(m.jsx)(C.a.Control,{type:"text",placeholder:" Room name",value:u,onChange:function(e){return f(e.target.value)},style:{height:"30px"}})]}),Object(m.jsx)("div",{style:{marginTop:"20px"},children:Object(m.jsx)(D.a,{variant:"contained",color:"primary",onClick:function(){g.collection("rooms").doc().set({name:u}),f(""),Z(!1)},children:"Create new room"})})]})})}),Object(m.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"#212121",justifyContent:"space-between",height:"92.4vh",padding:"0px"},children:Object(m.jsxs)(A.a,{children:[Object(m.jsx)("div",{style:{marginTop:"0px"},children:Object(m.jsxs)(h.a,{elevation:3,style:{width:"300px",height:"550px",padding:"20px",overflow:"auto",borderRadius:"20px",marginLeft:"10px",backgroundColor:"#212121"},children:[Object(m.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20px"},children:Object(m.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:"100%"},children:[Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(m.jsx)(y.a,{alt:"Remy Sharp",src:je,style:{boxShadow:"2px 2px 2px rgb(100, 100, 100)",width:"60px",height:"60px"}}),Object(m.jsx)("p",{style:{marginLeft:"20px",fontFamily:"Roboto, sans-serif",color:"white"},children:he})]}),Object(m.jsx)("div",{children:Object(m.jsx)(F.a,{"aria-label":"edit",onClick:function(e){return Y(!0)},style:{border:"1px solid white"},children:Object(m.jsx)(U.a,{style:{color:"white"}})})})]})})}),Object(m.jsx)(T.a,{}),Object(m.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"},children:Object(m.jsx)(F.a,{style:{border:" 1px solid white"},onClick:function(e){return Z(!0)},children:Object(m.jsx)(W.a,{style:{color:"white"}})})}),Object(m.jsx)("div",{style:{marginTop:"30px"},children:L.map((function(e){return Object(m.jsx)(A.b,{to:"/rooms/".concat(e.id),children:Object(m.jsx)(v,{id:e.id,name:e.data.name},e.id)})}))})]})}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"0px"},children:[Object(m.jsx)("div",{children:Object(m.jsxs)(h.a,{style:{width:"960px",height:"490px",borderRadius:"30px",padding:"20px",overflow:"auto",marginRight:"10px",backgroundColor:"transparent"},children:[Object(m.jsx)(w.a,{exact:!0,path:"/rooms/:roomId",children:Object(m.jsx)(M,{})}),Object(m.jsx)(w.a,{exact:!0,path:"/rooms/:roomId",children:Object(m.jsx)(I,{profileName:he})})]})}),Object(m.jsx)("div",{children:Object(m.jsx)(h.a,{style:{marginTop:"20px",width:"700px"},children:Object(m.jsx)(w.a,{exact:!0,path:"/rooms/:roomId",children:Object(m.jsx)(k,{profilePic:je,profileName:he})})})})]})]})})]})};var Y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){return setTimeout((function(){return c(!0)}),2e3)}),[]),Object(m.jsx)(d.b,Object(r.a)(Object(r.a)({},j),{},{firebase:l.a,children:Object(m.jsx)(d.a,{children:function(){var e=l.a.auth().currentUser;return e?Object(m.jsx)("div",{children:Object(m.jsx)(_,{})}):null===e&&1==i?Object(m.jsx)("div",{children:Object(m.jsx)(f,{})}):void 0}})}))},q=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,198)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root")),q()},77:function(e,t,i){}},[[161,1,2]]]);
//# sourceMappingURL=main.cf8575e0.chunk.js.map