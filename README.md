# Good to know

- API url: `https://jobs.github.com/positions.json?description=javascript`
- new url: `https://us-central1-wands-2017.cloudfunctions.net/githubjobs`
**Data structure for one job**
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
"description": "<p>whynow is a new arts and culture digital platform promoting personal, powerful and positive stories in the capital and beyond.</p>\n<p>As a subscription platform, members of whynow get access to a growing range of videos, articles, podcasts and more.  We are looking for a woocommerce wizard who will work with us and be responsible for the maintenance and growth of both our frontend checkout system, built in React and the accompanying custom woocommerce extensions written in PHP running on our headless CMS.</p>\n<p>This position requires full stack programming skills in the following technologies: (Woocommerce, React, PHP, SQL, writing tests). The candidate should have a strong understanding of woocommerce and wordpress as a content management system. Although this is a focused position the ideal candidate should have a good grasp on the entire web development process from UX design through to development, testing and deployment. The candidate would need to have the ability to follow and track issues, write code and test changes on both the frontend and backend of our checkout system.</p>\n<p>As we are a young company in constant evolution our long term goal for this role would also be to facilitate moving away from the dependency on woocommerce at scale. This would involve consultancy on the alternative e-commerce packages available and working on the migration itself which would involve some nifty script writing and SQL query abilities.\nResponsibilities\nDeveloping and optimising the overall frontend checkout process\nDeveloping and maintaining the backend of the checkout\nMonitoring woocommerce version updates and addressing breaking changes\nBuild on and develop and test our coupon and promotional systems\nWrite tests for edge cases to catch potential bugs on checkout\nTroubleshooting customer subscription reporting that feeds into google analytics and hubspot\nConsulting and research on viable ecommerce platform alternatives\nFacilitating potential migration to another CMS and ecommerce platform at scale\nWorking on the development of new ecommerce features such as a store</p>\n<p>Skills Required\nComplete understanding of web development basics:\nHTML5\nCSS3\nJavaScript\nStrong understanding of the woocommerce platform and some experience developing in this environment\nSolid understanding of development in the following web technologies relevant to our stack:\nReact\nPHP\nSQL\nExperience developing fully responsive ecommerce websites and applications\nComfortable working with chrome inspector debugging tools\nKnowledge of headless cms architecture and how to interact with RESTful APIs and data in JSON format\nProficient working knowledge of git version control\nStrong understanding of PHP development and wordpress</p>\n<p>PLEASE NOTE:</p>\n<ol>\n<li>This is a programming job. You MUST have 4+ years experience in web and software development technology.</li>\n<li>You MUST have experience in woocommerce or have completed some online training in this platform to be considered for this role.</li>\n<li>You MUST be in London and able to come into the office and work on location.</li>\n<li>You MUST be fluent in English.</li>\n</ol>\n<p>Salary competitive\nHoliday standard</p>\n",
"how_to_apply": "<p>Please email your CV and a cover letter to me at <a href=\"mailto:connor@whynow.co.uk\">connor@whynow.co.uk</a></p>\n",
"company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1NXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65a93ab1c962ad69d2724d5791201cb0f2377646/whynow-login-logo.png"
},
```

# Requirement

1. First Page
  - 1 inputs + 1 button: 

    `description` | `whatever you input` | `Button`

    *Placeholder*: `Use SPACE as plus for multiple searching keywords`

  - for input data search pattern:
    - use SPACEBAR as `+`: 

    TODO: need to split and join string

  - Searching results:

    1) If result is empty -> **expect this**: `No jobs found` should be shown as a result
    
    2) If result is **NOT** empty -> Wrap url of each results in `Link`, route to detail page, render out JobItem component

2. Detail Page(JobItem)

  - For Tests: (at least **10** tests)
    - `type` value: wrapped in `strong-element`
    - `title` value: wrapped in a `h2`
    - `company_url` value: wrapped in `a`
    - `description` value: wrapped in `p`
    - `company_logo` value: as `src` for a `img` element

  - TIPS:

    Use `pleaseusedangerouslySetInnerHTML` for description

3. Save results(if there is any) in context to avoid multiple fetching data.

4. Deploy to GitHub/Netlify/Firebase/Vercel...

---
## Dependencies

axios | styled-components (maybe change it into emotion later...)

enzyme | @wojtekmaj/enzyme-adapter-react-17

- react-loadingg

  - usage: 
  ```
  import { BoxLoading } from 'react-loadingg';
  // or
  import BoxLoading from 'react-loadingg/lib/BoxLoading

  <BoxLoading />;
  ```
