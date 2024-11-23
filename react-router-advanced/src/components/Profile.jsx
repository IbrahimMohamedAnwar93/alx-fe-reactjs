import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails"; // Make sure this file exists
import ProfileSettings from "./ProfileSettings"; // Make sure this file exists

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> |
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
