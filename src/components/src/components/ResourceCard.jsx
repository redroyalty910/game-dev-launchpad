function ResourceCard({ title, description, link }) {
  return (
    <div className="resource-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Learn More
      </a>
    </div>
  );
}

export default ResourceCard;