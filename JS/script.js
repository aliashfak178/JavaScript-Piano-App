const body = document.getElementsByClassName('body');
const Btn =new Array(7)
Btn[0]= document.getElementById('A');
Btn[1] = document.getElementById('S');
Btn[2] = document.getElementById('D');
Btn[3] = document.getElementById('F');
Btn[4] = document.getElementById('G');
Btn[5] = document.getElementById('H');
Btn[6] = document.getElementById('J');

const Sound =new Array(7)
Sound[0] = document.getElementById('a');
Sound[1] = document.getElementById('s');
Sound[2] = document.getElementById('d');
Sound[3] = document.getElementById('f');
Sound[4] = document.getElementById('g');
Sound[5] = document.getElementById('h');
Sound[6] = document.getElementById('j');


document.addEventListener('keypress', (e)=>{
    // console.log(e.code)
    ChangeColorAndPlay(e.code)
});

const ChangeColorAndPlay = (code)=>{
    if(code=='KeyA'){
        Intervel(0);
        PlaySound(0)
    }
    else if(code=='KeyS'){
        Intervel(1);
        PlaySound(1)
    }
    else if(code=='KeyD'){
        Intervel(2);
        PlaySound(2)
    }
    else if(code=='KeyF'){
        Intervel(3);
        PlaySound(3)
    }
    else if(code=='KeyG'){
        Intervel(4)
        PlaySound(4)
    }else if(code=='KeyH'){
        Intervel(5);
        PlaySound(5)
    }else if(code=='KeyJ'){
        Intervel(6)
        PlaySound(6)
    }
}

const Intervel = (val)=>{
    Btn[val].style.backgroundColor= '#cc99ff';
    setTimeout(()=>{
        Btn[val].style.backgroundColor= '#fff';
    },1000)
}

const PlaySound = (num)=>{
    Sound[num].play();
}