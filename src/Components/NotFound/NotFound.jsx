import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <h1>Looks like you are lost</h1>
      </div>      
      <button className="btn btn-danger mt-5" onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};