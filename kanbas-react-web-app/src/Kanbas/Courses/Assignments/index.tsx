import { FaGripVertical, FaPlus } from "react-icons/fa";
import AssignmentsControls from "./AssignmentsControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls />

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-title list-group-item p-0 mt-5 mb-5 fs-5 border-grey">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <FaGripVertical className="me-2 fs-3" />{" "}
            <strong>ASSIGNMENTS</strong>
            <div className="float-end">
              <div className="btn btn-secondary border border-dark me-1">
                40% of Total
              </div>
              <FaPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-assignment-list-item list-group rounded-0 border-start border-5 border-success">
            <li className="wd-assignment list-group-item p-3 ps-1">
              <FaGripVertical className="me-2 fs-3" />
              <a
                className="wd-assignment-link text-secondary link-offset-2 link-underline link-underline-opacity-0 p-10 ps-21"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                <strong>A1 - ENV + HTML</strong>
              </a>
              <br />
              <div className="d-inline-flex gap-2">
                <div className="text-danger small ps-2">
                  <strong>Multiple Modules</strong>
                </div>
                <div className="text-secondary small">
                  <strong>Not available until</strong> May 6 at 12:00am |
                  <strong> Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment list-group-item p-3 ps-1">
              <FaGripVertical className="me-2 fs-3" />
              <a
                className="wd-assignment-link text-secondary link-offset-2 link-underline link-underline-opacity-0 p-10 ps-21"
                href="#/Kanbas/Courses/1234/Assignments/102"
              >
                <strong>A2 - CSS + BOOTSTRAP</strong>
              </a>
              <br />
              <div className="d-inline-flex gap-2">
                <div className="text-danger small ps-2">
                  <strong>Multiple Modules</strong>
                </div>
                <div className="text-secondary small">
                  <strong>Not available until</strong> May 13 at 12:00am |{" "}
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment list-group-item p-3 ps-1">
              <FaGripVertical className="me-2 fs-3" />
              <a
                className="wd-assignment-link text-secondary link-offset-2 link-underline link-underline-opacity-0 p-10 ps-21"
                href="#/Kanbas/Courses/1234/Assignments/103"
              >
                <strong>A3 - JAVASCRIPT + REACT</strong>
              </a>
              <br />
              <div className="d-inline-flex gap-2">
                <div className="text-danger small ps-2">
                  <strong>Multiple Modules</strong>
                </div>
                <div className="text-secondary small">
                  <strong>Not available until</strong> May 20 at 12:00am |{" "}
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
