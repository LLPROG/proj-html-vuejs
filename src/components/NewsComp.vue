<template>
  <div>
    <!-- top section -->
    <section class="top">
      <h4>
        avada forum is the place to be
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis odio ullam nesciunt neque repellat reprehenderit eligendi est delectus sit sed veniam repudiandae minima modi debitis voluptatum, a rem architecto.
      </p>
    </section>
    <!-- main section -->
    <section class="main">
      <div class="container">
        <!-- title main section -->

        <h4 class="small-title">
          phasellus eget metus
        </h4>
        <h1 class="main-title">
          All the latest news
        </h1>

        <!-- sections articles -->

        <div class="section-articles">
          <!-- top articles 3 in a row -->
          <div class="top-article">
            <card-news-comp  v-for="art in article.arrArticleTop" :key="art.id" :data-card="art"/>
          </div>

          <!-- main article just 1 -->
          <div class="main-article one">
            <p class="product">feautered article</p>
            <h2 class="main-article-title">{{article.arrMainArticle[0].title}}</h2>
            <p class="main-article-content">{{article.arrMainArticle[0].content}}</p>
            <button class="btn btn-shark">
              read more <!--arrow right-->
            </button>
          </div>

        </div>

        <div class="section-articles">
          <!-- top articles 3 in a row -->
          <div class="top-article">
            <card-news-comp  v-for="art in article.arrArticleBottom" :key="art.id" :data-card="art"/>
          </div>

          <!-- cont for flex main articles and tutorial section  -->
          <div class="cont-flex">
            <!-- main article just 1 -->
            <div class="main-article two">
              <p class="product">Reviewed product</p>
              <h2 class="main-article-title">{{article.arrMainArticle[1].title}}</h2>
              <p class="main-article-content">{{article.arrMainArticle[1].content}}</p>
              <button class="btn btn-shark">
                read more <!--arrow right-->
              </button>
            </div>

            <div class="tutorials">
              <!-- title tutorials -->
              <h2 class="tutorial-title">Tutorials & Guides</h2>

              <!-- card tutorials -->
              <div class="card-tutorials" v-for="art in article.arrTutorial" :key="art.id">
                <img :src="art.image" :alt="art.title">
                <div class="cont-content-tuto">
                  <h3 class="tuto-card-title">{{art.title}}</h3>
                  <span>{{art.date}}</span>
                  <span class="span-line"></span>
                  <span>{{art.comments}}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import img1 from '../assets/img/post_feat_img_20-320x202.jpg'
import img2 from '../assets/img/post_feat_img_21-320x202.jpg'
import img3 from '../assets/img/post_feat_img_22-320x202.jpg'
import img4 from '../assets/img/post_feat_img_23-320x202.jpg'
import img5 from '../assets/img/post_feat_img_24-320x202.jpg'
import img6 from '../assets/img/post_feat_img_25-320x202.jpg'
import CardNewsComp from './CardNewsComp.vue'

export default {
  name: 'NewsComp',
  data () {
    return {
      article: {
        arrArticleTop: [
          {
            image: img1,
            title: 'Morbi vitae dui euismod vulputate sollicitus',
            date: 'October 11th, 2015',
            comments: '2 comments',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis odio ullam nesciunt neque repellat',
            id: 0
          },
          {
            image: img2,
            title: 'Vivamus pellenteque, felis quis varius',
            date: 'October 11th, 2015',
            comments: 'Comment off',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis odio ullam nesciunt neque repellat',
            id: 1
          },
          {
            image: img3,
            title: 'Donec ornare pretium eget scelisque justo',
            date: 'October 11th, 2015',
            comments: 'Comment off',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis odio ullam nesciunt neque repellat',
            id: 2
          }
        ],
        arrArticleBottom: [
          {
            image: img4,
            title: 'Fusce sullicitum nunc sed placerat varius',
            date: 'October 11th, 2015',
            comments: 'Comment off',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis odio ullam nesciunt neque repellat',
            id: 3
          },
          {
            image: img5,
            title: 'Donec facilis sodales leo sit amet laboret',
            date: 'October 11th, 2015',
            comments: 'Comment off',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis odio ullam nesciunt neque repellat',
            id: 4
          },
          {
            image: img6,
            title: 'proin eu purus set aurus aliquet curabir vens',
            date: 'October 11th, 2015',
            comments: 'Comment off',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis odio ullam nesciunt neque repellat',
            id: 5
          }

        ],
        arrTutorial: [
          {
            image: img1,
            title: 'Fusce sullicitum nunc sed placerat varius',
            date: 'October 11th, 2015',
            comments: 'Comment off',
            id: 6
          },
          {
            image: img2,
            title: 'Donec facilis sodales leo sit amet laboret',
            date: 'October 11th, 2015',
            comments: 'Comment off',
            id: 7
          },
          {
            image: img3,
            title: 'proin eu purus set aurus aliquet curabir vens',
            date: 'October 11th, 2015',
            comments: 'Comment off',
            id: 8
          }
        ],
        arrMainArticle: [
          {
            title: 'Cras malesuada et orci eget pharetra',
            content: 'In quis lectus sed leo elementum faucibus in diabus dictum. Nullamolestie tortor nec lectus venenatis, sed blandit dui, dolor at bibendumsadips edts ipsums doloresficilis uns leos lectus',
            id: 9
          },
          {
            title: 'Mauris Viverra atisan ipsum eget felis prims efficitur varius',
            content: 'In quis lectus sed leo elementum faucibus in diabus dictum. Nullamolestie tortor nec lectus venenatis, sed blandit dui, dolor at bibendumsadips edts ipsums doloresficilis uns leos lectus',
            id: 10
          }
        ]
      }
    }
  },
  components: {
    CardNewsComp
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.top {
  width: 100%;
  padding: 5rem 30rem;
  text-align: center;
  background-color: $bizarre;
  h4 {
    margin: 2rem 0;
    text-transform: uppercase;
    color: $nevada;
  }
  p {
    line-height: 2rem;
    color: gray;
    font-size: 1.5em;
  }
}

.main {
  padding-top: 2rem;
  .container {
    text-align: center;
    .small-title {
      text-transform: uppercase;
      color: $nevada;
      margin-bottom: 2rem;
    }
    .main-title {
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
    .section-articles {
      text-align: left;
      .top-article {
        @include flexbox (space-between, none, none);
      }
      .main-article {
        color: white;
        .product {
          margin: 2rem 0;
          text-transform: uppercase;
        }
        .main-article-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .main-article-content {
          margin-bottom: 1rem;
          line-height: 1.5rem;
        }
      }
      .main-article.one {
        padding: 15rem 6rem 8rem;
        background-image: url('../assets/img/featured_article_1_bg.jpg');
        background-size: cover;
        margin: 2rem 0;
      }
      .main-article.two {
        width: 120%;
        padding: 6rem 6rem;
        background-image: url('../assets/img/featured_article_2_bg.jpg');
        background-size: cover;
      }
      .cont-flex {
        margin: 2rem 0;
        @include flexbox(none, none, none);
        gap: 2rem;
        .tutorials {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .card-tutorials {
            @include flexbox(none, none, none);
            img {
              width: 40%;
              height: 7rem;
              object-fit: cover;
              margin-right: 1rem;
            }
            span {
              display: inline-block;
              color: $nevada;
              margin-bottom: 0.5rem;
            }
            .span-line {
              width: 1px;
              height: 12px;
              margin: 0 0.2rem;
              background-color: $nevada;
            }
          }
        }
      }
    }

  }
}
</style>
