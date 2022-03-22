import { useEffect } from "react";
import api_client from "../../config/api_client";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DeleteCategories() {
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    api_client.delete(`http://localhost:3000/categories/${id}`).then(response => {
      navigate('/')
    });
  }, [id]);

  return (
    <></>
  )
}
