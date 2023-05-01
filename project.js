
let button = document.getElementById("addtodo");


let show = document.getElementById("input");

let answer = document.getElementById("answer");

const parent = document.getElementById("answer");

button.addEventListener("click" , function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = input.value;
    answer.appendChild(paragraph);



    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "myCheckbox";
    checkbox.value = "myCheckboxValue";
    parent.appendChild(checkbox);

    if( checkbox === true){
        return check ;
    }else if(checkbox === false){
        return "don't have";
    }

})



let check = document.getElementById("check");



// if (c)
// check.addEventListener("chang", function(){

// })

