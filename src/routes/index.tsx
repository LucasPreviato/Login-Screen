import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ListingColaborator } from '../pages';
import { useDrawerContext } from '../shared/context';


export const AppRoutes = () => {
  const { setDrawerOptions} = useDrawerContext();
  useEffect(()=> {
    setDrawerOptions([
      {
        icon: "home",
        path: "/pagina-inicial",
        label:"Página inicial",
      },
      {
        icon: "people",
        path: "/colaboradores",
        label:"Colaboradores",
      }
    ])
  }, [setDrawerOptions])
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/colaboradores" element={<ListingColaborator />} />
      {/* <Route path="/cidades/detalhe/:id" element={<Dashboard />} /> */}
     
      <Route path="*" element={<Navigate to="/pagina-inicial" />}/> 
    </Routes>
  );
};