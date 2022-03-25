import { useEffect } from "react";
import api_client from "../../config/api_client";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DeleteCategories() {
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    api_client.delete(`/categories/${id}`).then(response => {
        
      navigate('/categories')
    });
  }, [id]);

  return (
    <></>
  )
}
