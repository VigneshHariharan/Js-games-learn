const dropZones = document.querySelectorAll('.drop-zone');
console.log('dropzones : ',dropZones)

// assuming only mouse action or single touch option
let tempStorage = null;

const dropEventListener = (event) => {
    console.log('drop event listener : ',event)
    event.target.appendChild(tempStorage)
}

const container = document.querySelector(".container");

container.addEventListener("dragover", (event) => {
    event.preventDefault();
})

container.addEventListener("dragstart", (event) => {
    if(!tempStorage) {
        tempStorage = event.target
    }

})

container.addEventListener("drop", (event) => {
    // classList is an array like object but doesn't have array methods
    if (event.target.classList.contains('drop-zone')) {
      dropEventListener(event);
      tempStorage = null
    }
});

