// For_Navbar
let navToggler = document.querySelector(".nav-toggler");
// console.log(navToggler);
navToggler.addEventListener("click", togggleNav);

function togggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-items")){
        togggleNav();
    }
})

// Sticky_Header
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 70){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
})

// For PackageSearch
let allBox = document.querySelectorAll(".package-tab-content");
let AllBtn = document.querySelectorAll(".package-tabs button");
console.log(allBox)
AllBtn.forEach((button)=>{
  button.addEventListener("click", (e) => {
  console.log(e.target);
  let category = e.target.getAttribute("data-target");
  console.log(category);
  if(category=='all'){
    showBox(allBox);
  }
  else{
  let filterBoxes=[];
  allBox.forEach((box) => {
    // console.log(box);
    hideBoxes();
    if(box.getAttribute("data-category")==category)
    {
        filterBoxes.push(box)
    }
    showBox(filterBoxes);
  });
}
console.log(filterBoxes)
});
})

function hideBoxes() {
  allBox.forEach((box) => {
    box.classList.add("hide");
  });
}
function showBox(boxList){

    boxList.forEach((box)=>{
        box.classList.remove('hide');
    })
}
let pkgTabs = document.querySelector(".package-tabs");
// console.log(menuTabs);
pkgTabs.addEventListener("click", function(e){
  if(e.target.classList.contains("package-tab-item") && !e.target.classList.contains("active")){
    let target = e.target.getAttribute("data-target");
    pkgTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }
});