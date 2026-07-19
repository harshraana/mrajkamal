import { Star } from "lucide-react";

type Props = {
  /** Rating to display (0–max). Defaults to a full rating. */
  rating?: number;
  max?: number;
  size?: number;
};

const StarRattings = ({ rating = 5, max = 5, size = 18 }: Props) => {
  const filled = Math.round(rating);
  return (
    <span
      className='flex gap-0.5'
      role='img'
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={size}
          stroke='orange'
          fill={i < filled ? "orange" : "#fafafa"}
        />
      ))}
    </span>
  );
};

export default StarRattings;
