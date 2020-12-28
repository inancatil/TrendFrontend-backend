import { Router } from "express";
import * as blogPostController from "../controllers/blogPost-controller";
import { authorize } from "../middleware/authorize";

const blogPostRouter = Router();

blogPostRouter.get("/", authorize(), blogPostController.getBlogPosts);

/*
check("prop") controllerda tanımlı olan objenin prop larında hangisinin validate
olmasını istiyorsak onu yazıyoruz */
blogPostRouter.post("/", authorize(), blogPostController.createBlogPost);

// placesRouter.patch(
//   "/:pid",
//   [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
//   placesController.updatePlace
// );

blogPostRouter.delete(
  "/:bpid",
  authorize(),
  blogPostController.deleteBlogPostById
);

export default blogPostRouter;
