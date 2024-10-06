import { FaPlus } from "react-icons/fa6";
export default function AssignmentsControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap d-flex flex-row me-1">
      \
      <input
        id="wd-search-assignment"
        type="search"
        className="form-control rounded me-1 float-end"
        placeholder="🔎︎ Search for Assignments"
      />
      <button
        id="wd-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus />
        Group
      </button>
      <button
        id="wd-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus />
        Assignment
      </button>
    </div>
  );
}
