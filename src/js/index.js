import AOS from "aos";
import "aos/dist/aos.css";

import { hamburgerMenu, navhide } from "./nav";

// Handles Hamburger Menu
hamburgerMenu();
// inits animate on scroll
navhide();

AOS.init();
