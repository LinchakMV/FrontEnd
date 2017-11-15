import React from 'react';

const skillsData = [
  { name: 'HTML5', level: 8 },
  { name: 'CSS3', level: 5 },
  { name: 'JavaScript', level: 10 },
  { name: 'ReactJS', level: 8 },
  { name: 'AngularJS', level: 8 }
];

function Skills() {
  return (
    <section className="skills">
      <a name="Skills" />
      <h5 className="skills_title">Skills</h5>
      {skillsData.map(skill => (
        <div key={`skill-${skill.name}-${skill.level}`} className="skills_item">
          <p>{skill.name}</p>
          <ul className="skills_list">
            {[...Array(skill.level).keys()].map(level => (
              <li key={`active-level-${level}`} className="skills_list_circle active_skill" />
            ))}
            {[...Array(10 - skill.level).keys()].map(level => (
              <li key={`level-${level}`} className="skills_list_circle" />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
