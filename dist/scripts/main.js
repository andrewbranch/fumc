Ember.TEMPLATES["components/basic-modal"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push('<i class="close deny icon" '),e.buffer.push(h(c.action.call(b,"close","view",{hash:{},hashTypes:{},hashContexts:{},contexts:[b,b],types:["STRING","ID"],data:e}))),e.buffer.push('></i> <div class="header">'),f=c._triageMustache.call(b,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["ID"],data:e}),(f||0===f)&&e.buffer.push(f),e.buffer.push('</div> <div class="content"> '),f=c._triageMustache.call(b,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["ID"],data:e}),(f||0===f)&&e.buffer.push(f),e.buffer.push(" </div> "),g}),Ember.TEMPLATES["components/file-upload"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push("<div "),e.buffer.push(h(c["bind-attr"].call(b,{hash:{"class":"currentFile::hidden"},hashTypes:{"class":"STRING"},hashContexts:{"class":b},contexts:[],types:[],data:e}))),e.buffer.push('> <div class="ui black horizontal label"> <i class="file icon"></i> '),f=c._triageMustache.call(b,"currentFile",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["ID"],data:e}),(f||0===f)&&e.buffer.push(f),e.buffer.push(' </div> <a href="#" '),e.buffer.push(h(c.action.call(b,"replace",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["STRING"],data:e}))),e.buffer.push(">Replace</a> </div> <div "),e.buffer.push(h(c["bind-attr"].call(b,{hash:{"class":"currentFile:hidden"},hashTypes:{"class":"STRING"},hashContexts:{"class":b},contexts:[],types:[],data:e}))),e.buffer.push('> <input type="file" class="hidden"> <button class="ui small black button" '),e.buffer.push(h(c.action.call(b,"triggerClick",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["STRING"],data:e}))),e.buffer.push(">Upload file</button> </div> "),g}),Ember.TEMPLATES.about=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h1>About</h1>")}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('<i class="home icon"></i> Home')}function g(a,b){b.buffer.push('<i class="file icon"></i> Bulletins')}function h(a,b){var d,e="";return b.buffer.push(' <div class="right menu"> <div class="item"> <i class="user icon"></i> Hello, '),d=c._triageMustache.call(a,"name",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push(' </div> <a class="item" href="#" '),b.buffer.push(o(c.action.call(a,"logout",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["STRING"],data:b}))),b.buffer.push(">Log out</a> </div> "),e}function i(a,b){var d,e,f,g="";return b.buffer.push(' <div class="right menu"> '),e=c["link-to"]||a&&a["link-to"],f={hash:{"class":"item"},hashTypes:{"class":"STRING"},hashContexts:{"class":a},inverse:p.noop,fn:p.program(8,j,b),contexts:[a],types:["STRING"],data:b},d=e?e.call(a,"login",f):q.call(a,"link-to","login",f),(d||0===d)&&b.buffer.push(d),b.buffer.push(" </div> "),g}function j(a,b){b.buffer.push("Log in")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var k,l,m,n="",o=this.escapeExpression,p=this,q=c.helperMissing;return e.buffer.push(' <div class="ui one column page grid"> <div class="column"> <div class="ui teal inverted menu"> '),l=c["link-to"]||b&&b["link-to"],m={hash:{"class":"item"},hashTypes:{"class":"STRING"},hashContexts:{"class":b},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],data:e},k=l?l.call(b,"index",m):q.call(b,"link-to","index",m),(k||0===k)&&e.buffer.push(k),e.buffer.push(" "),l=c["link-to"]||b&&b["link-to"],m={hash:{"class":"item"},hashTypes:{"class":"STRING"},hashContexts:{"class":b},inverse:p.noop,fn:p.program(3,g,e),contexts:[b],types:["STRING"],data:e},k=l?l.call(b,"bulletins",m):q.call(b,"link-to","bulletins",m),(k||0===k)&&e.buffer.push(k),e.buffer.push(" "),k=c["if"].call(b,"loggedIn",{hash:{},hashTypes:{},hashContexts:{},inverse:p.program(7,i,e),fn:p.program(5,h,e),contexts:[b],types:["ID"],data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push(' </div> </div> </div> <div class="ui one column page grid"> <div class="column"> '),k=c._triageMustache.call(b,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["ID"],data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push(" </div> </div> "),n}),Ember.TEMPLATES.authenticate=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="ui active inline loader"></div> Authenticating ')}),Ember.TEMPLATES.bulletin=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push(' <i class="unhide icon"></i> ')}function g(a,b){var d="";return b.buffer.push(' <button class="ui small black button" '),b.buffer.push(n(c.action.call(a,"viewFile",{hash:{bubbles:!1},hashTypes:{bubbles:"BOOLEAN"},hashContexts:{bubbles:a},contexts:[a],types:["STRING"],data:b}))),b.buffer.push(">View</button> "),d}function h(a,b){var d,e="";return b.buffer.push(' <div class="ui red pointing above label">'),d=c._triageMustache.call(a,"errors.service",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("</div> "),e}function i(a,b){var d,e="";return b.buffer.push(' <div class="ui red pointing above label">'),d=c._triageMustache.call(a,"errors.date",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("</div> "),e}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var j,k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push(' <div class="ui grid"> <div class="row" '),e.buffer.push(n(c.action.call(b,"toggleEditing",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["STRING"],data:e}))),e.buffer.push('> <div class="one wide column"> '),j=c["if"].call(b,"bulletin.visible",{hash:{},hashTypes:{},hashContexts:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push(' </div> <div class="eleven wide column"> <div class="header">'),j=c._triageMustache.call(b,"bulletin.formattedDate",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["ID"],data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("</div> "),j=c._triageMustache.call(b,"bulletin.service",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["ID"],data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push(' </div> <div class="four wide right column"> '),j=c["if"].call(b,"bulletin.file",{hash:{},hashTypes:{},hashContexts:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["ID"],data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push(' <button class="ui small red button" '),e.buffer.push(n(c.action.call(b,"remove",{hash:{bubbles:!1},hashTypes:{bubbles:"BOOLEAN"},hashContexts:{bubbles:b},contexts:[b],types:["STRING"],data:e}))),e.buffer.push(">Delete</button> </div> </div> <div "),e.buffer.push(n(c["bind-attr"].call(b,{hash:{"class":":editing :row :slide bulletin.editing::hidden"},hashTypes:{"class":"STRING"},hashContexts:{"class":b},contexts:[],types:[],data:e}))),e.buffer.push('> <div class="sixteen wide column"> <form class="ui fluid form"> <div class="field"> '),e.buffer.push(n((k=c["file-upload"]||b&&b["file-upload"],l={hash:{oldFile:"bulletin.file",change:"fileSelected"},hashTypes:{oldFile:"ID",change:"STRING"},hashContexts:{oldFile:b,change:b},contexts:[],types:[],data:e},k?k.call(b,l):p.call(b,"file-upload",l)))),e.buffer.push(' </div> <div class="two fields"> <div class="field"> <label>Service</label> <div class="ui left labeled input"> '),e.buffer.push(n((k=c.input||b&&b.input,l={hash:{value:"bulletin.service",placeholder:"e.g. ICON"},hashTypes:{value:"ID",placeholder:"STRING"},hashContexts:{value:b,placeholder:b},contexts:[],types:[],data:e},k?k.call(b,l):p.call(b,"input",l)))),e.buffer.push(" "),j=c["if"].call(b,"errors.service",{hash:{},hashTypes:{},hashContexts:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["ID"],data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push(' </div> </div> <div class="date field"> <label>Service Date</label> <div class="ui left labeled input"> '),e.buffer.push(n(c.view.call(b,"Fumc.DateField",{hash:{date:"bulletin.date"},hashTypes:{date:"ID"},hashContexts:{date:b},contexts:[b],types:["ID"],data:e}))),e.buffer.push(" "),j=c["if"].call(b,"errors.date",{hash:{},hashTypes:{},hashContexts:{},inverse:o.noop,fn:o.program(7,i,e),contexts:[b],types:["ID"],data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push(' </div> </div> </div> <div class="field"> <div class="ui checkbox"> '),e.buffer.push(n((k=c.input||b&&b.input,l={hash:{type:"checkbox",checked:"bulletin.visible"},hashTypes:{type:"STRING",checked:"ID"},hashContexts:{type:b,checked:b},contexts:[],types:[],data:e},k?k.call(b,l):p.call(b,"input",l)))),e.buffer.push(' <label>Publish to app/website</label> </div> </div> <div class="ui buttons field"> <button class="ui button" '),e.buffer.push(n(c.action.call(b,"cancel",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["STRING"],data:e}))),e.buffer.push('>Cancel</button> <div class="or"></div> <button '),e.buffer.push(n(c["bind-attr"].call(b,{hash:{"class":":ui :blue :button bulletin.fileUpload.isUploading:disabled"},hashTypes:{"class":"STRING"},hashContexts:{"class":b},contexts:[],types:[],data:e}))),e.buffer.push(" "),e.buffer.push(n(c.action.call(b,"save",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["STRING"],data:e}))),e.buffer.push(">Save</button> </div> <div "),e.buffer.push(n(c["bind-attr"].call(b,{hash:{"class":":ui :blue :progress bulletin.fileUpload.showProgressBar::hidden bulletin.fileUpload.didUpload:successful"},hashTypes:{"class":"STRING"},hashContexts:{"class":b},contexts:[],types:[],data:e}))),e.buffer.push('> <div class="bar" '),e.buffer.push(n(c["bind-attr"].call(b,{hash:{style:"bulletin.fileUpload.progressStyle"},hashTypes:{style:"STRING"},hashContexts:{style:b},contexts:[],types:[],data:e}))),e.buffer.push("></div> </div> </form> </div> </div> </div> "),m}),Ember.TEMPLATES.bulletins=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d="";return b.buffer.push(" "),b.buffer.push(l(c.view.call(a,"bulletin",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["STRING"],data:b}))),b.buffer.push(" "),d}function g(){var a="";return a}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<h1 class="ui header">Bulletins</h1> <button class="ui blue button" '),e.buffer.push(l(c.action.call(b,"newBulletin",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["STRING"],data:e}))),e.buffer.push('>New Bulletin</button> <div class="ui selection link divided list"> '),h=c.each.call(b,"bulletin","in","controller",{hash:{},hashTypes:{},hashContexts:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push(" </div> "),i=c["basic-modal"]||b&&b["basic-modal"],j={hash:{"class":"file-viewer",initialize:"registerModal",title:"showBulletinTitle"},hashTypes:{"class":"STRING",initialize:"STRING",title:"ID"},hashContexts:{"class":b,initialize:b,title:b},inverse:m.noop,fn:m.program(3,g,e),contexts:[],types:[],data:e},h=i?i.call(b,j):n.call(b,"basic-modal",j),(h||0===h)&&e.buffer.push(h),e.buffer.push(" "),k}),Ember.TEMPLATES.contact=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h1>Contact</h1>")}),Ember.TEMPLATES.error404=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h1>Error 404: <small>Page not found</small></h1>")}),Ember.TEMPLATES.failure=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="";return f}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<h1 clas="ui header">Index</h1> ')}),Ember.TEMPLATES.login=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="",g=this.escapeExpression;return e.buffer.push('<a href="#" id="LoginWithAmazon" '),e.buffer.push(g(c.action.call(b,"login",{hash:{},hashTypes:{},hashContexts:{},contexts:[b],types:["STRING"],data:e}))),e.buffer.push('> <img alt="Login with Amazon" src="http://g-ecx.images-amazon.com/images/G/01/lwa/btnLWA_drkgry_152x64._CB372226054_.png"> </a> '),f}),Ember.TEMPLATES.showPDF=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d="";return b.buffer.push(" <object "),b.buffer.push(k(c["bind-attr"].call(a,{hash:{data:"showBulletinUrl"},hashTypes:{data:"STRING"},hashContexts:{data:a},contexts:[],types:[],data:b}))),b.buffer.push(">Your browser doesn&rsquo;t support embedded PDFs. Time to upgrade.</object> "),d}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this,m=c.helperMissing;return h=c["basic-modal"]||b&&b["basic-modal"],i={hash:{title:"showBulletinTitle"},hashTypes:{title:"ID"},hashContexts:{title:b},inverse:l.noop,fn:l.program(1,f,e),contexts:[],types:[],data:e},g=h?h.call(b,i):m.call(b,"basic-modal",i),(g||0===g)&&e.buffer.push(g),e.buffer.push(" "),j}),function(){window.Fumc=Ember.Application.create(),Fumc.ApplicationAdapter=DS.FixtureAdapter.extend()}(),function(){Ember.Application.initializer({name:"setup",initialize:function(){Ember.FEATURES["ember-routing-drop-deprecated-action-style"]=!0}})}(),function(){Fumc.BasicModalComponent=Ember.Component.extend({classNames:["ui","basic","modal"],didInsertElement:function(){this.sendAction("initialize",this),this.$().addClass(this.get("class"))},show:function(){this.$().modal("show")}})}(),function(){Fumc.FileUploadComponent=Ember.Component.extend({oldFile:null,currentFile:null,input:null,didInsertElement:function(){var a=this,b=a.get("element").querySelector("input[type=file]");a.set("currentFile",this.get("oldFile")),b.addEventListener("change",function(){var b=this.files[0];console.log("file change event",b.name),a.set("currentFile",b.name),a.sendAction("change",b)},!1),this.set("input",b)},actions:{replace:function(){this.set("currentFile",null),this.sendAction("change",null)},triggerClick:function(){this.get("input").click()}}})}(),function(){Fumc.Bulletin=DS.Model.extend({date:DS.attr("date"),service:DS.attr("string"),visible:DS.attr("boolean"),file:DS.attr("string")})}(),function(){Fumc.FileUploadModel=Ember.Object.extend({name:"",size:"0 KB",rawSize:0,fileToUpload:null,uploadJqXHR:null,uploadPromise:null,uploadProgress:null,isUploading:!1,didUpload:!1,init:function(){this._super(),Ember.assert("File to upload required on init.",!!this.get("fileToUpload")),this.set("uploadPromise",new Ember.RSVP.defer)},readFile:function(){var a=this.get("fileToUpload");this.set("name",a.name),this.set("rawSize",a.size)}.on("init"),uploadFile:function(){if(this.get("isUploading")||this.get("didUpload")||this.get("didError"))return this.get("uploadPromise");var a=this.get("fileToUpload"),b=this;return this.set("isUploading",!0),Fumc.s3.putObject({Key:this.get("name"),ContentType:a.type,Body:a},function(c){c&&(b.set("isUploading",!1),b.set("didError",!0),b.get("uploadPromise").reject(c)),b.set("isUploading",!1),b.set("didUpload",!0),b.get("uploadPromise").resolve(a.name)}).on("httpUploadProgress",function(a){b.set("progress",a.loaded/a.total*100)}),this.get("uploadPromise").promise},showProgressBar:Ember.computed.or("isUploading","didUpload"),progressStyle:function(){return"width: %@%".fmt(this.get("progress"))}.property("progress")})}(),function(){Fumc.AuthenticatedRoute=Ember.Route.extend({beforeModel:function(a){this.controllerFor("application").get("token")||this.redirectToLogin(a)},redirectToLogin:function(a){var b=this.controllerFor("login");b.set("attemptedTransition",a),this.transitionTo("login")},actions:{error:function(a,b){a&&401===a.status&&this.redirectToLogin(b)}}})}(),function(){Fumc.BulletinsRoute=Fumc.AuthenticatedRoute.extend({model:function(){return this.store.find("bulletin")}})}(),function(){Fumc.ApplicationController=Ember.Controller.extend({token:"null"===Cookies.get("token")?null:Cookies.get("token"),name:"null"===Cookies.get("name")?null:Cookies.get("name"),email:"null"===Cookies.get("email")?null:Cookies.get("email"),loggedIn:function(){return this.get("token")&&this.get("name")&&this.get("email")}.property("token","name","email"),init:function(){this.setupAWS()},tokenChanged:function(){Cookies.set("token",this.get("token"),{expires:3600}),Cookies.set("name",this.get("name"),{expires:3600}),Cookies.set("email",this.get("email"),{expires:3600}),this.setupAWS()}.observes("token"),setupAWS:function(){AWS.config.credentials=new AWS.WebIdentityCredentials({RoleArn:"arn:aws:iam::885099591831:role/content-managers",ProviderId:"www.amazon.com",WebIdentityToken:this.get("token")}),Fumc.s3=new AWS.S3({params:{Bucket:"fumcappfiles"}})},actions:{logout:function(){amazon.Login.logout(),this.set("token",null),this.set("name",null),this.set("email",null),Cookies.expire("token"),Cookies.expire("name"),Cookies.expire("email"),this.transitionToRoute("index")}}})}(),function(){Fumc.BulletinController=Ember.ObjectController.extend({needs:["application","bulletins"],editing:!1,fileUpload:null,initialDate:null,s3:Ember.computed.alias("controllers.application.s3"),modal:Ember.computed.alias("controllers.bulletins.modal"),showBulletinUrl:Ember.computed.alias("controllers.bulletins.showBulletinUrl"),init:function(){this.set("initialDate",this.get("date")),~this.get("currentState.stateName").indexOf("uncommitted")&&this.set("editing",!0)},formattedDate:function(){return moment(this.get("date")).format("MMMM D, YYYY")}.property("date"),actions:{toggleEditing:function(){this.toggleProperty("editing")},save:function(){var a=this.get("fileUpload"),b=this.get("model"),c=this.get("file"),d=function(){setTimeout(function(){this.set("editing",!1)}.bind(this),600)}.bind(this);return a&&a.isUploading?!1:(this.set("date",new Date(this.get("date"))),void(a?(a.name!==c&&Fumc.s3.deleteObject({Key:c}).send(),a.uploadFile().then(function(a){this.set("file",a),b.save().then(d)}.bind(this))):b.save().then(d)))},cancel:function(){var a=this.get("model");~this.get("currentState.stateName").indexOf("created.uncommitted")?a.destroyRecord():(a.rollback(),this.set("editing",!1))},remove:function(){var a=this.get("file");a&&Fumc.s3.deleteObject({Key:a}).send(),this.get("model").destroyRecord()},fileSelected:function(a){if(console.log("fileSelected",a),!a)return void this.set("fileUpload",null);var b=new Date(a.name.replace(/[-–—_]/g,"/").replace(/[^0-9\/]/g,"").replace(/^\//,"").replace(/\/$/,""));moment(this.get("initialDate")).isSame(this.get("date"),"day")&&!isNaN(b.getDate())&&b.getFullYear()-(new Date).getFullYear()<=1&&this.set("date",b),this.get("service")||(~a.name.toLowerCase().indexOf("icon")?this.set("service","ICON"):0===b.getDay()&&this.set("service","Traditional services")),this.set("fileUpload",Fumc.FileUploadModel.create({fileToUpload:a}))},viewFile:function(){var a=this.get("modal");a.show(),Fumc.s3.getSignedUrl("getObject",{Key:this.get("file")},function(b,c){a.$(".content").html('<object class="pdf" type="application/pdf" data="'+c+'"></object>')}.bind(this))}}})}(),function(){Fumc.BulletinsController=Ember.ArrayController.extend({itemController:"bulletin",sortProperties:["date","service"],sortAscending:!1,modal:null,showBulletingUrl:null,pdfChanged:function(){this.get("modal").$("object.pdf").trigger("change")}.observes("showBulletinUrl"),actions:{newBulletin:function(){this.store.createRecord("bulletin",{date:moment().startOf("week").add(1,"week")})},registerModal:function(a){this.set("modal",a)}}})}(),function(){Fumc.LoginController=Ember.Controller.extend({needs:["application"],queryParams:["access_token"],access_token:null,attemptedTransition:null,token:Ember.computed.alias("controllers.application.token"),name:Ember.computed.alias("controllers.application.name"),email:Ember.computed.alias("controllers.application.email"),actions:{login:function(){options={scope:"profile"},amazon.Login.authorize(options,"/#/authenticate")}}}),Fumc.AuthenticateRoute=Ember.Route.extend({beforeModel:function(a){var b=a.queryParams.access_token;b&&Ember.$.post("/authenticate",{access_token:b}).then(function(a){if(a.success){var b=this.controllerFor("login"),c=b.get("attemptedTransition");b.setProperties({name:a.name,email:a.email,token:a.token}),c?(c.retry(),b.set("attemptedTransition",null)):this.transitionTo("index")}}.bind(this))}})}(),function(){Fumc.ApplicationView=Ember.View.extend({})}(),function(){Fumc.BulletinView=Ember.View.extend({templateName:"bulletin",classNames:["item","bulletin"],classBindings:["editing"],didInsertElement:function(){this.$(".ui.checkbox").checkbox()}})}(),function(){Fumc.DateField=Ember.TextField.extend({picker:null,updateValue:function(){var a=moment(this.get("date"));a.isValid()&&!this.$().is(":focus")&&(this.set("value",a.format("L")),this.get("picker").setDate(a.format("L")))}.observes("date"),updateDate:function(){var a=moment(new Date(this.get("value")));a.isValid()?this.set("date",a.toDate()):this.set("date",null)}.observes("value"),didInsertElement:function(){var a=new Pikaday({field:this.$()[0],format:"MM/DD/YYYY"});this.set("picker",a),this.updateValue()},willDestroyElement:function(){var a=this.get("picker");a&&a.destroy(),this.set("picker",null)}})}(),function(){Fumc.ApplicationAdapter=DS.RESTAdapter.extend({namespace:"api",headers:function(){return{token:Cookies.get("token")}}.property().volatile(),ajaxError:function(a){var b=this._super(a);if(a&&422===a.status){var c=Ember.$.parseJSON(a.responseText).errors;return new DS.InvalidError(c)}return b}}),Fumc.ApplicationSerializer=DS.RESTSerializer.extend({extractSingle:function(a,b,c,d,e){var f={};return f[b.typeKey]=c,this._super(a,b,f,d,e)},extractArray:function(a,b,c,d,e){var f={};return f[Ember.String.pluralize(b.typeKey)]=c,this._super(a,b,f,d,e)},serializeIntoHash:function(a,b,c,d){var e=this.serialize(c,d);for(var f in e)Ember.isArray(e[f])&&!e[f].length||(a[f]=e[f])},keyForRelationship:function(a,b){return a=Ember.String.decamelize(a),"belongsTo"===b?a+"_id":a},normalizeRelationships:function(a,b){var c,d,e=[];this.keyForRelationship&&a.eachRelationship(function(a,f){c=this.keyForRelationship(a,f.kind),d=b[c]||[],d.forEach(function(a){e.push(Ember.get(a,"id"))}),b[a]=e,delete b[c]},this)}})}(),function(){Fumc.Router.map(function(){this.route("login"),this.route("authenticate"),this.resource("bulletins"),this.route("about"),this.route("contact"),this.route("error404",{path:"*:"})})}();