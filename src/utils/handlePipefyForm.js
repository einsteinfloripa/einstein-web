export const handlePipefyForm = (pathname) => {
  const splitPath = pathname.split("/");

  const pipefyUrls = {
    organizadores: "https://app.pipefy.com/public/form/Z0uR01KW",
    alunos: "",
    docentes: "https://app.pipefy.com/public/form/iJrwz0tw",
  };

  return pipefyUrls[splitPath[2]];
};

export const handleDonationForm = (search, by) => {
  const donationInfosByValue = {
    5: {
      link: "https://pag.ae/7VZFt-ama",
      value: 5,
      id: "7VZFt-ama",
    },
    15: {
      link: "https://pag.ae/7VZFuGRNM",
      value: 15,
      id: "7VZFuGRNM",
    },
    25: {
      link: "https://pag.ae/7VZFwJYQp",
      value: 25,
      id: "7VZFwJYQp",
    },
    60: {
      link: "https://pag.ae/7W7aAqCHJ",
      value: 60,
      id: "7W7aAqCHJ",
    },
    100: {
      link: "https://pag.ae/7W6vM9J4m",
      value: 100,
      id: "7W6vM9J4m",
    },
  };

  const donationInfosById = {
    "7VZFt-ama": {
      link: "https://pag.ae/7VZFt-ama",
      value: 5,
      id: "7VZFt-ama",
    },
    "7VZFuGRNM": {
      link: "https://pag.ae/7VZFuGRNM",
      value: 15,
      id: "7VZFuGRNM",
    },
    "7VZFwJYQp": {
      link: "https://pag.ae/7VZFwJYQp",
      value: 25,
      id: "7VZFwJYQp",
    },
    "7W7aAqCHJ": {
      link: "https://pag.ae/7W7aAqCHJ",
      value: 60,
      id: "7W7aAqCHJ",
    },
    "7W6vM9J4m": {
      link: "https://pag.ae/7W6vM9J4m",
      value: 100,
      id: "7W6vM9J4m",
    },
  };

  switch (by) {
    case "value":
      return donationInfosByValue[search];
    case "id":
      return donationInfosById[search];
    default:
      return donationInfosByValue[search];
  }
};
