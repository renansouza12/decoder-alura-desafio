const btnMenu = document.querySelector(".menu");
const btnCopy = document.querySelector(".btn_copy");

const sideBarContainer = document.querySelector(".side_bar");
const result = document.querySelector(".result");


btnMenu.addEventListener("click",()=> sideBar());
btnCopy.addEventListener("click",()=> copyText()); 

function sideBar(){
    sideBarContainer.classList.toggle("enable");
}

async function copyText(){
    try {
        await navigator.clipboard.writeText(result.value);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    
}
