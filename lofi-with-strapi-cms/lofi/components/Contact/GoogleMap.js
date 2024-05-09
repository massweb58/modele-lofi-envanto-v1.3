import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const GoogleMap = () => {
  const [googleMap, setGoogleMap] = React.useState();
  React.useEffect(() => {
    const getGoogleMap = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/google-map?populate=*`
      );
      setGoogleMap(response.data);
      // console.log(response.data);
    };
    getGoogleMap();
  }, []);
  return (
    <>
      {googleMap && (
        <div className="maps">
          <iframe
            src={googleMap.data.attributes.googleMapLink}
            width="100%"
            height="500"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default GoogleMap;
