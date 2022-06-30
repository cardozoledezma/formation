document.getElementById("filter-btn").addEventListener("click",function (event){
    document.getElementById("filter-list").classList.toggle("active")

})

for (const filter of document.querySelectorAll(".filter")) {
  filter.addEventListener("click",function (event){  
    const courseList = document.getElementById("course-list")
    for (const course of courseList.children) {
        if (filter.innerHTML != course.dataset.subject) {
            course.classList.add("hide")
        } if (filter.innerHTML != course.dataset.subject){
            course.classList.remove("hide")
        }
    };
    
})}

