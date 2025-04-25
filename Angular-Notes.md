#Angular Notes

## what is Angular ?

1. It is a development platform which is used to build single page applications.
2. It is used for building client side application using js and ts.
3. In short angular is a javascript framework which is used to build single page applications(SPA).

### Diff Between Framework and Library

1. Framework

   - It is a framework used for building software app.
   - Framework consist of pre-defined classes and function that can be reuse to add functionalities otherwise we would require to write code from scratch.
   - It is strictly bounded.

2. In Normal multipage website every time new request is sended to server while accessing new page and after response website is rendered on browser
3. In SPA (there is only one single page) and javascript is changing the content of html page it does send request for new page to server inspite it get all the data in single flow and update the content on user request in client side.

### Advantages of SPA

1. It is much faster than the normal website becoz it is not sending request for new page every time to server.
2. It allows to create an application which fast and reactive.

### Advantages of using Angular

1. Angular gives our applicartion clean, loosely coupled structure that is easy to understand and maintain.
2. It brings a lot of utility code which can be reused in many other application eg dealing in user navigation and browser history.
3. It can be easily tested using inbuilt tools

### Angular Version

It started in 2010 named angular js

- it was complex and does not follow industry structure

In 2016 angular team rewrite code in typescript and named only "angular" also called "angular 2"

- It has fixed all previous version drawbacks and bugs
- in every 6 month angular team releases new version

### Angular installation

1. First install angular Framework with global options : `npm install -g @angular/cli`.
2. Check Installation is proper of not using version checker : `ng version`.
3. Create new project : `ng new <project-name>`.
4. To run project we need to start development server : first traverse in Project directory and write command : `ng serve`.

### Angular folder structure

In Angular web section are divided into small reusable component which can be reuse directly in multiple sections.

Component Files has multiple parts

1. app.component.css - It store all the css styling of component
2. app.component.html - It store all the html structure of component
3. app.component.ts - It store the main business logic, hooks, properties etc
   - It consist below
     `@Component({
selector: 'app-root',  
imports: [RouterOutlet],
templateUrl: './app.component.html',
styleUrl: './app.component.css',
})`
   - selector define the component tag name
   - templateURL : file path of component html structure
   - styleUrl : file path of component styles
4. app.component.spec.ts :
