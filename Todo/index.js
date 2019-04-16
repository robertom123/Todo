var list = document.createElement("li");
var span = document.createElement("span");
var btn = document.createElement("button");
var main = document.getElementById("main"); // this the ul 


document.getElementById("btn1").addEventListener('click', add, false);
document.getElementById("del"),addEventListener('click', take, false);
document.getElementById("filter").addEventListener('keyup', filterlist, false);


function add(){

    var main = document.getElementById("main");

    var list = document.createElement("li");

    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.className = "checker";

    var span = document.createElement("span");
    span.className = "items"

    var btn = document.createElement("button");

    // This className for span
    // This classname for button  
    // take off the li stuff 
    // add checkbox with line through 
    // add custom buttons 

    var msg = document.getElementById("add").value;

    span.textContent = msg;

    list.appendChild(input);

    list.appendChild(span);

    btn.textContent = "X";
    btn.className = "del";

    list.appendChild(btn);

    main.appendChild(list);

}

function take(e){
    console.log(e.target);
    if(e.target.className == "del"){
        var li = e.target.parentElement;
        main.removeChild(li);
    }
    
}

//potential bug 
function filterlist(e){
    var text = e.target.value.toLowerCase(); //<<-  THIS gets the value and changes it to lowercase 
    var items = main.getElementsByTagName('li'); //<-- gets the li in ul 


    Array.from(items).forEach(function(item){ //<<-- converts the list to an array then loop the items 
        var itemsName = item.textContent; //<-- gets the itmes on the list 
        console.log(itemsName);
        if(itemsName.toLowerCase().indexOf(text) != -1){ // <-- checks if the itmes is in the list 
            item.style.display = "block"; //<-- display if able to see 
        }
        else{
            item.style.display = "none"; // else display none;
        }
    });



}