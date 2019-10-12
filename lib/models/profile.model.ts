export interface IProfile {
  id?: string;
  userId: string;
  profilePictureUrl?: string;
  title: string;
  description?: string;
  skills: string[];
  experience: string[];
}
