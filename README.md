# MyReads Project

## Table of Contents

* [My Reads](#my_reads)
* [Project Requirement Specifications](#project-requirement-specifications)
* [Installing From Source](#installing-from-source)
* [Author](#author)
* [Contributing](#contributing)



## My Reads

### Objective

 create a bookshelf app that allows the users of this App to select and categorize books they  have read, are currently reading, or want to read.the project must using react to build the application .

## Project Requirement Specifications

### Application Setup
| Criteria                            | Specifications               |
| ------------------------------------| ---------------------------- |
|application easy to install and start|The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.|


### Main Page
| Criteria                                   | Specifications                       |
| -------------------------------------------|--------------------------------------|
|the main page show three bookshelves        |The main page shows 3 shelves for books, and each book is shown on the correct shelf.|
|allowing users to move books between shelves|The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance.|
|information persist between page refreshes  |When the browser is refreshed, the same information is displayed on the page.|


### Search Page
| Criteria                                                            | Specifications                        |
| --------------------------------------------------------------------|---------------------------------------|
| the search page have a search input that lets users search for books| -The search page has a search input field -The search page behaves correctly -The user is able to search for multiple words, such as “artificial intelligence|
|the search results allow a user to categorize a book                 |Search results on the search page allow the user to select one of shelves to place the book on certain shelf |
|selections made on the search page show up on the main page          |When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.|

### Routing
| Criteria                             | Specifications                            |
| ---------------------------------------- | --------------------------------------|
| the main page link to the search page    | The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.|
|the search page link back to the main page| The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.|

### Code Functionality
| Criteria                                             | Specifications                          |
| ----------------------------------------------------|----------------------------------------- |
|the project code handle state management appropriately|Component state is passed down from parent components to child components. The state variable is not modified directly |
|JSX formatted properly                                |All JSX code is formatted properly and functional.|


## Installing From Source
 - To install the application clone this git repository

 - Go into the application folder

 - install all project dependencies with `npm install`

 - start the development server with `npm start`
 
## Author
 Haliam Josh

## Contributing
This repository is the starter code for all Udacity students. Therefore, we most likely will not accept pull requests.
