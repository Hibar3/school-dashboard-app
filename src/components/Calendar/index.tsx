"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Calendar = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const month = currentDate.toLocaleString("default", { month: "long" }); // month in string text

  //====RENDER
  const renderRow = (key?: number) => {
    return (
      <div
        key={key}
        className="border p-1 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
      >
        <div className="flex flex-col sm:w-full w-10 overflow-hidden">
          <div className="top h-5 w-full">
            <span className="text-gray-500">{key}</span>
          </div>
          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
        </div>
      </div>
    );
  };

  const renderDays = (name: string, key?: number) => {
    return (
      <th key={key} className="p-2 border-r bg-gray-800 xl:text-sm text-xs">
        <span className="xl:block lg:block md:block sm:block hidden">
          {name}
        </span>
        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
          {name.slice(0, 3)}
        </span>
      </th>
    );
  };

  const renderCalendar = () => {
    const totalDays = []; // stores days as array number
    const calendar = [];
    let day = 1;


    for (let i = 1; i <= daysInMonth; i++) {
      if (day > daysInMonth) break;
      totalDays.push(i);
    }

    return (
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-7">
            {daysOfWeek.map((value, index) => renderDays(value, index))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <td className="grid grid-cols-7">
              {totalDays.map((value, index) => renderRow(index + 1))}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex w-full m-2 bg-gray-800">
      <div className="flex-1 wrapper rounded shadow ">
        <div className="header flex justify-between border-b p-2">
          <span className="text-lg font-bold">
            {month} {currentYear}
          </span>
          <div className="buttons">
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                />
              </svg>
            </button>
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
