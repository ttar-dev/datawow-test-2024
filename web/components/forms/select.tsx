"use client";

import {Select as NXSelect, SelectItem, SelectProps} from "@nextui-org/react";
import {useState} from "react";
import {Controller, useFormContext} from "react-hook-form";

type OptionTypes = {key: string; label: string};

export default function Select({
    label,
    name,
    placeholder,
    rules,
    options,
    variant,
    color
}: {
    label: string;
    name: string;
    placeholder?: string;
    rules?: any;
    options: OptionTypes[];
    variant?: SelectProps["variant"];
    color?: SelectProps["color"];
}) {
    const form = useFormContext();
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Controller
                control={form.control}
                name={name}
                rules={rules}
                render={({field, fieldState: {error, invalid}}) => (
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
                        onSelectionChange={vals => {
                            field.onChange(
                                Array.from(vals).join(", ").replaceAll("_", " ")
                            );
                        }}
                        variant={variant}
                        color={color}
                        onOpenChange={setOpen}
                        selectedKeys={[field.value]}
                        labelPlacement="outside-left"
                        placeholder={placeholder}
                        isInvalid={invalid}
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
