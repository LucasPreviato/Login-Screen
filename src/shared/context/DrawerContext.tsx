import { createContext, useCallback, useContext, useState } from "react";

interface DrawerProviderProps {
  children: React.ReactNode;

}
interface IDrawerOptions {
  icon: string;
  label : string;
  path: string ;
}

interface IDrawerContextData{
  isDrawerOpen : boolean;
  toggleDrawerOpen: () => void ;
  drawerOptions : IDrawerOptions[];
  setDrawerOptions: (newDrawerOptions : IDrawerOptions[]) => void
}


const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}


export const DrawerProvider: React.FC <DrawerProviderProps> = ({children})=> {
  const [isDrawerOpen, setIsDrawerOpen] = useState (false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]> ([])

  const toggleDrawerOpen = useCallback(
    () => {
      setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen )
    },
    [],
  )
  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions)
    },
    [],
  )




 return (
  <DrawerContext.Provider value={{isDrawerOpen, drawerOptions ,toggleDrawerOpen, setDrawerOptions : handleSetDrawerOptions}}>
      {children}
  </DrawerContext.Provider>
 )
}