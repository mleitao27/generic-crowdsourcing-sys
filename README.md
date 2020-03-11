# generic-crowdsourcing-sys
## Express
### Initialization
1 - Initialize node project
```
$ npm init
```
Note: use '--yes' flag to skip manual detail input  
2 - Install nodemon for development
```
$ npm install -g nodemon
```
Note: install globally  
3 - Install some dependencies
```
$ npm install --save express
$ npm install --save cors
$ npm install --save body-parser
$ npm install --save mongodb
$ npm install --save joi
```
4- Create App.js and define Server Port in your machine.  
5- Create Routes Folder   
6- Create File with Endpoints (in Routes directory)  
7- Use Routers in your App.js File  
8- Create Modules Folder  
9- Create File with Database Connection (in Modules directory)  
10- Install Memcached-Promisify
```
$ npm install memcached-promisify
```
11- Create Cache File in Modules directory (with 'get' and 'set')  
12- Create Extension folder  
13- Create OAuth File (in the Extension directory)  
14- Google Verification
```
$ npm install --save google-auth-library 
```
14- Facebook Verification
```
$ npm install --save axios
```





### Running

1- Change Start Script to Production  

2- Running your 'app.js' file.
```
$ npm start
```
# React
1 - Create a project
```
$ npx create-react-app <directory>
```
Note: npm installs in the system while npx allow to use application w/o installing it  
2 - Clean Project  
2.1 - Delete **index.css** and remove import from **index.js**  
2.2 - Delete **logo.svg** and remove import from **index.js**  
2.3 - Reset App.css with:
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

a {
  color: #333;
  text-decoration: none;
}
```
3 - Install react router for navigation
```
$ npm install --save react-router-dom
```
4 - Install axios for http requests
```
$ npm install --save axios
```