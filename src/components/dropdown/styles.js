export const styles = {
  trigger: `
    flex
    items-center
    justify-between
    gap-2

    min-w-[130px]
    h-[33px]

    px-3

    cursor-pointer
    select-none

    bg-color-card
    border
    border-border-main
    rounded-[var(--radius-sm)]

    transition-all
    duration-200

    hover:bg-color-hover
  `,

  value: {
    color: "var(--txt-title)",
    fontSize: "var(--fs-sm)",
    flex: 1,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  paper: {
    mt: "8px", // <-- 8px gap

    minWidth: "180px",

    backgroundColor: "var(--bg-card)",

    border: "1px solid var(--bd-light)",

    borderRadius: "var(--radius-md)",

    boxShadow: "var(--shadow-md)",

    overflow: "hidden",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    padding: "4px",
  },

  item: {
    display: "flex",
    alignItems: "center",

    height: "36px",

    padding: "0 12px",

    cursor: "pointer",

    borderRadius: "6px",

    transition: "all .2s ease",

    "&:hover": {
      backgroundColor: "var(--pri-200)",
    },
  },

  selectedItem: {
    backgroundColor: "var(--pri-100)",
  },

  itemText: {
    color: "var(--txt-main)",
    fontSize: "var(--fs-sm)",
    width: "100%",
  },
};