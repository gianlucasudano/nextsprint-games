"use client";
import { useFormState } from 'react-dom'
import { deleteGame } from "@/app/actions";

import { Game, type GameProps } from "@/app/components/cards/game";

const initialState = {
  message: "",
};

interface DeleteFormProps extends GameProps {
  id: string;
}

const defaultImgSrc = `https://${process.env.LOREMFLICKR_HOSTNAME}/640/480/sports`;

export function DeleteForm({ id, name, category, imageSrc }: DeleteFormProps) {
  const imgSrcUrl = `${imageSrc}?foo=${name}` || defaultImgSrc;
  const [state, formAction] = useFormState(deleteGame, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="name" value={name} />
      <Game category={category} name={name} imageSrc={imgSrcUrl} />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
