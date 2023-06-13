import { useContext } from "react";
import { Navigation } from "../Navigation/Navigation";
import { UploadForm } from "../UploadForm/UploadForm";
import { Context } from "../../context/FirestoreContext";

export function Layout({ children }) {
  const { state, dispatch } = useContext(Context);

  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });

  return (
    <>
      <Navigation />
      <div className="container text-center mt-5">
        <button
          className="btn btn-success float-end"
          onClick={() => toggle(!state.isCollapsed)}
        >
          {state.isCollapsed ? "Close" : "+ Add"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm inputs={state.inputs} isVisible={state.isCollapsed} />
        {children}
      </div>
    </>
  );
}
