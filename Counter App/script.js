const plus_btn=document.querySelector(".plus-btn")
const minus_btn=document.querySelector(".minus-btn")
const count=document.querySelector(".count")
const steps=document.querySelector(".steps")
const reset_btn=document.querySelector(".reset-btn")

plus_btn.addEventListener("click",()=>{
    const countValue=parseInt(count.innerText)
    const steps_val=parseInt(steps.value)||1
    count.innerText=countValue+steps_val

})
minus_btn.addEventListener("click",()=>{
    const countValue=parseInt(count.innerText)
   
    const steps_val=parseInt(steps.value)||1
    count.innerText=countValue-steps_val
})
reset_btn.addEventListener("click",()=>{
    count.innerText=0
})