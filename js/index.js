{
    let box1=document.querySelectorAll(".lunbo li");
    let box2=document.querySelectorAll(".dian li");
    let box=document.querySelector(".banner");
    console.log(box)
    let left=document.querySelector(".banner .left");
    let right=document.querySelector(".banner .right");
    box2.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<box2.length;i++){
                box2[i].classList.remove("one");
                box1[i].classList.remove("one")
            }
            this.classList.add("one");
            box1[index].classList.add("one");
        }
    });
    let n=0;
    function bannerfn(dir="r") {
        if(dir==="r"){
            n++;
        }else if (dir==="l"){
            n--;
        }
        if(n===box1.length){
            n=0;
        }
        if(n===-1){
            n=box1.length-1;
        }
        for(let i=0;i<box2.length;i++){
            box2[i].classList.remove("one");
            box1[i].classList.remove("one");
        }
        box2[n].classList.add("one");
        box1[n].classList.add("one");
    }
    let st=setInterval(bannerfn,5000);
    box.onmouseover=function () {
        clearInterval(st);
    };
    box.onmouseout=function () {
        st=setInterval(bannerfn,5000)
    };
    let flag=true;
    right.onclick=function () {
        if(flag){
            flag=false;
            bannerfn();
        }
    };
    left.onclick=function () {
        if(flag) {
            flag=false;
            bannerfn("l");
        }
    };
    box1.forEach(function (ele,index) {
        ele.addEventListener("transitionend", function(){
                flag=true;
            })
    })
}
{
    {
        let topbar = document.querySelector('.header');
        let floors = document.querySelectorAll(".floor");
        let nav = document.querySelector(".cedaohang");
        let navs = document.querySelectorAll(".cedaohang li");
        let toptop = document.querySelector(".back");
        let spans=document.querySelectorAll(".cedaohang span");
        let flag = true;
        console.log(floors);
        window.onscroll = function() {
            if(flag) {
                let st = document.documentElement.scrollTop;
                if(st > 550) {
                    topbar.style.display = 'block'
                } else {
                    topbar.style.display = 'none'
                }
                if(st > 650) {
                    nav.style.display = "block"
                } else {
                    nav.style.display = "none"
                }
                floors.forEach(function(ele, index) {
                    if(st < floors[0].offsetTop) {
                        for(let i = 0; i < navs.length; i++) {
                            navs[i].classList.remove("active")
                        }
                        navs[0].classList.add("active")
                    }
                    if(st >= ele.offsetTop-60) {
                        for(let i = 0; i <navs.length; i++) {
                            navs[i].classList.remove("active");
                            spans[i].classList.remove("active")
                        }
                        navs[index].classList.add("active");
                        spans[index].classList.add("active")
                    }
                })
            }
        };
        navs.forEach(function(ele, index) {
            ele.onclick = function() {
                flag = false;
                let st = floors[index].offsetTop;
                // st -= 60;
                let now = document.documentElement.scrollTop;
                let speed = (st - now) * 30 / 300;
                let time = 0;
                let t = setInterval(function() {
                    now += speed;
                    time += 30;
                    if(time === 300) {
                        clearInterval(t);
                        now = st;
                        flag = true;
                    }
                    document.documentElement.scrollTop = now;
                }, 30)
            }
        });
        toptop.onclick = function() {
            let st = document.documentElement.scrollTop;
            let speed = st * 30 / 500;
            let t = setInterval(function() {
                st -= speed;
                if(st <= 0) {
                    st = 0;
                    clearInterval(t)
                }
                document.documentElement.scrollTop = st
            }, 30)
        }
    }
}