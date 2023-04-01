import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCard = (props) => (
  <ContentLoader 
    speed={2}
    width={192}
    height={307}
    viewBox="0 0 192 307"
    backgroundColor="#201d2b"
    foregroundColor="#2e303e"
    {...props}
  >
    <rect x="92" y="89" rx="0" ry="0" width="1" height="0" /> 
    <rect x="30" y="0" rx="100" ry="100" width="132" height="132" /> 
    <rect x="0" y="34" rx="10" ry="10" width="192" height="273" />
  </ContentLoader>
)


export default SkeletonCard