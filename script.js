let mobile_icon = document.getElementById("mobile_icon");
let main_manu = document.getElementById("main_manu");

mobile_icon.addEventListener("click", ()=> {
    main_manu.classList.toggle('hidden');
})