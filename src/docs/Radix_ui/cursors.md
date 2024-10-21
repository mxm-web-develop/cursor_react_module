Guides

Cursors
=======

Customizing cursors used for interactive elements.

[Default cursors](#default-cursors)
-----------------------------------

By default, interactive elements that don’t link to another page use the regular arrow cursor. This also matches the browser defaults. However, disabled elements use an explicit disabled cursor.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Button[Link](#)Disabled

Ghost button[Link](#)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Flex align="center" gap="4" wrap="wrap">
    	<Flex align="center" gap="3" wrap="wrap">
    		<Button>Button</Button>
    		<Button asChild>
    			<a href="#">Link</a>
    		</Button>
    		<Button disabled>Disabled</Button>
    	</Flex>
    	<Button variant="ghost">Ghost button</Button>
    	<Link href="#" size="2">
    		Link
    	</Link>
    	<Checkbox defaultChecked />
    	<Switch defaultChecked />
    	<Switch defaultChecked disabled />
    </Flex>
    

[Cursor tokens](#cursor-tokens)
-------------------------------

Cursor settings can be accessed using CSS variables. You can use these tokens to style your custom components, ensuring they are accessible and consistent with the rest of your theme.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    /* Available cursor tokens */
    var(--cursor-button);
    var(--cursor-checkbox);
    var(--cursor-disabled);
    var(--cursor-link);
    var(--cursor-menu-item);
    var(--cursor-radio);
    var(--cursor-slider-thumb);
    var(--cursor-slider-thumb-active);
    var(--cursor-switch);
    

[Customization](#customization)
-------------------------------

It’s common to use a pointer cursor for interactive elements. Radix Themes cursors can be customized by overriding the corresponding CSS variables of the token system.

Here’s an example of how you can customize the cursor tokens to set `cursor: pointer` for most interactive elements in the theme:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    .radix-themes {
    	--cursor-button: pointer;
    	--cursor-checkbox: pointer;
    	--cursor-disabled: default;
    	--cursor-link: pointer;
    	--cursor-menu-item: pointer;
    	--cursor-radio: pointer;
    	--cursor-slider-thumb: grab;
    	--cursor-slider-thumb-active: grabbing;
    	--cursor-switch: pointer;
    }
    

Make sure that your CSS is applied after the Radix Themes styles so that it takes precedence.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Shadows](/themes/docs/theme/shadows)

Next[Box](/themes/docs/components/box)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/cursors.mdx "Edit this page on GitHub.")