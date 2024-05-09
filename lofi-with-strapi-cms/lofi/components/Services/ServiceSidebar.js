import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const ServiceSidebar = () => {
  const [services, setServices] = React.useState();
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/services?populate=deep&sort[0]=createdAt%3Adesc`
      );
      setServices(response.data);
      // console.log(response.data)
    };
    getServices();
  }, []);
  return (
    <>
      {services && (
        <div className="service-sidebar">
          <div className="sidebar-box">
            <h3>Services List</h3>
            <ul>
              {services.data.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.attributes.slug}`}>
                    {service.attributes.title}{" "}
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceSidebar;
