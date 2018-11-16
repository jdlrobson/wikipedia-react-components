wikipedia-react-components is a node package for developers who are building things for Wikipedia in React rather than oojs-ui.

It contains basic building blocks that you can use to build Wikipedia-like experiences.

A [demo hosted by netlify](https://condescending-morse-73ee59.netlify.com/) is provided.

It strives to mimic the [oojs ui style guide](https://doc.wikimedia.org/oojs-ui/master/demos/) as well as the components the Wikipedia mobile site uses. If you see anything inconsistent or missing between these two, your patches are gratefully accepted!

### Contributing

* Components should be defined in the components/ folder.
* Each component contains a story.jsx that explains how it can be used. Please take care to document it, and run `npm run storybook` to check it shows up as expected.
* Make sure the component is imported and exported in components/index.js

That's it!

### Releasing

@jdlrobson will release new versions on wikipedia-react-components when significant changes have been made and are needed.
