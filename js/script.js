document.getElementById("filter-btn").addEventListener("click", function (event) {
    document.getElementById("filter-list").classList.toggle("active")

})


const courseList = document.querySelectorAll("#course-list .course")

let filterList=[]


for (const course of courseList) {
   
    for (const info of course.dataset.info.split(" ")) {
        
        filterList.push(info)

    
        
        
    } 
}
function checkWord(info){

}
console.log(filterList);
//console.log( Object.values(document.querySelectorAll("#filter-list .filter")))

// Object.values(document.querySelectorAll("#filter-list .filter")).
//document.getElementById("filter-list").innerHTML += `<li><a class="filter" href="">${info}</a></li>` 

for (const filter of document.querySelectorAll(".filter")) {

    filter.addEventListener("click", function (event) {
        event.preventDefault()

        for (const course of courseList) {
            console.log(course, course.dataset.subject)
            if (filter.innerHTML != course.dataset.subject) {
                course.classList.add("hide")
            } if (filter.innerHTML == course.dataset.subject) {
                course.classList.remove("hide")
            }
        };

    })
}

document.getElementById("everything").addEventListener("click", function (event) {
    for (const course of courseList.children) {
        course.classList.remove("hide")
    }
})