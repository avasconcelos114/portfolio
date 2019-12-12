---
title: Aframe Keyboard Library
date: 2019-08-12
project: true
slug: 'aframe-keyboard'
cover_image: ../images/aframe/keyboard.png
published: true
canonical_url: false
description: ""
tags: ["Front-end", "A-Frame"]
---
# Project recap: Aframe Keyboard
![](../images/aframe/keyboard.png)

## Project Description  
All forms of complex tools online, from social media experiences to productivity tools, rely on the same common denominator where _user input_ can be received from a given user, and processed in any number of ways.

The problem I found when attempting to develop prototypes for Aframe, was that the most common keyboard libraries around relied on static images being overlayed on top of invisible buttons that corresponded to the letter that they were representing. While that idea worked great in terms of having a light-weight attractive keyboard, it wasn't quite so good at allowing keyboards to be easily customized to other languages (think accented letters like `å`), or at giving quick options for the keyboard buttons or background to be switched out into a different texture.

With these challenges in mind, I gave my honest attempt at creating a library that would create its own [Aframe component](https://aframe.io/docs/0.9.0/core/component.html), which would draw a sequence of panels (some invisible, and some which would represent the textures or colors that were decided upon), and that it would allow users to input information on it by either clicking the keys through the browser, typing through their own physical keyboards, or using laser-pointers to click them from inside virtual reality.

I did my best to ensure the keyboard can be ready to use right out of the box, when the amount of code needed to make full use of that includes only two steps:

1. Adding the `a-text` tag that will be modified and add an `a-keyboard` attribute to an `a-entity` element

```html
<a-text id="input" color="#000" value="Input value..." scale="0.5 0.5 0.5" position="-0.2 2 -1"></a-text>
<a-entity
    id="keyboard"
    position="-0.2 1.6 -0.5"
    a-keyboard
>
</a-entity>
```

2. Set an event listener to the keypress events that are emitted by the keyboard
```js
var input = ''
function updateInput(e) {
    var code = parseInt(e.detail.code)
    switch(code) {
    case 8: // For now, the handling of "delete" events has to be handled by the developer
        input = input.slice(0, -1)
        break
    case 06: // ACK events are used to submit the keyboard
        alert('submitted')
        var keyboard = document.querySelector('#keyboard')
        // Do some fancy stuff like changing the style of a-text after submission
        document.querySelector('#input').setAttribute('value', input)
        document.querySelector('#input').setAttribute('color', 'blue')
        keyboard.parentNode.removeChild(keyboard)
        return
    default:
        input = input + e.detail.value
        break
    }
    // added a "_" at the end to imply we're still editing the text
    document.querySelector('#input').setAttribute('value', input + '_')
}
// Actually setting the event listener
document.addEventListener('a-keyboard-update', updateInput)
```

But at the same time offering a [wider range of configurations](https://github.com/WandererOU/aframe-keyboard#api) that can cover different nuances when it comes to the UX factor of this library.

You can find the link of this project on GitHub [here](https://github.com/WandererOU/aframe-keyboard).
## Project Goals
* To provide an easy-to-setup, customizeable keyboard for virtual reality that can be kept up-to-date to the latest Aframe versions.

## Skills showcase
* Javascript (ES6)
* Webpack

## Conclusion
Receiving user input has always been tricky, and methods to do so are always evolving, but for as long as traditional keyboards are the fastest way to transfer information to our computers, an easy-to-setup library for WebVR developers will remain essential to accomplishing these goals.

And although the project remains rather small, at about 9 stars and a singular pre-alpha release, I remain hopeful that I can grow this project enough to be used in production-level applications some day.