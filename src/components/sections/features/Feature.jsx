import { forwardRef } from "react";

const Feature = forwardRef(({ value, desc }, ref) => (
  <div
    ref={ref}
    className="flex flex-col justify-center items-center gap-1 p-5"
  >
    <h1 className="text-6xl font-semibold">+{value}</h1>
    <p className="text-md pl-6 font-light">{desc}</p>
  </div>
));

Feature.displayName = "Feature";

export default Feature;
