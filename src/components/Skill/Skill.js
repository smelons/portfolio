import React from 'react';
import Logo from 'react-svgporn';

export default function Skill({ name, logo, url }) {
  return (
    <div className="column">
      <a href={url}>
        <Logo name={logo} />
        {name}
      </a>
    </div>
  );
}