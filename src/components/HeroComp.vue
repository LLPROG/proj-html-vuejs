<template>
  <div class="hero">
    <div class="container">
      <h1>
        Teck Forum!
      </h1>
      <p>
        Discuss all the latest tecnology news and trends
      </p>
      <button class="btn btn-blue">
        get avada now!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComp'
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.hero {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/img/home_slider_bg.jpg');
  background-position: center center;
  background-size: cover;
  padding-top: 12rem;
  color: white;

  h1 {
    font-size: 8em;
  }

  p {
    margin: 1rem 0;
  }
}

</style>
