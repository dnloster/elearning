import Authors from "~/pages/Authors";
import CourseDetails from "~/pages/CourseDetails";
import Courses from "~/pages/Courses";
import Documents from "~/pages/Documents";
import Home from "~/pages/Home";
import LessonDetails from "~/pages/LessonDetails";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/courses", component: Courses },
    { path: "/authors", component: Authors },
    { path: "/documents", component: Documents },
    { path: "/course-details/:course", component: CourseDetails },
    { path: "/:course/lesson", component: LessonDetails },
];

export { publicRoutes };
