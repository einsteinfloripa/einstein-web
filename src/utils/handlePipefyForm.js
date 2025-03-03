export const handlePipefyForm = (pathname) => {
  const splitPath = pathname.split("/");

  const pipefyUrls = {
    organizadores: "https://app.pipefy.com/public/form/HQLmG0Dg",
    // alunos: "https://app.pipefy.com/public/form/lw1cOPCK",
    docentes: "https://app.pipefy.com/public/form/T1eV-fH6",
  };

  return pipefyUrls[splitPath[2]];
};
