const menubtn = document.getElementById("menubtn");
const closebtn = document.getElementById("closebtn");
const sidebar = document.getElementById("sidebar");

menubtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    menubtn.style.display="none";
});

closebtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    menubtn.style.display="block";
});
