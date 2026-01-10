"use server";

import { getUser } from "@/auth/stack-auth";
import { appsTable, appUsers } from "@/db/schema";
import { db } from "@/db/schema";
import { freestyle } from "@/lib/freestyle";
import { templates } from "@/lib/templates";
import { memory, builderAgent } from "@/mastra/agents/builder";
import { sendMessageWithStreaming } from "@/lib/internal/stream-manager";