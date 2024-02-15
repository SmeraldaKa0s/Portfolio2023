import { useRouter } from "next/router";
import projectsList from "../../utils/projectsList";
import Layout from "../../components/Layout";

const project = () => {
  /**
   * Ejemplo de como se puede hacer la ruta dinamica de los proyectos
   * el contenido de los proyectos vive en un array projectsList
   * el usuario entra a un index especifico del array al entrar en la url
   * url de ejemplo =  '/projects/0'
   *Poner toda la info en el array de projectsList. Después vos te fijas qué props usas 
   *cuando lo mapeas en el archivo Projects. 
   */
/* const router = useRouter();
   const { projectId } = router.query;
  if (!projectId) return "Cargando....";

  const { title, year } = projectsList.find((project) => project.id === projectId); */

  return (
    <Layout>
      <div>
        <h2>Project</h2>
      </div>
    </Layout>
  );
};

export default project;
