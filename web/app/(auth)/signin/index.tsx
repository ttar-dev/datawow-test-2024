"use client";
import Input from "@/components/forms/input";
import {Button, Image} from "@nextui-org/react";
import {signIn} from "next-auth/react";
import {FormProvider, useForm} from "react-hook-form";

export default function SignIn() {
    const form = useForm<SignInFormValues>({
        defaultValues: {
            credentials: {
                username: ""
            }
        }
    });

    function onSubmit(values: SignInFormValues) {
        try {
            signIn("credentials", {
                username: values.credentials.username,
                callbackUrl: "/"
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col-reverse sm:flex-row bg-content1 min-h-screen text-content1-foreground">
            <div className="flex flex-1 justify-center items-center">
                <div className="w-login space-y-6 p-4">
                    <h3 className="font-bold text-2.5xl">Sign In</h3>
                    <FormProvider {...form}>
                        <div className="space-y-4 flex flex-col">
                            <Input
                                name="credentials.username"
                                label="Username"
                                placeholder="Username"
                                rules={{required: "Username is required"}}
                            />
                            <Button
                                color="success"
                                radius="sm"
                                className="font-forms"
                                onClick={form.handleSubmit(onSubmit)}
                            >
                                Sign In
                            </Button>
                        </div>
                    </FormProvider>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-1 bg-primary-300 min-h-[50vh] sm:max-w-[calc(44%)] justify-center sm:rounded-l-4xl rounded-b-4xl text-primary-foreground">
                <Image
                    src="./images/signin-cover.png"
                    alt="Sign In"
                    className="max-h-[132px] sm:max-h-[230px]"
                />
                <h3 className="font-brand text-content1-foreground text-2.5xl">
                    a Board
                </h3>
            </div>
        </div>
    );
}
