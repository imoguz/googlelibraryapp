import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useSearchContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import library from "../../assets/library.webp";
import { flex } from "../../styles/Flex";
import { cardstyle } from "./Card.style";
import defimg from "../../assets/default.jpg";
const Card = () => {
  const { search } = useSearchContext();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const APP_KEY = "AIzaSyD9OLmjpBt0WiA2BlBrzXHp5vjnA2wk0C4";
  useEffect(() => {
    axios(
      `https://www.googleapis.com/books/v1/volumes?q=${search.query}&printType=${search.printType}&key=${APP_KEY}`
    )
      .then((response) => setBooks(response.data.items))
      .catch((error) => console.log("Error occured", error));
  }, [search]);
  return (
    <dir style={flex.flex}>
      {books === undefined || !books[0] ? (
        <img src={library} alt="library" width="800px" height="300px" />
      ) : (
        books?.map((item, index) => (
          <div key={index} style={cardstyle.cardBox}>
            <div>
              <h5>{item.volumeInfo?.title}</h5>
            </div>
            <div>
              <img
                src={item.volumeInfo.imageLinks?.thumbnail || defimg}
                alt="bookimage"
                width="220px"
                height="220px"
              />
            </div>
            <Button
              onClick={() => navigate(`/detail/${item.id}`, { state: item })}
              variant="success px-4"
            >
              View More
            </Button>
          </div>
        ))
      )}
    </dir>
  );
};

export default Card;
