// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Person from "@material-ui/icons/Person";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import NewExercise from "views/NewExercise/NewExercise.jsx";
import EditExercises from "views/EditExercises/EditExercises.jsx";
import NewWorkout from "views/NewWorkout/NewWorkout.jsx";
import SignIn from "views/SignIn/SignIn.jsx";
import SignUp from "views/SignUp/SignUp.jsx";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/new-exercise",
    sidebarName: "New Exercise",
    navbarName: "New Exercise",
    icon: LibraryBooks,
    component: NewExercise
  },
  {
    path: "/edit-exercises",
    sidebarName: "Edit Exercises",
    navbarName: "Edit Exercises",
    icon: LibraryBooks,
    component: EditExercises
  },
  {
    path: "/new-workout",
    sidebarName: "New Workout",
    navbarName: "New Workout",
    icon: LibraryBooks,
    component: NewWorkout
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export const authorizationRoutes = [
  {
    path: "/sign-in",
    sidebarName: "Sign In",
    navbarName: "Sign In",
    icon: Person,
    component: SignIn
  },
  {
    path: "/sign-up",
    sidebarName: "Sign Up",
    navbarName: "Sign Up",
    icon: Person,
    component: SignUp
  },
  { redirect: true, path: "/", to: "/sign-in", navbarName: "Redirect" }
]; 