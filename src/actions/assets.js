import uuid from "uuid";
/*
active: true
budget: 500000
dateStarted: "2017-01-18T12:00:00.000Z"
ownerId: 1
projectId: "abc-estates"
projectName: "ABC Hospital Estate"
*/
export const addAsset = ({
  active = true,
  budget = 0,
  dateStarted = "",
  ownerId = 0,
  projectId = "",
  projectName = ""
} = {}) => ({
  type: "ADD_ASSET",
  expense: {
    id: uuid(),
    active,
    budget,
    dateStarted,
    ownerId,
    projectId,
    projectName
  }
});

// REMOVE_ASSET
export const removeAsset = ({ id } = {}) => ({
  type: "REMOVE_ASSET",
  id
});

// EDIT_ASSET
export const editAsset = (id, updates) => {
  return {
    type: "EDIT_ASSET",
    id,
    updates
  };
};
