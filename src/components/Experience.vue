<template>
    <div class="experience post-card">
        <div class="experience__header">
            <span class="post-card__title">{{experience.company}}</span>
            <span class="experience__location">{{experience.city}}, {{experience.country}}</span>
            <span class="experience__timeline">{{experience.from}} ~ {{experience.until}}</span>
        </div>
        <div class="post-card__list">
            <ul>
                <li v-bind:key="task" v-for="task in experience.tasks">
                    {{task.text}}
                    <a v-if="task.link" :href="task.link"> [Link]</a>
                </li>
            </ul>
        </div>
        <div class="post-tags">
            <span class="post-tags__link" v-on:click="scrollToSkill(skill)" v-bind:key="skill" v-for="skill in experience.skills">#{{skill}}</span>
        </div>
    </div>
</template>

<script>
import {TweenLite, Power3} from 'gsap'

export default {
    props: {
        experience: {
            type: Object,
            required: true
        },
        skillList: Array,
    },
    methods: {
    scrollToSkill: function(id) {
        const mainElement = document.getElementById('layout')
        const element = document.getElementById(id)
        if (element) {
            element.style.backgroundColor = '#dec79b'
            element.style.color = '#000'
            TweenLite.to(element, 1.5, {backgroundColor: 'none', color: '#fff'})
            TweenLite.to(mainElement, 1, {scrollTo: `#${element.id}`, ease: Power3.easeOut})
        }
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/style/_mixins.scss";
.experience {
    &__header {
        display: flex;
        flex-direction: column;

        span {
            min-width: fit-content;
        }
        @include xl {
            flex-direction: row;
            align-items: center;
        }
    }

    &__location {
        @include xl {
            margin-left: 40px;
        }
    }

    &__timeline {
        width: -webkit-fill-available;
        @include xl {
            text-align: end;
        }
    }
}
</style>