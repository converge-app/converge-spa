import { IEvent } from '../../../lib/models/event.model';
import EventFile from './event.file';
import { EventMessage } from './event.message';

export function EventType(props: { event: IEvent }): any {
  switch (props.event.type) {
    case 'message':
      return (
        <div>
          <EventMessage event={props.event} />
        </div>
      );
    case 'file':
      return (
        <div>
          <EventFile event={props.event}></EventFile>
        </div>
      );
    default:
      return <div>Couldn't determine type</div>;
  }
}

export default EventType;
