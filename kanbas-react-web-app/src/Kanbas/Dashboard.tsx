import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="logo192.png" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1002/Home"
          >
            <img src="images/teslabot.jpg" width={200} />
            <div>
              <h5>CS1002 Robotics</h5>
              <p className="wd-dashboard-course-title">
                Beep boop I am a robot
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1003/Home"
          >
            <img src="images/covid.png" width={200} />
            <div>
              <h5>CS1003 Pathological Machine Learning</h5>
              <p className="wd-dashboard-course-title">
                The most ethical course imaginable
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1004/Home"
          >
            <img src="images/glados.png" width={200} />
            <div>
              <h5>CS1004 Advanced Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">
                When life gives you lemons, don’t make lemonade. Make life take
                the lemons back! Get mad! I don’t want your damn lemons, what
                the hell am I supposed to do with these? Demand to see life’s
                manager! Make life rue the day it thought it could give Cave
                Johnson lemons! Do you know who I am? I’m the man who’s gonna
                burn your house down! With the lemons! I’m gonna get my
                engineers to invent a combustible lemon that burns your house
                down!
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1005/Home"
          >
            <img src="images/bad_apple!!.gif" width={200} />
            <div>
              <h5>CS1005 Animation</h5>
              <p className="wd-dashboard-course-title">
                I can't <i>not</i> do it
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1006/Home"
          >
            <img src="images/mario-death-stare.png" width={200} />
            <div>
              <h5>CS1006 Facial Recognition</h5>
              <p className="wd-dashboard-course-title">
                I don't know how he got on my computer but at this point I'm too
                afraid to ask
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1007/Home"
          >
            <img src="images/sunglasses_monke.jpg" width={200} />
            <div>
              <h5>CS1007 Post-Nuclear Technology</h5>
              <p className="wd-dashboard-course-title">
                Einstein may have said that WWIV would be fought with sticks and
                stones, but that doesn't mean we can't do it in style
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
