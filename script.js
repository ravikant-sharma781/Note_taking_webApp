const addBtn = document.querySelector(".addBtn");
const main = document.querySelector(".note");

const saveNotes = () =>{
    const notes = document.querySelectorAll(".main textarea");
    const data = [];
    notes.forEach(
        (mainbox) => {
            data.push(mainbox.value)
        }
    )

   localStorage.setItem("notes", JSON.stringify(data));
}

addBtn.addEventListener("click", function () {
  addNote();
});

const addNote = () => {
  const mainbox = document.createElement("div");
  mainbox.classList.add("main");
  mainbox.innerHTML = `<div class="box">
    <div><i class="save fa-solid fa-floppy-disk"></i></div>
    <div><i class="trash fa-sharp fa-solid fa-trash-can"></i></div>
</div>
<textarea>sdjflsdkjfh</textarea>`;

  mainbox.querySelector(".trash").addEventListener("click", function(){
    mainbox.remove();
  })

  mainbox.querySelector(".save").addEventListener("click", function(){
    saveNotes();
  })
  main.appendChild(mainbox);
  saveNotes();
};


