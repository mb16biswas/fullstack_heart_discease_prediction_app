(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(10),i=a.n(c),o=(a(68),a(48)),l=a(49),r=a(55),h=a(53),d=(a(69),a(35)),j=a.n(d),p=a(138),u=a(54),b=a(36),g=a(56),x=a(5),m=a(136),O=a(137),f=a(132),y=a(134),v=a(135),S=a(133),C=a(51),k=a.n(C),B=a(103),N=a(2),P=Object(x.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,s=e.onClose,n=Object(g.a)(e,["children","classes","onClose"]);return Object(N.jsxs)(f.a,Object(b.a)(Object(b.a)({disableTypography:!0,className:a.root},n),{},{children:[Object(N.jsx)(B.a,{variant:"h6",children:t}),s?Object(N.jsx)(S.a,{"aria-label":"close",className:a.closeButton,onClick:s,children:Object(N.jsx)(k.a,{})}):null]}))})),D=Object(x.a)((function(e){return{root:{padding:e.spacing(2)}}}))(y.a),F=Object(x.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(v.a);function w(){var e=n.a.useState(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],c=function(){s(!1)};return Object(N.jsxs)("div",{children:[Object(N.jsx)(m.a,{variant:"outlined",color:"primary",onClick:function(){s(!0)},children:"explore input fields"}),Object(N.jsxs)(O.a,{onClose:c,"aria-labelledby":"customized-dialog-title",open:a,children:[Object(N.jsx)(P,{id:"customized-dialog-title",onClose:c,children:"input fields"}),Object(N.jsxs)(D,{dividers:!0,children:[Object(N.jsx)(B.a,{gutterBottom:!0,children:"age - age in years"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"sex - (1 = male; 0 = female)"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"cp - chest pain type 0: Typical angina: chest pain related decrease blood supply to the heart 1: Atypical angina: chest pain not related to heart 2: Non-anginal pain: typically esophageal spasms (non heart related) 3: Asymptomatic: chest pain not showing signs of disease"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"trestbps - resting blood pressure (in mm Hg on admission to the hospital) anything above 130-140 is typically cause for concern"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"chol - serum cholestoral in mg/dl serum = LDL + HDL + .2 * triglycerides above 200 is cause for concern"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"fbs - (fasting blood sugar > 120 mg/dl) (1 = true; 0 = false) '>126' mg/dL signals diabetes"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"restecg - resting electrocardiographic results 0: Nothing to note 1: ST-T Wave abnormality can range from mild symptoms to severe problems signals non-normal heart beat 2: Possible or definite left ventricular hypertrophy Enlarged heart's main pumping chamber"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"thalach - maximum heart rate achieved"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"exang - exercise induced angina (1 = yes; 0 = no)"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"oldpeak - ST depression induced by exercise relative to rest looks at stress of heart during excercise unhealthy heart will stress more"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"slope - the slope of the peak exercise ST segment 0: Upsloping: better heart rate with excercise (uncommon) 1: Flatsloping: minimal change (typical healthy heart) 2: Downslopins: signs of unhealthy heart"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"ca - number of major vessels (0-3) colored by flourosopy colored vessel means the doctor can see the blood passing through the more blood movement the better (no clots)"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"thal - thalium stress result 1,3: normal 6: fixed defect: used to be defect but ok now 7: reversable defect: no proper blood movement when excercising"}),Object(N.jsx)(B.a,{gutterBottom:!0,children:"target - have disease or not (1=yes, 0=no) (= the predicted attribute)"})]}),Object(N.jsx)(F,{})]})]})}a(97);var K=function(){return Object(N.jsx)("div",{className:"box1",children:Object(N.jsx)("h1",{children:"Loading"})})},T=a.p+"static/media/happy_heart.b3c9d659.png",A=a.p+"static/media/sad_heart.4c9b8fd8.png",I=function(e){var t=e.pred,a=e.home;return 1===t[0]?Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("div",{className:"tittle",children:Object(N.jsx)("h1",{children:"Heart Disease Detected"})}),Object(N.jsx)("img",{src:A,alt:"sad_heart"}),Object(N.jsx)("button",{onClick:a,children:"Back "})]}):Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("div",{className:"tittle",children:Object(N.jsx)("h1",{children:"No Heart Disease Detected"})}),Object(N.jsx)("img",{src:T,alt:"happy_heart"}),Object(N.jsx)("button",{onClick:a,children:"Back "})]})},L=a(52),H=function(e){var t=e.pred,a=e.home;if("string"===typeof t)return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("div",{className:"tittle",children:Object(N.jsx)("h1",{children:t})}),Object(N.jsx)("button",{onClick:a,children:"Back"})]});var s,n=[["id","Results"]];for(s=0;s<t.length;s++)0===t[s]?n.push([s,"No Heart Discease"]):n.push([s,"Heart Discease"]);return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("div",{className:"tittle",children:Object(N.jsx)("h1",{children:"Results"})}),Object(N.jsx)("div",{className:"Download",children:Object(N.jsx)(L.CSVLink,{data:n,children:"Download The CSV File"})}),Object(N.jsx)("button",{onClick:a,children:"Back"})]})},E=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onSubmit=function(){var t=[e.state.age,e.state.sex,e.state.cp,e.state.trestbps,e.state.chol,e.state.fbs,e.state.restecg,e.state.thalach,e.state.exang,e.state.oldpeak,e.state.slope,e.state.ca,e.state.thal];j.a.post("".concat("https://heart-discease-render.onrender.com/","accept"),t).then((function(t){e.setState({pred:t.data.data}),e.setState({status:"output1"}),e.setState({age:""}),e.setState({sex:""}),e.setState({cp:""}),e.setState({trestbps:""}),e.setState({chol:""}),e.setState({fbs:""}),e.setState({restecg:""}),e.setState({thalach:""}),e.setState({exang:""}),e.setState({oldpeak:""}),e.setState({slope:""}),e.setState({ca:""}),e.setState({thal:""})})).catch((function(e){console.log(e)})),e.setState({status:"loading"})},e.validate=function(e){e.key>=0&&e.key<=10&&" "!==e.key||"."===e.key||e.preventDefault()},e.onFileChange=function(t){e.setState({selectedFile:t.target.files[0]})},e.onFileUpload=function(){var t=new FormData;t.append("myFile",e.state.selectedFile),j.a.post("".concat("https://heart-discease-render.onrender.com/","csv"),t).then((function(t){e.setState({pred:t.data.data}),e.setState({selectedFile:null}),e.setState({status:"output2"})})).catch((function(e){console.log(e)})),e.setState({status:"loading"})},e.home=function(){e.setState({status:"Input"})},e.state={age:"",sex:"",cp:"",trestbps:"",chol:"",fbs:"",restecg:"",thalach:"",exang:"",oldpeak:"",slope:"",ca:"",thal:"",test:"",selectedFile:null,status:"Input",pred:[]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return"Input"===this.state.status?Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("div",{className:"tittle",children:Object(N.jsx)("h1",{children:"HEART DISEASE PREDICTOR "})}),Object(N.jsx)("p",{children:"You can upload a csv file here to get the prediction"}),Object(N.jsx)("input",{type:"file",id:"fileSelect",accept:".csv",onChange:this.onFileChange}),Object(N.jsx)("button",{onClick:this.onFileUpload,children:"Upload!"}),Object(N.jsx)("p",{children:"Or you can can enter your informations in the input fields to get the prediction "}),Object(N.jsx)("p",{children:"If empty fields are submitted then we replace the empty fields with the mean value, try to fill as many fields as you can "}),Object(N.jsx)(w,{}),Object(N.jsx)("h2",{children:"age"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({age:t.target.value})}}),Object(N.jsx)("h2",{children:"sex"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({sex:t.target.value})}}),Object(N.jsx)("h2",{children:"cp"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({cp:t.target.value})}}),Object(N.jsx)("h2",{children:"trestbps"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({trestbps:t.target.value})}}),Object(N.jsx)("h2",{children:"chol"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({chol:t.target.value})}}),Object(N.jsx)("h2",{children:"fbs"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({fbs:t.target.value})}}),Object(N.jsx)("h2",{children:"restecg"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({restecg:t.target.value})}}),Object(N.jsx)("h2",{children:"thalach"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({thalach:t.target.value})}}),Object(N.jsx)("h2",{children:"exang"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({exang:t.target.value})}}),Object(N.jsx)("h2",{children:"oldpeak"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({oldpeak:t.target.value})}}),Object(N.jsx)("h2",{children:"slope"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({slope:t.target.value})}}),Object(N.jsx)("h2",{children:"ca"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({ca:t.target.value})}}),Object(N.jsx)("h2",{children:"thal"}),Object(N.jsx)(p.a,{onKeyPress:this.validate,placeholder:"type",onChange:function(t){e.setState({thal:t.target.value})}}),Object(N.jsx)("button",{onClick:this.onSubmit,children:"submit"})]}):"loading"===this.state.status?Object(N.jsx)(K,{}):"output1"===this.state.status?Object(N.jsx)(I,{pred:this.state.pred,home:this.home}):Object(N.jsx)(H,{pred:this.state.pred,home:this.home})}}]),a}(s.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(E,{})}),document.getElementById("root")),R()},68:function(e,t,a){},69:function(e,t,a){},97:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.483512d1.chunk.js.map