# Immopsquare Bootstrap Extension

The Immopsquare Bootstrap Extension provides a dynamic approach to manage Bootstrap colors using custom variables. It's designed to simplify and enhance the theming process of your Bootstrap-based projects. In addition to offering a customizable palette, this extension introduces several additional CSS definitions to enrich the visual presentation and ensure a coherent and appealing interface.

With this module, you no longer have to hard-code your Bootstrap colors. Instead, you can easily adjust the color scheme by changing a few root variables, making it both flexible and maintainable. Beyond color management, it incorporates additional styles and tweaks, ensuring your project stands out with a unique touch.


## Installation

Install this module as you would with any NPM package:

```bash
npm install immosquare-bootstrap-extension
```

## Usage

To use the theme, you must first define the root colors in your styles:

```css
:root {
  --color1: #YourPrimaryColor;
  --color2: #YourSecondaryColor;
  --color1-contrast: #YourPrimaryContrastColor; /* Typically a text color that contrasts well with color1 */
  --color2-contrast: #YourSecondaryContrastColor; /* Typically a text color that contrasts well with color2 */
}
```

Replace `#YourPrimaryColor`, `#YourSecondaryColor`, `#YourPrimaryContrastColor`, and `#YourSecondaryContrastColor` with your desired colors.

Once defined, you can include the Immopsquare Bootstrap Extension in your SCSS:

```scss
@import "immosquare-bootstrap-extension/immosquare-bootstrap-extension.scss";
```

This will style Bootstrap components according to the defined theme in the module, with the custom colors you set in your project.


## Contributing

If you find any issues or would like to suggest improvements, feel free to create an issue or pull request.
