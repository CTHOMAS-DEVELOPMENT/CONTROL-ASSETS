import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf,
  endDate: moment().endOf
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        text: action.text,
        sortBy: "amount", // date or amount
        startDate: undefined,
        endDate: undefined
      };
    case "SORT_BY":
      return {
        text: state.text,
        sortBy: action.sortBy, // date or amount
        startDate: undefined,
        endDate: undefined
      };
    case "SET_START_DATE":
      return {
        text: state.text,
        sortBy: state.sortBy, // date or amount
        startDate: action.startDate,
        endDate: state.endDate
      };

    case "SET_END_DATE":
      return {
        text: state.text,
        sortBy: state.sortBy, // date or amount
        startDate: state.startDate,
        endDate: action.endDate
      };

    default:
      return state;
  }
};
