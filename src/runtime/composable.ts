import { useNuxtApp } from "#app";

export const useConfirm = (): typeof $confirm => {   
	const { $confirm } = useNuxtApp()
    return $confirm;
}