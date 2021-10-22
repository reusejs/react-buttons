# React Component Template

This is a sample repository which can be used to develop new component libraries and push to NPM. Tailwind is integrated and purge is configured. So, when you make a final build, CSS would be send along with package.

### Where to write components?

1. There is a `src` folder where you can write your components
2. Whichever components you want to be exposed would go into: `index.js`

## Workflow

There are two ways you can develop components.

### Storybook

- Run: `yarn storybook` which will run the storybook in your localhost
- Open `src/Box/Box.stories.jsx` to find an example of Storybook
- When you write your own component, also write a `.stories.jsx` and storybook would pick it up

### Another ReactJS App

- Create a brand new react js app (Ex: my-app) using following: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
- Run `yarn link` in current component library. Ex: If you component name is react-buttons, you would run yarn link inside react-buttons
- Go to newly created reactjs app (my-app) and run `yarn link @reusejs/react-buttons`
- At the same time also run `yarn serve` in react-buttons, so that as you make changes, build happens simultaneously and your my-app refreshes it

## Contributing

### New components

Hit us on discord on `ideas` channel. Propose your ideas, we will blow our brains out.

### To existing components

Right now we don't a lot of hard and fast rules. 

Just follow: https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow

Basically:

- Fork the component to which you want to contribute
- Make your changes, test it properly
- Raise a Pull Request

## Releases

Once your pull request is made, a release would be schedule which will push the library to npm to @reusejs org. You can't push to reusejs org.
 