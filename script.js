9 // Example function that is called when a swipe is detected

 let elementi = [];
 let a = "polje-";
 var rez=0;
 let score=document.getElementById("score");

 for(let i=0; i<16; i++)
 {
    let a = "polje-"+(i+1);
    elementi[i] = document.getElementById(a);
 }

 let polje = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

 function moveLeft(polje)
 {
    let moved =0;
    for(let i=0; i<4; i++)
    {
        for(let j=0; j<4;j++)
        {
            if(polje[4*i+j]!=0)
            {
                let k = j, temp = polje[4*i+j];
                while(polje[4*i+k-1]==0 && k>0)
                {
                    k--;
                }
                if(k!=j)
                {
                    moved++;
                    polje[4*i+j] = 0;
                    polje[i*4+k]= temp;
                }
                if(k>0 && polje[4*i+k-1]==polje[4*i+k] && polje[4*i+k]!=0)
                {
                    
                    polje[4*i+k-1] += polje[4*i+k];
                    polje[4*i+k]=0;
                    rez += polje[4*i+k-1];
                }   
            }
        }
    }
    if(moved!=0)
    dodajBroj(polje);
    updatePolje(polje,elementi);
 }

 function moveRight(polje)
 {
    let moved = 0;
    for(let i=3; i>=0; i--)
    {
        for(let j=3; j>=0;j--)
        {
            if(polje[4*i+j]!=0)
            {
                let k = j, temp = polje[4*i+j];
                while(polje[4*i+k+1]==0 && k<3)
                {
                    k++;
                }
                if(k!=j)
                {
                    polje[4*i+j] = 0;
                    polje[i*4+k]= temp;
                    moved++;
                }
                if(k<3 && polje[4*i+k+1]==polje[4*i+k] && polje[4*i+k]!=0)
                {
                    polje[4*i+k+1] += polje[4*i+k];
                    polje[4*i+k]=0;
                    rez += polje[4*i+k+1];
                }      
            }
        }
    }
    if(moved!=0)
    dodajBroj(polje);
    updatePolje(polje,elementi);
 }

 function moveUp(polje)
 {
    var moved = 0;
    for(let i=0; i<4; i++)
    {
        
        for(let j=0; j<4;j++)
        {
            if(polje[4*i+j]!=0)
            {
                let k = i, temp = polje[4*i+j];
                while(polje[4*(k-1)+j]==0 && k>0)
                {
                    k--;
                }
                if(k!=i)
                {
                    polje[4*i+j] = 0;
                    polje[k*4+j]= temp;
                    moved++;
                }
                if(k>0 && polje[4*(k-1)+j]==polje[4*k+j] && polje[4*k+j]!=0)
                {
                    polje[4*(k-1)+j] += polje[4*k+j];
                    polje[4*k+j]=0;
                    rez += polje[4*(k-1)+j];
                }   
            }
        }
    }
    if(moved!=0)
    dodajBroj(polje);
    updatePolje(polje,elementi);
 }

 function moveDown(polje)
 {
    var moved = 0;
    for(let i=3; i>=0; i--)
    {
        for(let j=3; j>=0;j--)
        {
            if(polje[4*i+j]!=0)
            {
                let k = i, temp = polje[4*i+j];
                while(polje[4*(k+1)+j]==0 && k<3)
                {
                    k++;
                }
                if(k!=i)
                {
                    polje[4*i+j] = 0;
                    polje[k*4+j]= temp;
                    moved++;
                }
                if(k<3 && polje[4*(k+1)+j]==polje[4*k+j] && polje[4*k+j]!=0)
                {
                    polje[4*(k+1)+j] += polje[4*k+j];
                    polje[4*k+j]=0;
                    rez += polje[4*(k+1)+j];
                } 
            }
        }
    }
    if(moved!=0)
    dodajBroj(polje);
    updatePolje(polje, elementi);
 }

 function onSwipe(direction) {
    switch(direction)
    {
        case "left":
            moveLeft(polje);
            break;
        case "right":
            moveRight(polje);
            break;
        case "up":
            moveUp(polje);
            break;
        case "down":
            moveDown(polje);
            break;
    }
  }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function svePuno(polje)
{
    for(var i=0; i<16;i++)
    {
        if(polje[i]==0)return false;
    }
    return true;
}

function dodajBroj(polje)
{
    let x;
    do
    {
        x= getRndInteger(0,15);
        if(svePuno(polje)) return;
    }while(polje[x]!=0);
    polje[x] = getRndInteger(1,100)>80 ? 4 : 2; 
    console.log("x je:", x);
}

function randomPolje(polje)
{
    let x = getRndInteger(0,15);
    polje[x] = getRndInteger(1,100)>80 ? 4 : 2; 
    let y;
    do{
        y = getRndInteger(0,15);
    } while(y == x);
    polje[y] = getRndInteger(2,100)>80 ? 4 : 2; 
}

function restart()
{
    polje = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    rez = 0;
    start(polje);
}

function fullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function updatePolje(polje, elementi)
{
    score.innerHTML = "Score: "+ rez;
    for(let i=0; i<16; i++)
    {
        if(polje[i]!=0)
        {
            elementi[i].innerHTML = polje[i];
            if(polje[i]==2) elementi[i].style.backgroundColor="#EEF7A1";
            if(polje[i]==4) elementi[i].style.backgroundColor="#E7F66C";
            if(polje[i]==8) elementi[i].style.backgroundColor="#D7EE10";
            if(polje[i]==16) elementi[i].style.backgroundColor="#F9D33B";
            if(polje[i]==32) elementi[i].style.backgroundColor="#F0C20A";
            if(polje[i]==64) elementi[i].style.backgroundColor="#F3BE44";
            if(polje[i]==128) elementi[i].style.backgroundColor="#F3B526";
            if(polje[i]==256) elementi[i].style.backgroundColor="#F39626";
            if(polje[i]==512) elementi[i].style.backgroundColor="#F37D26";
            if(polje[i]==1024) elementi[i].style.backgroundColor="#F58249";
            if(polje[i]==2048) elementi[i].style.backgroundColor="#F30909";
        }   
        else
        {
            elementi[i].innerHTML = '';
            elementi[i].style.backgroundColor="lightgrey";
        }
            
    }
}
  
function start(polje)
{
    randomPolje(polje);
    updatePolje(polje, elementi);
}

start(polje);