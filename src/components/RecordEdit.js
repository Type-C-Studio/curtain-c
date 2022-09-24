import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecordEdit = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://rhome19.thddns.net:5524/api/job/${id}`).then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div>record Ei Ei</div>;
};
export default RecordEdit;
