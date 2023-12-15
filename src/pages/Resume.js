// import { Link } from 'react-router-dom';

// import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import work from '../data/resume/work';
// import { skills, categories } from '../data/resume/skills';

// // NOTE: sections are displayed in order defined.
// const sections = {
//   Education: () => <Education data={degrees} />,
//   Experience: () => <Experience data={work} />,
//   Skills: () => <Skills skills={skills} categories={categories} />,
//   Courses: () => <Courses data={courses} />,
//   References: () => <References />,
// };

// const Resume = () => (
//   <Main
//     title="Resume"
//     description="Michael D'Angelo's Resume. S"
//   >
//     <article className="post" id="resume">
//       <header>
//         <div className="title">
//           <h2><Link to="resume">Resume</Link></h2>
//           <div className="link-container">
//             {Object.keys(sections).map((sec) => (
//               <h4 key={sec}>
//                 <a href={`#${sec.toLowerCase()}`}>{sec}</a>
//               </h4>))}
//           </div>
//         </div>
//       </header>
//       {Object.entries(sections).map(([name, Section]) => (
//         <Section key={name} />
//       ))}
//     </article>
//   </Main>
// );

// export default Resume;
// ... (previous imports and code)

// const Resume = () => {
//   const openResume = () => {
//     // Change the path to your CV file
//     const cvPath = 'files/cv.pdf';

//     // Open the PDF in a new tab or window
//     window.open(cvPath, '_blank');
//   };

//   return (
//     <Main
//       title="Resume"
//       description="Riya Ponraj's CV. "
//     >
//       <article className="post" id="resume">
//         <header>
//           <div className="title">
//             <h2><Link to="resume">Resume</Link></h2>
//             <div className="link-container">
//               {/* Add a button to open the resume */}
//               <button onClick={openResume}>Open Resume</button>

//               {/* Add section links */}
//               {Object.keys(sections).map((sec) => (
//                 <h4 key={sec}>
//                   <a href={`#${sec.toLowerCase()}`}>{sec}</a>
//                 </h4>
//               ))}
//             </div>
//           </div>
//         </header>
//         {Object.entries(sections).map(([name, Section]) => (
//           <Section key={name} />
//         ))}
//       </article>
//     </Main>
//   );
// };

// export default Resume;

// workssss
// import React from 'react';
// const openResume = () => {
//   // Change the path to your CV file
//   const cvPath = 'files/cv.pdf';

//   // Open the PDF in a new tab or window
//   window.open(cvPath, '_self');
// };

// const Resume = () => (
//   <div>
//     {/* Add a button to open the resume with type="button" */}
//     <button type="button" onClick={openResume}>
//       Open Resume
//     </button>
//   </div>
// );

// export default Resume;

import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

const Resume = () => {
  // Automatically redirect to the resume when the component mounts
  useEffect(() => {
    const cvPath = 'files/cv.pdf';
    window.open(cvPath, '_self');
    window.history.replaceState(null, '', '/');
  }, []);

  // This component doesn't render anything, as it redirects immediately
  return null;
};

export default Resume;
