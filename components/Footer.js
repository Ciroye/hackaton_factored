import React from 'react'

const Footer = () => {
  return (
    <footer className="py-4 bg-second">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <p className="flex items-center text-base text-white">
          © Copyright 2023. All Rights Reserved.
        </p>
        <a
          className="flex items-center text-base text-white"
          href="https://datathon-2023-terms-and-conditions.s3.us-east-2.amazonaws.com/220623+Factored+Datathon+Terms+and+Conditions-1.pdf"
          target="_blank"
        >
          Terms and Conditions
        </a>
        <a
          className="flex items-center text-base text-white"
          href="https://datathon-2023-terms-and-conditions.s3.us-east-2.amazonaws.com/220623+Factored+Events+Code+of+Conduct.pdf"
          target="_blank"
        >
          Code of Conduct
        </a>
      </div>
    </footer>
  )
}

export default Footer
