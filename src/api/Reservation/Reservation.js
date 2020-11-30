import { prisma } from "../../../generated/prisma-client";

export default {
  Reservation: {
    borrower: ({ id }) => prisma.reservation({ id }).borrower(),
    post: ({ id }) => prisma.reservation({ id }).post(),
    startDate: ({ id }) => prisma.reservation({ id }).startDate(),
    endDate: ({ id }) => prisma.reservation({ id }).endDate(),
  },
};
