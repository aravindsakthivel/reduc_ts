import { FC } from "react";
import { RepositoriesList } from "./Components/RepositoriesList";

const App: FC = () => {
  return (
    <div>
      <h1>Search Repo in NPM</h1>
      <RepositoriesList />
    </div>
  );
};

export { App };
