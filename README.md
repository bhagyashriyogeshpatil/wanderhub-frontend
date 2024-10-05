# Wander Hub Frontend

Wander Hub is a social media platform for travelers to share their trips, explore new places, and connect with other travel lovers. Users can easily create posts with stories and photos, like and comment on others posts, and save their favorites for later. The platform features a simple interface with easy login, post management, and search options, working seamlessly on all devices.

The frontend, built with React, is designed to be clean, responsive, and user-friendly. The project is developed as a Portfolio Project 5 (Advanced Front End / React) for the Code Institute's Full Stack Software Development Course. This React project focuses on building a responsive and interactive frontend, allowing users to easily perform CRUD functionality like adding, editing, and deleting posts, while connecting to the backend API to handle data management.

![wander-hub-mockup-image]()

   - Link to the live website: [Wander Hub Frontend](https://wanderhub-frontend-56da935583f2.herokuapp.com/)
   - Link to the live API: [Wander Hub API](https://wanderhub-api-backend-8af792a9ebf9.herokuapp.com/)
   - Link to the Backend Repository: [wanderhub-backend](https://github.com/bhagyashriyogeshpatil/wanderhub_api_backend)

---
# Table of Contents
- [Introduction](#introduction)
- [User Experience Design](#user-experience-design)
  - [Strategy](#strategy)
  - [Site Goals](#site-goals)
  - [Scope](#scope)
  - [Structure](#structure)
  - [Skeleton](#skeleton)
  - [Surface](#surface)
- [Agile Development Process](#agile-development-process)
    - [Agile Planning](#agile-planning)
      - [User Stories and Management](#user-stories-and-management)
      - [Milestones Overview](#milestones-overview)
- [The Structure Plane](#the-structure-plane)
  - [Current Features](#current-features)
- [Testing](#testing)
---

## Introduction

Wander Hub is a social media platform for travelers to share their adventures, discover new places, and connect with other travel lovers. The frontend is built using React, providing a fast, responsive, and interactive user experience.

Users can quickly sign up and log in to access their dashboard. They can create, view, edit, and delete their travel posts, as well as like and comment on other users posts. Users can follow others for updates and react to comments to enhance interaction.

They can also save favorite posts for later and update their profile information, such as their bio and avatar. The platform has search and filter options, allowing everyone to find content by title, username, region, or place. It is designed to work well on all devices, ensuring a smooth experience on desktops, tablets, and smartphones. Wander Hub makes it easy for travelers to connect and share their experiences in a user-friendly way.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

## User Experience Design

### Strategy
Wander Hub’s design focuses on creating a smooth, easy-to-use platform for travellers to share trips and discover new places. Using Agile methods, the project is developed in small steps. The goal is to meet user needs, make the platform mobile-friendly, and ensure a great experience when creating posts, exploring content, and interacting with others.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

### Site Goals
Wander Hub aims to bring together travellers who want to share their adventures and discover new destinations. Whether it’s a quick weekend getaway or an international trip, users can post travel stories, share photos, and write about their experiences.

**Key Goals:**
- **Easy User Authentication:** Simplified sign-up and login with just a username and password, giving users access to a personalized dashboard.
- **CRUD Functionality for Travel Posts:** Registered users can create, view, edit, and delete their posts, giving them control over their content.
- **Engagement and Interaction:** Users can like and comment on posts, helping to build a community. They can also follow others to see their updates and manage their comments by creating, editing, or deleting them.
- **Comment Reactions:**  Users can react to comments (e.g., like or appreciate), enhancing interaction and feedback within the community.
- **Saved Posts for Future Reference:** Users can save favorite travel stories and destinations for easy access later.
- **Profile Management:** Logged-in users can update their profile details (bio, username, password, avatar), which are visible on all pages.
- **Advanced Search and Filter Options:** All users including those not logged in can explore content using search and filter features by title, username, region, or place.
- **Responsive Design:** The platform is optimized for all devices, ensuring a consistent user experience across desktops, tablets, and smartphones.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

### Scope
The design of Wander Hub is centred on key features and accessibility. The front-end is responsive and built with React, while the back-end uses Django Rest Framework. Users can create, manage, and interact with travel posts, while features like authentication, liking, commenting, and following others enhance engagement. The interface is designed to be simple and easy to use, with continuous adjustments based on testing and feedback to improve the overall experience.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

### Structure
Wander Hub’s development is organized with clear milestones and user stories:
- **Milestones:** These cover major tasks, like setting up the backend, building the frontend, and implementing features such as login and post management, helping the project stay on track.
- **User Stories:** Tasks are broken down into smaller steps, focusing on features like creating and editing posts, managing profiles, and enabling users to comment and like posts. Priorities are set to focus on the most important features first.

This approach ensures the platform is built with the user’s needs in mind.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

### Skeleton
The design is planned using wireframes and ERD that show how the database is organized:
- **Wireframes:** Visual sketches of important pages, like the homepage and user profiles, were created to ensure the layout is clear and easy to navigate.
- **Entity-Relationship Diagram (ERD):** These diagram map out how data is structured, showing how users, posts, comments, and followers relate to each other. This ensures everything works smoothly behind the scenes.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

### Surface
Wander Hub features a clean and modern design that is both attractive and easy to use. It uses simple layouts, clear fonts, and consistent icons to make navigation straightforward. The responsive design ensures the platform looks great and works well on any device, whether it’s a desktop, tablet, or smartphone.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

## Agile Development Process

### Agile Planning

For this project, I implemented an Agile methodology, organizing the entire process using a GitHub project board. This approach allowed me to manage the development from the initial planning stages to the final deployment. The project was divided into 6 milestones, each representing a key phase of the development process, ensuring that progress was systematic and aligned with the project’s goals.

You can view the entire Project Board, including all user stories and progress updates, here: <a href="https://github.com/users/bhagyashriyogeshpatil/projects/4" target="_blank">Github Project board</a>

<details><summary>User Story Template</summary>

![user story template](documentation/docs_images/user-story-template.png)
</details>

<details><summary>Kanban Board</summary>

![kanban board](documentation/docs_images/kanban-board.png)
</details>

#### **User Stories and Management:**

- **Acceptance Criteria:** 
Each user story was created with clear acceptance criteria to ensure that everyone understands what needs to be done. This approach guarantees that every task meets the required standards before it can be marked as complete.

- **MoSCoW Prioritization:** 
To effectively manage priorities, features were categorized using the MoSCoW method: 'Must have,' 'Should have,' and 'Could have.' This prioritization ensured that the essential features for the Minimum Viable Product (MVP) were developed first, while secondary features could be added if there was enough time.

- **User Stories Overview:** 
All user stories include:
  - **Acceptance Criteria:** Clearly defined requirements for completion.
  - **Labels for Prioritization:** Each feature is labeled as 'Must have,' 'Should have,' or 'Could have' to help prioritize development tasks.

- **Additional Labels:** 
I have also created two additional labels to show which tasks needed backend work and which needed frontend work:    
    - **API-backend** - for tasks related to backend API implementation
    - **React-frontend** - for tasks related to the frontend React app
Each user story was thoroughly checked to ensure it met the requirements before being closed.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

#### **Milestones Overview:** 
The development of Wander Hub is organized into six key milestones, each focusing on specific aspects of the project. Below is a detailed overview of each milestone along with the associated user story numbers:

**1. Project Setup and Deployment**
- This milestone focuses on setting up the project infrastructure and deploying the application.
  - User Story 1: Set up API Project
  - User Story 2: Set up Frontend Project
  - User Story 40: Deploy Project to Heroku
  - User Story 41: Create README.md File

**2. Basic UI/UX Elements**
- In this phase, I implemented essential user interface and experience elements to enhance usability.
  - User Story 3: Display Favicon in Browser Tab
  - User Story 4: Consistent Navigation Bar Across All Pages
  - User Story 5: Seamless Page Navigation

**3. User Authentication and Profile Management**
- This milestone is dedicated to user authentication and managing user profiles.
  - User Story 6: User Sign-Up
  - User Story 7: User Sign-In
  - User Story 8: Indicate Logged-In Status
  - User Story 9: Maintain Logged-In Status with Token Refresh
  - User Story 10: Conditional Rendering for Authentication Options
  - User Story 11: Display User Avatar
  - User Story 31: View Other Users' Profiles
  - User Story 34: Edit Profile Details
  - User Story 35: Update Username and Password
  - User Story 37: Use Default Profile Image

**4. Post and Comment Features**
- This phase focuses on the core functionality for users to create and manage their posts and comments.
  - User Story 12: Create and Share Posts
  - User Story 13: View Post Details
  - User Story 14: Edit Own Posts
  - User Story 15: Delete My Posts
  - User Story 16: View Recent Posts
  - User Story 17: Search for Posts
  - User Story 20: Add Comments to Posts
  - User Story 21: Read Comments on Posts
  - User Story 22: Edit Own Comment
  - User Story 23: Delete Own Comment

**5. Interaction and Social Features**
- This milestone enhances social interactions within the platform, allowing users to connect and engage with each other.
  - User Story 18: Like Posts
  - User Story 19: Unlike Posts
  - User Story 24: Follow Users
  - User Story 25: Unfollow Users
  - User Story 26: Save Posts
  - User Story 27: Remove Saved Posts
  - User Story 28: Comment Reactions on Post
  - User Story 29: View Feed from Followed Users
  - User Story 30: View Liked Posts

**6. Extended User Features**
- The final milestone introduces advanced features to enhance the overall user experience.
  - User Story 32: View User Statistics
  - User Story 33: View All Posts by a Specific User
  - User Story 36: View Most Followed Profiles
  - User Story 38: Infinite Scroll for Posts
  - User Story 39: Infinite Scroll for Comments

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

## The Structure Plane

### Current Features
All features have been implemented with user stories in mind.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

#### **Favicon**
- *As a user*, I want a favicon icon to be shown in the browser tab for the website so that I can easily identify and navigate to the site when I have multiple tabs open. (User Story#3)

![favicon_image](documentation/docs_images/favicon_image.png)

- The favicon is shown in the browser tab, helping users easily identify and navigate back to the website when multiple tabs are open.
- The favicon has been selected with the project theme in mind, representing the WanderHub concept. It features a starting point and a destination connected by a route.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

#### **Navigation Menu**
- *As a user*, I want to view a navigation bar on every page so that I can easily navigate between pages without having to search for navigation options. (User Story#4)
- *As a user*, I want to navigate through pages quickly without page refreshes so that I can view content seamlessly. (User Story#5)
- *As a user*, I want to easily tell if I am logged in so that I know whether I need to log in or can access logged-in features. (User Story#8)

- Navbar for Desktop (Unauthorized Users)

![Navbar_desktop_unauthorised_users](documentation/docs_images/navbar_desktop_unauthorised_users.png)

- Navbar for Desktop (Authorized Users)

![Navbar_desktop_authorised_users](documentation/docs_images/navbar_desktop_authorised_users.png)

- Navbar for Mobile (Unauthorized Users)

![Navbar_mobile_unauthorised_users](documentation/docs_images/navbar_mobile_unauthorised_users.png)

- Navbar for Mobile (Authorized Users)

![Navbar_mobile_authorised_users](documentation/docs_images/navbar_mobile_authorised_users.png)

- The navigation menu is designed to make it easy for users to move around the website. The navigation bar looks the same on every page for a uniform experience. On smaller screens, it changes to a hamburger menu for easy access.
- When a user is logged in, their profile avatar and username are displayed in the navigation bar. This feature adds a personalized touch to each visit, helping users feel more connected to their account.
- The main purpose of the navigation menu is to help users move easily around the website. They can quickly reach different pages without getting lost.
- The shown username and profile picture let users know they are logged in, giving them confidence about their account status.
- The navigation options change based on whether the user is logged in or not. This keeps the menu simple and easy to use without making it too complicated.
- The currently active page is clearly marked, so users know where they are.
- The following options are available based on the user's logged-in status:
  - Home - for all users
  - Sign Up - for unauthorized users
  - Sign In - for unauthorized users
  - Sign Out - for authorized users
  - Add Post - for authorized users
  - Feed - for authorized users
  - Liked - for authorized users
  - Saved Posts - for authorized users
  - Profile Avatar - for authorized users
  - Username - for authorized users

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>* 

#### Sign in / Sign up / Sign out

- The Sign Up, Sign In, and Sign Out features allow users to register, log in, and log out of the website. These features enable users to explore and interact with all content, including posts, comments, and user profiles, while having full control over their own content.
- *As a user*, I want create a new account so that I can access all features available to signed-up users. (User Story#6)
- Sign Up page for Desktop :

![sign_up_feature_desktop](documentation/docs_images/sign_up_desktop.png)

- Sign Up page for Mobile :

![sign_up_feature_mobile](documentation/docs_images/sign_up_mobile.png)

- The Sign Up feature lets new users create an account to access all the features of the website. Registered users can log in to use personalized services.
- The sign-up page works on both large and small screens, adapting to mobile, tablet, and desktop devices.
- New users can create an account by filling out the form with their name, email, and password.
- If the user is already registered, they can use a convenient link to go to the login page.

- *As a user*, I want to sign in to the app so that I can access functionality available only to logged-in users. (User Story#7)
- Sign In page for Desktop :

![sign_in_feature_desktop](documentation/docs_images/sign_in_desktop.png)

- Sign In page for Mobile :

![sign_in_feature_mobile](documentation/docs_images/sign_in_mobile.png)

- The Sign In feature lets registered users log in to access all the features available to authorized users. 
- Registered users can log in with their email and password.
- If the user isn't registered, a Sign Up link is available on the sign-in page.
- Clear feedback is given when login details are incorrect.

- *As a user*, I want to maintain my logged-in status until I choose to log out so that my user experience remains uninterrupted. (User Story#9)

![sign_out_feature_image](documentation/docs_images/sign_out_feature_image.png)

- Users can log out whenever they choose, ending their session and ensuring their account remains secure.
- The goal of this feature is to allow users to perform CRUD functionality on their content and access other features of the website as long as they choose not to sign out. This gives users complete control, making it easy for them to navigate pages without being signed out automatically.
- When users register or sign in, they can create travel posts (with CRUD functionality), add comments to those posts (with CRUD functionality), react to comments, like or dislike posts from other users, save their favorite posts, follow or unfollow other users, and access their own content and profile (where they can also use CRUD functionality). This lets them explore all the website features made for them.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

## Testing

This section explains how to test the application and documents any bugs found during development, along with their fixes. It helps keep track of the application's quality and improvements.

Please refer to [TESTING.md](/TESTING.md) for details.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*  
