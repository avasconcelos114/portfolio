<template>
  <Layout>
    <h1 class="contacts__header">Contact me here:</h1>
    <h3 class="contacts__subheader">
      <span>LinkedIn:</span
      ><a href="https://www.linkedin.com/in/atsvasconcelos/"
        >https://www.linkedin.com/in/atsvasconcelos/</a
      >
    </h3>
    <h3 class="contacts__subheader">
      <span>GitHub:</span
      ><a href="https://github.com/avasconcelos114"
        >https://github.com/avasconcelos114</a
      >
    </h3>
    <h3 class="contacts__subheader">
      <span>Email:</span>
      <a href="mailto:andre.onogoro@gmail.com">andre.onogoro@gmail.com</a>
    </h3>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact information",
  },
};
</script>

<style lang="scss">
@import "~/assets/style/_mixins.scss";
.contacts__header {
  display: flex;
  width: fit-content;
  font-weight: 400;
  color: var(--body-color);
  margin: 30px auto;
  text-align: center;
}

.contacts__subheader {
  display: flex;
  width: fit-content;
  font-weight: 400;
  color: var(--body-color);
  margin: 30px auto;
  text-align: center;

  span {
    color: var(--highlight-color);
    margin-right: 10px;
  }
}
</style>
