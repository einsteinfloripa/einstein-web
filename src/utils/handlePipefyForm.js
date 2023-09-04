export const handlePipefyForm = (pathname) => {
  const splitPath = pathname.split("/");

  const pipefyUrls = {
    organizadores: "https://app.pipefy.com/public/form/Z0uR01KW",
    alunos: "",
    docentes: "https://app.pipefy.com/public/form/iJrwz0tw",
  };

  return pipefyUrls[splitPath[2]];
};
