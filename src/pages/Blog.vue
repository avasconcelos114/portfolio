<template>
  <Layout>
    <h1>Dis be them blogs.</h1>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node">
      {{edge.node.title}}
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog posts'
  }
}
</script>

<page-query>
{
  posts: allPost(filter: { published: { eq: true }}) {
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
