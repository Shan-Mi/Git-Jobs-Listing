# About this project - *Git Job List*

[Online DEMO - firebase](https://gitjoblist-shan.web.app/)

[Online DEMO - netlify](https://gitjoblist-shan.netlify.app/)

[Online DEMO - vercel](https://gitjoblist-shan.vercel.app/)
## RUN the test
- `yarn test ./src/Components/__test__/JobDetail.test.js` 
  > for **JobDetail component**

- `yarn test ./src/Components/__test__/JobListItem.test.js`
  > for **JobListItem component**

- **API url**: `https://jobs.github.com/positions.json?description=javascript`
- **new url**: `https://us-central1-wands-2017.cloudfunctions.net/githubjobs`
- **Data structure for one job**
```json
{
"id": "dcf7cacf-ac39-4e6e-a5df-83135f69cff0",
"type": "Full Time",
"url": "https://jobs.github.com/positions/dcf7cacf-ac39-4e6e-a5df-83135f69cff0",
"created_at": "Wed Jan 20 14:03:36 UTC 2021",
"company": "whynow",
"company_url": "https://whynow.co.uk/",
"location": "London",
"title": "Full Stack Developer / WooCommerce Wizard",
"description": "<p>whynow is a new arts and culture digital platform promoting personal, powerful and positive stories in the capital and beyond.</p>\n<p>As a subscription platform, members of whynow get access to a growing range of videos, articles, ...",
"how_to_apply": "<p>Please email your CV and a cover letter to me at <a href=\"mailto:connor@whynow.co.uk\">connor@whynow.co.uk</a></p>\n",
"company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1NXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65a93ab1c962ad69d2724d5791201cb0f2377646/whynow-login-logo.png"
},
```
# Requirement

1. First Page
    - 1 input + 1 button: 

      `description` | `Button`

      *Placeholder*: `Use SPACE as plus for multiple searching keywords`

    - for input data search pattern:
      - use SPACEBAR as `+`: 

    - Searching results:

      1) If result is empty -> **expect this**: `No jobs found` should be shown as a result
      
      2) If result is **NOT** empty -> Wrap url of each results in `Link`, route to detail page, render out JobItem component

2. Detail Page(JobItem)

  - For Tests: (at least **10** tests)
    - `type` value: wrapped in `strong-element`
    - `title` value: wrapped in a `h2`
    - `company_url` value: wrapped in `a`
    - `description` value: wrapped in `p` -> `section` ⬅️ *Use sementic element instead*
    - `company_logo` value: as `src` for a `img` element

  - TIPS:

    Use `dangerouslySetInnerHTML` for description

3. Save results(if there is any) in context to avoid multiple fetching data.

4. Deploy to ~~GitHub~~/Netlify/Firebase/Vercel...

---
## Dependencies

- react-router-dom
- axios
- styled-components
- enzyme
- @wojtekmaj/enzyme-adapter-react-17
- react-loadingg

  ```js
  import { BoxLoading } from 'react-loadingg';
  // or
  import BoxLoading from 'react-loadingg/lib/BoxLoading
  <BoxLoading />;
  ```

# Features, *good to know*
1) Implement nested router
    ```js
    <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route
            path="/jobs/:jobtitle"
            render={({ match: { path } }) => (
              <div>
                <Route exact path={path} component={JobsPage} />
                <Route path={`${path}/:id`} component={JobDetailPage} />
              </div>
            )}
          />
          <Route path="/nojobfound" component={NoJobFound} />
          <Route path="*" component={Page404} />
        </Switch>
    ```
    Url will change correspondingly, following this pattern `/jobs/typescript+react/35842a28-ff88-47ba-99e5-f9960ae901a4`. We can tell exactly *queryField* and *queryId* from this path, then we can take that piece of data out of localStorage easily.

2. Use more generic function

    Use `fetchData('queryField', 'queryContent')`, `createContent(contentField)` instead of `getJobs(description)`, to increase reusability.

3. Pre-process input data
In case the user accidentally inputs extra unnecessary space, this function is implemented:
    ```js
    export const generateKeywords = (val) => {
      const regex = /\s+/;
      return val.trim().split(regex).join("+");
    };
    ```

4. About **test**
  - Created 3 files, they are 2 files inside of `./src/Components/__test__` and `App.test.js`
  - `App.test.js` is used to check if app is correctly rendered (only 1 test)
  - `JobDetail.test.js` is for testing JobDetail component, which includes **10** tests.
  - `JobListItem.test.js` is for testing JobListItem component, which includes **3** tests

    Example:

    ```js
    it("should contain text 'Origin Link' with correct url for this job", () => {
        // find correct node by expected content;
        // then check if it has the correct href;
        // the result has two children, we need the first one - a-tag
        expect(
          JobWrapper.findWhere((n) => n.text() === "Original Link")
            .at(0)
            .prop("href")
        ).toEqual(JOB_OBJECT.url);
      });
    ```
    Here we find that node with content 'Origin Link', then check if it contains a prop `href` is equal to the passed value.

    ```js
      it(`'company_url' should be wrapped in an a-tag`, () => {
      expect(JobWrapper.find(".company-url").closest("a")).toHaveLength(1);
    });
    ```
    `.company-url` is used as test class (maybe should be changed to some more explicit testId), then we use `closest()` to check if this node with this `.company-url` class is wrapped within an a-element. If so, we will get back length === 1.

# Code Snippet
> For js, just change ts/tsx to js/jsx, awesome code for formatting and checking eslint errors.

`npx prettier --write src/**/*.{ts,tsx}` 

`npx eslint --fix src/**/*.{ts,tsx}`

## Firebase
```
`firebase`
`npm run build`
`firebase deploy`
```

## Netlify
```
- `npm run build`
- `netlify deploy --prod` -> `./build` or `build`
```