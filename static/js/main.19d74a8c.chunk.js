(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{221:function(e,t,n){},222:function(e,t,n){},242:function(e,t){},244:function(e,t){},254:function(e,t){},256:function(e,t){},281:function(e,t){},283:function(e,t){},284:function(e,t){},289:function(e,t){},291:function(e,t){},297:function(e,t){},299:function(e,t){},318:function(e,t){},330:function(e,t){},333:function(e,t){},359:function(e,t){},500:function(e,t,n){"use strict";n.r(t);var o=n(4),c=n.n(o),a=n(65),s=n.n(a),r=(n(221),n(86)),i=n.p+"static/media/logo.6ce24c58.svg",l=(n(222),n(131)),u=n.n(l),d=(n(223),n(17));var p=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),a=(t[0],t[1],n(225)),s=Object(o.useState)((new Date).setMonth(0)),l=Object(r.a)(s,2),p=l[0],f=l[1],b=Object(o.useState)(new Date),j=Object(r.a)(b,2),g=j[0],h=j[1];return c.a.useRef(null),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(d.jsx)("p",{children:"Download All Player Logs"}),Object(d.jsx)("p",{children:"From"}),Object(d.jsx)(u.a,{dateFormat:"dd-MM-yyyy",selected:p,onChange:function(e){return f(e)}}),Object(d.jsx)("p",{children:"To"}),Object(d.jsx)(u.a,{dateFormat:"dd-MM-yyyy",selected:g,onChange:function(e){return h(e)}}),Object(d.jsx)("p",{}),Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("You clicked submit.");var t=new Date(p),o=new Date(g);console.log(t.getTime()),console.log(o.getTime());var c=new(n(451)),s={appId:"13797",serverName:"PlayerLogServer",serverSecret:"1badb521-6a2d-4495-8d09-1f368e738258",service:"globalEntity",operation:"GET_LIST",data:{where:{entityType:"player_log",updatedAt:{$gte:t.getTime(),$lte:o.getTime()}},orderBy:{},maxReturn:-1}};function r(e){return e.toISOString().split("T")[0].replaceAll("-","")}console.log(s),a({url:"https://sharedprod.braincloudservers.com/s2sdispatcher",method:"POST",headers:{"content-type":"application/json"},json:s},(function(e,n,a){(console.log(n),e||200!==n.statusCode)?(console.log("error: "+e),console.log("response.statusCode: "+n.statusCode)):(a.entityList.forEach((function(e){var t=e.data.csv,n=e.ownerId;c.file(n+".csv",t)})),c.generateAsync({type:"blob"}).then((function(e){!function(e,t){var n=document.createElement("a"),o=new Blob([e],{type:"text/plain"});n.href=URL.createObjectURL(o),n.download=t,document.body.appendChild(n),n.click()}(e,"log_"+r(t)+"_"+r(o)+".zip")})))}))},children:Object(d.jsx)("button",{type:"submit",children:"Download"})})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,505)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[500,1,2]]]);
//# sourceMappingURL=main.19d74a8c.chunk.js.map