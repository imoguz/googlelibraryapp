import { useLocation, useNavigate } from "react-router-dom";
import { styles } from "./Detail.style";
import defimg from "../../assets/default.jpg";
import { Button } from "./Detail.styled";
const Detail = () => {
  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.detailbox}>
        <h3 className="text-center ps-5">{item.volumeInfo?.title || ``}</h3>

        <div style={styles.detailflex}>
          <img
            src={item.volumeInfo.imageLinks?.thumbnail || defimg}
            alt="image"
            width="300px"
            height="400px"
          />
          <div style={styles.detailtext}>
            <p>{item.volumeInfo?.description || ``}</p>
            <h3>{item.volumeInfo?.authors[0] || ``}</h3>
            <h3>
              {item.volumeInfo?.publishedDate || ``} /
              {item.volumeInfo?.publisher || ``}
            </h3>
            <Button onClick={() => navigate(-1)}>🔙</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
