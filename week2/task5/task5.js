const prevBtn=document.getElementById('prev')
const nextBtn=document.getElementById('next')
const img=document.getElementById('img')
let imgCount=1

function prevAct(){
    if(imgCount===1){
        imgCount=6
    }else{
        imgCount -=1
        img.innerHTML=`<img src="./images/${imgCount}.jpg"  height="400px" alt="img">`
    }
}
function nextAct(){
    if(imgCount===6){
        imgCount=1
    }else{
        imgCount +=1
        img.innerHTML=`<img src="./images/${imgCount}.jpg"  height="400px" alt="img">`
    }
}