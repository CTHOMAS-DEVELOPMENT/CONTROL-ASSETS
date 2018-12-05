export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const setSortFilter = (sortBy = "amount") => ({
  type: "SORT_BY",
  sortBy
});

// SET_START_DATE
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
