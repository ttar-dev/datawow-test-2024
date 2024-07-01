"use client";
import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";
import axios from "axios";
import {useSession} from "next-auth/react";
import {useDispatch} from "react-redux";
import {setLoading} from "@/store/state/app";

export default function UIProvider({children}: {children: React.ReactNode}) {
    const {data: session} = useSession();
    const dispatch = useDispatch();
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL as string;

    axios.interceptors.request.use(
        async config => {
            if (status === "authenticated") {
                config.headers.Authorization = `Bearer ${session?.token?.access_token}`;
            }

            if (!config.headers.hideLoading) dispatch(setLoading(true));

            return new Promise(resolve => {
                resolve(config);
            });
        },
        error => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        resp => {
            dispatch(setLoading(false));
            return resp;
        },
        async error => {
            dispatch(setLoading(false));
            return Promise.reject(error);
        }
    );

    return (
        <NextUIProvider>
            <div className="relative w-full">{children}</div>
        </NextUIProvider>
    );
}
