import { BOOK, DELETE } from "./actionType";
import initialState from "./initialState";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const bookingReducer = (state = initialState, action) => {
  if (action.type === BOOK) {
    return [
      ...state,
      {
        id: nextBookId(state),
        desFrom: action.payload.desFrom,
        desTo: action.payload.desTo,
        journeyDate: action.payload.journeyDate,
        guests: action.payload.guests,
        classType: action.payload.classType,
      },
    ];
  }else if(action.type === DELETE){
    return state.filter((book)=> book.id !== action.payload );
  }
  return state;
};
export default bookingReducer;
