import{startstop} from './timer1.js';
import{reset} from './timer1.js';
import {startstops} from './shortbreak.js';
import {startstopl} from './lomgbreak.js';
import{resets} from './shortbreak.js';
import{resetl} from './lomgbreak.js';


window.onload = ()=>{
    

    document.getElementById("start").addEventListener("click",()=>{
        startstop();
    });

    document.getElementById("reset").addEventListener("click",()=>{
        reset();
        resets();
        resetl();
    });
    document.getElementById("start-sbreak").addEventListener("click",()=>{
        startstops();}
        );
    document.getElementById("start-lbreak").addEventListener("click",()=>{
        startstopl();
    });
    const hamburger =document.getElementById('hamburger');
const  navUL= document.getElementById('nav-ul');
hamburger.addEventListener('click',()=>{
   navUL.classList.toggle('show');
   
})  

  

    
    
    
   
 
 
 
 };
 