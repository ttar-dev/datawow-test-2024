import {Controller, useFormContext} from "react-hook-form";

export default function Input({
    label,
    name,
    placeholder,
    rules,
    isDisabled,
    isReadonly
}: {
    label: string;
    name: string;
    placeholder?: string;
    rules?: any;
    isDisabled?: boolean;
    isReadonly?: boolean;
}) {
    const form = useFormContext();
    return (
        <Controller
            control={form.control}
            name={name}
            rules={rules}
            render={({field, fieldState: {error, invalid}}) => (
                <div className="grid gap-1">
                    <input
                        aria-label={label}
                        className={`border border-gray-500 p-2 rounded-lg h-input font-forms text-background-foreground ring-1 ring-background-foreground focus:outline-none ${
                            invalid
                                ? "ring-red-500 focus:ring-red-500"
                                : "focus:ring-success-500"
                        }`}
                        placeholder={placeholder}
                        disabled={form.formState.isSubmitting || isDisabled}
                        readOnly={isReadonly}
                        required={!!rules?.required}
                        {...field}
                    />
                    {invalid && (
                        <span className="text-xxs font-normal text-red-500">
                            {error?.message}
                        </span>
                    )}
                </div>
            )}
        />
    );
}
