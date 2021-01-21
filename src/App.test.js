import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "./App";
import GlobalContext from "./context/GlobalContext";

// test if render out nojobsfound page here.
describe("it should be routed to nojobsfound page", () => {
  it("should render app", () => {
    const Wrapper = mount(
      <BrowserRouter>
        <GlobalContext>
          <App />
        </GlobalContext>
      </BrowserRouter>
    );
    expect(Wrapper.find("h1").text()).toBe("Welcome to GitHub Job Listing!");
  });
});
