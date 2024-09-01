"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const apiGamesUrl = `https://${process.env.MOCKAPI_PROJECT_TOKEN}.mockapi.io/games`;

export async function deleteGame(
  prevState: {
    message: string;
  },
  formData: FormData
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
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    name: z.string().min(1),
    category: z.string().min(1),
  });
  const data = schema.parse({
    category: formData.get("category"),
    name: formData.get("name"),
  });

  const newGame = {
    name: data.name,
    category: data.category,
  };

  try {
    await fetch(apiGamesUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newGame),
    });
    revalidatePath("/");
  } catch (error) {
    return { message: `Failed to add ${data.name}` };
  } finally {
    redirect("/");
  }
}
