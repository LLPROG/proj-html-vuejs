<template>
  <div>
    <div class="container">
      <div class="main-section">

        <div class="avada">
          <h4 class="avada-title">
            avada tech forum
          </h4>
          <p class="content-avada">
            Sed semper, nisi id feugiat elefend, erat est digssim felis quim, auctor elit enim nec ante. Cras et nibh risus. Pellentesque non mi sit amet mi interventum.
          </p>
        </div>

        <div class="topics">

          <ul class="topic">
            <li class="topic-title">
              <h4>
                Popular topics
              </h4>
            </li>
            <li class="content" v-for="obj in arrPopular" :key="obj.id">
              <!-- arrow --> {{obj.content}}
            </li>
          </ul>

          <ul class="topic">
            <li class="topic-title">
              <h4>
                Recent topics
              </h4>
            </li>
            <li class="content" v-for="obj in arrRecent" :key="obj.id">
              <!-- arrow --> {{obj.content}}
            </li>
          </ul>

          <ul class="topic">
            <li class="topic-title">
              <h4>
                Latest topics
              </h4>
            </li>
            <li class="content" v-for="obj in arrLatest" :key="obj.id">
              <!-- arrow --> {{obj.content}}
            </li>
          </ul>

        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">

        <div class="copyright">
          &copy; Copyright 2012
          <span class="line"></span>
          Avada themes by <a href="#!">Themes Fusion</a>
          <span class="line"></span>
          All Right Reverved
          <span class="line"></span>
          Powered by <a href="#!">WordPress</a>
        </div>

        <div class="social">
          <div class="cont-icon facebook">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </div>
          <div class="cont-icon twitter">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </div>
          <div class="cont-icon instagram">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </div>
          <div class="cont-icon youtube">
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'FooterComp',
  data () {
    return {
      arrPopular: [
        {
          id: 0,
          content: 'Nam a dolor volutpat massa auctor semper'
        },
        {
          id: 1,
          content: 'Sed euismod nunc urna fermentum arcum badogbus frigilla'
        },
        {
          id: 2,
          content: 'Cras lacinia tellus id mauris finibus lacus molestie'
        },
        {
          id: 3,
          content: 'Curabitur at scelerisque ligula'
        }
      ],
      arrRecent: [
        {
          id: 0,
          content: 'Nam a dolor volutpat massa auctor semper'
        },
        {
          id: 1,
          content: 'Sed euismod nunc urna fermentum arcum badogbus frigilla'
        },
        {
          id: 2,
          content: 'Cras lacinia tellus id mauris finibus lacus molestie'
        },
        {
          id: 3,
          content: 'Curabitur at scelerisque ligula'
        }
      ],
      arrLatest: [
        {
          id: 0,
          content: 'Nam a dolor volutpat massa auctor semper'
        },
        {
          id: 1,
          content: 'Sed euismod nunc urna fermentum arcum badogbus frigilla'
        },
        {
          id: 2,
          content: 'Cras lacinia tellus id mauris finibus lacus molestie'
        },
        {
          id: 3,
          content: 'Curabitur at scelerisque ligula'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.main-section {
  padding: 2rem 0;
  @include flexbox(none, none, none);
  .avada {
    width: 35%;
    .avada-title {
      text-transform: uppercase
    }
    .content-avada {
      line-height: 1.5rem;
      margin-top: 0.5rem;
      color: $nevada;
    }
  }
  .topics {
    @include flexbox(none, none, none);
    .topic {
      margin-left: 2rem;
      li {
        list-style: none;
      }
      .topic-title {
        text-transform: uppercase;
      }
      .content {
        line-height: 1.5rem;
        border-bottom: 1px solid rgb(202, 202, 202);
        padding: 0.5rem 0;
        padding-left: 10px;
        &::before {
          content: '\203A';
          margin-left: -10px;
        }
      }
    }
  }
}

.footer {
  width: 100%;
  border-top: 1px solid rgb(214, 210, 210);
  .container {
    @include flexbox(none, center, none);
    height: 5rem;
    .copyright {
      color: $nevada;
      a {
        text-decoration: none;
        font-weight: bold;
        color: black;
      }
    }
    .social {
      @include flexbox(none, none, none);
      margin-left: auto;
      .cont-icon {
        width: 50px;
        height: 50px;
        margin-right: 0.5rem;
        border-radius: 50%;
        color: white;
        @include flexbox(center, center, none);
      }
      .facebook {
        background-color: #516faa;
      }
      .twitter {
        background-color: #6dc2d0;
      }
      .instagram {
        background-color: #0c1f86;
      }
      .youtube {
        background-color: #951a0c;
      }
    }
  }
}
</style>
