export const TodoCancelButton = ({modifyModeHandler}) => {
  return (
    <button
      className="border-2 ml-1 px-1 border-red-400 text-red-600"
      type="submit"
      data-testid="cancel-button"
    >
      취소
    </button>
  );
};