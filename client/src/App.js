import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import RequireAuth from "./AuthHook/RequireAuth";
import Profile from "./Pages/Profile/Profile";
import RequireAdmin from "./AuthHook/RequireAdmin";
import Admin from "./Admin/Admin";
import Dashboard from "./Admin/Dashboard/Dashboard";
import AllCourses from "./Admin/AllCourses/AllCourses";
import Students from "./Admin/Students/Students";
import Assignments from "./Admin/Assignments/Assignments";
import AddNewCourse from "./Admin/AddNewCourse/AddNewCourse";
import CourseDetails from "./Pages/Course/CourseDetails";
import AssignmentDetails from "./Admin/Assignments/AssignmentDetails";
import Certificate from "./Admin/Certificate/Certificate";
import CouponCode from "./Admin/CouponCode/CouponCode";
import MyProfile from "./Pages/Profile/MyProfile/MyProfile";
import Checkout from "./Pages/Course/Checkout/Checkout";
import NotFound from "./Pages/NotFound/NotFound";
import StripeCheckoutMsg from "./Pages/Course/Checkout/StripeCheckoutMsg";
import Courses from "./Pages/Course/Courses";
import Cart from "./Pages/Cart/Cart";
import MyCourse from "./Pages/Profile/ProfileCourse/MyCourse";
import SuccessStories from "./Pages/SuccessStories/SuccessStories";
import Placements from "./Pages/Placements/Placements";
import Projects from "./Pages/Projects/Projects";
import Programs from "./Pages/Programs/Programs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import BookCounselling from "./Admin/BookCounselling/BookCounselling";
import MERNStackWebDevelopment from "./Pages/Programs/MERNStackWebDevelopment";
import BackendDevelopment from "./Pages/Programs/BackendDevelopment";
import FrontendDevelopment from "./Pages/Programs/FrontendDevelopment";
import ReactDevelopment from "./Pages/Programs/ReactDevelopment";
import NodeJsDevelopment from "./Pages/Programs/NodeJsDevelopment";

const App = () => {
  return (<>
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>

      <Route path="/programs" element={<Programs />}></Route>
      <Route path="/programs/mern-stack-web-development" element={<MERNStackWebDevelopment />}></Route>
      {/* <Route path="/programs/backend-development" element={<BackendDevelopment />}></Route>
      <Route path="/programs/frontend-development" element={<FrontendDevelopment />}></Route>
      <Route path="/programs/react-development" element={<ReactDevelopment />}></Route>
      <Route path="/programs/node-js-development" element={<NodeJsDevelopment />}></Route> */}

      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/success-stories" element={<SuccessStories />}></Route>
      <Route path="/placements" element={<Placements />}></Route>
      <Route path="/course" element={<Courses />}></Route>
      <Route path="/course/:id" element={<CourseDetails />}></Route>
      <Route path="/course/checkout/:id" element={
        <RequireAuth>
          <Checkout />
        </RequireAuth>
      }></Route>
      <Route path="/stripe/checkout/course/:id" element={<StripeCheckoutMsg />}></Route>
      <Route path="/cart" element={
        <RequireAuth>
          <Cart />
        </RequireAuth>
      }></Route>
      <Route path="/contact" element={<ContactUs />}></Route>

      <Route path="/profile" element={
        <RequireAuth>
          <Profile />
        </RequireAuth>
      }>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route path="/profile/course" element={<MyCourse />}></Route>
      </Route>


      {/* <!== === === === Admin === === === === */}
      <Route path="/admin" element={
        <RequireAdmin>
          <Admin />
        </RequireAdmin>
      }>
        <Route path="/admin" element={<Dashboard />}></Route>
        <Route path="/admin/add-new-course" element={<AddNewCourse />}></Route>
        <Route path="/admin/all-courses" element={<AllCourses />}></Route>
        <Route path="/admin/students" element={<Students />}></Route>
        <Route path="/admin/assignments" element={<Assignments />}></Route>
        <Route path="/admin/assignments/:id" element={<AssignmentDetails />}></Route>
        <Route path="/admin/coupon-code" element={<CouponCode />}></Route>
        <Route path="/admin/certificate" element={<Certificate />}></Route>
        <Route path="/admin/book-counselling" element={<BookCounselling />}></Route>
      </Route>

      <Route path="/*" element={<NotFound />}></Route>

    </Routes>
  </>);
}

export default App;
