// imports
import NextAuth from "next-auth";
import { redirect } from 'next/navigation';
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

const authOptions = NextAuth({
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
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session }) {
            return session;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/products")) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async signIn() {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                console.log("login ok !")
                return true
            } else {
                console.log("Not logged in !")
                redirect('/login');
            }
        }
    }
})

export { authOptions as GET, authOptions as POST }
