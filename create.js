window.onload = function() {
    const changeText = document.querySelector("#change-text");
    
    changeText.addEventListener("click", function() {
      changeText.value = "Review Saved!";
    });
}