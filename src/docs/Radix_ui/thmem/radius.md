Guides

Radius
======

Choosing the right radius setting in your theme.

[Theme setting](#theme-setting)
-------------------------------

Theme `radius` setting manages the radius factor applied to the components:

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme radius="medium">
    	<TextField.Root size="3" placeholder="Reply…">
    		<TextField.Slot side="right" px="1">
    			<Button size="2">Send</Button>
    		</TextField.Slot>
    	</TextField.Root>
    </Theme>
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

`none`

Send

`small`

Send

`medium`

Send

`large`

Send

`full`

Send

The resulting `border-radius` is contextual and differs depending on the component. For example, when set to `full`, a [Button](/themes/docs/components/button) becomes pill-shaped, while a [Checkbox](/themes/docs/components/checkbox) will never become fully rounded to prevent any confusion between it and a [Radio](/themes/docs/components/radio).

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Save

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme radius="full">
    	<Flex align="center" gap="3">
    		<Button>Save</Button>
    		<Switch defaultChecked />
    		<Checkbox defaultChecked />
    	</Flex>
    </Theme>
    

[Radius overrides](#radius-overrides)
-------------------------------------

Certain components allow you to override the radius factor using their own `radius` prop.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

SaveSaveSaveSaveSave

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Flex align="center" gap="3">
    	<Button radius="none">Save</Button>
    	<Button radius="small">Save</Button>
    	<Button radius="medium">Save</Button>
    	<Button radius="large">Save</Button>
    	<Button radius="full">Save</Button>
    </Flex>
    

Components that render panels, like Card, Dialog, and Popover, among others, won’t have the `radius` prop, but will inherit the radius setting from the theme. The `radius` prop is also unavailable on most text-based components.

[Radius scale](#radius-scale)
-----------------------------

Radius values used in the components are derived from a 6-step scale.

1

2

3

4

5

6

While you can’t use a specific step on a particular component directly—the `radius` prop is used to set just the radius factor—you can use the radius scale to style your own components.

Radius tokens are accessed using CSS variables. You can use these tokens to style your custom components, ensuring they are consistent with the rest of your theme.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    /* Radius values that automatically respond to the radius factor */
    var(--radius-1);
    var(--radius-2);
    var(--radius-3);
    var(--radius-4);
    var(--radius-5);
    var(--radius-6);
    
    /* A multiplier that controls the theme radius */
    var(--radius-factor);
    
    /*
     * A variable used to calculate a fully rounded radius.
     * Usually used within a CSS `max()` function.
     */
    var(--radius-full);
    
    /*
     * A variable used to calculate radius of a thumb element.
     * Usually used within a CSS `max()` function.
     */
    var(--radius-thumb);
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Breakpoints](/themes/docs/theme/breakpoints)

Next[Shadows](/themes/docs/theme/shadows)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/radius.mdx "Edit this page on GitHub.")