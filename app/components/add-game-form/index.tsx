"use client";
import { useFormState } from 'react-dom';
import { addGame } from "@/app/actions";

import {Submit} from '@/app/components/buttons/submit'

const initialState = {
  message: "",
};

export function AddGameForm() {
  
  const [state, formAction] = useFormState(addGame, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      <input type="text" id="nameGame" name="name" required />
      <label htmlFor="category">Category</label>
      <input type="text" id="categoryName" name="category" required />
      <Submit />      
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
