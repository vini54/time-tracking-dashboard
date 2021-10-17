# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

- Full-hd screen

![](.\screenshot\127.0.0.1_5500_index.html.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass

### What I learned

- work with arrays

```js
function getdaily(){
   previous = 'Yesterday'
   let currentArr = []
   let prevArr = []
   for(let i = 0; i < dataWork.length; i++){
      currentArr[i] = dataWork[i].timeframes.daily.current
      prevArr[i] = dataWork[i].timeframes.daily.previous
   }
   printValues(currentArr, prevArr, previous)
   daily.classList.add('active')
   week.classList.remove('active')
   mont.classList.remove('active')
}
```


## Author

- Gothub - [Vinícius Oliveira](https://github.com/vini54)
- Frontend Mentor - [@vini54](https://www.frontendmentor.io/profile/vini54)
- Linkedin - [Vinícius Oliveira](https://www.linkedin.com/in/vin%C3%ADcius-oliveira-b3480a218/)
