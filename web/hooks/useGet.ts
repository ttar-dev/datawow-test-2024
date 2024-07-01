import {fetcher, preflight} from "@/utils/fetcher";
import useSWR from "swr";

export default function useGet(key: string) {
    const props = useSWR(key, fetcher);
    return {...props, isLoading: props.isLoading || props.isValidating};
}

export async function prefetchData(key: string) {
    return await preflight(key);
}
