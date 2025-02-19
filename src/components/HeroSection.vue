<template>
    <div class="sectioncontainer">
      <div class="section">
        <div class="shape">
          <h1 ref="s" class="s">S</h1>
            <h1 ref="h" class="h">h</h1>
            <h1 ref="a" class="a">a</h1>
            <h1 ref="p" class="p">p</h1>
            <h1 ref="e" class="e">e</h1>
            <h1 ref="s2" class="s2">s</h1>
            <h1 ref="t" class="t">t</h1>
            <h1 ref="a2" class="a2">a</h1>
            <h1 ref="t2" class="t2">t</h1>
            <h1 ref="i" class="i">i</h1>
            <h1 ref="o" class="o">o</h1>
            <h1 ref="n" class="n">n</h1>

        </div>
        <div class="hero-text">
          <div>
            <p>Crafting Tommorrow's Experiences Today.</p>
          </div>
          <div>
            <p>Elevating Brands, One Script at a Time</p>
          </div>
          <div>
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>

          </div>
        </div>
      </div>
    </div>
  </template>
  

<script setup>
  import {onMounted} from 'vue';

  
  onMounted(async () => {
  const gsapModule = await import("gsap");
  const ScrollTriggerModule = await import("gsap/ScrollTrigger");

  const gsap = gsapModule.gsap;
  const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

  gsap.registerPlugin(ScrollTrigger);

    
    let shapeAnimation; // Store animation reference
    shapeAnimation = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" },  })
    .from(".s", { y: -90, duration:0.9}, ) // V enters
      .from(".h", { y: -90, duration:0.95 },0.1,) // O enters slightly before V finishes
      .from(".a", { y: -90, duration:0.98 }, 0.14,) // M enters slightly before O finishes
      .from(".p", { y: -90, duration:0.98 }, 0.14,) // M enters slightly before O finishes
      .from(".e", { y: -90, duration:0.98 }, 0.18,) // M enters slightly before O finishes
      .from(".s2", { y: -90, duration:1 }, 0.18) // M enters slightly before O finishes
      .from(".t", { y: -90, duration:1.2 }, 0.22) // M enters slightly before O finishes
      .from(".a2", { y: -90, duration:1.4 }, 0.24) // M enters slightly before O finishes
      .from(".t2", { y: -90, duration:1.6, }, 0.26) // M enters slightly before O finishes
      .from(".i", { y: -90, duration:1.8, }, 0.3) // M enters slightly before O finishes
      .from(".o", { y: -90, duration:2, }, 0.32) // M enters slightly before O finishes
      .from(".n", { y: -100, duration:2.2, }, 0.38) // M enters slightly before O finishes
      
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 800px)", () => {
        
        shapeAnimation = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } })
        .fromTo(".s", { y: "-30vh" }, { y: "0vh", duration: 0.9 }) 
        .fromTo(".h", { y: "-30vh" }, { y: "0vh", duration: 0.95 }, 0.1) 
        .fromTo(".a", { y: "-30vh" }, { y: "0vh", duration: 0.98 }, 0.14) 
        .fromTo(".p", { y: "-30vh" }, { y: "0vh", duration: 0.98 }, 0.14) 
        .fromTo(".e", { y: "-30vh" }, { y: "0vh", duration: 0.98 }, 0.18) 
          .fromTo(".s2", { y: "-30vh" }, { y: "0vh", duration: 1 }, 0.18) 
          .fromTo(".t", { y: "-30vh" }, { y: "0vh", duration: 1.2 }, 0.22) 
          .fromTo(".a2", { y: "-30vh" }, { y: "0vh", duration: 1.4 }, 0.24) 
          .fromTo(".t2", { y: "-30vh" }, { y: "0vh", duration: 1.6 }, 0.26) 
          .fromTo(".i", { y: "-30vh" }, { y: "0vh", duration: 1.8 }, 0.3) 
          .fromTo(".o", { y: "-30vh" }, { y: "0vh", duration: 2 }, 0.32) 
          .fromTo(".n", { y: "-30vh" }, { y: "0vh", duration: 2.2 }, 0.38);
      });
  });


</script>

<style lang="scss" scoped>
 @use '/src/sass/variables' as *;


 .sectioncontainer {
  // background-color: rgb(70, 96, 181); /* Solid black background */
  width: 100%;
  height: 82vh;
  display: flex;
  // border: solid red;


  .section {
  background-color: $primarycolorblack; /* Solid black background */
  // background-color: white;
    width: 80rem;
    height: 100%; /* Full viewport height */
    margin-inline: auto;
    // border: solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .shape {
        // border: solid blue;
        display: flex;
        align-items: center;
        margin-inline: auto;
        overflow: hidden;
        // border: solid red;

        
        h1 {
          // font-size: 13vw;
          font-size: 180px;
          line-height: 1;
          padding-bottom: 1.5rem;

          color: $textcolorwhite;
          text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.1);

        }
      }
      .hero-text {
        display: flex;
        gap: 5rem;
        // padding-inline: 2rem;
        margin-inline: 2rem;
        position: relative;
        // border: solid green;
        
        div {
          // flex:1;
          // border: solid red;
          // width: fit-content;
          
          p {
            color: $textcolorwhite;
            font-size: 14px;
            max-width: 10rem;
            min-width: 10rem;
            // border: solid blue;
  
          }
          
        }
        
        div:nth-child(3) {
          // border: solid red;
          width: 7rem;
          display: flex;
          justify-content: right;
          align-items: flex-end;
          position: absolute;
          right: 0;
          svg {
            rotate: 270deg;
            fill: $textcolorwhite;
            // border: solid blue;
            height: 1.4rem;
            width: 1.4rem;

          }
        }
      }
  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      height: 100%;
      // border: solid red;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-inline: 1rem;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      justify-content: space-between;

      .shape {
        // border: solid blue;
        display: flex;
        align-items: center;
        width: fit-content;
        margin-inline: auto;
        height: 4.2rem;
        overflow: hidden;
        
        h1 {
          // line-height: 5rem;
          font-size: 13vw;
          // border: solid;
          height: fit-content;
          color: $textcolorwhite;
          text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.1);

        }
      }
      .hero-text {
        display: flex;
        padding-left: 0rem;
        gap: 1rem;
        margin-inline: 0;

        
        div {
          // flex:1;
          // border: solid red;
          width: fit-content;
          
          p {
            color: $textcolorwhite;
            font-size: 14px;
            width: fit-content;
            // border: solid blue;
  
          }
          
        }
        
        div:nth-child(3) {
          // border: solid red;
          width: 7rem;
          display: flex;
          justify-content: right;
          align-items: flex-end;
          svg {
            rotate: 270deg;
            fill: $textcolorwhite;
            // border: solid blue;
            height: 1.4rem;
            width: 1.4rem;

          }
        }
      }
    }
  }
}
@media (max-width: 1200px) and (min-width: 800px) {
  .sectioncontainer {
    .section {

    }
  }
}
</style>