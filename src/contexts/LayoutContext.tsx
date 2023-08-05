import { ReactNode, createContext, useContext, useState } from 'react';

export interface LayoutContextData {
  isSidebarExpanded?: boolean;
  setIsSidebarExpanded: (value: boolean) => void;
}

interface LayoutContextProviderProps {
  children: ReactNode;
}

export const LayoutContext = createContext({} as LayoutContextData);

/**
 * layout context hook for getting access to expandable props via hook method
 * @returns an object with isSidebarExpanded boolean
 */
export const useLayout = () => useContext(LayoutContext);

/**
 * Layout context for handling expaded state
 * @param {LayoutContextProviderProps} props for the Layout Context Provider
 * @returns JSX Element
 */
export default function LayoutContextProvider({ children }: LayoutContextProviderProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <LayoutContext.Provider
      value={{
        isSidebarExpanded,
        setIsSidebarExpanded
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
