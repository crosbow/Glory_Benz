"use client";

import { useState } from "react";
import "../style.css";

const FilterBar = () => {
  const [sortType, setSortType] = useState("");

  const sortOptions = [
    { value: "newest", label: "Newest", defaultChecked: true },
    { value: "recommended", label: "Recommended" },
    { value: "price-low", label: "Price low to high" },
    { value: "price-high", label: "Price high to low" },
  ];

  const sizeOptions = [
    ["xs", "s"],
    ["m", "l"],
    ["xl", "xxl"],
    ["34", "36"],
    ["37", "38"],
    ["39", "40"],
    ["41", "42"],
    ["44", "46"],
    ["48", ""],
  ];

  const categoryOptions = [
    ["cardigans", "coats"],
    ["dresses", "jackets"],
    ["shoes", "skirts"],
    ["sweaters", "tshirts"],
    ["tops", "trousers"],
    ["waistcoats", ""],
  ];

  const colourOptions = [
    ["beige", "black"],
    ["brown", "coral"],
    ["green", "grey"],
    ["hot-pink", "khaki"],
    ["light-green", "orange"],
    ["pink", "sand"],
    ["soft-pink", "taupe"],
  ];

  const categoryLabels = {
    cardigans: "Cardigans",
    coats: "Coats",
    dresses: "Dresses",
    jackets: "Jackets",
    shoes: "Shoes",
    skirts: "Skirts",
    sweaters: "Sweaters",
    tshirts: "T-shirts",
    tops: "Tops & Blouses",
    trousers: "Trousers",
    waistcoats: "Waistcoats",
  };

  const colourLabels = {
    beige: "Beige",
    black: "Black",
    brown: "Brown",
    coral: "Coral",
    green: "Green",
    grey: "Grey",
    "hot-pink": "Hot pink",
    khaki: "Khaki",
    "light-green": "Light green",
    orange: "Orange",
    pink: "Pink",
    sand: "Sand",
    "soft-pink": "Soft pink",
    taupe: "Taupe",
  };

  const handleChangeSortType = (e) => {
    const newSortType = e.target.value;
    setSortType(newSortType);
  };

  return (
    <div className="md:w-80 bg-[#f0f0f0] border border-gray-200 p-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-2 bg-white p-4">
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-700"
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
          <span className="text-sm font-medium text-gray-900">
            FILTER & SORT
          </span>
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-600"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
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
              onSortTypeChange={handleChangeSortType}
            />
          ))}
        </div>
      </div>

      {/* Size Section */}
      <div className="p-4 mb-1 bg-white">
        <SectionHeader title="SIZE" />
        <TwoColumnGrid options={sizeOptions} name="size" />
      </div>

      {/* Categories Section */}
      <div className="mb-1 bg-white p-4">
        <SectionHeader title="CATEGORIES" />
        <TwoColumnGrid
          options={categoryOptions}
          name="category"
          labels={categoryLabels}
        />
      </div>

      {/* Color Section */}
      <div className="mb-1 bg-white p-4">
        <SectionHeader title="COLOUR" />
        <TwoColumnGrid
          options={colourOptions}
          name="colour"
          labels={colourLabels}
        />
      </div>
    </div>
  );
};

export default FilterBar;

const FilterInput = ({
  type,
  name,
  value,
  label,
  defaultChecked = false,
  onSortTypeChange,
}) => {
  const inputId = `${name}-${value}`;

  return (
    <div className="flex items-center custom-radio relative">
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        checked={defaultChecked}
        onChange={onSortTypeChange}
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

const TwoColumnGrid = ({ options, name, type = "checkbox", labels = {} }) => (
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
            />
          )
      )}
    </div>
  </div>
);
