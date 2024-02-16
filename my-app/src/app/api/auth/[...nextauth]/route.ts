// imports
import NextAuth from "next-auth";
import { redirect } from 'next/navigation';
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

const handlers = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async session({ session }) {
            return session;
        },
        async signIn() {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                console.log("login ok !")
                return true;
            } else {
                console.log("Not logged in !")
                redirect('/login');
            }
        }
    }
})

export { handlers as GET, handlers as POST }

/*
only one url & already manage by middleware
async redirect({ url, baseUrl }) {
    if (url.startsWith("/products")) return `${baseUrl}${url}`
    else if (new URL(url).origin === baseUrl) return url
    return baseUrl
}, */