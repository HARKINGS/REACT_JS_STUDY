import { useEffect, useState } from "react";

const lessons = [
  { id: 1, title: "Lesson 1", content: "Content for lesson 1" },
  { id: 2, title: "Lesson 2", content: "Content for lesson 2" },
  { id: 3, title: "Lesson 3", content: "Content for lesson 3" },
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lessonComment-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lessonComment-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => {
          return (
            <li
              key={lesson.id}
              style={{
                cursor: "pointer",
                color: lessonId === lesson.id ? "blue" : "black",
              }}
              onClick={() => setLessonId(lesson.id)}
            >
              {lesson.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Content;
