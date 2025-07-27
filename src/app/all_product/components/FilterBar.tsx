"use client";

import FilterIcon from "@/components/ui/FilterIcon";
import XIcon from "@/components/ui/XIcon";
import { useEffect, useState } from "react";
import {
  categoryLabels,
  categoryOptions,
  colourLabels,
  colourOptions,
  sizeOptions,
  sortOptions,
} from "../filterOptions";
import "../style.css";

const FilterBar = () => {
  const [sortType, setSortType] = useState("");
  const [sizeTypes, setSizeTypes] = useState([]); // user could select multiple size
  const [categoryTypes, setCategoryTypes] = useState([]); // user could select multiple category
  const [colors, setColors] = useState([]); // user could select multiple color

  const [open, setOpen] = useState(true);

  const handleChangeSortType = (e) => {
    const newSortType = e.target.value;
    setSortType(newSortType);
  };

  const handleUpdateTypes = (e, name) => {
    const value = e.target.value;

    switch (name) {
      case "size":
        if (sizeTypes.indexOf(value) > 0) {
          setSizeTypes((prev) => prev.filter((size) => size !== value));
        } else {
          setSizeTypes((prev) => [...prev, value]);
        }
        break;

      case "category":
        if (categoryTypes.indexOf(value) > 0) {
          setCategoryTypes((prev) => prev.filter((size) => size !== value));
        } else {
          setCategoryTypes((prev) => [...prev, value]);
        }
        break;

      case "color":
        if (colors.indexOf(value) > 0) {
          setColors((prev) => prev.filter((size) => size !== value));
        } else {
          setColors((prev) => [...prev, value]);
        }
        break;
    }
  };

  const handleToggleFilterBar = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const classes = [
      "h-screen",
      "overflow-hidden",
      "md:h-auto",
      "md:overflow-auto",
    ];
    if (open) {
      document.body.classList.add(...classes);
    } else {
      document.body.classList.remove(...classes);
    }
  }, [open]);

  return (
    <>
      <div className="relative">
        {!open && (
          <div
            className="flex items-center justify-between pb-4 mb-2 bg-white p-4 absolute z-20 top-4 left-10 text-nowrap cursor-pointer"
            onClick={handleToggleFilterBar}
          >
            <div className="flex items-center gap-2">
              <FilterIcon />
              <span className="text-sm font-medium text-gray-900">
                FILTER & SORT
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="md:sticky md:top-0 md:self-start md:h-screen ">
        <div
          className={`${
            open
              ? "md:w-[300px] md:mr-2"
              : "md:w-0 md:-translate-x-12 md:-mr-4 translate-y-[1500px] md:opacity-0"
          } transition-all md:duration-300 duration-500 bg-[#f6f4f2] border border-gray-200 px-2 py-3  fixed h-screen  min-h-full top-0 left-0 w-full z-40 md:sticky md:top-2 md:left-0 md:overflow-hidden md:overflow-y-auto overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 md:[&::-webkit-scrollbar-thumb]:bg-gray-300/50`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-2 bg-white p-4">
            <div className="flex items-center gap-2">
              <FilterIcon />
              <span className="text-sm font-medium text-gray-900">
                FILTER & SORT
              </span>
            </div>
            <button className="cursor-pointer " onClick={handleToggleFilterBar}>
              <XIcon size={"size-4"} />
            </button>
          </div>

          {/* Sort Section */}
          <div className="mb-1 bg-white p-4">
            <SectionHeader title="SORT" />
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <FilterInput
                  key={option.value}
                  type="radio"
                  name="sort"
                  value={option.value}
                  label={option.label}
                  defaultChecked={sortType === option.value}
                  onMutate={handleChangeSortType}
                />
              ))}
            </div>
          </div>

          {/* Size Section */}
          <div className="p-4 mb-1 bg-white">
            <SectionHeader title="SIZE" />
            <TwoColumnGrid
              options={sizeOptions}
              name="size"
              onMutate={handleUpdateTypes}
              types={sizeTypes}
            />
          </div>

          {/* Categories Section */}
          <div className="mb-1 bg-white p-4">
            <SectionHeader title="CATEGORIES" />
            <TwoColumnGrid
              options={categoryOptions}
              name="category"
              labels={categoryLabels}
              onMutate={handleUpdateTypes}
            />
          </div>

          {/* Color Section */}
          <div className="mb-1 bg-white p-4">
            <SectionHeader title="COLOUR" />
            <TwoColumnGrid
              options={colourOptions}
              name="color"
              labels={colourLabels}
              onMutate={handleUpdateTypes}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;

const FilterInput = ({
  type,
  name,
  value,
  label,
  defaultChecked = false,
  onMutate,
}) => {
  const inputId = `${name}-${value}`;

  return (
    <div className="flex items-center custom-radio relative">
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={(e) => onMutate(e, name)}
        className="absolute opacity-0 peer"
      />

      <label
        htmlFor={inputId}
        className="flex items-center cursor-pointer text-[14px] text-gray-700 transition-colors duration-200 hover:text-gray-900"
      >
        {/* Custom radio */}
        <span className="checkboxcls"></span>
        <span>{label}</span>
      </label>
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <div className="flex justify-between items-center mb-3">
    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
      {title}
    </h3>
    <div className="w-3 h-0.5 bg-gray-500" />
  </div>
);

const TwoColumnGrid = ({
  options,
  name,
  type = "checkbox",
  labels = {},
  types = [],
  onMutate,
}) => {
  return (
    <div className="grid grid-cols-2 gap-0">
      <div className="space-y-2">
        {options.map(
          ([left]) =>
            left && (
              <FilterInput
                key={left}
                type={type}
                name={name}
                value={left}
                label={labels[left] || left.toUpperCase()}
                defaultChecked={types.includes(left)}
                onMutate={onMutate}
              />
            )
        )}
      </div>
      <div className="space-y-2">
        {options.map(
          ([, right]) =>
            right && (
              <FilterInput
                key={right}
                type={type}
                name={name}
                value={right}
                label={labels[right] || right.toUpperCase()}
                defaultChecked={types.includes(right)}
                onMutate={onMutate}
              />
            )
        )}
      </div>
    </div>
  );
};
