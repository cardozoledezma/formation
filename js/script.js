document.getElementById("filter-btn").addEventListener("click", function (event) {
    document.getElementById("filter-list").classList.toggle("active")

})


const courseList = document.querySelectorAll("#course-list .course")

let filterList=[]


for (const course of courseList) {
   
    for (const info of course.dataset.subject.split(" ")) {
        if (!filterList.includes(info)){
             filterList.push(info)
        }
        
        
    } 
}

filterList.forEach(filter => {
  document.getElementById("filter-list").innerHTML += `<li><a class="filter" href="">${filter}</a></li>`   
});

console.log(filterList);

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
}})





//Search-bar keyword filter

function searchBar() {
    var input, filter, ul, li, a, txtValue;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("course-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
