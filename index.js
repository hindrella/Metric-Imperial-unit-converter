const inputVal=document.getElementById("input-val")
const Conval=document.getElementById("conval")
const Conval2=document.getElementById("conval2")
const Conval3=document.getElementById("conval3")
const  Btn=document.getElementById("btn")

Btn.addEventListener("click",function(){
         if(inputVal.value.length == 0){
    alert("put a value first")
        }
        
         else{
     const mf=(inputVal.value* 3.281).toFixed(3)
     const fm=((inputVal.value)*0.3).toFixed(3)
     const kp=((inputVal.value)*2.201).toFixed(3)
     const pk=((inputVal.value)*0.454).toFixed(3)
     const lg=((inputVal.value)*0.264).toFixed(3)
     const gl=((inputVal.value)*3.787).toFixed(3)
     let vc=`${inputVal.value} meters = ${mf} feet | ${inputVal.value} feet=${fm} meter`
     Conval.textContent =vc
     let vc2=`${inputVal.value} liter = ${lg} gallon | ${inputVal.value} gallon =${gl} liter`
     Conval2.textContent=vc2
     let vc3=`${inputVal.value} kilogram = ${kp} pound | ${inputVal.value} pound =${pk} kilogram`
    Conval3.textContent=vc3
       }
                                        })