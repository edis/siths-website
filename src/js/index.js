import AOS from "aos";
import "aos/dist/aos.css";

import { hamburgerMenu, navhide } from "./nav";

// Handles Hamburger Menu
hamburgerMenu();
// hides nav bar when scrolling down
navhide();

// inits animate on scroll
AOS.init();
