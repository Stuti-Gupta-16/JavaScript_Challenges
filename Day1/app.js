window.addEventListener('keydown',(e)=>{
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const ele=document.querySelector(`.box[data-key="${e.keyCode}"]`);
    console.log(e);
    if(!audio) return;
    //to make it play from the start if we continue click it  
    //now to add animation
    audio.currentTime = 0;
    audio.play();
    ele.classList.add("playing");
    setTimeout(()=>{
        ele.classList.remove("playing");
    },1000);
    
});