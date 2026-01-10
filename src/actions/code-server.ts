"use server";

import { freestyle } from "@/lib/freestyle";

export async function getCodeServerUrl({
    repoId,
  }: {
    repoId: string;
    baseId: string;
  }): 