import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  const [jobList, setJobList] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  useEffect(
    function () {
      async function jobData() {
        try {
          const res = await fetch(
            `https://jsearch.p.rapidapi.com/search?query=${query}&num_pages=1&date_posted=all`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-key":
                  "1b4c93a71emsh8d8b002c4f20395p1512c8jsnf016ad606133",
                "x-rapidapi-host": "jsearch.p.rapidapi.com",
              },
            }
          );
          const data = await res.json();
          setJobList(data.data);
          console.log(data.data);
        } catch (err) {
          console.err(err);
        }
      }
      jobData();
    },
    [search]
  );
  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery}
      />
      <Main jobs={jobList} />
    </>
  );
};

export default App;
