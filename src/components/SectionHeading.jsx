export default function SectionHeading({ overline, title, subtitle }) {
  return (
    <header className="section-heading">
      {overline ? <p className="overline">{overline}</p> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
