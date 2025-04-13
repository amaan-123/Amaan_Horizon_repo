# What is CSS?

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

## 📋 Summary Table

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
