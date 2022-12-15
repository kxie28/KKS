import React from 'react'
import { Feature } from '../../components'
import './features.css';

const featuresData = [
  {
    title: 'Improving end to end applications',
    text: 'We go through your applications from start to finish to help optimize your processes and improve SLAs while giving you the information needed to cut costs.'
  },
  {
    title: 'Build websites',
    text: 'We build websites to your design from scratch. Whether you want a fully responsive and modern UI/UX website or a basic functioning website, we do it all.'
  },
  {
    title: 'Providing support',
    text: 'We will support your wants and needs. We continue monitoring traffic to your websites to provide you metrics on improving customer experience.'
  },
  {
    title: 'Blogs',
    text: 'Look through related blogs and documentation on how we provide the solutions that you need.'
  }
]

const Features = () => {
  return (
    <div className="KKS__features section__padding" id="features">
      <div className="KKS__features-heading">
        <h1 className="gradient__text">The Future is now. Let us bring you to the next level.</h1>
        <p>Sign up now to get started.</p>
      </div>
      <div className="KKS__features-container">
        {featuresData.map((item, index) => (
          <Feature />
        ))}
      </div>
    </div>
  )
}

export default Features