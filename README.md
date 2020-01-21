<h1 align="center">
<br>
  <img src="https://github.com/johnnypeixoto/images/blob/master/devRadarLogo.png" alt="DevRadar" width="500">
<br>
<br>
DevRadar
</h1>

<p align="center">Projeto resultado da Semana Omnistack #10</p>

<p>DevRadar é uma aplicação que utiliza o nome da tecnologia desejada, e sua atual localização, para realizar uma busca de desenvolvedores(a) em um raio de 10Km de distância no mapa, permitindo visualizar um breve resumo da biografia e das tecnologias que os mesmos utilizam, podendo também acessar diretamente seus perfis no Github.</p>
<p>Quando um novo Dev é cadastrado na Interface web, isso é refletido em tempo real no mapa da aplicação mobile de outros Devs que estejam dentro do raio de alcance, e que as tecnologias atribuídas ao novo Dev sejam as mesmas tecnologias anteriormente buscadas.</p>
<p>API Backend construida em NodeJS utilizando api.github.com/users, MongoDB e Socket.IO</p>
<p>Interface Web construída em ReactJS</p>
<p>Interface Mobile construída em React Native utilizando Expo</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

[//]: # (Add your gifs/images here:)
<div>
  <img src="https://github.com/johnnypeixoto/images/blob/master/web.gif" alt="demo" height="365">
  <img src="https://github.com/johnnypeixoto/images/blob/master/mobile.gif" alt="demo" height="365">
</div>

<hr />

## Features
[//]: # (Add the features of your project here:)
This app features all the latest tools and practices in mobile development!

- 💹 **NodeJs** — A web framework for Node Js
- ⚛️ **ReactJs** — A JavaScript library for building user interfaces
- ⚛️ **React Native** — A lib that provides a way to create native apps for Android and iOS
- 📄 **MongoDB** — A cross-platform and open-source document-oriented database
- ♻️ **Socket.IO** — A library for realtime web applications
- 🔁 **Expo.IO** — An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

## Getting started

<ol>
<li>Clone this repo using <code>git clone git@github.com:johnnypeixoto/devradar.git</code></li>
<li>Move yourself to the appropriate directory: <code>cd devradar</code><br></li>
<li>Run <code>yarn</code> to install dependencies<br></li>
</ol>

<h3>Getting started with the backend server</h3>

<ol>
<li>Move yourself to the backend folder: <code>cd backend</code></li>
<li>Create a <code>.env</code> file and add the MongoDB url connection in MONGO_URL field</li>
<li>Run <code>yarn dev</code> to start the server</li>
</ol>

<h3>Getting started with the fromend app</h3>

<ol>
<li>Move yourself to the frontend folder: <code>cd web</code></li>
<li>Run <code>yarn start</code> to start the web application</li>
</ol>

<h3>Getting started with the mobile app</h3>

<ol>
<li>Move yourself to the frontend folder: <code>cd mobile</code></li>
<li>Run <code>yarn start</code> to start the web application</li>
<li>Install app Expo for Android on Playstore</li>
<li>Open your smartphone camera and Scan the QR Code</li>
</ol>

<p>Note: If you choose to start the mobile app in the android emulator, you will have to start the emulator before using
the <code>yarn start</code> command and choose option Run on Android device/emulator.</p>

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
