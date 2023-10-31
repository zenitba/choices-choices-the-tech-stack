<template>
  <div>
    <div id="scroll-discover"></div>

    <!-- === TEAM === -->
    <section class="discover section" id="discover">
      <h2 class="section__title">Team</h2>

      <div class="discover__container container_team swiper-container">
        <div class="swiper-wrapper">
          <!-- MEES -->
          <div class="discover__card swiper-slide">
            <img src="~/assets/mees1.png" alt="foto Mees" class="discover__img" />
            <div class="discover__data">
              <h2 class="discover__title">Mees</h2>
              <h3 class="discover__description">m.vmilligen@spatwater.nl</h3>
            </div>
          </div>

          <!-- TIMO -->
          <div class="discover__card swiper-slide">
            <img src="~/assets/timo.png" alt="foto Timo" class="discover__img" />
            <div class="discover__data">
              <h2 class="discover__title">Timo</h2>
              <h3 class="discover__description">t.vdberg@spatwater.nl</h3>
            </div>
          </div>

          <!-- JESSE -->
          <div class="discover__card swiper-slide">
            <img src="~/assets/jesse.png" alt="foto Jesse" class="discover__img" />
            <div class="discover__data">
              <h2 class="discover__title">Jesse</h2>
              <h3 class="discover__description">j.schoenmakers@spatwater.nl</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // Je kunt hier eventueel logica toevoegen
};
</script>


<style scoped>
.swiper-wrapper{
  position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    transition-property: transform;
    box-sizing: content-box;
    justify-content: space-evenly;
}

.team {
  position: relative;
  background-color: white;
  padding-top: 1em;
  padding-bottom: 3em;
}

.discover {
  position: relative;
}

.discover__container {
  padding: 2em 4em 2em 4em;
  overflow: hidden;

}

.discover__card {
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 240px;
  overflow: var(--img-hidden);
  border-radius: 10px;
}

.discover__data {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

.discover__title,
.discover__description {
  color: white;
}

.team2__title {
  font-size: 2rem;
  color: var(--spat);
  font-weight: 600;
  text-align: center;
  padding-top: 4em;
}

.discover__description {
  display: block;
  font-size: .75rem;
}

.discover__img {
  transition: .3s;
  width: 100%;
}

.discover__img:hover {
  transform: scale(1.1);
}

.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: none;
}

@media screen and (min-width: 720px) {
  .team2 {
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 0 0.4em 4em 0.4em;
  }

  /* Andere stijlen voor grotere schermen hier */
}
</style>