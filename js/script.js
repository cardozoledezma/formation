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