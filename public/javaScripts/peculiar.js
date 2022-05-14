       
   
   
    var Peculiar={};
    Peculiar.int=class Loader{
     constructor(color,size,Bg,flex,bWidth){
        this.color = color || "#565656";
        this.bg = Bg || "rgba(30,30,40,.6)";
        this.size = size || 100;
        this.flex=flex||"column";
        this.bWidth=bWidth||"20px";
    }
    start(){
     this.loading=document.createElement("div");
        
   this.styles=document.createElement("style");
    this.styles.innerHTML=`@keyframes rotate{
        100%{transform:rotate(360deg);}
    }
     
   `
          this.loading.innerHTML="<div id='loader'></div><div id='lotext'></div>";
        setTimeout(()=>{
            document.body.appendChild(this.loading);
            document.body.appendChild(this.styles);
            this.addStyles();
        },2);
    }
    addText(text,size,color){
        setTimeout(()=>{
        this.lotext = document.getElementById('lotext');
        
        this.lotext.style.fontSize = size||"1em";
        this.lotext.style.color = color;
        this.text = text||"Loading";
        this.addStyles()
        },2)
    }
    animateText(){
        setTimeout(()=>{
     var i=0;
     var n=300;
let span=document.createElement("span");
span.style.borderRight="1px solid black";
span.animate([
    { borderRightColor: 'black' },
    {borderRightColor:'transparent'},
    { borderRightColor : 'black'}
  ], {
    duration: n*4,
    iterations:this.text.length
  }
);
setInterval(()=>{
if(i<this.text.length){
span.append(this.text[i]);
    this.lotext.append(span);
    
    }
    i++},n);
    setTimeout(()=>{
        span.style.borderRightColor="transparent"
    },this.text.length)
},2);
    }
    
    displayOnlyText(){
        setTimeout(()=>{this.loader = document.getElementById('loader')
        this.loader.style.display = "none"
    },2)
    }
   addStyles(){
                this.loading.style.width="100vw";
        this.loading.style.height="100vh";    
        this.loading.style.backgroundColor=this.bg; 
        this.loading.style.justifyContent="center";
        this.loading.style.alignItems= "center";
        this.loading.style.position="fixed";
        this.loading.style.display="flex";
        this.loading.style.flexDirection=this.flex;
        this.loading.style.top="0";
        this.loading.style.left="0";
        this.loader = document.getElementById('loader');
        this.loader=document.getElementById("loader");
        this.loader.style.width=this.size+"px";
        this.loader.style.height=this.size+"px";
        this.loader.style.borderRadius="50%";
        this.loader.style.border=`${this.bWidth} solid transparent`;
        this.loader.style.borderLeftColor =this.color;
        this.loader.style.borderRightColor=this.color;
        
        setTimeout(()=>{
     this.loader.animate(
  [
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)'}
  ], {
    duration: 1000,
    iterations:Infinity
  }
);
},2);


        this.lotext = document.getElementById('lotext');
        this.lotext.style.fontFamily = "courier";
        this.lotext.style.fontWeight = "bolder";
    }
    
    
    remove(time){
       setTimeout(()=>{
         this.loading.style.display = "none";
       },time)
    }
    removeWhenWindowLoaded(){
       window.addEventListener("load",()=>{
setTimeout(()=>{
    this.loading.style.display="none";},3);
});
   }
   removeOnTouch(){
       window.addEventListener("dblclick",()=>{
             this.loading.style.display="none";
        });
   }
   
}
function pick(n){
    return document.querySelectorAll(n);
}
function elem(n){
return document.querySelector(n);
}
function random(min,max){
                return Math.floor(Math.random()*(max-min)+1)+min;
            }
            function randomRGBA(){
             return `rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,1)}) `
            }
            function randomBlue(){
                             return `rgba(${random(1,100)},${random(100,155)},${random(100,255)},${random(0,1)}) `
            }
            function randomRed(){
                             return `rgba(${random(100,225)},${random(1,155)},${random(0,100)},${random(0,1)}) `
            }
            function randomGreen(){
                             return `rgba(${random(0,100)},${random(100,255)},${random(0,100)},${random(0.3,1)}) `
            }

Peculiar.copy=function(text){
     const writebtn=document.createElement("button");
     writebtn.textContent="Copy";
     setTimeout(()=>{
     document.body.append(writebtn);},300);  
       const iEL=document.createElement("textarea");
       iEL.textContent=text;
       document.body.append(iEL) ;
    
       if(navigator.clipboard){
       writebtn.addEventListener("click",()=>{alert("wa");
            const inputValue=iEL.value.trim();
            
            if(inputValue){
                 navigator.clipboard.writeText(inputValue)
                 .then(()=>{
                      iEL.value="";
                      if(writebtn.innerText!=="copied"){
                           const original="Copied";
                           setTimeout(()=>{
                                writebtn.innerText=original;
                           },120);
                      }
                 })
                 .catch(err=>{
                      alert("wa",err);
                 });
            }
            writebtn.innerText="copy";
       });}
       else{
            writebtn.addEventListener("click",()=>{
    const copyText = iEL;
    
  copyText.select();
  
    document.execCommand('copy');
    setTimeout(()=>{
        writebtn.style.display="none";
        iEL.style.display="none";
    },1);
});
}};            
           
           Peculiar.sel=function(n){
       
          this.n=document.querySelector(n);
         
          
          
             
        this.display=()=>{
           var dsplay; if(this.n.getAttribute("display")==null||this.n.getAttribute("display")==""){
                dsplay="block";
            }
            else{
                dsplay=this.n.getAttribute("display");
            }
           return dsplay 
            }
        this.addClass=(clas)=>{
            this.n.classList.add(clas);
        }
        this.removeClass=(clas)=>{
            this.n.classList.remove(clas)
        }
        this.hide=()=>{
      
            this.n.style.display="none";
        }
        this.fadeIn=(d="block")=>{
            this.show(d);
            
            this.n.animate([
    { opacity: '0' },
    { opacity: '1'}
  ], {
    duration: 1000,
    iterations:1
  }
);
setTimeout(()=>{
this.show(d);
},987);
        }
        this.fadeOut=()=>{
            this.n.animate([
    { opacity: '1' },
    { opacity: '0'}
  ], {
    duration: 1000,
    iterations:1
  }
);
setTimeout(()=>{
this.hide();
},987);
        }
        
        this.show=(d="block")=>{
           this.n.style.display=d;
           
        }
        this.toggle=()=>{
            if(this.n.style.display==""||this.n.style.display=="none"){
                this.show();
            }
            else{
                this.hide();
            }
        }
    this.append=function(html){
    this.n.innerHTML+=html;
}
this.prepend=function(html){
    this.n.innerHTML=html+this.n.innerHTML;
}
this.html=(htm)=>{
    if(htm===undefined){
        return this.n.innerHTML;
    }
    else{
        this.n.innerHTML=htm;
        return this;
    }
}
this.attr=(at,va)=>{
    if(va===undefined){
        return this.n.getAttribute(at)
    }
    else{
        return this.n.setAttribute(at,va);
    }
}
this.val=function(newVal){
    if(this.n===null||this.n===undefined){
        return false;
    }
    else if(newVal===null||newVal===undefined){
        return this.n.value;
    }
    else{
        this.n.value=newVal;
    }
}
this.text=function(text){
    return(text===undefined?this.n.textContent=this.n.textContent:text);
}
//var display=this.n.style.getPropertyValue('display');
this.hide=()=>{
    this.n.style.display="none";
}
this.show=(display)=>{
   this.n.style.display=display;
}
this.toggle=()=>{
    let display=this.n.style.getPropertyValue("display");
if(display===undefined||display===""){
    return this.n.style.display="none";
    
    }
    else{
        this.n.style.display=display;
    }
}
this.next=()=>{
    this.n=this.n.nextElementSibling;
    return this;
}
this.prev=()=>{
     this.n=this.n.previousElementSibling;
     return this;
}
this.children=()=>{
    this.n=this.n.children;
    return this;
}
this.nchild=(i)=>{
    for(j=0;j<i;j++){
         this.n=this.n.children[i];
    }
    return this;
}
this.child=()=>{
    this.n=this.n.firstChild;
    return this;
}
this.empty=()=>{
   let p=this.n.children;
   for(i=0;i<p.length;i++){
       p[i].style.display="none";
   }
}
this.last=()=>{
    this.n=this.n.lastChild;
    return this;
}
this.nextSib=()=>{
    this.n=this.n.nextElementSibling;
    return this;
}
this.type=(msg,n=200)=>{
var i=0;
let span=document.createElement("span");
span.style.borderRight="1px solid black";
span.animate([
    { borderRightColor: 'black' },
    {borderRightColor:'transparent'},
    { borderRightColor : 'black'}
  ], {
    duration: n*4,
    iterations:msg.length
  }
);
setInterval(()=>{
if(i<msg.length){
span.append(msg[i]);
    this.n.append(span);
    
    }
    i++},n);
    setTimeout(()=>{
        span.style.borderRightColor="transparent"
    },(n*msg.length))
}
/*    this.nextSibUntil=(n)=>{
    let nextSibling=this.n.nextElementSibling;
    nextSib=[];
    while(nextSib.length<=n){
        nextSib.push(nextSibling);
        nex WW2tSibling=nextSibling.nextElementSibling;
    }
}
this.prevSibUntil=(n)=>{
     let previousSibling=this.n.previousElementSibling;
    prevSib=[];
    while(prevSib.length<=n){
        prevSib.push(previousSibling);
        previousSibling=previousSibling.previousElementSibling;
    }
}*/
this.prevSib=()=>{
 this.n=this.n.previousElementSibling;
 return this;
}
this.on=(evt,func)=>{
    this.n.addEventListener(evt,func);
    return this
}
this.css=(value)=>{
    this.n.style=value;
}

    }
    
var p=function(elem){
    let elm=new Peculiar.sel(elem);
    return elm
}
var $=function(elem){
    let elm=new Peculiar.sel(elem);
    return elm;
}
Peculiar.wait=function(n=1000){
    let h=new Peculiar.int("white",10,"black","row","4px");
    h.start();
    h.addText();
    h.animateText();
    h.removeOnTouch();
    h.remove(n)
}
Peculiar.load=function(n=5000){
    let h=new Peculiar.int();
    h.start();
    h.addText();
    h.animateText();
    h.removeOnTouch();
    h.remove(n)
}
//extensions
Date.prototype.month=function(e){
    var months_array=[];
    if(e==f){
        months_array=["January","February","March","April","May","June","July","August","September","October","November","December"];
    }
    else{
        months_array=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    }
    var date=new Date();
    return months_array[date.getMonth];
}
Array.prototype.getMax=function(){
    this.sort();
   return this[this.length-1]
}

Peculiar.create=function(container,clas,id,html,parent,children){
    elem=document.createElement(container);
    if(clas===null||clas===undefined||clas===""){
        
    }
    else{
        elem.classList.add(clas);
    }
    if(id===null||id===undefined||id===""){
        
    }
    else{
        elem.setAttribute("id",id);
    }
    if(html===null||html===undefined||html===""){
        
    }
    else{
        elem.innerHTML=html;
    }
    if(parent===null||parent===undefined||parent===""){
        document.body.appendChild(elem);
    }
    else{
        parent.appendChild(elem);
    }
    if(children===null||children===undefined||children===""){
        
    }
    else{
        Peculiar.create(children[0],children[1],children[2],children[3],elem,children[4])
    }
    
    
    
    
    
}

Peculiar.fullScreen=()=>{

  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }


}

//framework
//checking for animation 
/**/
setTimeout(()=>{
let leftAnim=pick("[p-animLeft]");
leftAnim.forEach(left=>{
    left.animate([
    { transform: 'translateX(-300px)' },
    { transform: 'translateX(0)'}
  ], {
    duration: 1000,
    iterations:1
  }
);
});

let rightAnim=pick("[p-animRight]");
rightAnim.forEach(right=>{
    right.animate([
    { transform: 'translateX(300px)' },
    { transform: 'translateX(0)'}
  ], {
    duration: 1000,
    iterations:1
  }
);
})

let topAnim=pick("[p-animTop]");

topAnim.forEach(top=>{
    top.animate([
    { transform: 'translateY(-300px)' },
    { transform: 'translateY(0)'}
  ], {
    duration: 1000,
    iterations:1
  }
);
})

let downAnim=pick("[p-animDown]");

downAnim.forEach(down=>{
    down.animate([
    { transform: 'translateY(300px)' },
    { transform: 'translateY(0)'}
  ], {
    duration: 1000,
    iterations:1
  }
);
})

let zoomAnim=pick("[p-animZoom]");
zoomAnim.forEach(zoom=>{
    zoom.animate([
    { transform: 'scale(0)',transformOrigin:'100% 0%'},
    { transform: 'scale(1)',transformOrigin:'100% 0%'}
  ], {
    duration: 1000,
    iterations:1
  }
);});
let bounceAnim=pick("[p-animBounce]");
bounceAnim.forEach(bounce=>{
    bounce.animate([
    { transform: 'scale(0.5),translateZ(10px)' },
    { transform: 'scale(1.3) translateZ(10px)' },
    { transform: 'scale(2.4) translateZ(13px)' },
    { transform: 'scale(1.5) translateZ(10px)'},
    { transform: 'scale(1) translateZ(0px)'}
  ], {
    duration: 1000,
    iterations:1
  }
);});
let shakeAnim=pick("[p-animShake]");
shakeAnim.forEach(shake=>{
    shake.animate([
    { transform: 'translateX(-30px) translateY(-3px)' },
    { transform: 'translateX(0) translateY(0)' },
    { transform: 'translateX(30px) translateY(3px)'}
  ], {
    duration: 150,
    iterations:4
  }
);
});
//texts....
let expandAnimIn=pick("[p-animExpandIn]");
expandAnimIn.forEach(expand=>{
    expand.animate([
    { letterSpacing: '-0.5em', opacity:'0' },
    { opacity:'0.6' },
    { opacity:'1' }
   
  ], {
    duration: 1000,
    iterations:1
  }
);});
let expandAnimOut=pick("[p-animExapandOut]");
expandAnimOut.forEach(zoom=>{
    zoom.animate([
     { letterSpacing: '1.5em', opacity:'1',filter:'blur(12px)' },
    { opacity:'0.6' },
    { opacity:'0',filter:'blur(0px)' }
   
  ], {
    duration: 1000,
    iterations:1
  }
);});

},0);
class Pec{
    constructor(elem,data){
        this.elem=elem;
        this.data={};
    }
    init(){
        let element=document.querySelector(this.elem);
     var datas=this.data;
        eval(datas);
       
        
        //let find a if statement
    let ifStatement=element.querySelector("[p-if]");
    let elseifStatement=element.querySelector("[p-elseif]");
    let elseStatement=element.querySelector("[p-else]");
    let ifStatement_attr=ifStatement.getAttribute("p-if");
    let elseifStatement_attr=ifStatement.getAttribute("p-elseif");
    let elseStatement_attr=ifStatement.getAttribute("p-else");
    
    ifStatement_attr=eval(ifStatement_attr);
    elseifStatement_attr=eval(elseifStatement_attr);
    elseStatement_attr=eval(elseStatement_attr);
    if(ifStatement_attr){
        if(pick("[p-elseif]")!==null){
        p("[p-elseif]").hide();
        }
        if(pick("[p-else]")!==null){
        p("[p-else]").hide();
        }
        
    }
    else if(elseifStatement_attr){
        if(pick("[p-if]")!==null){
        p("[p-if]").hide();
        }
        if(pick("[p-else]")!==null){
        p("[p-else]").hide();
        }
        
    }
    else{
        if(pick("[p-if]")!==null){
        p("[p-if]").hide();
        }
        if(pick("[p-elseif]")){}
        else{
        p("[p-elseif]").hide();
        
        }
    }
        
    }
}
Peculiar.speak=(word,pitch,rate)=>{
     var synth = window.speechSynthesis;
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
  
}

populateVoiceList();
function speak(){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    
    var utterThis = new SpeechSynthesisUtterance(word);
    utterThis.onend = function (event) {
        console.log('Done');
    }
    utterThis.onerror = function (event) {
        console.error('Error');
    }
   var revoice=random(0,voices.length)
        utterThis.voice = voices[revoice];
        
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    synth.speak(utterThis);
  }
}

function numToAlpha(num){
            num=num.toString();
            var alphabets=["a","b","c","d","e","f","g","h","i","j"];
     var a="";
        for(i=0;i<num.length;i++){
           
        
             a+=alphabets[num[i]];
          
             
        }
       
    
         return a;
    }










