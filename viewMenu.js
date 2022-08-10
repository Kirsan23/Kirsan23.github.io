function viewMenu(){
    document.getElementById("menu_list").classList.toggle("show");
    document.getElementById("menu_button").classList.toggle("icon-Icon-12");
    document.getElementById("menu_button").classList.toggle("icon-Icon-11");
};

window.onclick = function(event) {
    if (!event.target.matches(".menu_button")) {
      var dropdowns = document.getElementsByClassName("menu_list_content");
      var test = document.getElementsByClassName("menu_button");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var test2 = test[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
        if (test2.classList.contains("icon-Icon-12")) {
          test2.classList.remove("icon-Icon-12");
          test2.classList.add("icon-Icon-11");
        }
      }
   }
};

// window.onclick = function(event) {
//   if (!event.target.matches(".menu_button")) {
//     var dropdowns = document.getElementsById("menu_list");
//     var test = document.getElementsById("menu_button");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       var test2 = test[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//       if (test2.classList.contains("icon-Icon-12")) {
//         test2.classList.remove("icon-Icon-12");
//         test2.classList.add("icon-Icon-11");
//       }
//     }
//  }
// };