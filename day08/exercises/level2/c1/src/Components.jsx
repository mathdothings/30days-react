import React from "react";

class ProjectItem extends React.Component {
  render() {
    const project = this.props.project;
    const { title, category } = project;
    return (
      <li>
        {title} - {category}
      </li>
    );
  }
}

class Projects extends React.Component {
  render() {
    const projects = this.props.projects;
    return (
      <ul>
        {projects.map((item, index) => (
          <ProjectItem project={item} key={index} />
        ))}
      </ul>
    );
  }
}

export default Projects;
