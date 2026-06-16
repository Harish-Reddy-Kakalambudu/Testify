export const styles = {
  container: `
    flex-1
    flex
    flex-col
    min-w-0
    bg-card
  `,

  header: `
    h-[58px]
    px-4
    border-b
    border-border
    flex
    items-center
    justify-between
  `,

  title: `
    !text-[18px]
    !leading-none
    !font-bold
    !text-title
  `,

  searchBox: `
    h-[36px]
    mx-4
    mt-11
    mb-4
    px-3
    rounded-[6px]
    bg-soft
    flex
    items-center
    gap-2
  `,

  searchText: `
    !text-[16px]
    !leading-none
    !font-normal
    !text-sub
  `,

  collectionContainer: `
    flex-1
    px-4
    pb-4
    flex
    flex-col
    gap-2
    overflow-auto
  `,

  collectionGroup: `
    flex
    flex-col
  `,

  collection: `
    h-[28px]
    rounded-[6px]
    flex
    items-center
    gap-1
    cursor-pointer
    hover:bg-hover
    transition-all
    duration-200
    text-main
  `,

  collectionTitle: `
    !text-[16px]
    !font-semibold
    !text-title
    !leading-none
  `,

  requestList: `
    flex
    flex-col
    gap-1
    pt-1
    pb-2
  `,

  requestItem: `
    h-[29px]
    pl-[26px]
    pr-2
    flex
    items-center
    gap-3
    rounded-[6px]
    hover:bg-hover
    cursor-pointer
  `,

  method: `
    min-w-[34px]
    !text-[9px]
    !font-bold
    !leading-none
    !font-mono
  `,

  methodGET: "!text-[#2563eb]",
  methodPOST: "!text-[#00a86b]",
  methodPUT: "!text-[#f59e0b]",
  methodDELETE: "!text-[#ef4444]",
  methodWS: "!text-[#0891b2]",
  methodGQL: "!text-[#c026d3]",

  requestLabel: `
    !text-[16px]
    !font-normal
    !text-title
    !leading-none
  `,
};
