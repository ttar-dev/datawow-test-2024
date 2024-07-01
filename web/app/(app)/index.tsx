"use client";

import Input from "@/components/forms/input";
import Select from "@/components/forms/select";
import {Avatar, Button, Chip} from "@nextui-org/react";
import {useSession} from "next-auth/react";
import {FormProvider, useForm} from "react-hook-form";
import {MdSearch} from "react-icons/md";
import {TbMessageCircle} from "react-icons/tb";

export default function Home() {
    const {data: session} = useSession();

    const options = [
        {key: "cat", label: "Cat"},
        {key: "dog", label: "Dog"},
        {key: "elephant", label: "Elephant"},
        {key: "lion", label: "Lion"}
    ];
    const form = useForm({
        defaultValues: {
            search: {
                search: "",
                community: ""
            }
        }
    });
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
                            options={options}
                            placeholder="Community"
                        />
                    </div>
                    <div className="grid col-span-2 sm:col-span-1">
                        <Button
                            color="success"
                            radius="sm"
                            className="font-forms"
                            endContent={<span>+</span>}
                        >
                            Create
                        </Button>
                    </div>
                </div>
            </FormProvider>
            <div className="py-6">
                <div className="bg-white rounded-xl divide-y-1">
                    {[1, 2, 3].map((item: number) => (
                        <div key={item} className="p-4 space-y-2.5">
                            <div className="flex gap-2 items-center">
                                <Avatar src={session?.user?.image as string} />
                                <span>{session?.user?.name}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Chip
                                    classNames={{
                                        base: "bg-grey-100/30"
                                    }}
                                    size="sm"
                                >
                                    Chip
                                </Chip>
                            </div>
                            <div className="space-y-1">
                                <h6 className="font-base font-semibold">
                                    Lorem ipsum dolor sit, amet consectetur
                                </h6>
                                <span className="text-xs line-clamp-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Saepe corporis hic officia
                                    reiciendis earum voluptas velit fugit
                                    ratione illum assumenda est fugiat nemo quos
                                    nam, repudiandae nihil repellat sit impedit!
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quidem cumque atque
                                    molestias esse laboriosam dolorum officia
                                    placeat provident rem, consequatur minus
                                    nostrum illo! Accusamus temporibus aperiam
                                    ipsum. Aut, repellat dolor?
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
