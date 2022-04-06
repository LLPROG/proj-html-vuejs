<template>
  <div>
    <div class="card-article">
      <img :src="DataCard.image" :alt="DataCard.title">
      <h3 class="card-title">{{DataCard.title}}</h3>
      <span>{{DataCard.date}}</span>
      <span class="span-line"></span>
      <span>{{DataCard.comments}}</span>
      <p class="card-content">{{DataCard.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardNewsComp',
  props: {
    DataCard: Object
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

.card-article {
  width: 320px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  &:hover img {
    border-radius: 20px;
    filter: opacity(0.7);
  }
  img {
    transition: 0.3s;
  }
  .card-title {
    margin: 0.5rem 0;
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
  .card-content {
  color: $nevada;
  line-height: 1.3rem;
  }
}
</style>
