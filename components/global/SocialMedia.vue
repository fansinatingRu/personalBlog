<template>
  <div class="socials">
    <div class="platform" v-for="(item, index) in platforms" :key="'platform'+index">
      <fa-icon :icon="['fab', item.icon]" size="3x"/>
      <div>{{ item.title }}</div>
      <img v-if='item.img' :src="require(`~/static/img/${item.img}`)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      platforms: [
        {title: 'WeChat', icon: 'weixin', color: '#e34f26',img:'QRcode.JPG'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.socials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  width: 100%;
  padding: 1em 0;

  .platform {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    font-family: 'Share Tech';
  }
}
</style>
