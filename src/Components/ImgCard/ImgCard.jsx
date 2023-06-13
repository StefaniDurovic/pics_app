import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const ImgCard = ({path, title, createdAt, user, id}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/images/${id}`, {state: {id}}) // here we are sending the id info along when clicking the ImgCard, so id can be accessed (from the URL) through useLocation in the Single component
    }

    const timestamp = useMemo(() => {
        const date = `${new Date(createdAt?.seconds*1000)}`.split(" ")
        return `${date[1]} ${date[2]} ${date[3]}`
    }, [])

    return(
        <div className="mb-5" onClick={handleOnClick}>
            <div className="card" style={{width: "18rem"}}>
                <div style={{
                    height:"220px",
                    backgroundImage:`url(${path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                    }}>
                </div>
                <h5 className="text-center mt-1">{title}</h5>
                <div className="d-flex justify-content-between p-2">
                    <p>{timestamp}</p>
                    <i>{`@${user}`}</i>
                </div>
            </div>
        </div>
    )
}