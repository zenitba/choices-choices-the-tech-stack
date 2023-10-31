<template>
  <main>
      <div>
        <section class="team section">
          <h2 class="team-title">Team</h2>
  
          <div class="team-container swiper-container">
            <div class="swiper-wrapper">
              <!--==================== MEES ====================-->
              <div class="team-card swiper-slide">
                <img src="~/assets/mees1.png" alt="foto Mees" class="team-img" />
                <div class="team-text">
                  <h2 class="team-name">Mees</h2>
                  <h3 class="team-mail">m.vmilligen@spatwater.nl</h3>
                </div>
              </div>
  
              <!--==================== JESSE ====================-->
              <div class="team-card swiper-slide">
                <img src="~/assets/timo.png" alt="foto Mees" class="team-img" />
                <div class="team-text">
                  <h2 class="team-name">Timo</h2>
                  <h3 class="team-mail">t.vdberg@spatwater.nl</h3>
                </div>
              </div>
  
              <!--==================== TIMO ====================-->
              <div class="team-card swiper-slide">
                <img src="~/assets/jesse.png" alt="foto Mees" class="team-img" />
                <div class="team-text">
                  <h2 class="team-name">Jesse</h2>
                  <h3 class="team-mail">j.schoenmakers@spatwater.nl</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  </main>

  </template>
  
  <script>
  export default {
    mounted() {
      let swiper = new Swiper(".team-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 32,
        coverflowEffect: {
          rotate: 0,
        },
      });
    },
  };
  </script>
  
  <style scoped>
  section {
    height: 100rem;
    background: rgb(255, 6, 6);
    width:100rem;
  }
  
  .team-title {
    padding: 4rem 2.5rem;
    color: var(--spat);
    
  }
  
  .team {
    position: relative;
    background-color: white;
    height: 100vh;
    padding-top: 6em;
    padding-bottom: 3em;
  }
  
  .team-container {
    padding: 2em 4em 2em 4em;
    overflow: hidden;
  }
  
  .team-card {
    width: 300px;
    height: 240px;
    border-radius: 10px;
  }
  
  .team-text {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  
  .team-name,
  .team-mail {
    color: white;
  }
  
  .team-mail {
    display: block;
    font-size: 0.75rem;
  }
  
  .team-img {
    transition: 0.3s;
    width: 100%;
  }
  
  .team-img:hover {
    transform: scale(1.1);
  }
  
  @media screen and (min-width: 720px) {
    .team {
      display: none;
    }
  
    h2 {
      font-size: 1rem;
      padding: 4rem 2rem;
    }
  }
  </style>
  