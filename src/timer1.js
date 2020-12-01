
let min=24;
let sec=60;
let interval=null;
let displaysec=0;
let displayminutes=0;
let status="stop";

const stopwatchFunction=()=>{
    
    
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
      document.getElementById("display").innerHTML=displayminutes+":" +displaysec;
      if(min<0){
        sec=0;
        min=0;
        document.getElementById("display").innerHTML="00"+":"+"00";
 
         document.getElementById("audio-file").play();
         window.clearInterval(interval);
 
       } 
}
//setInterval(stopwatchFunction,1000);

export const startstop=()=>{
  if(status=="stop"){
    interval=window.setInterval(()=>{
      stopwatchFunction();
    },1000);
    document.getElementById("start").innerHTML="Stop";
    
    status="start";
  }
  else{
    window.clearInterval(interval);
    document.getElementById("start").innerHTML="Start";

    status="stop";
  }
}

export function reset(){

  window.clearInterval(interval);
  sec=60;
  min=24;
  
  document.getElementById("display").innerHTML="25:00";
  document.getElementById("start").innerHTML="Start";
}

