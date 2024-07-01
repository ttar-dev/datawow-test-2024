"use client";
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    UseDisclosureProps,
    Link
} from "@nextui-org/react";
import {useFormContext} from "react-hook-form";
import Input from "@/components/forms/input";
import Textarea from "@/components/forms/textarea";
import Select from "@/components/forms/select";
import {CommunityOptions} from "@/constants";
import {useSession} from "next-auth/react";

export default function PostModal({
    children,
    title,
    actions,
    onSubmit
}: {
    children: React.ReactNode;
    title: string;
    actions: UseDisclosureProps | any;
    onSubmit: () => void;
}) {
    const {status} = useSession();
    const form = useFormContext();
    const {isOpen, onOpenChange} = actions;

    return (
        <>
            {children}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    base: "bg-white"
                }}
                size="2xl"
            >
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                            <ModalBody>
                                {status === "authenticated" ? (
                                    <div className="space-y-4">
                                        <Select
                                            name="post.community"
                                            label="Community"
                                            options={CommunityOptions}
                                            placeholder="Community"
                                            variant="bordered"
                                            color="success"
                                            rules={{
                                                required:
                                                    "Community is required"
                                            }}
                                        />
                                        <Input
                                            name="post.title"
                                            label="Title"
                                            placeholder="Title"
                                            classNames={{
                                                inputWrapper: "ring-default"
                                            }}
                                            rules={{
                                                required: "Title is required"
                                            }}
                                        />
                                        <Textarea
                                            name="post.content"
                                            label="Content"
                                            placeholder="What’s on your mind..."
                                            classNames={{
                                                inputWrapper: "ring-default"
                                            }}
                                            rules={{
                                                required: "Content is required"
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="min-h-[20vh] flex justify-center items-center">
                                        <span>
                                            You need to be logged in to post
                                        </span>
                                        <Link
                                            href="/signin"
                                            className="ml-2 text-primary"
                                        >
                                            Sign In
                                        </Link>
                                    </div>
                                )}
                            </ModalBody>
                            {status === "authenticated" && (
                                <ModalFooter>
                                    <Button
                                        color="success"
                                        variant="bordered"
                                        onPress={onClose}
                                        className="font-forms"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        color="success"
                                        onPress={onSubmit}
                                        className="font-forms"
                                    >
                                        Post
                                    </Button>
                                </ModalFooter>
                            )}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
