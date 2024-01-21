import { LocationList } from "../presentational/LocationList";
import { fetchLocations } from "../../api";
import { useEffect, useState } from "react";

export const LocationsContainer = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations().then((data) => {
      setLocations(data);
    });
  }, []);

  return <LocationList locations={locations} />;
};
