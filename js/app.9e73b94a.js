(function(e){function t(t){for(var a,l,o=t[0],d=t[1],u=t[2],s=0,b=[];s<o.length;s++)l=o[s],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&b.push(c[l][0]),c[l]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);r&&r(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var d=n[o];0!==c[d]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},c={app:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/smeta/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var r=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"489e":function(e,t,n){"use strict";n("4980")},"48bb":function(e,t,n){"use strict";n("bc0b")},4980:function(e,t,n){},"50d1":function(e,t,n){},"51d8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c=(n("b0c0"),{class:"main"}),i={class:"mainControls"},l=Object(a["f"])("Страница: "),o=Object(a["g"])("th",null,"Наименование",-1),d=Object(a["g"])("th",null,"Кол-во",-1),u=Object(a["g"])("th",null,"Цена на ед. изм.",-1),r=Object(a["g"])("th",null,"Цена",-1),s={key:0},b={key:0},g={key:1},O={key:2},j={key:3},h={key:4},p={key:5},f={key:6},v={class:"controls"},m={class:"totalCost"},w=Object(a["g"])("td",null,"Общая цена",-1),k=Object(a["g"])("td",null,null,-1),y=Object(a["g"])("td",null,null,-1),C={key:0},P=Object(a["g"])("div",{class:"mainControls"},[Object(a["g"])("div",null,[Object(a["g"])("div",{class:"spacer"})])],-1),D={key:0,class:"overlay"},E={key:0,class:"overlay"};function A(e,t,n,A,S,I){var N=Object(a["o"])("add-window"),W=Object(a["o"])("add-page-window");return Object(a["i"])(),Object(a["d"])("div",c,[Object(a["g"])("div",i,[Object(a["g"])("div",null,[Object(a["g"])("label",null,[l,Object(a["u"])(Object(a["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return A.currentPage=e}),onChange:t[2]||(t[2]=function(){return I.updatePage&&I.updatePage.apply(I,arguments)})},[(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["m"])(I.pageNames(),(function(e){return Object(a["i"])(),Object(a["d"])("option",{value:e,key:e},Object(a["p"])(e),9,["value"])})),128))],544),[[a["r"],A.currentPage]])])]),Object(a["g"])("div",null,[Object(a["g"])("button",{onClick:t[3]||(t[3]=function(t){return e.showAddPageWindow=!0})},"Добавить страницу"),Object(a["g"])("button",{onClick:t[4]||(t[4]=function(){return I.editPage&&I.editPage.apply(I,arguments)})},"Изменить текущую страницу"),Object(a["g"])("button",{onClick:t[5]||(t[5]=function(){return I.deletePage&&I.deletePage.apply(I,arguments)})},"Удалить текущую страницу")]),Object(a["g"])("div",null,[Object(a["g"])("button",{onClick:t[6]||(t[6]=function(){return A.screenshot&&A.screenshot.apply(A,arguments)})},"Снимок текущей страницы")])]),Object(a["g"])("table",null,[Object(a["g"])("tr",null,[o,d,u,r,A.isScreenshotting?Object(a["e"])("",!0):(Object(a["i"])(),Object(a["d"])("th",s,"Управление"))]),(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["m"])(A.data[A.currentPage],(function(e){return Object(a["i"])(),Object(a["d"])("tr",{key:e.name},[Object(a["g"])("td",null,Object(a["p"])(e.name),1),e.cost?(Object(a["i"])(),Object(a["d"])("td",g)):(Object(a["i"])(),Object(a["d"])("td",b,Object(a["p"])(e.count)+" "+Object(a["p"])(e.units),1)),e.cost?(Object(a["i"])(),Object(a["d"])("td",j)):(Object(a["i"])(),Object(a["d"])("td",O,Object(a["p"])(e.costPU)+" руб.",1)),e.cost?(Object(a["i"])(),Object(a["d"])("td",p,Object(a["p"])(e.cost)+" руб.",1)):(Object(a["i"])(),Object(a["d"])("td",h,Object(a["p"])(Math.round(e.count*e.costPU*1e3)/1e3)+" руб. ",1)),A.isScreenshotting?Object(a["e"])("",!0):(Object(a["i"])(),Object(a["d"])("td",f,[Object(a["g"])("div",v,[Object(a["g"])("button",{onClick:function(t){return I.editItem(e.name)}},"🖉",8,["onClick"]),Object(a["g"])("button",{onClick:function(t){return I.deleteItem(e.name)},class:"delete"},"✖",8,["onClick"])])]))])})),128)),Object(a["g"])("tr",m,[w,k,y,Object(a["g"])("td",null,Object(a["p"])(I.totalCost())+" руб.",1),A.isScreenshotting?Object(a["e"])("",!0):(Object(a["i"])(),Object(a["d"])("td",C))]),A.isScreenshotting?Object(a["e"])("",!0):(Object(a["i"])(),Object(a["d"])("button",{key:0,onClick:t[7]||(t[7]=function(t){return e.showAddWindow=!0}),class:"addButton"},"＋"))]),P,Object(a["g"])(a["b"],{name:"fade"},{default:Object(a["t"])((function(){return[e.showAddWindow?(Object(a["i"])(),Object(a["d"])("div",D,[Object(a["g"])(N,{addCallback:I.addNewItem,isEditing:e.isEditing,editingData:e.editingData,editCallback:I.editItem,cancelCallback:I.cancelCallback},null,8,["addCallback","isEditing","editingData","editCallback","cancelCallback"])])):Object(a["e"])("",!0)]})),_:1}),Object(a["g"])(a["b"],{name:"fade"},{default:Object(a["t"])((function(){return[e.showAddPageWindow?(Object(a["i"])(),Object(a["d"])("div",E,[Object(a["g"])(W,{addCallback:I.addNewPage,isEditing:e.isEditingPage,editingData:e.pageEditingData,editCallback:I.editPage,cancelCallback:I.cancelCallback},null,8,["addCallback","isEditing","editingData","editCallback","cancelCallback"])])):Object(a["e"])("",!0)]})),_:1})])}n("b64b"),n("c740"),n("a434"),n("99af");var S=Object(a["w"])("data-v-9a166b3a");Object(a["k"])("data-v-9a166b3a");var I=Object(a["g"])("label",{for:"name"},"Наименование: ",-1),N={class:"autocomplete"},W={key:0},F=Object(a["g"])("label",{for:"customCost"},"Нестандартный предмет",-1),U={key:0},_=Object(a["g"])("label",{for:"area"},"Кол-во + Ед. Измерения: ",-1),x={key:1},q=Object(a["g"])("label",{for:"costPMSQ"},"Цена на ед. изм.: ",-1),B={key:2},L=Object(a["g"])("label",{for:"cost"},"Цена: ",-1),M={class:"controls"};Object(a["j"])();var J=S((function(e,t,n,c,i,l){var o=Object(a["o"])("window");return Object(a["i"])(),Object(a["d"])(o,{title:n.isEditing?"Изменить запись":"Добавить запись"},{default:S((function(){return[Object(a["g"])("form",null,[Object(a["g"])("ul",null,[Object(a["g"])("li",null,[I,Object(a["g"])("div",N,[Object(a["u"])(Object(a["g"])("input",{type:"text",name:"name",placeholder:"Например, Штукатурка",required:"",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.name=e}),onKeydown:t[2]||(t[2]=function(){return l.menuSelect&&l.menuSelect.apply(l,arguments)})},null,544),[[a["s"],c.name]]),e.acFiltered.length>0&&!e.acShown?(Object(a["i"])(),Object(a["d"])("span",W,[(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["m"])(e.acFiltered,(function(t){return Object(a["i"])(),Object(a["d"])("p",{class:e.acFiltered[e.selectedACID]===t?"selected":null,key:t,onClick:function(e){return l.selectAC(t)}},Object(a["p"])(t),11,["onClick"])})),128))])):Object(a["e"])("",!0)])]),Object(a["g"])("li",null,[Object(a["u"])(Object(a["g"])("input",{type:"checkbox",name:"customCost","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.customCost=e})},null,512),[[a["q"],c.customCost]]),F]),c.customCost?Object(a["e"])("",!0):(Object(a["i"])(),Object(a["d"])("li",U,[_,Object(a["g"])("input",{type:"text",name:"count",placeholder:"Например, 2.5 м2",value:n.isEditing?"".concat(n.editingData.count," ").concat(n.editingData.units):null,required:""},null,8,["value"])])),c.customCost?Object(a["e"])("",!0):(Object(a["i"])(),Object(a["d"])("li",x,[q,Object(a["g"])("input",{type:"text",name:"costPU",placeholder:"Например, 10",value:n.isEditing?n.editingData.costPU:null,required:""},null,8,["value"])])),c.customCost?(Object(a["i"])(),Object(a["d"])("li",B,[L,Object(a["g"])("input",{type:"text",name:"cost",placeholder:"Например, 75",value:n.isEditing?n.editingData.cost:null,required:""},null,8,["value"])])):Object(a["e"])("",!0),Object(a["g"])("li",M,[Object(a["g"])("input",{type:"button",value:n.isEditing?"Изменить":"Добавить",onClick:t[4]||(t[4]=Object(a["v"])((function(e){return c.parse()}),["prevent"]))},null,8,["value"]),Object(a["g"])("input",{type:"button",value:"Отмена",onClick:t[5]||(t[5]=Object(a["v"])((function(){return n.cancelCallback&&n.cancelCallback.apply(n,arguments)}),["prevent"]))})])])])]})),_:1},8,["title"])})),$=n("2909"),V=(n("ac1f"),n("1276"),n("a15b"),n("159b"),n("fb6a"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("4de4"),n("caad"),n("2532"),Object(a["w"])("data-v-eddd706e")),T=V((function(e,t,n,c,i,l){return Object(a["i"])(),Object(a["d"])("div",null,[Object(a["g"])("h2",null,Object(a["p"])(n.title),1),Object(a["n"])(e.$slots,"default",{},void 0,!0)])})),K={name:"Window",props:{title:String}};n("ca68");K.render=T,K.__scopeId="data-v-eddd706e";var Q=K,R=["Грунтовка стен","Штукатурка","Штукатурка + перетирка","Предполагаемый сбор конструкций из ГКЛ","Установка перфорированного уголка","Шпаклевка","Шпаклевка стен + зачистка","Откос из ГКЛ","Отделка откоса под окрас","Поклейка обоев","Плинтус","Плинтус пол","Укладка плитки","Укладка плитки (стены)","Укладка плитки (пола)","Затирка швов","Угол из плитки (N градусов)","Вырез в плитке","Грунт","Штукатурка без перетирки"],z={components:{Window:Q},name:"AddWindow",props:{addCallback:Function,isEditing:Boolean,editingData:Object,editCallback:Function,cancelCallback:Function},data:function(){return{acFiltered:[],acSelected:!1,selectedACID:-1,acShown:!0}},setup:function(e){var t=Object(a["l"])(""),n=Object(a["l"])(!1);function c(){var t=document.getElementsByName("name")[0].value;if(n.value)var a=parseFloat(document.getElementsByName("cost")[0].value);else var c=document.getElementsByName("count")[0].value,i=parseFloat(document.getElementsByName("costPU")[0].value);var l,o=!0,d=[];if(0===t.length&&(o=!1,d.push("Наименование")),n.value)isNaN(a)&&(o=!1,d.push("Цена"));else{var u=c.split(" ");isNaN(parseFloat(u[0]))&&(o=!1,d.push("Кол-во + Ед. Измерения")),isNaN(i)&&(o=!1,d.push("Цена на ед. изм."))}o?(l=n.value?{name:t,cost:a}:{name:t,count:parseFloat(u[0]),units:u[1],costPU:i},e.isEditing?e.editCallback(e.editingData.name,l):e.addCallback(l)):alert("Проверьте написание пол".concat(1===d.length?"я":"ей"," ").concat(d.join(", "),"."))}return null!==e.editingData&&(e.editingData.cost&&(n.value=!0),e.editingData.name&&(t=JSON.parse(JSON.stringify(e.editingData.name)))),{customCost:n,parse:c,name:t}},mounted:function(){document.querySelectorAll("form input").forEach((function(e){e.addEventListener("keydown",(function(e){"Enter"===e.key&&e.preventDefault()}))}))},watch:{name:function(){this.autoComplete()}},methods:{autoComplete:function(){var e=this;if(this.name.length>0){var t=this.name[0].toUpperCase()+this.name.toLowerCase().slice(1);this.acFiltered=Object($["a"])(new Set([].concat(Object($["a"])(R.filter((function(e){return!!e.includes(t)}))),Object($["a"])(R.filter((function(t){return!!t.includes(e.name.toLowerCase())})))))),this.acFiltered.length>0?this.selectedACID=0:this.selectedACID=-1}else this.acFiltered=[],this.selectedACID=-1},selectAC:function(e){this.name=e,this.acFiltered=[],this.selectedACID=-1,document.getElementsByName("name")[0].focus(),this.acShown=!0},menuSelect:function(e){switch(this.acShown=!1,e.key){case"ArrowDown":e.preventDefault(),this.selectedACID++,this.selectedACID===this.acFiltered.length&&(this.selectedACID=0);break;case"ArrowUp":e.preventDefault(),this.selectedACID--,this.selectedACID<0&&(this.selectedACID=this.acFiltered.length-1);break;case"Enter":-1!==this.selectedACID&&(e.preventDefault(),this.selectAC(this.acFiltered[this.selectedACID]));break}}}};n("c6b2");z.render=J,z.__scopeId="data-v-9a166b3a";var G=z,H=Object(a["w"])("data-v-6b27e012");Object(a["k"])("data-v-6b27e012");var X=Object(a["f"])(" Название: "),Y={class:"controls"};Object(a["j"])();var Z=H((function(e,t,n,c,i,l){var o=Object(a["o"])("window");return Object(a["i"])(),Object(a["d"])(o,{title:n.isEditing?"Изменить страницу":"Добавить страницу"},{default:H((function(){return[Object(a["g"])("form",null,[Object(a["g"])("ul",null,[Object(a["g"])("li",null,[Object(a["g"])("label",null,[X,Object(a["g"])("input",{type:"text",required:"",name:"name",value:n.isEditing?n.editingData.name:null},null,8,["value"])])]),Object(a["g"])("li",Y,[Object(a["g"])("input",{type:"button",value:n.isEditing?"Изменить":"Добавить",onClick:t[1]||(t[1]=Object(a["v"])((function(){return l.parse&&l.parse.apply(l,arguments)}),["prevent"]))},null,8,["value"]),Object(a["g"])("input",{type:"button",value:"Отмена",onClick:t[2]||(t[2]=Object(a["v"])((function(){return n.cancelCallback&&n.cancelCallback.apply(n,arguments)}),["prevent"]))})])])])]})),_:1},8,["title"])})),ee={name:"AddPageWindow",components:{Window:Q},props:{addCallback:Function,isEditing:Boolean,editingData:Object,editCallback:Function,cancelCallback:Function},methods:{parse:function(){var e=document.getElementsByName("name")[0].value,t=!0,n=[];0===e.length&&(t=!1,n.push("Наименование")),t?this.isEditing?this.editCallback(this.editingData.name,{name:e}):this.addCallback({name:e}):alert("Проверьте написание пол".concat(1===n.length?"я":"ей"," ").concat(n.join(", "),"."))}},mounted:function(){var e=this;document.querySelectorAll("form input").forEach((function(t){t.addEventListener("keydown",(function(t){"Enter"===t.key&&(t.preventDefault(),e.parse())}))}))}};n("48bb");ee.render=Z,ee.__scopeId="data-v-6b27e012";var te=ee,ne=n("c0e9"),ae=n.n(ne),ce=n("aeb1"),ie=n.n(ce),le={components:{AddWindow:G,AddPageWindow:te},name:"App",data:function(){return{showAddWindow:!1,isEditing:!1,editingData:null,showAddPageWindow:!1,isEditingPage:!1,pageEditingData:null}},setup:function(){var e,t=Object(a["l"])(!1);e=void 0!==localStorage.data&&1==localStorage.version?JSON.parse(localStorage.data):{"Стандартная страница":[]};var n=Object(a["l"])(Object.keys(e)[0]);function c(){localStorage.data=JSON.stringify(e),1!==localStorage.version&&(localStorage.version=1)}function i(){t.value=!0,Object(a["h"])().then((function(){ae()(document.querySelector("table")).then((function(e){ie()(e.toDataURL(),n.value),t.value=!1}))}))}return window.addEventListener("beforeunload",c),window.addEventListener("keydown",(function(e){"F2"===e.key&&(e.preventDefault(),i())})),{data:e,save:c,isScreenshotting:t,currentPage:n,screenshot:i}},methods:{addNewItem:function(e){this.data[this.currentPage].push(e),this.showAddWindow=!1,this.$forceUpdate(),this.save()},addNewPage:function(e){Object.defineProperty(this.data,e.name,{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.$forceUpdate(),this.save(),this.showAddPageWindow=!1},editItem:function(e,t){var n=this.data[this.currentPage].findIndex((function(t){return t.name===e}));t?(this.data[this.currentPage][n]=t,this.isEditing=!1,this.editingData=null,this.showAddWindow=!1,this.$forceUpdate()):(this.editingData=this.data[this.currentPage][n],this.isEditing=!0,this.showAddWindow=!0)},editPage:function(e,t){if(t){Object.defineProperty(this.data,t.name,{enumerable:!0,configurable:!0,writable:!0,value:this.data[this.currentPage]});var n=this.currentPage;this.currentPage=t.name,delete this.data[n],this.showAddPageWindow=!1,this.$forceUpdate()}else this.isEditingPage=!0,this.pageEditingData={name:this.currentPage},this.showAddPageWindow=!0},deleteItem:function(e){if(window.confirm("Вы действительно хотите удалить эту запись?")){var t=this.data[this.currentPage].findIndex((function(t){return t.name===e}));this.data[this.currentPage].splice(t,1),this.$forceUpdate()}},deletePage:function(){window.confirm("Вы действительно хотите удалить текущую страницу ("+this.currentPage+")?")&&(delete this.data[this.currentPage],this.currentPage=Object.keys(this.data)[0])},updatePage:function(){},cancelCallback:function(){this.isEditing=!1,this.editingData=null,this.showAddWindow=!1,this.isEditingPage=!1,this.pageEditingData=null,this.showAddPageWindow=!1},totalCost:function(){var e=0;for(var t in this.data[this.currentPage]){var n=this.data[this.currentPage][t];n.cost?e+=n.cost:e+=n.count*n.costPU}return Math.round(1e3*e)/1e3},pageNames:function(){return Object.keys(this.data)}},mounted:function(){var e=this;document.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.showAddWindow=!1,e.showAddPageWindow=!1)}))}};n("489e");le.render=A;var oe=le;document.title="Смета",Object(a["c"])(oe).mount("#app")},bc0b:function(e,t,n){},c6b2:function(e,t,n){"use strict";n("51d8")},ca68:function(e,t,n){"use strict";n("50d1")}});
//# sourceMappingURL=app.9e73b94a.js.map