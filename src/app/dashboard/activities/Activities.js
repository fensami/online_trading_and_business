/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Activities = () => {
  return (
    <div className=" mx-5 py-2 my-5 text-slate-200">
      <div className="px-3">
        <div className="flex justify-between mb-4">
          <p className="font-bold">History</p>
          <div className="flex justify-between gap-4">
            <p className=" btn-style bg-slate-500 p-2">ALL</p>
            <select className="select select-bordered outline-none select-warning select-sm w-full max-w-xs">
              <option>WithDraw</option>
              <option>Deposide</option>
            </select>
            <select className="select select-bordered select-warning select-sm w-full max-w-xs">
              <option>Last Month</option>
              <option>Last Week</option>
              <option>Last Year</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-11/12 mx-auto">
            {/* head */}
            <thead className="text-slate-100">
              <tr className="text-[17px]">
                <th> Transaction ID </th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td> #2E293E</td>
                <td>Bitcoin</td>
                <td>Apr 14, 2023</td>
                <td>Completed</td>
                <td>7.7642303 USDT</td>
              </tr>
              <tr>
                <td> #2E293E</td>
                <td>Bitcoin</td>
                <td>Apr 14, 2023</td>
                <td className="text-red-500">Pending</td>
                <td>7.7642303 USDT</td>
              </tr>
              <tr>
                <td> #2E293E</td>
                <td>Bitcoin</td>
                <td>Apr 14, 2023</td>
                <td>Completed</td>
                <td>7.7642303 USDT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Activities;
