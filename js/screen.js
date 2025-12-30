//Selector for mode event
const selectorMode = document.getElementById("mode-selector");
// Difficulty selector element
const selectorDifficulty = document.getElementById("difficult-selector");
const h3Difficulty = document.getElementById("h3-difficult");

//Selector event
selectorMode.addEventListener("change",()=>{
    const selectedMode = selectorMode.value;
    if(selectedMode === "PVM"){
        selectorDifficulty.classList.remove("extraselector");
        h3Difficulty.classList.remove("extraselector");
    }else{
        selectorDifficulty.classList.add("extraselector");
        h3Difficulty.classList.add("extraselector");
    }
}
);



