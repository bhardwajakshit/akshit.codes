"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface MobileContextProps {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextProps>({
  isMobile: false,
});

export const useMobile = () => {
  return useContext(MobileContext);
};

const MobileProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 640;
    setIsMobile(isMobile);
  }, []);

  const value: MobileContextProps = {
    isMobile,
  };

  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
};

export default MobileProvider;
