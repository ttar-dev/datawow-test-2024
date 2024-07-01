"use client";

import Input from "@/components/forms/input";
import Select from "@/components/forms/select";
import useGet from "@/hooks/useGet";
import {Avatar, Button, Chip, useDisclosure} from "@nextui-org/react";
import {useSession} from "next-auth/react";
import {FormProvider, useForm} from "react-hook-form";
import {MdSearch} from "react-icons/md";
import {TbMessageCircle} from "react-icons/tb";
import PostModal from "./post/components/modal-post";
import {CommunityOptions} from "@/constants";
import axios from "axios";
import {preflight} from "@/utils/fetcher";

type PostFormValues = {
    title: string;
    content: string;
    community: string;
};

type SearchFormValues = {
    search: string;
    community: string;
};

export default function Home() {
    const {data: session} = useSession();
    const mdCreate = useDisclosure();
    const {data: posts} = useGet("/posts");
    console.log("🚀 ~ Home ~ posts:", posts);

    const form = useForm<{
        post: PostFormValues;
        search: SearchFormValues;
    }>({
        defaultValues: {
            search: {
                search: "",
                community: ""
            },
            post: {
                title: "",
                content: "",
                community: ""
            }
        }
    });

    async function handleCreate(values: {
        post: PostFormValues;
        search: SearchFormValues;
    }) {
        try {
            await axios.post("/post", values.post);
            preflight("/posts");
            mdCreate.onClose();
            form.reset();
        } catch (error) {
            console.log("🚀 ~ Home ~ error:", error);
        }
    }
    return (
        <section className="w-full">
            <FormProvider {...form}>
                <div className="grid grid-cols-6 gap-1 sm:gap-2">
                    <div className="grid col-span-2 sm:col-span-4">
                        <Input
                            name="search.search"
                            label="Search"
                            startContent={<MdSearch className="text-xl" />}
                        />
                    </div>
                    <div className="grid col-span-2 sm:col-span-1">
                        <Select
                            name="search.community"
                            label="Community"
                            options={CommunityOptions}
                            placeholder="Community"
                        />
                    </div>
                    <div className="grid col-span-2 sm:col-span-1">
                        <PostModal
                            actions={mdCreate}
                            title="Create Post"
                            onSubmit={form.handleSubmit(handleCreate)}
                        >
                            <Button
                                color="success"
                                radius="sm"
                                className="font-forms"
                                endContent={<span>+</span>}
                                onClick={mdCreate.onOpen}
                            >
                                Create
                            </Button>
                        </PostModal>
                    </div>
                </div>
            </FormProvider>
            <div className="py-6">
                <div className="bg-white rounded-xl divide-y-1">
                    {posts?.map((item: PostFormValues, index: number) => (
                        <div key={index} className="p-4 space-y-2.5">
                            <div className="flex gap-2 items-center">
                                <Avatar src={session?.user?.image as string} />
                                <span>{session?.user?.name}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Chip
                                    classNames={{
                                        base: "bg-grey-100/30 capitalize"
                                    }}
                                    size="sm"
                                >
                                    {item.community}
                                </Chip>
                            </div>
                            <div className="space-y-1">
                                <h6 className="font-base font-semibold truncate">
                                    {item.title}
                                </h6>
                                <span className="text-xs line-clamp-2">
                                    {item.content?.substring(0, 300)}
                                </span>
                            </div>

                            <div className="flex gap-1 text-xs opacity-50 items-center">
                                <TbMessageCircle className="text-base" />
                                <div>32</div>
                                <div>Comments</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
