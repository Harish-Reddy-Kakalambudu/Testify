export const styles = {
  header: `
    w-full
    h-[50px]
    bg-card
    border-b
    border-border
    px-4
    flex
    items-center
    justify-between
    shrink-0
  `,

  leftSection: `
    min-w-[330px]
    flex
    items-center
    gap-2
  `,

  brandMark: `
    w-[34px]
    h-[34px]
    [&_img]:w-full
    [&_img]:h-full
    [&_img]:object-contain
  `,

  brandName: `
    !text-[20px]
    !leading-none
    !font-bold
    !text-title
    mr-2
  `,

  dateTime: `
    !text-[15px]
    !text-sub
    !font-medium
    !leading-none
  `,

  centerSection: `
    flex-1
    flex
    justify-center
  `,

  workspaceName: `
    !text-[16px]
    !font-bold
    !text-title
    !leading-none
  `,

  rightSection: `
    flex
    items-center
    gap-3
    min-w-[330px]
    justify-end
  `,

  workspaceSelect: `
    !min-w-[110px]
    !h-[36px]
    !bg-card
  `,

  headerIconButton: `
    !w-[32px]
    !h-[32px]
    !p-0
    !text-sub
    hover:!bg-hover
    hover:!text-title
  `,
};
