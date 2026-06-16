export const styles = {
  container: `
    w-[80px]
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
    w-[64px]
    min-h-[55px]
    rounded-[8px]
    flex
    flex-col
    items-center
    justify-center
    gap-1
    cursor-pointer
    text-sub
    hover:bg-hover
    hover:text-title
    transition-all
    duration-200
  `,

  activeMenuItem: `
    !bg-pri-50
    !text-pri-500
  `,

  label: `
    !text-[12px]
    !leading-[14px]
    !text-inherit
    !font-medium
    !text-center
  `,
};
