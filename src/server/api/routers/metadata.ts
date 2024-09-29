import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const metadataRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.postMetaData.findMany();
  }),
});
