let courses;
let fileImg = {
    pdf: "img/pdf.png",
    javascript: "img/js.png"
}
try {
    fetch("datas/courses.json")
        .then(response => response.json())
        .then(json => {
            courses = json;
            displayCourses()
            displayFilterList(getFilterList())
            manageClick()
            

        });
} catch (error) {
    console.error("error" + error);
}

function displayCourses() {
    courses.forEach(course => {
        document.getElementById("course-list").innerHTML += `<li class="course"  data-id="${course.id}" data-subject="${course.subject.join(" ")}" data-date="${course.date}"><div class="div-course" > <a class="link" href="${course.link}" download="${course.name}"  ><img src="${fileImg[course.filetype]}" alt="" class="img-list"></img></a></div> <div class="course-content"><h2 class="course-title">${course.name}</h2><p class="course-description">${course.description}</p></div></li>`
    })
}




//


//Selection programs
document.getElementById("filter-btn").addEventListener("click", function (event) {
    document.getElementById("filter-list").classList.toggle("active")

})


const courseList = document.querySelectorAll("#course-list .course")


const filterList = []
function getFilterList() {
    courses.forEach(course => {
        course.subject.forEach(info => {
            if (!filterList.includes(info)) {
                filterList.push(info)
            }
        })
    })
    return filterList
}

function displayFilterList(array) {
    array.forEach(filter => {
        document.getElementById("filter-list").innerHTML += `<li><a class="filter" href="">${filter}</a></li>`
    });

}

function manageClick() {
    for (const filter of document.querySelectorAll(".filter")) {
        filter.addEventListener("click", function (event) {
            event.preventDefault()  
            getCoursesById(getIdBySubject(this.innerHTML))
            console.log(this.innerHTML)
        })
       
    }
}
function getIdBySubject(filter){
    return courses.filter(course=>course.subject.includes(filter)).map(course=>course.id)
}

function getCoursesById(array) {
    console.log(array)
    courseList.forEach(course=> {
        console.log(course)
        if (array.includes(parseInt(course.dataset.id))) {
            course.classList.remove("hide")
        }else {
            course.classList.add("hide")
        }
    });
}









document.getElementById("everything").addEventListener("click", function (event) {
    for (const course of courseList.children) {
        course.classList.remove("hide")
    }
})








const sortBtn = document.querySelector("#sort-btn");
sortBtn.addEventListener("click", function (event) {
    document.getElementById("sort-list").classList.toggle("active")

})

const orderBtn = document.getElementById("croissant")
orderBtn.addEventListener("click", function (event) {
    event.preventDefault()

    const sortedCourse = Array.from(courseList).sort(function (a, b) {
        const ma = new Date(a.dataset.date)
        const mb = new Date(b.dataset.date)
        return mb.getTime() - ma.getTime()
    })

    sortedCourse.forEach(course => {
        const d = new Date(course.dataset.date)
        console.log(d);
        document.getElementById("course-list").appendChild(course)


    });
})
const decroisantBtn = document.getElementById("decroisant")
decroisantBtn.addEventListener("click", function (event) {
    event.preventDefault()
    const sortedCourse1 = Array.from(courseList).sort(function (a, b) {
        const ma = new Date(a.dataset.date)
        const mb = new Date(b.dataset.date)
        return ma.getTime() - mb.getTime()
    })

    sortedCourse1.forEach(course => {
        const c = new Date(course.dataset.date)
        console.log(c);
        document.getElementById("course-list").appendChild(course)


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
