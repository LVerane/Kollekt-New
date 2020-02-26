# Kollekt

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Kollekt</h1>
    <a href="https://github.com/LVerane/Kollekt-New"><strong>Documentation and Repo Link</strong></a>
    <p>
    <a href="https://kollekt-0.herokuapp.com/"><strong>Deployment</strong></a>
    </p>
    <br />
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Organization](#Organization)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

This app will allow users to create and edit lists for their collections and keep them private or share them with the world. Users will also be able to search public collections and view profiles from other users. Designed to be a useful tool for collectors and enthusiasts alike!

### Built With

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

- [Mongoose](https://mongoosejs.com/docs/)

- [Bootstrap](https://getbootstrap.com/)

- [Express](https://expressjs.com/)

- [JWT](https://jwt.io/)

- [BCrypt](https://www.npmjs.com/package/bcrypt)

- [Node](https://nodejs.org/en/)

- [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)

<!-- Organization -->

## Organization

This app uses React, AtlasDB with Mongoose, Express, Node.JS, Bootstrap, and JWT with Bcrypt for authentication.

It follows the MVC file structure, displayed below.

```sh
.
|   .env
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
|   server.js
|
+---client
|   |   package-lock.json
|   |   package.json
|   |
|   +---node_modules
|   |
|   +---public
|   |   |   index.html
|   |   |   manifest.json
|   |   |   starwars_1.jpg
|   |   |   vinyl3RecordsRevenge.jpeg
|   |   |
|   |   \---assets
|   |       \---images
|   |               actionFigures.jpg
|   |               books.jpeg
|   |               cards.jpg
|   |               coins.jpg
|   |               comic.jpeg
|   |               fullMetalHeadphones.jpg
|   |               haywine.jpeg
|   |               logo_small.png
|   |               vinyl.jpg
|   |               vinyl5Vindicated.jpg
|   |
|   \---src
|       |   App.css
|       |   App.js
|       |   index.css
|       |   index.js
|       |   registerServiceWorker.js
|       |   store.js
|       |
|       +---actions
|       |       alert.js
|       |       auth.js
|       |       profile.js
|       |       types.js
|       |
|       +---components
|       |   +---AddForm
|       |   |       index.js
|       |   |       style.css
|       |   |
|       |   +---Cards
|       |   |       index.js
|       |   |       style.css
|       |   |
|       |   +---CollectionDetails
|       |   |       CollectionItems.js
|       |   |       CreateItem.js
|       |   |       EditCollection.js
|       |   |
|       |   +---CollectionList
|       |   |       index.js
|       |   |       style.css
|       |   |
|       |   +---CreateCollection
|       |   |       CreateCollection.js
|       |   |       CustomCollection.js
|       |   |       SetCustomFields.js
|       |   |       SetName.js
|       |   |       SetPrivate.js
|       |   |       SetType.js
|       |   |       ShowCollection.js
|       |   |
|       |   +---DashboardComp
|       |   |       DashboardActions.js
|       |   |       Dashboardjs.js
|       |   |       style.css
|       |   |
|       |   +---DropdownButton
|       |   |       index.js
|       |   |
|       |   +---Footer
|       |   |       index.js
|       |   |       style.css
|       |   |
|       |   +---Grid
|       |   |       index.js
|       |   |       style.css
|       |   |
|       |   +---InputField
|       |   |       index.js
|       |   |
|       |   +---layout
|       |   |       alert.js
|       |   |       spinner.gif
|       |   |       Spinner.js
|       |   |
|       |   +---LoginForm
|       |   |       index.js
|       |   |       style.css
|       |   |
|       |   +---Nav
|       |   |       index.js
|       |   |       style.css
|       |   |
|       |   +---Profile
|       |   |       index.js
|       |   |       style.css
|       |   |
|       |   +---Profile-Forms
|       |   |       CreateProfile.js
|       |   |       EditProfile.js
|       |   |       style.css
|       |   |
|       |   +---Profiles
|       |   |       ProfileItem.js
|       |   |       Profiles.js
|       |   |       style.css
|       |   |
|       |   +---Routing
|       |   |       PrivateRoute.js
|       |   |
|       |   \---SignUpForm
|       |           index.js
|       |           style.css
|       |
|       +---pages
|       |       CollectionDetails.css
|       |       CollectionDetails.js
|       |       Dashboard.css
|       |       Dashboard.js
|       |       Landing.css
|       |       Landing.js
|       |       Login.css
|       |       Login.js
|       |       MyCollections.js
|       |       MyCollentions.css
|       |       NoMatch.js
|       |       publicCollection.css
|       |       PublicCollection.js
|       |       SignUp.js
|       |
|       +---reducers
|       |       alert.js
|       |       auth.js
|       |       index.js
|       |       profile.js
|       |
|       \---utils
|               API.js
|               setAuthToken.js
|
+---config
|       db.js
|
+---controllers
|       collectionController.js
|       itemController.js
|       userController.js
|
+---middleware
|       auth.js
|
+---models
|       Collection.js
|       index.js
|       Item.js
|       Post.js
|       Profile.js
|       User.js
|
+---node_modules
|
\---routes
    |   index.js
    |
    \---api
            auth.js
            collections.js
            index.js
            items.js
            posts.js
            profile.js
            users.js
```

<!-- GETTING STARTED -->

## Getting Started

Simply visit (https://kollekt-0.herokuapp.com/)

If you want to get your hands on the code simply look at the following section [Installation](#installation)

### Installation

1. Clone the repo

```sh
git clone https://github.com/LVerane/Kollekt-New.git
```

2. Install NPM packages

```sh
npm install
```

3. Create an `.env` to hide your own AtlasDB connection string and JWT password you will need to run this app.

```sh
jwtSecret=your-JWT-password
mongoURI=your-AtlasDB-connection-string
```

## Usage

Simply visit (https://kollekt-0.herokuapp.com/) click the 'Sign-Up' button and sign up! You will be automatically logged in.

Once you are logged in click the 'Create Profile' button to create your own profile. You will then be able to create collections!

You can also look up other user's profiles and search for public collections with no account or login required.

Enjoy your new found collection management tool!

## Authentication

We use Bcrypt to safely store your passwords on our database after it goes through no less than 10 'saltrounds' ensuring that your hashed password will keep your top secret collections safe from prying eyes.

Each time you log in you will also be provided a randomly generated token saved to the local storage. This token will preserve your login until you logoff.

## Acknowledgements

- [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)
- [bradtraversy - devconnector 2.0 resourced for framework with Auth/User](https://github.com/bradtraversy/devconnector_2.0)

## Contact

### **Developers**

#### - [Andrew Layendecker](https://github.com/Alayendecker)

#### - [Kala Elam](https://github.com/speechgirl1505)

#### - [Lucio Verane](https://github.com/LVerane)

#### - [Remington Villa](https://github.com/remingtonjosh)

Project Link: [https://github.com/LVerane/Kollekt-New](https://github.com/LVerane/Kollekt-New)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/LVerane/Kollekt-New.svg?style=flat-square
[contributors-url]: https://github.com/LVerane/Kollekt-New/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LVerane/Kollekt-New.svg?style=flat-square
[forks-url]: https://github.com/LVerane/Kollekt-New/network/members
[stars-shield]: https://img.shields.io/github/stars/LVerane/Kollekt-New.svg?style=flat-square
[stars-url]: https://github.com/LVerane/Kollekt-New/stargazers
[issues-shield]: https://img.shields.io/github/issues/LVerane/Kollekt-New.svg?style=flat-square
[issues-url]: https://github.com/LVerane/Kollekt-New/issues
