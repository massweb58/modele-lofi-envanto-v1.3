import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const ContactInfo = () => {
  const [contactInfo, setContactInfo] = React.useState();
  React.useEffect(() => {
    const getContactInfo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/contact-info?populate=deep`
      );
      setContactInfo(response.data);
      // console.log(response.data);
    };
    getContactInfo();
  }, []);
  return (
    <>
      {contactInfo && (
        <div className="pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              {contactInfo.data.attributes.contactInfoList.map((info) => (
                <div className="col-lg-3 col-sm-6 col-md-6" key={info.id}>
                  <div className="single-contact-info-box text-center">
                    <div className="icon">
                      <i className={info.iconName}></i>
                    </div>
                    <h3>{info.title}</h3>

                    <ReactMarkdown>{info.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
