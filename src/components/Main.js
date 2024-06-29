import React from "react";

const Main = ({ jobs }) => {
  return (
    <div>
      {jobs?.map((job) => (
        <div className="job-container">
          <p>CompanyName: {job.employer_name}</p>
          <img
            className="company-logo"
            src={job.employer_logo}
            alt="employer_logo"
          />
          <p>CompanyType: {job.employer_company_type}</p>
          <a href={job.employer_website}>WebsiteLink</a>
          <p>Apply:{job.job_apply_is_direct}</p>
          <a href={job.job_apply_link}>JobLink</a>
          <p>JobBenefits:{job.job_benefits}</p>
          <p>City:{job.job_city}</p>
          <p>Country:{job.job_country}</p>
          <p>Description: {job.job_description}</p>
          <p>Employment Type:{job.job_employment_type}</p>
          <a href={job.job_google_link}>Job Link</a>
          <p>IsRemo te:{job.job_is_remote}</p>
          <p>Salary: {job.job_max_salary}</p>
          <p>Category: {job.job_occupational_categories}</p>
          <p>Date: {job.job_posted_at_datetime_utc}</p>
          <p>Language: {job.job_posting_language}</p>
          <div>
            {job.job_required_skills?.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
