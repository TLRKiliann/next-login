# next-login

## NextJS14 with NextAuth 

- login (github & google providers)

---

## Motivation

I just would play with NextAuth to login for one route (products).

---

Generate a NEXTAUTH_SECRET key :
`$ openssl rand -base64 32`

Go to the settings of github > dev settings > OAuth > enter url twice : http://localhost:3000 
And copy your key into the .env file.

Your .env file should look like this:

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
