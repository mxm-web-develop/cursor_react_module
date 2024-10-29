Overview

Getting started
===============

Install Radix Themes and start building in minutes.

Radix Themes is a pre-styled component library that is designed to work out of the box with minimal configuration. If you are looking for the unstyled components, go to [Radix Primitives](/primitives).

[Installation](#installation)
-----------------------------

Getting up and running is quick and easy.

### [1\. Install Radix Themes](#1-install-radix-themes)

Install the package from your command line.

npmnpmyarnyarnpnpmpnpm

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    npm install @radix-ui/themes

### [2\. Import the CSS file](#2-import-the-css-file)

Import the global CSS file at the root of your application.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    import "@radix-ui/themes/styles.css";
    

### [3\. Add the Theme component](#3-add-the-theme-component)

Add `Theme` to your application, wrapping the root component inside of `body`.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    import { Theme } from "@radix-ui/themes";
    
    export default function () {
    	return (
    		<html>
    			<body>
    				<Theme>
    					<MyApp />
    				</Theme>
    			</body>
    		</html>
    	);
    }
    

### [4\. Start building](#4-start-building)

You are now ready to use Radix Themes components.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    import { Flex, Text, Button } from "@radix-ui/themes";
    
    export default function MyApp() {
    	return (
    		<Flex direction="column" gap="2">
    			<Text>Hello from Radix Themes :)</Text>
    			<Button>Let's go</Button>
    		</Flex>
    	);
    }
    

[Customizing your theme](#customizing-your-theme)
-------------------------------------------------

Configuration is managed and applied via the [Theme](/themes/docs/components/theme) component.

### [Basic configuration](#basic-configuration)

Pass [configuration](/themes/docs/components/theme) to the `Theme` to customize appearance.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
    	<MyApp />
    </Theme>
    

### [Using the theme panel](#using-the-theme-panel)

`ThemePanel` is a drop-in component that allows you to preview the theme in real time. Visit the [component playground](/themes/playground) to see it in action.

To add `ThemePanel` to your app, import it from the package and drop it inside your root `Theme`.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    import { Theme, ThemePanel } from "@radix-ui/themes";
    
    export default function () {
    	return (
    		<Theme>
    			<MyApp />
    			<ThemePanel />
    		</Theme>
    	);
    }
    

### [Take it further](#take-it-further)

Get the most out of Radix Themes by exploring more concepts and features.

[

Styling

Learn how to approach styling and overrides with Radix Themes.

](/themes/docs/overview/styling)[

Layout

Get to know the layout primitives and their available properties.

](/themes/docs/overview/layout)[

Theme overview

Anatomy of a theme and how to create the perfect style for your app.

](/themes/docs/theme/overview)[

Color

Understand the color system and its application in your theme.

](/themes/docs/theme/color)[

Dark mode

Integrate a great looking dark mode into your app using appearances.

](/themes/docs/theme/dark-mode)[

Typography

Add custom typefaces and fine tune typographic details.

](/themes/docs/theme/typography)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Next[Styling](/themes/docs/overview/styling)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/overview/getting-started.mdx "Edit this page on GitHub.")