import sectionStyles from './Section.module.scss';

function Section({ className, title, children }) {
  return (
    <section className={className}>
      <div className={sectionStyles.container}>
        <h2 className={sectionStyles.hidden}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default Section;