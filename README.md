# Perpetua Coding Challenge - Build an Emoji App

In this challenge the applicant will implement a single page web app that will be able to search from a set of emojis and translate text into emojis.

A base react app is provided with an Emoji component that will be useful for displaying emojis. Included also is a model representation of an emoji and the list of all emojis that should be searchable and translatable.

All code provided is editable.
You can do this challenge in any language however you will need to convert the components and models as you see fit.

The use of the internet for references is allowed. 


# Part 1 - Emoji Search

The emoji search will allow users to filter emojis from text. This section will have a search bar and a list of emojis. The emoji will be displayed by it's `symbol` and it's `name`. Search will be filterable by name.

Requirements:

  - The system will present a list of all emojis when no search term is present.
  - The system will filter the list of emojis by name based on the text in the search bar.

# Part 2 - Emoji Translate

The emoji translate will allow users to translate text to emoji based on the emoji's `shortcode`.

For example: If an emoji's shortcode is `happy` then `I'm super happy` will be translated to `I'm super 😀`.

Requirements:

  - The system will automatically translate emoji's `shortcodes` to their respective symbols as the user types.


# Assets

Note: Some of the assets are missing margins & paddings, just do your best to match the image, not a big deal if it's off by a couple pixels. 

Mockup of App

![Mockup Image](https://firebasestorage.googleapis.com/v0/b/coding-challenge-emoji-app.appspot.com/o/app_preview.png?alt=media&token=a03dab35-dffa-435d-a133-260a0be34f30)



Navigation Bar


![Nav Bar](https://firebasestorage.googleapis.com/v0/b/coding-challenge-emoji-app.appspot.com/o/nav_bar.png?alt=media&token=85d0dcee-9e78-4440-b9bd-529a66655cca)
```
height: 98px;
background: #FFFFFF;
box-shadow: 0 2px 4px 0 rgba(195,195,195,0.50);
/* 🤓 😍 📖: */
font-size: 36px;
color: #000000;
letter-spacing: 3.01px;
```

Search Bar

![Search Bar](https://firebasestorage.googleapis.com/v0/b/coding-challenge-emoji-app.appspot.com/o/search_bar.png?alt=media&token=217e5448-d1a9-4872-ba78-47e3e66de859)
```
/* Default */
height: 50px;
width: 808px;
border: 2px solid #B4B4B4;
border-radius: 8px;
font-size: 16px;
color: #B4B4B4;

/* Focused */
border: 2px solid #E6AA59;
box-shadow: 0 2px 4px 0 rgba(175,175,175,0.50);
border-radius: 8px;
```

Emoji List

![Emoji List](https://firebasestorage.googleapis.com/v0/b/coding-challenge-emoji-app.appspot.com/o/emoji_list.png?alt=media&token=012576d5-1bb3-4596-a2cf-0423392568d6)

```
/* Container */
height: 678px;
background: #FFFFFF;
border: 0 solid #C2C2C2;
box-shadow: 0 2px 4px 0 rgba(194,194,194,0.50);
border-radius: 8px;
padding: 16px;

/* Cell */
height: 86px;
background: #F2F2F2;
border-radius: 8px;
font-size: 36px;
color: #000000;
```

Translate Header Text

```
font-size: 62px;
color: #000000;
```

Translate Text Field

![Text Field](https://firebasestorage.googleapis.com/v0/b/coding-challenge-emoji-app.appspot.com/o/text%20field.png?alt=media&token=ef93798b-40ea-4d4d-8ec6-d822a570144b)
```
background: #FFFFFF;
border: 2px solid #C3C1C1;
box-shadow: 0 2px 4px 0 rgba(158,158,158,0.50);
border-radius: 8px;
font-size: 26px;
color: #000000;
```

