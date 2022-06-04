import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import * as React from "react";
import Button from "@mui/material/Button";
import resizeImageUrl from "../helpers/resizeImageUrl";
let htmlList = [];

const ImagesList = () => {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClick = () => {
    setImagesList([]);
    setPageNumber(pageNumber + 1);
    setLoading(true);
  };

  useEffect(() => {
    console.log("page:", pageNumber, "limit: 10");
    axios
      .get("/v2/list", {
        params: {
          page: pageNumber,
          limit: 10,
        },
      })
      .then((data) => {
        setImagesList(data);
        setLoading(false);
      });
  }, [pageNumber]);

  htmlList = [
    ...htmlList,
    ...imagesList.map(({ id, download_url }) => (
      <li key={id}>
        <img
          src={resizeImageUrl(download_url, 100)}
          alt={download_url}
          height="100"
        />
      </li>
    )),
  ];

  return (
    <>
      <ul className="list">{htmlList}</ul>
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
