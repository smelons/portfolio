import React from 'react';
import { Skill } from '../Skill';

export default function SkillCategory(props) {
  const { title } = props;
  const skills = props.skills.map((skill) => {
    const skillProps = {
      name: skill.name,
    };
    return <Skill {...skillProps} />;
  });
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">
            {title}
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            {skills}
          </div>
        </div>
      </section>
    </>
  );
}