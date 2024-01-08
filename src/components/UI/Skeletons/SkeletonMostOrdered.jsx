import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMostOrdered = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={55}
    viewBox="0 0 300 55"
    backgroundColor="#201d2b"
    foregroundColor="#2e303e"
    {...props}
  >
    <rect x="71" y="13" rx="5" ry="5" width="97" height="10" /> 
    <rect x="71" y="32" rx="4" ry="4" width="80" height="8" /> 
    <circle cx="27" cy="27" r="27" />
  </ContentLoader>
)

export default SkeletonMostOrdered