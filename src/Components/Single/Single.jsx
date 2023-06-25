import { useLocation, useNavigate } from "react-router-dom";
import { useFirestoreContext } from "../../context/FirestoreContext";
import { ImgCard } from "../ImgCard/ImgCard";

export const Single = () => {
    const navigate = useNavigate();
    const { state } = useFirestoreContext();
    const { state: routerState} = useLocation();
    const item = state.items.find(item => item.id === routerState.id)

    return(
       <>
        <div className="d-flex justify-content-center mb-2">
            <ImgCard {...item}/>
        </div>
        <button className="btn btn-danger d-flex justify-content-start mb-5 ms-5" onClick={() => navigate(-1)}>Go back</button>
       </>
    )
}
