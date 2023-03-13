import React from "react";
import { useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";

const PreviewData = () => {
  const bookingData = useSelector((state) => state.books);
  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {bookingData.map((book) => {
            const {id, desFrom, desTo, journeyDate, guests, classType } = book;
            return (
              <tr key={id} className="lws-bookedTable text-black">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <p className="lws-bookedFrom">{desFrom}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="lws-bookedTo">{desTo}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="lws-bookedDate">{journeyDate}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="lws-bookedGustes">{guests}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="lws-bookedclassName"> {classType} </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-4">
                    <DeleteButton id={id} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PreviewData;
