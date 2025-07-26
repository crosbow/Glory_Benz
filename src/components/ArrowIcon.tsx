const ArrowIcon = ({ direction = "left", className = "" }) => (
  <svg
    className={`w-4 h-6 ${className}`}
    viewBox="0 0 14 27"
    aria-hidden="true"
    focusable="false"
  >
    <polyline
      points={
        direction === "left"
          ? "12.7,2.3 1.5,13.5 12.7,24.7"
          : "1.5,2.3 12.7,13.5 1.6,24.7"
      }
      className="stroke-current fill-transparent"
    />
  </svg>
);

export default ArrowIcon;
