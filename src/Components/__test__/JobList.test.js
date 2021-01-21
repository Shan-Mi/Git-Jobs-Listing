import React from "react";
import { mount } from "enzyme";
import { BrowserRouter, Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import { JOB_OBJECT, URL } from "../../Constants/variables";
import JobListItem from "../JobListItem";

describe("Test for JobListItem component", () => {
  let JobListItemWrapper;
  beforeEach(() => {
    JobListItemWrapper = mount(
      <BrowserRouter>
        <GlobalContext>
          <JobListItem job={JOB_OBJECT} url={URL} />
        </GlobalContext>
      </BrowserRouter>
    );
  });

  it("should render JobListItem component with Link", () => {
    expect(JobListItemWrapper.find(Link)).toBeTruthy();
  });

  it("should contain correct url for this job", () => {
    const testUrl = `${URL}/${JOB_OBJECT.id}`;
    expect(JobListItemWrapper.find(Link).props().to).toBe(testUrl);
  });

  it("should render correct job title", () => {
    expect(JobListItemWrapper.find(Link).text()).toBe(JOB_OBJECT.title);
  });
});
