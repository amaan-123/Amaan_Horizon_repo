# MS-Learn: What is CSS?

Cascading Style Sheets (CSS) is used to format the layout of a webpage.

With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!

> **Tip:** The word **cascading** means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!

## Using CSS

CSS can be added to HTML documents in 3 ways:

- **Inline** - by using the `style` attribute inside HTML elements
- **Internal** - by using a `<style>` element in the `<head>` section
- **External** - by using a `<link>` element to link to an external CSS file in the `<head>` section. Example below:

```html
<head>
<link rel="stylesheet" href="main.css">
```

The most common way to add CSS is to keep the styles in external CSS files.

## CSS rules

CSS rules are how you apply styles to HTML elements. CSS rules have a selector, which is used to express the element (or elements) to which the styles should be applied.

```css
body {
    font-family: monospace;
}
ul {
    font-family: helvetica;
}
```

## Selectors

There are three core types of selectors:

- Elements
- Classes
- IDs

ID and class selectors let you apply styles to custom attribute names in your HTML. You use an ID to style one element, whereas you use classes to style multiple elements.

```css
.light-theme {
  color: #000000;
  background: #00FF00;
}

#msg {
  font-family: monospace;
}
```

- `.light-theme` is a *class selector*. Each HTML element that contains a `class` attribute set to `light-theme` gets the styles that are defined within this selector.
For example:

```html
<body class="light-theme">
```

- `#msg` is an *ID selector*. The HTML element that has its `id` attribute set to `msg` gets the styles that are defined within this selector.

> Standard naming convention for classes and IDs is to use "skewer-casing." Each word is lowercase, and separated with a -. The name skewer-case comes from how the words appear as if they could be on a skewer.

## CSS Variables

CSS variables (also called custom properties) are defined using the `--` prefix. For example, `--green`, `--white`, and `--black` are custom properties in this snippet.

These variables can store reusable values, such as colors, font sizes, or other CSS values.

**`:root` Selector**:

- The `:root` selector targets the root element of the document, which is the `<html>` element in an HTML page.
- Using `:root` for defining CSS variables ensures that these variables are globally accessible throughout the entire stylesheet.

```css
:root {
  --green: #00FF00;
  --white: #FFFFFF;
  --black: #000000;
}
```

**Usage**:

Once defined, these variables can be used anywhere in the CSS file by referencing them with the `var()` function. For example:

```css
.light-theme {
  background: var(--green);
  color: var(--black);
}
```

**Why Use CSS Variables?**:

- **Maintainability**: If you need to change a color, you only update it in one place (inside `:root`), and the change propagates everywhere the variable is used.
- **Consistency**: Ensures consistent styling across the application.
- **Dynamic Updates**: CSS variables can be updated dynamically using JavaScript, enabling themes or runtime changes.

It makes your CSS more modular, maintainable, and reusable.

---

**Defining variables that use the CSS variables referenced by var():**

```css
.dark-theme {
  --bg: var(--black);
  --fontColor: var(--green);
}
```

In the preceding code, you defined two new variables, `bg` and `fontColor`, which specify a background and font color. These variables use the `var` keyword to set their property values to the variables previously specified in your `:root` selector

**Example of final CSS file:**

```css
:root {
  --green: #00FF00;
  --white: #FFFFFF;
  --black: #000000;
}

body {
  background: var(--bg);
  color: var(--fontColor);
  font-family: helvetica;
}

li {
  list-style: circle;
}

.list {
  list-style: square;
}

.light-theme {
  --bg: var(--green);
  --fontColor: var(--black);
}

.dark-theme {
  --bg: var(--black);
  --fontColor: var(--green);
}
```

## Comments

 To comment in a section of CSS, you would use `/* comment */`.

## Setting Fonts

- The most common option for setting the font to use on a page is `font-family`. `font-family` is typically set to a list of fonts, allowing the browser to use the first font listed it can support. For example, a setting of `Tahoma, Verdana, sans-serif` will attempt to use Tahoma, followed by Verdana, and finally a generic sans serif font.
- `font-style` is used to italicize text by setting the value to `italic`.
- `font-weight` supports different bold settings, with `bold` being the most common.
- `text-decoration` is used to `underline`, `overline`, or `line-through` text.

- The `font-size` allows you to indicate the font size you wish to use. CSS offers the ability to use **absolute or relative sizing**. Absolute sizing is typically set in **pixels** and will always use the specified size. Relative sizing can be based on the default size for the browser and measured in **percent** or based on the sizing of the reference element.
  
  - Relative sizing for fonts is typically measured using `em` or `rem`. `em` is short for element and is relative to either the parent (`em`) or root (`rem`). The root is the `html` element. `1em` or `1rem` is equal to the size of the parent or root element, while `2em` or `2rem` would be double the size. Because screen sizes can vary, it's typically best to use relative sizing whenever possible.
  
  - Consider the following HTML and CSS as an example:

    ```html
    <html>
      <body>  
          <div>Sample text</div>
      </body>
    </html>
    ```

    ```css
    html {
    font-size: 18px;
    }
    div {
        font-size: 14px;
    }
    ```

  - For whatever is inside the `div` element, `1em` would be 14 pixels because the parent is `div` and set to `14px`, while `1rem` would be 18 pixels because the `html` root is set to 18px.

  - Similarly, `1.5em` for the `div` element would be 21 pixels (`14 * 1.5 = 21`), and `1.5rem` would be 27 pixels (`18 * 1.5 = 27`). You can use `em` and `rem` to ensure the rest of the page scales as you update the parent or root sizes.

## 🧠 What Are Pseudo-classes?

**Pseudo-classes** let you apply CSS styles to an element **based on its state** or **its position** on the page.

They're called *pseudo* because they aren't based on classes in HTML — they're based on behavior or position.

### Pseudo-class Syntax

```css
selector:pseudo-class {
    property: value;
}
```

- `:` = tells the browser this is a pseudo-class.
- `selector` = which HTML element you want to style.
- `pseudo-class` = the condition/state.

### Examples

### `:hover` – Mouse Hover Effect

When the user hovers over an element (like a link or button):

```html
<a href="#">Hover over me!</a>
```

```css
a:hover {
    background-color: yellow;
}
```

🟡 When your mouse hovers over the link, the background turns yellow.

---

### `:last-child` – Last Element in a Container

To style **only the last item**:

```css
li:last-child {
    color: red;
}
```

🔴 The **last list item** turns red.

```css
/*try nth-child(2), nth-child(odd), etc
*/
li:nth-child(odd) {
    color: green;
}
```

---

### 📋 Summary Table

| Pseudo-class     | Description                                          |
|------------------|------------------------------------------------------|
| `:hover`         | When the user moves the mouse over the element       |
| `:visited`       | When a link has already been clicked                 |
| `:link`          | An unvisited link                                    |
| `:first-child`   | The first child inside a parent element              |
| `:last-child`    | The last child inside a parent element               |

> The `:link` and `:visited` pseudo-classes **do have default browser styles** — so even if *you* don’t write CSS for them, the browser still shows:

- `:link` (unvisited link) → usually **blue** and **underlined**.
- `:visited` (visited link) → usually **purple** and **underlined**.

>These defaults come from the browser’s built-in stylesheet (called the **user agent stylesheet**).

### Quick Tip

When styling links, the recommended order is:

```css
a:link     /* unvisited link */
a:visited  /* visited link */
a:hover    /* when mouse hovers */
a:active   /* when link is being clicked */
```

📏 Easy way to remember this order:
**LoVe HA** – `:link`, `:visited`, `:hover`, `:active`

# BroCode: CSS

<https://www.youtube.com/watch?v=wRNinF7YQqQ>

- CSS is an acronym for **Cascading Style Sheets**.
- It is defined as a style sheet language used for **describing the presentation of a document** written in a markup language such as HTML.
- Building a website is similar to building a house, requiring three elementsdescribing the presentation of a document** written in a markup language such as HTML.
- Building a website is similar to building a house, requiring three elements: **structure, style, and functionality**.
  - HTML is used for **structure** (like the skeleton or frame).
  - CSS is used to add **styles** (such as colors, decorations, and lighting).
  - JavaScript can add **functionality** (like plumbing, heating, or electricity).
- This content focuses on **style**.

## Applying CSS to HTML

- To work with CSS, a text editor (such as VS Code) is needed, along with an HTML document.
- CSS properties can be applied to HTML elements in three ways: **inline, internal, or external**.
- **External style sheets** are the preferred and best method, especially for large websites, because they can be reused for many different HTML pages and changes only need to be made in one place.

### Inline Styles

- To apply CSS inline, the `style` attribute is set equal to one or many CSS properties within quotes inside the **opening tag** of the element.
- Multiple properties are separated by a semicolon.
- Examples of properties include `background-color` and `color` (for font color).

```html
<body style="background-color: black;">
<h1 style="color: white;">This is my website</h1>
```

### Internal Style Sheets

- To apply an internal style sheet, a pair of `<style>` tags are placed **within the `<head>` of the HTML document**.
- The element to be styled is listed (e.g., `body`, `h1`, `p`), followed by curly braces.
- CSS properties are listed within the curly braces, separated by semicolons.
- This method is **less redundant** than applying changes inline.

```html
<style>
    p {
        background-color: gray;
        color: white;
    }
</style>
```

### External Style Sheets

- This is the **preferred way** of applying CSS.
- A new CSS file is created (e.g., `style.css`).
- The CSS rules are pasted into the external file.
- The HTML file is linked to the CSS file by placing a `<link>` tag within the `<head>` element.
  - The `rel` attribute must be set to `stylesheet`.
  - The `href` attribute must be set to the relative file path of the CSS file.

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

- If changes need to be made to the website (e.g., changing the background color from black to gray), making the change in the external style sheet will apply it to **all linked HTML documents**.

## Selectors: Targeting Specific Elements

- A unique feature of CSS is the ability to target any specific element by **ID or a class**.

### Targeting by ID

- To give an element a unique ID, the `id` attribute is set equal to a unique identifier within the opening tag (e.g., `id="p1"`).
- To target that specific ID in CSS, type a **hashtag (`#`) followed by the ID**.

```css
#p1 {
    color: tomato;
}
```

### Targeting by Class

- A class is like a **group**.
- Elements are assigned to a class using the `class` attribute (e.g., `class="odd"`).
- To target elements by class, type a **dot (`.`) followed by the name of the class**.

```css
.odd {
    color: red;
}

.even {
    color: blue;
}
```

## CSS Properties

### Colors

- Colors can be specified using:
  - **Color names** (e.g., `black`, `white`).
  - **RGB values** (three groups of numbers, e.g., black is three zeros).
  - **Hexadecimal values** (preceded with a hashtag and six digits, e.g., black is six zeros, white is six f's).
- **`background-color`** sets the color for the background.
- **`color`** sets the font color.

### Fonts

- To change the font family, use the **`font-family` property**.
  - **Sans serif fonts** tend to look better on the web.
  - It is common practice to list **more than one font** as contingencies, in case a web browser does not support the first choice.
- Resources for open-source fonts, such as **fonts.google.com**, allow users to select fonts and obtain a style sheet link to paste within the `<head>` of their HTML document.

- Other font properties:
  - **`font-style`**: Can be set to `italic`.
  - **`font-weight`**: Can be set to `bold` or `lighter`, or a value.
  - **`font-size`**: Sets the size of the font in units like pixels (e.g., `18 pixels`).
  - **`text-decoration`**: Can be set to `underline`, with various adjectives like `wavy` or `dotted`, and a color (e.g., `text-decoration-color: cyan`).

### Borders

- To create a border, the **`border-style` property** must be set, as the default is `none`.
- Common styles include: `solid`, `dashed`, `dotted`, `double`, `ridge`, `groove`, `inset`, and `outset`.

- Other border properties:
  - **`border-width`**: Sets the width in pixels (e.g., `5 pixels`).
  - **`border-color`**: Sets the color (e.g., `gold`).
  - **`border-radius`**: Rounds the corners; a higher number results in smoother rounding.
  - **`padding`**: Adds spacing between the text/content and the border.

- Specific sides of the border can be targeted using: `border-top-style`, `border-bottom-style`, `border-left-style`, `border-right-style`.
- Specific sides can also be targeted for width and color (e.g., `border-left-width`, `border-left-color`).

### Backgrounds

- **`background-color`**: Sets a solid color.

- **Linear Gradient**:
  - The property name is **`background`** and the value is `linear-gradient`.
  - Two or more colors are added within the parentheses (e.g., `sky blue` and `light green`).
  - **Direction** can be changed by preceding the colors with `to top`, `to bottom`, `to left`, or `to right`.
  - By default, the background repeats; this can be prevented by setting **`background-repeat`** to `no-repeat`.
  - To stretch the background and have it adjust dynamically upon window resizing, set **`background-attachment`** to `fixed`.

- **Background Image**:
  - Set the **`background-image`** property to `url()`.
  - The URL can be external, or just the file name if the image is next to the HTML/CSS files.
  - Set **`background-repeat`** to `no-repeat` to prevent image repetition.
  - Set **`background-position`** to `center`.
  - To make the image expand and shrink based on the window size, set **`background-size`** to `cover`.

### Margins and Padding

- **Margins** are the **space around an element** (outside of the border).
  - The `body` element naturally has about 8 pixels of margin, which can be removed by setting `margin: 0 pixels` on the body.
  - Margin can be selected for specific sides: `margin-top`, `margin-bottom`, `margin-left`, `margin-right`.
    - Applying `margin-top: 50 pixels` pushes the element and any elements underneath it down by 50 pixels.
  - Setting **`margin`** followed by one value (e.g., `50`) applies that margin all around the element.
  - **Percentages** can be used instead of pixels for dynamic resizing upon window adjustment.

- **Padding** is the **space between the content and the border**.

- **Centering an element horizontally** using margins:
  - Set **`margin-left` and `margin-right` to `auto`**. This calculation pushes the element to the center.
  - Setting only `margin-left: auto` pushes the element to the right-hand side.
  - Setting only `margin-right: auto` pushes the element to the left-hand side.

- The layout of margins, padding, and borders can be viewed by right-clicking an element and selecting "inspect".

### Float Property

- The **`float` property** positions an element to the **left or right side of a container**.
- It is popular for **wrapping text around images**.
- Elements that are floating are **taken out of the normal flow of a document**.
- Elements that follow will wrap around the floated element.
  - `float: left` causes elements to gravitate towards the top left corner, reading left to right.
  - `float: right` causes elements to read right to left.
- **`clear` property**: Used to create a stopping point where elements are no longer floating.
  - Set to `left` if floating left, `right` if floating right, or `both`.

### CSS Positioning

- The **`position` property** formats the layout of an element.
- There are five values: `absolute`, `fixed`, `relative`, `static`, and `sticky`.

#### 1. Static

- **Default** position.
- The element is in its normal state, with **no change**.

#### 2. Relative

- The element can be **moved relative to some point of origin** (the top-left corner).
- Offsets (`top`, `bottom`, `left`, `right`) are used to displace the element.
- This position **creates an empty vacuum (reserved space)** where the element was, and the element can cover others underneath it if displaced enough.

#### 3. Absolute

- The element is **taken out of the flow of the document**. Text will run underneath it (it acts like a "ghost").
- An absolutely positioned element **searches for any parent that is positioned non-statically**.
- If no non-static parent is found, it uses the **viewport** as the point of origin (top-left corner).
- If an absolutely positioned element (child) is placed inside a relatively positioned element (parent), the child will be positioned relative to the parent and will follow the parent when it moves.

#### 4. Fixed

- The element will **stay in position relative to the viewport**.
- Even when the user scrolls, the element will stay wherever it is set (e.g., top-right corner).

#### 5. Sticky

- The element will **stick to an edge of the viewport when scrolled past**.
- The element is initially in its normal place, but when the user scrolls down past it, it will stick to the specified offset (e.g., `top`).
- It will snap back into place when scrolling in the opposite direction.
- Can combine `top` and `bottom` settings.

### Pseudo-Classes

- A pseudo-class is a **keyword added to a selector** that specifies a **special state** of the selected element (e.g., hovering or clicking).
- The syntax is the element name, followed by a colon and the pseudo-class (e.g., `a:link`).

- **Hyperlink Pseudo-Classes (Anchor Tags `a`):**
  - **`:link`**: A link that has not been visited.
  - **`:visited`**: A link that has been visited (default color is purple).
  - **`:hover`**: The state when the cursor is over the element.
  - **`:active`**: The state when the mouse is held down over the element.

- **Button Pseudo-Classes (`button`):**
  - **`:hover`**: Useful for navigation bars or menus to let the user know they can select something.
  - **`:active`**: Applies when the button is clicked.

- **`:nth-child` Pseudo-Class**:
  - Used to change the background or style of selected sibling elements within a list.
  - A value is placed as an argument within parentheses to select the element's position (e.g., `1` for the first child, `2` for the second).
  - Can use keywords like `even` or `odd` to alternate the highlighting of elements, making them easier to read.
  - A **formula** can be passed as an argument (e.g., `3n` selects every third element, `4n` every fourth).
  - An **offset** can be added to the formula (e.g., `3n + 1`) to change the starting point.

```css
li:nth-child(even) {
    color: skyblue;
}

li:nth-child(3n + 1) {
    background-color: yellow;
}
```

### Shadows

- There are two varieties of shadows: **text shadows** and **box shadows**.

#### Text Shadows

- Followed by three numbers (in pixels) and a color.
  - **First number (X-axis)**: Positive moves right, negative moves left.
  - **Second number (Y-axis)**: Positive moves below text, negative moves above text.
  - **Third number (Spread)**: A higher number results in a further spread.
- **Multiple shadows** can be added, separated by a comma (e.g., to create a fire or glowing effect).

```css
h1 {
    text-shadow: 5px 5px 5px gray, 0 0 5px yellow, 0 -2px 5px red;
}
```

#### Box Shadows

- Uses the **same values** as text shadows, but the shadow appears **around the entire element**.
- Box shadows can be applied only when hovering using the **`:hover` selector** to create a 3D pop-out effect.

```css
h1:hover {
    box-shadow: 5px 5px 5px black;
}
```

### Font Awesome Icons

- Font Awesome is a useful resource for **free icons** for websites.
- A user needs to set up an account and copy the **kit code (a small script)**, pasting it within the `<head>` of the HTML document.
- Icons are found and the corresponding HTML code is copied and pasted into the body of the document.
- Icons can be styled using CSS by targeting their **class names** (e.g., `.fa-twitter`, `.fa-youtube`).
- Icons can be turned into hyperlinks by surrounding them with `<a>` tags and setting the `href` attribute.

### Transformations

- The **`transform` property** is used to apply transformations.

- **`translate`**: Moves the element.
  - `translatex(50 pixels)`: Moves right (positive) or left (negative) on the X-axis.
  - `translatey(50 pixels)`: Moves up or down on the Y-axis.
  - `translate(x-value, y-value)`: Combines both X and Y translation.

- **`rotate`**: Rotates the element.
  - `rotatex(180 degrees)`: Rotates on the X-axis.
  - Also available for Y-axis and Z-axis rotation.

- **`scale`**: Stretches the element.
  - `scalex(2)`: Stretches twice as wide.
  - `scaley()`: Stretches on the Y-axis.
  - `scale(2, 2)`: Stretches on both X and Y axes.

- **`skew`**: Distorts the element.
  - `skewx(45 degrees)`: Skews on the X-axis.
  - `skewy()`: Skews on the Y-axis.
  - `skew(x-value, y-value)`: Skews on both axes.

- **`matrix`**: A more complex transformation that combines six values in a specific order:
  - `matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)`.
  - This allows more than one transformation to be applied simultaneously.

### Animations

- To use an animation, it must first be created using the **`@keyframes` rule**.

```css
@keyframes mySlide {
    /* properties here */
}
```

- Keyframe properties:
  - **`from` and `to` keywords**: Define the starting and ending properties for the element (e.g., `from {margin-left: 100%}` to `to {margin-left: 0}`).
  - **Percentages**: Can be used instead of `from` and `to` to apply properties at specific points (e.g., `100%`).

- Animation properties applied to the element:
  - **`animation`**: Set to the unique name of the animation (e.g., `mySlide`).
  - **`animation-duration`**: Sets the length of time the animation takes (e.g., `5s`).
  - **`animation-iteration-count`**: Sets how many times the animation repeats; can be a number or `infinite`.
  - **`animation-play-state`**: Default is `running`; can be set to `paused`.
  - **`animation-delay`**: Sets the time before the animation begins (e.g., `1s`).
  - **`animation-timing-function`**: Controls the speed curve:
    - `linear`: Constant speed.
    - `ease-in`: Accelerates, then doesn't slow down.
    - `ease-out`: Starts quickly, then slowly decelerates.
    - `ease`: Accelerates and then decelerates near the end.

- **Animation Shortcut**: All six properties can be combined into one line using the **`animation`** property in this specific order:
  - `animation: duration timing-function delay iteration-count play-state animation-name`.

```css
animation: 3s linear 0 infinite running mySlide;
```

- **Combining Animations with Pseudo-Classes**: Animations can be placed within a pseudo-class (e.g., `:hover` or `:active`) to trigger the animation only when the element is in that special state.

- **Examples of Keyframe Animations:**
  - **Rotation**: Apply `transform: rotatex(360 degrees)` at `100%`.
  - **Opacity**: Set `opacity` to `0` at `50%` to fade out and then fade back in gradually.
  - **Scale**: Use `transform: scale(0.5, 0.5)` at `50%` to shrink and then grow back.
  - **Color Change**: Set `background-color` to different colors at different percentages (e.g., `0%`, `20%`, `40%`, etc.).

## Introduction to CSS Flexbox

<https://www.youtube.com/watch?v=wsTv9y931o8>

- The video provides a complete CSS Flexbox course designed to solve struggles with **overflowing elements or weird resizing behavior** in CSS.
- Understanding Flexbox leads to a level of **superior understanding of how things work in CSS**.
- Flexbox enables the creation of **beautiful and responsive layouts** in any imaginable way.
- It boosts confidence when tackling typical CSS problems, such as how to center a div or how to make a website responsive with just a few lines of code.

### Setting Up and Basic Alignment

- Coding starts with HTML, where a **reference point** (like the `body` or a specific container) must be defined.
- Any HTML element that holds content can function as a Flexbox or Grid container.
- The primary goal is to align elements anywhere inside their parent element (top, bottom, left, right, center, and any combination). This helps answer the popular beginner question: how to center a div.

#### The Display Property

- To align boxes using a Flexbox layout, you must address the **parent element** and apply `display: flex`.
- Applying `display: flex` immediately changes the positioning of elements, moving them from stacked (one below the other) to side-by-side.
- Most elements default to a display of `block` or `inline`. Block elements occupy the entire screen width, forcing elements to the next line. `display: flex` leaves this default system behind.

```css
body {
    display: flex;
}
```

#### The Flexbox Axes

- The **most important concept in Flexbox** involves the axes along which items are positioned: the **main axis** and the **cross axis**.
- These axes control the flow of the Flexbox layout, and both must be kept in mind for positioning.

#### Aligning on the Main Axis (`justify-content`)

- The `justify-content` property is used to position elements anywhere along the main axis.
- Basic values:
  - **`Flex-start`**: Aligns items at the start of the main axis (this is the default value).
  - **`Flex-end`**: Aligns items at the end of the main axis (positions boxes on the right side).
  - **`Center`**: Aligns items at the center of the main axis.

#### Aligning on the Cross Axis (`align-items`)

- To align elements vertically, the cross axis must be considered.
- The `align-items` property is used to center elements on the cross axis.
- This property uses the same values as `justify-content`.
- Values (assuming the container size is increased, e.g., using `min-height: 800px`):
  - **`Flex-start`**: Positions items at the start of the cross axis (top positioning).
  - **`Flex-end`**: Positions items at the end of the cross axis (bottom positioning).
  - **`Center`**: Positions items in the center.

#### Centering a Div

- To center elements along both the main and cross axis, only three lines of code are required.

```css
display: flex;
justify-content: center;
align-items: center;
```

- This layout is flexible; the elements will always remain in the center, regardless of changes to the height and width of the body.
- While centering can theoretically be achieved using only margins and padding, those methods are not as flexible as a Flexbox layout.

### Advanced Alignment Spacing

- `justify-content` and `align-items` have three additional, more complex values for spacing.
- These values ensure the spacing between elements adjusts automatically when resizing the website, emphasizing the flexibility of Flexbox.

#### Complex Spacing Values

- **`Space-between`**: Distributes elements from left to right. The first and last elements touch the edge of the layout. Gaps between elements increase with container size.
- **`Space-around`**: Works similarly, but the first and last elements do not touch the edge. Every element is given space to its left and right. This can lead to an inconsistency where the space between elements is twice as large as the space to the edges.
- **`Space-evenly`**: Ensures all the spaces are the same size, resulting in perfectly balanced gaps.

- *Note*: These values can be used on `align-items`, but typically only make sense when layouts become more complex (e.g., when content wraps).

### Controlling Flow with `flex-direction`

- The `flex-direction` property controls the direction of the main axis.
- It is crucial to remember the flex direction because it completely changes how all other properties function.

#### `flex-direction` Values

- **`row`**: The default value. The main axis goes from left to right, aligning elements side by side.
- **`row-reverse`**: The main axis goes from right to left. This reverses the counting order and changes the meaning of alignment values (e.g., `flex-start` is now on the right side).
- **`column`**: The main axis goes from top to bottom. Elements are positioned on top of each other. When using `column`, horizontal centering must be done using `align-items center` (as `justify-content` now aligns vertically along the main axis).

#### Example: Vertical Layout

- A common use case for `flex-direction: column` is aligning the entire website vertically while centering everything horizontally:

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

### Gaps and Multi-line Responsiveness

#### The `gap` Property

- The `gap` property creates a space between items, eliminating the need for using margins within a Flexbox layout.

```css
.boxes {
    gap: 20px;
}
```

- The `gap` property can be split into `row-gap` and `column-gap` to apply different values for horizontal and vertical gaps, though using the normal `gap` property for both is usually sufficient. These split properties become more interesting in CSS Grid.

```css
column-gap: 10px;
row-gap: 20px;
```

#### Wrapping Elements (`flex-wrap`)

- The `flex-wrap` property provides a single-line solution for responsive layouts.
- Values:
  - **`wrap`**: Aligns items on the next line if there isn't enough space. When resizing the window, elements flow to the next line when necessary.
  - **`nowrap`**: Elements will shrink together instead of wrapping, which is the default behavior when `flex-wrap` is not specified.

#### Alignment in Multi-line Layouts (`align-content`)

- When using `flex-wrap`, the layout contains multiple lines, meaning **every line has its own main and cross axis**.
- **`align-items`**: Controls the alignment along **each individual cross axis** of every Flexbox line.
  - Values include `Flex start`, `Flex end`, and `Center`.
- **`align-content`**: Controls the alignment of **all the lines together**.
  - The default value is `space-around`, which causes large gaps between the lines.
  - Other possible values include `space-between`, `space-evenly`, `Flex start`, `Flex end`, and `Center`.

#### Perfect Centering in Multi-line Layouts

- A perfectly centered Flexbox layout requires centering all three primary properties and wrapping the elements when necessary:

```css
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;
```

### Flex Item Properties: Sizing and Alignment

- Flexbox can be enabled in any HTML element. To center content (like numbers) inside the boxes, Flexbox is applied directly to the box selector.

```css
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

- Flex item properties (grow and shrink) are used to resize elements responsively. These properties are applied directly to the **flex items**, not the flex container.

#### `flex-shrink`

- `flex-shrink` controls how elements are resized automatically when the viewport shrinks and `flex-wrap: nowrap` is active.
- **Default value is `1`**: Elements shrink automatically when necessary.
- **`flex-shrink: 0`**: Prevents shrinking, causing the boxes to overflow the container if the viewport is too small.
- `flex-shrink` works like a switch to turn the shrinking ability on or off.
- Different values can be applied to individual items. Disabling `flex-shrink` on specific elements (e.g., an image or icon) is useful to prevent distortion.
- It also works as a **multiplier**: higher values (e.g., `5`) mean the element shrinks that many times faster than the others.

#### `flex-grow`

- `flex-grow` enables elements to **stretch** along the main axis.
- **Default value is `0`**: Elements do not grow by default.
- **`flex-grow: 1`**: Enables elements to try and fill out all available empty space inside their parent element.
- This behavior can be applied to specific elements. For instance, only the first element can be allowed to grow while the others remain fixed. This is useful for designs where elements like text inputs need to fill maximum space.
- `flex-grow` is a **multiplier**: an element with `flex-grow: 5` will reserve five times more of the new empty space to fill out than elements with `flex-grow: 1`.

- Note: While complex multiplier values are possible, most scenarios simply require turning the grow or shrink ability on or off in a balanced way.

#### Combining Sizing with Constraints

- `flex-grow` and `flex-shrink` are made more powerful when combined with minimum and maximum sizes, such as **`min-width`** and **`max-width`**.
- These constraints define where the resizing stops.
  - Example of Growth Constraint: `flex-grow: 1` combined with `max-width: 300px` means elements grow only up to 300 pixels.
  - Example of Shrink Constraint: Elements can shrink but only until they reach a size like `min-width: 100px`. Reaching `min-width` can cause elements to overflow, which should generally be avoided.

- To solve overflowing issues caused by `min-width` when shrinking, `flex-shrink` can be combined with `flex-wrap` using a media query. When the screen gets too small, `flex-wrap: wrap` is applied, causing the elements to flow to the next line instead of shrinking further.

#### Individual Item Alignment (`align-self`)

- The **`align-self`** property is used on the flex items and works similarly to `align-items`.
- This allows a specific item to be isolated and aligned differently on the **cross axis** than the general setting applied by `align-items`.
  - Example: If `align-items` is `flex-start`, `align-self: flex-end` positions only that specific item at the bottom.

#### Main Axis Individual Positioning

- There is no similar property like `justify-self` for the main axis in Flexbox (Note: `justify-self` is a CSS Grid property).
- To achieve a layout where one item is on the left and all others are on the right (like a navigation bar layout), the "old school" solution is used: **`margin-right: auto`**.

### Summary and Transition to CSS Grid

#### Key Flexbox Capabilities

- Flexbox enables positioning everything anywhere inside a container using the main and cross axes properties (`justify-content` and `align-items`).
- Elements can be wrapped using `flex-wrap: wrap`.
- Elements can be resized using `flex-grow` and `flex-shrink`, with customizable values for each element.
- Combining these features with minimum/maximum sizes and media queries allows for the creation of most desired layouts.

#### Comparison with CSS Grid

- For more complex layouts or simplifying code, CSS Grid may be introduced.
- **Centering a Div Comparison**:
  - Flexbox requires three lines of code:

```css
display: flex;
justify-content: center;
align-items: center;
```

    - CSS Grid requires two lines of code:

```css
display: grid;
place-content: center;
```

- CSS Grid makes certain tasks easier and achievable with even fewer lines of code.

## CSS Grid Course Notes

<https://www.youtube.com/watch?v=JYfiaSKeYhE>

This video provides a deep dive into CSS Grid, covering everything from the absolute basics to advanced, real-world examples, aiming to give users the confidence to build any layout they can imagine.

### I. Absolute Basics of Grid Layout

- CSS Grid is essential for building modern and responsive layouts that look great on any device.

#### HTML Structure

- Any layout starts with a **parent element** that contains **child elements**.
- The parent element is usually called the **Grid Container**.
- The child elements are called **Grid Items**.

#### CSS Setup: Display, Columns, and Rows

- To start working with Grid, address the Grid Container in CSS and declare `display: grid`.

```css
.grid-container {
display: grid;
}
```

- If columns and rows are not declared, the browser determines them automatically (e.g., resulting in one column and multiple rows).
- **Defining Columns:** Use the `grid-template-columns` property. Every value represents one column.

```css
/* Example: three columns, each 200 pixels wide */
grid-template-columns: 200px 200px 200px;
```

- Column sizing can be easily changed by modifying the values (e.g., setting one column to 400 pixels makes it bigger than the others). Adjusting the number and size of columns is often all that is needed for many grid layouts.
- **Visualizing the Grid:** Developer tools (such as the Firefox feature mentioned) can show the columns and rows with purple lines.
- **Defining Rows (Optional):** Use `grid-template-rows`. Often, rows adjust automatically to the columns specified.

```css
/* Example: a tic-tac-toe kind of layout */
grid-template-rows: 200px 200px 200px;
```

- **Creating Space:** The `gap` property creates a space between the columns and rows.

### II. Responsiveness and Units

- When designing layouts, it is crucial to sketch out different versions for different screen sizes because large layouts using fixed values often only fit desktop screens, making them unresponsive.
- Grid provides many tools to achieve responsiveness with few lines of code.

#### Fractional Units (`fr`)

- To make a layout more responsive than using fixed pixel values, use the unit **fraction (`fr`)**.
- Fractions allow the grid to fill out the entire width, ensuring columns have the same size.

```css
/* Each column is one fraction wide */
grid-template-columns: 1fr 1fr 1fr;
```

- Effect of `fr`: The grid stretches horizontally across the entire screen and resizes automatically when the window is resized.
- **Fractions for Rows:** Fractions behave relative to the **grid container**, not the window/viewport. To see the effect of fractions in rows, a height must be assigned to the grid container.

- **Relative Sizing with `fr`:** Fractions can be used relative to one another (e.g., `2fr` makes a column twice the size of those defined as `1fr`).
- **Mixing Units:** It is possible to mix different units within a grid.
  - Example: Creating a sidebar and main content layout.

```css
/* Sidebar stays fixed size, main content is flexible */
grid-template-columns: 200px 1fr;
```

- Fractions behave very similarly to `flex-grow` and `flex-shrink` properties known from Flexbox.

#### Third-Party Tool: Miro (Innovation Workspace)

- Miro is an innovation workspace for developers to brainstorm ideas and collaborate with teams.
- Features include:
  - A massive collection of templates for designing prototypes and planning processes.
  - Tools for various diagrams, potentially useful from computer science studies.
  - Integration of external tools (YouTube videos, Excel/Google Sheets, AWS infrastructure).
  - Effective visualization tool for explaining software processes to non-technical partners, clients, or investors.

### III. Alignment

Alignment involves two distinct concepts: alignment within the cells (items) and alignment of the entire grid (content).

#### Item Alignment (Within Cells)

- These properties handle the alignment of Grid Items inside their respective Grid Cells.

- **Horizontal Alignment:** `justify-items`
- **Vertical Alignment:** `align-items`
- **Values for both:** `start`, `end`, and `center`. Setting both to `center` centers the item perfectly.

#### Content Alignment (Of the Grid)

- These properties handle the alignment of the entire grid structure within the Grid Container.

- **Horizontal Alignment:** `justify-content` (centers the grid horizontally).
- **Vertical Alignment:** `align-content` (centers the grid vertically).
- **Important Note:** The grid is centered within the **grid container**, not necessarily the entire viewport (website). Changing the size of the grid container will affect these properties.

### IV. Implicit Grids

Implicit grids are necessary when the number of elements that make up the grid is unknown or changes dynamically (e.g., content pulled from a database like search results).

- If a fixed grid layout receives too many unexpected elements, the layout can become inconsistent.
- **Managing Automatic Rows:** Use `grid-auto-rows` to control the size of every automatically generated row.

```css
/* Makes every automatically generated row 300 pixels */
grid-auto-rows: 300px;
```

- This property can often replace `grid-template-rows` entirely for a consistent layout where only columns are specified.

- **Controlling Flow Direction:** The `grid-auto-flow` property determines how new elements are added.
  - Default value is `row` (new elements are added in a new row).
  - Setting to `column` means every new element is added in a new column.
    - If `grid-auto-flow: column` is used, remove `grid-template-columns` and use `grid-auto-columns` instead.

```css
/* Defines automated columns, each 300 pixels wide */
grid-auto-columns: 300px;
```

- **Use Cases:** Automated columns/overflowing elements can be used to create websites with horizontal scrolling (e.g., a Netflix letter/row).

### V. Bento Grids and `grid-template-areas`

Bento Grids are characterized by elements stretching across multiple columns or rows. This concept is very unique to CSS Grid and is difficult to achieve with Flexbox.

#### Step 1: Naming Grid Items

- Define the `grid-area` property on the individual child elements (Grid Items) to name them. This name serves as their identifier.
- Naming can be done in CSS or, to save time, using the `style` attribute in HTML.

```html
<div style="grid-area: box-one;">Box 1</div>
```

#### Step 2: Defining the Layout Structure

- Use the property `grid-template-areas` on the Grid Container to define the size and position of the named areas.
- This is where the magic happens.
- **Rules:**
  - Every string defined is one row in the grid.
  - Spaces inside the strings separate the columns.
  - Placing the same area name multiple times causes that box to stretch across those cells.

```css
.grid-container {
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 200px 200px;
  grid-template-areas:
    "box-one box-two box-two box-three"
    "box-one box-four box-five box-five";
}
```

- The layout can be changed easily by altering these strings (e.g., making one box very big by repeating its name across multiple areas).

#### Responsive Bento Grids

- `grid-template-areas` are very powerful for responsive web design.
- For smaller screens, the layout must be rearranged.
- Within a media query, the design can be altered by simply changing the `grid-template-areas` property to suit a thinner layout (e.g., 3x3 layout for tablets, 2-column layout for mobile).

#### Automatic Columns and Rows in Bento Grids

- An alternative way to define the grid, eliminating the need to constantly change `grid-template-columns` and `grid-template-rows` in media queries, is to use implicit grids.
- The necessary column and row information is already contained in `grid-template-areas`.
- Use `grid-auto-columns` and `grid-auto-rows` at the beginning of the grid container definition.

```css
.grid-container {
  grid-auto-columns: 200px;
  grid-auto-rows: 200px;
}
```

- **Control vs. Automation:** While this is a shorter and more automatic way, using `grid-template-columns`/`rows` in media queries offers more control if 100% certainty is needed.

#### Handling Content in Bento Grids

- Using fixed units (like pixels or `em`) limits the size of the boxes.
- When boxes are filled with content, developers must decide whether:
  - **Option 1: Hide Overflow** (`overflow: hidden`) to ensure the grid stays perfectly in place.
  - **Option 2: Adaptive Grid** that resizes based on content.
    - **Adaptive Rows using `auto`:** Row height is dependent on text content; if there is no content, there is no row. This makes balancing the layout difficult.
    - **Adaptive Rows using `1fr`:** All rows are the same size, and if one row grows due to content, the other rows grow accordingly. This works much better.

- **Recommendation:** Bento grids often work better with images and cool graphs rather than large amounts of text, as the goal is usually to make a product look awesome.

### VI. Grid Stacking

Grid is powerful beyond layout creation and can be used to solve different problems, such as stacking elements (placing text on an image or a video behind a section).

- **Concept:** Grid stacking is achieved by making chart elements or other items overlap by assigning them the same grid cell. This achieves the same behavior as absolute positioning relative to a parent.

#### Method 1: Using `grid-row` and `grid-column`

- These properties control how many columns or rows an element should span. Grid lines are counted sequentially (1, 2, 3...).
- Example: `grid-column: 1 / 3` stretches the element across two columns.

- **Grid Stacking Implementation (1x1 Grid):**
  - Set the wrapper to `display: grid` (this automatically creates a 1x1 grid).
  - On both the overlapping elements (e.g., text container and image), set the same span:

```css
/* Covers the entire single grid cell */
grid-column: 1 / 2;
grid-row: 1 / 2;
```

- **Advantage over Absolute Positioning:** Grid stacking provides access to grid properties like `place-items` for easy centering (aligning items at `start`, `end`, or `center`) without calculating offsets (`top: 50%` and translating back).

#### Method 2 (Preferred): Using `grid-template-areas`

- This method is shorter and more readable. It is useful for backgrounds (like placing a large video behind a header section) and avoids the ugly overflow issues that dynamic content might cause with absolute positioning.
- Set the header (wrapper) to `display: grid`.
- Define a single area in the container:

```css
grid-template-areas: "stack";
```

- Assign both overlapping elements (video and text container) to that area:

```css
grid-area: stack;
```

- **Layer Control:** Use the `z-index` property to control which element is on top.
- **Alignment:** Use `place-items: center` for intuitive centering.

### VII. Grid Wrapping (Real-World Online Shop Example)

Grid wrapping is the most important concept in real-life applications. It allows the grid to automatically adjust the number of columns that fit on the screen without using media queries.

#### Step 1: Introducing the `repeat()` Function

- `repeat()` is used within `grid-template-columns`. It takes two arguments:
  - The number of repetitions.
  - The value to repeat.

```css
/* Creates three 300px columns */
grid-template-columns: repeat(3, 300px);
```

#### Step 2: Automatic Fitting

- To calculate how many columns can fit automatically, replace the fixed repetition number with the keyword **`auto-fit`**.

```css
grid-template-columns: repeat(auto-fit, 300px);
```

- Effect: The browser automatically creates and deletes columns (e.g., 300 pixels wide) depending on the available screen size.

#### Step 3: Resizing and Eliminating White Space

- Sometimes, there is wide space available, but not enough space for a new fixed-width column.
- To make remaining columns slightly bigger and utilize that wide space, introduce the `minmax()` function.
- `minmax()` defines a size range for the column:
  - Minimum value (e.g., 300 pixels).
  - Maximum value (e.g., one fraction `1fr`).

```css
/* Automatically fits columns, ensuring each is between 300px and 1fr wide */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

- Result: A responsively wrapping grid where columns resize when needed, ensuring there is no wide space.

# More info: curious/important questions

## `html {}` vs `:root {}`

Both selectors target the **root element of the document**, but they are not completely interchangeable.

| Aspect | `html {}` | `:root {}` |
|--------|-----------|------------|
| **What it selects** | The literal `<html>` element. | The *root* of the document tree – which, in an HTML document, is also the `<html>` element. |
| **Specificity** | **0‑0‑1** (one type selector). | **0‑1‑0** (one ID‑like selector). |
| **Use cases** | General styling of the `<html>` element (e.g., `background`, `font-family`). | Defining **CSS custom properties** (`--var`) that you want to be globally available, because the higher specificity ensures they aren’t unintentionally overridden. |
| **Impact on custom properties** | Variables defined here are still global, but a later rule with higher specificity (e.g., `:root {}`) could override them. | Variables defined here have the highest base specificity, making them harder to override unintentionally. |
| **Browser support** | Universal. | Supported in all modern browsers; `:root` is part of CSS 2.1. |

### Practical difference

```css
html { --color: blue; }   /* specificity 0‑0‑1 */
:root { --color: red; }   /* specificity 0‑1‑0, overrides the above */
```

Because `:root` has higher specificity, the second declaration wins even though both target the same element.

### When to choose which

- **Use `html {}`** for normal styling of the `<html>` element (background, font settings, etc.) when you don’t need the extra specificity.
- **Use `:root {}`** when defining **global CSS variables** or when you want a rule that is less likely to be overridden by other type selectors. It’s the conventional place for custom properties.

## Relative units vs. fixed pixels

**%**, **em**, and **rem** are generally preferred over absolute pixels for responsive design because they let layouts adapt to different screen sizes, font settings, and user preferences.

### Why they work better

| Unit | How it scales | Typical use case | Advantage |
|------|---------------|------------------|-----------|
| **%** | Relative to the parent element’s dimensions (width/height). | Fluid containers, images, grid columns. | Makes the element grow or shrink with its parent, preventing overflow on small screens. |
| **em** | Relative to the **current element’s** font‑size. | Padding, margins, typography that should follow the local font size. | Allows nested scaling—if a parent’s font size changes, its children adjust automatically. |
| **rem** | Relative to the **root (html) font‑size**. | Global spacing, typography, component dimensions. | Provides a single point of control: changing `html {font-size}` updates the whole layout. |

### Practical guidelines

1. **Base font size** – set a comfortable root size (e.g., `html {font-size: 100%;}` or `62.5%` for easy `rem` calculations). Users can adjust this in browser settings, and the entire UI will respect the change.
2. **Containers** – use `%` for width/height of major layout blocks so they fill available space.
3. **Spacing & typography** – prefer `rem` for margins, paddings, and font sizes to keep consistency across components.
4. **Component‑specific scaling** – use `em` when you want an element’s spacing to follow its own font size (e.g., a button that enlarges when its text size is increased).

### Example

```css
html {
  font-size: 100%;          /* 1rem = 16px by default */
}

/* Fluid layout */
.container {
  width: 90%;               /* 90 % of viewport or parent */
  max-width: 1200px;        /* optional cap */
}

/* Consistent spacing */
.card {
  padding: 1.5rem;          /* 24 px */
  margin-bottom: 2rem;     /* 32 px */
}

/* Text that scales with its own size */
.button {
  font-size: 1.2rem;
  padding: 0.5em 1em;       /* 0.5 × button’s font size vertically */
}
```

**Bottom line:** Using `%`, `em`, and `rem` creates layouts that naturally adapt to different devices and respect user‑controlled font scaling, making them superior to fixed pixel values for responsive design.

## SASS (Syntactically Awesome Style Sheets)

SASS is a **CSS pre‑processor**—a scripting language that extends plain CSS with features such as variables, nesting, mixins, functions, and control directives. You write styles in `.scss` (or `.sass`) files; then a SASS compiler transforms them into standard CSS that browsers can understand.

### Core characteristics

| Feature | How SASS provides it |
|---------|----------------------|
| **Variables** | `$primary-color: #0066ff;` – resolved at compile time |
| **Nesting** | Allows hierarchical selectors (`nav { ul { li { … } } }`) |
| **Mixins** | Reusable blocks of declarations (`@mixin btn($bg) { … }`) |
| **Functions** | Compute values (`lighten($color, 20%)`) |
| **Control structures** | `@if`, `@for`, `@each`, `@while` for generating repetitive CSS |
| **Partials & imports** | Split code into multiple files (`@import 'variables';`) |

### Static vs. dynamic variables

- **SASS variables** (`$var`) are **static**: they are replaced with their literal values **during compilation**. After the CSS is generated, the browser sees only the final values; there’s no way to change them at run time without re‑compiling the SASS source.
  
  ```scss
  $primary: #3498db;
  .button { background: $primary; }
  ```

  Compiles to:

  ```css
  .button { background: #3498db; }
  ```

- **CSS custom properties** (`--var`) are **dynamic**: they exist in the rendered stylesheet and can be read or updated with JavaScript at run time, affecting all rules that reference them instantly.

  ```css
  :root { --primary: #3498db; }
  .button { background: var(--primary); }
  ```

  ```js
  document.documentElement.style.setProperty('--primary', 'crimson');
  ```

### When to use each

- **SASS** is great for **author‑time** conveniences: DRY code, calculations, theming during build, and generating large, maintainable style sheets.
- **CSS variables** shine for **run‑time** theming, user‑controlled preferences (dark mode, color pickers), and situations where you need to toggle values without a page reload.

Often projects combine both: SASS builds the base stylesheet, and CSS custom properties handle dynamic theming on the client side.
