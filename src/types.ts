export interface Note {
  id: string;
  title: string;
  content: string | string[]; // Updated to handle string or array of strings
  backgroundColor?: string; // Optional background color
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}