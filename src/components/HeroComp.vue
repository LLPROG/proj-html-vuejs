<template>
  <div class="hero">
    <div class="container">
      <h1>
        <span class="title"></span><span class="cursor">_</span>
      </h1>
      <div class="slide-in">
        <p>
          Discuss all the latest tecnology news and trends
        </p>
        <button class="btn btn-blue">
          get avada now! &#62;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default {
  name: 'HeroComp',
  data () {
  },
  mounted () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    gsap.to('.cursor', {
      y: 10,
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1
    })
    gsap.to('.title', {
      duration: 3,
      ease: 'steps(12)',
      delay: 1,
      text: {
        value: 'Tech Forum!'
      }
    })
    gsap.fromTo('.slide-in', { opacity: 0, x: -30 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: '.slide-in',
      delay: 4
    })
  }
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
  padding-top: 18rem;
  color: white;

  h1 {
    font-size: 8em;
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 4rem;
    font-size: 1.5em;
    color: rgb(168, 168, 168);
  }
}

</style>
