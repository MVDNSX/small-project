import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonManagement = (props) => (
  <ContentLoader 
    speed={2}
    width={215}
    height={299}
    viewBox="0 0 215 299"
    backgroundColor="#201d2b"
    foregroundColor="#2e303e"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="215" height="300" />
  </ContentLoader>
)

export default SkeletonManagement