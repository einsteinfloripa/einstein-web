export const handlePipefyForm = (pathname) => {
  const splitPath = pathname.split("/");

  const pipefyUrls = {
    organizadores: "https://app.pipefy.com/public/form/HB9emSf3",
    alunos: "",
    docentes: "https://app.pipefy.com/public/form/MW3SFtgE",
  };

  return pipefyUrls[splitPath[2]];
};
