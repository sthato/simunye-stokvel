(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{118:function(e,t){var r=new Intl.NumberFormat("en-ZA",{style:"currency",currency:"ZAR"});e.exports=r},493:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(58),i=r.n(o),c=r(26),s=r(19),l=r.n(s),d=r(25),u=r(13),b=(r(351),r(14)),j=r(639),p=r(633),h=r(638),x=Object(p.a)((function(){return Object(h.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{backgroundColor:"#f4f6f8",height:"100%",width:"100%"},a:{textDecoration:"none"},"#root":{height:"100%",width:"100%"}}})})),g=function(){return x(),null},f=r(95);f.Chart.helpers.extend(f.Chart.elements.Rectangle.prototype,{draw:function(){var e,t,r,n,a,o,i,c,s=this._chart.ctx,l=this._view,d=l.borderWidth,u=this._chart.config.options.cornerRadius;if(u<0&&(u=0),"undefined"===typeof u&&(u=0),l.horizontal?(e=l.base,t=l.x,r=l.y-l.height/2,n=l.y+l.height/2,a=t>e?1:-1,o=1,i=l.borderSkipped||"left"):(e=l.x-l.width/2,t=l.x+l.width/2,r=l.y,a=1,o=(n=l.base)>r?1:-1,i=l.borderSkipped||"bottom"),d){var b=Math.min(Math.abs(e-t),Math.abs(r-n)),j=(d=d>b?b:d)/2,p=e+("left"!==i?j*a:0),h=t+("right"!==i?-j*a:0),x=r+("top"!==i?j*o:0),g=n+("bottom"!==i?-j*o:0);p!==h&&(r=x,n=g),x!==g&&(e=p,t=h)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=d;var f=[[e,n],[e,r],[t,r],[t,n]],O=["bottom","left","top","right"].indexOf(i,0);function m(e){return f[(O+e)%4]}-1===O&&(O=0);var v=m(0);s.moveTo(v[0],v[1]);for(var w=1;w<4;w+=1){v=m(w);var y=w+1;4===y&&(y=0);var k=f[2][0]-f[1][0],C=f[0][1]-f[1][1],S=f[1][0],T=f[1][1];if((c=u)>Math.abs(C)/2&&(c=Math.floor(Math.abs(C)/2)),c>Math.abs(k)/2&&(c=Math.floor(Math.abs(k)/2)),C<0){var W=S,M=S+k,B=T+C,P=T+C,U=S,L=S+k,A=T,N=T;s.moveTo(U+c,A),s.lineTo(L-c,N),s.quadraticCurveTo(L,N,L,N-c),s.lineTo(M,P+c),s.quadraticCurveTo(M,P,M-c,P),s.lineTo(W+c,B),s.quadraticCurveTo(W,B,W,B+c),s.lineTo(U,A-c),s.quadraticCurveTo(U,A,U+c,A)}else if(k<0){var q=S+k,I=S,D=T,F=T,E=S+k,z=S,R=T+C,_=T+C;s.moveTo(E+c,R),s.lineTo(z-c,_),s.quadraticCurveTo(z,_,z,_-c),s.lineTo(I,F+c),s.quadraticCurveTo(I,F,I-c,F),s.lineTo(q+c,D),s.quadraticCurveTo(q,D,q,D+c),s.lineTo(E,R-c),s.quadraticCurveTo(E,R,E+c,R)}else s.moveTo(S+c,T),s.lineTo(S+k-c,T),s.quadraticCurveTo(S+k,T,S+k,T+c),s.lineTo(S+k,T+C-c),s.quadraticCurveTo(S+k,T+C,S+k-c,T+C),s.lineTo(S+c,T+C),s.quadraticCurveTo(S,T+C,S,T+C-c),s.lineTo(S,T+c),s.quadraticCurveTo(S,T,S+c,T)}s.fill(),d&&s.stroke()}});var O=r(338),m=r(23),v=["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"],w={h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},y=Object(O.a)({palette:{background:{default:"#F4F6F8",paper:m.a.common.white},primary:{contrastText:"#ffffff",main:"#5664d2"},text:{primary:"#172b4d",secondary:"#6b778c",error:"#e00b8b"}},shadows:v,typography:w}),k=r(6),C=r(5),S=r(17),T=r(127),W=r(502),M=r(504),B=r(463),P=r(497),U=r(505),L=r(496),A=r(325),N=r.n(A),q=r(323),I=r.n(q),D=r(324),F=r.n(D),E=r(1),z=function(e){return Object(E.jsx)("img",Object(S.a)({alt:"Logo",src:"/static/logo.svg"},e))},R=r(81),_=r.n(R),H=a.a.createContext(),G={storeUser:function(e){try{localStorage.setItem("user",e)}catch(t){console.error(t)}},getUser:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",JSON.parse(localStorage.getItem("user")));case 4:e.prev=4,e.t0=e.catch(0),console.error(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}(),removeUser:function(){try{localStorage.removeItem("user")}catch(e){console.error(e)}}},J=function(){var e=Object(n.useContext)(H),t=e.user,r=e.setUser;return{user:t,logIn:function(e){r(e),G.storeUser(JSON.stringify(e))},logOut:function(){r(null),G.removeUser()}}},V=function(e){var t=e.onMobileNavOpen,r=Object(T.a)(e,["onMobileNavOpen"]),a=Object(b.h)(),o=Object(n.useState)([]),i=Object(u.a)(o,1)[0],s=J().logOut,j=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.logout();case 3:s(),a("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(E.jsx)(W.a,Object(S.a)(Object(S.a)({elevation:0},r),{},{children:Object(E.jsxs)(M.a,{children:[Object(E.jsx)(c.b,{to:"/",children:Object(E.jsx)(z,{})}),Object(E.jsx)(B.a,{sx:{flexGrow:1}}),Object(E.jsxs)(P.a,{lgDown:!0,children:[Object(E.jsx)(U.a,{color:"inherit",children:Object(E.jsx)(L.a,{badgeContent:i.length,color:"primary",variant:"dot",children:Object(E.jsx)(I.a,{})})}),Object(E.jsx)(U.a,{color:"inherit",onClick:j,children:Object(E.jsx)(F.a,{})})]}),Object(E.jsx)(P.a,{lgUp:!0,children:Object(E.jsx)(U.a,{color:"inherit",onClick:t,children:Object(E.jsx)(N.a,{})})})]})}))},K=r(498),Z=r(508),Y=r(509),Q=r(510),X=r(507),$=r(511),ee=r(636),te=r(637),re=r(506),ne=function(e){var t=e.href,r=e.icon,n=e.title,a=Object(T.a)(e,["href","icon","title"]),o=Object(b.g)(),i=!!t&&!!Object(b.d)({path:t,end:!1},o.pathname);return Object(E.jsx)(re.a,Object(S.a)(Object(S.a)({disableGutters:!0,sx:{display:"flex",py:0}},a),{},{children:Object(E.jsxs)(X.a,{component:c.c,sx:Object(S.a)(Object(S.a)({color:"text.secondary",fontWeight:"medium",justifyContent:"flex-start",letterSpacing:0,py:1.25,textTransform:"none",width:"100%"},i&&{color:"primary.main"}),{},{"& svg":{mr:1}}),to:t,children:[r&&Object(E.jsx)(r,{size:"20"}),Object(E.jsx)("span",{children:n})]})}))},ae=[{href:"/app/dashboard",icon:ee.a,title:"Dashboard"},{href:"/app/settings",icon:te.a,title:"Settings"}],oe=function(e){var t=e.onMobileClose,r=e.openMobile,a=Object(b.h)(),o=Object(b.g)(),i=J(),s=i.user,u=i.logOut;Object(n.useEffect)((function(){r&&t&&t()}),[o.pathname]);var j=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.logout();case 3:u(),a("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=Object(E.jsxs)(B.a,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(E.jsxs)(B.a,{sx:{alignItems:"center",display:"flex",flexDirection:"column",p:2},children:[Object(E.jsx)(K.a,{component:c.b,src:s.avatar,sx:{cursor:"pointer",width:64,height:64},to:"/app/account"}),Object(E.jsx)(Z.a,{color:"textPrimary",variant:"h5",children:s.firstname+" "+s.lastname}),Object(E.jsx)(Z.a,{color:"textSecondary",variant:"body2",children:s.accountID})]}),Object(E.jsx)(Y.a,{}),Object(E.jsx)(B.a,{sx:{p:2},children:Object(E.jsx)(Q.a,{children:ae.map((function(e){return Object(E.jsx)(ne,{href:e.href,title:e.title,icon:e.icon},e.title)}))})}),Object(E.jsx)(B.a,{sx:{flexGrow:1}}),Object(E.jsx)(B.a,{sx:{backgroundColor:"background.default",m:2,p:2},children:Object(E.jsx)(B.a,{sx:{display:"flex",justifyContent:"center",pt:2},children:Object(E.jsx)(X.a,{color:"primary",onClick:j,variant:"contained",children:"Logout"})})})]});return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(P.a,{lgUp:!0,children:Object(E.jsx)($.a,{anchor:"left",onClose:t,open:r,variant:"temporary",PaperProps:{sx:{width:256}},children:p})}),Object(E.jsx)(P.a,{lgDown:!0,children:Object(E.jsx)($.a,{anchor:"left",open:!0,variant:"persistent",PaperProps:{sx:{width:256,top:64,height:"calc(100% - 64px)"}},children:p})})]})};oe.defaultProps={onMobileClose:function(){},openMobile:!1};var ie=oe,ce=Object(C.a)("div")((function(e){return{backgroundColor:e.theme.palette.background.default,display:"flex",height:"100%",overflow:"hidden",width:"100%"}})),se=Object(C.a)("div")((function(e){var t=e.theme;return Object(k.a)({display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:64},t.breakpoints.up("lg"),{paddingLeft:256})})),le=Object(C.a)("div")({display:"flex",flex:"1 1 auto",overflow:"hidden"}),de=Object(C.a)("div")({flex:"1 1 auto",height:"100%",overflow:"auto"}),ue=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),r=t[0],a=t[1];return Object(E.jsxs)(ce,{children:[Object(E.jsx)(V,{onMobileNavOpen:function(){return a(!0)}}),Object(E.jsx)(ie,{onMobileClose:function(){return a(!1)},openMobile:r}),Object(E.jsx)(se,{children:Object(E.jsx)(le,{children:Object(E.jsx)(de,{children:Object(E.jsx)(b.b,{})})})})]})},be=function(e){return Object(E.jsx)(W.a,Object(S.a)(Object(S.a)({elevation:0},e),{},{children:Object(E.jsx)(M.a,{sx:{height:64},children:Object(E.jsx)(c.b,{to:"/",children:Object(E.jsx)(z,{})})})}))},je=Object(C.a)("div")((function(e){return{backgroundColor:e.theme.palette.background.paper,display:"flex",height:"100%",overflow:"hidden",width:"100%"}})),pe=Object(C.a)("div")({display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:64}),he=Object(C.a)("div")({display:"flex",flex:"1 1 auto",overflow:"hidden"}),xe=Object(C.a)("div")({flex:"1 1 auto",height:"100%",overflow:"auto"}),ge=function(){return Object(E.jsxs)(je,{children:[Object(E.jsx)(be,{}),Object(E.jsx)(pe,{children:Object(E.jsx)(he,{children:Object(E.jsx)(xe,{children:Object(E.jsx)(b.b,{})})})})]})},fe=r(54),Oe=r(522),me=r(514),ve=r(331),we=r.n(ve),ye=r(332),ke=r.n(ye),Ce=r(330),Se=r.n(Ce),Te=r(512),We=r(513),Me=r(75),Be=r(77),Pe=r(118),Ue=r.n(Pe),Le=function(e){return Object(E.jsx)(Te.a,Object(S.a)(Object(S.a)({sx:{height:"100%"}},e),{},{children:Object(E.jsxs)(We.a,{children:[Object(E.jsxs)(me.a,{container:!0,spacing:3,sx:{justifyContent:"space-between"},children:[Object(E.jsxs)(me.a,{item:!0,children:[Object(E.jsx)(Z.a,{color:"textSecondary",gutterBottom:!0,variant:"h6",children:e.description}),Object(E.jsx)(Z.a,{color:"textPrimary",variant:"h3",children:Ue.a.format(e.amount)})]}),Object(E.jsx)(me.a,{item:!0,children:Object(E.jsx)(K.a,{sx:{backgroundColor:Me.a[600],height:56,width:56},children:e.children})})]}),e.target&&Object(E.jsxs)(B.a,{sx:{pt:2,display:"flex",alignItems:"center"},children:[Object(E.jsxs)(Z.a,{sx:{color:Be.a[900],mr:1},variant:"body2",children:[parseInt(100*e.amount/e.target),"%"]}),Object(E.jsx)(Z.a,{color:"textSecondary",variant:"caption",children:e.targetDescription})]})]})}))},Ae=r(515),Ne=r(78),qe=r(328),Ie=r.n(qe),De=function(e){return Object(E.jsx)(Te.a,Object(S.a)(Object(S.a)({sx:{height:"100%"}},e),{},{children:Object(E.jsxs)(We.a,{children:[Object(E.jsxs)(me.a,{container:!0,spacing:3,sx:{justifyContent:"space-between"},children:[Object(E.jsxs)(me.a,{item:!0,children:[Object(E.jsx)(Z.a,{color:"textSecondary",gutterBottom:!0,variant:"h6",children:e.description}),Object(E.jsx)(Z.a,{color:"textPrimary",variant:"h3",children:e.percentage+" %"})]}),Object(E.jsx)(me.a,{item:!0,children:Object(E.jsx)(K.a,{sx:{backgroundColor:Ne.a[600],height:56,width:56},children:Object(E.jsx)(Ie.a,{})})})]}),Object(E.jsx)(B.a,{sx:{pt:3},children:Object(E.jsx)(Ae.a,{value:e.percentage,variant:"determinate"})})]})}))},Fe=r(22),Ee=r(516),ze=function(e){var t=Object(Fe.a)(),r={animation:!1,cornerRadius:20,layout:{padding:0},legend:{display:!1},maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{barThickness:12,maxBarThickness:10,barPercentage:.5,categoryPercentage:.5,ticks:{fontColor:t.palette.text.secondary},gridLines:{display:!1,drawBorder:!1}}],yAxes:[{ticks:{fontColor:t.palette.text.secondary,beginAtZero:!0,min:0},gridLines:{borderDash:[2],borderDashOffset:[2],color:t.palette.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:t.palette.divider}}]},tooltips:{backgroundColor:t.palette.background.paper,bodyFontColor:t.palette.text.secondary,borderColor:t.palette.divider,borderWidth:1,enabled:!0,footerFontColor:t.palette.text.secondary,intersect:!1,mode:"index",titleFontColor:t.palette.text.primary}};return Object(E.jsxs)(Te.a,Object(S.a)(Object(S.a)({},e),{},{children:[Object(E.jsx)(Ee.a,{action:Object(E.jsx)(X.a,{size:"small",variant:"text",children:e.description}),title:e.title}),Object(E.jsx)(Y.a,{}),Object(E.jsx)(We.a,{children:Object(E.jsx)(B.a,{sx:{height:400,position:"relative"},children:Object(E.jsx)(f.Bar,{data:e.data,options:r})})}),Object(E.jsx)(Y.a,{})]}))},Re=r(329),_e=r.n(Re),He=r(517),Ge=r(518),Je=r(519),Ve=r(520),Ke=r(521),Ze=function(e){return Object(E.jsxs)(Te.a,Object(S.a)(Object(S.a)({},e),{},{children:[Object(E.jsx)(Ee.a,{title:e.title}),Object(E.jsx)(Y.a,{}),Object(E.jsx)(_e.a,{children:Object(E.jsx)(B.a,{sx:{minWidth:e.minWidth},children:Object(E.jsxs)(He.a,{children:[Object(E.jsx)(Ge.a,{children:Object(E.jsx)(Je.a,{children:e.headers.map((function(e){return Object(E.jsx)(Ve.a,{children:e})}))})}),Object(E.jsx)(Ke.a,{children:e.data.map((function(t){return Object(E.jsx)(Je.a,{hover:!0,children:Object.keys(t).map((function(e){return Object(E.jsx)(Ve.a,{children:t[e]})}))},t[e.headers[0]])}))})]})})})]}))},Ye=r(59),Qe=r.n(Ye),Xe=function(){var e=J().user,t=Object(n.useState)({"Opening Balance":5e4,Contributions:0,"Closing Balance":0,SemesterContribution:0}),r=Object(u.a)(t,2),a=r[0],o=r[1],i=Object(n.useState)(null),c=Object(u.a)(i,2),s=c[0],j=c[1],p=Object(n.useState)([]),h=Object(u.a)(p,2),x=h[0],g=h[1],f=Object(n.useState)([]),O=Object(u.a)(f,2),v=O[0],w=O[1],y=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Qe.a.getUserBalance();case 3:t=e.sent,o(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(){var t,r,n,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Qe.a.getUserContributions();case 3:t=e.sent,r=t.data,n=[],a=[],Object.keys(r).forEach((function(e){n.push(r[e].amount),a.push(r[e].target)})),o={datasets:[{backgroundColor:m.a.indigo[500],data:n,label:"Amount"},{backgroundColor:m.a.grey[200],data:a,label:"Target"}],labels:Object.keys(t.data)},j(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Qe.a.getAllMembersMonthlyContributions();case 3:t=e.sent,r=t.data.map((function(e){return{Month:e.Month,Amount:Ue.a.format(e.Amount)}})),n=Object.keys(r[0]),w(n),g(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y(),k(),C()}),[]),e?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(fe.a,{children:Object(E.jsx)("title",{children:"Dashboard | Simunye"})}),Object(E.jsx)(B.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:3},children:Object(E.jsx)(Oe.a,{maxWidth:!1,children:Object(E.jsxs)(me.a,{container:!0,spacing:3,children:[Object(E.jsx)(me.a,{item:!0,lg:3,sm:6,xl:3,xs:12,children:Object(E.jsx)(Le,{description:"TOTAL CONTRIBUTIONS",amount:a.Contributions,children:Object(E.jsx)(Se.a,{})})}),Object(E.jsx)(me.a,{item:!0,lg:3,sm:6,xl:3,xs:12,children:Object(E.jsx)(Le,{description:"SEMESTER CONTRIBUTION",amount:a.SemesterContribution,target:a["Opening Balance"]/3/3,targetDescription:"Towards Semester Target",children:Object(E.jsx)(we.a,{})})}),Object(E.jsx)(me.a,{item:!0,lg:3,sm:6,xl:3,xs:12,children:Object(E.jsx)(De,{description:"GOAL",percentage:100*a.Contributions/a["Opening Balance"]})}),Object(E.jsx)(me.a,{item:!0,lg:3,sm:6,xl:3,xs:12,children:Object(E.jsx)(Le,{description:"CLOSING BALANCE",amount:a["Closing Balance"],children:Object(E.jsx)(ke.a,{})})}),Object(E.jsx)(me.a,{item:!0,lg:8,md:12,xl:9,xs:12,children:s&&Object(E.jsx)(ze,{data:s,title:"Monthly Contributions Breakdown",description:"LAST ".concat((new Date).getMonth()+1," MONTH(S)")})}),Object(E.jsx)(me.a,{item:!0,lg:4,md:6,xl:3,xs:12,children:x.length>0&&Object(E.jsx)(Ze,{headers:v,data:x,title:"Monthly Contributions",minWidth:200})})]})})})]}):Object(E.jsx)(b.a,{to:"/login"})},$e=r(523),et=r(125),tt=r(45),rt=function(e){var t=Object(n.useState)({password:"",confirm:""}),r=Object(u.a)(t,2),a=r[0],o=(r[1],Object(n.useState)(!1)),i=Object(u.a)(o,2),c=i[0],s=i[1],b=Object(n.useState)(""),j=Object(u.a)(b,2),p=j[0],h=j[1],x=tt.a().shape({password:tt.c().min(6).required("This field is required"),confirm:tt.c().when("password",{is:function(e){return!!(e&&e.length>0)},then:tt.c().oneOf([tt.b("password")],"Both password need to be the same")})}),g=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.password,n=t.confirm,console.log("Submit",r,n),e.prev=2,e.next=5,Qe.a.changePassword(r);case 5:if(200===e.sent.status){e.next=8;break}throw new Error;case 8:h("Password changed"),s(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),h("Failed to change password"),s(!0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(et.a,{initialValues:a,validationSchema:x,onSubmit:g,children:function(t){var r=t.errors,n=(t.handleBlur,t.handleChange),a=t.handleSubmit,o=(t.isSubmitting,t.touched),i=t.values;return Object(E.jsx)("form",Object(S.a)(Object(S.a)({},e),{},{onSubmit:a,children:Object(E.jsxs)(Te.a,{children:[Object(E.jsx)(Ee.a,{subheader:"Update password",title:"Password"}),Object(E.jsx)(Y.a,{}),Object(E.jsxs)(We.a,{children:[Object(E.jsx)($e.a,{error:Boolean(o.password&&r.password),helperText:o.password&&r.password,fullWidth:!0,label:"Password",margin:"normal",name:"password",onChange:n,type:"password",value:i.password,variant:"outlined"}),Object(E.jsx)($e.a,{error:Boolean(o.confirm&&r.confirm),helperText:o.confirm&&r.confirm,fullWidth:!0,label:"Confirm password",margin:"normal",name:"confirm",onChange:n,type:"password",value:i.confirm,variant:"outlined"})]}),Object(E.jsx)(Y.a,{}),Object(E.jsx)(B.a,{display:c?"block":"none",children:Object(E.jsx)(Z.a,{color:"secondary",variant:"h6",children:p})}),Object(E.jsx)(B.a,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:Object(E.jsx)(X.a,{color:"primary",variant:"contained",type:"submit",children:"Update"})})]})}))}})},nt=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(fe.a,{children:Object(E.jsx)("title",{children:"Settings"})}),Object(E.jsx)(B.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:3},children:Object(E.jsx)(Oe.a,{maxWidth:"lg",children:Object(E.jsx)(B.a,{sx:{pt:3},children:Object(E.jsx)(rt,{})})})})]})},at=tt.a().shape({email:tt.c().required().email().label("Email"),password:tt.c().required().min(4).label("Password")}),ot=function(){var e=Object(b.h)(),t=J().logIn,r=Object(n.useState)(!1),a=Object(u.a)(r,2),o=a[0],i=a[1],c=function(){var r=Object(d.a)(l.a.mark((function r(n){var a,o,c;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=n.email,o=n.password,r.prev=1,r.next=4,_.a.login(a,o);case 4:if(200===(c=r.sent).status){r.next=7;break}return r.abrupt("return",i(!0));case 7:i(!1),t(c.data),e("/app/dashboard"),r.next=15;break;case 12:return r.prev=12,r.t0=r.catch(1),r.abrupt("return",i(!0));case 15:case"end":return r.stop()}}),r,null,[[1,12]])})));return function(e){return r.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(fe.a,{children:Object(E.jsx)("title",{children:"Login | Simunye"})}),Object(E.jsx)(B.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},children:Object(E.jsx)(Oe.a,{maxWidth:"sm",children:Object(E.jsx)(et.a,{initialValues:{email:"user@simunye.africa",password:""},validationSchema:at,onSubmit:c,children:function(e){var t=e.errors,r=e.handleBlur,n=e.handleChange,a=e.handleSubmit,i=e.isSubmitting,c=e.touched,s=e.values;return Object(E.jsxs)("form",{onSubmit:a,children:[Object(E.jsx)(B.a,{sx:{mb:3},children:Object(E.jsx)(Z.a,{color:"textPrimary",variant:"h2",children:"Sign in"})}),Object(E.jsx)($e.a,{error:Boolean(c.email&&t.email),fullWidth:!0,helperText:c.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:r,onChange:n,type:"email",value:s.email,variant:"outlined"}),Object(E.jsx)($e.a,{error:Boolean(c.password&&t.password),fullWidth:!0,helperText:c.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:r,onChange:n,type:"password",value:s.password,variant:"outlined"}),Object(E.jsx)(B.a,{display:o?"block":"none",children:Object(E.jsx)(Z.a,{color:"secondary",variant:"h6",children:"Invalid email and/or password"})}),Object(E.jsx)(B.a,{sx:{py:2},children:Object(E.jsx)(X.a,{color:"primary",disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign in now"})})]})}})})})]})},it=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(fe.a,{children:Object(E.jsx)("title",{children:"404 | Simunye"})}),Object(E.jsx)(B.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},children:Object(E.jsxs)(Oe.a,{maxWidth:"md",children:[Object(E.jsx)(Z.a,{align:"center",color:"textPrimary",variant:"h1",children:"404: The page you are looking for isn\u2019t here"}),Object(E.jsx)(Z.a,{align:"center",color:"textPrimary",variant:"subtitle2",children:"You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation"}),Object(E.jsx)(B.a,{sx:{textAlign:"center"},children:Object(E.jsx)("img",{alt:"Under development",src:"/static/images/undraw_page_not_found_su7k.svg",style:{marginTop:50,display:"inline-block",maxWidth:"100%",width:560}})})]})})]})},ct=function(e){return[{path:"app",element:e?Object(E.jsx)(ue,{}):Object(E.jsx)(b.a,{to:"/login"}),children:[{path:"dashboard",element:Object(E.jsx)(Xe,{})},{path:"settings",element:Object(E.jsx)(nt,{})},{path:"404",element:Object(E.jsx)(it,{})},{path:"*",element:Object(E.jsx)(b.a,{to:"/404"})}]},{path:"/",element:e?Object(E.jsx)(b.a,{to:"/app/dashboard"}):Object(E.jsx)(ge,{}),children:[{path:"login",element:Object(E.jsx)(ot,{})},{path:"404",element:Object(E.jsx)(it,{})},{path:"/",element:Object(E.jsx)(b.a,{to:"/login"})}]}]};var st,lt=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),r=t[0],a=t[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),c=i[0],s=i[1];c||function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.getUser();case 3:(t=e.sent)&&a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to get user");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()().then((function(){s(!0)}));var p=Object(b.j)(ct(r));return Object(E.jsx)(j.a,{theme:y,children:Object(E.jsxs)(H.Provider,{value:{user:r,setUser:a},children:[Object(E.jsx)(g,{}),p]})})},dt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ut(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var bt="BNrPK1ySlViikmonMH5pOUxx4639d3mGUNi3YgyaQOReonmanX-LNkVmN5ufgHNl6UBaq7PLkHIAj7KpHmiT_kc";console.log("app server",bt);var jt=!1,pt=null;function ht(){"denied"!==Notification.permission||xt(null)}function xt(e){var t=document.querySelector(".js-subscription-json"),r=document.querySelector(".js-subscription-details");e?(t.textContent=JSON.stringify(e),r.classList.remove("is-invisible")):r.classList.add("is-invisible")}var gt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,640)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)}))};i.a.render(Object(E.jsx)(c.a,{children:Object(E.jsx)(lt,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");dt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ut(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ut(t,e)}))}"serviceWorker"in navigator&&"PushManager"in window?(console.log("Service Worker and Push is supported"),navigator.serviceWorker.register("".concat("","/service-worker.js")).then((function(e){console.log("Service Worker is registered",e),pt=e,window.addEventListener("load",(function(){(st=document.querySelector("#js-push-btn"))&&st.addEventListener("click",(function(){st.disabled=!0,console.log("Cliked",jt),jt?pt.pushManager.getSubscription().then((function(e){if(e)return e.unsubscribe()})).catch((function(e){console.log("Error unsubscribing",e)})).then((function(){xt(null),console.log("User is unsubscribed."),jt=!1,ht()})):function(){var e=function(e){for(var t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(r),a=new Uint8Array(n.length),o=0;o<n.length;++o)a[o]=n.charCodeAt(o);return a}(bt);pt.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e}).then((function(e){console.log("User is subscribed."),xt(e),jt=!0,ht()})).catch((function(e){console.log("Failed to subscribe the user: ",e),ht()}))}()})),pt.pushManager.getSubscription().then((function(e){(jt=!(null===e))?console.log("User IS subscribed."):console.log("User is NOT subscribed."),ht()}))}))})).catch((function(e){console.error("Service Worker Error",e)}))):console.warn("Push messaging is not supported")}(),gt()},59:function(e,t,r){var n=r(307).default;e.exports={getUser:function(){return n.get("/user")},getUserBalance:function(){return n.get("/user/balance")},getUserDeposits:function(){return n.get("/user/deposits")},getUserContributions:function(){return n.get("/user/contributions")},getAllMembersMonthlyContributions:function(){return n.get("/user/allcontributions")},changePassword:function(e){return n.post("/user/changepassword",{password:e})}}},81:function(e,t,r){var n=r(307);n.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&console.log("LogOut the user"),Promise.reject(e)}));e.exports={login:function(e,t){return n.post("/login",{email:e,password:t})},logout:function(){return n.get("/logout")}}}},[[493,1,2]]]);
//# sourceMappingURL=main.7c545cc8.chunk.js.map