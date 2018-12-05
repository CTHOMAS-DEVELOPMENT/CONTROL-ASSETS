import moment from "moment";
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      let startDateMatch = true;
      let endDateMatch = true;
      try {
        startDateMatch = startDate
          ? startDate.isSameOrBefore(createdAtMoment, "day")
          : true;
        endDateMatch = endDate
          ? endDate.isSameOrAfter(createdAtMoment, "day")
          : true;
      } catch (error) {
        //console.error(error);
      }
      const lCaseDesc = expense.description.toLowerCase();
      const lCaseSrch = text.toLowerCase();
      const textMatch = lCaseDesc.includes(lCaseSrch) ? true : false;
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
