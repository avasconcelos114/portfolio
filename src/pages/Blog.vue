<template>
  <Layout>
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts content-box">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Blog posts'
  }
}
</script>

<page-query>
{
  posts: allPost(filter: { published: { eq: true }, project: { eq: false }}) {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (height: 340)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<style lang="scss">
</style>
