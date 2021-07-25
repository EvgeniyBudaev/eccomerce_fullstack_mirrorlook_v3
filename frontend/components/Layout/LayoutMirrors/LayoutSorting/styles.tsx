export const LayoutSortingSelectStyles = {
  control: base => ({
    ...base,
    border: "1px solid #B0976A",
    // "&:hover": { borderColor: "#e5e5e5" },
    cursor: "pointer",
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#dfd3c3" : "",
    color: isFocused || isSelected ? "black" : "",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#dfd3c3",
    },
    ":hover": {
      backgroundColor: "#e4e4e4",
      transition: "all 0.15s",
    },
  }),
};
