import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonDishItem = (props) => (
  <ContentLoader 
    speed={2}
    width={192}
    height={293}
    viewBox="0 0 192 293"
    backgroundColor="#201d2b"
    foregroundColor="#2e303e"
    {...props}
  >
    <rect x="92" y="89" rx="0" ry="0" width="1" height="0" /> 
    <rect x="30" y="0" rx="100" ry="100" width="132" height="132" /> 
    <rect x="0" y="34" rx="10" ry="10" width="192" height="258" />
  </ContentLoader>
)


export default SkeletonDishItem