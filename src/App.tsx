import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';
const App = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState<number>(0);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }
  const { title, dates, company, duties } = jobs[value];
  console.log(duties);

  return (
    <main>
      <div className='title'>
        <h1>exprience</h1>
        <div className='underline'></div>
      </div>
      <section className='section'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                className={`btn ${index == value && 'active-btn'}`}
                key={index}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className='details'>
          <h1>{title}</h1>
          <h2>{company}</h2>
          <p className='date'>{dates}</p>
          {duties.map((duty: any, index: any) => {
            return (
              <div key={index} className='job-desc'>
                <span>
                  <FaAngleDoubleRight />
                </span>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </section>
      <button className='more-btn'>more</button>
    </main>
  );
};

export default App;
