function onFormSubmit(){
    var formData=readFormData();
    insertNewCard(formData);
    
}

function readFormData(){
    var formData = {};
    formData["description"]= document.querySelector("#description").value;
    formData["sevierty"]=document.querySelector("#sevierty").value;
    formData["assignedTo"]=document.querySelector("#assignedTo").value;
    return formData;
}

function insertNewCard(data){
    const createCard = document.createElement("div");
    createCard.innerHTML=`
    <div class="card draggable" draggable="true" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.sevierty}</h5>
      <p class="card-text">${data.description}</p>
      <p>Assigned to: ${data.assignedTo}</p>
      <button  class="btn btn-primary next">Next</button>
    </div>
  </div> <br>`;
  const cardContainer= document.getElementById("newDiv");
  cardContainer.append(createCard);   
  
const draggables= document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', ()=>{
      draggable.classList.add('dragging');
    })
    draggable.addEventListener('dragend', ()=>{
      draggable.classList.remove('dragging');
    })
  });

  containers.forEach(container => {
    container.addEventListener('dragover', () =>{
      const draggable = document.querySelector(".dragging");
      container.appendChild(draggable);
    })
  })

const nextButtons = document.querySelectorAll(".next");
const inprogress = document.getElementById("inDevelopmentDiv");
const QA = document.getElementById("qaDiv");
const done = document.getElementById("doneDiv");
const newD = document.getElementById("newDiv");


nextButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    let currentCard = button.parentElement.parentElement.parentElement;
    console.log(currentCard);
    if(currentCard.parentElement.id === 'newDiv'){
      inprogress.appendChild(currentCard);
    }
    else if(currentCard.parentElement.id === "inDevelopmentDiv"){
      QA.appendChild(currentCard);
    }
    else if(currentCard.parentElement.id === "qaDiv"){
      done.appendChild(currentCard);
    }
  })
})
  
}

