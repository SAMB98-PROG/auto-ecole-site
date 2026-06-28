export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PermisType {
  id: string;
  category: string;
  title: string;
  description: string;
  requirements: string[];
  duration: string;
  price: number;
  image: string;
}

export interface FormationType {
  id: string;
  title: string;
  description: string;
  duration: string;
  conditions: string[];
  price: number;
  image: string;
  category: string; // 'permis' | 'code' | 'perfectionnement'
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'vehicles' | 'classroom' | 'students' | 'exams' | 'practice' | 'awards';
  image: string;
}
