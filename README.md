# **Recipe Vault**

**Recipe Vault** is a web application that helps users discover, manage, and share recipes. Built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js)

---

## **Features**

- **Browse Recipes**: View featured and favourite recipes.
- **Search Recipes**: Search for recipes by name.
- **Favourite Recipes**: Add and manage your favourite recipes.
- **Create Recipes**: Add new recipes using a form.
- **Edit & Delete Recipes**: Update or remove recipes.
- **Settings**:
  - Toggle **Dark Mode**.
  - Clear all favourites.
- **Responsive Design**: Works on desktop, tablet, and mobile devices, but best on desktop browsers.

---

## **Tech Stack**

- **React.js**: Frontend framework for building user interfaces.
- **Node.js**: Runtime environment for backend logic.
- **Express.js**: Web framework for server-side operations.
- **MongoDB**: Cloud database for storing recipe data.
- **Mongoose**: ORM for MongoDB.

---

## **Getting Started**

### **Prerequisites**
1. Install **Node.js** and **npm**.
2. Clone the Repository:
`git clone <https://github.com/michaelferry25/RecipeVault/>`
3. Install Dependencies:
`cd client`
`npm install`
`cd ../server`
`npm install`
4. Navigate to the Backend Server and Start:
`cd backend`
`npm start`
5. Navigate back to the Frontend Server and Start the Server:
`cd .. `
`npm start`
6. Open your browser and go to:
[http://localhost:3000](http://localhost:3000)
7. Open your browser and go to 
[http://localhost:4000/api/recipes](http://localhost:4000/api/recipes) to see the backend server with all the recipes info
***

# App Navigation

### Homepage
* Displays featured recipes and favourite recipes.
* Includes quick links to explore more recipes or add your own.

### Recipes Page
* Browse all recipes available in the app.
* Use the **Edit** button to update a recipe or **Delete** to remove it.

### Search Page
* Use the search bar to find recipes by name.
* Results update as you type.

### Recipe Details Page
* View information about a specific recipe, including:
* Ingredients
* Instructions
* Prep time
* Cuisine type
* Add or remove the recipe from favourites.

### Favourites Page
* Displays all recipes marked as favourites.
* Click View Recipe to see details.

### Create Recipe Page
* Fill out a form to add a new recipe, which includes:
* Title
* Ingredients
* Instructions
* Prep time
* Cuisine type

### Settings Page
* Customize your experience:
* Enable or disable Dark Mode.
* Clear all favourite recipes if needed.
* View demo contact details and acknowledgments.


***


## Advanced Features
### Dark Mode
* Toggle Dark Mode on the Settings page for better accessibility and user experience in low-light conditions or preference.
### Clear Favourites
* Use the "Clear Favourites" button in the Settings page to reset your favourites list with confirmation if needed.
### Responsive Design
* The app is fully responsive and works well on all on all devices but best on desktop devices.

***

## Acknowledgments
* Recipes are sourced from Food.com. This app is a project for educational purposes and is the intellectual property of Michael Ferry.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
