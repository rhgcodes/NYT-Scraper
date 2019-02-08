# ArtNews Scraper
Penn Coding Bootcamp - Assignment #14 (MongoDB, Mongoose, Cheerio, Heroku)

**Project Description** - The Art News MongoDB Scraper, is a web application that captures the headline, article summary from the current articles on artnews.com. Once displayed, each article provides the user the option to save his/her favorite articles using a "Save" button located on the right side of the interface. Additionally, users can navigate to the saved article(s) using the "Saved" button on the top right of the page. Once in the saved article section of the application, users can add notes to any saved article or permanently delete the article from the application. 

**Bonus** - Frontend enhancements.

## Heroku Link
The link below will give you direct access to NYT-Scrape web application using your web browser via the Heroku web service. (NOTE: There will be a momentary delay when first accessing the Heroku servers.)

* [Art News-WebScrape](https://fathomless-sands-42819.herokuapp.com/)

## Demos
![](http://i.imgur.com/OUkLi.gif)


## Local Environment Setup
To use Art News-WebScrape application from your local environment, you must accomplish the following steps below:

<table>
  <tr>
    <th colspan="3">Terminal Bash Steps</th>
  </tr>
  <tr>
    <td align="center" style="width: 75px;">Step #</td>
    <td align="center" style="width: 330px;">Description</td>
    <td  align="center" >Terminal Bash Command</td>
  </tr>
  <tr>
    <td align="center">01</td>
    <td colspan="2">Ensure Node, required NPM Packages, and MongoDB are all installed on your local machine</td>
  </tr>
  <tr>
    <td align="center">02</td>
    <td>Clone this repo</td>
    <td>git clone https://<i></i>github.com/GrissomErick/NYT-Scrape.git</td>
  </tr>
  <tr>
    <td align="center">03</td>
    <td>Install required NPM packages</td>
    <td>npm i</td>
  </tr>
  <tr>
    <td align="center">04</td>
    <td>Change directory to the cloned repo folder</td>
    <td>cd NYT-Scrape</td>
  </tr>
  <tr>
    <td align="center">05</td>
    <td>Start the application server</td>
    <td>node server.js</td>
  </tr>
  </table>
  
  <table>
  <tr>
    <th colspan="3">Web Browser Steps</th>
  </tr>
  <tr>
    <td align="center" style="width: 75px;">Step #</td>
    <td align="center" style="width: 400px;">Description</td>
    <td align="center" style="width: 200px;">Browser Route</td>
  </tr>
  <tr>
    <td align="center">01</td>
    <td>Navigate web browser to the application home page</td>
    <td>localhost:3000</td>
  </tr>
  </table>

## NPM Packages
Art News-WebScrape uses the following NPM packages:
- express NPM Package - [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
- express-handlebars NPM Package - [https://www.npmjs.com/package/express-handlebars](https://www.npmjs.com/package/express-handlebars)
- body-parser NPM Package - [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser)
- cheerio NPM Package - [ttps://www.npmjs.com/package/cheerio](https://www.npmjs.com/package/cheerio)
- mongoose NPM Package - [https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose)
- request NPM Package - [https://www.npmjs.com/package/request](https://www.npmjs.com/package/request)

## Built With

* VS Code - [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Git Tools - [https://git-scm.com/download](https://git-scm.com/download)
* Live Markdown Editor - [https://jbt.github.io/markdown-editor/](https://jbt.github.io/markdown-editor/)

## Author

* **Ruben Galleguillos** - *JS/Node/Express/MongoDB/Mongoose/Cheerio/Heroku* - [Art News-WebScrape Repo](https://github.com/rhgcodes/artnews-mongodb-scraper)