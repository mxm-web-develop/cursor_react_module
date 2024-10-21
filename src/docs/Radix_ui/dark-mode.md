Guides

Dark mode
=========

Using appearance to manage and integrate dark mode.

[Overview](#overview)
---------------------

Light and dark modes are supported out of the box, allowing you to easily switch appearance without additional design or styling.

![](https://workos.imgix.net/images/e35b46dc-4384-43d1-932c-24fa44e212cd.png?auto=format&fit=clip&q=80)

### King Krule – The OOZ

A dark and introspective album that showcases a distinctive blend of genres.

Listen Now

![](https://workos.imgix.net/images/e35b46dc-4384-43d1-932c-24fa44e212cd.png?auto=format&fit=clip&q=80)

### King Krule – The OOZ

A dark and introspective album that showcases a distinctive blend of genres.

Listen Now

[Basic usage](#basic-usage)
---------------------------

By default, the root `Theme` appearance is `light`. To set a different appearance pass it via the `appearance` prop. This will force the theme to use the specified setting.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme appearance="dark">
    	<MyApp />
    </Theme>
    

[Inheriting system appearance](#inheriting-system-appearance)
-------------------------------------------------------------

A common requirement is to inherit the appearance setting from a user’s system preferences.

This is a deceptively complex problem to solve given SSR, SSG and client side hydration considerations. To make implementation easier, we recommend integrating with a theme switching library.

### [With next-themes](#with-next-themes)

Integration with `next-themes` is simple and straightforward because Radix Themes implements matching class names.

To enable dark mode, use `<ThemeProvider>` from `next-themes` with `attribute="class"`.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    import { Theme } from "@radix-ui/themes";
    import { ThemeProvider } from "next-themes";
    
    export default function () {
    	return (
    		<ThemeProvider attribute="class">
    			<Theme>
    				<MyApp />
    			</Theme>
    		</ThemeProvider>
    	);
    }
    

**Do not** try to set `<Theme appearance={resolvedTheme}>`. Instead, rely just on class switching that `next-themes` provides. This way `next-themes` can prevent the appearance flash during initial render.

### [With other libraries](#with-other-libraries)

Any library that supports class switching is compatible. You’ll just need to ensure that the appended class names match those supported by Radix Themes:

*   `className="light"`
*   `className="light-theme"`
*   `className="dark"`
*   `className="dark-theme"`

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Color](/themes/docs/theme/color)

Next[Typography](/themes/docs/theme/typography)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/dark-mode.mdx "Edit this page on GitHub.")