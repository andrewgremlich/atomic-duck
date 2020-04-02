# Atomic Duck

A minimalist theme for Hugo SSG. Go to [gremlich.me](https://gremlich.me) blog for a visual cue of what the theme looks like.

The goal of this theme was to help manage multiple websites to look consistent with each other. This theme should also be customizable and easy to manage.

## Use

There are several options to add to your Hugo `config.toml` file. Those options will direct how to use this theme.

1. Be sure to add `theme = "atomic-duck"` and `author` to your config file in order to use this theme.

2. If you want to include custom JS files in your Hugo Site, add in the `custom_js` option to your `[params]`. This option is an array of strings, and those strings are filepaths to your custom JS files.

3. If you want to include custom CSS files in your Hugo Site, add in the `custom_css` option to your `[params]`. This option is an array of strings, and those strings are filepaths to you custom CSS files.

    1. Note! This is where the **required** CSS variables file would be imported. Below is an example code snippet that uses dark and light themes. 
    2. If you want to use theming, add to the `[params]` the option `theming = true`.

```css
:root {
--theme-black: #191919;
--theme-green: #143025;
--theme-white: #f2f2f2;
--faded-black: rgba(0, 0, 0, 0.2);
--box-shadow: 0px 0px 2px 2px var(--faded-black);

--theme-highlighter: rgb(88 160 80 / 0.5);
}

.dark-theme {
--theme-first-color: #61d376;
--theme-second-color: #77c5ef;
--theme-attention: #77efdd;
--theme-background: #4f2a2a;

--theme-h1: var(--theme-white);
--theme-h2: var(--theme-white);
--theme-p: var(--theme-white);

transition: all 2s;
}

.light-theme {
--theme-first-color: #217f32;
--theme-second-color: #115477;
--theme-attention: #05937e;
--theme-background: #ff8484;

--theme-h1: var(--theme-black);
--theme-h2: var(--theme-black);
--theme-p: var(--theme-black);

transition: all 2s;
}
```

4. If you want to use a service worker, provide your own in the root of the `/static` folder. In the config file, add the option `service_worker` with the path to the service worker in the `[params]` section.

5. If you want to use the downloader feature with this theme, provide in the `[params]` section the option `downloader = true`.

    1. The downloader feature enables the user the "download" the posts they visit so that they could visit them later.

    2. Note! This does **require** a service worker as listed in step 4.

6. If you want to use the built in search with LunrJS, add into the `[params]` the option `useSearch = true`.

    1. Note! **You will need to create your own index file** and provide that in the `/static` folder and name it `search-index.json`.

7. There exists in this theme a JS library for the user to highlight selections they like in posts. To enable that option, add in `highlight = true` to the `[params]`.

8. If you want to add additional URLs in the footer add in a `[[params.additional_urls]]` section like the following.

```toml
url = '/about'
name = 'About Me'
```