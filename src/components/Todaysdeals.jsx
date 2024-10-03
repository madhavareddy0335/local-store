import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import flash from "../assets/flash.svg";
// import React, { useState, useEffect } from "react";

const Todaysdeals = () => {
  const initialTime = 20 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="container  pt-4">
      <div className="d-flex ps-5 align-items-center">
        <h2 className=" ">Fla </h2>
        <span>
          <img style={{ width: "35px" }} className="pt-2" src={flash} alt="" />
        </span>
        <h2>h deals</h2>

        <div className="ps-3 pt-1">
          <h4 className="text-danger fs-5">Time Left: {formatTime(timeLeft)}</h4>
        </div>
      </div>

      <div className="d-flex gap-4 justify-content-center flex-wrap">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/800x600/000000/FFF"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold">
                Price: <a href="#" className="fw-lighter text-decoration-none text-dark fw-bold">12000/-</a>
              </p>
              <FavoriteIcon />
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/800x600/000000/FFF"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold">
                 Price: <a href="#" className="fw-lighter text-decoration-none text-dark fw-bold">12000/-</a>
              </p>
              <FavoriteIcon />
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/800x600/000000/FFF"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold">
                 Price: <a href="#" className="fw-lighter text-decoration-none text-dark fw-bold">12000/-</a>
              </p>
              <FavoriteIcon />
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/800x600/000000/FFF"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold">
                 Price: <a href="#" className="fw-lighter text-decoration-none text-dark fw-bold">12000/-</a>
              </p>
              <FavoriteIcon />
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/800x600/000000/FFF"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold">
                 Price: <a href="#" className="fw-lighter text-decoration-none text-dark fw-bold">12000/-</a>
              </p>
              <FavoriteIcon />
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/800x600/000000/FFF"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold">
                 Price: <a href="#" className="fw-lighter text-decoration-none text-dark fw-bold">12000/-</a>
              </p>
              <FavoriteIcon />
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/800x600/000000/FFF"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold">
                 Price: <a href="#" className="fw-lighter text-decoration-none text-dark fw-bold">12000/-</a>
              </p>
              <FavoriteIcon />
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/800x600/000000/FFF"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold">
                 Price: <a href="#" className="fw-lighter text-decoration-none text-dark fw-bold">12000/-</a>
              </p>
              <FavoriteIcon />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Todaysdeals;
