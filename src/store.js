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
      const {id, category} = action.payload
      let dataById = null

      switch (category) {
        case "people":
          dataById = store.resultPeople.find((item) => item.id !== id)
          break;

        case "planets":
          dataById = store.resultPlanets.find((item) => item.id !== id)
          break;

          case "vehicles":
          dataById = store.resultVehicles.find((item) => item.id !== id)
          break;

        default:
          console.error("Categoria no encontrada")
          break;
      }
      return {
        ...store,
        SelectById: dataById
      }
    }
    
    default:
      throw Error("Unknown action.");
  }
}