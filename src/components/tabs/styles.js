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
    flex
    items-end
    gap-1
    border-b
    border-border
    px-2
    overflow-x-auto
  `,

  tab: `
    h-[42px]
    px-3
    border-b-2
    border-transparent
    flex
    items-center
    justify-center
    gap-2
    shrink-0
    cursor-pointer
    bg-transparent
    text-main
    text-[var(--fs-sm)]
    font-medium
    transition-all
    duration-200
    hover:bg-hover
    hover:text-title
  `,

  activeTab: `
    !border-pri-500
    !text-title
    !font-semibold
  `,

  panel: `
    w-full
    flex-1
    bg-card
    text-main
  `,

  closeButton: `
    !w-5
    !h-5
    !p-0
    !text-sub
    hover:!bg-soft
    hover:!text-title
  `,
};
