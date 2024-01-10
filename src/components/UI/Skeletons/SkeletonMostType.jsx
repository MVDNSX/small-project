import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMostType = (props) => (
  <ContentLoader 
    speed={2}
    width={102}
    height={37}
    viewBox="0 0 102 37"
    backgroundColor="#201d2b"
    foregroundColor="#2e303e"
    {...props}
  >
    <rect x="27" y="5" rx="5" ry="5" width="55" height="10" /> 
    <rect x="27" y="24" rx="4" ry="4" width="70" height="8" /> 
    <circle cx="9" cy="9" r="9" />
  </ContentLoader>
)

export default SkeletonMostType