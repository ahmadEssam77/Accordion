var element = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function() {
        this.classList.toggle("active"); // toggle between adding and removing active class

        var content = this.nextElementSibling;  // next elemnt sibling from button is div
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

        if (content.style.maxHeight) {       // transition - animation
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
