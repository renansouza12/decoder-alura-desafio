const btnCopy = document.querySelector(".btn_copy");
const textCopy = document.querySelector(".copy");
// const textCopied = document.querySelector(".copied");
const result = document.querySelector(".result");

btnCopy.addEventListener("click",()=> copyText()); 

async function copyText(){
  const resultValue = result.value;
    try {
        await navigator.clipboard.writeText(resultValue);
        btnCopy.classList.add('active');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
}
