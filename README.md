# Mois Analytics Website

A professional website for Mois Analytics, a data analytics consultancy based in The Netherlands.

## Context Priming for Claude Code

When working with this codebase, Claude should:

1. First, read this README.md file for an overview of the project
2. Review the `project-context.md` file (created by running `npm run generate-context`) for a complete view of all source files
3. Pay special attention to these files in the following order:
   - `prisma/schema.prisma` - Database schema
   - `tailwind.config.js` - Styling configuration
   - `src/app/layout.tsx` - Root layout (when implemented)
   - `src/lib/db.ts` - Database connection utility (when implemented)
   - `src/lib/utils.ts` - Common utility functions (when implemented)
4. Utilize the MCP servers located in `mcp/` directory for:
   - Database operations: `npm run mcp:db <handler> <params>`
   - UI component operations: `npm run mcp:ui <handler> <params>`
   - See the MCP client config in `mcp/client-config.json` for details
5. Follow the project structure and guidelines outlined in the project specifications

## Project Overview

This project is a Next.js-based website with Tailwind CSS for styling, PostgreSQL for database storage, and integration of UI component libraries including shadcn/ui and Aceternity UI.

The website serves as the online presence for Mois Analytics, a data analytics consultancy in The Netherlands. It includes:
- Marketing pages (home, about, services, case studies, contact)
- Client portal with authentication
- Dashboard for clients to access their reports and analytics

## Technology Stack

- **Frontend**: Next.js 14+, Tailwind CSS, shadcn/ui, Aceternity UI
- **Backend**: Next.js API Routes, PostgreSQL, Prisma ORM, NextAuth.js
- **Deployment**: Vercel with PostgreSQL database (Supabase or AWS RDS)

## Project Structure

```
mois-analytics/
├── src/
│   ├── app/                          # App router for routing
│   │   ├── (marketing)/              # Route group for marketing pages
│   │   ├── (dashboard)/              # Route group for dashboard pages
│   │   ├── api/                      # API routes
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css               # Global CSS
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                       # UI components (shadcn/ui)
│   │   ├── aceternity/               # Aceternity UI components
│   │   └── sections/                 # Page sections
│   ├── lib/                          # Shared utility functions and libraries
│   ├── hooks/                        # Custom React hooks
│   └── types/                        # TypeScript type definitions
├── prisma/                           # Prisma ORM
│   └── schema.prisma                 # Database schema
├── public/                           # Static assets
└── ... (config files)
```

## Development Guidelines

This project follows a modular architecture with:
- App Router-based routing structure
- Route groups for organization
- Component-based UI development
- Prisma ORM for database interactions
- Server Components where appropriate
- Client Components when interactivity is needed

## MCP Tooling Integration

This project uses Model Context Protocol (MCP) for enhanced development with Claude Code:

### Database MCP Server
Access database operations with:
```bash
npm run mcp:db <handler> <params>
```

Available handlers:
- `runMigrations` - Run Prisma migrations
- `generateClient` - Generate Prisma client
- `createMigration` - Create a new migration
- `seedDatabase` - Seed the database
- `getSchema` - Get the database schema
- `listServices` - List all services
- `listProjects` - List all projects
- `listTestimonials` - List all testimonials
- `listContactSubmissions` - List all contact submissions

### UI MCP Server
Access UI component operations with:
```bash
npm run mcp:ui <handler> <params>
```

Available handlers:
- `generateShadcnComponent` - Generate a shadcn/ui component
- `listShadcnComponents` - List available shadcn/ui components
- `createCustomComponent` - Create a custom component
- `createAceternityComponent` - Create an Aceternity UI component
- `listExistingComponents` - List existing components

## Context Generation

To update the project context file for AI tools:
```bash
npm run generate-context
```

This will create `project-context.md` with a comprehensive view of the codebase.

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/mois-analytics.git
cd mois-analytics
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` to add your database connection string and other environment variables.

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Seed the database:
```bash
npx prisma db seed
```

6. Start the development server:
```bash
npm run dev
```

## License

[MIT](LICENSE)