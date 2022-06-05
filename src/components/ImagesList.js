import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import * as React from "react";
import Button from "@mui/material/Button";
import resizeImageUrl from "../helpers/resizeImageUrl";

const ImagesList = () => {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClick = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/v2/list", {
        params: {
          page: pageNumber,
          limit: 10,
        },
      })
      .then((data) => {
        setImagesList((newImageList) => [...imagesList, ...data]);
        setLoading(false);
      });
  }, [pageNumber]);

  return (
    <>
      <h1>Image Gallery</h1>
      <ul className="list">
        {imagesList.map(({ id, download_url }) => (
          <li key={id}>
            <img
              src={resizeImageUrl(download_url, 100)}
              alt={download_url}
              height="100"
            />
          </li>
        ))}
      </ul>
      {isLoading ? (
        <Button variant="contained">loading...</Button>
      ) : (
        <Button variant="contained" onClick={handleClick}>
          show more
        </Button>
      )}
    </>
  );
};

export default ImagesList;
