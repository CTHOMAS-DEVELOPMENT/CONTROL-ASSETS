import moment from "moment";
export default [
  {
    id: "1",
    description: "First record",
    note: "The first",
    amount: 100,
    createdAt: 0
  },
  {
    id: "2",
    description: "Second record",
    note: "The second",
    amount: 150,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Third record",
    note: "The third",
    amount: 50,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
