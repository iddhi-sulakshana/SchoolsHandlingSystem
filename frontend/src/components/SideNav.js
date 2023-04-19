import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./NavBars.scss";
import AppContext from "../appContext";
import { useContext } from "react";
const SideNav = () => {
  const { role } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("sessionRole");
    navigate("/");
  };
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="var(--secondary)" backgroundColor="var(--primary)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link
            className="text-decoration-none"
            to="/dashboard"
            style={{ color: "inherit" }}
          >
            LOGO
            <sup className="text-info">
              {role === "dAdmin"
                ? "Divisional Admin"
                : role === "sAdmin"
                ? "School Admin"
                : role === "teacher"
                ? "Teacher"
                : "restrict"}
            </sup>
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/dashboard" activeclassname="activeClicked">
              <CDBSidebarMenuItem className="sideLinks" icon="columns">
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>

            {/* School admins only */}

            {role === "sAdmin" ? (
              <NavLink to="/admin/teachers" activeclassname="activeClicked">
                <CDBSidebarMenuItem
                  className="sideLinks"
                  icon="chalkboard-teacher"
                >
                  Teachers
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {role === "teacher" || role === "sAdmin" ? (
              <NavLink to="/admin/students" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sideLinks" icon="user-graduate">
                  Students
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {/* Teacher only */}
            {role === "teacher" ? (
              <NavLink
                exact="true"
                to="/admin/teachers"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem className="sideLinks" icon="newspaper">
                  Examinations
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {/* divisional admin only */}
            {role === "dAdmin" ? (
              <NavLink
                exact="true"
                to="/admin/requests"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem className="sideLinks" icon="praying-hands">
                  Requests
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}
            {/* school admin only */}
            {role === "sAdmin" ? (
              <NavLink exact="true" to="/" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sideLinks" icon="poll">
                  Results
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {role === "sAdmin" ? (
              <NavLink
                exact="true"
                to="/admin/timetables"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem className="sideLinks" icon="calendar-alt">
                  Time-Tables
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {role === "teacher" ? (
              <NavLink
                exact="true"
                to="/timetables"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem className="sideLinks" icon="calendar-alt">
                  Time-Tables
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {role === "teacher" ? (
              <NavLink
                exact="true"
                to="/teacher/requests"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem className="sideLinks" icon="praying-hands">
                  Requests
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            <NavLink exact="true" to="/" activeclassname="activeClicked">
              <CDBSidebarMenuItem className="sideLinks" icon="cog">
                Options
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <CDBSidebarMenuItem className="sideLinks" icon="sign-out-alt">
            <button style={{ all: "unset" }} onClick={handleLogout}>
              Logout
            </button>
          </CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideNav;
