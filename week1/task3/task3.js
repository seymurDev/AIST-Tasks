const firstDate=document.getElementById('firstDate')
const secondDate=document.getElementById('secondDate')
const resultSpan=document.getElementById('result')
function validateDate() {
    var dateInput1 = firstDate.value;
    var dateInput2 = secondDate.value;
    var dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    if (dateRegex.test(dateInput1) & dateRegex.test(dateInput2)) {
        document.getElementById("validationMessage").innerText = "Valid date format.";
        return true
    } else {
        document.getElementById("validationMessage").innerText = "Invalid date format. Please enter DD.MM.YYYY format.";
        return false
    }
}
function calculateDate(){
    if(validateDate()){
        var firstDatePart=firstDate.value.split('.')
        var secondDatePart=secondDate.value.split('.')
        var startDate = new Date(firstDatePart[2],firstDatePart[1] - 1,firstDatePart[0])
        var endDate = new Date(secondDatePart[2],secondDatePart[1] - 1,secondDatePart[0]);
        var timeDiff = Math.abs(endDate.getTime() - startDate.getTime()) / 1000;
        console.log(timeDiff);
        var years = Math.floor(timeDiff / (60 * 60 * 24 * 365));
        timeDiff -= years * 60 * 60 * 24 * 365;
        var months = Math.floor((timeDiff % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30.44));
        timeDiff -= months * 60 * 60 * 24 * 30.44;
        var days = Math.floor((timeDiff % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
        resultSpan.textContent=`${years} il, ${months} ay, ${days} gün`
    }
    else{
        return false
    }
}