"use client";
import {Controller, useFormContext} from "react-hook-form";
import {TextAreaProps, Textarea as NXTextarea} from "@nextui-org/react";

export default function Textarea({
    label,
    name,
    placeholder,
    rules,
    isDisabled,
    isReadonly,
    classNames
}: {
    label: string;
    name: string;
    placeholder?: string;
    rules?: any;
    isDisabled?: boolean;
    isReadonly?: boolean;
    classNames?: TextAreaProps["classNames"];
}) {
    const form = useFormContext();
    return (
        <>
            <Controller
                control={form.control}
                name={name}
                rules={rules}
                render={({field, fieldState: {error, invalid}}) => (
                    <NXTextarea
                        classNames={{
                            label: "hidden",
                            inputWrapper: `${
                                classNames?.inputWrapper
                                    ? classNames?.inputWrapper
                                    : "ring-green-100"
                            } bg-transparent ring-2 h-button`,
                            mainWrapper:
                                "w-full bg-transparent h-button font-forms"
                        }}
                        radius="sm"
                        fullWidth
                        isDisabled={form.formState.isSubmitting || isDisabled}
                        isReadOnly={isReadonly}
                        isRequired={!!rules?.required}
                        placeholder={placeholder}
                        label={label}
                        errorMessage={error?.message}
                        isInvalid={invalid}
                        onChange={field.onChange}
                    />
                )}
            />
        </>
    );
}
