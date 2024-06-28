export default function Input({
    label,
    ...props
}: {label: string} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col">
            <input
                className="border border-gray-500 p-2 rounded-lg h-input font-forms text-background-foreground ring-1 ring-background-foreground focus:ring-success-500 focus:outline-none"
                {...props}
            />
        </div>
    );
}
