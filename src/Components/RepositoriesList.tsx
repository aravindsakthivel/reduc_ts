import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useActions } from "../Hooks/useAction";
import { useTypedSelector } from "../Hooks/useTypedSelector";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepoProcess } = useActions();
  const {
    data: names,
    error,
    loading,
  } = useTypedSelector((state) => state.repositories);

  const onValueCh = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const searchRepo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepoProcess(term);
  };
  return (
    <div>
      <form onSubmit={searchRepo}>
        <input type="text" value={term} onChange={onValueCh} />
        <button type="submit">Submit</button>
      </form>
      {loading ? (
        <div>...isLoading</div>
      ) : !error ? (
        names.length > 0 &&
        names.map((val: string, ind: number) => <div key={ind}>{val}</div>)
      ) : (
        <div>Something went wrong</div>
      )}
    </div>
  );
};

export { RepositoriesList };
