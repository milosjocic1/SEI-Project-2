
## Day 00 - Planning:       
08/09/22        
Planning stage.     
- Finalised idea of DIY Blog App.       
- ERD, User Stories and Wireframes completed in Figma.     
- Trello board created to track progress and delegate roles and objectives.


## Day 01 - Production:     
09/09/22        
App production started. Main focus today on basic structure of app.  

GitHub Repo created, successfully forked & cloned.              
- now setting up server configuration, installing key dependencies:        
    - express       
    - mongoose      
    - ejs   
    - dotenv        
    - express-ejs-layouts
- adding MVC structure and other directories.        

Split workstream into layouts/landing page and models.        

I will be creating the landing page and layouts.ejs page:
- Routes were created to assign the root route to the landing page
- Layout was created using ejs
- Imported and mounted routes in server file which cause conflict in git with Harry's work.

I then moved onto the signup functionality:
- Create (post) and read (get) operations created for signup, which are detailed in the controllers/auth API and routes/auth. 
- All working fine. 

As I was working on signup, I continued working on authorisation to get it working ASAP. This included the .env file as a layer of security (hiding port name and database name), installing dotenv, session and passport dependencies and requiring them in the server file. 

## Day 02 - Production, Rewrites:              
12/09/22      

Started the day with pair programming with Harry to debug, worked efficiently and communicated well which resulted in a smooth debugging session (team leader had to deal with any conflicts when merging in git, so I'm sure it wasn't as smooth for Harry!)

PROJECT PLOT-TWIST
We decided to change the project to an album review app as opposed to a DIY app. Changes at this stage mostly consisted of renaming files, routes and controllers, changing the HTML / embedded JavaScript elements, and changing the entity relationship diagrams.

Edits completed on both sides, managed to move swiftly onto our new idea.

I then moved onto creating the views / review file and subsequently the controller and routes files for reviews, while Harry worked on an 'add input box' functionality. 

## Day 03 - Production:       
13/09/22        

I worked on reviews having User attached based upon currentUser.
User attached to reviews, using currentUser in hidden input field as follows:     
`<input type="hidden" name="createdBy" value="<%= currentUser._id %>" />`   

The firstName and lastName properties were changed to one username property (key in User model object). I had to then relate the linked reviews in the album to the usernames, for which I consulted Saad to help with finding a solution:
```
    Album.findById(req.query.id).populate({ 
        path: 'review',
        populate: {
          path: 'createdBy',
          model: 'User'
        } 
```

I then went on to protecting routes with IsLoggedIn and IsCorrectUser JavaScript files, while Harry moved onto formatting and styling the site with CSS. 

Although I used similar logic to IsLoggedIn in my IsCorrectUser file, I couldn't get it to work by adding that to specific paths. Once again I consulted Saad who suggested that I use EJS to only make the edit and delete buttons available to the creator of the review. 

<% if(currentUser._id.toString() == review.createdBy[0]._id.toString()){ %>


## Day 04 - Production:     
14/09/22        

I proceeded to work on image upload functionality using Cloudinary while Harry continued with the laborious job of making the site look nice with CSS. After conversation with other students I decided to use Multer instead of Cloudinary. Didn't take long to get Multer working and get images uploaded. This was added to album / add and then album / edit. 


## Day 05 - Production:
15/09/22

I started on using bootstrap to create review cards as opposed to displaying the reviews in a table format. I managed to get good looking cards, however, considering that we wanted the site to be mobile-friendly, they weren't as responsive as we wanted them to be. I then opted to using basic CSS, for which I asked Ana for some tips on. Ana walked me through using inspect element in chrome which offers great visual context to concepts of margins, padding, which space different sections take up etc. This advice combined with trial and error helped me in formatting the cards and getting them to look nice and be responsive.

## Day 06 - Presentation






