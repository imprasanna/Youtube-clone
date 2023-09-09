import React, { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import "./SideBar.css";

const SideBar = () => {
  const [selectedCategory, changeCategorySelection] = useState("New");
  const [hover, setHover] = useState(null);
  function handleClick(catName) {
    changeCategorySelection(catName);
  }
  function handleMouseOver(catName) {
    setHover(catName);
  }
  function handleMouseOut() {
    setHover(null);
  }
  return (
    <Stack
      className="sidebar"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            onMouseOver={() => handleMouseOver(category.name)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(category.name)}
            className="category-btn"
            style={{
              background:
                category.name !== hover && category.name !== selectedCategory
                  ? "black"
                  : category.name === hover &&
                    category.name !== selectedCategory
                  ? "#f33224"
                  : "red",
              color: "white",
              border: 0,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingRight: "10px",
              borderRadius: "20px",
              paddingLeft: "20px",
              marginBottom: "5px",
            }}
            key={category.name}
          >
            <span
              style={{
                color:
                  category.name !== selectedCategory && category.name !== hover
                    ? "red"
                    : "white",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                overflow: "auto",
                opacity:
                  category.name !== selectedCategory && category.name !== hover
                    ? "0.6"
                    : "1",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
