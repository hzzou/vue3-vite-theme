declare const _default: import("vue").DefineComponent<{
    navType: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    themeId: import("vue").Ref<string>;
    themeList: import("vue").Ref<{
        id: string;
        name: string;
        color: string;
        style: any;
    }[]>;
    typeNav: import("vue").Ref<boolean>;
    showSetting: import("vue").Ref<boolean>;
    handleMenu: (data: any) => void;
    themeChange: (data: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    navType?: unknown;
} & {
    navType: boolean;
} & {}>, {
    navType: boolean;
}>;
export default _default;
