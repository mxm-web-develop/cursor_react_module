Guides

Theme overview
==============

Use the Theme component to change the look and feel of your UI.

[Anatomy](#anatomy)
-------------------

The [Theme component](/themes/docs/components/theme) defines the overall visual look of your application. It can be customized by passing a minimal set of configuration options.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

### Sound

Yamaha THR

NormalizeOn

EqualizerOn

3D AudioOff

Cross-FadeOff

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Theme
    	accentColor="mint"
    	grayColor="gray"
    	panelBackground="solid"
    	scaling="100%"
    	radius="full"
    >
    	<ThemesVolumeControlExample />
    </Theme>
    

A well tuned set of defaults is provided to get you started, but don’t be afraid to play with all of the available options to find the right visual style for your application. Check out the [Playground](/themes/playground) to see what effect each option has.

[Variants](#variants)
---------------------

Variants are visual variations of a component which are used to create visual hierarchies and communicate relative importance.

Each component offers a different set of variants, though all are designed to be consistent and complimentary with each other.

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

Get started Get started Get started

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

    <Flex gap="3" align="center">
    	<Button variant="classic">
    		Get started <ArrowRightIcon />
    	</Button>
    	<Button variant="solid">
    		Get started <ArrowRightIcon />
    	</Button>
    	<Button variant="soft">
    		Get started <ArrowRightIcon />
    	</Button>
    </Flex>
    

[Examples](#examples)
---------------------

Using a combination of component variants alongside customized theme settings allows you to create a multitude of unique-looking interfaces.

For example you could create:

*   [Music applications](/themes/example-music-app)
*   [Ecommerce product elements](/themes/example-ecommerce)
*   [SaaS dashboards](/themes/example-dashboard)

Or any number of differing treatments and styles.

### Your profile

Name

Username

Email

Privacy

Display my listening historyEveryone can follow my activityShow my playlists in search

Danger zone

[Reset recommendations](#)[Delete profile](#)

### Invoice paid

You paid $17,975.30. A receipt copy was sent to **acc@example.com**

Next invoiceDone

[Tokens](#tokens)
-----------------

Tokens provide direct access to theme values and give you flexibility to build and customize your own themed components.

For all available theme tokens see the [source code](https://github.com/radix-ui/themes/tree/main/packages/radix-ui-themes/src/styles/tokens), or read more about each type of token in the relevant theme pages.

[

Color

Understand the color system and its application in your theme.

](/themes/docs/theme/color)[

Typography

Learn how to use and customize the typographic elements of your theme.

](/themes/docs/theme/typography)[

Spacing

Explore the spacing scale and the available scaling options.

](/themes/docs/theme/spacing)[

Radius

Choose the radius setting in your theme that fits your style.

](/themes/docs/theme/radius)[

Shadows

Use elevation, depth and shadows effectively and customize their properties.

](/themes/docs/theme/shadows)[

Cursors

Customizing cursors used for interactive elements.

](/themes/docs/theme/cursors)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

#### Quick nav

Previous[Resources](/themes/docs/overview/resources)

Next[Color](/themes/docs/theme/color)

[Edit this page on GitHub.](https://github.com/radix-ui/website/edit/main/data/themes/docs/theme/overview.mdx "Edit this page on GitHub.")