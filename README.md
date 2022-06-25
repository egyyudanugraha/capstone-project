<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/egyyudanugraha/capstone-project">
    <img src="https://apptivity-v1.netlify.app/favicon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Apptivity API</h3>

  <p align="center">
    API service for Apptivity (https://apptivity-v1.netlify.app)
    <br />
    <a href="#top"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://apptivity-api-v3.herokuapp.com/">View Deployed App</a>
    ·
    <a href="https://github.com/egyyudanugraha/capstone-project/issues">Report Bug</a>
    ·
    <a href="https://github.com/egyyudanugraha/capstone-project/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About Apptivity

Apptivity API adalah backend yang menyediakan fungsi-fungsi atau API untuk kebutuhan data. Apptivity API ini digunakan oleh project [Apptivity](http://apptivity-v1.netlify.app/). API ini adalah versi ke-3 dari yang kami bangun dan yang akhirnya kami gunakan.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Javascript](https://www.javascript.com/)
* [Node Js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

How to install local apptivity api on local? let's follow the instructions

### Prerequisites
* Node Js (v14.17.6 or higher)

### Installation

1. Clone this repository (backend-v3 branch)
   ```sh
   git clone -b backend-v3 https://github.com/egyyudanugraha/capstone-project.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create file `.env` in root project folder
   ```js
   PORT=3000
   INTERVAL=60
   JWT_SECRET='key_secret_jwt'
   KEY_PUSH='testpushnotification'
   VAPID_PUBLIC_KEY='BF0iNOeRThs_SsOTc1s77KuIozBdxeaLM5aegT5-UsccCdg2QN9bZQ_a4SZtZ_Y09-ytma00m4AeHqYvk5MZuJA'
   VAPID_PRIVATE_KEY='_xplqJ2vtsXMDJrwU3nRWfLK6jMU1rRidrVOuTCpPKk'
   GCM_API_KEY='Everything-is-ok'
   MONGODB_URI='mongodb://localhost:27017/backend_apptivity'
   ```
4. Run the server!
   ```sh
   npm run dev
   ```
   Yeay! Server running on [localhost](http://localhost:3000/)
   
<p align="right">(<a href="#top">back to top</a>)</p>

### ROUTE PATH AND TESTING

1. Import all files in postman folder to your postman
2. Yeay! you can access route API with postman!

<!-- ROADMAP -->
## Roadmap

- [x] User model
- [x] Task model
- [x] History model
- [x] Middleware auth
- [x] Route & handle auth
- [x] Route & handle user
- [x] Route & handle task
- [x] Route & handle history
- [x] Push Notification
- [x] Automation test with Postman
- [x] Deployment

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
- [Yuda](https://www.instagram.com/_yuda23_)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [MDN Web Docs](https://developer.mozilla.org/)
* [Express](https://expressjs.com/)
* [EsLint](https://eslint.org/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Web Push](https://www.npmjs.com/package/web-push)
* [Stack Overflow](https://stackoverflow.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
