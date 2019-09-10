<h1>Alten Front End Challenge</h1>

<a href="https://www.codacy.com/manual/mo-fouad/Alten-FrontEnd-Code-Challenge?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mo-fouad/Alten-FrontEnd-Code-Challenge&amp;utm_campaign=Badge_Grade_Dashboard"><img src="https://api.codacy.com/project/badge/Grade/c6b4b72aee604a6a81ea0a657deb6025?isInternal=true"></a>

The Project is a real-life application that shows the status of the registered cars according to their users.
The application uses `React, Redux, Redux-thunk and material UI` in the Front end,
And the backEnd is to fake a real time Data using `socket.Io`

![alt text](https://github.com/mo-fouad/Alten-FrontEnd-Code-Challenge/blob/master/designs/PSDs/2---Home-Start---Map-View---users.jpg)


---

### Designs

in the designs Folder, there is `User-Cases, userFlow, WireFrames And PSD` the PSDs will be in Zip folder,
to extract them just use any extractor and open them using `PhotoShop`, JPGs for the designs are included as well. 

---

### Run the Project

<b> Serve </b>
to run the server please run the following in the Terminal

`cd server` , `npm install` , `npm start`,

the Server Will start using PORT 4001, plese Make Sure that you dont have any thing running on this PORT, 

<b> Web App </b>
to run the webApplication, Please run the following command in your terminal

`cd web-app-react`, `yarn install`, `yarn start`

the Application will server on port 3001, Please Make sure that you dont have any thing running on this port.

the web App built with `react` using webpack.

the application using ESlint & Prettier

to test Linting for the project run this  `yarn lint`,

---

### Testing

the Application uses `Jest` and `@testing-library/react` for unit and integration Testing
and `Cypress` for End 2 End Testing

`cd web-app-react`

to run the unit Testing please run the following command `yarn test`
and to fire up E2E testing just run `yarn cypress` and then, run `app.spec.js`

