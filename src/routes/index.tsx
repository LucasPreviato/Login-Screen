import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';
import { useDrawerContext } from '../shared/context';


export const AppRoutes = () => {
  const { setDrawerOptions} = useDrawerContext();
  useEffect(()=> {
    setDrawerOptions([
      {
        icon: "home",
        path: "/pagina-inicial",
        label:"Pagina-inicial",
      }
    ])
  }, [setDrawerOptions])
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />}/> 
    </Routes>
  );
};