export interface IEvent {
  id?: string;
  projectId?: string;
  type: string;
  content: string;
  timestamp: number;
}
