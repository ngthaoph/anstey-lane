  <div align="center">
<h1>Spinners & Animations React Components Library</h1>
    We built this so you can enhance your UI effortlessly! ✨
    <br />
    <br />
    <a href="https://ponder-gold.vercel.app/" disabled>View Demo Site</a>
    ·
  <br/>
  <br/>

<span style="color:red"><strong> Fully Released 🚀</strong></span>
<br />
<br />
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWp0N3VrbWozYmtpeWN0czUzZG5hazd4YmxzNWNvbjV2eGZ6djM5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iHsP6oTTK5PArxc478/giphy.gif" alt="Spinner Demo GIF1" width="500" />
<br />
<br />
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanltcnd0YjhlZHhpazZ5dGJ3cnJwbjRqbTY4ank0emh3dzlkNXYwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hpAgl82gAgE1flIdHS/giphy.gif" alt="Spinner Demo GIF2" width="500" />
<br />
<br />
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRvOW91aTY0bW82MzczZHJ0Yjl6bGZuYWpybXE5MDNlNTJudjdhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dBAu7URHBi5PRaZ5Ic/giphy.gif" alt="Spinner Demo GIF3" width="500" />
<br />
<br />
Team DBUG DINGOES from Holmesglen Ponder Spinners has crafted a set of animated SVG spinners and loading indicators, so you don’t have to spend time coding and debugging UI components from scratch. Enhance your app's loading experience with visually captivating components!

  <br />
  <br />
  
  </div>

# Spinner Components Animation

This library includes various React components for spinners and animations, helping you enhance your UI effortlessly using **styled-components** for animations and customizations.

---

## Current Components 🛠️

| Name     | Import Statement                                      | Description                                                                    |
| -------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| Spin     | `import {Spin} from "@holmesdev/ponder-spinners"`     | Rotating circular spinner with customizable speed, direction, and color.       |
| Dots     | `import {Dots} from "@holmesdev/ponder-spinners"`     | Sequentially jumping dots creating a wave-like loading effect.                 |
| PulseBox | `import {PulseBox} from "@holmesdev/ponder-spinners"` | Morphing boxes that shift between squares and circles in a sequence.           |
| Wave     | `import {Wave} from "@holmesdev/ponder-spinners"`     | Animated wave with customizable size, colors, speed, and opacity.              |
| Circles  | `import {Circles} from "@holmesdev/ponder-spinners"`  | Animated set of morphing circles with customizable size, colors, and duration. |

---

## Installation

To install and set up the library, run:

```bash

npm i @holmesdev/ponder-spinners
```

Or using Yarn:

```bash

npm add @holmesdev/ponder-spinners
```

---

## Usage

### **Spin**

```javascript
import { Spin } from "@holmesdev/ponder-spinners";

<Spin
  color1="#FF6F61"
  color2="#ffa9a1"
  opacity1={0.5}
  opacity2={1}
  speed="1s"
  opacity={0.7}
  direction="360deg"
  size="100"
/>;
```

### **Dots**

```javascript
import { Dots } from "@holmesdev/ponder-spinners";

<Dots colors={["#22333B", "#FF6F61", "#B7AEA3"]} />;
```

### **Pulse Box**

```javascript
import { PulseBox } from "@holmesdev/ponder-spinners";

<PulseBox color={["#22333B", "#FF6F61", "#ffa9a1", "#22333B"]} />;
```

### **Wave**

```javascript
import { Wave } from "@holmesdev/ponder-spinners";

<Wave size="70px" color={["#22333B", "#EAE0D5"]} speed="2s" opacity={1} />;
```

### **Circles**

```javascript
import { Circles } from "@holmesdev/ponder-spinners";

<Circles
  size={90}
  color1="#FF6F61"
  color2="#22333B"
  color3="#ffa9a1"
  duration={3}
/>;
```

---

## Component Properties 📋

### Spin

| Property    | Type   | Description                                                     |
| ----------- | ------ | --------------------------------------------------------------- |
| `color1`    | string | Color 1 of the circular spinner. Defaults to `#FF6F61`.         |
| `color2`    | string | Color 2 of the circular spinner. Defaults to `#ffa9a1`.         |
| `opacity1`  | number | Opacity of the color 1. Defaults to `1`.                        |
| `opacity2`  | number | Opacity of the color 2. Defaults to `0.5`.                      |
| `speed`     | string | Speed of the rotation (e.g., `1s`). Defaults to `1s`.           |
| `direction` | string | Direction of rotation (e.g., `360deg`). Defaults to `-360deg`.  |
| `size`      | string | The size of the spinner (e.g., `100`). Defaults to `100       ` |

### Dots

| Property | Type             | Description                                                                   |
| -------- | ---------------- | ----------------------------------------------------------------------------- |
| `colors` | array of strings | Colors for each of the dots. Defaults to `["#22333B", "#EAE0D5", "#C6AC8F"]`. |

### Pulse Box

| Property | Type             | Description                                                                                |
| -------- | ---------------- | ------------------------------------------------------------------------------------------ |
| `color`  | array of strings | Colors for the morphing boxes. Defaults to `["#2f3e46", "#e0e0e0", "#6b6252", "#ccb69b"]`. |
| `delay`  | string           | Delay between animations. Pre-configured but can be customized if needed.                  |

### Wave

| Property  | Type             | Description                                                                   |
| --------- | ---------------- | ----------------------------------------------------------------------------- |
| `size`    | string           | Size of the SVG (width and height). Defaults to `30px`.                       |
| `color`   | array of strings | Array of colors for the wave animation. Defaults to `["#22333B", "#EAE0D5"]`. |
| `speed`   | string           | Speed of the animation (e.g., `2s`). Defaults to `2s`.                        |
| `opacity` | number           | Opacity of the wave (0 to 1). Defaults to `1`.                                |

### Circles

| Property   | Type   | Description                                                   |
| ---------- | ------ | ------------------------------------------------------------- |
| `size`     | number | Size of the circles. Defaults to `90`.                        |
| `color1`   | string | Color of the first circle. Defaults to `"#FF6F61"`.           |
| `color2`   | string | Color of the second circle. Defaults to `"#22333B"`.          |
| `color3`   | string | Color of the third circle. Defaults to `"#ffa9a1"`.           |
| `duration` | number | Duration of the animation cycle in seconds. Defaults to `3s`. |

---

<br />
<br />

## Inspiration 💡

This library is inspired by various popular UI/UX components and spinners to ensure optimal user experience while loading content. Special thanks to the open-source community for their contributions to animated UI libraries.

### Special Thanks 🎉

Our Mentors for guiding us through the development process; Alex, Amberle and Daniel
