const prevBtn=document.getElementById('prev')
const nextBtn=document.getElementById('next')
const img=document.getElementById('img').src
var imgCount=1
console.log(img);
prevBtn.addEventListener('click',prevAct())
function prevAct(){
    if(imgCount===1){
        imgCount=6
    }else{
        imgCount-1
        img=`./images/${imgCount}.jpg`
    }
}