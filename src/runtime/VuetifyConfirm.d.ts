import type { ModuleOptions } from "../module";
import type { InjectionKey } from '#imports';

declare module "#app" {
    interface NuxtApp {
        $confirm: (params?: ModuleOptions | string) => Promise<{ status: Confirmation, loading: boolean, hide: () => void }>;
    }
}
declare module 'vue' {
    interface ComponentCustomProperties {
		$confirm: (params?: ModuleOptions | string) => Promise<{ status: Confirmation, loading: boolean, hide: () => void }>;
    }
 }
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
		$confirm: (params?: ModuleOptions | string) => Promise<{ status: Confirmation, loading: boolean, hide: () => void }>;
    }
}

export type Rejection = 'OUTSIDE_CLICK' | 'ESC' | 'CANCEL_BTN';

export type Confirmation = 'OK_BTN'

export type VuetifyConfirmData = {
    show: boolean;
    locale: string;
    options: ModuleOptions;
    resolve: (arg: Confirmation) => void;
    reject: (arg: Rejection) => void;
	loading: boolean;
}


export const VuetifyConfirmDataKey: InjectionKey<VuetifyConfirmData> = Symbol('VuetifyConfirmData');