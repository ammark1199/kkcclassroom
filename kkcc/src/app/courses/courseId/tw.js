import React from "react";

export default async function CoursePage({ params }) {
  const { courseId } = await params;
  return (
    <div>
      CoursePage
      {courseId}
    </div>
  );
}
