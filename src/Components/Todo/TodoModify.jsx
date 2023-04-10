export const TodoModifyButton = ({ modifyModeHandler }) => {
  return (
    <button
      className="border-2 ml-1 px-1 border-sky-400 text-sky-600"
      type="button"
      data-testid="modify-button"
      onClick={modifyModeHandler}
    >
      수정
    </button>
  );
};
