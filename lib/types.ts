export interface Navbar {
  cta: string;
}

export interface WorkExperience {
  headerTitle?: string;
  company: string;
  startDate: string;
  endDate: string;
  title: string;
  content: string[];
  duration: string;
}

export interface HeaderType {
  summary1: string;
  colorText: string;
  summary2: string;
}

export interface Education {
  headerTitle?: string;
  location: string;
  program: string;
  startDate: string;
  endDate: string;
  result: string;
}

export interface Dictionary {
  navbar: Navbar;
  workExperience: WorkExperience[];
  education: Education[];
  header: HeaderType;
}
