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
//输入框
{
    let con=document.querySelector(".sousuo .shuru")
    con.onfocus=function(){
        if(con.value == "流量" )	{
            con.value = ""
        }
    }
    con.onblur = function() {
        if(con.value === "")
            con.value = "流量"
    }
}
//侧导航
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
                st -= 50;
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
//banner选项卡
{
        let btn = document.querySelectorAll('.banner .list li');
        let box = document.querySelectorAll('.banner .navbox');
        let big = document.querySelector('.banner');
        btn.forEach(function (ele, index) {
            ele.onmouseover = function () {
                for (let i = 0; i < box.length; i++) {
                    box[i].style.display='none';
                }
                // this.classList.add('active');
                box[index].style.display='block';
                n = index
            }
        });
        big.onmouseleave = function () {
            for (let i = 0; i < box.length; i++) {
                box[i].style.display='none';
            }
        }

}
//优惠专区
    {
        let next = document.querySelector(".btn-left");
        let prev = document.querySelector(".btn-right");
        let box = document.querySelector(".gundong ul li");
        let danping=document.querySelector(".gundong ul")
        let n=2
        let flag=true
        let dir="right"
        let st=setInterval(moveFu,2000)
        function moveFu(){
            if(dir==="right"){
                n++
            }else{
                n--
            }
            danping.style.marginLeft=-n*241+"px"
            danping.style.transition="all 1s"
        }
        danping.addEventListener("transitionend",function(){
            flag=true
            if(n===7){
                n=2
                danping.style.transition="none"
                danping.style.marginLeft="-482px"
            }
            if(n===0){
                n=5
                danping.style.transition="none"
                danping.style.marginLeft="-1205px"
            }
        })
        window.onblur=box.onmouseover=function(){
            clearInterval(st);
        }
        window.onfocus=box.onmouseout=function(){
            st=setInterval(moveFu,2000)
        }
        next.onclick=function(){
            if(flag){
                dir="right"
                flag=false
                moveFu();
            }
        }
        prev.onclick=function(){
            if(flag){
                dir="left"
                flag=false
                moveFu();
            }
        }
    }

//5F轮播
{
    let banner=document.querySelectorAll(".f5-bar li");
    let btn=document.querySelectorAll(".yuan li")
    let box=document.querySelector(".f5-bar")
    btn.forEach(function(ele,index){
        ele.onmouseover=()=>{
            for(let i=0;i<btn.length;i++){
                btn[i].classList.remove("active")
                banner[i].classList.remove("active")
            }
            btn[index].classList.add("active")
            banner[index].classList.add("active")
            n = index;
        }
    })
    let n = 0;
    function bannerdh(x) {
        if(x) {
            n--;
        } else {
            n++;
        }
        if(n === -1) {
            n = banner.length - 1
        }
        if(n == banner.length) {
            n = 0
        }
        for(let i = 0; i < btn.length; i++) {
            btn[i].classList.remove("active");
            banner[i].classList.remove("active");
        }
        btn[n].classList.add("active");
        banner[n].classList.add("active");
    }
    let st = setInterval(bannerdh, 3000);
    box.onmouseover = function() {
        clearInterval(st)
    };
    box.onmouseout = function() {
        st = setInterval(bannerdh, 3000);
    }
}
