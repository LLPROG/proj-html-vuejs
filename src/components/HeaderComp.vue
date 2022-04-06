<template>
  <header class="header">
    <div class="container">
      <!--logo-->
      <img src="../assets/img/logo.png" alt="logo">

      <!--nav-bar-->
      <ul class="nav-bar" :class="activeToggle === false ? 'active' : '' ">
        <li v-for="(obj, index) in arrLinkNav" :key="obj.id" @click="select(index)" :class="selectedLink == index && display == 4 ? 'selected' : '' ">
          <a href="#!">
            {{obj.name}}
          </a>
        </li>
      </ul>
      <button class="btn btn-shark">
        join us
      </button>
      <font-awesome-icon class="icon-search" icon="fa-solid fa-magnifying-glass" />
      <button class="toggle-nav" @click="toggleMenu" v-if="display < 4">
        <font-awesome-icon icon="fa-solid fa-minus" class="turn-icon left"/>
        <font-awesome-icon icon="fa-solid fa-minus" class="turn-icon right"/>
      </button>
    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'headerComp',
  data () {
    return {
      selectedLink: 0,
      arrLinkNav: [
        {
          name: 'Home',
          link: '#!',
          id: 0
        },
        {
          name: 'Apple',
          link: '#!',
          id: 1
        },
        {
          name: 'Microsoft',
          link: '#!',
          id: 2
        },
        {
          name: 'Android',
          link: '#!',
          id: 3
        },
        {
          name: 'Forums',
          link: '#!',
          id: 4
        },
        {
          name: 'Contact Us',
          link: '#!',
          id: 5
        }
      ],
      display: Number,
      activeToggle: false
    }
  },
  methods: {
    select (index) {
      this.selectedLink = index
    },
    onResize () {
      if (window.innerWidth > 1200) {
        this.display = 4
      } else {
        this.display = 3
      }
    },
    toggleMenu () {
      if (this.activeToggle === false) {
        this.activeToggle = true
        gsap.to('.turn-icon.left', { rotate: 45 })
        gsap.to('.turn-icon.right', { rotate: -45 })
        gsap.fromTo('.nav-bar', { opacity: 0, y: -30 }, { opacity: 1, y: 0 })
      } else {
        this.activeToggle = false
        gsap.to('.turn-icon.left', { rotate: 0 })
        gsap.to('.turn-icon.right', { rotate: 0 })
      }
    }
  },
  mounted () {
    gsap.fromTo('.header', { opacity: 0, y: -30 }, {
      opacity: 1,
      y: 0,
      delay: 4
    })
  },
  created () {
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
header {
  min-width: 100%;
  padding: 2rem;
  background-color: $eastern-blue;
  position: absolute;
  top: 0;
  z-index: 999;

  .container {
    @include flexbox(none, center, none);
    .nav-bar {
      margin-left: auto;
      @include flexbox(none, center, none);

      li {
        list-style: none;
        margin: 0 1.5rem;
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
        opacity: 0.7;
      }
      }
      .selected {
        transform: translateY(10px);
      }
      .selected::after {
        content: '';
        width: 20px;
        height: 20px;
        background-color: $eastern-blue;
        display: block;
        position: relative;
        top: 43px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
      }
    }
    .icon-search {
      margin: 0 1rem;
      color: white;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 1200px) {
  header {
    min-width: 100%;
    padding: 2rem;
    background-color: $eastern-blue;
    position: absolute;
    top: 0;
    z-index: 999;

    .container {
      max-width: 90vw;
      @include flexbox(none, center, none);
      position: relative;
      .nav-bar {
        flex-direction: column;
        padding: 1rem;
        background-color: $eastern-blue;
        @include flexbox(none, center, none);
        position: absolute;
        top: 90px;
        right: 0;
        li {
          list-style: none;
          margin: 0 1.5rem;
          line-height: 1.8rem;
          a {
            text-decoration: none;
            color: white;
          }
          a:hover {
            opacity: 0.7;
          }
        }
        &.active {
          display: none;
        }
      }
      .toggle-nav {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        padding: 1rem;
        position: relative;
        background-color: $salmon;
        cursor: pointer;
        &:active {
          transform: scale(0.9);
        }
        .turn-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5em;
        }
      }
      .btn {
        margin-left: auto;
      }
      .icon-search {
        margin: 0 1rem;
        color: white;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .header {
    padding: 2rem 0;
    .container {
      width: 100vw;
      @include flexbox(center, none, none);
      flex-direction: column;
      .nav-bar {
        width: 100%;
        top: 190px;
        padding: 3rem 1rem;
        margin: 0 auto;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

      }
      .btn {
        margin: 1rem 100%;
        width: 6rem;
      }
      .toggle-nav {
        margin-top: 1rem;
      }
    }
  }
}
</style>
