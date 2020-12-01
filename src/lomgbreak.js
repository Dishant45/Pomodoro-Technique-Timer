let min=14;
let sec=60;
let interval=null;
let displaysec=0;
let displayminutes=0;
let status="stop";

const longbreakFunction=()=>{
    
    
    sec--;
    if(sec==0){
        
        sec=60;
        
        min--;
        
    }
    if(sec>=10){
        displaysec=sec;
      }
      else{
        displaysec="0"+sec.toString();
      }
      if(min<10){
        displayminutes="0"+min.toString();
      }
      else{
        displayminutes=min;
      }
      document.getElementById("display-longbreak").innerHTML=displayminutes+":" +displaysec;
      if(min<0){
        sec=0;
        min=0;
        document.getElementById("display-longbreak").innerHTML="00"+":"+"00";
 
         document.getElementById("audio-file").play();
         window.clearInterval(interval);
 
       } 
}
//setInterval(stopwatchFunction,1000);

export const startstopl=()=>{
  if(status=="stop"){
    interval=window.setInterval(()=>{
      longbreakFunction();
    },1000);
    document.getElementById("start-lbreak").innerHTML="Stop";
    
    status="start";
  }
  else{
    window.clearInterval(interval);
    document.getElementById("start-lbreak").innerHTML="Start";
    status="stop";
  }
}
//start-lbreak
export function resetl(){

  window.clearInterval(interval);
  sec=60;
  min=14;
  
  document.getElementById("display-longbreak").innerHTML="15:00";
  document.getElementById("start-lbreak").innerHTML="Start";
}
