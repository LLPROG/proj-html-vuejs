<template>
  <div>
    <section class="top">
      <h4>
        avada forum is the place to be
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis odio ullam nesciunt neque repellat reprehenderit eligendi est delectus sit sed veniam repudiandae minima modi debitis voluptatum, a rem architecto.
      </p>
    </section>
    <section class="main">
      <div class="container">

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsComp'
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.top {
  width: 100%;
  padding: 5rem 30rem;
  text-align: center;
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
</style>
