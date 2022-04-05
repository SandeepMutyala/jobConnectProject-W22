import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/user/Login";
import Header from "./components/layout/Header";
import Register from "./components/user/Register";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import EmployerSideNav from "./components/jobPosting/employerSideNav";
import employerDashboardHome from "./components/jobPosting/employerDashboardHome";
import EmployerDashboard from "./components/jobPosting/employerDashboard";
import JobPostForm from "./components/jobPosting/jobPostForm";
import EditJobPost from "./components/jobPosting/editJobPost";
import { loadUser } from "./actions/userActions";
import store from "./store";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import Profile from "./components/profile/profile.component";
import AddEducation from "./components/profile/addEducation.component";
import UpdateEducation from "./components/profile/updateEducation.component";
import AddExperience from "./components/profile/addExperience.component";
import Updateexperience from "./components/profile/updateExperience.component";
import EditSummary from "./components/profile/editSummary.component";
import User from "./components/profile/fetchuser.component";
import SearchUser from "./components/profile/searchuser";
import JobSearch from "./components/jobSearch/JobSearch";
import JobApply from "./components/jobSearch/JobApply";
import PostFeed from "./components/postFeed/PostFeed";
import MyPosts from "./components/postFeed/MyPosts";
import PostFeedAdmin from "./components/admin/PostFeed";
import JobPostings from "./components/admin/JobPostings";
import Approvals from "./components/admin/Approvals";
import GetExpiredJobPostings from "./components/admin/GetExpiredJobPostings";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      <div className="App">
        <Header />
        <div className="App">
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/password/forgot" component={ForgotPassword} exact />
            <Route
              path="/password/reset/:token"
              component={NewPassword}
              exact
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/homepage" component={PostFeed} />
            <Route path="/myposts" component={MyPosts} />
            <Route path="/addEducation" exact component={AddEducation} />
            <Route path="/updateEducation" exact component={UpdateEducation} />
            <Route path="/fetchuser/:id" exact component={User} />
            <Route path="/searchuser" exact component={SearchUser} />
            <Route path="/addExperience" exact component={AddExperience} />
            <Route
              path="/updateExperience"
              exact
              component={Updateexperience}
            />
            <Route path="/editSummary" exact component={EditSummary} />
            <Route path="/EmployerSideNav" component={EmployerSideNav} />
            <Route
              path="/employerDashboardHome"
              component={employerDashboardHome}
            />
            <Route path="/employerDashboard" component={EmployerDashboard} />
            <Route path="/JobPostForm" component={JobPostForm} />
            <Route path="/EditJobPost" component={EditJobPost} />
            <Route path="/admin/postfeed" component={PostFeedAdmin} />
            <Route path="/admin/jobpostings" component={JobPostings} />
            <Route path="/admin/approvals" component={Approvals} />
            <Route
              path="/admin/expiredJobPostings"
              component={GetExpiredJobPostings}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
