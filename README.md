# next-login

## NextJS14 with NextAuth 

- login (github & google providers)

---

## Motivation

- Login with GitHub provider.
- Test NextAuth to login from two routes (products + about).
- How to setup a middleware with `redirect`.
- How to setup a session provider without to ask login in each route.

---

Generate a NEXTAUTH_SECRET key :
`$ openssl rand -base64 32`

1) Go to the settings of github > dev settings > OAuth > enter url twice : http://localhost:3000 
2) And copy your key into the .env file.

Your `.env (or .env.local)` file should look like this:

```
GITHUB_ID=secretid
GITHUB_SECRET=secrettoo

NEXTAUTH_SECRET=genereate_by_cmd_above
NEXTAUTH_URL=http://localhost:3000
```

- Only allows one callback URL per Client ID / Client Secret !
- Refreshing token : token is refresh every 8 hours on GitHub.

You can use token in /api/[...nextauth]/route.ts

```
    async jwt({ token, account }) {
        if (account) {
            token.accessToken = account.access_token
        }
        return token
    },
```
