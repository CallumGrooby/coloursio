import axios from "axios";

const isValidHex = (val) => /^#?[0-9A-Fa-f]{6}$/.test(val);
const normalizeHex = (val) => {
  const v = val.startsWith("#") ? val : `#${val}`;
  return v.toLowerCase();
};

export const CheckContrast = (textColor, colourToCheck) => {
  if (!textColor || !colourToCheck) return Promise.resolve(null);

  const normalizedTextColor = textColor.slice(1);
  const normalizedSecondaryColor = colourToCheck.slice(1);

  const url = `https://webaim.org/resources/contrastchecker/?fcolor=${normalizedTextColor}&bcolor=${normalizedSecondaryColor}&api`;

  // // ✅ Return the promise so the calling function can handle it
  return axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(data);
      return {
        passLevel: getPassLevel(data),
        // ratio: data.ratio,
        ...data,
      };
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });

  // fetch("https://www.aremycolorsaccessible.com/api/are-they", {
  //   mode: "cors",
  //   method: "POST",
  //   body: JSON.stringify({ colors: ["#5c0700", "#e4ef65"] }),
  // })
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json);
  //   });
};

function getPassLevel(data) {
  if (data.AAA === "pass") return "AAA";
  if (data.AA === "pass") return "AA";
  return "Failed";
}
