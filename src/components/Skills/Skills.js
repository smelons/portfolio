import React from 'react';
import { SkillCategory } from '../SkillCategory';
import SkillData from '../../data/skills';

export default function Skills() {
  const categories = SkillData.map((category) => {
    const categoryProps = {
      title: category.title,
      skills: category.skills,
    };
    return <SkillCategory {...categoryProps} />;
  });
  return (
    <div className="hero-body is-aligned-top">
      <div className="container">
        {categories}
      </div>
    </div>
  );
}