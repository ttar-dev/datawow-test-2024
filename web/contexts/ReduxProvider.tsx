"use client";

import {Provider} from "react-redux";
import store from "@/store";
import {SWRConfig} from "swr";
import {fetcher} from "@/utils/fetcher";

export function ReduxProvider({children}: {children: React.ReactNode}) {
    return (
        <SWRConfig
            value={{
                fetcher: fetcher,
                keepPreviousData: true,
                shouldRetryOnError: false,
                revalidateOnFocus: false
            }}
        >
            <Provider store={store}>{children}</Provider>
        </SWRConfig>
    );
}
