export interface IEvent {
  id?: string;
  projectId: string;
  ownerId: string;
  type: string;
  content: string;
  timestamp?: number;
}
