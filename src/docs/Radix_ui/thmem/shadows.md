Guides

Shadows
=======

Understanding the shadow styles used in your theme.

Shadows used in the components are derived from a 6-step scale. Refer to the [source code](https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/styles/tokens/shadow.css) for the actual values used to achieve these shadows.

1

2

3

4

5

6

#### Shadow tokens

Shadow tokens can be accessed using CSS variables. You can use these tokens to style your custom components, ensuring they are consistent with the rest of your theme.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    /* Inset shadow */
    var(--shadow-1);
    
    /* Shadows for variant="classic" panels, like Card */
    var(--shadow-2);
    var(--shadow-3);
    
    /* Shadows for smaller overlay panels, like Hover Card and Popover */
    var(--shadow-4);
    var(--shadow-5);
    
    /* Shadows for larger overlay panels, like Dialog */
    var(--shadow-6);
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Radius](/themes/docs/theme/radius)

Next[Cursors](/themes/docs/theme/cursors)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/shadows.mdx "Edit this page on GitHub.")