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

let fi = document.getElementById("filter-btn");

if (fi) {
    fi.addEventListener("click", function (event) {
    document.getElementById("filter-list").classList.toggle("active")
   
})}


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










let ev = document.getElementById("everything");
if(ev){
    ev.addEventListener("click", function (event) {
        for (const course of courseList.children) {
            course.classList.remove("hide")
    

}})} 








 const sortBtn = document.querySelector("#sort-btn");
if (sortBtn){
    sortBtn.addEventListener("click", function (event) {
        document.getElementById("sort-list").classList.toggle("active")

    })
}
  

const orderBtn = document.getElementById("decroisant")
if (orderBtn){
    
      orderBtn.addEventListener("click", function (event){
        event.preventDefault()

    const sortedCourse = Array.from(courseList).sort(function (a, b) {
        const ma = new Date(a.dataset.date)
        const mb = new Date(b.dataset.date)
        return mb.getTime() - ma.getTime()
     })
     
        sortedCourse.forEach(course => {
            const d = new Date (course.dataset.date)
            console.log(d);
            document.getElementById("course-list").appendChild(course)
            // let display1 = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())
            // document.querySelector(".course-date").innerHTML = display1;

        
 
        });
      })
}

const decroisantBtn = document.getElementById("croissant");
if (decroisantBtn){
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
                // let display = (c.getFullYear() + "-" + (c.getMonth() + 1) + "-" + c.getDate())
                // document.querySelector(".course-date").innerHTML = display;

     
            });
        

        });
}
   
 
   
   
 
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

// burger

const mobileButton = document.getElementById("mobile-button");
const mainNav = document.getElementById("main-nav");
const mobileIcon = document.getElementById("mobile-icon");

function toggleBurger() {
    if (mobileIcon.classList.contains("fa-bars")) {
        mobileIcon.classList.replace("fa-bars", "fa-chevron-up");
    } else {
        mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
    }
}

function toggleNav(event) {
    if (window.innerWidth >= 768) return;
    mainNav.classList.toggle("display");
    document.body.classList.toggle("overflow");
    toggleBurger();
}

function resetNav() {
    mainNav.classList.remove("display");
    document.body.classList.remove("overflow");
    mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
}

if (mobileButton){  
mobileButton.addEventListener("click", toggleNav);

mainNav.addEventListener("click", function (event) {
    if (event.target.hasAttribute("href")) toggleNav();
})
}
window.addEventListener("resize", function (event) {
    if (window.innerWidth >= 768) resetNav();
})
