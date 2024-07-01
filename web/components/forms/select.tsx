"use client";

import {Select as NXSelect, SelectItem} from "@nextui-org/react";
import {useState} from "react";
import {Controller, useFormContext} from "react-hook-form";

type OptionTypes = {key: string; label: string};

export default function Select({
    label,
    name,
    placeholder,
    rules,
    options
}: {
    label: string;
    name: string;
    placeholder?: string;
    rules?: any;
    options: OptionTypes[];
}) {
    const form = useFormContext();
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Controller
                control={form.control}
                name={name}
                rules={rules}
                render={() => (
                    <NXSelect
                        label={label}
                        classNames={{
                            label: "hidden",
                            base: "h-button",
                            popoverContent: "bg-white rounded-lg",
                            trigger:
                                "min-h-[40px] max-h-[40px] h-[40px] rounded-lg bg-transparent shadow-none"
                        }}
                        popoverProps={{
                            backdrop: "blur"
                        }}
                        onOpenChange={setOpen}
                        labelPlacement="outside-left"
                        placeholder={placeholder}
                    >
                        {options.map((option: OptionTypes) => (
                            <SelectItem
                                key={option.key}
                                classNames={{
                                    base: "h-input text-base",
                                    title: "text-base"
                                }}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </NXSelect>
                )}
            />
        </>
    );
}
