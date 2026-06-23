export const styles = {
  container: `
    w-full
    h-full
    flex
    flex-col
  `,

  header: `
    w-full
    h-[42px]
    flex
    items-center
    bg-card
    border-b
    border-border
  `,

  list: `
    flex-1
  `,

  tab: `
    !min-h-[42px]
    !h-[42px]
    !normal-case
    !px-0
    !py-0
  `,

  tabLabel: `
    flex
    flex-row
    items-center
    gap-2
    px-3
    h-full
    min-w-[140px]
    max-w-[220px]
    whitespace-nowrap
  `,

  tabText: `
    !text-[13px]
    !font-medium
    !text-main
    truncate
    max-w-[120px]
  `,

  methodText: `
    !text-[10px]
    !font-bold
    uppercase
    tracking-wide
    shrink-0
  `,

  methodGET: `!text-get`,
  methodPOST: `!text-post`,
  methodPUT: `!text-put`,
  methodPATCH: `!text-patch`,
  methodDELETE: `!text-delete`,

  panel: `
    flex-1
    overflow-hidden
  `,
};