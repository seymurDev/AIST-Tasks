const firstDate=document.getElementById('firstDate')
const secondDate=document.getElementById('secondDate')
const resultSpan=document.getElementById('result')
function calculateDate(){

    let firstDateObj = new Date(firstDate.value);
    let secondDateObj = new Date(secondDate.value);
    const timeDiff = Math.abs(secondDateObj.getTime() - firstDateObj.getTime());
    console.log(timeDiff);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    resultSpan.innerHTML =' ' + years + " year, " + months % 12 + " month, " + days % 30 + " day";

}