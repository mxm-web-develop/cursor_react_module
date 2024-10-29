Guides

Breakpoints
===========

Built-in breakpoints allow you to easily build adaptive layouts.

[Available sizes](#available-sizes)
-----------------------------------

Each breakpoint matches a fixed screen width. Values are `min-width` based and apply when the screen width is equal or greater.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Size

Width

initial

Phones (portrait)

`0px`

xs

Phones (landscape)

`520px`

sm

Tablets (portrait)

`768px`

md

Tablets (landscape)

`1024px`

lg

Laptops

`1280px`

xl

Desktops

`1640px`

[Usage](#usage)
---------------

Most component size and layout props will accept an additional `Responsive` object shape for modifying the given prop across breakpoints.

Each size maps to a corresponding key, the value of each will be applied when the screen size is greater than or equal to the named breakpoint.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Heading
    	size={{
    		initial: "3",
    		md: "5",
    		xl: "7",
    	}}
    />
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Spacing](/themes/docs/theme/spacing)

Next[Radius](/themes/docs/theme/radius)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/breakpoints.mdx "Edit this page on GitHub.")