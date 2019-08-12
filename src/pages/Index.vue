<template>
  <Layout>
    <section id="main">
      <div>
        <h2>
          Hello! <br> <br>
          My name is <span class="highlighted">Andre Vasconcelos</span> and I am a full stack developer.
        </h2>
        <h3>
          I like working with <span class="rotating-text highlighted"></span>
        </h3>
      </div>
      <div class="button-container">
        <button v-on:click="scrollToIntro()">Read more about me</button>
      </div>
    </section>
  
    <!-- Basic self intro -->
    <section id="intro">
      <div class="intro__row flex__row">
        <div class="intro__description flex__column">
          <h3>
            I am a <span class="highlighted">Brazilian</span> developer based in Seoul, South Korea.
          </h3>

          <h4>
            I currently work at <span class="highlighted">Slexn Inc.</span> customizing enterprise-grade software for large-scale client sites. <br> <br>
            I also like to use my spare time to build things for others.
          </h4>
        </div>
  
        <div class="intro__image-container">
          <g-image alt="Andre Vasconcelos" src="~/assets/img/portfolio_picture.jpg" />
        </div>
      </div>

      <div class="intro__row flex__column">
        <Experience :experience="experience" :skillList="skillList" v-bind:key="experience.company" v-for="experience in experiences"/>
      </div>
    </section>

    <!--Skill section -->
    <section id="skills">
      <h4 class="highlighted">Front-end</h4>
      <div class="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in frontend"/>
      </div>

      <h4 class="highlighted">Back-end</h4>
      <div class="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in backend"/>
      </div>

      <h4 class="highlighted">DevOps</h4>
      <div class="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in devops"/>
      </div>

      <h4 class="highlighted">Misc</h4>
      <div class="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in misc"/>
      </div>
    </section>
  </Layout>
</template>

<script>
import Typed from 'typed.js'
import {TweenLite, Power3} from 'gsap'
import ScrollTo from 'gsap/ScrollToPlugin'

import Skills from '~/data/skills.json'
import Skill from '~/components/Skill.vue'

import Experiences from '~/data/experiences.json'
import Experience from '~/components/Experience.vue'

export default {
  components: {
    Skill,
    Experience,
  },
  metaInfo: {
    title: 'Welcome'
  },
  data () {
    return {
      frontend: Skills.frontend,
      backend: Skills.backend,
      devops: Skills.devops,
      misc: Skills.misc,
      skillList: [],
      experiences: Experiences,
    }
  },
  beforeMount() {
    this.skillList = this.frontend.concat(this.backend, this.devops)
  },
  mounted() {
    // Loading and configuring rotating text
    const strings = []
    this.skillList.forEach(skill => {
      strings.push(skill.title)
    })

    var options = {
      strings,
      loop: true,
      typeSpeed: 90,
      backSpeed: 60,
      startDelay: 600,
      backDelay: 1800,
    }

    new Typed(".rotating-text", options);
  },
  methods: {
    scrollToIntro: function() {
      const mainElement = document.getElementById('layout')
      TweenLite.to(mainElement, 1, {scrollTo: '#intro', ease: Power3.easeOut});
    }
  }
}
</script>

<style lang="scss">

section {
  min-height: 560px;
  padding: 0 10%;

  h2, h4 {
    margin-top: 100px;
    font-weight: 500;
  }
  span {
    font-weight: 700;
  }
}
#main {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;

  .button-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: -webkit-fill-available;

    button {
      font-family: 'Montserrat', sans-serif;
      cursor: pointer;
      background: none;
      border: none;
      font-size: 0.8rem;
      color: var(--body-color);
      height: 100px;
      transition: all 0.3s ease;
    
      &:hover {
        color: var(--highlight-color);
      }
      &::after {
        content: '';
        height: 15px;
        width: 0;
        border: 0.5px solid var(--body-color);
        top: 5px;
        position: relative;
        display: flex;
        margin: 0 auto;
      }
    }
  }
}
#intro {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .intro__row {
    display: flex;

    .intro__description {
      max-width: 750px;
      height: 500px;
      width: 50%;
      justify-content: center;
      align-items: center;
    }
    .intro__image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45%;
    }
  }

  h4 {
    line-height: 2rem;
    margin-top: 50px;
  }

  img {
    filter: grayscale(.3);
    border-radius: 100%;
    object-fit: cover;
    object-position: 0% 0%;
    height: 350px;
    width: 350px;
  }
}
#skills {
  min-height: 100vh;
}
.skill-container {
  flex-wrap: wrap;
  color: var(--body-color);
}
</style>
