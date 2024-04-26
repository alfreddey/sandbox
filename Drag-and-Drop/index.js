const dragContainer = document.getElementById("drag-container");
const dropContainer = document.getElementById("drop-container");
const addBtn = document.getElementById("addBtn");
const activityPreviewContainer = document.getElementById("activityPreview");

let selected = null;
let previewValue = "";
let length = 4; // Length of activities initially

const activities = [
    "Dance like a butterfly",
    "Go outside",
    "Find a match stick",
    "Run to a stadium",
    "Buy food for everyone",
    "Run about for 5 rounds",
    "Kick the chair or table nearby",
    "Shout on your lungs",
];

const LIMIT = activities.length;

populateDragContainer(activities, length);

function checkNumberOfActivities() {
    let sizeOfActivityItems = length+1;
    if(sizeOfActivityItems >= LIMIT) {
        console.log("Cannot exceed the limit of activities specified");
        addBtn.disabled = true;
        addBtn.classList.add("disabledBtn");
    }
}

addBtn.addEventListener("click", () => {
    checkNumberOfActivities();    
    createActivityItem(activities[length]);

    length += 1;
})

function createActivityItem(text) {
    const div = document.createElement("div");
    div.innerHTML = text;

    makeDraggable(div, dropContainer);
    makeDraggable(div, dragContainer);
    dragContainer.append(div);
}

// function getRandomFigure(range) {
//     let randomNum = Math.floor(Math.random()*range);
//     console.log(randomNum)
//     return randomNum;
// }

// Cannot use the random function because there is a chance
// numbers will repeat, that is, activities will repeat
// If you desire that, uncomment the getRandomFigure func
// and use as index in populateDragContainer

function populateDragContainer(activites, len) {
    checkNumberOfActivities();
    for(let i = 0; i < len; i++) {
        const div = document.createElement("div");
        // let index = getRandomFigure(len);
        div.innerHTML = activites[i];

        // Make the divs draggable on both sides of the container
        makeDraggable(div, dropContainer);
        makeDraggable(div, dragContainer);
        dragContainer.append(div);
    }
}

function makeDraggable(item, dropContainer) {
    item.setAttribute("draggable", "true");
    item.addEventListener("dragstart", e => handleActivityItemDragStart(e));
    dropContainer.addEventListener("dragover", e => handleActivityItemDragOver(e));
    dropContainer.addEventListener("drop", () => handleActivityItemDrop(dropContainer));

}

function handleActivityItemDragOver(e) {
    e.preventDefault();
}

function handleActivityItemDragStart(e) {
    selected = e.target;
    previewValue = selected.textContent;
}

function handleActivityItemDrop(dropContainer) {
    displayActivityText(previewValue);
    dropContainer.append(selected);
}

function displayActivityText(text) {
    activityPreviewContainer.innerHTML = text;
}