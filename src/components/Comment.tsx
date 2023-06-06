"use client";

import { useEffect, useRef } from "react";

export default function Comment() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.src = "https://giscus.app/client.js";
    scriptEl.async = true;
    scriptEl.crossOrigin = "anonymous";
    scriptEl.setAttribute("data-repo", "pyeong777/Devlog-Next.js");
    scriptEl.setAttribute("data-repo-id", "R_kgDOJiKbTw");
    scriptEl.setAttribute("data-category", "Comments");
    scriptEl.setAttribute("data-category-id", "DIC_kwDOJiKbT84CXAx2");
    scriptEl.setAttribute("data-mapping", "pathname");
    scriptEl.setAttribute("data-strict", "0");
    scriptEl.setAttribute("data-reactions-enabled", "1");
    scriptEl.setAttribute("data-emit-metadata", "0");
    scriptEl.setAttribute("data-input-position", "bottom");
    scriptEl.setAttribute("data-theme", "light_high_contrast");
    scriptEl.setAttribute("data-lang", "ko");

    commentsRef.current?.appendChild(scriptEl);
  }, []);

  return <div className="mt-16 mb-8 giscus" ref={commentsRef} />;
}
