// json
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
            manageCheckbox()
            sortByNewest()
            sortByOldest()
            getActiveFilter()

        });
} catch (error) {
    console.error("error" + error);
}

function displayCourses() {
    courses.forEach(course => {
       
        if (document.getElementById("course-list")){
            document.getElementById("course-list").innerHTML += `<li class="course"  data-id="${course.id}" data-subject="${course.subject.join(" ")}" data-date="${course.date}"><div class="div-course" > <a class="link" href="${course.link}" download="${course.name}"  ><img src="${fileImg[course.filetype]}" alt="" class="img-list"></img></a></div> <div class="course-content"><h2 class="course-title">${course.name}</h2><p class="course-description">${course.description}</p> <p class="course-description course-date">${course.date}</p></div></li>`;
        }
    });
};

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
    if (mainNav) {
        mainNav.classList.remove("display");
        document.body.classList.remove("overflow");
        mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
    }
}

if (mobileButton) {
    mobileButton.addEventListener("click", toggleNav);

    mainNav.addEventListener("click", function (event) {
        if (event.target.hasAttribute("href")) toggleNav();
    })
}
window.addEventListener("resize", function (event) {
    if (window.innerWidth >= 768) resetNav();
})


//Selection programs

let fi = document.getElementById("filter-btn");

if (fi) {
    fi.addEventListener("click", function (event) {
    document.getElementById("filter-list").classList.toggle("active");   
    })
};

const courseList = document.querySelectorAll("#course-list .course");


const filterList = []
function getFilterList() {
    courses.forEach(course => {
        course.subject.forEach(info => {
            if (!filterList.includes(info)) {
                filterList.push(info)
            };
        });
    });
    return filterList;
};

function displayFilterList(array) {
    array.forEach(filter => {
        if (document.getElementById("filter-list")){
        document.getElementById("filter-list").innerHTML +=`<li ><input class="input" type="checkbox" id="${filter}" name="${filter}"><label for="${filter}">${filter}</label></li>`
        };  
    });
};

function manageCheckbox() {
    for (const filter of document.querySelectorAll("#filter-list .input")) {
        filter.addEventListener("change", function (event){
            getCoursesById(getIdBySubject())
        }); 
    };
};

function getActiveFilter(){
    let activeFilter = []
    for (const checkbox of document.querySelectorAll("#filter-list .input:checked")) {
        
        
             if (!activeFilter.includes(`${checkbox.name}`)) {
                activeFilter.push(checkbox.name)
                
            }else{
                activeFilter.splice(activeFilter.indexOf(checkbox.name), 1)
            };
          
    };  
      return activeFilter;
};

function hasFilters(course,array) {
   let i=0;
   array.forEach(filter=>{
       if (course.subject.includes(filter)) {
        i++         
        };
   
    });
    return  (i++ == array.length);
};

function getIdBySubject(){
    return courses.filter(course=>hasFilters(course,getActiveFilter())).map(course=>course.id);
};

function getCoursesById(array) {
    document.querySelectorAll("#course-list .course").forEach(course=> {
        
        if (array.includes(parseInt(course.dataset.id))) {
            course.classList.remove("hide")
        }else {
            course.classList.add("hide")
        };
    });
};



// sort

const sortBtn = document.querySelector("#sort-btn");

if (sortBtn){
    sortBtn.addEventListener("click", function (event) {
        document.getElementById("sort-list").classList.toggle("active");

    });
};
  
function sortByNewest(){
const orderBtn = document.getElementById("croissant")
if (orderBtn){

      orderBtn.addEventListener("click", function (event){
        event.preventDefault()

    const sortedCourse = Array.from( document.querySelectorAll("#course-list .course")).sort(function (a, b) {
        const ma = new Date(a.dataset.date);
        const mb = new Date(b.dataset.date);
        return mb.getTime() - ma.getTime()
    });
     
    sortedCourse.forEach(course => {
        const d = new Date (course.dataset.date)

        document.getElementById("course-list").appendChild(course)

        });
    });
}};

function sortByOldest(){
const decroissantBtn = document.getElementById("decroissant");
if (decroissantBtn){
    decroissantBtn.addEventListener("click", function (event){
        event.preventDefault()
        const sortedCourse1 = Array.from(document.querySelectorAll("#course-list .course")).sort(function(a,b){
            const ma = new Date(a.dataset.date);
            const mb = new Date (b.dataset.date);
            return ma.getTime() - mb.getTime()
        });
         
        sortedCourse1.forEach(course => {
            const c = new Date (course.dataset.date);
            document.getElementById("course-list").appendChild(course);  
        });
        

    });
}};
   
   
 
//Search-bar keyword filter

function searchBar() {
    let input, filter, ul, li, a, txtValue;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("course-list");
    li = ul.getElementsByTagName("li");
    let keywords = [];
    keywords = filter.split(" ");
        
        keywords.forEach(keywords => {
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("h2")[0];
            txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(keywords) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
})};