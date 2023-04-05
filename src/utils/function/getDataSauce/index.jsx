export function getDataSauce(){
    let dataSauce = {
        name: document.querySelector("formSauceInputName").value,
        manufacturer: document.querySelector("formSauceInputManufacturer").value,
        heat: document.querySelector("formSauceInputHeat").value,
        description: document.querySelector("formSauceInputDescription").value,
        pepper: document.querySelector("formSauceInputPepper").value,
    }
    console.log(dataSauce)
}