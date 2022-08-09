function viewMenu(){
    document.getElementById("menu_list").classList.toggle("show");
};

window.onclick = function(event) {
    if (!event.target.matches(".menu_button")) {
      var dropdowns = document.getElementsByClassName("menu_list_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
   }
};