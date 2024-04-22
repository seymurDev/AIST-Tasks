const dateTime=document.getElementById('dateContent')
const hourCircle=document.getElementById('hourCircle')
const minuteCircle=document.getElementById('minuteCircle')
const secondCircle=document.getElementById('secondCircle')
const hourUI=document.getElementById('hour')
const minuteUI=document.getElementById('minute')
const secondUI=document.getElementById('second')
function getTime(){
    const now=new Date()
    const day=addZero(now.getDate())
    const month=addZero(now.getMonth()+1)
    const year=now.getFullYear()
    const hour=addZero(now.getHours())
    const minute=addZero(now.getMinutes())
    const second=addZero(now.getSeconds())
    // console.log(second);
    const ddmmyy=`${day}.${month}.${year}`
    dateTime.textContent=ddmmyy
    const hourDegree=((now.getHours())/24)*360
    const minuteDegree=((now.getMinutes())/60)*360
    const secondDegree=((now.getSeconds())/60)*360
    hourCircle.style.background=`conic-gradient(blue 0deg ${hourDegree}deg,transparent ${hourDegree}deg 360deg)`
    minuteCircle.style.background=`conic-gradient(red 0deg ${minuteDegree}deg,transparent ${minuteDegree}deg 360deg)`
    secondCircle.style.background=`conic-gradient(green 0deg ${secondDegree}deg,transparent ${secondDegree}deg 360deg)`
    hourUI.textContent=hour
    minuteUI.textContent=minute
    secondUI.textContent=second
}
function addZero(num){
    return num<10?'0'+num:String(num)
}
getTime()
setInterval(getTime,1000)