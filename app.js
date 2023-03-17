class Input {
    constructor(parentID, text) {
          this.parentID = parentID;
          this.text = text;
    }
    render() {
        let myInput = document.getElementById(this.parentID);
        const myInputHTML = myInput.innerHTML + "<input type='" + this.text + "'>";
        myInput.innerHTML = myInputHTML;
    }
}

const inputtypes = ["checkbox","text","date","password","radio"];

//asignacion tipo de input
/*primer método (corroborar con profe si es viable o poco práctico)
const valorInput = inputtypes.forEach(createInput);
*/

const inputtypesfiltered = inputtypes.filter(element => element !="radio");

inputtypesfiltered.forEach(element => createInput(element));

function createInput(text) {   
    let tipoinput = new Input("input1", text);
    tipoinput.render();
}

//segundo método
//inputtypes.forEach(element => createInput(element));



//nueva variable con push
/*
inputtypes.push("submit");
createInput("submit");
*/

