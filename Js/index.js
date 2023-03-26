const form = document.getElementById("listForm");



form.addEventListener("submit", function(event){
     event.preventDefault();
     let listFormData = new FormData(form);
     let listTabletRef = document.getElementById("listTable");
     let newListRowRef = listTabletRef.insertRow(1);
     
     let newListCellRef = newListRowRef.insertCell(0);
     newListCellRef.textContent = listFormData.get("typeName");

     newListCellRef = newListRowRef.insertCell(1);
     newListCellRef.textContent = listFormData.get("firstSurname");

     newListCellRef = newListRowRef.insertCell(2);
     newListCellRef.textContent = listFormData.get("secondSurname");

     newListCellRef = newListRowRef.insertCell(3);
     newListCellRef.textContent = listFormData.get("schoolGrade");  
     
     let newDeleteCell = newListRowRef.insertCell(4);
     let deleteButton = document.createElement("button");
     deleteButton.textContent = "Eliminar"
     newDeleteCell.appendChild(deleteButton)

     deleteButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove()
     }
     )
     
     form.reset();

 }
 )

