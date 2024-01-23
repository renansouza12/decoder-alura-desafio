const btnMenu = document.querySelector(".menu");
const btnCopy = document.querySelector(".btn_copy");

const btnCopyText = document.querySelector(".btn_copy_txt");
const btnCopiedText = document.querySelector(".btn_copied_txt");

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
        btnCopyText.classList.add("copied");
        btnCopiedText.classList.add("active");
      } catch (err) {
        console.error('Failed to copy: ', err);
      }

}
