export const initialStore = () => {
  return {
    resultPeople: [],
    resultPlanets: [],
    resultVehicles: [],
    favorites:[]
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "Load_Data":
      action.payload;

      return {
        ...store,
        ...action.payload,
      };

    case "ADD_FAVORITE": {
      const name = action.payload;
      if (!store.favorites.includes(name)) {
        return {
          ...store,
          favorites: [...store.favorites, name],
        };
      }
      return store;
    }

    case "REMOVE_FAVORITE": {
      const name = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter((fav) => fav !== name),
      };
    }
    
    default:
      throw Error("Unknown action.");
  }
}
