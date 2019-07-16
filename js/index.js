<<<<<<< HEAD:Todo/index.js
var list = document.createElement("li");
var span = document.createElement("span");
var btn = document.createElement("button");
var main = document.getElementById("main"); // this the ul 
var info = document.getElementById("info");


document.getElementById("btn1").addEventListener('click', add, false);
document.getElementById("filter").addEventListener('keyup', filterlist, false);


function add(){
    
    var msg = document.getElementById("add").value;
    if(msg === ''){
        info.style.display = 'block';
    }
    else {
        info.style.display = 'none';
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

    

        span.textContent = msg;

        list.appendChild(input);

        list.appendChild(span);
        btn.setAttribute('id', 'dels');
        btn.textContent = "X";
        btn.className = "del";
        btn.addEventListener('click', (e)=>{
            console.log(e.target);
            if(e.target.className == "del"){
                var li = e.target.parentElement;
                main.removeChild(li);
            }
        });

        list.appendChild(btn);

        main.appendChild(list);
       document.getElementById('add').value = '';
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



=======
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

    document.getElementById("add").value = "";


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



>>>>>>> 0704461f5550c28d149510671f5a13893f429109:js/index.js
}