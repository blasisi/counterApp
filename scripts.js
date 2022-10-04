"use strict"
window.onload = function () {



    //here i created a  variable  to hot=ld the html element, javascript goes to the dom to get the element to grab class count,increment,decrement or reset but is then bind the add event and listen to the click event


    const count = document.getElementById("count"); //A display to show the number
    const addBtn = document.getElementsByClassName("Increment")[0];
    const resetBtn = document.querySelector(".Reset");
    const subBtn = document.getElementsByClassName("Decrement")[0];



    //add event listener
    //I binded event listener to the html element using add event listerner method, then listened to the click event, when the click event happens on this element it call a function to display count
    addBtn.addEventListener("click", () => { //Get the span holding count
        count.innerHTML = parseInt(count.innerHTML) + 1; // this increased the value by 1
    })

    subBtn.addEventListener("click", () => { //Get the span holding count
        count.innerHTML = parseInt(count.innerHTML) - 1; // this increased the value by 1

    })
    //This reset counter functionality set the value to zero
    resetBtn.addEventListener("click", (e) => {
        count.innerHTML = 0; // 



    })

}