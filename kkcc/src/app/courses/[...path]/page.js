import { notFound } from "next/navigation";

export default async function ContentPage({ params }) {
  const { path } = await params;
  // course: [courseId] => .com/courses/consulting-asdasd
  // unit: [courseId, unitId] .com/courses/consulting-asdasd/unit-18723871

  if (path.length === 1) {
    return <p>course page {path[0]}</p>;
  } else if (path.length === 2) {
    return (
      <p>
        unit page {path[0]} {path[1]}
      </p>
    );
  } else {
    notFound();
  }
}
