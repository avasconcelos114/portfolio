<template>
    <div class="experience__container">
        <div>
            <span>
                <span class="highlighted">{{experience.company}}</span> 
                {{experience.city}}, {{experience.country}}
                <span class="experience__timeline">{{experience.from}} ~ {{experience.until}}</span>
            </span>
        </div>
        <ul class="experience__task-list">
            <li v-bind:key="task" v-for="task in experience.tasks">{{task}}</li>
        </ul>
        <div>
            <span class="experience__skill-tag" v-on:click="scrollToSkill(skill)" v-bind:key="skill" v-for="skill in experience.skills"># {{skill}}</span>
        </div>
    </div>
</template>

<script>
import {TweenLite, Power3} from 'gsap'
import ScrollTo from 'gsap/ScrollToPlugin'

export default {
    props: {
        experience: {
            type: Object,
            required: true
        },
        skillList: Array,
    },
    mounted() {
        console.log(this.$props)
    },
    methods: {
    scrollToSkill: function(id) {
        const mainElement = document.getElementById('layout');
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundColor = '#dec79b';
            element.style.color = '#000';
            TweenLite.to(mainElement, 1, {scrollTo: `#${element.id}`, ease: Power3.easeOut, onStart: () => {
                TweenLite.to(element, 1.3, {backgroundColor: 'none', color: '#fff'})
            }});
        }
    }
  }
}
</script>

<style lang="scss">
.experience__container {
    width: 100%;
    color: var(--body-color);
    margin: 10px 0px;

    .experience__skill-tag {
        background-color: var(--bg-card);
        border-radius: 5px;
        font-size: 0.9rem;
        padding: 10px;

        &:hover {
            color: var(--highlight-color);
            cursor: pointer;
        }
    }
    .experience__task-list {
        margin-top: 25px;
        font-size: 0.9rem;
        padding: 0px 10px;
    }
    .experience__timeline {
        float: right;
    }
    span {
        font-weight: 300;
        font-size: 1.2rem;
        margin-right: 20px;
    }
}
</style>