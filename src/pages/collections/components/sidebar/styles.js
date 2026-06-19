export const styles = {
    container: `
        h-full
        w-[320px]
        min-w-[320px]
        bg-card
        border-r
        border-border
        flex
        flex-col
    `,

    controls: `
        min-h-[45px]
        px-2
        bg-card
        flex
        items-center
        gap-2
    `,

    searchBox: `
        flex-1
        min-w-0
    `,

    searchInput: `
        shrink
    `,

    filterButton: `
        shrink-0
    `,

    actions: `
        flex
        items-center
        justify-end
        gap-2
        shrink-0
    `,

    importButton: `
        !border
        !border-border
        !text-fs-sm
        !font-semibold
        !px-2
        !min-w-0
    `,

    newButton: `
        !text-fs-sm
        !font-semibold
        !px-2
        !min-w-0
    `,

    collectionList: `
        flex-1
        min-h-0
        overflow-auto
        py-3
        px-2
        flex
        flex-col
        gap-1
        bg-card
    `,

    collectionGroup: `
        flex
        flex-col
    `,

    collectionHeader: `
        h-[34px]
        px-2
        rounded-[6px]
        flex
        items-center
        justify-between
        gap-2
        cursor-pointer
        text-title
        hover:bg-hover
        transition-all
        duration-200
    `,

    collectionTitleWrap: `
        min-w-0
        flex
        items-center
        gap-2
    `,

    arrowIcon: `
        !text-fs-2xl
        !text-sub
        shrink-0
    `,

    folderIcon: `
        !text-fs-2xl
        !text-sub
        shrink-0
    `,

    collectionTitle: `
        !text-fs-md
        !font-semibold
        !text-title
        !leading-none
        truncate
    `,

    requestCount: `
        min-w-[20px]
        h-[20px]
        px-1.5
        rounded-full
        bg-soft
        flex
        items-center
        justify-center
        !text-fs-xxs
        !font-semibold
        !text-sub
        !leading-none
    `,

    requestList: `
        flex
        flex-col
        gap-0.5
        pb-1
    `,

    requestItem: `
        min-h-[32px]
        ml-7
        mr-1
        px-2
        rounded-[6px]
        flex
        items-center
        gap-2
        cursor-pointer
        hover:bg-hover
        transition-all
        duration-200
    `,

    method: `
        w-[34px]
        !font-mono
        !text-fs-2xs
        !font-bold
        !leading-none
        shrink-0
    `,

    methodGET: "!text-get",
    methodPOST: "!text-post",
    methodPUT: "!text-put",
    methodPATCH: "!text-patch",
    methodDELETE: "!text-delete",
    methodWS: "!text-[#0891b2]",
    methodGQL: "!text-[#c026d3]",

    requestText: `
        min-w-0
        flex
        flex-col
        gap-1
    `,

    requestName: `
        !text-fs-sm
        !font-medium
        !text-main
        !leading-none
        truncate
    `,

    requestPath: `
        !text-fs-xxs
        !font-normal
        !text-sub
        !leading-none
        truncate
    `,

    emptyState: `
        mt-8
        px-4
        text-center
    `,

    emptyTitle: `
        !text-fs-md
        !font-semibold
        !text-title
    `,

    emptyText: `
        !mt-1
        !text-fs-sm
        !text-sub
    `,
};
