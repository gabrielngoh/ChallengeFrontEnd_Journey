# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

---

### Screenshots


![](./ScreenShot/MY_OWN_Desktop_version.png)

---


### Links


- Live Site URL: [solution URL](https://challenge-front-end-journey.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3 custom properties
- Media Queries
- Flexbox
- Mobile-first workflow
- Vanilla Javascript 


### What I learned

It was really good challenge and i also learned how to :

- Build with functionnal approach

  Sample : 

  ```js

  features.addEventListener('click',()=>
  {
    Toggle(features_lnk,"clicked")
    rotateArrowIcon(arrow_iconFt)
    if(company_lnk.classList.contains('clicked'))
     {
        removeElement(company_lnk,"clicked",arrow_iconCo)
     }
  })

```
### Author

- Frontend Mentor - [gabriengoh](https://www.frontendmentor.io/profile/gabrielngoh)
- LinkdeIn - [GabrielNgoh](https://www.linkedin.com/in/gabriel-pierre-ngoh-dooh-03aab6309/)
