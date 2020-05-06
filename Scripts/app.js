(function (){
function Start()
{
    console.log("App started...");
    let firstHeading= document.getElementById("firstHeading");
    firstHeading.textContent = "Goodbye Cruel World";
    /*document.getElementById("firstHeading").textContent = "Goodbye Cruel World";*/
    firstHeading.style.fontWeight= "bold";
    
    let newH2= document.createElement("h2");
    newH2.setAttribute("class","Display-5");
    newH2.textContent="Second Heading";
    firstHeading.appendChild(newH2);
    newH2.addEventListener("click", function(){
        newH2.style.color = (newH2.style.color="black")? "blue":"black";
    });
    newH2.addEventListener("mouseover", function(){
        newH2.style.color="green";
    });
    newH2.addEventListener("mouseout",function(){
        newH2.style.color="black"});

    
}
window.addEventListener("load", Start);
})();