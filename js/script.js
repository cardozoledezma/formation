document.getElementById("filter-btn").addEventListener("click",function (event){
    document.getElementById("filter-list").classList.toggle("active")

})
const courseList = document.getElementById("course-list")

for (const filter of document.querySelectorAll(".filter")) {
   
  filter.addEventListener("click",function (event){  
    event.preventDefault()

    for (const course of courseList.children) {
        console.log(course,course.dataset.subject)
        if (filter.innerHTML != course.dataset.subject) {
            course.classList.add("hide")
         } if (filter.innerHTML == course.dataset.subject){
             course.classList.remove("hide")
        }
    };
    
})}

document.getElementById("everything").addEventListener("click",function (event){
    for (const course of courseList.children) {
        course.classList.remove("hide")
}})






// const searchInput = document.querySelector("[data-search]");
// let subjects = [];

// searchInput.addEventListener("input", e => {
//     const value = e.target.value
//     console.log(value)
// })


// JavaScript code
function searchSubject() {
    let input = document.getElementById('search-bar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('course');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="course-list";                 
        }
    }
}