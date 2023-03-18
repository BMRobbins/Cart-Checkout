# Cart Checkout

## This is an example of creating a cart checkout system using React and Redux

          The cart checkout project is an example react app that shows how to
          use Redux for state management across large webpages. Redux is a state
          management system that is used to store and retrieve data and reduce
          the need for passing event handlers and data up/down the react
          component tree. In this project, I used Redux to store menu items for
          a fake burger shop. The user can add as many items as they want and
          the cart and cart object counter will be updated in real time. The
          user can add items on the menu items page and then checkout by
          clicking on the cart icon at the upper right-hand side of the
          navigation bar. Once the cart is open a user may reduce/increase the
          number of a specific items in the cart. If any item reaches zero it is
          removed from the cart menu. All items on checkout cart and menu page
          stay up to date with each other. While the user is in the checkout
          cart they have two options, to either hit the cancel button which
          exits the cart and keeps the state of the menu items or they can hit
          the confirm button and the cart is closed and the cart state is reset
          to the initial state. Confirming the order will also display a banner
          for ten seconds that states that the user has successfully placed an
          order. I used react to store all state in this project including
          storing/updating the cart items, resetting the cart items, showing the
          cart and success banner. It should be noted that it may be better to
          maximize the embedded editor to have a better view of the working
          project. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Screen Shot 2023-03-17 at 6 37 30 PM](https://user-images.githubusercontent.com/29494588/226073915-48f37dce-fcc3-44f1-acf4-9299760e077a.png)

![Screen Shot 2023-03-17 at 6 37 19 PM](https://user-images.githubusercontent.com/29494588/226073924-f2b209b1-8e99-4226-ae79-a1fe9e9ca3b0.png)

![Screen Shot 2023-03-17 at 6 37 47 PM](https://user-images.githubusercontent.com/29494588/226074031-5fe1b6c3-15d8-48a4-b20c-5d99943337ba.png)

![Screen Shot 2023-03-17 at 6 38 24 PM](https://user-images.githubusercontent.com/29494588/226073934-bda47889-c58c-4a04-8b27-97bc788fc73b.png)
![Screen Shot 2023-03-17 at 6 39 01 PM](https://user-images.githubusercontent.com/29494588/226073945-af6374ce-9d79-4c2d-960b-3b0fcc27000b.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
