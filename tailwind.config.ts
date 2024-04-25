// import type { Config } from "tailwindcss"

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     colors: {
//       primary: "#66ACDC",
//       secondary: "#04BD4B",
//       error: {
//         500: "#EB270B",
//       },
//     },
//   },
//   plugins: [],
// }
// export default config

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#66ACDC", // Default primary color
          light: "#8fc1e3", // Lighter shade of primary color
          dark: "#4a91c3", // Darker shade of primary color
        },
        secondary: {
          DEFAULT: "#04BD4B", // Default secondary color
          light: "#36d25e", // Lighter shade of secondary color
          dark: "#03963d", // Darker shade of secondary color
        },
        error: {
          100: "#FDE8E6", // Very light error color
          300: "#FCB3A4", // Light error color
          500: "#EB270B", // Default error color
          700: "#C71D08", // Darker error color
          900: "#A31606", // Very dark error color
        },
      },
    },
  },
  plugins: [],
};

export default config;
