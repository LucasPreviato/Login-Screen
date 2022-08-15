import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/context';


export const AppRoutes = () => {
  const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext();
  useEffect(()=> {
    setDrawerOptions([
      {
        icon: "home",
        path: "/pagina-inicial",
        label:"Pagina-inicial",
      }
    ])
  }, [])
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Toggle Theme</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />}/> 
    </Routes>
  );
};