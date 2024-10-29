Guides

Typography
==========

Guidance for using and tuning typography.

[Base components](#base-components)
-----------------------------------

Use [Text](/themes/docs/components/text) and [Heading](/themes/docs/components/heading) components to render titles and body copy. These components share `size` and `weight` props and map to the underlying type system to ensure consistent typography throughout your app.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Typographic principles
======================

The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Heading mb="2" size="4">Typographic principles</Heading>
    <Text>The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant.</Text>
    

[Formatting components](#formatting-components)
-----------------------------------------------

Compose formatting components to add [emphasis](/themes/docs/components/em), [signal importance](/themes/docs/components/strong), present [code](/themes/docs/components/code) and more.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

The _most_ important thing to remember is, **stay positive**.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Text>
    	The <Em>most</Em> important thing to remember is,{" "}
    	<Strong>stay positive</Strong>.
    </Text>
    

[Type scale](#type-scale)
-------------------------

The typographic system is based on a 9-step `size` scale. Every step has a corresponding font size, line height and letter spacing value which are all designed to be used in combination.

Aa

1

Aa

2

Aa

3

Aa

4

Aa

5

Aa

6

Aa

7

Aa

8

Aa

9

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

The quick brown fox jumps over the lazy dog.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Text size="6">The quick brown fox jumps over the lazy dog.</Text>
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Step

Size

Letter spacing

Line height

1

`12px`

`0.0025em`

`16px`

2

`14px`

`0em`

`20px`

3

`16px`

`0em`

`24px`

4

`18px`

`-0.0025em`

`26px`

5

`20px`

`-0.005em`

`28px`

6

`24px`

`-0.00625em`

`30px`

7

`28px`

`-0.0075em`

`36px`

8

`35px`

`-0.01em`

`40px`

9

`60px`

`-0.025em`

`60px`

[Font weight](#font-weight)
---------------------------

The following weights are supported. Weights can be [customized](/themes/docs/theme/typography#custom-font-weights) to map to your own typeface.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

LightRegularMediumBold

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Text size="6">
    	<Flex direction="column">
    		<Text weight="light">Light</Text>
    		<Text weight="regular">Regular</Text>
    		<Text weight="medium">Medium</Text>
    		<Text weight="bold">Bold</Text>
    	</Flex>
    </Text>
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Weight

Default value

Light

`300`

Regular

`400`

Medium

`500`

Bold

`700`

[Font family](#font-family)
---------------------------

By default, Radix Themes uses a system font stack for portability and legibility. Continue to the next section to learn about customizing your theme with a custom font.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Type

Default value

Text

`-apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`

Code

`'Menlo', 'Consolas (Custom)', 'Bitstream Vera Sans Mono', monospace, 'Apple Color Emoji', 'Segoe UI Emoji'`

Emphasis

`'Times New Roman', 'Times', serif`

Quote

`'Times New Roman', 'Times', serif`

[Customization](#customization)
-------------------------------

Radix Themes typography can be customized by overriding the corresponding CSS variables of the token system. Refer to the [source code](https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/styles/tokens/typography.css) for the full list of the typographic tokens.

Make sure that your CSS is applied after the Radix Themes styles so that it takes precedence.

### [Custom fonts](#custom-fonts)

You can provide your own fonts, however, how you choose to import and serve them is up to you. It is only required that you specify your named fonts using the correct syntax.

To customize the font family used in your theme, remap the corresponding `font-family` tokens:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    .radix-themes {
    	--default-font-family:  /* Your custom default font */ --heading-font-family:
    		/* Your custom font for <Heading> components */ --code-font-family:
    		/* Your custom font for <Code> components */ --strong-font-family:
    		/* Your custom font for <Strong> components */ --em-font-family:
    		/* Your custom font for <Em> components */ --quote-font-family:
    		/* Your custom font for <Quote> components */;
    }
    

### [With next/font](#with-nextfont)

To load custom fonts via [next/font](https://nextjs.org/docs/app/api-reference/components/font), use the [`variable`](https://nextjs.org/docs/app/api-reference/components/font#variable) option to define a CSS variable name. Then, add that CSS variable class to your HTML document.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    import { Inter } from "next/font/google";
    
    const inter = Inter({
    	subsets: ["latin"],
    	display: "swap",
    	variable: "--font-inter",
    });
    
    export default function RootLayout({ children }) {
    	return (
    		<html lang="en" className={inter.variable}>
    			<body>{children}</body>
    		</html>
    	);
    }
    

Finally, assign the CSS variable in your custom CSS:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    .radix-themes {
    	--default-font-family: var(--font-inter);
    }
    

Be aware that you may encounter css import order issues if you are running the app router. See [common styling issues](/themes/docs/overview/styling#nextjs-import-order) for more information.

### [Custom font weights](#custom-font-weights)

To customize the exact font weights used in your theme, remap the corresponding `font-weight` tokens to your own values:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    .radix-themes {
    	--font-weight-light: 200;
    	--font-weight-regular: 300;
    	--font-weight-medium: 600;
    	--font-weight-bold: 800;
    }
    

### [Advanced settings](#advanced-settings)

There’s a number of advanced typographic features that can be customized. These include a font size multiplier for certain components, font style, letter spacing, and leading trim. For example, you can customize the headings to render with a relatively larger font size than your default font, different leading trim values, and tighter letter spacing:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    .radix-themes {
    	--heading-font-family: "Untitled Sans", sans-serif;
    	--heading-font-size-adjust: 1.05;
    	--heading-font-style: normal;
    	--heading-leading-trim-start: 0.42em;
    	--heading-leading-trim-end: 0.38em;
    	--heading-letter-spacing: -0.01em;
    }
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Dark mode](/themes/docs/theme/dark-mode)

Next[Spacing](/themes/docs/theme/spacing)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/typography.mdx "Edit this page on GitHub.")