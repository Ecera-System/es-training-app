# ES Training App
This is a training center of Ecera System. Currently, here MERN Stack web development course is running.
### Authors : Ecera System

- [@official-website](https://www.ecerasystem.com)


## Tech Stack

1. **Client:** React ([react-vite](https://vitejs.dev/guide/#trying-vite-online)), TailwindCSS

**Client-Packages:** 

- **Axios:** used for data fetching. 
- **TinyMCE:** used for making text editor. 
- **gapi-script:** used for Loading the Google Sign-In API. 
- **Moment:** used for converting date and time of MongoDB to readable date and time. 
- **react-helmet-async:** used for handling title of the browser's title bar or the page's tab.
- **react-icons:** used for icons.
- **react-slick & slick-carousel:** used for creating sliders or carousels.

2. **Server:** Node, Express, MongoDB

**Server-Packages:** 

- **bcrypt:** used for hashing passwords.
- **crypto:** used for creating Razorpay API credentials.
- **fs-extra:** used for handling file system.
- **googleapis:** used for verifying Google client id token for user auth.
- **jimp:** used for processing images.
- **jsonwebtoken:** used for the authentication of users.
- **nodemailer:** used for sending email.
- **mongoose:** used for designing Mongodb object model that creates a connection between MongoDB and Node.js.
- **razorpay:** used for handling payment method of `INR` currency in the backend side.
- **stripe:** used for handling payment method of `USD` currency in the backend side.


## Installation

Install this project with npm

```bash
  npm git clone https://github.com/Ecera-System/es-training-app.git
  
  // For client
  cd client
  npm install
  npm run start

  // For server
  cd server
  npm install
  npm run dev
```
    
## Usage

Explanation of how users can use this project.

**Students:** 
- For enrolling course, students have to go to programs and select a course. After clicking on Enroll Button, they can go for checkout.
- **In Profile:**
    - My Profile: Users can upload or edit their personal information.
    - My Classes: Students can see course videos.
    - Assignments: Course assignments exist here.
    - Order History: Student's course enrollment history.


**Admin:** 

- Add Course: First create a course then upload videos by selecting course.
- Dashboard: Best selling courses and Recent selling courses.
- All Courses: All Courses data.
- Students: All enrollment students data.
- Assignments: All created assignments list, Create Assignments, Students submitted assignments list.
- Coupon Code: All coupon code list, Create coupon code.
- Certificate: Certificate functionality not created. **(development needed)**
- Book Counselling: Book Counselling data.
- Users: All Users data.
- Settings: **(development needed)**
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color violet| ![#7c3aed](https://via.placeholder.com/10/7c3aed?text=+) #7c3aed |