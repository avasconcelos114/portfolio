<template>
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">About</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
        <g-link class="nav__link" to="/my-work">My work</g-link>
        <g-link class="nav__link" to="/contact">Contact me</g-link>
      </nav>
    </header>
</template>

<style lang="scss">
@import "~/assets/style/_mixins.scss";
.header {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--bg-color);
  height: 60px;
  padding: 0px 20px;
}

.nav__link {
  margin-left: 20px;
  text-decoration: none;
  color: var(--body-color);
  font-size: .9rem !important;

  @include lg {
    font-size: 1rem;
  }
  &:hover {
    color: var(--highlight-color);
  }
}
</style>