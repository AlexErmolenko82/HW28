import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import resizeImageUrl from "../helpers/resizeImageUrl";

const ImagesList = () => {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [staticList, setStaticList] = useState([]);

  const handleClick = () => {
    setStaticList(staticList.concat(dynamicList));
    setPageCount(pageCount + 1);
    // console.log("staticList", staticList);
    setLoading(true);
  };

  useEffect(() => {
    // console.log("page:", pageCount, "limit: 10");
    axios
      .get("/v2/list", {
        params: {
          page: pageCount,
          limit: 10,
        },
      })
      .then((data) => {
        setImagesList(data);
        setLoading(false);
      });
  }, [pageCount]);

  let dynamicList = imagesList.map(({ id, download_url }) => (
    <li key={id}>
      <img
        src={resizeImageUrl(download_url, 100)}
        alt={download_url}
        height="100"
      />
    </li>
  ));

  return (
    <>
      <ol className="list">
        {staticList}
        {dynamicList}
      </ol>
      {isLoading ? <p>Loading...</p> : ""}
      <button type="button" onClick={handleClick}>
        Show more...
      </button>
    </>
  );
};

export default ImagesList;
