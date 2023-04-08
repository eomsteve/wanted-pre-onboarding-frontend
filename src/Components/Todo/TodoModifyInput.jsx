import { useState } from "react";

export const TodoModifyInput = ({prevValue}) => {
  return (
    <input
      className="border-2  px-1 grow"
      type="text"
      name="modifyInput"
      data-testid="modify-input"
      defaultValue={prevValue}
    />
  );
};
