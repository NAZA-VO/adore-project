"use server";

import { getUser } from "@/auth/stack-auth";
import { appsTable, appUsers } from "@/db/schema";
import { db } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { freestyle } from "@/lib/freestyle";