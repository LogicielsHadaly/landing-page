import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const TimelineElement = ({ data }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#fff', color: '#172554' }}
      contentArrowStyle={{ borderRight: '10px solid  #fff' }}
      date={data.date}
      iconStyle={{ background: '#172554', color: '#172554' }}
      icon={""}
    >
      <h3 className="vertical-timeline-element-title">{data.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
      <p>
        {data.description}
      </p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
