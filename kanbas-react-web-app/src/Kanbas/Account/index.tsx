import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
  return (
    <div id="wd-account-screen">
      <table className="table">
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <div>
              <h2>Account</h2>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/Kanbas/Account/Signin" />}
                />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
              </Routes>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
