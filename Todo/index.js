// setting up the event listeners 
document.getElementById("btn1").addEventListener('click', add, false);
document.getElementById("del"),addEventListener('click', take, false);
document.getElementById("filter").addEventListener('keyup', filterlist, false);

// allows the function to create a item and add it to the list 
function add(){

    var main = document.getElementById("main"); // getting the html main id  
    //creating list 
    var list = document.createElement("li");
    
    //creating input with type checkbox 
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.className = "checker";
    
    //creating span 
    var span = document.createElement("span");
    span.className = "items"

    var btn = document.createElement("button");
    btn.textContent = "X";
    btn.className = "del";
    
    //getting value from input 
    var msg = document.getElementById("add").value;
    
    span.textContent = msg; // gets the message from the input
    
    // appending all to the main
    list.appendChild(input);

    list.appendChild(span);



    list.appendChild(btn);

    main.appendChild(list);

}
// take function allows to delete item
function take(e){
    console.log(e.target);
    if(e.target.className == "del"){  // look for class name of del  
        var li = e.target.parentElement;
        main.removeChild(li);   // removes if class name equals del 
    }
    
}

// function to search for a particular item
function filterlist(e){
    var text = e.target.value.toLowerCase(); //<<-  this gets the value and changes it to lowercase 
    var items = main.getElementsByTagName('li'); //<-- gets the li 


    Array.from(items).forEach(function(item){ //<<-- converts the list to an array then loop the items 
        var itemsName = item.textContent; //<-- gets the itmes on the list 
       
        if(itemsName.toLowerCase().indexOf(text) != -1){ // <-- checks if the itmes is in the list 
            item.style.display = "block"; //<-- display if able to see 
        }
        else{
            item.style.display = "none"; // else display none;
        }
    });



}
