let replaced = document.querySelector('.btn')
let para =  document.getElementById('para')
let newpara = para.innerText.replace(/the/g , 'REPLACED')
let resetpara = newpara.replace(/replace/gi, 'the')

replaced.addEventListener('click',()=>{
    para.innerText = newpara
})

const resetString = ()=>{
 para.innerText = resetpara 
}



