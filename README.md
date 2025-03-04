# immosquare Bootstrap Extension

The immosquare Bootstrap Extension provides a dynamic approach to manage Bootstrap colors using custom css variables. It's designed to simplify and enhance the theming process of your Bootstrap-based projects. In addition to offering a customizable palette, this extension introduces several additional CSS definitions to enrich the visual presentation and ensure a coherent and appealing interface.

With this module, you no longer have to hard-code your Bootstrap colors. Instead, you can easily adjust the color scheme by changing a few root variables, making it both flexible and maintainable. Beyond color management, it incorporates additional styles and tweaks, ensuring your project stands out with a unique touch.


## Installation

Install this module as you would with any NPM package:

```bash
bun add @immosquare/immosquare-bootstrap-extension
```

## Usage

To use the theme, you must first define the root colors in your styles:

```css
:root {
  --color1: #b6a6ca;
  --color1-rgb: 182,166,202;
  --color2: #1A7278;
  --color2-rgb: 25,114,120;
  --color1-contrast: #FFFFFF;
  --color2-contrast: #FFFFFF;

}
```


Once defined, you can include the immosquare Bootstrap Extension in your SCSS (wihtout bootstrap sources)

```scss
@import "@immosquare/immosquare-bootstrap-extension/base";
```

or with bootstrap sources
```scss
@import "@immosquare/immosquare-bootstrap-extension/src/base-bootstrap";
```

This will style Bootstrap components according to the defined theme in the module, with the custom colors you set in your project.

## Demo
```
bun run dev
# Server running at http://localhost:5173/
```

## Contributing
If you find any issues or would like to suggest improvements, feel free to create an issue or pull request.
