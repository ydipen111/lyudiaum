// Import the utility
import { createSvgIcon } from '@mui/material/utils';

// Define your custom composite icon
const HexCircleIcon = createSvgIcon(
  <svg viewBox="0 0 24 24">
    {/* Hexagon shape */}
    <path
      d="M12 2l10 6v10l-10 6-10-6V8z"
      fill="currentColor"
    />
    {/* Circle inside the hexagon */}
    <circle
      cx="12"
      cy="12"
      r="5"
      fill="white"
    />
  </svg>,
  'HexCircle'
);

export default HexCircleIcon;