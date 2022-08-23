type EventSummaryProps = { title: string };

const EventSummary = (props: EventSummaryProps) => {
  const { title } = props;

  return (
    <section className="event-details-summary">
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
