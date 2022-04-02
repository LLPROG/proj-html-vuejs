<template>
  <div>
    <div class="join-section">

      <div class="content">
        <!-- title community -->
        <h1>
          Hey! Join to our Community
        </h1>
        <p>
          nulla molestie tortor nec lectus venenatis, sed blandit dui finibus. Curabitur feugiat vulputate purus ipsum dolores ficilis uns etra.
        </p>
        <button class="btn btn-blue">
          sing up <!--arrow-->
        </button>

      </div>

    </div>
    <div class="subscribe-section">
      <h2>
        Subscribe to our Newsletter
      </h2>

      <div class="form">
        <input type="email" placeholder="insert your email*">
        <button class="btn btn-shark">
          send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityComp'
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.join-section {
  width: 100%;
  padding: 8rem 0;
  text-align: center;
  background-image: url('../assets/img/join_now_cta_bg.jpg');
  background-position: center center;
  background-size: cover;
  color: white;
  .content {
    width: 30%;
    margin: 0 auto;
    text-align: center;
    h1 {
      font-size: 2.5em;
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 2rem;
    }
  }
}
.subscribe-section {
  padding: 4rem 0;
  text-align: center;
  background-color: $bizarre;
  h2 {
    margin-bottom: 2rem;
  }
  .form {
    input {
      display: inline-block;
      margin-right: 1rem;
      height: 2.5rem;
      width: 25rem;
    }
    .btn {
      padding: 0.8rem 4rem;
    }
  }
}
</style>
