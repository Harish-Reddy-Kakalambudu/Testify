export const styles = {
  container: `
    w-[80px]
    px-1
    border-r
    border-border
    flex
    flex-col
    items-center
    justify-between
    py-3
    shrink-0
    bg-card
  `,

  topGroup: `
    w-full
    flex
    flex-col
    items-center
    gap-1
  `,

  menuItem: `
    w-full
    min-h-[55px]
    px-1
    rounded-[8px]
    flex
    flex-col
    items-center
    justify-center
    gap-1
    cursor-pointer
    no-underline
    text-sub
    hover:bg-hover
    hover:text-title
    transition-all
    duration-200
    overflow-hidden
  `,

  activeMenuItem: `
    !bg-pri-50
    !text-pri-500
  `,

  label: `
    w-full
    max-w-full
    !text-fs-2xs
    !leading-[12px]
    !text-inherit
    !font-medium
    !text-center
    whitespace-nowrap
    overflow-hidden
  `,
};
