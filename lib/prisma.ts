import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

function resolveDatabaseUrl(): string {
    const raw = process.env.DATABASE_URL ?? "";
    if (raw.startsWith("prisma+postgres://")) {
        const apiKey = raw.split("api_key=")[1];
        const decoded = JSON.parse(Buffer.from(apiKey, "base64").toString());
        return decoded.databaseUrl as string;
    }
    return raw;
}

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter: new PrismaPg({ connectionString: resolveDatabaseUrl() }),
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

