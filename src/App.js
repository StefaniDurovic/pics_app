import { useMemo, useContext, useEffect } from "react";
import { List } from "./Components/List/List";
import { Context } from "./context/FirestoreContext";
import { useAuthContext } from "./context/AuthContext";
import "./App.css";

function App() {
  const { state, read } = useContext(Context);
  const { authenticate } = useAuthContext();

  const count = useMemo(() => {
    return `There ${state.items.length > 1 ? "are" : "is"} ${state.items.length} image${state.items.length > 1 ? "s" : ""}`;
  }, [state.items]);

  useEffect(() => {
    read();
    authenticate();
  }, []);

  return (
    <>
      <h1>Gallery</h1>
      {count}
      <List items={state.items}/>
    </>
  );
}
export default App;
