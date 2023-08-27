// Declare Varibale
let dayText = document.querySelector(".days span");
let monthText = document.querySelector(".month span");
let yearText = document.querySelector(".year span");

let dayInput = document.querySelector(".days input");
let monthInput = document.querySelector(".month input");
let yearInput = document.querySelector(".year input");

let mainDiv = document.querySelectorAll(".date-input div")


document.querySelector(".icon i").addEventListener("click",()=>{
    let validDays = false;
    let validMonth = false;
    let validYear = false;
    let valid = false;  

    

    if(dayInput.value === ""){
        mainDiv[0].classList.add("invalid");
        dayText.innerHTML = 'This field is required'
    }else if((!(dayInput.value > 0 && dayInput.value<32)) || new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`).getMonth() + 1 != monthInput.value){
        mainDiv[0].classList.add("invalid");
        dayText.innerHTML = 'Must be a day valid'
    }else{
        mainDiv[0].classList.remove("invalid")
        dayText.innerHTML = 'Day is valid';
        validDays = true;
    }




    if(monthInput.value === ""){
        mainDiv[1].classList.add("invalid");
        monthText.innerHTML = 'This field is required'
    }else if(!(monthInput.value > 0 && monthInput.value<13)){
        mainDiv[1].classList.add("invalid");
        monthText.innerHTML = 'Must be a month valid'
    } else{
        mainDiv[1].classList.remove("invalid")
        monthText.innerHTML = 'month is valid';
        validMonth = true;
    }


    if(yearInput.value === ""){
        mainDiv[2].classList.add("invalid");
        yearText.innerHTML = 'This field is required'
    }else if(!(+yearInput.value <= new Date().getFullYear())){
        mainDiv[2].classList.add("invalid");
        yearText.innerHTML = 'Must be in the past' 
    }else{
        mainDiv[2].classList.remove("invalid")
        yearText.innerHTML = 'Year is valid';
        validYear = true;
    }

    if(validDays && validMonth && validYear && +yearInput.value <= new Date().getFullYear()){
        valid = true;
        let date = Date.now() - new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
        //Get full Year
        let year = Math.floor(date/1000/60/60/24/365);
        //Get Remaining Days
        let dayWithoutMonth = Math.floor(date/1000/60/60/24%365);
        //Get Months By Remaining Days
        let month = Math.floor(dayWithoutMonth / 31);
        //Get Days
        let day = Math.floor(dayWithoutMonth % 31)
        document.querySelector(".yearSpan").innerHTML = year < 10? `0${year}` : year;
        document.querySelector(".monthSpan").innerHTML = month < 10? `0${month}` : month;
        document.querySelector(".daySpan").innerHTML = day < 10? `0${day}` : day;
    }
    

})








//Changent directement


dayInput.addEventListener("input",()=>{
    if(dayInput.value === ""){
        mainDiv[0].classList.add("invalid");
        dayText.innerHTML = 'This field is required'
    }else if(!(dayInput.value > 0 && dayInput.value<32)){
        mainDiv[0].classList.add("invalid");
        dayText.innerHTML = 'Must be a day valid'
    } else{
        mainDiv[0].classList.remove("invalid")
        dayText.innerHTML = 'Day is valid';
    }

})

monthInput.addEventListener("input",()=>{
    if(monthInput.value === ""){
        mainDiv[1].classList.add("invalid");
        monthText.innerHTML = 'This field is required'
    }else if(!(monthInput.value > 0 && monthInput.value<13)){
        mainDiv[1].classList.add("invalid");
        monthText.innerHTML = 'Must be a month valid'
    } else{
        mainDiv[1].classList.remove("invalid")
        monthText.innerHTML = 'month is valid';
    }
})

yearInput.addEventListener("input",()=>{
    if(yearInput.value === ""){
        mainDiv[2].classList.add("invalid");
        yearText.innerHTML = 'This field is required'
    }else if(!(+yearInput.value <= new Date().getFullYear())){
        mainDiv[2].classList.add("invalid");
        yearText.innerHTML = 'Must be in the past' 
    }else{
        mainDiv[2].classList.remove("invalid")
        yearText.innerHTML = 'Year is valid';
    }
})

