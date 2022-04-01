<template>
  <header>
    <div class="container">
      <!--logo-->
      <img src="../assets/img/logo.png" alt="logo">

      <!--nav-bar-->
      <ul class="nav-bar">
        <li v-for="obj in arrLinkNav" :key="obj.id">
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
        margin: 0 1rem;
        a {
          text-decoration: none;
          color: white;
        }
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
