import type { ModuleOptions } from "./module";
import type { InjectionKey } from 'vue';


export type Rejection = 'OUTSIDE_CLICK' | 'ESC' | 'CANCEL_BTN';

export type Confirmation = 'OK_BTN'

export type VuetifyConfirmData = {
    show: boolean;
    locale: string;
    options: ModuleOptions;
    resolve: (arg: Confirmation) => void;
    reject: (arg: Rejection) => void;
}


export const VuetifyConfirmDataKey: InjectionKey<VuetifyConfirmData> = Symbol('VuetifyConfirmData');