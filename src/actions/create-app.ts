"use server";

import { getUser } from "@/auth/stack-auth";
import { appsTable, appUsers } from "@/db/schema";
import { db } from "@/db/schema";
import { freestyle } from "@/lib/freestyle";
import { templates } from "@/lib/templates";
import { memory, builderAgent } from "@/mastra/agents/builder";
import { sendMessageWithStreaming } from "@/lib/internal/stream-manager";


export async function createApp({
    initialMessage,
    templateId,
  }: {
    initialMessage?: string;
    templateId: string;
  }) {
    console.time("get user");
    const user = await getUser();
    console.timeEnd("get user");
  
    if (!templates[templateId]) {
      throw new Error(
        `Template ${templateId} not found. Available templates: ${Object.keys(templates).join(", ")}`
      );
    }

    console.time("git");
  const repo = await freestyle.createGitRepository({
    name: "Unnamed App",
    public: true,
    source: {
      type: "git",
      url: templates[templateId].repo,
    },
  });