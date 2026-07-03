"use server";

import { revalidatePath } from "next/cache";

// biome-ignore lint/complexity/noForEach: <explanation>
export const update = async (paths = []) =>
  paths.forEach((p) => revalidatePath(p));
