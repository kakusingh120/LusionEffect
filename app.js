// document.addEventListener("DOMContentLoaded", function(){
//     const counter3 = document.querySelector(".counter3");

//     for(let i=0; i<2; i++){
//         for(let j=0; j<10; j++){
//             const div = document.createElement("div");
//             div.className = "num";
//             div.textContent = j;
//             counter3.appendChild(div);
//         }
//     }

//     const finaldiv = document.createElement("div");
//             finaldiv.className = "num";
//             finaldiv.textContent = "0";
//             counter3.appendChild(finaldiv);


//         function animate(counter,delay,duration = 0){
//             const numheight = counter.querySelector(".num").clientHeight;

//             const totaldistance = (counter.querySelectorAll(".num").length - 1) * numheight;

//             gsap.to(counter,{
//                 y:-totaldistance,
//                 duration:duration,
//                 delay:delay,
//                 ease: "power2.inOut",
//             })
//         }

//         animate(counter3 , 5);
//         animate(document.querySelector(".counter2"),6);
//         animate(document.querySelector(".counter1"),2,4)

//         gsap.to(".digit",{
//             top: "-150px",
//             stagger: {
//                 amount: 0.25,
//             },
//             delay:6,
//             duration:1,
//             ease: "power4.inOut",
//         })

//         gsap.from(".loader1",{
//             width:0,
//             delay:1.9,
//             duration: 6,
//             ease: "power2.inOut",
//         })

//         gsap.from(".loader2",{
//             width:0,
//             delay:1.9,
//             duration: 2,
//             ease: "power2.inOut",
//         })

//         gsap.to(".loader",{
//             background: "none",
//             delay:6,
//             duration: 0.1,
//         })

//         gsap.to(".loader1",{
//             rotate: 90,
//             y: -50,
//             delay:6,
//             duration: 0.5,
//         })

//         gsap.to(".loader2",{
//             x: -75,
//             y: 75,
//             duration: 0.5,
//         },
//            "<"
//        );


//        gsap.to(".loader",{
//             rotate: 45,
//             y: 500,
//             x: 2000,
//             duration: 1,
//             delay: 7,
//             ease: "power2.inOut"
//        })

//        gsap.to(".loading-screen",{
//             opacity: 0,
//             duration: 0.5,
//             delay: 0.7,
//             ease: "power1.inOut"
//       })

//       gsap.to("h1",0.5,{
//             delay: 7,
//             y: -80,
//             ease: "power4.inOut",
//             stagger: {
//                 amount: 0.1
//             },

//       })





// })










// document.addEventListener("DOMContentLoaded", function () {
//     const counter3 = document.querySelector(".counter3"); // Corrected 'Document' to 'document'

//     // Create divs for numbers 0-9 twice
//     for (let i = 0; i < 2; i++) {
//         for (let j = 0; j < 10; j++) {
//             const div = document.createElement("div");
//             div.className = "num";
//             div.textContent = j;
//             counter3.appendChild(div);
//         }
//     }

//     // Add the final "0" div
//     const finaldiv = document.createElement("div");
//     finaldiv.className = "num";
//     finaldiv.textContent = "0";
//     counter3.appendChild(finaldiv); // Corrected to append 'finaldiv' instead of 'div'

//     // Function to animate a counter
//     function animate(counter, delay, duration = 0) {
//         const numheight = counter.querySelector(".num").clientHeight;
//         const totaldistance = (counter.querySelectorAll(".num").length - 1) * numheight;

//         gsap.to(counter, {
//             y: -totaldistance,
//             duration: duration,
//             delay: delay,
//             ease: "power2.inOut",
//         });
//     }

//     // Animate the counters
//     animate(counter3, 5);
//     animate(document.querySelector(".counter2"), 6);
//     animate(document.querySelector(".counter1"), 4, 4);

//     // Animate digit elements
//     gsap.to(".digit", {
//         top: "-150px",
//         stagger: {
//             amount: 0.25,
//         },
//         delay: 6,
//         duration: 1,
//         ease: "power4.inOut",
//     });

//     // Loader animations
//     gsap.from(".loader1", {
//         width: 0,
//         delay: 1.9,
//         duration: 6,
//         ease: "power2.inOut",
//     });

//     gsap.from(".loader2", {
//         width: 0,
//         delay: 1.9,
//         duration: 2,
//         ease: "power2.inOut",
//     });

//     gsap.to(".loader", {
//         background: "none",
//         delay: 6,
//         duration: 0.1,
//     });

//     gsap.to(".loader1", {
//         rotate: 90,
//         y: -50,
//         delay: 6,
//         duration: 0.5,
//     });

//     gsap.to(".loader2", {
//         x: -75,
//         y: 75,
//         duration: 0.5,
//     }, "<");

//     gsap.to(".loader", {
//         rotate: 45,
//         y: 500,
//         x: 2000,
//         duration: 1,
//         delay: 7,
//         ease: "power2.inOut",
//     });

//     // Fade out the loading screen
//     gsap.to(".loading-screen", {
//         opacity: 0,
//         duration: 0.5,
//         delay: 7.7,
//         ease: "power1.inOut",
//     });

//     // Animate the h1 elements
//     gsap.to("h1", {
//         delay: 7,
//         y: -80,
//         ease: "power4.inOut",
//         stagger: {
//             amount: 0.1,
//         },
//         duration: 0.5,
//     });
// });










document.addEventListener("DOMContentLoaded", function () {
    const counter1 = document.querySelector(".counter1"); // Select the main counter container

    // Create divs for numbers 0 to 100
    for (let i = 0; i <= 100; i++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = i;
        counter1.appendChild(div);
    }

    // Function to animate the counter from 0 to 100
    function animateCounter(counter, duration = 8) {
        const numHeight = counter.querySelector(".num").clientHeight; // Get the height of a single number
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight; // Total scroll distance

        gsap.to(counter, {
            y: -totalDistance, // Scroll up to the last number (100)
            duration: duration, // Set animation duration (5 seconds in this case)
            ease: "power2.inOut",
        });
    }

    // Animate the counter1 to count from 0 to 100
    animateCounter(counter1, 6.5); // Change duration if needed

    // Loader animations (unchanged)
    gsap.from(".loader", {
        width: 0,
        delay: 1.6,
        duration: 6,
        ease: "power2.inOut",
    });

    // gsap.from(".loader1", {
    //     width: 0,
    //     delay: 1.6,
    //     duration: 6,
    //     ease: "power2.inOut",
    // });

    // gsap.from(".loader2", {
    //     width: 0,
    //     delay: 1.6,
    //     duration: 2,
    //     ease: "power2.inOut",
    // });

    // gsap.to(".loader", {
    //     background: "none",
    //     delay: 6,
    //     duration: 0.1,
    // });

    gsap.to(".loader,.cover-div", {
        background: "none",
        delay: 6,
        duration: 0.1,
    });


    gsap.to(".loader1", {
        rotate: 90,
        y: -45,
        delay: 6,
        duration: 0.5,
    });

    gsap.to(".loader2", {
        x: -80,
        y: 74,
        duration: 0.5,
    }, "<");

    gsap.to(".loader", {
        rotate: 45,
        scale: 20,
        y: 500,
        x: 800,
        duration: 2,
        delay: 7,
        ease: "power2.inOut",
    });

    // gsap.to(".loader1", {
    //     rotate: 45,
    //     scale: 12,
    //     duration: 1,
    //     delay: 7,
    //     ease: "power2.inOut",
    // });

    // gsap.to(".loader2", {
    //     rotate: 15,
    //     scale: 12,
    //     duration: 1,
    //     delay: 7,
    //     ease: "power2.inOut",
    // });

    // Fade out the loading screen
    gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        delay: 7.7,
        ease: "power1.inOut",
    });

    // Animate the h1 elements
    gsap.to("h1", {
        delay: 8,
        y: -80,
        ease: "power4.inOut",
        stagger: {
            amount: 0.1,
        },
        duration: 2,
    });
});
