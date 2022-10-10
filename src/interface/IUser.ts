export interface IUser {
  id: string;
  name: string;
  email: string;
  about: string;
  github: string;
  linkedin: string;
  headline: string;
  image: string;
  eycoin: number;
  languages: [];
  enrolledCourses: [];
  submitedChallenges: [];
  skills: [];
  arrayCompletedCourses: [];
  completedCourses: number;
  hours: number;
  challenges: number;
  coursesInProgress: number;
  video: string;
  progress: {
    completedCourses: number;
    hours: number;
    challenges: number;
    coursesInProgress: number;
  };
  location: string;
  phone: string;
}

export interface IUserRow {
  id: string;
  name: string;
  email: string;
  about: string;
  github: string;
  linkedin: string;
  headline: string;
  image: string;
  eycoin: number;
  languages: [];
  enrolledCourses: [];
  submitedChallenges: [];
  skills: [];
  arrayCompletedCourses: [];
  completedCourses: number;
  hours: number;
  challenges: number;
  coursesInProgress: number;
  video: string;
  progress: {
    completedCourses: number;
    hours: number;
    challenges: number;
    coursesInProgress: number;
  };
  location: string;
  phone: string;
}
