// Displays the User Profile

import React, { useState } from "react";
import { NavBarHeight } from "../header/header.component";

import Title from "./subcomponents/title/title.component";
import Chart from "./subcomponents/chart/chart.component";
import Drawer from "./subcomponents/drawer/drawer.component";

// Configuration

const DrawerHeight = "33vh";
const TitleHeight = "40px";

const Profile = ({ data }) => {
  const count = data.data.topalbums.album.length;
  const [focus, setFocus] = useState(null);
  return (
    <div>
      <Drawer
        className="section"
        drawerHeight={DrawerHeight}
        navBarHeight={NavBarHeight}
        focus={focus}
        data={data}
      />
      <Title titleHeight={TitleHeight} count={count} />
      <Chart
        drawerHeight={DrawerHeight}
        navBarHeight={NavBarHeight}
        titleHeight={TitleHeight}
        data={data}
        count={count}
        setFocus={setFocus}
      />
    </div>
  );
};

export default Profile;
