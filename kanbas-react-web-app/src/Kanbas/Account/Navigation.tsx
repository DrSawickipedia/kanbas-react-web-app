import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link
        to={`/Kanbas/Account/Signin`}
        className="list-group-item active border border-0 border-start border-black border-3"
      >
        <p className="ps-3">Signin</p>
      </Link>{" "}
      <Link
        to={`/Kanbas/Account/Signup`}
        className="list-group-item text-danger border border-0 border-3"
      >
        <p className="ps-3">Signup</p>
      </Link>{" "}
      <Link
        to={`/Kanbas/Account/Profile`}
        className="list-group-item text-danger border border-0 border-3"
      >
        <p className="ps-3">Profile</p>
      </Link>{" "}
    </div>
  );
}
