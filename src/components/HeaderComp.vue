<template>
  <header>
    <div class="container">
      <!--logo-->
      <img src="../assets/img/logo.png" alt="logo">

      <!--nav-bar-->
      <ul class="nav-bar">
        <li v-for="(obj, index) in arrLinkNav" :key="obj.id" @click="select(index)" :class="selectedLink == index ? 'selected' : '' ">
          <a href="#!">
            {{obj.name}}
          </a>
        </li>
      </ul>
      <button class="btn btn-shark">
        join us
      </button>
      <font-awesome-icon class="icon-search" icon="fa-solid fa-magnifying-glass" />
    </div>
  </header>
</template>

<script>
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
      ]
    }
  },
  methods: {
    select (index) {
      this.selectedLink = index
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
header {
  width: 100%;
  padding: 2rem;
  background-color: $eastern-blue;

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
</style>
