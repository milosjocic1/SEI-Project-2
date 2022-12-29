# SEI Project 2 Album Review App

![](https://i.imgur.com/SVfnkuf.png)

## Project Overview

'Album Review App' is a full-stack web app where users can add, review and browse music albums. I built it with Henry (Harry) Philpotts in a week for the General Assembly Software Engineering Immersive course second project. The app was created with Express JS framework, Node JS and MongoDB then deployed using Heroku and MongoDB Atlas.

[Visit the website here](https://albumreviewapp.cyclic.app/review/index)

I worked closely with Harry on both back-end and front-end implementing the MVC architecture, although my main areas of focus for the project were authentication functionalities, EJS layouts, image upload and album cards. 

## Technologies Used

- JavaScript (ES6)
- Node JS
- Express JS
- EJS
- CSS3
- MongoDB
- Figma
- VS Code
- Git / GitHub
- Trello 

## Brief
- Build a web application from scratch, must be your own work.
- Use Express framework to build your application
- Deploy on Heroku so application is live on the web
- Create a README.md file that explains your app to the world

## Development Process

### Day 1       
 
The initial idea for the project was a DIY app where users could display their DIY projects and supply instructions. We created a Trello board to manage the project and made wireframes alongside an ERD on Figma.
[Link to wireframes and ERD](https://www.figma.com/file/G63VmlG1NHGvTbEyLctO6H/Album-Review-App-Wireframes-and-ERD?node-id=0%3A1)
![](https://i.imgur.com/1D2Otiv.png)
![](https://i.imgur.com/8HJYJvx.png)
![](https://i.imgur.com/mkZnKNT.png)


### Day 2      

On this day we started with setting up the structure of the app which involved configuring the server, installing the necessary dependencies, adding the MVC architecture and creating the Git repositories set up. As Harry was team leader, I forked his repository. 
   
We established that we would work in separate files and evenly distribute the workload to ensure that merge conflicts were avoided and that we were collaborating efficiently. 

I started with creating the landing page and EJS templates,
then moved onto the signup functionality, creating APIs for authorisation. This also included the .env file as a layer of security (hiding port name and database name), installing dotenv, session and passport dependencies and requiring them in the server file. 

### Day 3       

On the third day, we decided to change the project to an Album Review app, something that we both felt more passionate about creating. It didn't take long to make the necessary changes as it was still early in the project. 

I then moved onto making models, views and controllers for reviews with CRUD operations.

### Day 4:       

I continued working on reviews, and started with linking the id of the user to reviews that they added:

```
<input type="hidden" name="createdBy" value="<%= currentUser._id %>" /> 
```

I then related the linked reviews in the album to the usernames using the populate() method:
```
    Album.findById(req.query.id).populate({ 
        path: 'review',
        populate: {
          path: 'createdBy',
          model: 'User'
        } 
```

I went on to protecting create, update and delete routes, only allowing logged in users these functionalities. I then made sure that users could only update and delete their own reviews with the following code:

``` 
<% if(currentUser._id.toString() == review.createdBy[0]._id.toString()){ %>
```

### Day 5:     

I proceeded to work on image upload functionality using Multer. I was unfamiliar with Multer and had to learn how to implement it for this project, which involved reading the documentation and watching a tutorial. 

### Day 6:

I started on using bootstrap to create review cards as opposed to displaying the reviews in a table format. I managed to get good looking cards, however, considering that we wanted the site to be mobile-friendly, they weren't as responsive as we wanted them to be. I then opted to use basic CSS. I modified the CSS by using chrome developer tools which offers great visual context of margins, padding, which space different sections take up etc. Trial and error helped me in formatting the cards and getting them to look nice and responsive.

### Day 7

This was the presentation day, where Harry deployed the project to Heroku and we presented our work to our instructors and course mates. 

## Errors or bugs
- Images uploaded on the deployed app disappear after 24 hours due to Heroku issues. This could be resolved by using a cloud-based image upload tool such as Cloudinary.

## Wins
- I gained confidence with Express JS and developed my understanding of the MVC architecture, alongside improving my EJS skills which I found especially confusing at the start. 

- This was my first experience working in a group for a web app project and it reinforced my attitude that with consistent effort and communication people can bring the best work out of each other. 

- CSS was an area that I was not very confident in prior to the start of the project, so working on the review cards design was great practice. 

- This project also improved my debugging abilities as we experienced many errors throughout, which became easier to understand the more I saw them. 

## Challenges
- At first, error messages in the back-end terminal were lengthy and very daunting. Once I learned where to look, they became a bit clearer to read.
- Using bootstrap had its advantages when it came to creating review cards as it was simple to implement and made the code look neater. However, it made it harder for us to manipulate the design specifically to our liking and in these situations we opted for vanilla CSS. 
- Heroku raised issues with images being lost when it came to deployment. This will be corrected with Cloudinary when we revisit the project.

## Future Improvements
- The priority is getting image uploads working with no issues.
- Using an API such as Spotify's to load album information. 
- Implementing a search filter for albums and artists.

## Key Learnings
- Establishing a productive, professional relationship with your group members is imperative for the success of a project. Harry was excellent to work with as we communicated clearly and did pair programming to debug issues. 
- Using a project management tool, in this case Trello, is really useful for delegating tasks and keeping track of work that has been done as well as work that was yet to be completed. 
- Being genuinely interested about a project idea makes it more engaging and fun to do. Even though we changed our idea on the third day of the project, I believe that our shared interest in music gave us a greater drive as we were creating something that we really were passionate about.
