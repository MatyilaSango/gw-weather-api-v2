import axios from "axios";

export default async function getRootHTMLPage(search: string) {
  return await fetch(`https://www.accuweather.com/en/search-locations?query=${search}`)
    .then((prom) => prom.text());
}
