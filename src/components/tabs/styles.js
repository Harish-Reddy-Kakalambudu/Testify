export const styles = {
  container: `
    w-full
    flex
    flex-col
    bg-card
    text-main
  `,

  list: `
    w-full
    min-h-[50px]
    border-b
    !border-border
    !bg-card
    !px-0
  `,

  tab: `
    !min-h-[50px]
    !h-[50px]
    !min-w-0
    !px-4
    !py-0
    !normal-case
    !text-main
    !text-fs-lg
    !font-medium
    !border-r
    !border-border
    !rounded-none
    hover:!bg-hover
    hover:!text-title
    [&.Mui-selected]:!text-title
    [&.Mui-selected]:!font-semibold
  `,

  panel: `
    w-full
    flex-1
    bg-card
    text-main
  `,

  tabLabel: `
    flex
    items-center
    gap-1.5
    min-w-0
    leading-none
  `,

  tabText: `
    !text-fs-lg
    !font-inherit
    !leading-none
    truncate
  `,

  methodText: `
    !text-fs-3xs
    !font-bold
    !leading-none
    !font-mono
    uppercase
  `,

  methodGET: "!text-[#2563eb]",
  methodPOST: "!text-[#00a86b]",
  methodPUT: "!text-[#f59e0b]",
  methodPATCH: "!text-[#8b5cf6]",
  methodDELETE: "!text-[#ef4444]",

  addTab: `
    !w-[56px]
    !min-w-[56px]
    !text-sub
  `,

  closeButton: `
    !w-[15px]
    !h-[15px]
    !min-w-[15px]
    !p-0
    !ml-0.5
    !text-sub
    !rounded-sm
    hover:!bg-soft
    hover:!text-title
  `,
};
