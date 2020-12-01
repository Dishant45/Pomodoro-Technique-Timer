let min=4;
let sec=60;
let interval=null;
let displaysec=0;
let displayminutes=0;
let status="stop";

const shortbreakFunction=()=>{
    
    
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
      document.getElementById("display-shortbreak").innerHTML=displayminutes+":" +displaysec;


    

      if(min<0){
       sec=0;
       min=0;
       document.getElementById("display-shortbreak").innerHTML="00"+":"+"00";

        document.getElementById("audio-file").play();
        window.clearInterval(interval);

      } 
  

}
//setInterval(stopwatchFunction,1000);

export const startstops=()=>{
  if(status=="stop"){
    interval=window.setInterval(()=>{
      shortbreakFunction();
    },1000);
    document.getElementById("start-sbreak").innerHTML="Stop";
    
    status="start";
  }
  else{
    window.clearInterval(interval);
    document.getElementById("start-sbreak").innerHTML="Start";
    status="stop";
  }
}
export function resets(){

  window.clearInterval(interval);
  sec=60;
  min=4;
  
  document.getElementById("display-shortbreak").innerHTML="05:00";
  document.getElementById("start-sbreak").innerHTML="Start";
}
