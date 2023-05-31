import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const jobs = await res.json();

    setJobs(jobs);
    setIsLoading(false);
  };
  
  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(jobs);

  return <h2>Tabs Starter</h2>;
};
export default App;
