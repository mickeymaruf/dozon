document.getElementById("change-theme-btn").addEventListener('click', ()=>{
    const htmlElement = document.getElementsByTagName("html")[0];
    if(htmlElement.getAttribute("data-theme") == "dark"){
        htmlElement.setAttribute("data-theme", "light");
        return;
    }
    htmlElement.setAttribute("data-theme", "dark");
})