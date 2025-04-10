This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Setup

This project uses environment variables for configuration. To set up your local environment:

1. Copy the template file to create your local environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your API keys and configuration values.

3. **Important**: Never commit `.env.local` or any files containing actual credentials to the repository. The `.env.local` file is already in `.gitignore` to prevent accidental commits.

4. For more details on environment variables and security practices, see `docs/documentation.md`.

## Required Environment Variables

For core functionality:
- `NEXT_PUBLIC_USE_AI_API`: Set to "true" to enable AI chat functionality

For AI chat functionality (if enabled):
- `OPENAI_API_KEY`: Your OpenAI API key

For database functionality (if using):
- `DATABASE_URL`: Your database connection string

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
