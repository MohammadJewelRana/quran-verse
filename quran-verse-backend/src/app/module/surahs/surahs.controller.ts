import { Request, Response } from "express";
import httpStatus from "http-status";

import sendResponse from "../../utils/sendResponse";

import { SurahService } from "./surahs.service";
import { catchAsync } from "../../utils/catchAsync";

//  Get All Surahs 
const getAllSurahs = catchAsync(async (req: Request, res: Response) => {
  const result = await SurahService.getAllSurahs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Surahs retrieved successfully",
    data: result,
  });
});

//  Get Single Surah
const getSingleSurah = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await SurahService.getSingleSurah(Number(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Surah retrieved successfully",
    data: result,
  });
});

//  Search Ayah
const searchAyah = catchAsync(async (req: Request, res: Response) => {
  const { q } = req.query;

  const result = await SurahService.searchAyah(q as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Search results retrieved successfully",
    data: result,
  });
});

export const SurahController = {
  getAllSurahs,
  getSingleSurah,
  searchAyah,
};
