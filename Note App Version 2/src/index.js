// Experimenting with module-level programming
// and OOP design patterns, specifically, SingletonPattern

import Collections from "./Collections.js";

// HTMLElements
const slotContainer = document.querySelector(".slot-container");
const textarea = document.getElementById("note");
const title = document.getElementById("caption");
const date = document.getElementById("date");

// Buttons
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const writeBtn = document.getElementById("writeBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Topic and span Element(note ID) :: NoteSlot
const topic = document.getElementById("topic");
const noteId = document.getElementById("key");  

// STORE button toggle value
let addBtnToggle = addBtn.innerHTML == "Add" ? true : false;
let selectedNoteSlot = null;


let noteContent = textarea.value;
let captionContent = title.value;

// Create a new collection to handle 
// note creation and management
// Note: Collections only creates one collection
// to manage note creation

const noteName = "Note_App";
const collection = new Collections(noteName);

window.onload = () => {
    const dateObj = new Date();
    date.innerHTML = dateObj.toLocaleDateString();

    // Fetch data on every reload
    const data = collection.getDocuments();
    collection.setCollection(data);


    const documents = collection.getDocuments();

    for(const doc of documents) {
        // If doc(note) is a deleted element do not
        // create note slot for it
        if(doc.title == "<deleted>") continue;
        else {
        const noteSlot = createNoteSlot(doc);
        addEvent(noteSlot, "click", () => {
            selectedNoteSlot = noteSlot;
            let notes = JSON.parse(localStorage.getItem(noteName));
            let note = notes[selectedNoteSlot.querySelector("#key").innerHTML]; // Get the key from noteSlot Elem
            onNoteSlotClickHandler(note); // Get the data straight from storage
        });

        addEvent(noteSlot.querySelector("#deleteBtn"), "click", (e) => {
            noteSlot.remove();
            collection.removeAt(doc.id);
            e.stopPropagation();
            resetUI();
        });
        slotContainer.appendChild(noteSlot);
    }
    }
};

textarea.addEventListener("change", (e) => {
    noteContent = e.target.value;

    let index = selectedNoteSlot.querySelector("#key").innerHTML;

    let noteSlotCollection = collection.getDocuments();
    let selectedNote = noteSlotCollection[index]; // A specific note in the collection
    selectedNote.content = noteContent;

    collection.insertAt(index, selectedNote);
});

title.addEventListener("input", e => {
    captionContent = e.target.value;
});

addBtn.addEventListener("click", () => {
    if(addBtnToggle) {
        let noteObject = {};
        noteObject.id = collection.getSize();
        noteObject.title = captionContent;
        noteObject.date = date.textContent;
        noteObject.content = noteContent;

        if(noteObject.title == "") noteObject.title = "<i style='color: #ddd;'>empty</>";
        collection.save(noteObject);
    }
    else {
        let index = selectedNoteSlot.querySelector("#key").innerHTML;

        let noteSlotCollection = collection.getDocuments();
        let selectedNote = noteSlotCollection[index]; // A specific note in the collection

        if(captionContent === "") {
            alert("Please give the note a caption");
            return; // prevent the UI from "resetting"
        }
        else {
            selectedNote.title = captionContent;
            selectedNote.date = new Date().toLocaleDateString();    // Update the date
            selectedNote.content = noteContent;

            collection.insertAt(index, selectedNote);
        }
    }


    resetUI();
});

writeBtn.addEventListener("click", () => {
    resetUI();
});

resetBtn.addEventListener("click", () => {
    collection.clear();
    resetUI();
});

function createNoteSlot(obj) {
    const noteSlot = document.querySelector(".note-slot");
    const noteSlotClone = noteSlot.cloneNode(true);
    const idElement = noteSlotClone.querySelector("#key");
    const topicElement = noteSlotClone.querySelector("#topic");

    noteSlotClone.style.display = 'block';
    idElement.innerHTML = obj.id;
    topicElement.innerHTML = obj.title;

    return noteSlotClone;
}

function resetUI() {
    location.reload();
    title.value = "";
    textarea.value = "";
}

function addEvent(Elem, Event, EventHandler) {
    Elem.addEventListener(Event, EventHandler);
}

function onNoteSlotClickHandler(NoteSlotData) {
    const {title, date, content} = NoteSlotData;
    captionContent = title;
    noteContent = content;

    document.getElementById("caption").value = captionContent;
    document.getElementById("date").innerHTML = date;
    textarea.value = noteContent;

    // If addBtn is in its default, thus, "addBtnToggle" is True 
    // update button text
    addBtnToggle = !addBtnToggle;
    addBtn.innerHTML = addBtnToggle ? "Add" : "Update";
}