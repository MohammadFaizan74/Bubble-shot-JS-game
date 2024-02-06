

var timer=60;
var score=0;
var hitrn=0;



function increaseScore(){
    score +=10;
    document.querySelector('#scoreval').textContent=score
}

function getNewhit(){
  hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn
}







function makeBubble(){
    var clutter="";
 for(var i=1;i<=150;i++){
     var rn=Math.floor(Math.random()*10)
     clutter+= `<div class="bubble">${rn}</div>`;
 }
 document.querySelector("#pbtm").innerHTML=clutter;

 }

 function runtimer(){
   var timerint =setInterval(() => {
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
           // document.querySelector("#pbtm").innerHTML="";
            document.querySelector("#pbtm").innerHTML=`<h1>Game over</h1>`;

        }
        
    }, 1000);
  }


  document.querySelector('#pbtm')
  .addEventListener("click",function(dets){
   // alert("point ho rha hai")
  var clickednum =(  Number(dets.target.textContent));
  if(clickednum===hitrn){
    increaseScore();
    makeBubble();
    getNewhit();


  }


  })


// getNewhit();
runtimer();
makeBubble();
getNewhit();



// how to save the score  (dout)

let NewSaveArr=[]

NewSaveArr.push(score)
if(localStorage.getItem('scoreSave')!==null){
  let previousScore=JSON.parse(localStorage.getItem('scoreSave'))
  previousScore.push(score)
  localStorage.setItem("scoreSave",JSON.stringify(score))
}



