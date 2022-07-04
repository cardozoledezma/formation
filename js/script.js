const courseList = document.querySelectorAll("#course-list .course")
 
document.getElementById("filter-btn").addEventListener("click",function (event){
    document.getElementById("filter-list").classList.toggle("active")
   
})
 
for (const filter of document.querySelectorAll(".filter")) {
   
    filter.addEventListener("click",function (event){  
        event.preventDefault()
       
    for (const course of courseList) {
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
 
 








 const sortBtn = document.querySelector("#sort-btn");
    sortBtn.addEventListener("click", function(event){
        document.getElementById("sort-list").classList.toggle("active")

                
           

    })

      const orderBtn = document.getElementById("croissant")
      orderBtn.addEventListener("click", function (event){

      

     
    const sortedCourse = Array.from(courseList).sort(function(a,b){
        const ma = new Date(a.dataset.date)
        const mb = new Date (b.dataset.date)
        return mb.getTime() - ma.getTime()
     })
     
        sortedCourse.forEach(course => {
            const d = new Date (course.dataset.date)
            console.log(d);
            document.getElementById("course-list").appendChild(course)
           
 
        });
    })



    const decroisantBtn = document.getElementById("decroisant")
    decroisantBtn.addEventListener("click", function (event){

        const sortedCourse1 = Array.from(courseList).sort(function(a,b){
            const ma = new Date(a.dataset.date)
            const mb = new Date (b.dataset.date)
            return ma.getTime() - mb.getTime()
         })
         
            sortedCourse1.forEach(course => {
                const c = new Date (course.dataset.date)
                console.log(c);
                document.getElementById("course-list").appendChild(course)
               
     
            });
    
        });
   
   
 
   
   
 