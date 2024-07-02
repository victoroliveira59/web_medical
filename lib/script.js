//Pagina de formulário

// ---------- VALIDAÇÃO DO NAME ---------- //
const usernameInput = document.getElementById("name");
const usernameLabel = document.querySelector("label[for='name']");
const usernameHelper = document.getElementById("name-helper");
mostrarPopup(usernameInput, usernameLabel)

// ---------- VALIDAÇÃO DO EMAIL ---------- //
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector("label[for='email']");
const emailHelper = document.getElementById("email-helper");
mostrarPopup(emailInput, emailLabel)


function mostrarPopup(input, label){

    input.addEventListener("focus", ()=> {
        label.classList.add("required-popup")
    })

    input.addEventListener("blur", ()=> {
        label.classList.remove("required-popup")
    })
}


function dadosCorretos(input, helper){
    input.classList.add("correct")
    helper.classList.remove("visible")
}

function dadosIncorretos(input, helper){
    input.classList.remove("correct")
    input.classList.add("error")
    helper.classList.add("visible")
    helper.innerText = "Nome de usuário muito curto."
}


usernameInput.addEventListener("change", (e)=> {
    const valorInput = e.target.value

    if(valorInput.length >= 3){
        dadosCorretos(usernameInput, usernameHelper);
    } else{
        dadosIncorretos(usernameInput, usernameHelper);
    }
})

emailInput.addEventListener("change", (e)=> {
    const valorInput = e.target.value

    if(valorInput.includes("@") && valorInput.includes(".com")) {
        dadosCorretos(emailInput, emailHelper);
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
    }else {
        dadosIncorretos(emailInput, emailHelper);
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "Email deve conter @ e .com"
    }
})