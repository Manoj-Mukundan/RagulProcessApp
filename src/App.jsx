import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Infrastructure from './Pages/Infrastructure';
import Clients from './Pages/Clients';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/Infrastructure" element={<Infrastructure />} />
      <Route path="/Clients" element={<Clients />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
