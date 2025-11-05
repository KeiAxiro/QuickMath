import type { Response, Request } from "express";
// import prisma from "../prisma/clients/indexPrisma.js";

export const homeController = async (
    req: Request,
    res: Response
) => {

    try {
        res.render("index", {
            title: "Home",
            vContent: "contents/home",
        });
    } catch (error) {
        console.error("Error fetching lists:", error);
        res.status(500).send("Internal Server Error");
    }
};