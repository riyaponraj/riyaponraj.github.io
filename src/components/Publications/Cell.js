import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// const Cell = ({ data }) => (
//   <div className="cell-container">
//     <article className="mini-post">
//       <header>
//         <h3><a href={data.link}>{data.title}</a></h3>
//         <div className="author">{data.author}</div>
//         <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
//         <div className="conference">{data.conference}</div>
//         <div className="published in">{data.published}</div>
//       </header>
//       {/* <a href={data.link} className="image">
//         <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
//       </a> */}
//       <div className="description">
//         <p>{data.desc}</p>
//       </div>
//     </article>
//   </div>
// );

// Cell.propTypes = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     link: PropTypes.string,
//     // image: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     published: PropTypes.string.isRequired,
//     conference: PropTypes.string.isRequired,
//     desc: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Cell;

const Cell = ({ data }) => (
  <div>
    <h3>
      <a href={data.pdf}>{data.title}</a>
    </h3>
    <p>{data.authors.join(', ')}</p>
    <p><strong>Conference: </strong> {data.conference}</p>
    {/* If publicationDate is available in your data, you can use it */}
    {data.date && <p>{dayjs(data.date).format('MMMM YYYY')}</p>}
    {/* Include any other relevant information from your data */}
    {/* You can add more elements based on your data structure */}
    <p><strong>Notes: </strong>{data.notes}</p>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    date: PropTypes.string, // If date is present in your data
    notes: PropTypes.string, // Add notes property if available
    pdf: PropTypes.string,
    // Remove the image property
  }).isRequired,
};

export default Cell;
