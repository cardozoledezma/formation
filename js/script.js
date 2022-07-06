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
            if (!course.dataset.subject.split(" ").includes(filter.innerHTML)) {
                course.classList.add("hide")
            } if (course.dataset.subject.split(" ").includes(filter.innerHTML)) {
                course.classList.remove("hide")
            }
        };

    })
}

document.getElementById("everything").addEventListener("click", function (event) {
    for (const course of courseList.children) {
        course.classList.remove("hide")
}})








 const sortBtn = document.querySelector("#sort-btn");
    sortBtn.addEventListener("click", function(event){
        document.getElementById("sort-list").classList.toggle("active")         

    })

const orderBtn = document.getElementById("decroisant")
      orderBtn.addEventListener("click", function (event){
        event.preventDefault()

    const sortedCourse = Array.from(courseList).sort(function(a,b){
        const ma = new Date(a.dataset.date)
        const mb = new Date (b.dataset.date)
        return mb.getTime() - ma.getTime()
     })
     
        sortedCourse.forEach(course => {
            const d = new Date (course.dataset.date)
            console.log(d);
            document.getElementById("course-list").appendChild(course)
            let display1 = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())
            document.querySelector(".course-date").innerHTML = display1;

        
 
        });
    })
const decroisantBtn = document.getElementById("croissant")
    decroisantBtn.addEventListener("click", function (event){
        event.preventDefault()
        const sortedCourse1 = Array.from(courseList).sort(function(a,b){
            const ma = new Date(a.dataset.date)
            const mb = new Date (b.dataset.date)
            return ma.getTime() - mb.getTime()
         })
         
            sortedCourse1.forEach(course => {
                const c = new Date (course.dataset.date)
                console.log(c);
                document.getElementById("course-list").appendChild(course)
                let display = (c.getFullYear() + "-" + (c.getMonth() + 1) + "-" + c.getDate())
                document.querySelector(".course-date").innerHTML = display;

     
            });
        

        });
   
   
 
   
   
 
//Search-bar keyword filter

function searchBar() {
    var input, filter, ul, li, a, txtValue;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("course-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
