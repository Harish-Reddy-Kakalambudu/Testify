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
    min-h-[42px]
    border-b
    !border-pri-200
    px-2
  `,

  tab: `
    !min-h-[42px]
    !h-[42px]
    !min-w-0
    !px-3
    !py-0
    !normal-case
    !text-main
    !text-[var(--fs-sm)]
    !font-medium
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
    !text-[var(--fs-sm)]
    !font-inherit
    !leading-none
    truncate
  `,

  closeButton: `
    !w-[16px]
    !h-[16px]
    !min-w-[16px]
    !p-0
    !ml-0.5
    !text-sub
    !rounded-sm
    hover:!bg-soft
    hover:!text-title
  `,
};
