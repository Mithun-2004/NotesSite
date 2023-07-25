var notesContainer = document.querySelector('.notesContainer');
var createBtn = document.querySelector('.container button');

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNotes(){
    var p = document.createElement('p');
    p.setAttribute('contenteditable', 'true');
    p.setAttribute('class', 'notesInput');
    var img = document.createElement('img');
    img.setAttribute('src', './images/delete.png');
    img.setAttribute('alt', 'delete-icon');
    p.appendChild(img);
    notesContainer.appendChild(p);
    notes = document.querySelectorAll(".notesInput");
    updateStorage();
}

createBtn.addEventListener('click', createNotes);

notesContainer.addEventListener('click', function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".notesInput");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})