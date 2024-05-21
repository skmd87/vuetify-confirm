import { useNuxtApp } from "#app";
const { $confirm } = useNuxtApp()
export const useConfirm = (): typeof $confirm => {   

    return $confirm;
}