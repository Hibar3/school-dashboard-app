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
        className="border-gray-300 hover:bg-gray-300 p-1 border border-opacity-25 transition duration-500 cursor-pointer overflow-auto ease"
      >
        <div className="flex flex-col w-10 sm:w-full overflow-hidden">
          <div className="top w-full h-5">
            <span className="text-gray-500">{key}</span>
          </div>
          <div className="bottom flex-grow py-1 w-full h-30 cursor-pointer"></div>
        </div>
      </div>
    );
  };

  const renderDays = (name: string, key?: number) => {
    return (
      <th
        key={key}
        className="border-gray-300 bg-white dark:bg-gray-800 p-2 border-r border-opacity-25 text-xs xl:text-sm"
      >
        <span className="sm:block md:block lg:block xl:block hidden text-gray-500 dark:text-white">
          {name}
        </span>
        <span className="block sm:hidden md:hidden lg:hidden xl:hidden">
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
          <tr className="border-gray-300 grid grid-cols-7 border-l border-opacity-25">
            {daysOfWeek.map((value, index) => renderDays(value, index))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <td className="grid grid-cols-7">
              {totalDays.map((value, index) => renderRow(index + 1))}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex bg-white dark:bg-gray-800 shadow m-2 rounded w-full">
      <div className="flex-1 rounded wrapper">
        <div className="flex justify-between border-gray-300 p-2 border-b border-opacity-25 header">
          <span className="font-bold text-black text-lg dark:text-white">
            {month} {currentYear}
          </span>
          <div className="buttons">
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi-arrow-left-circle bi"
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
                className="bi-arrow-right-circle bi"
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
