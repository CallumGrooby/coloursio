import axios from "axios";

export const CheckContrast = (textColor, colourToCheck) => {
  if (!textColor || !colourToCheck) return Promise.resolve(null);

  const normalizedTextColor = textColor.slice(1);
  const normalizedSecondaryColor = colourToCheck.slice(1);

  const url = `https://webaim.org/resources/contrastchecker/?fcolor=${normalizedTextColor}&bcolor=${normalizedSecondaryColor}&api`;

  // ✅ Return the promise so the calling function can handle it
  return axios
    .get(url)
    .then((response) => {
      const data = response.data;
      return {
        passLevel: getPassLevel(data),
        ratio: data.ratio,
      };
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });
};

function getPassLevel(data) {
  if (data.AAA === "pass") return "AAA";
  if (data.AA === "pass") return "AA";
  return "Failed";
}
