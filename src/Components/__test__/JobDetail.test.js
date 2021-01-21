import React from "react";
import { shallow } from "enzyme";
import JobDetail from "../JobDetail";
import { JOB_OBJECT } from "../../Constants/variables";

describe("Test for JobDetail component", () => {
  let JobWrapper;

  beforeEach(() => {
    JobWrapper = shallow(<JobDetail job={JOB_OBJECT} />);
  });

  it("should render component", () => {
    expect(JobWrapper.find("h2")).toBeTruthy();
    expect(JobWrapper.exists("#job-detail")).toBeTruthy();
  });

  it("should contain title in a h2-tag", () => {
    expect(
      JobWrapper.find("h2").text().includes(JOB_OBJECT.title)
    ).toBeTruthy();
  });

  it("should contain text 'Origin Link' with correct url for this job", () => {
    // find correct node by expected content;
    // then check if it is an a-element;
    // then check if it has the correct href;
    // the result has two children, we need the first one - a-tag
    expect(
      JobWrapper.findWhere((n) => n.text() === "Original Link")
        .at(0)
        .prop("href")
    ).toEqual(JOB_OBJECT.url);
  });

  it(`'company_url' should be wrapped in an a-tag`, () => {
    expect(JobWrapper.find(".company-url").closest("a")).toHaveLength(1);
  });

  it(`'company_url' should be able to link to correct url`, () => {
    expect(JobWrapper.find(".company-url").props().href).toBe(
      JOB_OBJECT.company_url
    );
  });

  it("should render description correctly", () => {
    // const html = JobWrapper.find(".description").html();
    // html is a string
    expect(
      JobWrapper.find(".description").html().includes(JOB_OBJECT.description)
    ).toBeTruthy();
  });

  it("description should be wrapped in its own div", () => {
    expect(JobWrapper.find(".description").closest("div")).toHaveLength(1);
  });

  it("company logo should be wrapped in an img-tag", () => {
    expect(JobWrapper.find("img").prop("src")).toEqual(JOB_OBJECT.company_logo);
  });

  it("should contain correct how-to-apply info", () => {
    expect(
      JobWrapper.find(".how-to-apply").html().includes(JOB_OBJECT.how_to_apply)
    ).toBeTruthy();
  });

  it("should contain correct location", () => {
    expect(
      JobWrapper.find(".location").text().includes(JOB_OBJECT.location)
    ).toBeTruthy();
  });
});
