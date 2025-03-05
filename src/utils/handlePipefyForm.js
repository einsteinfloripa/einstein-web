export const handlePipefyForm = (pathname) => {
  const splitPath = pathname.split("/");

  const pipefyUrls = {
    organizadores: "https://app.pipefy.com/public/form/aJqp7Qzk",
    // alunos: "https://app.pipefy.com/public/form/lw1cOPCK",
    docentes: "https://app.pipefy.com/public/form/6rjdRKfD",
  };

  return pipefyUrls[splitPath[2]];
};
