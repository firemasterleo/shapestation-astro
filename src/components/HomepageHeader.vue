<template>
    <div class="presection">
        <div class="section1">
            <div class="header">
                <router-link to="/">
                    <div class="logo" @click="handleItemClick">
                        <div  :class="{ 'ishidingheader': isHidingHeader && !isScrollingUp }">
                            <h1>The Digital Powerhouse</h1>
                            <h1>Shapestation</h1>

                        </div>
                    </div>
                </router-link>
                <nav class="nav-bar">
                    <ul class="nav-links">
                        <div class="nav-item">
                            <router-link to="/Work">
                                <p>Work</p>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/About">
                                <p>About</p>
                            </router-link>
                        </div>
                        <div class="nav-item">
                                <router-link to="/Services">
                                <p>Services</p>
                                </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/Contact">
                                <p>Contact</p>
                            </router-link>
                        </div>
                        <div class="nav-item">
                                <router-link to="/Blog">
                                <p>Blog</p>
                                 </router-link>
                        </div>


                    </ul>
                </nav>
                <div class="hamburger" :class="{ 'is-active': isActive }" @click="handleMenuToggle">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 @use '/src/sass/variables' as *;

.presection {
    // background-color: rgb(45, 45, 49);
    // border: yellow solid;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;


    .section1 {
        // margin-inline: auto;
        // border: solid green;
        width: 80rem;
        height: 100%;
        // padding-inline: 1rem;
        overflow: hidden;
        display: flex;
        position: relative;



        .header {
            

            // border: solid red;
            // width: 62rem;
            width: 100%;
            background-color: $primarycolorblack; /* Solid black background */

            // backdrop-filter: blur(20px);
            height: 3.2rem;
            // border-radius: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            -webkit-tap-highlight-color: transparent;
            position: relative;
            
            .logo {
                // borderight: solid 2px #7cae65;
                // border: solid red;
                padding-right: 1rem;
                height: 1.45rem;
                overflow: hidden;
                
                // letter-spacing: 6px;
                // font-size: 10px;
                // position: relative; /* Ensure proper layering */
                // background: transparent;
                top: 1.2rem;
                position: fixed;
                z-index: 25;
                mix-blend-mode: difference;
                color: $textcolorwhite;

                div {
                    // border: solid green;
                    transform: translateY(0);
                    transition: all 0.6s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;

                    h1 {
                        // z-index: 200;
                        // position: relative; /* Ensure it stays in front */
                        // z-index: 2; /* Ensures it stays in front */
                        cursor: pointer; /* Make it behave like a button */
                        font-size: 14px;
                        // font-variant-caps: all-small-caps; /* To make uppercase match lowercase in height */
                        line-height: 1.2; /* Adjust as needed */
                        font-weight: 400;
                        
                        
                    }
                    h1:active {
                        transform: scale(1.1);
                    }


                    &.ishidingheader {
                    transform: translateY(-1.7rem);
                    transition: all 0.6s ease;

                    }

                    :nth-child(2) {
                        font-size: 18px;
                    }
                }
                
                
                
            }

            .nav-bar {
                // border: solid red;
                // width: 100%;
                display: flex;
                justify-content: right;

                .nav-links {
                    display: flex;
                    gap: 3rem;
                    // width: 30rem;
                    min-width: fit-content;
                    overflow: hidden;
                    position: fixed;
                    z-index: 25;
                    mix-blend-mode: difference;
                    color: $textcolorwhite;
            top: 1.2rem;

                    .nav-item {
                        flex-shrink: 0;
                        position: relative;
                        // border : solid black;
                        // padding-inline: 0.2rem;
                        
                        
                        
                        
                        p {
                            -webkit-tap-highlight-color: transparent;
                            font-size: 14px;
                            font-weight: 600;
                            letter-spacing: 1px;
                            font-family: "Poppins", serif;
                            cursor: pointer;
                            color: $textcolorwhite;
                            // border-bottom: solid 1.5px;
                        }
                        p:active {
                            transform: scale(1.1);
                        }
                    }
                }
            }
            .hamburger {
                display: none;
            }
            
        }
    }
}

@media (max-width: 800px) {
    .presection {
        .section1 {
            width: 100%;
            .header {
                width: 100%;
                // border: solid red;

                .nav-bar {
                    display: none;
                }
                .hamburger {
                -webkit-tap-highlight-color: transparent;
                
                // border: solid red;
                position: relative;
                z-index: 25;
      
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                justify-content: center;
                background-color: none;
                align-items: flex-end;
                cursor: pointer;
      
                width: 6rem;
                padding-right:0.5rem ;
      
                height: 3rem;
                position: fixed;
                top: 0.5rem;
                right: 1rem;
                mix-blend-mode: difference;
                color: $textcolorwhite;
      
      
        
                .bar {
                    width: 19px;
                    height: 2px;
                    // background-color: rgba(255, 255, 255, 0.413);
                    background-color: rgb(255, 255, 255);
      
      
                    transition: transform 0.3s, opacity 0.3s;
                    
                  }
                &.is-active {
                    
                    
                    .bar:nth-child(1) {
                        // background-color: rgba(255, 255, 255, 0.413);
      
                        transform: translateY(6px) rotate(45deg);
                      }
                    .bar:nth-child(2) {
                        // background-color: rgba(255, 255, 255, 0.413);
      
                        opacity: 0; }
                    .bar:nth-child(3) {
                        // background-color: rgba(255, 255, 255, 0.413);
      
                        transform: translateY(-6px) rotate(-45deg);
                    }
      
                }
        }
            }
        }
    }
}
</style>


<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useToggleStore } from '../stores/toggleStore';
import { createPinia } from 'pinia';
const pinia = createPinia();


const toggleStore = useToggleStore(pinia);

const isActive = computed(() => toggleStore.isSidePanelOpen);  //ensures the hamburger icon's active state is in sync with the side panel's state.


const handleMenuToggle = () => {
  toggleStore.toggleSidePanel();
};

const handleItemClick = () => {
  if (toggleStore.isSidePanelOpen) {
    toggleStore.toggleSidePanel(); // used for buttons and  will toggle the side panel off
  }
};


const isAtTop = ref(true);
const isHidingHeader = ref(false);
const isScrollingUp = ref(false);

const translateThreshold = ref(0);
let lastScrollTop = 0;

const handleScroll = () => {
  if (typeof window === 'undefined') return;

  const currentScrollTop = window.scrollY;

  if (currentScrollTop > 0) {
    isAtTop.value = false;

    if (currentScrollTop > translateThreshold.value) {
      isHidingHeader.value = true;
    } 
    
    if (currentScrollTop < translateThreshold.value) {
      isHidingHeader.value = false;
    }
  } else {
    isAtTop.value = true;
    isHidingHeader.value = false;
  }

  lastScrollTop = currentScrollTop;
};

onMounted(() => {
  translateThreshold.value = window.innerHeight * 0.95; // Now safe to use window
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>