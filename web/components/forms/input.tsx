"use client";
import {Controller, useFormContext} from "react-hook-form";
import {InputProps, Input as NXInput} from "@nextui-org/react";

export default function Input({
    label,
    name,
    placeholder,
    rules,
    isDisabled,
    isReadonly,
    startContent
}: {
    label: string;
    name: string;
    placeholder?: string;
    rules?: any;
    isDisabled?: boolean;
    isReadonly?: boolean;
    startContent?: InputProps["startContent"];
}) {
    const form = useFormContext();
    return (
        <>
            <Controller
                control={form.control}
                name={name}
                rules={rules}
                render={({field, fieldState: {error, invalid}}) => (
                    <NXInput
                        classNames={{
                            label: "hidden",
                            inputWrapper:
                                "bg-transparent ring-2 ring-green-100 h-button",
                            mainWrapper:
                                "w-full bg-transparent h-button font-forms"
                        }}
                        radius="sm"
                        fullWidth
                        startContent={startContent}
                        isDisabled={form.formState.isSubmitting || isDisabled}
                        isReadOnly={isReadonly}
                        isRequired={!!rules?.required}
                        placeholder={placeholder}
                        label={label}
                        errorMessage={error?.message}
                        isInvalid={invalid}
                        onChange={field.onChange}
                        labelPlacement="outside-left"
                    />
                )}
            />
        </>
    );
}
