import { VerticalTimeline } from 'react-vertical-timeline-component';
import TimelineElement from '../TimelineElement';

const CustomVerticalTimeline = ({ timelineData }) => {
  return (
    <VerticalTimeline>
      {timelineData.map((data, index) => (
        <TimelineElement key={index} data={data} />
      ))}
    </VerticalTimeline>
  );
};

export default CustomVerticalTimeline;
