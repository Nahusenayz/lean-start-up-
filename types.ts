
export interface Chapter {
  id: string;
  title: string;
}

export interface ChapterPart {
  part: string;
  chapters: Chapter[];
}
