<template>
  <div class="bk-color">
    <div class="link-slide">
      <a href="#!" class="link">
        read oru blog &#62;
      </a>
    </div>

    <div class="container">

      <!-- title forum  -->
      <h4 class="small-title">
        phasellus eget metus
      </h4>
      <h1 class="main-title">
        Forum Sections
      </h1>

      <!-- card forum -->
      <div class="cont-card-forum">
        <div class="card-forum" v-for="card in arrCardForum" :key="card.id">
          <div class="cont-icon-title">
            <div class="cont-icon">
              <font-awesome-icon class="card-icon" :icon="card.icon" />,
            </div>
            <div class="title">
              {{card.title}}
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="link-slide">
      <a href="#!" class="link">
        go to our forum &#62;
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumComp',
  data () {
    return {
      arrCardForum: [
        {
          icon: 'fa-solid fa-file-lines',
          title: 'News and Community',
          id: 0
        },
        {
          icon: 'fa-brands fa-apple',
          title: 'Apple Forum',
          id: 1
        },
        {
          icon: 'fa-brands fa-windows',
          title: 'Microsoft Forum',
          id: 2
        },
        {
          icon: 'fa-brands fa-android',
          title: 'Android Forum',
          id: 3
        },
        {
          icon: 'fa-solid fa-mug-saucer',
          title: 'General Discussion',
          id: 4
        },
        {
          icon: 'fa-solid fa-cubes',
          title: 'Apple & software',
          id: 5
        },
        {
          icon: 'fa-solid fa-laptop',
          title: 'Gadget & Stuff',
          id: 6
        },
        {
          icon: 'fa-solid fa-wrench',
          title: 'Tutorials & Guides',
          id: 7
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.link-slide {
  width: 100%;
  padding: 3rem 0;
  background-color: black;
  text-transform: uppercase;
  position: relative;
  text-align: center;
  .link {
    color: white;
    text-decoration: none;
    transition: 0.1s;
    &:hover {
      color: $salmon;
    }
  }
}
.bk-color {
  background-color: $bizarre;
}
.container {
  padding: 3rem 0;
    .small-title {
      text-align: center;
      text-transform: uppercase;
      color: $nevada;
      margin: 2rem 0;
    }
    .main-title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 1rem;
      &::after {
        content: '';
        display: block;
        width: 5%;
        border: 1px solid $salmon;
        margin: 0 auto;
        margin-top: 2rem;
      }
    }
    .cont-card-forum {
      @include flexbox(space-between, none, wrap);
      padding-bottom: 2rem;
      .card-forum {
        width: 240px;
        height: 240px;
        margin: 2rem 0;
        position: relative;
        background-color: white;
        z-index: 1;
        position: relative;
        cursor: pointer;
        &::before {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 3%;
          background-color: $eastern-blue;
          transition: 0.3s linear;
          z-index: -1;
        }
        &:hover::before {
          height: 100%;
        }
        .cont-icon-title {
          z-index: 999;
          width: 100%;
          text-align: center;
          .cont-icon {
            width: 80px;
            height: 80px;
            margin-left: 50%;
            margin-top: 20%;
            margin-bottom: 1rem;
            transform: translate(-50%);
            position: relative;
            background-color: $salmon;
            border-radius: 50%;
            .card-icon {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              font-size: 2.5rem;
            }
          }
          .title {
            font-size: 1.2em;
            font-weight: bolder;
          }
        }
      }
    }
}
</style>
