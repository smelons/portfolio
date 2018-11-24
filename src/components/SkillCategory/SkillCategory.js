import React, { Component } from 'react';
import { Skill } from '../Skill'

class SkillCategory extends Component {
  render() {
    const title = this.props.title;
    const skills = this.props.skills.map(function (skill, index) {
      const props = {
        name: skill.name
      };
      return <Skill {...props}></Skill>;
    });
    return (
      <div class="container">
        <section class="section">
          <div class="container">
            <h1 class="title">
              {title}
            </h1>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="columns">
              {skills}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SkillCategory;