/*==================================================
    SPANISH WITH ELISA
    main.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        Smooth Scroll
    =========================================*/

    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });




    /*=========================================
        Sticky Header Shadow
    =========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 40){

            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.08)";

        }

        else{

            header.style.boxShadow = "none";

        }

    });




    /*=========================================
        Fade In Animation
    =========================================*/

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:.15
    });


    document.querySelectorAll(
        ".card,.review,.students-grid div,.why li,.about,.social,.contact"
    ).forEach(el=>{

        el.classList.add("fade-up");

        observer.observe(el);

    });




    /*=========================================
        Back To Top Button
    =========================================*/

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "backToTop";

    document.body.appendChild(topButton);

    topButton.style.cssText = `
        position:fixed;
        right:30px;
        bottom:30px;
        width:55px;
        height:55px;
        border:none;
        border-radius:50%;
        background:#C62828;
        color:white;
        font-size:22px;
        cursor:pointer;
        display:none;
        z-index:999;
        box-shadow:0 8px 20px rgba(0,0,0,.2);
        transition:.3s;
    `;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            topButton.style.display = "block";

        }

        else{

            topButton.style.display = "none";

        }

    });

    topButton.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };




    /*=========================================
        Simple Testimonial Slider
    =========================================*/

    const reviews = document.querySelectorAll(".review");

    let reviewIndex = 0;

    if(reviews.length > 0){

        reviews.forEach((review,i)=>{

            if(i!==0){

                review.style.display="none";

            }

        });

        setInterval(()=>{

            reviews[reviewIndex].style.display="none";

            reviewIndex++;

            if(reviewIndex>=reviews.length){

                reviewIndex=0;

            }

            reviews[reviewIndex].style.display="block";

        },5000);

    }




    /*=========================================
        Mobile Menu
    =========================================*/

    const menuButton = document.querySelector(".menu-toggle");

    const nav = document.querySelector("nav");

    if(menuButton){

        menuButton.addEventListener("click",()=>{

            nav.classList.toggle("mobile-open");

        });

    }

});