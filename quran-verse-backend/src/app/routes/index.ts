import { Router } from "express";
 
 
 

const router = Router();

const moduleRoutes = [
 
  {
    path: "/projects",
    route: ProjectRoutes,
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
