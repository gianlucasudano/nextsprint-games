"use client";
import { useFormState } from "react-dom";
import { addGame } from "@/app/actions";

import { StackedContainer } from "@/app/components/stacked-container";
import { Submit } from "@/app/components/buttons/submit";

import styles from "./styles.module.css";

const initialState = {
  message: [],
};

export function AddGameForm() {
  const [state, formAction] = useFormState(addGame, initialState);
  return (
    <StackedContainer>
      <form action={formAction}>
        <fieldset className={styles.fieldset}>
          <legend className={`${styles.legend} label-medium`}>
            Add a new game
          </legend>
          <div className={styles.groupedLabels}>
            <label className={`${styles.label} label-small`} htmlFor="name">
              Name *
              <input
                className={styles.textInput}
                type="text"
                id="nameGame"
                name="name"
              />
            </label>
            <label className={`${styles.label} label-small`} htmlFor="category">
              Category *
              <input
                className={styles.textInput}
                type="text"
                id="categoryName"
                name="category"
              />
            </label>
          </div>

          <Submit />
          <p
            aria-live="polite"
            className={`${styles.errorBox} ${state?.message.length > 0 ? "error-container" : ""} label-small`}
            role="status"
          >
            {state?.message?.map((message) => (
              <span className="on-error-container-text" key={message}>
                {message}
              </span>
            ))}
          </p>
        </fieldset>
      </form>
    </StackedContainer>
  );
}
