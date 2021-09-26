let pervScroll = window.pageYOffset;
// Section When I  Scroll 
let mySkills = document.querySelector('.skills')
    window.onscroll = function(){

    // Skill Offset Top الجزء الي فوق السيكشن تبعنا الي هوا (ماي سكيلز)
    let offsetY = mySkills.offsetTop;
    console.log(offsetY)

    // Skill outer Height هذي طول السيكشن الي بدك ياه (هذي حتجيب طول الماي سكيلز)
    let myHeightSet = mySkills.offsetHeight;

    // Window Height
    let window_Height = this.innerHeight;

    // Window ScrollTop الجزء الي بتعمل فيه السكرول
    let windowScrollTop = this.pageYOffset;

    let allSkill = document.querySelectorAll('.progress .skill-progress span');
    if(windowScrollTop > (offsetY + myHeightSet - window_Height - 350)){

        allSkill.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        });
    }
    if(windowScrollTop < (offsetY + myHeightSet - window_Height - 260)){

        allSkill.forEach(skill => {
            skill.style.width = 0;
        });
    }
}



let cardVeiw = document.querySelectorAll('.main-divaider .imgG img')
let imges = document.getElementById('asdasd')

let popupBox
cardVeiw.forEach((img , index) => {
    img.onclick = function(){
    // // Create The Popup Div 
        popupBox = document.createElement('div');
        popupBox.setAttribute('class' , 'popup-box')

        let popupImg = document.createElement('img')
        popupImg.className  = 'aliAna'
        
        popupBox.appendChild(popupImg)


        if(index == 0){
            open('https://mohammedsaid21.github.io/Website-Html-Css-and-JavaScript-/')
        }
        if(index == 1){
          open('https://mohammedsaid21.github.io/Some-Creatvie-WebSite-a-party/')
        }
        if(index == 2){
            open(img.src)
        }
        if(index == 3){
            open('https://mohammedsaid21.github.io/mohammed-Small-Por/')
        }        
        if(index == 4){
            open('img/Screenshot 2021-09-26 at 23-26-47 Mohammed Project.png')
            // open('img/New folder/Screenshot 2021-08-30 at 23-55-28 Docs.png.png')
        }
        if(index == 5){
            open(img.src)
        }

    }
});
