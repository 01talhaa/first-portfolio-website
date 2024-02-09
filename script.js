const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSection = document.querySelectorAll('.main-content');

function pageTrans() {
    //button click active class 
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            
            // Check if the element with class 'active-btn' exists
            if (currentBtn.length > 0) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            }
            
            this.className += ' active-btn'; // Add space before 'active-btn' to separate classes
        });
    }

    //section active class
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].addEventListener("click", function(dets) {
            const id = dets.target.dataset.id;
            if (id) {
                //remove selected from the other patterns
                secBtns.forEach((btn) =>{
                    btn.classList.remove('active');
                });
                dets.target.classList.add('active')

                //hide other sections
                sections.forEach((sections)=>{
                    sections.classList.remove('active')
                })
                const element = document.getElementById(id);
                element.classList.add('active')
            }
        });
    }

    //toggle theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode")
    })
}

pageTrans();

