import {mutate} from "swr";
import axios, {AxiosResponse} from "axios";

const fetcher = (url: string) =>
    axios.get(url).then(({data}: {data: any}) => data);

async function preflight(key: string): Promise<AxiosResponse> {
    const request = await fetcher(key);
    mutate(key, request, false);
    return request;
}

export {fetcher, preflight};
