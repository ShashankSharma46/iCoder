submit.addEventListener("click", (e)=>{
    let name = nameInput.value;
    let email = emailInput.value;
    let massage = subject.value;
    localStorage.setItem("todo", JSON.stringify([name, email, massage]))
    console.log(e)
})