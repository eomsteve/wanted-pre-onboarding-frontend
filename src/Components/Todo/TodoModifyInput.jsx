import { useState } from "react";

export const TodoModifyInput = ({prevValue}) => {
  return (
    <input
      className="border-2 grow px-1 w-[13rem]"
      type="text"
      name="modifyInput"
      data-testid="modify-input"
      defaultValue={prevValue}
    />
  );
};
