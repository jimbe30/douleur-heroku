(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{310:function(e,n,t){e.exports=t(573)},398:function(e,n,t){},414:function(e,n,t){},415:function(e,n,t){},573:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(21),i=t.n(c),o=(t(315),t(284)),l=t(70),s=t(53),u=t(27),m=t(188),p=t(80),d=t.n(p),h=t(145),f=t(262),E=t.n(f),v={douleurs:"/ordonnances/"},b={GET_PRESCRIPTIONS:"GET_PRESCRIPTIONS",GET_ARBORESCENCE:"GET_ARBORESCENCE"};function g(){return(g=Object(h.a)(d.a.mark(function e(n){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(v.douleurs+n);case 2:t=e.sent,k(b.GET_PRESCRIPTIONS,t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(){return(C=Object(h.a)(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(v.douleurs);case 2:n=e.sent,k(b.GET_ARBORESCENCE,n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O=function(){var e=Object(h.a)(d.a.mark(function e(n){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(n).then(function(e){return t=e.data});case 3:return e.abrupt("return",t);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(n){return e.apply(this,arguments)}}();var x=t(625),j=Object(u.b)({ordonnance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b.GET_PRESCRIPTIONS:return Object(m.a)({},e,{prescriptions:n.content});case b.GET_ARBORESCENCE:return Object(m.a)({},e,{arborescence:n.content});default:return e}},form:x.a}),y=Object(u.c)(j);function k(e,n){y.dispatch({type:e,content:n})}t(398);var N=t(264);t(414);function P(){return r.a.createElement(N.slide,null,r.a.createElement("a",{className:"menu-item accueil",href:"/"},"Accueil"),r.a.createElement("a",{className:"menu-item ordonnance",href:"/douleurs"},"Ordonnance"),r.a.createElement("a",{className:"menu-item histo",href:"/historique"},"Historique"),r.a.createElement("a",{className:"menu-item lien",href:"/liens"},"Liens"))}var R=t(64),w=t(42),S=t(67),T=t(65),q=t(60),A=t(66),B=function(e){function n(e){var t;return Object(R.a)(this,n),(t=Object(S.a)(this,Object(T.a)(n).call(this,e))).onClick=t.onClick.bind(Object(q.a)(t)),t.state={actif:!1},t}return Object(A.a)(n,e),Object(w.a)(n,[{key:"onClick",value:function(e){this.state.actif?(e.target.className="noborder",this.setState({actif:!1})):(e.target.className="ui accordion styled",this.setState({actif:!0}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"noborder",onClick:this.onClick},this.props.message,r.a.createElement("br",null))}}]),n}(a.Component),G=(t(287),t(610));t(617),t(618);var D=t(627),I=t(626),z=t(624),F=t(622),_=(t(415),t(268));var M=function(e){var n=e.className,t=e.children,a=e.width,c=e.height,i=e.moreText,o=e.lessText,l=Object(_.a)(e,["className","children","width","height","moreText","lessText"]),s=r.a.createElement("style",null," ","\n            .truncated {\n                max-height: ".concat(c?c+";":"2rem;","\n                max-width: ").concat(a?a+";":"100%;","\n                width: ").concat(a?a+";":"100%;","\n                overflow: hidden;\n                text-overflow: ellipsis;\n            } \n            .expand, .trunc {\n                width: fit-content;\n                margin-left: auto;\n                margin-right: auto;\n            }\n            .expand::after, .trunc::after {\n                cursor: pointer;\n                color: #718293;\n                font-style: italic;\n            }\n            .expand::after {\n                content: '").concat(i||"\\0025BC","'; \n                font-size: ").concat(i?".5rem":"1rem",";\n            }         \n            .trunc::after {\n                content: '").concat(o||"\\0025B2","';\n                font-size: ").concat(o?".5rem":"1rem",";\n            }\n        ")),u=!0,m=function(e){u?(e.target.className="trunc",e.target.previousSibling.className=n||"",u=!1):(e.target.className="expand",e.target.previousSibling.className="".concat(n?n+" ":"","truncated"),u=!0)};return r.a.createElement(r.a.Fragment,null,s,r.a.createElement("div",Object.assign({className:"".concat(n?n+" ":"","truncated")},l),t),r.a.createElement("div",{onClick:m,className:"expand"}))};function V(e){var n=e.nomenclatures,t=e.history,a={float:"right",maxWidth:"100%",marginTop:"-40px",marginBottom:"5px",marginRight:"2%"},c=function(e){var n,c=e.libelle,i=e.infosGenerales,o=e.idDouleur,l=[{title:c,content:{content:(n=i)?r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{style:a,onClick:function(){return t.push("/douleurs/".concat(o))}},"Faire l'ordonnance"),r.a.createElement(M,{height:"6rem",moreText:"\u25bc ( voir plus ... )",lessText:"\u25b2 ( r\xe9duire ... )"},r.a.createElement("pre",{className:"infosBase"},n))):""}}];return r.a.createElement(F.a,{styled:!0,panels:l})},i=function e(n){var t=n.libelle,a=n.nomenclaturesEnfants,i=[{title:t,content:{}}];if(a&&Array.isArray(a)){var o=a.map(function(n){var t=n.libelle,a=n.infosGenerales,i=n.id;return n.nomenclaturesEnfants&&n.nomenclaturesEnfants.length>0?r.a.createElement(e,{libelle:t,nomenclaturesEnfants:n.nomenclaturesEnfants}):r.a.createElement(c,{libelle:t,infosGenerales:a,idDouleur:i})}),l=r.a.createElement("div",null,o);i[0].content={content:l}}return r.a.createElement(F.a,{styled:!0,panels:i})};return r.a.createElement(function(e){var n=e.nomenclatures;return r.a.createElement("div",null,Array.isArray(n)&&n.map(function(e){return r.a.createElement(i,{libelle:e.libelle,nomenclaturesEnfants:e.nomenclaturesEnfants})}))},{nomenclatures:n})}var J=t(623),L=function(e){function n(){return Object(R.a)(this,n),Object(S.a)(this,Object(T.a)(n).apply(this,arguments))}return Object(A.a)(n,e),Object(w.a)(n,[{key:"componentDidMount",value:function(){!function(){C.apply(this,arguments)}()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J.a,{info:!0},"Choisissez le type de douleur concern\xe9e dans l'arborescence ci-dessous"),r.a.createElement(V,this.props))}}]),n}(a.Component),H=Object(s.b)(function(e){return{nomenclatures:e.ordonnance.arborescence}})(L),Q=t(615),W=t(144);function K(e){var n=e.prescriptions,t=e.prescriptionChoisie,c=e.clickOrdonnance,i=function(){var e=null;return t?e=t.nomenclatureDouleur:n&&n.length>0&&(e=n[0].nomenclatureDouleur),e?{libelle:e.libelle,infos:e.infosGenerales,recommandations:e.recommandations}:{}};i=i();var o=n&&n.length>0?n.length:0,l=function(){return t?r.a.createElement(J.a,{info:!0},"Vous avez choisi l'ordonnance ci-dessous"):0===o?r.a.createElement(J.a,{warning:!0},"Aucune ordonnance n'est encore propos\xe9e pour cette douleur"):r.a.createElement(J.a,{info:!0}," ".concat(o," ordonnance").concat(o>1?"s vous sont propos\xe9es":" vous est propos\xe9e"," "),r.a.createElement("br",null),"Cliquez sur l'ordonnance de votre choix")};l=l();var s=!t&&i.recommandations&&i.recommandations.length>0?r.a.createElement(J.a,{warning:!0,className:"infosBase"},r.a.createElement(Q.a,{horizontal:!0,fitted:!0},r.a.createElement(D.a,{as:"h4"},"Remarques")),i.recommandations):"",u=function(e){if(e.medicamentsPreconises.length>0)return r.a.createElement("div",{className:"infosBase"}," ",e.medicamentsPreconises.map(function(e){return r.a.createElement("p",null,e.description.split(" ; ").map(function(e){return e+"\r\n"}))}))};return r.a.createElement("div",null,r.a.createElement("h3",null,i.libelle),l,t?r.a.createElement(a.Fragment,null,u(t),r.a.createElement(Q.a,null)):o>0?n.map(function(e,n){return r.a.createElement(a.Fragment,null,r.a.createElement(W.a,{as:"a",onClick:function(){return c(n)}},"Ordonnance ",n+1),u(e),r.a.createElement(Q.a,null))}):void 0,s)}var U=t(621),X=t(620),Y=t(619),Z=function(e){return r.a.createElement(Y.a.Checkbox,{checked:!!e.input.value,name:e.input.name,label:e.label,onChange:function(n,t){var a=t.checked;return e.input.onChange(a)}})},$=function(e){return r.a.createElement(Y.a.Select,{label:e.label,name:e.input.name,onChange:function(n,t){var a=t.value;return e.input.onChange(a)},options:e.options,placeholder:e.placeholder,value:e.input.value})},ee=function(e){return r.a.createElement(Y.a.TextArea,Object.assign({},e.input,{label:e.label,placeholder:e.placeholder}))};function ne(e){this.medicamentsPreconises=e?e.medicamentsPreconises:[],this.nbMedicaments=this.medicamentsPreconises.length,this.getProduits=function(e){return this.medicamentsPreconises[e]&&this.medicamentsPreconises[e].compatibilites?this.medicamentsPreconises[e].compatibilites.map(function(e){return e.produit}):null},this.getDesignationsProduits=function(e){var n=this.getProduits(e);return n?n.map(function(e){return e.designation}):null}}var te=function(e){function n(e){var t;return Object(R.a)(this,n),(t=Object(S.a)(this,Object(T.a)(n).call(this,e))).prescriptionChoisie=new ne(e.ordonnance),t.state={medicaments:t.getMedicaments()},t}return Object(A.a)(n,e),Object(w.a)(n,[{key:"getMedicaments",value:function(){var e=this;return this.prescriptionChoisie.medicamentsPreconises.map(function(n,t){return e.prescriptionChoisie.getDesignationsProduits(t).join(" + ")})}},{key:"formulaireMedicament",value:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:"1rem 0"}},r.a.createElement(W.a,null,this.state.medicaments[e])),r.a.createElement("input",{name:"medicament"+e,type:"hidden",index:e,value:this.state.medicaments[e]}),r.a.createElement(G.a,{container:!0,spacing:2},r.a.createElement(G.a,{item:!0,xs:2},r.a.createElement(U.a,{component:Y.a.Input,label:"Dosage",name:"dosage"+e,placeholder:"Dosage en mg",required:!0})),r.a.createElement(G.a,{item:!0,xs:2},r.a.createElement(U.a,{component:Y.a.Input,label:"Quantit\xe9 / prise",name:"quantite"+e,placeholder:"Nb comprim\xe9s",required:!0})),r.a.createElement(G.a,{item:!0,xs:2},r.a.createElement(U.a,{component:$,label:"Forme",name:"forme"+e,placeholder:"Comprim\xe9 ...",options:[{key:"forme1",text:"Comprim\xe9",value:"comprim\xe9(s)"},{key:"forme2",text:"G\xe9lule",value:"g\xe9lule(s)"}]})),r.a.createElement(G.a,{item:!0,xs:3},r.a.createElement(U.a,{component:Y.a.Input,label:"Fr\xe9quence",name:"frequence"+e,placeholder:"Nb fois par jour",required:!0})),r.a.createElement(G.a,{item:!0,xs:2},r.a.createElement(U.a,{component:Y.a.Input,label:"Dur\xe9e",name:"duree"+e,placeholder:"Nb de jours",required:!0}))))}},{key:"getRecapitulatif",value:function(){var e=this;return this.state.medicaments.map(function(n,t){return r.a.createElement("div",null," ",(e.props["dosage"+t]?n+" "+e.props["dosage"+t]:"")+(e.props["quantite"+t]&&e.props["forme"+t]?", "+e.props["quantite"+t]+" "+e.props["forme"+t]:"")+(e.props["frequence"+t]?", "+e.props["frequence"+t]+" fois par jour":"")+(e.props["duree"+t]?" pendant "+e.props["duree"+t]+" jours":"")," ")})}},{key:"render",value:function(){var e=this;return r.a.createElement(Y.a,{size:"small",onSubmit:this.props.handleSubmit},r.a.createElement(J.a,{info:!0},"Veuillez renseigner la posologie dans le formulaire ci-dessous"),this.prescriptionChoisie&&this.prescriptionChoisie.medicamentsPreconises.map(function(n,t){return e.formulaireMedicament(t)}),r.a.createElement(U.a,{component:ee,label:"Recommandations",name:"recommandations",placeholder:"Effets ind\xe9sirables \xe0 surveiller, cas d'arr\xeat du traitement, ..."}),r.a.createElement(J.a,null,r.a.createElement(Q.a,{horizontal:!0,fitted:!0},r.a.createElement(D.a,{as:"h5"},"R\xe9capitulatif")),this.getRecapitulatif()),r.a.createElement(U.a,{component:Z,label:"Je souhaite d\xe9livrer cette ordonnance",name:"isAgreed"}),r.a.createElement(Y.a.Group,{inline:!0},r.a.createElement(Y.a.Button,{primary:!0},"Valider"),r.a.createElement(Y.a.Button,{onClick:this.props.reset},"Annuler")))}}]),n}(r.a.Component),ae=Object(X.a)({form:"ordonnance"})(te),re=function(e){function n(e){var t;return Object(R.a)(this,n),(t=Object(S.a)(this,Object(T.a)(n).call(this,e))).onClickOrdonnance=function(e){t.setState({choixOrdonnance:e,prescriptionChoisie:t.props.prescriptions[e]}),console.log("Choix de l'ordonnance n\xb0 "+(e+1))},t.state={choixOrdonnance:null,prescriptionChoisie:null},t.onClickOrdonnance.bind(Object(q.a)(t)),t}return Object(A.a)(n,e),Object(w.a)(n,[{key:"getRouteParams",value:function(){return this.props.match?this.props.match.params:{}}},{key:"componentDidMount",value:function(){!function(e){g.apply(this,arguments)}(this.getRouteParams().idDouleur)}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(K,{clickOrdonnance:this.onClickOrdonnance,prescriptionChoisie:this.state.prescriptionChoisie,prescriptions:this.props.prescriptions}),this.state.prescriptionChoisie&&r.a.createElement(ae,Object.assign({onSubmit:function(){return console.log("Formulaire ordonance soumis")},ordonnance:this.state.prescriptionChoisie},this.props.formValues)))}}]),n}(a.Component),ce=Object(s.b)(function(e){return{prescriptions:e.ordonnance.prescriptions,formValues:e.form.ordonnance?e.form.ordonnance.values:{}}})(re),ie=t(616);i.a.render(r.a.createElement(function(){var e=r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement("p",null,"Bienvenue dans Pain Control Pro"),r.a.createElement("p",null,"L'application qu'il vous faut pour g\xe9rer la douleur de vos patients"),r.a.createElement("p",null,"Cliquez sur le menu en haut \xe0 gauche pour s\xe9lectionner votre choix")));return r.a.createElement(s.a,{store:y},r.a.createElement(o.a,null,r.a.createElement(P,null),r.a.createElement(D.a,{as:"h2",color:"grey",textAlign:"center",inverted:!0,dividing:!0},r.a.createElement("span",null," Pain Control Pro ")),r.a.createElement(I.a,{className:"center"},r.a.createElement(l.a,{exact:!0,path:"/",render:function(n){return r.a.createElement(B,Object.assign({},n,{message:e}))}}),r.a.createElement(l.a,{exact:!0,path:"/douleurs",component:H}),r.a.createElement(l.a,{exact:!0,path:"/douleurs/:idDouleur",component:ce}),r.a.createElement(ie.a,null))))},null),document.getElementById("react-app"))}},[[310,1,2]]]);
//# sourceMappingURL=main.48a45e84.chunk.js.map