import { BOOK, DELETE } from "./actionType";

export const bookFlight = (desFrom, desTo, journeyDate, guests, classType) => {
  return {
    type: BOOK,
    payload: { desFrom, desTo, journeyDate, guests, classType },
  };
};
export const deleteBooking = (bookingId) => {
    return{
        type: DELETE,
        payload: bookingId,
    }
}
