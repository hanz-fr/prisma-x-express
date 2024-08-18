import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().user;

export const getAllUser = async (req, res) => {
  try {
    const allUser = await userClient.findMany();

    res.status(200).json({ data: allUser });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: "false",
      code: e.code,
    });
  }
};
