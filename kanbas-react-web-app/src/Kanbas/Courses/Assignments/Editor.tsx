export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
      <div className="pt-5 pb-5">
        <textarea id="wd-description" className="form-control">
          The assignment is available online
        </textarea>
      </div>
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points" className="form-title pe-4">
              Points
            </label>
          </td>
          <td>
            <input id="wd-points" className="form-control" value={100} />
          </td>
          <br />
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group" className="form-title pe-4">
              Assignment Group
            </label>
          </td>
          <td>
            <select id="wd-group" className="form-select">
              <option selected value="opt1">
                ASSIGNMENTS
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as" className="form-title pe-4">
              Display Grade as
            </label>
          </td>
          <td>
            <select id="wd-display-grade-as" className="form-select">
              <option selected value="opt1">
                Percentage
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type" className="form-title pe-4">
              Submission Type
            </label>
          </td>
          <td className="card">
            <select id="wd-submission-type" className="form-select">
              <option selected value="opt1">
                Online
              </option>
            </select>
            <label
              htmlFor="wd-submission-options"
              className="pt-3 ps-2 form-title"
            >
              <strong>Online Entry Options</strong>
            </label>
            <div className="card-body">
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="ps-2">
                Text Entry
              </label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-website-url"
                className="form-check-input"
              />
              <label htmlFor="wd-website-url" className="ps-2">
                Website URL
              </label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-media-recordings"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="ps-2">
                Media Recordings
              </label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-student-annotation"
                className="form-check-input"
              />
              <label htmlFor="wd-student-annotation" className="ps-2">
                Student Annotation
              </label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-file-upload"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="ps-2">
                File Uploads
              </label>
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign" className="form-title pe-4">
              Assign
            </label>
          </td>
          <td className="card">
            <label htmlFor="wd-assign-to" className="form-title ps-3 pt-3">
              <strong>Assign to</strong>
            </label>
            <div className="ps-3 pt-1 pe-3">
              <input
                id="wd-assign-to"
                className="form-select"
                value={"Everyone"}
              />
            </div>
            <label htmlFor="wd-due-date" className="form-title ps-3 pt-3">
              <strong>Due</strong>
            </label>
            <div className="ps-3 pt-1 pe-3">
              <input
                type="date"
                id="wd-due-date"
                className="form-select"
                value="2024-05-13"
              />
            </div>
            <tr>
              <td>
                <label
                  htmlFor="wd-available-from"
                  className="form-title ps-3 pt-3"
                >
                  <strong>Available from</strong>
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  className="form-select"
                  value="2024-05-06"
                />
              </td>
              <td>
                <label
                  htmlFor="wd-available-until"
                  className="form-title ps-3 pt-3"
                >
                  <strong>Until</strong>
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  className="form-select"
                  value="2024-05-20"
                />
              </td>
            </tr>
          </td>
        </tr>
      </table>
      <hr />
      <table align="right">
        <tr>
          <td>
            <button id="wd-btn-cancel">Cancel</button>
          </td>
          <td>
            <button id="wd-btn-save">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
