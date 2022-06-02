import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import axios from "../helpers/axios";
import resizeImageUrl from "../helpers/resizeImageUrl";

const ImagesList = ({ listCount }) => {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/v2/list", {
        params: {
          page: 1,
          limit: listCount,
        },
      })
      .then((data) => {
        setImageList(data);
        setLoading(false);
      });
  }, [listCount]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className="list">
        {imageList.map(({ id, download_url }) => (
          <li key={id}>
            <a href={download_url} target="_blank">
              <img
                src={resizeImageUrl(download_url, 100)}
                alt={download_url}
                height="100"
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
ImagesList.propTypes = {
  listCount: PropTypes.number.isRequired,
};
export default ImagesList;