import React from "react";

class AddProject extends React.Component {
  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile Development"],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value, event.target[2].value);
  };

  render() {
    const categories = this.props.categories.map((category, index) => (
      <option key={index} value="category">
        {category}
      </option>
    ));
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="category">Category: </label>
            <select>{categories}</select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class ProjectItem extends React.Component {
  render() {
    const project = this.props.project;
    const { title, category } = project;
    return (
      <li>
        <strong>{title}</strong> - {category}
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

export { AddProject, Projects };
