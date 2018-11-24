import React, { Component } from 'react';
import { SkillCategory } from '../SkillCategory';
import { SkillData } from '../../data/skills'

class Skills extends Component {
  render() {
    const categories = SkillData.map(function (category, index) {
      const props = {
        title: category.title,
        skills: category.skills
      };
      return <SkillCategory {...props}></SkillCategory>
    });
    return (
      <div class="hero-body is-aligned-top">
        {categories}
      </div>
    );
  }
}

export default Skills;