"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const apiGamesUrl = `https://${process.env.MOCKAPI_PROJECT_TOKEN}.mockapi.io/games`;

export async function deleteGame(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    id: z.string().min(1),
    game: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
    game: formData.get("name"),
  });

  const deleteEndpoint = `${apiGamesUrl}/${data.id}`;

  try {
    const response = await fetch(deleteEndpoint, {
      method: "DELETE",
    });
    revalidatePath("/");

    return response.json();
  } catch (error) {
    return { message: `Failed to delete ${data.game}` };
  }
}

export async function addGame(
  prevState: { message: string[] | undefined },
  formData: FormData,
) {
  const schema = z.object({
    name: z.string().min(1, "Name is a required field"),
    category: z.string().min(1, "Category is a required field"),
  });
  const validation = schema.safeParse({
    category: formData.get("category"),
    name: formData.get("name"),
  });

  try {
    if (validation.success) {
      await fetch(apiGamesUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      revalidatePath("/");
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    if (validation.success) {
      redirect("/");
    } else {
      return {
        message: validation.error?.errors.map(
          (errorOccurred) => errorOccurred.message,
        ),
      };
    }
  }
}
