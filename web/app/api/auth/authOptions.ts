import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import _ from "lodash";

const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
        signOut: "/"
    },
    debug: true,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                if (
                    credentials?.username !== "johndoe@example.com" &&
                    credentials?.password !== "P@ss0wrd"
                ) {
                    return null;
                }
                const user = {
                    id: "1",
                    name: "John Doe",
                    email: "johndoe@example.com"
                };

                return user;
            }
        })
    ],
    callbacks: {
        async jwt(cb: any) {
            const {token} = cb;

            if (token.email === "johndoe@example.com") {
                return token;
            }
        },

        async session(cb: any) {
            return cb.session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
};

export default authOptions;
