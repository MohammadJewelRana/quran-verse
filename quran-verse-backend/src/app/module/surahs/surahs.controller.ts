import { Request, Response } from "express";
import { SurahService } from "./surahs.service";

const getAllSurahs = async (req: Request, res: Response) => {
  const result = await SurahService.getAllSurahs();
  res.json(result);
};

const getSingleSurah = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await SurahService.getSingleSurah(id);
  res.json(result);
};

const searchAyah = async (req: Request, res: Response) => {
  const q = req.query.q as string;
  const result = await SurahService.searchAyah(q);
  res.json(result);
};

export const SurahController = {
  getAllSurahs,
  getSingleSurah,
  searchAyah,
};