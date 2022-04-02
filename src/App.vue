<template>
  <div id="app">
    <header-comp />
    <hero-comp />
    <news-comp />
    <forum-comp />
    <community-comp />
    <footer-comp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import HeroComp from './components/HeroComp.vue'
import NewsComp from './components/NewsComp.vue'
import ForumComp from './components/ForumComp.vue'
import CommunityComp from './components/CommunityComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    HeroComp,
    NewsComp,
    ForumComp,
    CommunityComp,
    FooterComp
  }
}
</script>

<style lang="scss">
@import './assets/style.scss';
</style>
