
//arr for labellist 
let labellist = [];

// statuslist for checkbox
let statuslist = [];

// function chick
function addTodo() {
    // get id from documentt = todo-label
    let inputodolabel = document.getElementById("todo-label").value;
    // show in ul
    let ulTodo = document.getElementById("ul-todo");
    let ulCompleted = document.getElementById("ul-completed");
    if (labellist.length == 0 || labellist.length > 0 && !labellist.includes(inputodolabel)) {
        //code for push somethingyou write in arr
        labellist.push(inputodolabel);
        //get the statuslist when you push in the arr to false
        statuslist.push(false);
    }
    refreshList(ulTodo, ulCompleted);
}


function refreshList(ulTodo, ulCompleted) {
    ulTodo.innerHTML = '';
    ulCompleted.innerHTML = '';
    console.log(statuslist);
    //loop for check arr
    for (let i = 0; i < labellist.length; i++) {
        //give create li in arr
        var listitem = document.createElement("li");
        var checkbox = document.createElement('input');

        checkbox.type = "checkbox";
        checkbox.id = i;
        checkbox.name = "checkbox";
        checkbox.value = statuslist[i];
        checkbox.onclick = function (res) {
            let id = res.target.id;
            statuslist[id] = !statuslist[id];
            refreshList(ulTodo, ulCompleted);
        };
        // make a text content 
        listitem.textContent = labellist[i];

        if (statuslist[i] == false) {
            //appendchild to show li in ul
            ulTodo.appendChild(listitem);
        } else {
            ulCompleted.appendChild(listitem);
            checkbox.checked = true;
        }
        // ul.appendChild(checkbox);
        listitem.appendChild(checkbox);
    }
}
