<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">About</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
        <g-link class="nav__link" to="/my-work">My work</g-link>
        <g-link class="nav__link" to="/contact">Contact me</g-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <div>
        <slot/>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  background-color: var(--bg-color);
  color: var(--base-color);
  font-family: "Montserrat",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
  text-decoration: none;
  color: var(--body-color);

  &:hover {
    color: var(--highlight-color);
  }
}
</style>
