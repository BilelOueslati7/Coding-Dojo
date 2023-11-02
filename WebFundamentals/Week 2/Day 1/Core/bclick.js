console.log("linked");

function changeMe(element) {
    if(element.innerText == "Login") {
        element.innerText  = "Logout"
        element.style.backgroundColor = "red"
    } else{
        element.innerText = "Login"
        element.style.backgroundColor = "blue"
    }
}
function hide(element){
 element.remove()
}

function alertMe(){
    alert(`Ninja was liked`)
}