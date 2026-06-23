import { Star } from "lucide-react";
import React from "react";

const StarRattings = () => {
  return (
    <span className='flex gap-0.5'>
      <Star size={18} fill='orange' stroke='orange'></Star>
      <Star size={18} fill='orange' stroke='orange'></Star>
      <Star size={18} fill='orange' stroke='orange'></Star>
      <Star size={18} stroke='orange'></Star>
      <Star size={18} stroke='orange'></Star>
    </span>
  );
};

export default StarRattings;
