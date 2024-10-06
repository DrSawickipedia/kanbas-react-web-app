import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>{" "}
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Joe</span>{" "}
              <span className="wd-last-name">Biden</span>
            </td>
            <td className="wd-login-id">202046USAT</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">INSTRUCTOR</td>
            <td className="wd-last-activity">2020-01-21</td>
            <td className="wd-total-activity">18:38:34</td>{" "}
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Cave</span>{" "}
              <span className="wd-last-name">Johnson</span>
            </td>
            <td className="wd-login-id">0042069S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">1974-04-06</td>
            <td className="wd-total-activity">01:01:39</td>{" "}
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Julius</span>{" "}
              <span className="wd-last-name">Caesar</span>
            </td>
            <td className="wd-login-id">00ROME300S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">20-01-04</td>
            <td className="wd-total-activity">12:39:19</td>{" "}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
