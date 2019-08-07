<template>
	<div class="author">
		<g-image alt="Author image" class="author__image" src="~/assets/img/personal_logo_transparent_256.png" />
		<p class="author__intro">
			Articles about things that interest me, or things that I had to learn the hard way.
		</p>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
.author {
	color: var(--body-color);
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;
	&__image {
		background-color: var(--img-bg-color);
		border-radius: 100%;
		padding: 10px;
		width: 140px;
		height: 140px;
		margin-bottom: 1em;
	}
	&__intro {
		opacity: .8;
	}
	&__site-title {
		font-size: 1.5em;
	}
	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>