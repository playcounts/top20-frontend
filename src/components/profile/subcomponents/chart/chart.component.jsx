import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { ChartDiv, ChartBox, NoListensDiv } from "./chart.styles";
import Card from "../card/card.component";
import Assets from "../../../../configuration/assets";

// Configuration

export const cardSize = 100;

const Chart = ({
  navBarHeight,
  titleHeight,
  drawerHeight,
  data,
  count,
  setFocus,
}) => {
  const [flipped, setFlipped] = useState(null);
  const albums = data.data.topalbums.album.slice(0, 20);
  const { t } = useTranslation();

  const handleFlip = (event) => {
    if (flipped) {
      flipped.classList.remove("flipped");
    }
    if (flipped !== event.currentTarget) {
      setFlipped(event.currentTarget);
      event.currentTarget.classList.add("flipped");
      setFocus(event.currentTarget.getAttribute("data-index"));
    } else {
      setFlipped(null);
      setFocus(null);
    }
  };

  if (count > 0)
    return (
      <ChartDiv
        NavBarHeight={navBarHeight}
        TitleHeight={titleHeight}
        DrawerHeight={drawerHeight}
      >
        <ChartBox width={(cardSize + 5) * 10}>
          {albums.map((album, index) => (
            <Card
              title={album.name}
              number={index + 1}
              key={index + 1}
              image={album.image[2]["#text"]}
              size={cardSize}
              flipper={handleFlip}
            />
          ))}
        </ChartBox>
      </ChartDiv>
    );
  return (
    <NoListensDiv
      NavBarHeight={navBarHeight}
      TitleHeight={titleHeight}
      DrawerHeight={drawerHeight}
    >
      <img alt={t("ChartAltNoListens")} src={Assets.Cans} />
    </NoListensDiv>
  );
};

export default Chart;
