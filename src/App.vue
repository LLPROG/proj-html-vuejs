<template>
  <div id="app">
    <header-comp />
    <hero-comp />
    <news-comp />
    <forum-comp />
    <comunity-comp />
    <footer-comp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import HeroComp from './components/HeroComp.vue'
import NewsComp from './components/NewsComp.vue'
import ForumComp from './components/ForumComp.vue'
import ComunityComp from './components/ComunityComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    HeroComp,
    NewsComp,
    ForumComp,
    ComunityComp,
    FooterComp
  }
}
</script>

<style lang="scss">
@import './assets/style.scss';
</style>
