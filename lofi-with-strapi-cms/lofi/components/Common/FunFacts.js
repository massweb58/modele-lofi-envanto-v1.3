import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const FunFacts = () => {
  const [funFacts, setFunFacts] = React.useState()
  React.useEffect(() => {
    const getFunFacts = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/fun-fact?populate=deep`,
      )
      setFunFacts(response.data)
      // console.log(response.data);
    }
    getFunFacts()
  }, [])
  return (
    <>
      {funFacts && (
        <div className="funfacts-area pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              {funFacts.data.attributes.funfactsList.map((funfact) => (
                <div 
                  className="col-lg-3 col-md-6 col-sm-4 col-6" 
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true" 
                  key={funfact.id}
                >
                  <div className="single-funfacts-box">
                    <div className={funfact.iconClassName}>
                      <i className={funfact.iconName}></i>
                    </div>
                    <h3>{funfact.number}</h3>
                    <p>{funfact.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FunFacts
