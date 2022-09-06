# FullStackOpen2022

## Part 1 Introduction to React
In this part, we will familiarize ourselves with the React-library, which we will be using to write the code that runs in the browser. We will also look at some features of JavaScript that are important for understanding React.

### Introduction to React
The easiest way to get started by far is by using a tool called create-react-app. It is possible (but not necessary) to install create-react-app on your machine if the npm tool that was installed along with Node has a version number of at least 5.3. 

Let's try it out `npx create-react-app part1app`

The files App.css, App.test.js, index.css, logo.svg, setupTests.js and reportWebVitals.js may be deleted as they are not needed in our application right now.

#### React Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

#### JSX
It seems like React components are returning HTML markup. However, this is not the case. The layout of React components is mostly written using JSX. Although JSX looks like HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript.
The compiling is handled by Babel. Projects created with create-react-app are configured to compile automatically. We will learn more about this topic in part 7 of this course.

It is also possible to write React as "pure JavaScript" without using JSX. Although, nobody with a sound mind would actually do so.

#### Multiple Components
Writing components with React is easy, and by combining components, even a more complex application can be kept fairly maintainable. Indeed, a core philosophy of React is composing applications from many specialized reusable components.

Another strong convention is the idea of a root component called App at the top of the component tree of the application. Nevertheless, as we will learn in part 6, there are situations where the component App is not exactly the root, but is wrapped within an appropriate utility component.

#### props: passing data to components
It is possible to pass data to components using so called props. Now the function defining the component has a parameter props. As an argument, the parameter receives an object, which has fields corresponding to all the "props" the user of the component defines. There can be an arbitrary number of props and their values can be "hard coded" strings or results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.

#### Some more notes
React has been configured to generate quite clear error messages. Despite this, you should, at least in the beginning, advance in very small steps and make sure that every change works as desired.

The console should always be open. If the browser reports errors, it is not advisable to continue writing more code, hoping for miracles. You should instead try to understand the cause of the error and, for example, go back to the previous working state.

It is good to remember that in React it is possible and worthwhile to write console.log() commands (which print to the console) within your code.

Also keep in mind that React component names must be capitalized. 

Note that the content of a React component (usually) needs to contain one root element. i.e. `<div>...</div>` or just blank `<>...</>`

### Component state and event handlers

#### Event handler is a function
An event handler is supposed to be either a *function* or a *function reference* 

Calling a function which changes the state causes the component to rerender.

#### Passing state to child components
It's recommended to write React components that are small and reusable across the application and even across projects. Let's refactor our application so that it's composed of three smaller components, one component for displaying the counter and two components for buttons.

One best practice in React is to lift the state up in the component hierarchy. The documentation says:
*Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.*

### A more complex state, debugging React apps
Version 18 of React was released late March 2022. The code in material should work as it is with the new React version. However, some libraries might not yet be compatible with React 18. At the moment of writing (4th April) at least the Apollo client used in part 8 does not yet work with most recent React.

In case you end up in a situation where your application breaks because of library compatibility problems, downgrade to the older React by changing the file package.json as follows:

`{
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  // ...
}`

#### Complex state
In most cases the easiest and best way to accomplish handling complex state is by using the useState function multiple times to create separate "pieces" of state.

If you're trying to update state via passing an object with various properties, it would be much easier to use the object spread syntax where all the other properties stay the same and only the one you update is changed.

```javascript
const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
}
```

To 

```javascript
const handleLeftClick = () => {
    const newClicks = { 
        ...clicks, 
        left: clicks.left + 1 
    }
    setClicks(newClicks)
}
```


#### Why we don't we just update the state directly???
It is *forbidden in React to mutate state directly*, since [it can result in unexpected side effects](https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really/40309023#40309023). Changing state has to always be done by setting the state to a new object. If properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object, and setting that as the new state.

#### Conditional Rendering

```javascript
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
```