# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot of the resulting homepage](./images/screenshot.png)

### Links

- Solution URL: [https://github.com/mlemler/interactive-rating-component](https://github.com/mlemler/interactive-rating-component)
- Live Site URL: [https://mlemler.github.io/interactive-rating-component/](https://mlemler.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- HTML forms
- Flexbox
- CSS custom properties
- URLSearchParams

### What I learned

- [CSS custom properties](#css-custom-properties)
- [Custom styling of Radio Buttons](#custom-styling-of-radio-buttons)
- [URLSearchParams](#urlsearchparams)
- [Flex items do not collapse their margins](#flex-items-do-not-collapse-their-margins)

#### CSS custom properties

To define variables like colors that should be used in different places you can use CSS custom properties and define
them on the `:root` pseudo-class.
```css
:root {
  --color-light-grey: hsl(217, 12%, 63%);
}
```
And then use them later in the code like this.
```css
p {
  color: var(--color-light-grey);
}
```

#### Custom styling of Radio Buttons

At the beginning of this challenge I wrote the markup using only `span` elements and thinking about `form` or `input`
elements at all. But then I thought about what those buttons really are: radio input elements! And started to
investigate how to style them so that they do not look like radio input elements but work that way and using the correct
markup to be as accessible as possible.

The trick is to hide the radio element, link the label to it using `id` and `for` and style the label like you want.

```css
input[type="radio"] {
  display: none;
}
```

```html
<input type="radio" name="rating" id="one" value="1">
<label for="one"><span class="circle">1</span></label>
```

With the `label` being linked to the `input` a click on the `label` also checks the radio input. Then you can change the
style for checked elements by using the Adjacent sibling combinator `+`.

```css
input[type="radio"]:checked + label .circle {
  background-color: var(--color-medium-grey);
  color: var(--color-white);
}
```

#### URLSearchParams

First I thought about putting the user input into local storage and hide and show markup pieces (form or thank-you page)
depending on the click event on the button. But then I thought it might be more straight forward to use the normal form
action to link to new page where the result is shown. By using the `method="get"` for the form the filled input element
will be added as request parameters and can be accessed in JavaScript using the `URLSearchParams` class.

```javascript
const urlParams = new URLSearchParams(window.location.search);
const rating = urlParams.get('rating');
```

#### Flex items do not collapse their margins

In normal block formatting context the `margin` of two elements do collapse meaning that if you have a `h1` with a
`margin: 20px` followed by a `p` also having a `margin: 20px` the total margin between those elements is only `20px` (or
the max number of the two margins if one is greater).

But when those elements are flex items, meaning they are wrapped by an element with `display: flex` those margins do not
collapse but add up so that the margin between them will be `40px`.

### Useful resources

- [MDN - Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) -
This helped me to learn about custom properties
- [MDN - URLSearchParams.get()](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get) - Here you can
learn about the URLSearchParams interface
- [Slider Revolution - Styling Radio Buttons with CSS](https://www.sliderrevolution.com/resources/styling-radio-buttons/) -
Here I found lots of custom radio button styles using CSS bringing me to the solution I implemented

## Author

- Website - [mlemler.de](https://mlemler.de)
- Frontend Mentor - [@mlemler](https://www.frontendmentor.io/profile/mlemler)
- Twitter - [@michael_lemler](https://twitter.com/michael_lemler)
