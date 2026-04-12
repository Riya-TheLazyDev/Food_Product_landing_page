// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#2F7D5B",
          greenHover: "#27694C",
          greenSoft: "#6FAF8F",
        },
        background: {
          main: "#F5F1EA",
          beige: "#E9E1D6",
          muted: "#EFE8DE",
        },
        text: {
          primary: "#2E2A26",
          secondary: "#6E665E",
          muted: "#9A9188",
        },
        accent: {
          peach: "#EAD6C4",
          yellow: "#E8DFAF",
          botanical: "#CFE3D6",
        },
        border: "#DDD6CC",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        card: "0 6px 24px rgba(0,0,0,0.08)",
      },
    },
  },
};
