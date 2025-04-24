export const initialStore = () => {
  return {
    resultPeople: [],
    resultPlanets: [],
    resultVehicles: [],
    favorites:[],
    SelectById: null
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

    case "GET_BY_ID": {
      const { id, category, data } = action.payload;
      let dataById = null;
    
      switch (category) {
        case "people":
          dataById = store.resultPeople.find(item => item.uid === id);
          break;
        case "planets":
          dataById = store.resultPlanets.find(item => item.uid === id);
          break;
        case "vehicles":
          dataById = store.resultVehicles.find(item => item.uid === id);
          break;
        default:
          console.error("Categoría no encontrada");
          break;
      }
      return {
        ...store,
        SelectById:{...dataById, ...data},
      };
    }
    
    default:
      throw Error("Unknown action.");
  }
}