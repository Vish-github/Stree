import React from "react";

import styles from "./Sidebar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import SidebarBigComponent from "./SidebarBigComponent/SidebarBigComponent";
import { auth } from "../../firebase";

const Sidebar = ({ open, sidebarclose }) => {
  return (
    <>
      {open && (
        <div className={styles.sidebar}>
          <div className={styles.sidebar_name_section1}>
            <MenuIcon className={styles.sidebar_menuicon} />
            <h2 className={styles.sideapp_name}>Stree</h2>
          </div>
          <div className={styles.sidebar_name_section2}>
            {/* <p>Username</p> */}
          </div>
          <div>
            <SidebarBigComponent
              title="Lets Discuss "
              data={["mental", "sexual"]}
              type="discussion"
              sidebarclose={sidebarclose}
            />
            <SidebarBigComponent
              title="Lets Celebrate "
              data={["yourself", "others"]}
              type="celebration"
              sidebarclose={sidebarclose}
            />
            <SidebarBigComponent
              title="Lets Disect  "
              data={["gynac", "therapist", "pediatrician"]}
              type="disect"
              sidebarclose={sidebarclose}
            />
            <SidebarBigComponent
              title="Lets Learn  "
              data={["Know your body"]}
              type="knowledge"
              sidebarclose={sidebarclose}
            />
            <div
              className={styles.logout}
              onClick={() => {
                auth.signOut();
                console.log("called");
              }}
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
