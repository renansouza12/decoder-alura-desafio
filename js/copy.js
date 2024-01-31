const btnCopy = document.querySelector(".btn_copy");
const textCopy = document.querySelector(".copy");
const textCopied = document.querySelector(".copied");
const result = document.querySelector(".result");

btnCopy.addEventListener("click",()=> copyText()); 

async function copyText(){
    try {
        await navigator.clipboard.writeText(result.value);
     
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
}
