<template>
  <article class="content">
    <nuxt-link to="/" class="article-back">
      <fa-icon :icon="['fad', 'angle-left']" size="2x" /> BACK
    </nuxt-link>
    <h1>{{ page.title }}</h1>
    <div class="author">
    </div>
    <nuxt-content :document="page" />
    <Newsletter />
    <SocialMedia />
  </article>
</template>

<script>
  export default {
    async asyncData ({ params, $content }) {
      const page = await $content('articles', params.article).fetch()

      return {
        page
      }
    },
    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
</script>
