//my website
//import '@auroratide/typewritten-text/lib/define.js'
//import {TypewrittenText} from 'lib/define.js'
$("#menu").click(function(){
  // $('.nave').classList.add('show-margin')
  document.querySelector('.nave').classList.toggle('show-margin')
});

$animatedtext = document.querySelector('.animated-text typewritten-text')
$name = document.querySelector('.name')
//$animatedtext.textContent = "I'm a UI designer"



   //function loopOverText(texts,seconds){
   //     let x = texts.length
   //     let y = -1
   //     setInterval(() => {
   //         y++;
   //         if(y === x){y = 0}
   //         $animatedtext.textContent = " " + texts[y]
   //     }, seconds);
   // }
   // loopOverText(port,2000)  
   

  var svgHandle = document.getElementsByClassName('svgHandle')
  for(let i = 0; i < svgHandle.length; i++){
    svgHandle[i].innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 90"><defs><style>.cls-1{fill:#f90;}</style></defs><title>Asset 2svg handle</title>
    <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M59.53,1.51,40.45,31.22l7.48,7.57L23.53,63.46a10,10,0,0,0-5.68-1.76H10.14A10.2,10.2,0,0,0,0,72v7.79A10.2,10.2,0,0,0,10.14,90h7.71A10.21,10.21,0,0,0,28,79.74V72a10.28,10.28,0,0,0-1.74-5.74l24.4-24.66,6.46,6.52L86.51,28.78,88,0Z"/>
    </g></g></svg>` 
  }

  //for svg title
  var svgTitle = document.getElementsByClassName('svgTitle')
  for(let i = 0; i < svgTitle.length; i++){
    svgTitle[i].innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 541 127.5"><defs><style>.cls-1{fill:#ff8d07;opacity:0.85;}</style></defs>
    <title>Asset 4svg title</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="541" height="79"/>
    <polygon class="cls-1" points="60.5 79 60.5 127.5 12 79 60.5 79"/></g></g></svg>` 
  }

  //type writer

  const projectWindow = document.querySelector('.project-window');
  const prevButton = document.querySelector('.project-roller button:first-of-type');
  const nextButton = document.querySelector('.project-roller button:last-of-type');

  const projectItem = document.getElementsByClassName('project-item')
  //projectItem[3].scrollLeft = '100'
  //projectItem[3].classList.add('project-item-right')
  
  //09156512878 
  var scrollDegree = 0;
  var clickTracker = 0;
  var counterLength = projectItem.length - 1
 projectItem[0].classList.add('project-item-inViewPort')
 
  function showNext (){
    var bond = projectItem[clickTracker].getBoundingClientRect();
    clickTracker++;
    var space = window.innerWidth - bond.right
    scrollDegree += bond.right - space
    console.log(scrollDegree, scrollDegree*2)
   if(clickTracker <= projectItem.length){
      projectWindow.scrollTo(scrollDegree,0) 
   }
   if(clickTracker === projectItem.length - 1){
    nextButton.style.display = 'none'
   }
   prevButton.style.display = 'inline'
  
  }
projectWindow.addEventListener('scroll',()=>{
  for(let i = 0; i < projectItem.length; i++){
    if(CheckViewPort(projectItem[i])){
      projectItem[i].classList.add('project-item-inViewPort')
    }else{
      projectItem[i].classList.remove('project-item-inViewPort')
    }
    var bond = projectItem[clickTracker].getBoundingClientRect();
  }
})

function showPrev(){
  var bond = projectItem[clickTracker].getBoundingClientRect();
  clickTracker--;
  var space = document.documentElement.clientWidth - bond.left
  scrollDegree += bond.left - space
  console.log(scrollDegree)
  // if(clickTracker >= 1){
      projectWindow.scrollTo(scrollDegree,0) 
   // }
   if(clickTracker === 0){
    prevButton.style.display = 'none'
   }
  nextButton.style.display = 'inline'
  
}



function CheckViewPort(elem){
  var bounding = elem.getBoundingClientRect();
  return(
    bounding.top >= 0 && bounding.left >= 3 &&
   //bounding.botttom <= (window.innerHeight || document.documentElement.clientHeight) && 
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//pre oad images
// Array to store image URLs
const imageUrls = [
  './pics/David 001.png',
  './pics/David 002.png',
  './pics/David 003.png',
  "./pics/pics wf/001.jpg",
  "./pics/pics wf/002.jpg",
  "./pics/pics wf/003.jpg",
  "./pics/pics wf/004.jpg",
  "./pics/pics wf/005.jpg",
  "./pics/pics wf/006.jpg",
  "./pics/pics wf/007.jpg",
  "./pics/pics wf/008.jpg",
  "./pics/pics wf/009.jpg",
  "./pics/pics wf/010.jpg"
];

// Preload images
function preloadImages() {
  for (let i = 0; i < imageUrls.length; i++) {
    const img = new Image();
    img.src = imageUrls[i];
  }
}

// Call the preloadImages function
preloadImages();

//progressive
var progress = document.querySelector('.progress');
//carousel
const slide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const caption =  document.querySelector('.carousel-caption');

let captionText = [
  'Media Team Lagos',
  'Media Team DLCF UNILAG',
  'Gift presentation to my predecessor, Media Head and finalist',
  "And that's me, Media Head DLCF UNILAG",
  'Presentation to one of the finalists (to the left), most reliable shoulder on the team',
  'Extreme left: former Media Head, former fellowship GC, Tech mentor and DevOps Engineer, finalist',
  'Extreme left: A seasoned Graphic designer, next to him, A media guru!',
  'Extreme right: Boss lady, mummy of all, Team financial and welfare sec.',
  'Center: Scholary Kid on the team, moving to Idi Araba, Extreme right: Most quiet Audio Engineer', 
  'To her right: an Innovative Media mind, To her left: A mathematician, media transport manager and more',
]
let captionCount = 0;
let position = 0;
const slideWidth = slide.clientWidth;
const slideCount = slide.childElementCount;
let slideIndicator = slideCount - 1;

//for progress bar
let progressRatio = 100 / slideCount;
let progressStep = 1;
progress.style.width = progressRatio * progressStep + "%";
console.log(progress.style.width, slideCount)
prevBtn.style.display = "none"
prevBtn.addEventListener('click', () => {

  position += slideWidth;
  position = Math.min(position, 0);
  slide.style.transform = `translateX(${position}px)`;
  slideIndicator++
  nextBtn.style.display = "block";
  if(slideIndicator === slideCount - 1){
    prevBtn.style.display = "none"
  }
  captionCount--;
caption.textContent = captionText[captionCount];
//progress
progressStep--;
progress.style.width = progressRatio * progressStep + "%";

}); 

nextBtn.addEventListener('click', () => {
position -= slideWidth;
position = Math.max(position, -slideWidth * (slideCount - 1));
slide.style.transform = `translateX(${position}px)`;
slideIndicator--
if(slideIndicator === 0){
  nextBtn.style.display = "none";
}
prevBtn.style.display = "block";
captionCount++;
caption.textContent = captionText[captionCount];


progressStep++;
progress.style.width = progressRatio * progressStep + "%";

});

    
function updateProgressBar() {
  const progressBar = document.querySelectorAll('.progress-course-bar');
  for(let i = 0; i < progressBar.length; i++){

 let progress =  progressBar[i].dataset.progress
  const angle = (360 * progress) / 100;
  progressBar[i].style.backgroundImage = `linear-gradient(${90 + angle}deg, transparent 50%, #e19a0c 50%), linear-gradient(90deg, #e19a0c 50%, transparent 50%)`;
}
}

const barValue = document.querySelectorAll('.barValue');
for(let i = 0; i < barValue.length; i++){
  //barValue[]
}
updateProgressBar();

    
  


