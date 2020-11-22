import React from "react";

export default function DeviceDetect() {
 
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean( userAgent.match( /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i ) );

  return mobile
}