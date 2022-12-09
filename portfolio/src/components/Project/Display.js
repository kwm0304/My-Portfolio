import React from 'react';
import Card from './Card';

const project = {
  name: 'Weather app',
  description: 'The best boy',
  id: 1,
};

export default function Display() {
  return (
    <div>
        <Card name={project.name} description={project.description} id={project.id} />
    </div>
  );
}
