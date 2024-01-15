export const handlePipefyForm = (pathname) => {
  const splitPath = pathname.split("/");

  const pipefyUrls = {
    organizadores: "",
    alunos: "https://app.pipefy.com/public/form/3hCGaAtq",
    docentes: "",
  };

  return pipefyUrls[splitPath[2]];
};
