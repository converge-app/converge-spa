import { IEvent } from '../../../lib/models/event.model';
import { EventMessage } from './event.message';

export function EventType(props: { event: IEvent }): any {
  switch (props.event.type) {
    case 'message':
      return (
        <div>
          <EventMessage event={props.event} />
        </div>
      );
    default:
      return <div>Couldn't determine type</div>;
  }
}

export default EventType;
