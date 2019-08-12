---
title: The rise of WebVR (and how Aframe can help fill the content drought)
date: 2019-04-15
project: false
slug: 'the-rise-of-webvr-and-how-aframe-can-help-fill-the-content-drought'
published: true
tags: ['VR','WebVR', 'A-Frame']
canonical_url: false
description: "How could the latest advancements in WebVR help create the type of content VR really needs right now."
---

## Introduction  
Virtual reality has always been a topic of interest for the human population, as we've seen in movies, TV shows, books, and several forms of media that depict a distant future where reality itself has been replicated by technology, and that the bounds of what is possible can only be limited by one's own imagination.

While we may not yet be in the dystopian world of The Matrix, we've began paving our way to it with the recent advancements of VR technology. 

Ever since Palmer Luckey re-ignited humanity's passion for the extraordinary with the introduction of Oculus' [development kit 1](https://xinreality.com/wiki/Oculus_Rift_DK1), HTC has come up with its own line of head mounted displays (HMDs for short), and Microsoft created an ecosystem for Virtual Reality, to which companies like ACER, HP, and Lenovo have created different versions of HMDs to be run on that ecosystem.

This year is set to be an exciting year for VR, with the introduction of the Oculus Quest, a standalone [6DoF](https://packet39.com/blog/2018/02/25/3dof-6dof-roomscale-vr-360-video-and-everything-in-between/) headset that doesn’t require a powerful gaming computer to run polished (albeit less graphically impressive) VR experiences, and new players like Valve introducing [its own take on VR](https://www.inverse.com/article/54708-valve-index-vr-headset-release-date-price-specs-steam) with a new generation of controllers that track the movement of every finger. We'll also be getting a number of high-quality games like [Asgard's Wrath](https://www.oculus.com/asgards-wrath/?locale=en_US) and a patch for [No Man's Sky](https://www.nomanssky.com/2019/03/no-mans-sky-beyond-vr/) that enables full VR support.

As exciting as most of the things mentioned above are, Palmer Luckey himself recently [wrote an article](http://palmerluckey.com/free-isnt-cheap-enough/) claiming that even if we were to distribute free VR headsets to the population worldwide, VR would still be hard pressed to succeed at keeping people engaged. But why is that?

## The Content issue  
Currently the majority of VR content is being delivered in the form of games. It makes sense given that many gamers aren't as price sensitive as the rest of the population, if it means that they get a premium experience out of the deal.

This becomes a problem, however, when trying to bring VR into the mainstream. Because even if we were to have cheap headsets available, there aren't many uses for them outside of gaming, where the non-gaming experiences currently available are limited to short stories, documentaries, or creative apps (3D modeling and drawing).

And when it comes to creating a full ecosystem of Virtual Reality applications, there are still many bases left to cover that are left open; some of them include:
* Fitness apps
* Educational apps
* Social Media apps
* Productivity apps
* Shopping apps

Similarly to how the price of smartphones was justifiable because of the value brought to us by the App Store (or Google Play Store) and its diverse applications, VR will also require a certain amount of diversity and polish to its offerings in order to make the cost of a headset worthwhile. 

The problem with that is that developing for VR is a costly, time-consuming process, and most of the people with experience in the disciplines required to create VR apps, were people who were already in the creative industry.

## Enters WebVR and Aframe  
While there's little doubt that currently the most polished and performant applications are built on top of the Unity or Unreal game engines, a new emerging alternative is being introduced, as modern browsers like Firefox (or browsers created from the ground-up with VR in mind, like [Supermedium](https://www.supermedium.com/)) begin to add support for the positional tracking of HMDs and controllers, as well as events triggered by these controllers.

The folks behind the previously mentioned Supermedium browser have created their own library that's been built on top of [Three.js](https://threejs.org/), called [Aframe](https://aframe.io). Aframe enables you to create a 3D scene, import your own models, add objects and text, all with HTML and Javascript.

This is important because Aframe:  
### 1. Lowers the technical barriers to entry

Developing for VR, as opposed to developing traditional websites, already include a plethora of new areas and topics to explore, such as creating and adding 3D models to your scene, adding sounds to enrich the experiences you're creating, and creating interfaces that are tailored for VR motion controllers.

While none of the above are trivial things to learn on their own, having to learn how to develop on Unity or Unreal engines (including brushing up your C# or C++ skills) on top of that makes it incredibly time-consuming and difficult for any given individual to get started on bringing their ideas to life.

At the very least with Aframe, you get to use your pre-existing knowledge of HTML and Javascript to be used as a foundation on which to build your ideas on top of. And with the many readily-made components, you can quickly put together a prototype, and work towards building a finished product.

But just how difficult is it to build a VR scene on Aframe?

```html
<html>
  <head>
    <script src="https://aframe.io/releases/0.9.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
```

As seen above, a few lines is all it takes to create 3D objects and initialize a scene you can explore not only in VR, but also with your standard desktop or mobile browser.

### 2. Increases the diversity of creators  

I'll admit, I'm making the assumption right now that most of the folks who can build experiences on Unity and Unreal engine are the ones who work within the entertainment industry, be it developing games, animations, or educational content that can be viewed in 3D. But I feel somewhat confident in saying that the people who have extensive amounts of experience in a specific industry, say, developing B2B productivity tools, will for the most part not be too familiar with game engines.

This means that the ease of development brought by Aframe enables people from various areas of expertise to try their hand at bringing over these experiences to Virtual Reality, and who knows what types of different ways to visualize information and interact with other people will now become commonplace inside VR?

## Shortcomings of WebVR  
As much as we see clear benefits and opportunities coming from consuming VR content through the web. There are still a few technical difficulties that should be overcome before WebVR can deliver contents of comparable quality when compared to game engines.

### 1. Size limitations

One of the main selling points of WebVR is the fact that no installation of a given app is required prior to using it. 

However this can easily become one of its shortcomings given that assets still need to be downloaded onto the client, and depending on the size of your scene, you can still be better off going the traditional route by having users download and install your app with all its assets prior to loading up your experience, instead of having them download everything each time they log onto your website.

These limitations can be mitigated by caching assets that are frequently used, breaking down your scenes to use the minimum amount of resources possible (this is quite easily achievable when using route functionalities of Javascript frameworks), and offering the option of loading lower-quality assets (models with fewer poly counts, low-res textures and whatnot) to diminish download sizes for the client.

### 2. Performance limitations

VR is still in its infancy, and WebVR even more so. 

This means means that large scenes can become unstable and suffer from frame-rate drops. And until WebVR matures further, scenes will have to be carefully constructed to be short and sweet, limiting poly counts on models and not relying on any over-the-top animations or particle effects.

This may be discouraging but let's remember just [how ugly websites used to be](https://www.webdesignmuseum.org/exhibitions/web-design-in-the-90s/apple-1996) in their early days before we got to the point where they can [legitimately be considered works of art](https://www.awwwards.com/websites/).

## Conclusion
VR can be a beautiful medium for expression, and a powerful tool to get things done. Its potential, however, is not being thoroughly fulfilled given the lack of diversity and quality of experiences currently available in the market.

But I remain hopeful that WebVR can pave the way for developers of various backgrounds to create meaningful content and revolutionize their respective industries.
