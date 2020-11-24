const button = document.getElementById("Button");
button.addEventListener("click", Manipulate);
let listId = 0;

function Manipulate() {
    const input = (<HTMLInputElement>document.getElementById("InputText")).value;
    const selected = parseInt((<HTMLSelectElement>document.getElementById("Options")).value);
    let result;
    switch (selected) {
        case 1: { result = input.toUpperCase(); break; }
        case 2: { result = input.toLowerCase(); break; }
        // case 4: { result = input[0].toUpperCase() + input.slice(1, input.length); break; }
        default: { result = ""; break; }
    }
    let ListElement = document.createElement("li");
    
    ListElement.setAttribute("id", "ListPoint" + listId);
    ListElement.textContent = result;
    const List = document.getElementById("resultList");
    List.appendChild(ListElement);
    listId++;
}


// or 

//add eventlistener at the button and tell to execute the function addInputText on a click event
document.getElementById('submitBtn').addEventListener("click",addInputText);


//find the text input field in the html
let elementInput = document.getElementById('input');

//find the select element in the html
let selectInputUpLow = document.getElementById('UpLow');

//counter 
let clicked = 0;

//function that add the input text in upper or lower case to the list
function addInputText():void{
    clicked++;

    //get the value from the text input element , need to cast to <HTMLInputElement>
    let inputText = (<HTMLInputElement>elementInput).value;

    //get the value from the select input element , need to cast to <HTMLSelectElement>
    let upLow = (<HTMLSelectElement> selectInputUpLow).value

    let result = "";

    //test which value the selectinput elements has
    if(upLow == "upper")
       result = inputText.toUpperCase();
    else
       result = inputText.toLowerCase();

    //finds the list to add the new element too
    let listResult = document.getElementById('StringManipulation');

    //create a new li element
    let newLi = document.createElement('li');
    let newText = document.createTextNode(clicked.toString() +" - " + result)
    newLi.appendChild(newText);

    //set the attribute of the li element 
    if (isEven(clicked))
      newLi.setAttribute('class','even');
    else
      newLi.setAttribute('class','odd');
    
    //add the li element to the list 
    listResult.appendChild(newLi);

    //clear the input field
    (<HTMLInputElement>elementInput).value = '';

   }

   //Test if the number is even or not
   function isEven(nr:number):boolean{

    if (nr%2 == 0)
      return true;

    return false;
   }