export interface IProfile {
  id?: string;
  userId: string;
  profilePictureUrl?: string;
  rating: number;
  title: string;
  description?: string;
  skills: string[];
  experience: string[];
}
