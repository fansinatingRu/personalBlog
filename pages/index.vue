<template>
  <div class="content">
    <h1>My Personal Blog</h1>
    <div class="article-list">
      <div class="article" v-for="(article, index) in articles" :key="'article'+index">
        <div class="article-date">{{ article.date | formatdate }}</div>
        <h2><nuxt-link :to="article.path">{{ article.title }}</nuxt-link></h2>
        <p>{{ article.description }}</p>
      </div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content }) {
      const articles = await $content('articles').sortBy('date', 'desc').fetch()

      return {
        articles
      }
    },
    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
</script>
