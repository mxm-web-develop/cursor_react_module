Guides

Spacing
=======

Overview of the space scale and scaling options.

[Space scale](#space-scale)
---------------------------

Spacing values are derived from a 9-step scale, which is used for props such as margin and padding. These props accept numeric strings from `"1"` to `"9"`, which correspond to the steps in the scale below.

1

2

3

4

5

6

7

8

9

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Step

Base value

1

`4px`

2

`8px`

3

`12px`

4

`16px`

5

`24px`

6

`32px`

7

`40px`

8

`48px`

9

`64px`

#### Space scale tokens

Space scale tokens can be also accessed using CSS variables. You can use these tokens to style your custom components, ensuring they are consistent with the rest of your theme.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    /* Space scale */
    var(--space-1);
    var(--space-2);
    var(--space-3);
    var(--space-4);
    var(--space-5);
    var(--space-6);
    var(--space-7);
    var(--space-8);
    var(--space-9);
    

[Scaling](#scaling)
-------------------

Values which affect layout (spacing, font size, line height) scale relatively to each other based on the `scaling` value defined in your Theme. This setting allows you to scale the UI density uniformly across your entire application.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme scaling="100%">
    	<Card variant="surface">
    		<Flex gap="3" align="center">
    			<Avatar size="3" src={person.image} fallback={person.name} />
    			<Box>
    				<Text as="div" size="2" weight="bold">
    					{person.name}
    				</Text>
    				<Text as="div" size="2" color="gray">
    					Approved invoice <Link>#3461</Link>
    				</Text>
    			</Box>
    		</Flex>
    	</Card>
    </Theme>
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

`90%`

Danilo Sousa

Approved invoice [#3461](#)

`95%`

Danilo Sousa

Approved invoice [#3461](#)

`100%`

Danilo Sousa

Approved invoice [#3461](#)

`105%`

Danilo Sousa

Approved invoice [#3461](#)

`110%`

Danilo Sousa

Approved invoice [#3461](#)

#### Scaling factor

The scaling factor token can be accessed using the `--scaling` CSS variable. If you need to use different scaling factors in your app, you can use this token in your custom styles, ensuring they are consistent with the rest of your theme.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    .MyCustomComponent {
    	width: calc(200px * var(--scaling));
    }
    

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Typography](/themes/docs/theme/typography)

Next[Breakpoints](/themes/docs/theme/breakpoints)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/spacing.mdx "Edit this page on GitHub.")