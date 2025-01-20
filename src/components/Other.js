import React from 'react';

const Other = React.forwardRef((props, ref) => {

  const ulStyle = { 
    listStyleType: 'disc', 
    marginLeft: '2rem' 
  };

  return (
    <div ref={ref} className="section" id="other">
      <h2>Other Than Coding</h2>
      
      <section>
        <h3>📚 Publications</h3>
        <p>
          <strong>Next-Gen Smart Street Illumination System: An Adaptive and Energy Efficient Approach to Street Lighting</strong>  
          <br />
          <p> 
          Published in the International Journal of Scientific Research in Engineering and Management.  
          This research explores the limitations of traditional street lighting systems, offering a multi-sensor, machine learning-based approach for more energy-efficient, cost-effective, and sustainable urban infrastructure.
        </p> </p>
        <p>DOI: <a href="https://doi.org/10.55041/IJSREM39985" target="_blank" rel="noopener noreferrer">10.55041/IJSREM39985</a></p>
      </section>

      <section>
        <h3>🏆 Achievements</h3>
        <ul style={ulStyle}>
          <li>Awarded as the Best Performer during my internship at Digipodium.</li>
          <li>Certified in IBM Cloud Essentials, Google My Business, and Problem Solving (HackerRank).</li>
          <li>Active participant and member of the event organizing team during college activities.</li>
          <li>Head Girl at Spring Dale College, demonstrating leadership and organizational skills.</li>
          <li>Participated in various Olympiads organized by SOF during school years.</li>
          <li>Engaged in multiple art competitions, showcasing creativity and passion for the arts.</li>
        </ul>
      </section>

    </div>
  );
});

export default Other;