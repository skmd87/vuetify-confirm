import { useNuxtApp } from "#app";

export const useConfirm = () => {
    const { $confirm } = useNuxtApp()

    return $confirm;
}