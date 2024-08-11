import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { Toaster } from "sonner"; //Importação do plugin Sonner

// Configuração das rotas
const router = createBrowserRouter([
  {
    // Mostra o pagina create room que é a home do projeto.
    path: "/",
    element: <CreateRoom />,
  },
  {
    // Mostra a pagina Room junto com o id da Room
    path: "/room/:roomId",
    element: <Room />,
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster invert richColors/>
    </>
  );
}
