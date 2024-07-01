import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import _ from "lodash";
import axios from "axios";

const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/signin",
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
                username: {label: "Username", type: "text"}
            },
            async authorize(credentials: any) {
                const {data} = await axios.post(
                    process.env.API_URL + "/auth/signin",
                    {
                        username: credentials.username
                    }
                );
                return data;
            }
        })
    ],
    callbacks: {
        async jwt(cb: any) {
            const {token, user} = cb;
            if (user) {
                token.access_token = user.access_token;
                token.token_type = user.token_type;
                token.expires_in = user.expires_at;
                token.uid = user.uid;
                token.email = user.email;
                token.name = user.name;
            }

            return token;
        },

        async session(cb: any) {
            cb.session.user = cb.token;
            return cb.session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
};

export default authOptions;
