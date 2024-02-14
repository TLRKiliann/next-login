# next-login

## NextJS14 with NextAuth 

- login (github & google providers)

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

