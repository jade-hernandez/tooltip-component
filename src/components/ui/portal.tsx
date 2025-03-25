import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface IPortalProps {
  children: ReactNode;
  containerId?: string;
  createElement?: boolean;
}

export function Portal({
  children,
  containerId = "portal-root",
  createElement = true
}: IPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (createElement) {
      const existingContainer = document.getElementById(containerId);

      if (!existingContainer) {
        const portalContainer = document.createElement("div");
        portalContainer.id = containerId;
        document.body.appendChild(portalContainer);
      }
    }

    return () => {
      if (createElement) {
        const existingContainer = document.getElementById(containerId);
        if (existingContainer && existingContainer.childNodes.length === 0) {
          document.body.removeChild(existingContainer);
        }
      }
    };
  }, [containerId, createElement]);

  if (!mounted) return null;

  const portalRoot = document.getElementById(containerId);
  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
}
