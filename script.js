const notesContainer = document.querySelector(".notes-container");

const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");


// show the notes which are not deleted after refreshing.
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes()

function updateStorage() {

    localStorage.setItem("notes", notesContainer.innerHTML);
}


// Create a new Note.
createBtn.addEventListener("click", ()=>{
    
    let inputBox = document.createElement("p");
    
    let img = document.createElement("img");
    
    inputBox.className = "input-box";

    inputBox.setAttribute("contenteditable", "true");
    
    img.src = "delete.png";

    notesContainer.appendChild(inputBox).appendChild(img);
});

// Delete a Note.
notesContainer.addEventListener("click", function(e){

    if(e.target.tagName === "IMG"){
        
        e.target.parentElement.remove();

        updateStorage();
    }

    else if(e.target.tagnName === "P") {

        notes = document.querySelectorAll(".input-box");

        notes.forEach(nt => {
            
            nt.onkeyup = function(){

                updateStorage();
            }

        });
    }
});

// On pressing Enter goes to a new Line and prevent default feature of deafult enter key.
document.addEventListener("keydown", event =>{

    if(event.key === "Enter") {

        document.execCommand("insertLineBreak");
        
        event.preventDefault();
    }
});