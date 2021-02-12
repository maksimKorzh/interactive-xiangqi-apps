var Puzzles;
const PuzzlesDb = [
  [],
  [
    {
      "description": "LE Thien Vi - BI BingJian\nWorld Xiangqi Championships 1997 ",
      "fen": "2Rckab1C/4a4/4R3n/p5p2/9/2N6/2P5P/C5r2/4K4/2B2A3 w - - 0 1",
      "id": "puzzle_0",
      "title": "Mate in 1 move"
    },
    {
      "description": "DING Wa Chong - SCHAEFER Nobert\nWorld Xiangqi Championships 1997 ",
      "fen": "5k3/2N1a4/b2a5/p1P6/2b2Cn2/6C1p/9/4B4/4c4/2BAK4 w - - 0 1",
      "id": "puzzle_1",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAI Chi Kong - QUACH Anh Tu\nWorld Xiangqi Championships 1997 ",
      "fen": "2bakab2/9/1r4n2/4p1p1p/1n7/R6R1/P1P1c1P1P/C1c1B4/2C1N4/2BAKA3 b - - 0 1",
      "id": "puzzle_2",
      "title": "Mate in 1 move"
    },
    {
      "description": "YUNG Tak Keung - LI KangWah\nHong Kong Individual Championship 1996 ",
      "fen": "3a1ab2/4k2P1/9/5P3/9/9/9/n8/4A4/2p1KA3 b - - 0 1",
      "id": "puzzle_3",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN JianYun - LI YuTao\nHong Kong Individual Championship 1996 ",
      "fen": "C2a1ab2/3R5/4k1P2/5N3/9/3r4c/5n3/4BA3/9/2B1K4 w - - 0 1",
      "id": "puzzle_4",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIANG SiHao - WONG Chi Keung\nHong Kong Individual Championship 1996 ",
      "fen": "3ak1b2/4a4/4b4/5R3/9/5p3/P1P5P/B8/4Nr3/1R2KABc1 b - - 0 1",
      "id": "puzzle_5",
      "title": "Mate in 1 move"
    },
    {
      "description": "QUYANG Peng - WU ShiGen\nHong Kong Individual Championship 1996 ",
      "fen": "3k5/4P2N1/3Nb1c1b/8p/9/2B6/P7P/4B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_6",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN De - HO Wing Kit\nHong Kong Individual Championship 1996 ",
      "fen": "2bak4/4a4/3Rb4/1r4n1p/p4N3/9/P7P/4Cp3/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_7",
      "title": "Mate in 1 move"
    },
    {
      "description": "YUNG Tak Keung - CHEN GuoWei\nHong Kong Individual Championship 1996 ",
      "fen": "3a1k3/7R1/5a3/5P3/1n2P3p/p4C3/2r2c2P/4C3B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_8",
      "title": "Mate in 1 move"
    },
    {
      "description": "FAN YuQing - ZHANG WenChang\nHong Kong Individual Championship 1996 ",
      "fen": "4kab2/5c3/2n1ba3/2p1p3p/p8/2P2r3/2N1c3P/2n1C3B/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_9",
      "title": "Mate in 1 move"
    },
    {
      "description": "HE QiXian - HUANG TanXu\nHong Kong Individual Championship 1996 ",
      "fen": "2bakab2/5rc2/9/p1p5p/5n3/2N1P4/P1P3P1P/7r1/R3A4/1NB1KAB2 b - - 0 1",
      "id": "puzzle_10",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI ZuoYing - LIN Sui\nHong Kong Individual Championship 1996 ",
      "fen": "2b1ka3/7R1/n2ab4/1rN3p1p/p3N4/2P3P2/P3P3P/3CC4/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_11",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HenGru - KANG DeLi\nHong Kong Individual Championship 1996 ",
      "fen": "4k1br1/1R2N4/3ab1P2/7np/p8/4C4/4P3c/4B4/4A4/2BAKR3 w - - 0 1",
      "id": "puzzle_12",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG YuLiang - LONG GuangMing\nHong Kong Individual Championship 1996 ",
      "fen": "C1b2Rb2/4k2r1/3P1R3/p7p/4p4/6P2/P3P3P/9/9/c1rAKA3 w - - 0 1",
      "id": "puzzle_13",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG TanXu - WEN LiShen\nHong Kong Individual Championship 1996 ",
      "fen": "2bakab2/4c4/9/1P6p/9/6P1P/1c2N1n2/B1N6/2nCAC3/2B1KA3 b - - 0 1",
      "id": "puzzle_14",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Hong Shiou - GAO YiPing\nWorld Xiangqi Championships 1997 ",
      "fen": "5ab2/3k1C3/2N2R3/p7p/9/5n3/P7P/Bc1rC3B/4K4/5A3 w - - 0 1",
      "id": "puzzle_15",
      "title": "Mate in 1 move"
    },
    {
      "description": "HE ZhiMing - CHAN Tin Man\nWorld Xiangqi Championships 1997 ",
      "fen": "4ka3/9/b4aR1b/p6Pp/2p6/P5B2/2P3p1P/N4K1C1/6r2/2B2C3 b - - 0 1",
      "id": "puzzle_16",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DaHua - YANG GuanLin\n5 Ram Cup Xiangqi Championship 1983 ",
      "fen": "2b2k3/3R5/4bN3/p7p/5N3/2P3B2/P7P/3K5/1r2p1c2/2B2A3 w - - 0 1",
      "id": "puzzle_17",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI LaiQun - YANG GuanLin\n5 Ram Cup Xiangqi Championship 1983 ",
      "fen": "2ba1k3/9/3ab4/1P7/9/6B2/5C3/2nA5/3p1p3/4K4 b - - 0 1",
      "id": "puzzle_18",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU TianHong - LI LaiQun\n5 Ram Cup Xiangqi Championship 1990 ",
      "fen": "1CbR5/4kc2r/5N3/7rC/6p2/9/p1P5P/N1n1B4/c3A4/4K1B2 w - - 0 1",
      "id": "puzzle_19",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU RongHua - LIU DaHua\n5 Ram Cup Xiangqi Championship 1990 ",
      "fen": "4kab2/4a1c2/4b1n2/pN2p3p/9/P1B5P/4P4/4C4/c2CA4/4KAB2 b - - 0 1",
      "id": "puzzle_20",
      "title": "Mate in 1 move"
    },
    {
      "description": "Chen Kuo Hsin - LU George\n ",
      "fen": "4ka3/4a4/b3b4/4C3p/9/p3P3P/3Rn1r2/B3B4/3KA4/5A3 w - - 0 1",
      "id": "puzzle_21",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN Sen-Rong - \u8def\u6613\u6b27\n ",
      "fen": "3k1ab2/2R6/1r1N5/8p/pn2R4/4P4/P5p2/B7B/4A4/3K1A3 w - - 0 1",
      "id": "puzzle_22",
      "title": "Mate in 1 move"
    },
    {
      "description": "WONG Chi Keung - LIE Hwa Tjiang\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "1rba1k3/9/1cnnba3/p1p1C1p1p/4PN3/3r5/P5c1P/5CN2/9/R1BAKABR1 w - - 0 1",
      "id": "puzzle_23",
      "title": "Mate in 1 move"
    },
    {
      "description": "HOR Weng Yeow - LO ChiKam\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2bakab2/1N2c4/2n1r4/2R6/6p2/3p5/P5P1P/4C3N/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_24",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN Sen-Rong - TRAN Bachien\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2b1kNb1C/9/1c5R1/4p4/4r1p2/8P/P8/B8/4A1r2/3AK4 b - - 0 1",
      "id": "puzzle_25",
      "title": "Mate in 1 move"
    },
    {
      "description": "NG Wing Sang - LIN Sen-Rong\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2bakab2/2cNnr3/6Cc1/p1p5p/9/2P6/P3P3P/3CB1N2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_26",
      "title": "Mate in 1 move"
    },
    {
      "description": "LO ChiKam - CHIN Kok Liang\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2b1ka3/4a4/2n4Cb/p1p1p3p/9/2P3P2/8P/4B1n2/5KCRN/1cBr5 b - - 0 1",
      "id": "puzzle_27",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN Sen-Rong - LIE Hwa Tjiang\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2b1ka2r/4a4/4b2cn/p4RpNp/4C4/9/P1pr2P1P/n1c2R3/1C2A4/3AK1B2 b - - 0 1",
      "id": "puzzle_28",
      "title": "Mate in 1 move"
    },
    {
      "description": "YE RongGuang - TRUONG A Ming\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "4R4/4aN3/3k5/C2n4p/6p2/P1B5P/6P1n/C1c6/4K4/3r1AB2 w - - 0 1",
      "id": "puzzle_29",
      "title": "Mate in 1 move"
    },
    {
      "description": "HOR Weng Yeow - YAMAZAKI Hideo\nWorld Xiangqi Championships 1999 ",
      "fen": "3a2C2/2c2C1R1/3abk3/p5p1p/9/4c1r2/P5r1P/3RB4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_30",
      "title": "Mate in 1 move"
    },
    {
      "description": "TEMPELMANN Claus - OMATA Mitsuo\nWorld Xiangqi Championships 1999 ",
      "fen": "3k1abr1/4a4/2cNb4/p5p1p/4C4/2Pc2P2/P4R2P/3C5/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_31",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG QingMing - DING JianQuan\n ",
      "fen": "3k1a3/4a1N2/1n3R3/2p5p/6p2/2P6/6P1P/4r4/3rAR3/3AK4 b - - 0 1",
      "id": "puzzle_32",
      "title": "Mate in 1 move"
    },
    {
      "description": "MAI Thanh Minh - YU DeMing\n ",
      "fen": "1nbak1r2/1N2a4/4bR3/p3C4/9/2P3p2/P3P3P/8c/4A4/2BA1K2c w - - 0 1",
      "id": "puzzle_33",
      "title": "Mate in 1 move"
    },
    {
      "description": "HII Kong Ming - LIN YiShi\n ",
      "fen": "3a1kb2/4a4/b2c2n2/p3p1C1p/9/6P2/P2Rcr2P/B2p5/N3A4/2RK1AB2 b - - 0 1",
      "id": "puzzle_34",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Hong Shiou - GAO YiPing\nWorld Xiangqi Championships 1997 ",
      "fen": "5ab2/3k1C3/2N2R3/p7p/9/5n3/P7P/Bc1rC3B/4K4/5A3 w - - 0 1",
      "id": "puzzle_35",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU TianHong - HU RongHua\nYinli Cup Champion 1993 ",
      "fen": "1Cba1a3/2N1k4/9/4p1n1p/9/p2n5/4P3P/3AB4/9/1cBAK4 w - - 0 1",
      "id": "puzzle_36",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU RongHua - ZHANG Weimin\nNA 1992 ",
      "fen": "4kab1C/1c1P5/2N6/6c2/4p4/8p/9/4B4/3K5/5An2 w - - 0 1",
      "id": "puzzle_37",
      "title": "Mate in 1 move"
    },
    {
      "description": "YANG DeQi - TAO HanMing\nChinese National Champion 1998 ",
      "fen": "3ckab1C/4a4/4b4/9/9/5N3/8r/3nR4/4K4/5AB2 b - - 0 1",
      "id": "puzzle_38",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Lin - TAO HanMing\nChinese National Champion 1990 ",
      "fen": "C4ab2/3k2c2/2N1ba3/5C2p/4c1p2/P3p4/6P2/B3n4/4K4/3A1A3 b - - 0 1",
      "id": "puzzle_39",
      "title": "Mate in 1 move"
    },
    {
      "description": "TRUONG A Ming - BUI Duong Tran\nVietnam National Championship 2000 ",
      "fen": "1r3abC1/n3ck3/9/R7p/9/6P2/P7P/4B4/4A4/1NBAK4 w - - 0 1",
      "id": "puzzle_40",
      "title": "Mate in 1 move"
    },
    {
      "description": "MONG Nhi - VO Hong Chau\nVietnam National Championship 2000 ",
      "fen": "3k1ab2/4a4/3Nbn3/9/4C3p/2B1P4/9/B2p5/8c/3AK4 w - - 0 1",
      "id": "puzzle_41",
      "title": "Mate in 1 move"
    },
    {
      "description": "FUNG Stephen - DIEP Khai Nguyen\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2n1R4/5k3/b3b3c/p1r1p1n1p/2p3p2/P8/4P1c1P/2C3N1B/5C3/2BAKA3 w - - 0 1",
      "id": "puzzle_42",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Xuan - XIANG Yanghong\nChinese National Champion 2000 ",
      "fen": "4k2RC/4a4/2n1b4/p8/1cpr5/9/P1P1P3p/2N6/1R2Arn1N/4KAB2 b - - 0 1",
      "id": "puzzle_43",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG ShenHong - LIN HongMin\nChinese National Champion 2000 ",
      "fen": "2baka3/9/4b4/p3R3p/3P5/2B3P2/P1N1P3P/3C5/3KAn1c1/5r3 b - - 0 1",
      "id": "puzzle_44",
      "title": "Mate in 1 move"
    },
    {
      "description": "WEN ManHong - GUO RuiXia\nChinese National Champion 2000 ",
      "fen": "2bak4/4a4/2n1P4/p1C5p/3c5/9/P3N3P/2N1n4/4A4/1R2KAr2 w - - 0 1",
      "id": "puzzle_45",
      "title": "Mate in 1 move"
    },
    {
      "description": "DONG XuBin - XU YinChuan\nChinese National Champion 2000 ",
      "fen": "2bak4/4a4/8b/N3R3p/9/2B2R2P/P3P1P2/5K3/cr4n2/2BA1Ar2 b - - 0 1",
      "id": "puzzle_46",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG Jiang - ZHANG Qiang\nChinese National Champion 2000 ",
      "fen": "3k5/4P4/3Pb4/9/3c2b2/3p5/9/9/4K4/2BA1A3 w - - 0 1",
      "id": "puzzle_47",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHUANG YuTing - TANG ZhuoGuang\nChinese National Champion 2000 ",
      "fen": "2bR5/2N1k4/5P3/7P1/6P2/9/9/4B4/2p6/2BAKA1rc w - - 0 1",
      "id": "puzzle_48",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Xuan - ZHU ZongSi\nChinese National Champion 2000 ",
      "fen": "2ba5/1Cn6/3k1N1R1/P7p/3r2b2/3p5/4c3P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_49",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHANG ZhiHua - LI ShuYing\nChinese National Champion 2000 ",
      "fen": "2bak4/4a4/nc4P1b/1N2R4/5r3/8p/7p1/4BC3/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_50",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Xia - GAO YiPing\nYinli Cup Champion 2000 ",
      "fen": "2b1kabC1/4a4/2n6/p8/5R1N1/2P6/P8/B1c1K4/4A1r2/5A3 w - - 0 1",
      "id": "puzzle_51",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI LaiQun - Lv Qin\nChina Team Championship 1988 ",
      "fen": "4kab2/4N4/9/p5c1C/2b1P4/9/P7P/4BA3/3NK1n2/5A1c1 b - - 0 1",
      "id": "puzzle_52",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU WeiBang - CHAN Tat Tai\nHong Kong Team Champion 2000 ",
      "fen": "2bak4/4a4/n3b4/N3P3C/p8/3c4P/P2N5/C1pnBA3/4A4/c2K5 b - - 0 1",
      "id": "puzzle_53",
      "title": "Mate in 1 move"
    },
    {
      "description": "TOH Yeow Chong - ZHU XiaoHu\nICCS IT 2000 ",
      "fen": "r1bak1C2/3ca4/4R4/p3p3p/9/9/P5P1P/2r1B1N2/4A1n2/R2K1AB2 b - - 0 1",
      "id": "puzzle_54",
      "title": "Mate in 1 move"
    },
    {
      "description": "WONG Shu Kai - WONG Ah Heng\nICCS IT 2000 ",
      "fen": "3rkab2/4a4/7c1/p3p3p/7R1/1R7/P3P1p1P/3rB4/4K1n2/2B2AN2 b - - 0 1",
      "id": "puzzle_55",
      "title": "Mate in 1 move"
    },
    {
      "description": "Wong Man Wai - Ma Kwok Keung\nICCS IT 2000 ",
      "fen": "3k1ab2/4a3c/2P1bn3/5N3/3C5/P8/7p1/4B4/3K5/3A1A3 w - - 0 1",
      "id": "puzzle_56",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIAN TianNan - TOH Yeow Chong\nICCS IT 2000 ",
      "fen": "3k1P3/4P4/3cb3b/9/9/9/P8/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_57",
      "title": "Mate in 1 move"
    },
    {
      "description": "Ma Kwok Keung - ZENG YiQian\nICCS IT 2000 ",
      "fen": "3akab2/9/4b4/1P7/8p/4r4/8P/9/4Rcn2/2BAKA3 b - - 0 1",
      "id": "puzzle_58",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN Jie Yee - CHEN BoRen\nICCS IT 2000 ",
      "fen": "C3ka3/3na4/3c2n1b/pR6p/6p2/3N5/P3P3P/B3C4/4A4/3AK1cr1 w - - 0 1",
      "id": "puzzle_59",
      "title": "Mate in 1 move"
    },
    {
      "description": "NG JunMing - WONG Ah Heng\nICCS IT 2000 ",
      "fen": "2baka3/1R1P5/4C1n2/p3n1p1p/2p6/P8/8P/B2r5/9/3AK4 w - - 0 1",
      "id": "puzzle_60",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG ZeWen - HO Sammy\nICCS IT 2000 ",
      "fen": "1rb1kab2/4a4/2n6/4p3p/2p3p2/2P1P4/P5R1P/2N1C1N1B/4K2R1/2cA1A3 b - - 0 1",
      "id": "puzzle_61",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - HU RongHua\nBGN World Xiangqi Challenge 2001 ",
      "fen": "3k1ab2/4a1N2/2n1b4/p8/4c4/4p1B1n/9/3C5/2C1A4/2BA1K3 w - - 0 1",
      "id": "puzzle_62",
      "title": "Mate in 1 move"
    },
    {
      "description": "QIU ShuiFa - LI ChengJie\nMalaysia Open 2001 ",
      "fen": "4kab2/4a4/4c4/4N3p/1R7/5r3/8P/9/4p4/3K5 b - - 0 1",
      "id": "puzzle_63",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Xuan - YANG YI\nChina Team Championship 2001 ",
      "fen": "2bak2n1/4ac3/4b4/p2N2C1p/6P2/5R3/8P/8C/3rAp3/4K1B2 b - - 0 1",
      "id": "puzzle_64",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Xuan - XUE WenQiang\nChinese National Champion 2001 ",
      "fen": "2b1ka3/4a4/4bc3/p3R3p/3P2P2/9/P7P/2NAB4/4KC1r1/2BA1rn1R b - - 0 1",
      "id": "puzzle_65",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Xuan - QIU Dong\nChinese National Champion 2001 ",
      "fen": "3a1k3/4a4/6n2/p1R1p3p/2PNP4/9/P7P/5N2B/4r4/2BrCK3 b - - 0 1",
      "id": "puzzle_66",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DianZhong - LIN HongMin\nChinese National Champion 2001 ",
      "fen": "9/1C2P1N2/2C2k3/p1n6/9/8p/9/1n3p3/4A4/c3K1B2 w - - 0 1",
      "id": "puzzle_67",
      "title": "Mate in 1 move"
    },
    {
      "description": "REN Jian - CAI Yi\nChinese National Champion 2001 ",
      "fen": "3k3r1/4P4/3P5/p3R3p/8c/3N2p2/3cP4/4B4/4K1n2/2BA1C3 w - - 0 1",
      "id": "puzzle_68",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG WangHou - HU RongHua\nWorld Xiangqi Championships 2001 ",
      "fen": "C3kab2/4a4/2n1b4/p1p1p3p/4c4/9/1n1r2p1P/4B3N/4A4/1R2KAB2 b - - 0 1",
      "id": "puzzle_69",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAI Chi Kong - WANG En Sen\nWorld Xiangqi Championships 2001 ",
      "fen": "4ka3/4a4/4b4/p1p6/2P5p/4P1R2/P7P/4N4/3r5/crBNKAB2 b - - 0 1",
      "id": "puzzle_70",
      "title": "Mate in 1 move"
    },
    {
      "description": "HOFFARTH Karsten - RAMO Juoni\nWorld Xiangqi Championships 2001 ",
      "fen": "3k1a3/4a4/7R1/5r2p/6b2/9/4C3P/B2Cn1N2/4A4/3AK4 w - - 0 1",
      "id": "puzzle_71",
      "title": "Mate in 1 move"
    },
    {
      "description": "LEI Kam Fun - TANAKA Atsushi\nWorld Xiangqi Championships 2001 ",
      "fen": "Cr1ak1b2/2R1aR3/5c3/p8/2p1P3p/9/P1P3n1P/2N1B4/4A4/2BA1K1c1 w - - 0 1",
      "id": "puzzle_72",
      "title": "Mate in 1 move"
    },
    {
      "description": "Graham Jones - YANG ShuangZheng\nWorld Xiangqi Championships 2001 ",
      "fen": "2bak4/4a4/4br2c/p3C3p/2C1cP3/9/P1P3n1P/B8/4A3R/R2A1KBr1 b - - 0 1",
      "id": "puzzle_73",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUNG Peter - LOW Gin Wan\nWorld Xiangqi Championships 2001 ",
      "fen": "4kab1C/9/2N2R3/5r3/2n5p/9/8P/4B4/9/3AKA3 w - - 0 1",
      "id": "puzzle_74",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG WenBin - NAEGLER Michael\nWorld Xiangqi Championships 2001 ",
      "fen": "2bN1k3/1R7/n2Nba3/p1p5p/3r5/9/P4n2P/4BC3/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_75",
      "title": "Mate in 1 move"
    },
    {
      "description": "REINDERS Rudolf - HUBER Siegfried\nWorld Xiangqi Championships 2001 ",
      "fen": "2ba1kb2/4a4/4P4/9/5c3/C3c4/P8/9/4A1n2/2BA1K3 b - - 0 1",
      "id": "puzzle_76",
      "title": "Mate in 1 move"
    },
    {
      "description": "HII Kong Ming - ZHANG Gao Yang\nWorld Xiangqi Championships 2001 ",
      "fen": "2baka3/9/4P4/9/2r6/3R2P2/8P/1p2BA3/3K1p3/9 w - - 0 1",
      "id": "puzzle_77",
      "title": "Mate in 1 move"
    },
    {
      "description": "Qian Guanghuang - YU ChiuKing\nWorld Xiangqi Championships 2001 ",
      "fen": "2bR5/5kN2/4ban2/4p2Cp/p8/4P4/P1n3P1P/5r3/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_78",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAI Chi Kong - ZHANG WangHou\nWorld Xiangqi Championships 2001 ",
      "fen": "2ba5/4a1N2/5k3/4C4/p3P4/3R5/P7P/9/r8/4K4 w - - 0 1",
      "id": "puzzle_79",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG ZiJun - WANG LinNa\nWorld Xiangqi Championships 2001 ",
      "fen": "3a1k3/4a1N2/9/9/3P5/9/P2n5/4B2C1/1n1KAp1c1/2B3N2 b - - 0 1",
      "id": "puzzle_80",
      "title": "Mate in 1 move"
    },
    {
      "description": "Thianchai SARINNAPHAKORN - YAMAZAKI Hideo\nWorld Xiangqi Championships 2001 ",
      "fen": "2c3R2/3k5/b2aN2r1/9/9/9/9/4B4/3K5/2B6 w - - 0 1",
      "id": "puzzle_81",
      "title": "Mate in 1 move"
    },
    {
      "description": "REINDERS Rudolf - WOOD peter\nWorld Xiangqi Championships 2001 ",
      "fen": "3k1ab2/2N1a4/4b4/8p/P8/5c1p1/3n2c1P/3CB1N2/4A4/2BA1K3 b - - 0 1",
      "id": "puzzle_82",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI QiJie - MA Jie\nIXPA IT 2001 ",
      "fen": "9/2C6/5k2b/p7p/4R4/P7P/6p2/B4A3/3CK4/3Ac2rc w - - 0 1",
      "id": "puzzle_83",
      "title": "Mate in 1 move"
    },
    {
      "description": "WONG Chi Keung - ZHANG ZhiMing\nIXPA IT 2001 ",
      "fen": "4k2C1/5R3/4bnN2/p7p/2P3b2/9/P5cN1/5p2B/3K5/1r3AB2 w - - 0 1",
      "id": "puzzle_84",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG ZhiYang - ZHANG Ming\nIXPA IT 2001 ",
      "fen": "2bakc1R1/4a4/4b4/5N2p/pn2C3P/9/P3P4/2r6/4A4/4KA3 w - - 0 1",
      "id": "puzzle_85",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU YongLiang - LI QiJie\nIXPA IT 2001 ",
      "fen": "2c1ka3/3R1cN2/3C5/p3C4/9/9/P2n1r2P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_86",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHOU YuPing - SU YongMing\nIXPA IT 2001 ",
      "fen": "5Rb2/3k5/4b4/2P5p/9/4p3P/2Nr3n1/4r4/4A4/4KA3 b - - 0 1",
      "id": "puzzle_87",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN ChongJi - TSE Richard\nIXPA IT 2001 ",
      "fen": "2ba1a3/4k4/b4P3/9/9/9/2nC5/9/4p4/3K5 b - - 0 1",
      "id": "puzzle_88",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIAO YanLi - WANG LinNa\nChina Team Championship 1996 ",
      "fen": "4kab2/4a4/2n1b4/p1N1p3p/9/2P6/P2rc3N/B2C1R3/1C7/R2AKAr1c b - - 0 1",
      "id": "puzzle_89",
      "title": "Mate in 1 move"
    },
    {
      "description": "xianliang - LAI Robin\nIXPA IT 2001 ",
      "fen": "4ka3/2CPa4/4N4/p8/9/4n4/4cp2P/4BA3/3K5/5AB2 w - - 0 1",
      "id": "puzzle_90",
      "title": "Mate in 1 move"
    },
    {
      "description": "SU ZhiYong - LIANG JunMing\nIXPA IT 2001 ",
      "fen": "2b6/4k1P2/9/3P5/3c5/9/9/5n3/9/3K5 b - - 0 1",
      "id": "puzzle_91",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN Zheng - MU XueDong\nIXPA IT 2001 ",
      "fen": "3ak4/4a4/bc2N1c2/5R2p/4p1pn1/2p6/P6rP/N1C2C3/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_92",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG XiangMing - LIU Qiang\nIXPA IT 2001 ",
      "fen": "2baN4/3k3C1/4b4/c7C/1n2p4/8P/9/4B4/4n4/2BAK4 w - - 0 1",
      "id": "puzzle_93",
      "title": "Mate in 1 move"
    },
    {
      "description": "YIN Jian - ZHANG Ming\nIXPA IT 2001 ",
      "fen": "1C2kabr1/4a4/c1n1b2c1/p1pRn3p/4C1p2/9/P3N1P1P/9/3R5/2rAKAB2 w - - 0 1",
      "id": "puzzle_94",
      "title": "Mate in 1 move"
    },
    {
      "description": "MU XueDong - CAI RongZhou\nIXPA IT 2001 ",
      "fen": "3k1ab2/4a1N2/3c5/C3c2Rp/2P1C4/9/P7P/9/4p4/2BK5 b - - 0 1",
      "id": "puzzle_95",
      "title": "Mate in 1 move"
    },
    {
      "description": "LOOK Kean Chor - WANG Bing\nIXPA IT 2001 ",
      "fen": "5a3/5k3/1r7/p6Rp/3cN2n1/9/P7P/4C4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_96",
      "title": "Mate in 1 move"
    },
    {
      "description": "FENG Jao - CHEN Qiu\nIXPA IT 2001 ",
      "fen": "5k3/4R4/5P2b/5N3/9/9/2P5P/3A5/4A4/2nK2B2 w - - 0 1",
      "id": "puzzle_97",
      "title": "Mate in 1 move"
    },
    {
      "description": "youyuxz - LU JianHong\nIXPA IT 2001 ",
      "fen": "P5b2/5k3/4b1N2/5C3/9/2B6/3n5/1n7/1C2p4/3K1pB2 b - - 0 1",
      "id": "puzzle_98",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG YiTing - XING WenYang\nIXPA IT 2001 ",
      "fen": "2bak4/R3a4/c8/p7p/4p1p2/2P6/P3N3P/R3C4/3r3n1/2B1KAB2 b - - 0 1",
      "id": "puzzle_99",
      "title": "Mate in 1 move"
    },
    {
      "description": "HONG Yun - WU Yi\nChina Team Championship 1997 ",
      "fen": "4kab2/4aR3/1cn1b4/p1p1p3p/6p2/2P6/P3P1P1P/C1N1C1N2/Rcr6/2BK1AB2 b - - 0 1",
      "id": "puzzle_100",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DianZhong - TANG ZhuoGuang\nPai Wei TV supper ranking Tournament 2001 ",
      "fen": "C3ka3/3R5/4b4/p8/2b4N1/P1B1npp2/4C4/Br7/3K4c/3A1c3 b - - 0 1",
      "id": "puzzle_101",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHUANG YuTing - WANG YueFei\nPai Wei TV supper ranking Tournament 2001 ",
      "fen": "2b2k3/3Na4/4b4/p5N2/9/4c3P/9/4BAn2/1n1K3C1/9 b - - 0 1",
      "id": "puzzle_102",
      "title": "Mate in 1 move"
    },
    {
      "description": "NEI TieWen - WANG Bin\nYinli Cup Champion 2002 ",
      "fen": "4R4/3k5/5a3/p8/4N1c2/4C4/P8/4B4/3c1r3/3K5 b - - 0 1",
      "id": "puzzle_103",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG Bin - Lv Qin\nYinli Cup Champion 2002 ",
      "fen": "2bakab2/9/9/p4R3/6p2/PNP6/9/3KBn2c/1r2C4/3A1AB2 b - - 0 1",
      "id": "puzzle_104",
      "title": "Mate in 1 move"
    },
    {
      "description": "KE YongQing - WANG Bin\nJiutian Xiangqi Master Championships 2001 ",
      "fen": "2bak2r1/4a4/4b1n2/p3pc2p/4r4/2CNn1BC1/PR4c1P/6N2/4A4/2BAK2R1 b - - 0 1",
      "id": "puzzle_105",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU PeiRan - CHEN ZhiJun\nChina Team Championship 1997 ",
      "fen": "2bak4/4a4/4N4/p3R3p/2P3p2/9/P2C2P1P/B8/1c4r2/c3K4 b - - 0 1",
      "id": "puzzle_106",
      "title": "Mate in 1 move"
    },
    {
      "description": "YU LiXing - WANG RenYing\nChina Team Championship 1997 ",
      "fen": "2bak4/4a4/4b4/P8/4c3N/4c4/P7P/4B4/C2rA4/2B1KA1C1 b - - 0 1",
      "id": "puzzle_107",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG NaiDong - DONG XuBin\nChina Team Championship 1997 ",
      "fen": "1P1k1a3/3c5/3ab4/3PC4/9/2P4p1/5p3/4B1n2/3CA4/3AK4 w - - 0 1",
      "id": "puzzle_108",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU TianLi - YANG GuanLin\nChinese National Champion 1980 ",
      "fen": "3a1ab2/1R7/3N1k3/p7p/2P2N3/9/P8/3KB1r1c/6p2/9 w - - 0 1",
      "id": "puzzle_109",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU RongHua - LIN HongMin\nExhibition 1975 ",
      "fen": "2bk1a2r/4a1N2/4b4/p3r3p/5N3/2B6/c3P3P/6C2/4A4/2BCKA3 w - - 0 1",
      "id": "puzzle_110",
      "title": "Mate in 1 move"
    },
    {
      "description": "DAI RongGuang - HU RongHua\nExhibition 1979 ",
      "fen": "3ak1b2/4aC3/5c3/1P1Nc4/9/5N3/7n1/4B4/4Ap3/2BAK4 b - - 0 1",
      "id": "puzzle_111",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DaHua - ZHAO GuoRong\nChinese National Champion 1978 ",
      "fen": "2ba5/4k4/4bP2C/2p6/8p/9/5n2P/2rA5/9/4KAR2 b - - 0 1",
      "id": "puzzle_112",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - LIU DianZhong\nChinese National Champion 1980 ",
      "fen": "4kab2/n3a4/4b2c1/p1P1CR1Np/4P4/4c2r1/Pr2N3P/4B4/3R5/2BAKA3 w - - 0 1",
      "id": "puzzle_113",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN FuJie - HUANG HaiLin\nBGN World Xiangqi Challenge 2002 ",
      "fen": "3k2b2/4P4/9/9/1N3Cn2/6B2/9/4B4/4c4/3AK4 w - - 0 1",
      "id": "puzzle_114",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - LIU DaHua\nKun Hua Cup  1984 ",
      "fen": "5kr2/2CRn4/4b2r1/p3p3p/9/9/P3P3P/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_115",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU TianHong - TANG ZhuoGuang\nJiafun Cup National Champion 1996 ",
      "fen": "2b6/4k4/5R3/8p/9/p8/5p2P/1r4N2/2n1CK3/c1BA1AB2 b - - 0 1",
      "id": "puzzle_116",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU RongHua - LI LaiQun\nChinese National Champion 1978 ",
      "fen": "3P1k3/4PN3/9/9/9/2B2n3/5p3/4p4/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_117",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU RongHua - FU GuangMing\nNational Games 1979 ",
      "fen": "2bk5/9/3N1a3/2Nc5/2n1n4/2B5P/4C4/3A5/9/3A1K3 w - - 0 1",
      "id": "puzzle_118",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG ZhengMing - JIN So\n ",
      "fen": "3k1ab2/5c3/5a2b/9/1P7/9/4Cn3/4B4/4AK3/2BA5 b - - 0 1",
      "id": "puzzle_119",
      "title": "Mate in 1 move"
    },
    {
      "description": "Lv Qin - LIU DaHua\nKun Hua Cup  1984 ",
      "fen": "5k3/3R5/5a3/3C5/9/9/c5P1P/4Cr3/1n1K5/3A2B2 b - - 0 1",
      "id": "puzzle_120",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU RongHua - LI LaiQun\nHe Zuo Yin Hang Cup 1990 ",
      "fen": "2b1kab2/4a4/9/2C1P2N1/2p5p/6R2/3n5/9/3K5/2B2rB1c b - - 0 1",
      "id": "puzzle_121",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN LiChun - WU YiWei\nChinese National sports 2002 ",
      "fen": "3k1ab2/4a1N2/4b4/8c/1P4n2/2n5p/4P4/4BA3/3C5/C3KAB2 w - - 0 1",
      "id": "puzzle_122",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI ZhongCheng - SUN YongZheng\nChina Team Championship 2002 ",
      "fen": "5ab2/1N1ka4/C3b4/4n2rp/6p2/P1Pc5/2r5P/4C1N2/4A4/2BAK3c w - - 0 1",
      "id": "puzzle_123",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG Fang - WU JuHua\nChina Team Championship 2002 ",
      "fen": "R2akab2/9/4b4/2C3R1p/2c6/6P2/4P3P/4B1N2/2p1K4/cC1r2B2 b - - 0 1",
      "id": "puzzle_124",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN YuYan - JIANG FengShan\nChina Team Championship 2002 ",
      "fen": "5a3/4a4/1n1k4C/2N1n4/3cN4/9/1c3p3/7CB/4A4/2BK1A3 w - - 0 1",
      "id": "puzzle_125",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Jun - ZHANG WenTong\nChina Team Championship 2002 ",
      "fen": "3k1ab2/4a4/b1n1c4/C5p2/2p6/3r2P2/P1P1N3P/8B/4A4/4KACR1 b - - 0 1",
      "id": "puzzle_126",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG Yukun - DU QiShun\nChina Team Championship 2002 ",
      "fen": "2ba1k3/2N1a4/3cb4/5r2p/p8/1C1R5/P3P3P/4B4/3pA4/c3KAB2 b - - 0 1",
      "id": "puzzle_127",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZONG YongSheng - LIN YiSheng\nChina Team Championship 2002 ",
      "fen": "4kab2/1N2a4/4b4/c4R1N1/3r5/P1P6/9/4B4/4K4/3A5 w - - 0 1",
      "id": "puzzle_128",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN YiSheng - LI Xuan\nChina Team Championship 2002 ",
      "fen": "1r1k1a3/n5N2/3a5/p1P5p/3N2p1c/3C5/P2n5/9/4A1c2/2BAK4 w - - 0 1",
      "id": "puzzle_129",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI XiangXiong - WAN YaoMing\nChina Team Championship 1984 ",
      "fen": "3a1k3/4an3/4Nr2b/8p/p1C6/4p1P2/8P/B7B/9/c3KA3 w - - 0 1",
      "id": "puzzle_130",
      "title": "Mate in 1 move"
    },
    {
      "description": "YUAN ZhongCi - KANG Hong\nChina Team Championship 2002 ",
      "fen": "C2k1a3/2N6/b4a3/4p3p/2p6/6C2/n5n1P/4BA3/4K4/c2A5 b - - 0 1",
      "id": "puzzle_131",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU FengJun - MA FengYou\nChina Team Championship 1984 ",
      "fen": "4k3C/4a4/4ba3/p3n4/9/2N4C1/P3P4/4BK3/2c1A4/3A5 w - - 0 1",
      "id": "puzzle_132",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG YuanQi - YAN YuSuo\nChina Team Championship 1984 ",
      "fen": "4ka3/4a4/5c3/5n2p/p1b6/1N7/P7P/4B4/4A1C2/4KAB2 w - - 0 1",
      "id": "puzzle_133",
      "title": "Mate in 1 move"
    },
    {
      "description": "MA NaiXuan - LIU DaHua\nChina Team Championship 1984 ",
      "fen": "3k1c3/4a4/5P3/R7p/9/8P/3r5/9/4K4/9 b - - 0 1",
      "id": "puzzle_134",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI RiChun - GAO MingHai\nChina Team Championship 1984 ",
      "fen": "3a1a3/5R2n/3k4r/p1N2cr1p/5N3/8P/P3P1P2/4B4/4A4/3AK2c1 w - - 0 1",
      "id": "puzzle_135",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAI JiaXian - SUN Qizhong\nChina Team Championship 1984 ",
      "fen": "3k5/4a4/4b4/4c4/2b6/4N4/9/4B1nCB/3p5/4KA3 b - - 0 1",
      "id": "puzzle_136",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG YuCai - NG Hak Lok\nChina Team Championship 1984 ",
      "fen": "C3kab2/3Ra4/2Ncb3n/6p1p/2n6/2B3P2/P7P/4r4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_137",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAO Chun - ZHAO Feng\nChina Team Championship 1984 ",
      "fen": "2ba1k3/2N1an3/2r1b4/p3p3p/5n3/P5R2/4Pc2P/B8/4AC3/3AK1B2 w - - 0 1",
      "id": "puzzle_138",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU YongJia - MA NaiXuan\nChina Team Championship 1984 ",
      "fen": "C3ka3/1RP6/3a5/9/9/4r4/8c/B8/5K3/2BA5 w - - 0 1",
      "id": "puzzle_139",
      "title": "Mate in 1 move"
    },
    {
      "description": "KANG Hong - HUANG BoLong\nChina Team Championship 1984 ",
      "fen": "3akab1C/9/9/9/P2P2p2/2R2p3/5n2P/3An4/3K5/2B2r3 b - - 0 1",
      "id": "puzzle_140",
      "title": "Mate in 1 move"
    },
    {
      "description": "SONG DaoXin - BU FengBo\nChina Team Championship 1984 ",
      "fen": "4kab2/2R1aR3/6N2/p7p/4p1P2/4cn3/P3r3P/5A3/3r5/5KB2 b - - 0 1",
      "id": "puzzle_141",
      "title": "Mate in 1 move"
    },
    {
      "description": "HONG LeiXin - CHEN MingSheng\nChina Team Championship 1984 ",
      "fen": "3akab2/4n4/4b4/3Nn3p/p3C4/9/8P/9/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_142",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI JiaHua - TANG FangYun\nChina Team Championship 1984 ",
      "fen": "3a1a2R/4k4/4nN3/9/9/8P/r8/B3B4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_143",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DaHua - CAO Lin\nChina Team Championship 1984 ",
      "fen": "5a3/5k3/3aP4/3N4p/6N2/9/9/3Ac4/2p6/4KAB2 w - - 0 1",
      "id": "puzzle_144",
      "title": "Mate in 1 move"
    },
    {
      "description": "BU FengBo - YAN MuJiang\nChina Team Championship 1986 ",
      "fen": "2ba1k3/4a4/9/2P1c3p/9/C3c4/P5r1P/5A3/1R3K3/2B2AB2 b - - 0 1",
      "id": "puzzle_145",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DianZhong - CAI FuRu\nChina Team Championship 1986 ",
      "fen": "3ak4/4a4/N3b2n1/4C3p/9/4N4/P4c3/2C5B/4A1n2/3A1K3 w - - 0 1",
      "id": "puzzle_146",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAO Lin - Lv Qin\nChina Team Championship 1986 ",
      "fen": "4kab2/4a4/4b4/p8/9/9/9/5n3/2CCp4/3K5 b - - 0 1",
      "id": "puzzle_147",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG XiaoPing - SHANG Wei\nChina Team Championship 1990 ",
      "fen": "2bak1b2/4a4/4R4/8p/7N1/9/8P/R2KB4/1rr1A4/5A3 b - - 0 1",
      "id": "puzzle_148",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIAO GeLian - XU JianMiao\nChinese National Champion 1990 ",
      "fen": "5N3/9/3k5/4P4/c5b2/9/9/5Kn2/9/4C4 w - - 0 1",
      "id": "puzzle_149",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZONG YongSheng - GAO MingHai\nChinese National Champion 1990 ",
      "fen": "9/2P6/b2k5/9/7Np/7n1/3n4P/3p1A3/3C5/4K1B2 w - - 0 1",
      "id": "puzzle_150",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - WAN ChunLin\nChinese National Champion 1990 ",
      "fen": "9/1c1k5/2N6/9/2b3b2/6B2/9/3A5/4C4/4K4 w - - 0 1",
      "id": "puzzle_151",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHU LiPing - ZHANG Yang\nChinese National Champion 1997 ",
      "fen": "2ba5/3Ca4/4ck2b/9/8p/2B4R1/P1n6/N2r5/4K4/5AB2 b - - 0 1",
      "id": "puzzle_152",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUO RuiXia - WU Xia\nChinese National Champion 1997 ",
      "fen": "2bak1b2/4a4/4rnn2/5N2p/2p6/4CC3/P2cP1p1P/9/1R7/2BAKAB2 w - - 0 1",
      "id": "puzzle_153",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HanFeng - CHI XinDe\nChina Team Championship 1991 ",
      "fen": "3a2b2/4k4/3ab4/p7p/2P6/9/PC2P1N2/2N3n1B/5p1c1/3K3c1 b - - 0 1",
      "id": "puzzle_154",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO YongLi - WANG GuoFu\nChina Team Championship 1991 ",
      "fen": "9/2r1a2R1/b1na1k3/p7p/2p2Nb2/9/P7P/3A5/9/2BAK4 w - - 0 1",
      "id": "puzzle_155",
      "title": "Mate in 1 move"
    },
    {
      "description": "TANG FangYun - JIN Bo\nChina Team Championship 1991 ",
      "fen": "2b1ka3/4a4/9/p3p3p/5r1P1/1NR2NR2/P3P4/B1c5B/3r5/1c3K3 b - - 0 1",
      "id": "puzzle_156",
      "title": "Mate in 1 move"
    },
    {
      "description": "YUAN HongLiang - CHEN Yu\nChina Team Championship 1991 ",
      "fen": "3k1ab1C/c3P2c1/1N7/4n4/9/9/4C4/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_157",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Bo - YIN GuangShun\nChina Team Championship 1992 ",
      "fen": "3a1k3/4arC1n/C8/p3p1P1p/1R7/9/P8/8B/4K4/2BA4c w - - 0 1",
      "id": "puzzle_158",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU Ming - LIU Bi Jun\nChina Team Championship 1992 ",
      "fen": "2bak1b2/4a4/4c4/9/6rR1/9/2R6/3CB3C/4A4/c1BAK4 b - - 0 1",
      "id": "puzzle_159",
      "title": "Mate in 1 move"
    },
    {
      "description": "GONG Qin - LI  XiaoQiu\nChinese National Champion 1992 ",
      "fen": "9/3k5/n8/4C4/6N2/9/n3p4/3A5/4p4/3K5 b - - 0 1",
      "id": "puzzle_160",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HanFeng - LI ZhiPing\nChina Team Championship 1993 ",
      "fen": "4kab2/4a4/4N4/9/9/2C3c2/5p2p/B3n4/2p1A4/3K1A3 b - - 0 1",
      "id": "puzzle_161",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HanHua - LIU Lu\nChina Team Championship 1993 ",
      "fen": "r3kab2/9/6N2/p1p5p/5R3/2P6/P2R4P/4r1c2/4A4/1cBAK4 w - - 0 1",
      "id": "puzzle_162",
      "title": "Mate in 1 move"
    },
    {
      "description": "QIU Hua - CHEN HuiXiang\nChina Team Championship 1993 ",
      "fen": "3cRa3/3C1k3/5a3/p8/2p3p1p/9/c1P5P/5r3/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_163",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUJinYao - DING JiXian\nChina Team Championship 1993 ",
      "fen": "3k1a3/4C4/9/p3c3p/3c2p2/9/P7P/4B1N2/2n1A4/3K1A3 b - - 0 1",
      "id": "puzzle_164",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAO JingNan - CHEN HuiXiang\nChina Team Championship 1993 ",
      "fen": "6RN1/4ak3/3a1r3/9/2b6/9/6p2/3A5/9/4K4 w - - 0 1",
      "id": "puzzle_165",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUN GuoPing - LI ShouQian\nChina Team Championship 1993 ",
      "fen": "3a2b1R/4a2R1/4bk3/p8/2p3P2/6c1P/5r3/B8/3K5/9 w - - 0 1",
      "id": "puzzle_166",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUO LiPing - HU Ming\nChina Team Championship 1994 ",
      "fen": "3N1ab2/1R1C5/3k5/2p6/2b1c4/5c3/9/3AB4/5K3/4r4 b - - 0 1",
      "id": "puzzle_167",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN Yu - GE WeiPu\nChina Team Championship 1994 ",
      "fen": "3aka3/3n5/5c3/p4N3/3PC4/2nC3p1/P8/2p5B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_168",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG LinNa - YUAN ZeLian\nChinese National Champion 1995 ",
      "fen": "C1cakab2/3r5/2N1bn3/4p3p/6p2/9/P3P1n1P/4B1N2/2C4c1/3AKAB2 w - - 0 1",
      "id": "puzzle_169",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHAN XiaLi - WU Xia\nChina Team Championship 1995 ",
      "fen": "3a2b2/4ak3/4N4/CR2cr3/9/P1P3p2/4n4/9/4A4/2B1K1B2 b - - 0 1",
      "id": "puzzle_170",
      "title": "Mate in 1 move"
    },
    {
      "description": "YU YouHua - HUANG ShiQing\nChinese National Champion 1986 ",
      "fen": "9/4R4/3k5/3N5/2b2C2p/6B2/6rnc/8B/4A4/4KA3 w - - 0 1",
      "id": "puzzle_171",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIANG Yanghong - SUN YongZheng\nChina Team Championship 1998 ",
      "fen": "3k2b2/4RR3/2C1b4/p3p3p/2pP5/P8/2P5P/9/1r6r/1cBcK1B2 b - - 0 1",
      "id": "puzzle_172",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHOU SongYun - XU WenHui\nChina Team Championship 1998 ",
      "fen": "4kab2/4a4/6n2/4p3p/2R6/6P2/P3P4/2N3R2/5r3/2BK1N1r1 b - - 0 1",
      "id": "puzzle_173",
      "title": "Mate in 1 move"
    },
    {
      "description": "Li Hong Jia - LI Xuan\nChina Team Championship 1998 ",
      "fen": "2ba3C1/4a3C/n1ck4c/p2nP4/1r7/3R5/P7P/N8/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_174",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI ZhongCheng - JIN YuYan\nChina Team Championship 1998 ",
      "fen": "3a1a3/4k4/2ncbN3/p1p1pnR1p/2b6/9/4P3P/B1C2CN1B/4A2r1/c3KA3 w - - 0 1",
      "id": "puzzle_175",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU ChengJie - WU KeXi\nChina Team Championship 1998 ",
      "fen": "2baka3/4n4/9/p3p3p/2Rc1r3/3C5/P3c3P/4B1n2/3pA1R2/4K1B2 b - - 0 1",
      "id": "puzzle_176",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIA Gang - ZHENG XinNian\nChina Team Championship 1999 ",
      "fen": "3k1ab2/1R2a4/4b4/p1p2P1Np/9/2P2rB2/P4c2P/5A2n/4A3C/4K3c b - - 0 1",
      "id": "puzzle_177",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN Hua - LIU JinBao\nChina Team Championship 1999 ",
      "fen": "4R1b1r/3k5/4bc3/1c1Np3p/6p2/2P6/3n2P1P/3CB4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_178",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG WenTong - CHANG Wanhua\nChina Team Championship 1999 ",
      "fen": "3aka3/9/4b4/4N4/2b1P1p2/C8/P1n4cp/9/4A4/2BK1A3 b - - 0 1",
      "id": "puzzle_179",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG LinNa - SHAN XiaLi\nChina Team Championship 1999 ",
      "fen": "4kc3/3raR3/4R3b/9/6p2/9/4P1n1P/6N2/3cA4/2BA1KB2 w - - 0 1",
      "id": "puzzle_180",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI ZhongCheng - DENG SongHong\nChina Team Championship 1999 ",
      "fen": "5k3/9/2N1R3n/p2r2p1p/4c4/6P2/P7P/B3C4/4A4/1r1AK1B2 w - - 0 1",
      "id": "puzzle_181",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHANG Wei - ZHANG Qiang\nChinese National Champion 1998 ",
      "fen": "r2k1ab2/1R7/3CbN3/C7p/9/9/P6rc/4B4/4A1n2/2BA1K3 w - - 0 1",
      "id": "puzzle_182",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIU Yu Kuen - WAN ChunLin\nChinese National Champion 1998 ",
      "fen": "3k1ab2/4a4/4b4/p3p3P/2p2c3/4c1B2/P1P6/N6C1/5N3/2BAKA3 b - - 0 1",
      "id": "puzzle_183",
      "title": "Mate in 1 move"
    },
    {
      "description": "KE YongQing - FU GuangMing\nChinese National Champion 1998 ",
      "fen": "7R1/5k3/2caNa3/3C4p/r6n1/2P6/8c/N3BA3/9/2BAK4 w - - 0 1",
      "id": "puzzle_184",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHUANG YuTing - WANG XiaoHua\nChinese National Champion 1998 ",
      "fen": "3k4C/4N4/1N2b4/p8/9/5p2p/n5n2/3A5/3KA1p2/2B6 w - - 0 1",
      "id": "puzzle_185",
      "title": "Mate in 1 move"
    },
    {
      "description": "GAN XiaoJin - CENG DongPing\nChina Team Championship 1989 ",
      "fen": "2ba3R1/8C/3k1a1R1/p3P3n/9/9/Pc2c3P/B3r4/3rA4/3NKA3 w - - 0 1",
      "id": "puzzle_186",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Kwong Lau - CHEN XiaoKun\nChinese National Champion 1978 ",
      "fen": "3aknN1C/9/8b/3N4p/p8/5c3/1n2p3P/B8/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_187",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAN MuJiang - XU TianLi\nChinese National Champion 1980 ",
      "fen": "2bCC4/4P3R/4bk3/p8/c4r1n1/9/4PpP1P/8B/4A4/2BcK4 w - - 0 1",
      "id": "puzzle_188",
      "title": "Mate in 1 move"
    },
    {
      "description": "SCHAEFER Nobert - LIONG Weng Heng\nWorld Xiangqi Championships 1997 ",
      "fen": "4ka3/4a4/9/p5R1p/4c1P2/3N5/P5n2/5K3/3CA1r2/3A5 b - - 0 1",
      "id": "puzzle_189",
      "title": "Mate in 1 move"
    },
    {
      "description": "BAKRA Anuar Bin - DING Wa Chong\nWorld Xiangqi Championships 1997 ",
      "fen": "4kab2/4C4/4b4/pP7/3C5/P3c3p/3n5/B1n1B4/4A4/4KA3 b - - 0 1",
      "id": "puzzle_190",
      "title": "Mate in 1 move"
    },
    {
      "description": "QUACH Anh Tu - KUMANO Kazunobu\nWorld Xiangqi Championships 1997 ",
      "fen": "2Ca5/4ak3/5c3/7R1/2b3p1p/1r7/6P1P/8N/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_191",
      "title": "Mate in 1 move"
    },
    {
      "description": "YANG JinXian - SCHAEFER Nobert\nWorld Xiangqi Championships 1997 ",
      "fen": "3ak4/1C2an3/9/p3r3p/2b3p2/2P6/c5P1P/B4AN2/7R1/c2K1AB2 w - - 0 1",
      "id": "puzzle_192",
      "title": "Mate in 1 move"
    },
    {
      "description": "NG Shiu Chin - Yu Kuai\nWorld Xiangqi Championships 1997 ",
      "fen": "2baka3/5N3/9/4P4/2b6/9/9/3n5/4p4/5K1N1 b - - 0 1",
      "id": "puzzle_193",
      "title": "Mate in 1 move"
    },
    {
      "description": "KASEMSUKSAMRAN Tavat - HU YunXi\nWorld Xiangqi Championships 1997 ",
      "fen": "1nbk1ab2/4a1C2/9/p1N6/9/6p2/P7P/4C4/4K4/2Br1AB2 w - - 0 1",
      "id": "puzzle_194",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG RongTa - SUN Qizhong\nChinese National Champion 1986 ",
      "fen": "2ba1a3/4k1N2/2n3C2/p3p3p/6R2/9/P3P3P/B3N4/5r3/2R1KArc1 b - - 0 1",
      "id": "puzzle_195",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHAN XiaLi - GANG QiuYing\nChina Team Championship 1999 ",
      "fen": "3k1ab2/4a4/9/p4R2p/2b6/2C1c1B2/P4p2P/N3B1n2/4AK3/3r5 b - - 0 1",
      "id": "puzzle_196",
      "title": "Mate in 1 move"
    },
    {
      "description": "TOLONEN Juoni - ZHENG YuTing\nWorld Xiangqi Championships 1997 ",
      "fen": "3k1ab2/4a4/4b3n/4Cc3/2c6/6P2/P1P1P3P/N3B4/4A1n1N/3A1KB2 b - - 0 1",
      "id": "puzzle_197",
      "title": "Mate in 1 move"
    },
    {
      "description": "LUO MinQing - KNG Ter Yong\nWorld Xiangqi Championships 1997 ",
      "fen": "C1Pak4/4a4/4b4/8p/6p2/9/P7P/2R1CK3/4r4/2Bc3r1 b - - 0 1",
      "id": "puzzle_198",
      "title": "Mate in 1 move"
    },
    {
      "description": "DANG Thanh Trung - NAEGLER Michael\nWorld Xiangqi Championships 1997 ",
      "fen": "3k3C1/4aP1N1/4b4/4n4/2b5P/8n/9/2p1B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_199",
      "title": "Mate in 1 move"
    },
    {
      "description": "SCHOLZ Stefen - ZHENG YuTing\nWorld Xiangqi Championships 1997 ",
      "fen": "4kabn1/4a4/4b4/p7p/6n2/1CP1p1B2/2c5P/2N6/4A4/2BAKN3 b - - 0 1",
      "id": "puzzle_200",
      "title": "Mate in 1 move"
    },
    {
      "description": "BAKRA Anuar Bin - LINDROOS Raimo\nWorld Xiangqi Championships 1997 ",
      "fen": "9/3nR4/b2c1k3/p2R2p1p/2P1p3n/2r6/P3P1r1P/4BCN2/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_201",
      "title": "Mate in 1 move"
    },
    {
      "description": "NASTASIO Davide - KUMANO Kazunobu\nWorld Xiangqi Championships 1997 ",
      "fen": "2b1kc3/1r1RaR3/4N4/p5p1p/2p6/P5r2/2P1P3P/9/2n1A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_202",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG JinCong - LI Bo\nHong Kong Team Champion 2001 ",
      "fen": "3k5/4P4/4b3b/p1N6/9/9/9/4B4/3nA4/3K2B2 w - - 0 1",
      "id": "puzzle_203",
      "title": "Mate in 1 move"
    },
    {
      "description": "YU JuWang - ZHANG JinCong\nHong Kong Team Champion 2001 ",
      "fen": "2b1ka1N1/4aP3/4b4/1R2c4/p1p5p/2n6/P8/3A1A3/3K5/6r2 b - - 0 1",
      "id": "puzzle_204",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIANG WeiQiang - ZHANG JiaHui\nHong Kong Team Champion 2001 ",
      "fen": "2b1ka3/3Ra4/n3R4/p3C3p/2p6/9/P1P1P3P/2N1B4/4A4/4KAr2 w - - 0 1",
      "id": "puzzle_205",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG GuoTai - YE WoSheng\nHong Kong Team Champion 2001 ",
      "fen": "2b2a3/2Rn3rC/3ak4/p4N3/1R7/6p2/P7P/4r4/4AKc2/3A5 w - - 0 1",
      "id": "puzzle_206",
      "title": "Mate in 1 move"
    },
    {
      "description": "DENG WeiDa - WU Qiang\nHong Kong Team Champion 2001 ",
      "fen": "2ba1ab2/5c3/r3kN2n/8p/9/p3C1P2/P3P3P/B8/9/3AKAB2 w - - 0 1",
      "id": "puzzle_207",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG JinCong - LIN DaMing\nHong Kong Team Champion 2001 ",
      "fen": "9/3k5/9/9/R8/9/P1n6/4B1C2/3r5/2B1NK3 b - - 0 1",
      "id": "puzzle_208",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAO ShuoZhang - WEN HuiQiang\nHong Kong Team Champion 2001 ",
      "fen": "2b4R1/1C1rak3/5a3/1N7/8p/2P6/4P3P/2n1B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_209",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHUANG WeiJi - ZHOU ZiDa\nHong Kong Team Champion 2001 ",
      "fen": "3rkab2/4a4/2n3c1n/8p/p1b1N1p2/4p4/P5P1P/2N1C4/9/1RBAKAB2 w - - 0 1",
      "id": "puzzle_210",
      "title": "Mate in 1 move"
    },
    {
      "description": "Liang Wei Qiang - YU JuWang\nHong Kong Team Champion 2001 ",
      "fen": "2P6/3ka1c2/5a3/1N7/p3C4/3N5/3nP2p1/9/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_211",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG JiaHui - HU ZhiWen\nHong Kong Team Champion 2001 ",
      "fen": "2bak1c2/4a4/4b4/R8/4p4/9/3rc4/4B4/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_212",
      "title": "Mate in 1 move"
    },
    {
      "description": "LU BaoCheng - ZHONG SHaoLiang\nHong Kong Team Champion 2001 ",
      "fen": "3ak4/4aP3/b3b1Nn1/4C4/9/1C7/9/3A5/4A4/1c2K4 w - - 0 1",
      "id": "puzzle_213",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI GuanHeng - HUANG XueQian\nHong Kong Team Champion 2001 ",
      "fen": "2baka3/9/9/3P5/9/2B6/9/2N1p1n2/3K3n1/3A5 b - - 0 1",
      "id": "puzzle_214",
      "title": "Mate in 1 move"
    },
    {
      "description": "DENG WeiDa - ZHANG ZhiFeng\nHong Kong Team Champion 2001 ",
      "fen": "5ab2/4ak3/2N6/p6Np/2p6/9/P5p1n/5A3/9/2BcK4 w - - 0 1",
      "id": "puzzle_215",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG JingYuan - Yu Kuai\nCanadian National Champion 2002 ",
      "fen": "3aka3/2r1nP3/5R3/p8/8p/9/8P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_216",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAO HanMing - JIANG Chuan\nChinese National Champion 2002 ",
      "fen": "3k1P3/4P3c/b2n5/9/9/9/9/5A3/4AC3/3K5 w - - 0 1",
      "id": "puzzle_217",
      "title": "Mate in 1 move"
    },
    {
      "description": "MO LaiJiu - GAO  Jin\nNew York vs Toronto Xiangqi Match 2002 ",
      "fen": "3a1k3/4a4/3c1Nr2/p8/9/2P4p1/4R4/4BA3/9/2BAKC3 w - - 0 1",
      "id": "puzzle_218",
      "title": "Mate in 1 move"
    },
    {
      "description": "WEN Chong Shang - MOK Mun Yew\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "3a5/4akN2/3cb4/4C4/3n1C3/9/3np4/B2A5/4A4/4K4 w - - 0 1",
      "id": "puzzle_219",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIENG Hie Mee - LE Thi Huong\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "4kab2/4a4/2c1b4/R3p4/c6rp/2pn5/4P3P/N2C2N2/4A4/2BAK1B2 b - - 0 1",
      "id": "puzzle_220",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHANG Shu Ying - ZHAO GuanFang\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "3ak1b2/4a4/4b4/2p5p/9/1NP6/8c/9/4AK1n1/9 b - - 0 1",
      "id": "puzzle_221",
      "title": "Mate in 1 move"
    },
    {
      "description": "Thianchai SARINNAPHAKORN - CHIN Boon Chin\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "2b1kab2/3R1R3/c8/p1r2r3/2p1C1p1p/9/P3P1P1P/4B1N2/1c7/3AKAB2 w - - 0 1",
      "id": "puzzle_222",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN QiMing - MIAO LiMing\nChinese National Champion 2002 ",
      "fen": "4kab2/4a4/3nb4/pr2CR3/9/2N1P2p1/P3c4/4B4/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_223",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIAO ErPing - ZHUANG YuTing\nChinese National Champion 2002 ",
      "fen": "1C1a5/2Cra4/1c1N1kn1b/4p3p/4c1p2/3n5/3R2P2/4B1N2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_224",
      "title": "Mate in 1 move"
    },
    {
      "description": "WAN ChunLin - TAO HanMing\nChinese National Champion 2002 ",
      "fen": "3k1NbC1/4R4/9/p7p/9/9/P3P3P/5A3/cr7/3nK4 b - - 0 1",
      "id": "puzzle_225",
      "title": "Mate in 1 move"
    },
    {
      "description": "DANG GuoLei - JIN HaiYing\nChinese National Champion 2002 ",
      "fen": "5k3/4ac3/b3Nan2/3R1C2p/7r1/2C6/P3P3c/4B4/4A1p2/3K1AB2 w - - 0 1",
      "id": "puzzle_226",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIN Boon Chin - HUANG HaiLin\nAsian xiangqi Championship 2002 ",
      "fen": "1rbakab2/5c3/2n6/p1p1p4/9/2P3P2/P3P3P/1CN1BC2B/4Nr3/R2AKA3 b - - 0 1",
      "id": "puzzle_227",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUN Chang Ching - WONG Chen Wei\nAsian xiangqi Championship 2002 ",
      "fen": "4kab2/4aC2n/4P4/6P1C/p8/5c3/5N3/B5n2/4A4/3AK3c b - - 0 1",
      "id": "puzzle_228",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIN Boon Chin - ZHANG Gao Yang\nAsian xiangqi Championship 2002 ",
      "fen": "2b1k4/4a4/2n1b4/p2Rp3p/2p6/4P1r2/P8/4K3c/4A4/3C1Ac2 b - - 0 1",
      "id": "puzzle_229",
      "title": "Mate in 1 move"
    },
    {
      "description": "TJHAI Tjie Kiang - CHIN Boon Chin\nAsian xiangqi Championship 2002 ",
      "fen": "r3kab2/4a4/n3b2c1/pNP3p1p/2rcN4/9/P2C2PnP/2p1C4/5R3/R1BAKAB2 w - - 0 1",
      "id": "puzzle_230",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG LinNa - ZHANG GuoFeng\nChina Team Championship 2003 ",
      "fen": "3aka3/6CC1/4b3b/3Nn4/7P1/p3P4/2c2n3/8B/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_231",
      "title": "Mate in 1 move"
    },
    {
      "description": "Juan Sanhez-Murtoinper - YU Bing\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3akab2/9/9/p1p5p/2b6/2P3P2/P1N5P/r8/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_232",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIE Jing - TORNQVIST Mikko\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3a1kb2/4a4/4bN3/4C3p/1P7/2B5c/9/9/9/3AKAB2 w - - 0 1",
      "id": "puzzle_233",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Yun - GUO ShuLong\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3akabr1/1R1P5/4C1R2/p7p/4p1p2/9/Pn1r2P1P/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_234",
      "title": "Mate in 1 move"
    },
    {
      "description": "Tero Riskula - LIU DongMing\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "2bakab2/9/2c5n/pr2p1p2/9/3R1cP2/P5N2/4B4/4AK3/R1BA4r b - - 0 1",
      "id": "puzzle_235",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HoiFan  - XU JianHua\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "9/4ak3/8b/9/5N3/6B2/9/9/4p4/3p1K3 b - - 0 1",
      "id": "puzzle_236",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU You Zhang - JIANG FengShan\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "4ka3/9/3PC4/p1p5p/6p2/2P6/P3N1n1P/3rBK3/7r1/c1RA1A3 b - - 0 1",
      "id": "puzzle_237",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUO ShuLong - TORNQVIST Mikko\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "2b3R2/7R1/2r2k3/p1p1p3p/1r3np2/9/P1P3P1P/4C4/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_238",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG FengShan - ZHENG ChuFang\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "5k1N1/4P4/b8/9/9/9/4c4/B7B/4K4/3A1A3 w - - 0 1",
      "id": "puzzle_239",
      "title": "Mate in 1 move"
    },
    {
      "description": "NG JunMing - HE GuoPing\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "4ka3/3Ra4/bR2b4/p7p/9/P7P/5r3/9/9/1cBCKAr2 b - - 0 1",
      "id": "puzzle_240",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHONG Heung Ming - SHOSHI Kazuharo\nWorld Xiangqi Championships 2003 ",
      "fen": "1c4b2/2N1a4/3kba3/9/3Cn4/9/9/5A3/4A4/4K4 w - - 0 1",
      "id": "puzzle_241",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUO LiPing - MEI Lin\nChinese National Champion 2003 ",
      "fen": "3rkab2/4a4/4b4/p4Rp2/4C3p/1c2P1P2/Pn6P/3AB4/4A4/5KB2 w - - 0 1",
      "id": "puzzle_242",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN FuJie - XIAO GeLian\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "R8/3ka4/2Nab4/8p/2b6/9/4P3P/9/4A4/4KArc1 w - - 0 1",
      "id": "puzzle_243",
      "title": "Mate in 1 move"
    },
    {
      "description": "NEI TieWen - CHEN XiaoKun\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "2ck5/3ra4/4P4/2P6/9/2B6/9/B4A3/4R4/4KA3 b - - 0 1",
      "id": "puzzle_244",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUN YongZheng - CAO Lin\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "9/4k1N2/b2P1P3/9/9/1p2n3C/9/9/4A4/c4K3 w - - 0 1",
      "id": "puzzle_245",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU ZhengWei - CHUN Zhong\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "3akn3/4a4/9/2C5p/3c5/4r4/P2pP4/B2A1K3/9/c4AB2 w - - 0 1",
      "id": "puzzle_246",
      "title": "Mate in 1 move"
    },
    {
      "description": "TONG BenPing - LI Qun\nGuan Nan Tang Gou Cup Xiangqi Championships 2004 ",
      "fen": "2ba1R3/4k1C2/1c7/p5N1p/6b2/9/P3P3P/2rAB4/2n1KC1n1/5AB2 w - - 0 1",
      "id": "puzzle_247",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG Chuan - HUANG HaiLin\nYe Shi  Bei Supper position Tournament 2003 ",
      "fen": "9/1N1ka4/4N4/9/9/4n4/9/9/9/2BA1KB2 w - - 0 1",
      "id": "puzzle_248",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - WANG Bin\nAn Qing Cup GM Champion 2003 ",
      "fen": "6b2/5k1N1/4b4/3R2p1p/1P6r/4C1P2/P2n5/4n4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_249",
      "title": "Mate in 1 move"
    },
    {
      "description": "OUYANG ChanJuan - HUA Rui\nChina Team Championship 2003 ",
      "fen": "3k1a3/9/1c1Nb4/2N6/3c5/9/P3C4/4BA3/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_250",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Jun - OUYANG ChanJuan\nChina Team Championship 2003 ",
      "fen": "7R1/2C2k3/3a1a3/p5P2/2pn5/5r3/Pn2c3P/4B4/4A4/3AK1B2 b - - 0 1",
      "id": "puzzle_251",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG Ding - LI WanZhen\nChina Team Championship 2003 ",
      "fen": "5a3/3k5/3a2NCn/p1p5p/1c7/2P3p2/P2R4P/8B/N1c6/3AKAB2 w - - 0 1",
      "id": "puzzle_252",
      "title": "Mate in 1 move"
    },
    {
      "description": "FENG XiaoXi - ZHANG WanYing\nChina Team Championship 2003 ",
      "fen": "2C1ka3/2R1a4/1C4nr1/1n2p1p1p/p8/9/P1P3P1P/2N6/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_253",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI WanZhen - HE Jing\nChina Team Championship 2003 ",
      "fen": "2b1kab2/4a4/1cn3n2/p1p1P1R1p/3rN1p2/2P6/P3c1P2/4CK2B/4r4/R1B6 b - - 0 1",
      "id": "puzzle_254",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG WanYing - LI Chao\nChina Team Championship 2003 ",
      "fen": "2bk5/1CN6/3ab4/p4R2p/6pn1/2B3P2/P3P1r1P/9/4AK3/3A4c w - - 0 1",
      "id": "puzzle_255",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI ShuYing - HUA Rui\nChina Team Championship 2003 ",
      "fen": "5abr1/3R5/CR1akcn2/p3p3p/2p3p2/9/c3P3P/N5N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_256",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG Min - ZHANG WanYing\nChina Team Championship 2003 ",
      "fen": "1R1nkab2/4a4/4c4/4C3p/p5p2/9/P3P1PrP/4C1N2/4A4/3K1cB2 w - - 0 1",
      "id": "puzzle_257",
      "title": "Mate in 1 move"
    },
    {
      "description": "GANG QiuYing - JIN HaiYing\nChina Team Championship 2003 ",
      "fen": "3a1kb2/9/4ba3/9/8P/2P6/9/1R2BNn2/5K3/3r2B2 b - - 0 1",
      "id": "puzzle_258",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU JuHua - ZHANG WanYing\nChina Team Championship 2003 ",
      "fen": "2b1Ra3/7R1/1r1kb4/p3C1r1p/6p2/4P4/P2p2P1P/4B1N2/9/3AKAB2 w - - 0 1",
      "id": "puzzle_259",
      "title": "Mate in 1 move"
    },
    {
      "description": "LUO ZhongCai - GAO PingGui\nChina Team Championship 2003 ",
      "fen": "3k5/2R1P4/3n5/3r4p/9/9/8P/4pA3/4A1n2/5KB2 w - - 0 1",
      "id": "puzzle_260",
      "title": "Mate in 1 move"
    },
    {
      "description": "PAN ShiQiang - CHI XiaoFang\nChina Team Championship 2003 ",
      "fen": "2ba1ab2/4k4/2R2N1c1/p1p1r3p/9/2P6/P7P/4r3B/3RA4/4KA3 w - - 0 1",
      "id": "puzzle_261",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG MingZhong - CHEN JianQuo\nChina Team Championship 2003 ",
      "fen": "3aR4/4rRr2/3ak1n2/4p1p1p/9/p5P2/n1P5P/N7B/4A4/2BA1K2c w - - 0 1",
      "id": "puzzle_262",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN WenXian - LU WeiTao\nChina Team Championship 2004 ",
      "fen": "3k2b2/4N4/3Pb4/6N2/9/3c5/5np2/4B4/4A4/3K5 b - - 0 1",
      "id": "puzzle_263",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG ChengQiang - XU Bin\nChina Team Championship 2004 ",
      "fen": "5k2C/4R2C1/4can2/p7p/2p6/9/2n5P/B8/4A4/c4K3 w - - 0 1",
      "id": "puzzle_264",
      "title": "Mate in 1 move"
    },
    {
      "description": "FENG GuangMing - CUI Yan\nChina Team Championship 2004 ",
      "fen": "C3k4/4a4/N3b4/8p/P1n6/2B6/4C4/3A1Kn2/6p2/3A3c1 b - - 0 1",
      "id": "puzzle_265",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Xian - SHI SiXuan\nChina Team Championship 2004 ",
      "fen": "2b2a1C1/3kaN3/2R6/p3p4/2p5c/9/2c1P3P/2r1B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_266",
      "title": "Mate in 1 move"
    },
    {
      "description": "TEO Sim Hua - WANG LinNa\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "4kab2/4a4/4bc3/8p/3N5/4C1B1P/2C6/2nAB4/3pA4/c3K4 b - - 0 1",
      "id": "puzzle_267",
      "title": "Mate in 1 move"
    },
    {
      "description": "KIOK Angie Tan - CHANG Diana\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "2bakab2/9/6n2/1Cp1n1p1p/4p4/2P6/P3P1P1P/6cR1/5r3/4KN3 b - - 0 1",
      "id": "puzzle_268",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIENG Ming Chuo - HO Li Pheng\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "C1bR2bn1/4R4/5k2r/8p/2p3p2/9/2P3P1P/B1N3N2/9/3AKAB2 w - - 0 1",
      "id": "puzzle_269",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG LinNa - KIOK Angie Tan\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "1Craknb2/4a2r1/4b4/p3C1Rcp/6p2/3R5/4P3P/6N1B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_270",
      "title": "Mate in 1 move"
    },
    {
      "description": "HA Mai Hoa - CHIENG Ming Chuo\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "CN1ck4/4a4/5a3/9/1P2N2n1/7p1/9/4B4/4A4/2B1K4 w - - 0 1",
      "id": "puzzle_271",
      "title": "Mate in 1 move"
    },
    {
      "description": "TEO Sim Hua - KIOK Angie Tan\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "4R4/3k5/2Pa1a2b/9/9/8P/9/3r5/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_272",
      "title": "Mate in 1 move"
    },
    {
      "description": "TEO Sim Hua - HO Li Pheng\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "R2a1a3/3k5/2P1b4/8p/9/2P1p3P/4r4/3CB4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_273",
      "title": "Mate in 1 move"
    },
    {
      "description": "KIOK Angie Tan - CHIENG Ming Chuo\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "3k1a3/4a4/4C4/p4c3/4c1nN1/8p/9/3AB4/4AK3/9 b - - 0 1",
      "id": "puzzle_274",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAI Tuan Anh - LING LeeKiong\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "6b2/1rN1R4/2C2k3/p3p4/c7p/9/P3P4/4B1n2/3K5/6B2 w - - 0 1",
      "id": "puzzle_275",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG Yang - CHEN FuJie\nChina National Xiangqi League 2003 ",
      "fen": "3P1k3/4P4/4b4/4n4/2b1C4/1C4B2/6p2/4BA3/4Ac3/3K5 w - - 0 1",
      "id": "puzzle_276",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZOU LiMu - ZANG RuYi\nChinese National Champion 1981 ",
      "fen": "4k1b2/1N2a4/3ab4/5P3/4C4/2B3B2/cC4n2/3A5/4p1n2/3A1K3 b - - 0 1",
      "id": "puzzle_277",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHAN XiaLi - HUANG ZiJun\nChinese National Champion 1981 ",
      "fen": "2c1kab2/4a4/n3b1N2/R4R2p/4n4/4C4/P3P3P/r3BK3/4A1r2/3A5 b - - 0 1",
      "id": "puzzle_278",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAO HanMing - JIANG ZhiLiang\nChina Team Championship 1990 ",
      "fen": "3k1ab2/4a1C2/NRn6/p1r5p/4p4/9/P6pP/6C1B/4ARnr1/2B1KA3 w - - 0 1",
      "id": "puzzle_279",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN Yu - ZHANG ShiXing\nChina Team Championship 1990 ",
      "fen": "2R2ab2/1N1k5/5a2n/p2n4p/4c2r1/2P6/P5P1P/4C1N2/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_280",
      "title": "Mate in 1 move"
    },
    {
      "description": "TONG BenPing - WU ZhengWei\nChina Team Championship 1990 ",
      "fen": "4ka3/4a3n/1nN1b3b/5N2p/2c6/6B2/9/4C4/5K3/2BA1A3 w - - 0 1",
      "id": "puzzle_281",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG Yong - SUN ShouHua\nChina Team Championship 1990 ",
      "fen": "3R2b2/2C2k3/3a5/N1p5p/3c5/2Pn5/P3P3P/3r3C1/4K4/2cA5 b - - 0 1",
      "id": "puzzle_282",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Xing - HUANG ZengGuang\nChina Team Championship 1990 ",
      "fen": "9/3k5/4R2c1/3P4p/2b3p2/3r5/4P3P/3AC1N2/9/3K1A3 w - - 0 1",
      "id": "puzzle_283",
      "title": "Mate in 1 move"
    },
    {
      "description": "KHOO Chin Chin - LIU Bi Jun\nAsian xiangqi Championship 2004 ",
      "fen": "4kab2/4a4/2n1bc3/3Rp3C/p8/2P2N3/4P4/N2Cn4/4A1c2/3K1A1r1 b - - 0 1",
      "id": "puzzle_284",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG Gao Yang - WU Kui Lin\nAsian xiangqi Championship 2004 ",
      "fen": "2baka3/9/4b4/p7R/6pC1/9/P1n3c1P/2N1r4/4C4/3AKA3 b - - 0 1",
      "id": "puzzle_285",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG XiaoPing - Cheng Junchao\nChinese National Champion 2004 ",
      "fen": "1C2k1C2/3Ra4/b8/4p3p/5r3/4P1Nc1/2P5P/2c6/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_286",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DianZhong - KE YongQing\nChinese National Champion 2004 ",
      "fen": "1R3a3/2P1a4/3kb3b/9/6p2/2p5r/9/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_287",
      "title": "Mate in 1 move"
    },
    {
      "description": "NEI TieWen - SUN YongZheng\nChinese National Champion 2004 ",
      "fen": "1R3a3/2P1a4/3kb3b/9/6p2/2p5r/9/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_288",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIE Kui - Cheng Junchao\nChinese National Champion 2004 ",
      "fen": "3ak1b2/4a4/c3b4/p1n2R2p/5R3/4C4/P3P3r/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_289",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DaHua - KE YongQing\nChina National Xiangqi League 2004 ",
      "fen": "C8/1N1k5/b4a3/3N5/2b1c4/9/2p6/9/4n4/5K3 w - - 0 1",
      "id": "puzzle_290",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN YuYan - ZHAO GuoRong\nChina National Xiangqi League 2004 ",
      "fen": "2bak1b2/1N2a4/5r3/p1PR5/4R4/7p1/Pn7/4B4/2c1A2c1/2N1KAB2 w - - 0 1",
      "id": "puzzle_291",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIE Jing - LIU DaHua\nChina National Xiangqi League 2004 ",
      "fen": "6b2/3kaR3/N1N2a3/p1p5p/2PP5/4C4/P5p1n/4B4/9/4KA1rc w - - 0 1",
      "id": "puzzle_292",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI XueSong - LIANG Jun\nChina National Xiangqi League 2004 ",
      "fen": "2na1a3/5R1C1/1c1kb4/p1pr4p/4p1p2/2P6/P3P3P/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_293",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN LiChun - ZHAO Yin\nCi Xi Xiang Xie Cup Master Champion 2004 ",
      "fen": "4k1b2/2P3C2/b2ac4/pR6p/5Nc2/6B2/P3P3P/1C7/4rn3/3K5 b - - 0 1",
      "id": "puzzle_294",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG Chuan - TAO HanMing\nQi Sheng Bei Supper position Tournament 2004 ",
      "fen": "9/3nP4/4bk3/6N2/9/9/9/3A5/9/4K4 w - - 0 1",
      "id": "puzzle_295",
      "title": "Mate in 1 move"
    },
    {
      "description": "HONG Zhi - WAN ChunLin\nQi Sheng Bei Supper position Tournament 2004 ",
      "fen": "9/4k4/5a3/8p/6P2/2B6/8P/3R1C3/1p1KA4/1cr2A3 b - - 0 1",
      "id": "puzzle_296",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN FuLu - ZHANG LiSheng\nJiangsu Province, the National Fitness Games 2004 ",
      "fen": "2bak1b2/4a4/9/p5p2/9/2P2n3/P3R2nP/3CB4/2N1A4/2BAKNr2 b - - 0 1",
      "id": "puzzle_297",
      "title": "Mate in 1 move"
    },
    {
      "description": "MIAO NaiZhu - GE WeiPu\nGuan Nan Tang Gou Cup Xiangqi Championships 2005 ",
      "fen": "2bak4/4ac3/4b4/p2rCR2p/1C7/2B6/P3P3P/1c7/4A4/3AK1B2 b - - 0 1",
      "id": "puzzle_298",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG Chuan - Lv Qin\nQi Sheng Bei Supper position Tournament 2004 ",
      "fen": "3a1k3/9/5a3/3P5/2b6/1n7/9/9/4p4/2BK1AB1N b - - 0 1",
      "id": "puzzle_299",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAVALLADE Carin - TEO Guimin\nWorld Xiangqi Championships 2005 ",
      "fen": "4ka3/4a4/4b4/pc2p3p/3N2b2/9/P3Pr3/4n2C1/4A1c2/3AK4 b - - 0 1",
      "id": "puzzle_300",
      "title": "Mate in 1 move"
    },
    {
      "description": "NGO Lan Huong - SCIMIDT Lan\nWorld Xiangqi Championships 2005 ",
      "fen": "3a2b2/1r3k3/1C2ba3/p2N4p/3P5/5RB2/8P/9/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_301",
      "title": "Mate in 1 move"
    },
    {
      "description": "YIN Anna - HUANG YuYing\nWorld Xiangqi Championships 2005 ",
      "fen": "2bC1k3/4a4/4b4/P7p/9/2B6/5C3/5A2B/1c1pA4/2c1K4 b - - 0 1",
      "id": "puzzle_302",
      "title": "Mate in 1 move"
    },
    {
      "description": "THIEN Fui Chuen - MATA Nicole Ta\nWorld Xiangqi Championships 2005 ",
      "fen": "r1baka1r1/9/7c1/p3C4/2bC2p1p/4P4/P5n1P/6N2/3R5/2BAKABR1 w - - 0 1",
      "id": "puzzle_303",
      "title": "Mate in 1 move"
    },
    {
      "description": "THIEN Fui Chuen - YIN Anna\nWorld Xiangqi Championships 2005 ",
      "fen": "4kab2/4a4/4b4/p4C3/2p3n2/P8/3R5/C8/1r2A3c/3K5 b - - 0 1",
      "id": "puzzle_304",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAVALLADE Carin - SOH Ying Ying\nWorld Xiangqi Championships 2005 ",
      "fen": "2bakab2/9/9/p1r5p/4ccp2/1C1p4P/P5P2/4BC3/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_305",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU CaiFang - MATA Nicole Ta\nWorld Xiangqi Championships 2005 ",
      "fen": "3R2br1/5k3/4b4/5N1c1/8p/9/4P3P/4C1N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_306",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG YuYing - LAVALLADE Carin\nWorld Xiangqi Championships 2005 ",
      "fen": "2bakab2/1R2n4/4R3c/p1p3p1p/4Cr3/2P1P4/3c2P1P/6N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_307",
      "title": "Mate in 1 move"
    },
    {
      "description": "NGO Lan Huong - PAIVI Walta\nWorld Xiangqi Championships 2005 ",
      "fen": "5a1r1/4rk3/4b4/p3n3p/2p1p4/3R5/P1P5P/1R4N2/4A4/2c1KAB2 w - - 0 1",
      "id": "puzzle_308",
      "title": "Mate in 1 move"
    },
    {
      "description": "TEO Guimin - MATA Nicole Ta\nWorld Xiangqi Championships 2005 ",
      "fen": "1Rr1kabr1/4a2cn/4b4/p3C1P1p/c2n5/7R1/4P3P/2C1B1N2/9/2BAKA3 w - - 0 1",
      "id": "puzzle_309",
      "title": "Mate in 1 move"
    },
    {
      "description": "GREGUS Laslo - ARTO Vaara\nWorld Xiangqi Championships 2005 ",
      "fen": "2bk1Cb2/4a3r/2n1c4/p7p/4P4/2B2RP2/P7P/C8/3rA4/2BAKR3 b - - 0 1",
      "id": "puzzle_310",
      "title": "Mate in 1 move"
    },
    {
      "description": "YANG Chounmyine - WU Kui Lin\nWorld Xiangqi Championships 2005 ",
      "fen": "2bakab2/4c4/9/p3p3p/6p2/2B1c4/P6NP/4C4/1n2N4/2BAKA2R b - - 0 1",
      "id": "puzzle_311",
      "title": "Mate in 1 move"
    },
    {
      "description": "TESSEN Joern - TROMBUTTON Andres\nWorld Xiangqi Championships 2005 ",
      "fen": "2baka3/4n4/4bc3/r4r1cp/p1P2R3/4C4/P3P3P/6C2/6R2/2BAKAB2 w - - 0 1",
      "id": "puzzle_312",
      "title": "Mate in 1 move"
    },
    {
      "description": "MACGREGOR Angua - HE ZhiMing\nWorld Xiangqi Championships 2005 ",
      "fen": "4ka3/9/3a2R2/p8/9/3Nc1pp1/8P/4B4/4Arn2/2BAK4 b - - 0 1",
      "id": "puzzle_313",
      "title": "Mate in 1 move"
    },
    {
      "description": "SIRCI Gianluca - LIU DianZhong\nWorld Xiangqi Championships 2005 ",
      "fen": "4ka3/9/3a2R2/p8/9/3Nc1pp1/8P/4B4/4Arn2/2BAK4 b - - 0 1",
      "id": "puzzle_314",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUBERTI Agostino - Lv Qin\nWorld Xiangqi Championships 2005 ",
      "fen": "3k1ab2/4a4/2R1b4/p2C4p/4p1p2/2P1c4/P2r4P/4C4/4A2n1/2B1KAB2 b - - 0 1",
      "id": "puzzle_315",
      "title": "Mate in 1 move"
    },
    {
      "description": "GOK Ulong - ARTO Vaara\nWorld Xiangqi Championships 2005 ",
      "fen": "9/R5N2/3kb4/p1p1p1p1p/9/6P2/5C2P/2N1B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_316",
      "title": "Mate in 1 move"
    },
    {
      "description": "HE ZhiMing - JUAN MingChao\nWorld Xiangqi Championships 2005 ",
      "fen": "2b1R4/5k3/4ba2N/4p3p/5n3/p4r2P/4P4/4B4/4A4/c3KAB2 w - - 0 1",
      "id": "puzzle_317",
      "title": "Mate in 1 move"
    },
    {
      "description": "MOULLIER Igor - YAMADA Hirohide\nWorld Xiangqi Championships 2005 ",
      "fen": "1r1a1kb2/4a4/b8/p5R1p/2p6/4P1P2/P1PN2c1P/2N1K2c1/5r3/1RB3B2 b - - 0 1",
      "id": "puzzle_318",
      "title": "Mate in 1 move"
    },
    {
      "description": "YOKOYAMA Eiiela - DEKKER Alian\nWorld Xiangqi Championships 2005 ",
      "fen": "1n1k1a3/4a1N2/9/p3nN2p/6b2/2P1C4/4P3c/3C5/4A4/2BAK1c2 w - - 0 1",
      "id": "puzzle_319",
      "title": "Mate in 1 move"
    },
    {
      "description": "FUNG Stephen - BAKRA Anuar Bin\nWorld Xiangqi Championships 2005 ",
      "fen": "4kab2/4a4/3cb1N1n/p1P2R3/3r1P2p/9/P7P/4C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_320",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUNG Peter - LIN Sen-Rong\nWorld Xiangqi Championships 2005 ",
      "fen": "3a1a3/2R3P2/3c1k3/p7p/5Nn2/6B2/P4r2P/5C3/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_321",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN FaZuo - LEE Michuel\nWorld Xiangqi Championships 2005 ",
      "fen": "3ak1b2/4a2C1/4c4/p3R3p/6p2/r8/6P2/4B3N/4K4/6B1c b - - 0 1",
      "id": "puzzle_322",
      "title": "Mate in 1 move"
    },
    {
      "description": "SIRCI Gianluca - MACGREGOR Angua\nWorld Xiangqi Championships 2005 ",
      "fen": "3rkab1r/4a4/2n1b4/p1N1p3p/6p2/2P5P/P3c1P2/2C1B2C1/1R2A4/1cBAK3R b - - 0 1",
      "id": "puzzle_323",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHOSHI Kazuharo - YOKOYAMA Eiiela\nWorld Xiangqi Championships 2005 ",
      "fen": "2ba1k3/4a1N2/4b4/p7p/4P4/3C5/c4C3/9/2n1A4/3K1AB2 w - - 0 1",
      "id": "puzzle_324",
      "title": "Mate in 1 move"
    },
    {
      "description": "JI ZhongQi - TROMBUTTON Andres\nWorld Xiangqi Championships 2005 ",
      "fen": "5kb2/3RP4/5cn2/p4N2p/9/5p3/P7P/4B4/4A4/3K1cB2 w - - 0 1",
      "id": "puzzle_325",
      "title": "Mate in 1 move"
    },
    {
      "description": "YOKOYAMA Eiiela - GREGUS Laslo\nWorld Xiangqi Championships 2005 ",
      "fen": "1nba1kb2/r3a4/5cn2/p1P3R1p/4CNp2/9/2c1P3P/5CN1B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_326",
      "title": "Mate in 1 move"
    },
    {
      "description": "WOOD peter - LA KhanhHoa\nWorld Xiangqi Championships 2005 ",
      "fen": "4kab2/4a4/2C1b4/9/3P1R1P1/9/9/1pn1B4/5K3/1cB5r b - - 0 1",
      "id": "puzzle_327",
      "title": "Mate in 1 move"
    },
    {
      "description": "ARNOUT  De Leeuw - MACGREGOR Angua\nWorld Xiangqi Championships 2005 ",
      "fen": "2b1ka3/3Ra4/4b4/p1N5p/4C4/2P6/P3Pp2P/9/4A4/3K1Arc1 w - - 0 1",
      "id": "puzzle_328",
      "title": "Mate in 1 move"
    },
    {
      "description": "ESCOFFIER Luc - SIRCI Gianluca\nWorld Xiangqi Championships 2005 ",
      "fen": "3k1a3/4aN3/6R2/4Cn3/3c4p/4pn3/P7P/2N6/3K5/3A1AB2 w - - 0 1",
      "id": "puzzle_329",
      "title": "Mate in 1 move"
    },
    {
      "description": "REINDERS Rudolf - FUNG Stephen\nWorld Xiangqi Championships 2005 ",
      "fen": "2bk1a3/4a4/4b4/9/P7p/2P2R3/8r/3AB4/5Nc2/2B1K4 b - - 0 1",
      "id": "puzzle_330",
      "title": "Mate in 1 move"
    },
    {
      "description": "GREGUS Laslo - ESCOFFIER Luc\nWorld Xiangqi Championships 2005 ",
      "fen": "4kabR1/4aN3/2n6/p4r2p/1cp3b2/6C2/P1P5P/2c1B4/4A4/1RBAK4 w - - 0 1",
      "id": "puzzle_331",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUBERTI Agostino - ARTO Vaara\nWorld Xiangqi Championships 2005 ",
      "fen": "9/3ka4/4c4/p7p/9/3r5/P7n/4B4/4A1R2/3RKAB2 b - - 0 1",
      "id": "puzzle_332",
      "title": "Mate in 1 move"
    },
    {
      "description": "TANAKA Atsushi - MOULLIER Igor\nWorld Xiangqi Championships 2005 ",
      "fen": "3k1a3/4ac3/3Nb4/p5n1p/9/1C2Cn3/3p4P/4B4/N3A2c1/2BAK4 w - - 0 1",
      "id": "puzzle_333",
      "title": "Mate in 1 move"
    },
    {
      "description": "GEREMY Xavier - SIRCI Gianluca\nWorld Xiangqi Championships 2005 ",
      "fen": "3a1anr1/6R2/2nk4c/p3C3p/4C1p2/3r5/4P3P/8B/5R3/2BAKA3 w - - 0 1",
      "id": "puzzle_334",
      "title": "Mate in 1 move"
    },
    {
      "description": "LEE Michuel - YE RongGuang\nWorld Xiangqi Championships 2005 ",
      "fen": "Cnba1R3/3ck1r2/9/p7p/2p6/5R3/P1c5P/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_335",
      "title": "Mate in 1 move"
    },
    {
      "description": "ARTO Vaara - SCHMIDT BRAUNS Joachim\nWorld Xiangqi Championships 2005 ",
      "fen": "2b1ka3/4a4/n3bc3/2R2R3/C8/P8/4P1P1P/9/2r1r4/3K5 b - - 0 1",
      "id": "puzzle_336",
      "title": "Mate in 1 move"
    },
    {
      "description": "YOKOYAMA Eiiela - LOW BoonNgee\nWorld Xiangqi Championships 2005 ",
      "fen": "2bk1ab2/4a4/9/p1p3p2/2P1C1P1p/4R4/P8/4B4/4A1rn1/2BA1K3 b - - 0 1",
      "id": "puzzle_337",
      "title": "Mate in 1 move"
    },
    {
      "description": "TROMBUTTON Andres - RAMO Juoni\nWorld Xiangqi Championships 2005 ",
      "fen": "1r1k1ab2/4a4/3Nb4/p3C1p2/3R4p/2p3P2/P3P3P/6N2/4An3/2cK1AB2 w - - 0 1",
      "id": "puzzle_338",
      "title": "Mate in 1 move"
    },
    {
      "description": "GEREMY Xavier - ESCOFFIER Luc\nWorld Xiangqi Championships 2005 ",
      "fen": "3R5/5k3/5a3/p7p/9/2B6/8n/c1n6/4A4/3AK1B2 b - - 0 1",
      "id": "puzzle_339",
      "title": "Mate in 1 move"
    },
    {
      "description": "ATLAN Olivier - MOULLIER Igor\nWorld Xiangqi Championships 2005 ",
      "fen": "3k1ab2/4R4/2naC4/3RnN2p/2r6/1p2P4/6p1P/4B4/9/2BAKA1r1 w - - 0 1",
      "id": "puzzle_340",
      "title": "Mate in 1 move"
    },
    {
      "description": "GOLLMAR Bastian - SIRCI Gianluca\nWorld Xiangqi Championships 2005 ",
      "fen": "3P1kbn1/4R4/4b1c2/p5R2/2p6/6p2/P1P2r2P/4C4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_341",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAM ShaoYi - ARNOUT  De Leeuw\nWorld Xiangqi Championships 2005 ",
      "fen": "2ba1k2r/4a1Nc1/n1c1b4/2p1p2Np/p8/2P6/P3P3P/2C1BC3/5R3/2BAKA3 w - - 0 1",
      "id": "puzzle_342",
      "title": "Mate in 1 move"
    },
    {
      "description": "ESCOFFIER Luc - ARTO Vaara\nWorld Xiangqi Championships 2005 ",
      "fen": "2bakab2/9/4c3C/p3p4/9/3r5/P7P/3Ar4/9/3K1AR2 b - - 0 1",
      "id": "puzzle_343",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAMADA Hirohide - GEREMY Xavier\nWorld Xiangqi Championships 2005 ",
      "fen": "2bak4/4a4/2n3c2/p1p1p1n1p/9/1rP2p3/P3c3P/1C2B4/4A2C1/1R2KAB2 b - - 0 1",
      "id": "puzzle_344",
      "title": "Mate in 1 move"
    },
    {
      "description": "MOULLIER Igor - SIRCI Gianluca\nWorld Xiangqi Championships 2005 ",
      "fen": "R2Ck4/1R7/7c1/8p/6p2/2B1r4/P1c3P1P/2N1B1N2/3r5/3AKA3 w - - 0 1",
      "id": "puzzle_345",
      "title": "Mate in 1 move"
    },
    {
      "description": "ARTO Vaara - LAU KeiCheong\nWorld Xiangqi Championships 2005 ",
      "fen": "1R1ak1b2/9/b2c5/p8/1n4r2/8p/P1p5P/3K1A3/9/2N2AB2 b - - 0 1",
      "id": "puzzle_346",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUNG Peter - MACGREGOR Angua\nWorld Xiangqi Championships 2005 ",
      "fen": "2ba1kbR1/r8/2n1cc3/p1R3N1C/2p6/4P4/P1r5P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_347",
      "title": "Mate in 1 move"
    },
    {
      "description": "RAMO Juoni - GEREMY Xavier\nWorld Xiangqi Championships 2005 ",
      "fen": "C2k1ab2/2R1a4/4b4/1rN6/2p6/5c2p/P3P3P/9/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_348",
      "title": "Mate in 1 move"
    },
    {
      "description": "ESCOFFIER Luc - JOUNI Tolonen\nWorld Xiangqi Championships 2005 ",
      "fen": "4kab2/1N2a4/3cb4/1R6p/2p1C4/4P4/2P3P1P/3K4c/r8/2BA1n3 b - - 0 1",
      "id": "puzzle_349",
      "title": "Mate in 1 move"
    },
    {
      "description": "GREGUS Laslo - RAMO Juoni\nWorld Xiangqi Championships 2005 ",
      "fen": "2R2Cb2/4k4/4c4/1r7/p8/4n4/6r2/4B4/4A4/2R1KAB2 w - - 0 1",
      "id": "puzzle_350",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAMADA Hirohide - ESCOFFIER Luc\nWorld Xiangqi Championships 2005 ",
      "fen": "2bR1a3/6R2/n3k1n2/p3p1p1p/2p6/9/P1P1c1r1P/Nr2C4/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_351",
      "title": "Mate in 1 move"
    },
    {
      "description": "ATLAN Olivier - SIRCI Gianluca\nWorld Xiangqi Championships 2005 ",
      "fen": "2Ca1ab2/4k4/n8/4p1Nn1/p1P5p/c5P2/4c4/N3B2r1/4A4/2BAKR1C1 w - - 0 1",
      "id": "puzzle_352",
      "title": "Mate in 1 move"
    },
    {
      "description": "GOLLMAR Bastian - LA KhanhHoa\nWorld Xiangqi Championships 2005 ",
      "fen": "9/3k5/2Na2N2/9/8P/p8/9/4K4/9/3r5 w - - 0 1",
      "id": "puzzle_353",
      "title": "Mate in 1 move"
    },
    {
      "description": "YOKOYAMA Eiiela - YAMADA Hirohide\nWorld Xiangqi Championships 2005 ",
      "fen": "1rbaka3/5NR2/9/pc6p/4p4/9/P3P3P/9/4A4/2rCKAB2 w - - 0 1",
      "id": "puzzle_354",
      "title": "Mate in 1 move"
    },
    {
      "description": "WOOD peter - GREGUS Laslo\nWorld Xiangqi Championships 2005 ",
      "fen": "r2aka3/n8/4N1n1r/p1C1p2Rp/2p3b2/9/2P3c1P/4C4/4A4/2BAK1BR1 w - - 0 1",
      "id": "puzzle_355",
      "title": "Mate in 1 move"
    },
    {
      "description": "ESCOFFIER Luc - MOULLIER Igor\nWorld Xiangqi Championships 2005 ",
      "fen": "1r2kab2/4a4/4b4/R2C4p/2p1c4/P2n5/2P5P/N3BC3/4r4/2BK3R1 b - - 0 1",
      "id": "puzzle_356",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAU KeiCheong - DEKKER Alian\nWorld Xiangqi Championships 2005 ",
      "fen": "2bakn3/4a4/3cb4/p3PN2p/1np1r4/9/P1P3p1P/2N1C4/5R3/2BAKAB2 w - - 0 1",
      "id": "puzzle_357",
      "title": "Mate in 1 move"
    },
    {
      "description": "YE RongGuang - SCHMIDT BRAUNS Joachim\nWorld Xiangqi Championships 2005 ",
      "fen": "5aC2/3k1P3/2na1rN2/p2R5/2bn5/3p5/8c/3CB4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_358",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN Sen-Rong - ARNOUT  De Leeuw\nWorld Xiangqi Championships 2005 ",
      "fen": "1rbak1b1r/4a4/nC4n2/2N1p1p1p/p1c3c2/9/P2R2P1P/4C1N2/4A4/1RBK1AB2 w - - 0 1",
      "id": "puzzle_359",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU TianHong - SONG GuoQiang\nChina National Xiangqi League 2005 ",
      "fen": "2bC1k3/4P4/5Nn2/2c6/9/7p1/9/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_360",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG Yang - XIE Jing\nChina National Xiangqi League 2005 ",
      "fen": "2N2a3/C4k3/3aP2c1/7n1/9/2B6/3p5/5A3/4A4/4K4 w - - 0 1",
      "id": "puzzle_361",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN FuJie - WAN ChunLin\nChina National Xiangqi League 2005 ",
      "fen": "4kab2/3P2P1C/4ba3/5c3/9/9/9/4BA2B/3KA4/9 w - - 0 1",
      "id": "puzzle_362",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - BU FengBo\nChinese National Champion 2006 ",
      "fen": "8c/3k5/4R4/p7p/4p4/7c1/P3Cr2P/4B4/3CA4/2BAK4 w - - 0 1",
      "id": "puzzle_363",
      "title": "Mate in 1 move"
    },
    {
      "description": "OUYANG Qilin - YU SiYuan\nChinese National Champion 2007 ",
      "fen": "4ka3/1N2an3/4Rc3/8p/5r3/p1P3C2/6P1P/4BA3/9/2B1KA3 w - - 0 1",
      "id": "puzzle_364",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO XinXin - LI XueSong\nChinese National Champion 2007 ",
      "fen": "3k1P1cC/9/1N7/p3p4/2bn2b2/P3P4/3c5/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_365",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG GuoFeng - ZHANG Mei\nChinese National Champion 2007 ",
      "fen": "3k1ab2/4a4/1c1Nb1n2/4C3p/6p2/9/3c4P/3CB4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_366",
      "title": "Mate in 1 move"
    },
    {
      "description": "NG Pual - WANG ZhongLiang\nCalgary Cup North America xiangqi Championship 2007 ",
      "fen": "3ak1b2/3na4/8n/p2N1c2C/5N3/9/P4p2P/2C6/9/2BAKABc1 w - - 0 1",
      "id": "puzzle_367",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG JingYuan - Ung Dau\nCalgary Cup North America xiangqi Championship 2007 ",
      "fen": "1r2ka3/4ac3/1CN1b4/p1p5p/9/2P6/P7P/2N1C4/4A4/n1BA1KB2 w - - 0 1",
      "id": "puzzle_368",
      "title": "Mate in 1 move"
    },
    {
      "description": "FONG William - TRUONG Wen\nCalgary Cup North America xiangqi Championship 2007 ",
      "fen": "2bk5/n3a4/3N1N1r1/2P5p/6b2/3c5/5R2P/3C5/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_369",
      "title": "Mate in 1 move"
    },
    {
      "description": "WOO WeiCheung - DEKKER Alian\nWorld Xiangqi Championships 2007 ",
      "fen": "1rb1R4/4R4/3k5/8p/2p1p4/6P2/P6cP/4B4/9/2BAKA1r1 w - - 0 1",
      "id": "puzzle_370",
      "title": "Mate in 1 move"
    },
    {
      "description": "BYWAY Paul - NG JunMing\nWorld Xiangqi Championships 2007 ",
      "fen": "3akab2/9/4b4/p3p4/8P/9/P1P2p3/N3K2RB/6r2/2B1nA3 b - - 0 1",
      "id": "puzzle_371",
      "title": "Mate in 1 move"
    },
    {
      "description": "TO Hung Tu - ARTO Vaara\nWorld Xiangqi Championships 2007 ",
      "fen": "1n3k3/9/b2N1a3/4N1P2/4C4/9/9/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_372",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAMAZAKI Hideo - ZHANG Zhang\nWorld Xiangqi Championships 2007 ",
      "fen": "6b2/4ak3/4ba3/3Cn4/p2PC4/4p4/P4n2P/2N1B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_373",
      "title": "Mate in 1 move"
    },
    {
      "description": "SOUR SAMPHY - SHOSHI Kazuharo\nWorld Xiangqi Championships 2007 ",
      "fen": "3ak4/4a4/4b4/R7p/6c2/2B1r1N2/2R3P1P/2n6/3rA4/2B1KA3 b - - 0 1",
      "id": "puzzle_374",
      "title": "Mate in 1 move"
    },
    {
      "description": "STERNMAN Olavi - TAN ZhenBang\nWorld Xiangqi Championships 2007 ",
      "fen": "3k1a3/4c4/4b4/4c4/2b3p2/9/9/8B/5p3/4K4 b - - 0 1",
      "id": "puzzle_375",
      "title": "Mate in 1 move"
    },
    {
      "description": "RAMO Juoni - HOFFARTH Karsten\nWorld Xiangqi Championships 2007 ",
      "fen": "2b2a2C/6R2/2nrka3/p8/2P6/9/P3N3P/4n4/5K3/2cA2c2 w - - 0 1",
      "id": "puzzle_376",
      "title": "Mate in 1 move"
    },
    {
      "description": "LEONG SioMan - CHEN FaZuo\nWorld Xiangqi Championships 2007 ",
      "fen": "3ckab2/nr2a4/6n2/2R1p1C1p/p1P3b2/5N3/P3P3P/1rNRB4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_377",
      "title": "Mate in 1 move"
    },
    {
      "description": "KNAB Reinhard - HAPCHINA Irimia\nWorld Xiangqi Championships 2007 ",
      "fen": "2C2a3/6R2/2nrka3/p7p/2P6/9/P3N3P/4n4/5K3/2cA2c2 w - - 0 1",
      "id": "puzzle_378",
      "title": "Mate in 1 move"
    },
    {
      "description": "STERNMAN Olavi - LYUU Yin San\nWorld Xiangqi Championships 2007 ",
      "fen": "3a1kb2/4a4/4b4/3R4R/6p2/2B5P/P8/6r2/5rn2/3AKA3 b - - 0 1",
      "id": "puzzle_379",
      "title": "Mate in 1 move"
    },
    {
      "description": "HAPCHINA Irimia - BYWAY Paul\nWorld Xiangqi Championships 2007 ",
      "fen": "3akab2/3C5/4b1c2/p3p4/9/3r5/6p1P/2R6/4A3N/r1B1KA2n b - - 0 1",
      "id": "puzzle_380",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN Wei TaT - DANG Thanh Trung\nWorld Xiangqi Championships 2007 ",
      "fen": "3aka3/9/4b4/5c1C1/5P3/9/9/4p4/5p3/3AK4 b - - 0 1",
      "id": "puzzle_381",
      "title": "Mate in 1 move"
    },
    {
      "description": "SOUR SAMPHY - KOAY Hean Hong\nWorld Xiangqi Championships 2007 ",
      "fen": "2bak4/4a4/2C1b4/4p3p/2p3P2/3RP4/9/C2KBr2c/4A4/5n3 b - - 0 1",
      "id": "puzzle_382",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG Hui Chuan - TAN Wei TaT\nWorld Xiangqi Championships 2007 ",
      "fen": "2b1kab2/4aR3/6N2/2p6/p7p/2P1R4/n3P1N1P/1r2B4/3rA4/2BAK4 w - - 0 1",
      "id": "puzzle_383",
      "title": "Mate in 1 move"
    },
    {
      "description": "MACGREGOR Angua - DEKKER Alian\nWorld Xiangqi Championships 2007 ",
      "fen": "5k3/3RP1N2/9/9/9/6p2/4r4/9/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_384",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Kui Lin - WOO WeiCheung\nWorld Xiangqi Championships 2007 ",
      "fen": "4ka3/4r4/7c1/p1R5p/2p1p4/P4N1C1/4n3P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_385",
      "title": "Mate in 1 move"
    },
    {
      "description": "MACGREGOR Angua - GOLLMAR Bastian\nWorld Xiangqi Championships 2007 ",
      "fen": "4ka3/4a4/4bPN2/3R5/p8/9/6r1P/n3C4/3K5/3A2B2 w - - 0 1",
      "id": "puzzle_386",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Qin - YAMAZAKI Hideo\nWorld Xiangqi Championships 2007 ",
      "fen": "2b3b2/5k3/9/5Pp2/8p/P1r1CRP2/4r3P/5N3/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_387",
      "title": "Mate in 1 move"
    },
    {
      "description": "GOLLMAR Bastian - STERNMAN Olavi\nWorld Xiangqi Championships 2007 ",
      "fen": "5kb2/4R4/5r3/p3N1p1p/9/3pC4/8P/9/4A4/3AK4 w - - 0 1",
      "id": "puzzle_388",
      "title": "Mate in 1 move"
    },
    {
      "description": "BETTS Nathalie - DIAN Fitry yani\nWorld Xiangqi Championships 2007 ",
      "fen": "5ab2/4k4/4ba3/6p2/9/9/3r1c3/5n3/3RA4/2BK5 b - - 0 1",
      "id": "puzzle_389",
      "title": "Mate in 1 move"
    },
    {
      "description": "YU Xiao Lan - WU Xia\nWorld Xiangqi Championships 2007 ",
      "fen": "2ba1k3/2c1a4/4b1n2/4p1p1p/p3c4/6P2/P7P/N2Rr3B/4NC3/3AKA1R1 b - - 0 1",
      "id": "puzzle_390",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHAN Chi Mui - CHIENG Ming Chuo\nWorld Xiangqi Championships 2007 ",
      "fen": "2bakab2/9/9/p8/7P1/P5B2/5pp2/2n5C/1n1KA4/5A1N1 b - - 0 1",
      "id": "puzzle_391",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU CaiFang - DIAN Fitry yani\nWorld Xiangqi Championships 2007 ",
      "fen": "5kb2/9/2N6/p8/3Ncrp2/P8/9/4B4/4A4/2B1KA1Rc b - - 0 1",
      "id": "puzzle_392",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHAN Chi Mui - BETTS Nathalie\nWorld Xiangqi Championships 2007 ",
      "fen": "4k1b2/4a3R/b2ac4/p5R1p/9/4C4/Pn2P1P1P/N3B2r1/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_393",
      "title": "Mate in 1 move"
    },
    {
      "description": "SZETO Howard - CHENG Richard\nNorth America  Cup Xiangqi Championship  2008 ",
      "fen": "2b3b1C/5R3/3k3c1/p3p1r2/2pP5/9/P1P5P/2N1C4/4A4/2BAK1c2 w - - 0 1",
      "id": "puzzle_394",
      "title": "Mate in 1 move"
    },
    {
      "description": "TRUONG Chanh Huynh - ZHANG YunFeng\nNorth America  Cup Xiangqi Championship  2008 ",
      "fen": "1r1k1abn1/3cP4/3N5/8p/1n4c2/4C4/p1p5P/4C3B/9/1NBAKA3 w - - 0 1",
      "id": "puzzle_395",
      "title": "Mate in 1 move"
    },
    {
      "description": "MA YunRun - TRUONG Chanh Huynh\nNorth America  Cup Xiangqi Championship  2008 ",
      "fen": "2bk2b2/1R2a4/5a3/p1p1C1c1p/c2N2N2/2P6/6r1P/8B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_396",
      "title": "Mate in 1 move"
    },
    {
      "description": "WEI DeSheng - \u6768\u4e0a\u6c11\nAsian xiangqi Championship 2008 ",
      "fen": "5ab2/3ka1c2/3rb4/1R6p/4p4/2P3P2/P3c3P/N3C4/4A2n1/R1BCK1B2 b - - 0 1",
      "id": "puzzle_397",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN QiMing - LIU YongYao\nAsian xiangqi Championship 2008 ",
      "fen": "3k1ab2/4c4/5a3/9/2b6/9/9/4B1nC1/5K3/6B2 b - - 0 1",
      "id": "puzzle_398",
      "title": "Mate in 1 move"
    },
    {
      "description": "FANG Lie - NG Chun Hei\nAsian xiangqi Championship 2008 ",
      "fen": "2bak4/4a4/4b4/4p4/8p/1NP6/4P3P/B5n2/4A2CN/3K2c2 b - - 0 1",
      "id": "puzzle_399",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG FengShan - LI ShaoGeng\nChina National Xiangqi League 2007 ",
      "fen": "2ba1C3/3k5/4bN3/p3C4/2c6/3c4P/P3P4/5A3/4A1n2/2BK5 b - - 0 1",
      "id": "puzzle_400",
      "title": "Mate in 1 move"
    },
    {
      "description": "NEI TieWen - YAN ChengLong\nChina National Xiangqi League 2007 ",
      "fen": "9/3Rak3/n4a3/p1p1C4/c1b3b1p/4r1B2/4P3P/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_401",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN YuYan - NEI TieWen\nChina National Xiangqi League 2005 ",
      "fen": "2bR5/4k4/3cca2b/p1pn1r2p/4p1C2/2P1P3P/P2R2P2/2NnC3N/4K4/2rA1AB2 b - - 0 1",
      "id": "puzzle_402",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI Yi - JIANG FengShan\nChina National Xiangqi League 2005 ",
      "fen": "5ab2/5k3/4b2P1/9/9/9/3Cc4/B1nCB4/4Ap3/4K4 b - - 0 1",
      "id": "puzzle_403",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN Bo - Cheng Junchao\nChina National Xiangqi League 2005 ",
      "fen": "3ak1b2/4a4/4b4/6c1R/9/2C6/9/B2nN4/4p4/2BK1A1r1 b - - 0 1",
      "id": "puzzle_404",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN YuYan - ZHAO GuoRong\nChina National Xiangqi League 2004 ",
      "fen": "2b1k1b2/1N2a4/5a3/p1PR5/4R4/7p1/Pn7/4B4/2c1Ar1c1/2N1KAB2 w - - 0 1",
      "id": "puzzle_405",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI XueSong - HUANG HaiLin\nChinese National Champion 2007 ",
      "fen": "4k4/2cPa3n/1C6c/7N1/4P4/9/9/3AB4/4A4/5KB2 w - - 0 1",
      "id": "puzzle_406",
      "title": "Mate in 1 move"
    },
    {
      "description": "MIAO LiMing - CAI Yi\nChinese National Champion 2005 ",
      "fen": "2ba5/4k4/b2a5/9/9/6B2/C8/3CB4/n3p4/3K5 b - - 0 1",
      "id": "puzzle_407",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG XiaoPing - Cheng Junchao\nChinese National Champion 2004 ",
      "fen": "1C2k1C2/3Ra4/b8/4p3p/5r3/4P1Nc1/2P5P/2c6/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_408",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUO LiPing - SHI JingJing\nChina Team Championship 2008 ",
      "fen": "1C3ab2/C4k3/N2R5/4p3p/p5pn1/9/P3P1r1P/4B4/4A4/1c2KAB2 w - - 0 1",
      "id": "puzzle_409",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO Li - DONG Fei\nChina Team Championship 2007 ",
      "fen": "4k4/1P2a4/9/9/6b2/6B2/6N2/1n7/6cN1/3K1p3 b - - 0 1",
      "id": "puzzle_410",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUO LiPing - CHENG SiMeng\nChina Team Championship 2007 ",
      "fen": "5k3/6N2/5a3/5R3/2p6/8r/4P3P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_411",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHENG SiMeng - ZHENG YiYing\nChina Team Championship 2007 ",
      "fen": "2bk1ab2/3ra4/2n5n/p1p1p1p1p/9/P1P4R1/4C1P1P/B3C4/4N4/3RKAB2 b - - 0 1",
      "id": "puzzle_412",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO XinXin - YAN WenQing\nChina National Xiangqi League 2008 ",
      "fen": "3k5/2n1P4/4bN3/2N6/2b6/6p2/5n3/3pB4/4A4/5KB2 w - - 0 1",
      "id": "puzzle_413",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHI XinDe - HAN DaYong\nChina Team Championship 2006 ",
      "fen": "2bak4/4a4/4b4/p3p3p/6p2/2P1P4/P7P/C2Cn4/1Rr1A4/3NKAR1c b - - 0 1",
      "id": "puzzle_414",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG ZhuFeng - WU Zhen\nChina Team Championship 2006 ",
      "fen": "5k3/4P1c2/5P3/9/2b3b2/1C7/9/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_415",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU JianBin - QIN Rong\nChina Team Championship 2006 ",
      "fen": "2b1k4/4C4/4b4/8p/9/4c1N2/4C4/B8/1n1pAn3/4KAB2 b - - 0 1",
      "id": "puzzle_416",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN Feng - CHEN TuJiong\nChina Team Championship 2006 ",
      "fen": "3akn3/4aR2c/b8/1N2P4/4p3p/2cp5/4P4/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_417",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU JianBin - ZHANG Wei\nChina Team Championship 2006 ",
      "fen": "2bk1P3/4a1R2/4b1N2/p2r4p/2p1c4/4p4/P8/3A5/3K5/5A3 b - - 0 1",
      "id": "puzzle_418",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN Feng - LI XiaoHui\nChina Team Championship 2006 ",
      "fen": "4k1P2/5P1C1/b7b/5n3/9/p1B2p3/9/B8/9/3K5 w - - 0 1",
      "id": "puzzle_419",
      "title": "Mate in 1 move"
    },
    {
      "description": "AI BaoHong - WU JunQiang\nChina Team Championship 2006 ",
      "fen": "3a1k2C/2C1a4/9/9/2b6/4P1P2/R1N1c3P/3AB4/4cr3/2BAK4 b - - 0 1",
      "id": "puzzle_420",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI ShouQian - HOU ZhaoZhong\nChina Team Championship 2005 ",
      "fen": "3akab2/9/4b4/9/9/4R4/9/B1p1n1R2/3K5/5rB2 b - - 0 1",
      "id": "puzzle_421",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG ZhuFeng - YANG Jian\nChina Team Championship 2005 ",
      "fen": "3k1C3/4a4/b8/3PP4/6b2/9/4N4/4cA2B/3p3c1/4KA3 b - - 0 1",
      "id": "puzzle_422",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAU VengTak - ZHONG Tao\nChina Team Championship 2005 ",
      "fen": "3k5/4a4/5a2b/1C2c3N/2C5p/4c4/8P/4B4/4Ap3/n2AK4 b - - 0 1",
      "id": "puzzle_423",
      "title": "Mate in 1 move"
    },
    {
      "description": "CUI Yan - FENG GuangMing\nChina Team Championship 2005 ",
      "fen": "2bC1k3/4P4/4nN3/9/5c3/9/9/5A3/9/3K5 w - - 0 1",
      "id": "puzzle_424",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG NaiDong - LIANG FuChun\nChina Team Championship 2005 ",
      "fen": "2bn2c2/3ka4/4Pa3/4cN3/p5b2/3C5/PC7/5A3/9/2BAK4 w - - 0 1",
      "id": "puzzle_425",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAN ChengLong - HUANG ZhuFeng\nChina Team Championship 2005 ",
      "fen": "9/5k3/4Ca3/p2c5/9/3N3R1/P3P3P/3rBn3/4K4/9 b - - 0 1",
      "id": "puzzle_426",
      "title": "Mate in 1 move"
    },
    {
      "description": "SONG ShiJun - CHI XinDe\nChina Team Championship 2005 ",
      "fen": "1Cba1k3/4P2R1/4ba3/p7p/4p1p2/9/4c1c1P/4Br3/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_427",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG XiaoPing - CAI ZhongCheng\nJufeng Cup Xiangqi MasterNational Championships 2000 ",
      "fen": "2bak4/4a4/4bc3/p3C4/9/2PN5/P3P1n2/1CN5R/4K2c1/2BA1r3 b - - 0 1",
      "id": "puzzle_428",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG GuoFeng - HU Ming\nWest Lake Cup National Xiangqi Championship 2002 ",
      "fen": "2b1ka3/4a4/4b4/p7p/4P4/5NR2/P7P/4B4/1R1K5/2r1r4 b - - 0 1",
      "id": "puzzle_429",
      "title": "Mate in 1 move"
    },
    {
      "description": "Lv Qin - BU FengBo\nXianglong Cup xiangqi Tournament 2000 ",
      "fen": "3a5/3nakN2/1c2b4/p2cp3p/6b2/P4C3/2N1P3P/4B4/7C1/2BAKA3 w - - 0 1",
      "id": "puzzle_430",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DaHua - LIU DianZhong\nXianglong Cup xiangqi Tournament 2000 ",
      "fen": "5Rb2/3k5/b7n/p2Nr1p1p/2p6/6P2/P1P5P/4C4/3rA4/3CKAB2 w - - 0 1",
      "id": "puzzle_431",
      "title": "Mate in 1 move"
    },
    {
      "description": "OUYANG ChanJuan - LI DeLing\nXianglong Cup women's 12-strong tournament 2001 ",
      "fen": "2C1k4/4a4/2N1c4/9/2b6/4n4/1n1p5/4B4/3CA4/3K1AB2 w - - 0 1",
      "id": "puzzle_432",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU ZongZe - JIANG Chuan\nEarth Cup xiangqi tournament 2008 ",
      "fen": "4kab2/4a4/4b4/8C/4p4/7N1/4P2RP/r8/4K4/3n1A2c b - - 0 1",
      "id": "puzzle_433",
      "title": "Mate in 1 move"
    },
    {
      "description": "NGUYEN Vu Quan - HUANG BiFu\nAsian xiangqi Championship 2008 ",
      "fen": "5k3/4P4/3N5/8p/9/8P/5n3/3n5/4C4/2BA1KB2 w - - 0 1",
      "id": "puzzle_434",
      "title": "Mate in 1 move"
    },
    {
      "description": "Du GuangWei - \u5c71\u7530\u6d2a\u79c0\nAsian xiangqi Championship 2008 ",
      "fen": "1R1akab2/2NR5/2r6/p7p/4p4/P5p2/4P1c1P/4B1n2/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_435",
      "title": "Mate in 1 move"
    },
    {
      "description": "QIU Liang - YANG weiJun\nAsian xiangqi Championship 2008 ",
      "fen": "C4k3/4a4/4b4/1C4N2/9/9/P5c2/8B/4K4/5cB2 w - - 0 1",
      "id": "puzzle_436",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAMAZAKI Hideo - SOUR Samphy\nAsian xiangqi Championship 2008 ",
      "fen": "3R1a3/5c3/2N2k3/2N6/5P3/9/8P/4BA3/5Kn2/2B1r4 w - - 0 1",
      "id": "puzzle_437",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI ShenWan - YAMAZAKI Hideo\nAsian xiangqi Championship 2008 ",
      "fen": "4ka3/4a4/4b4/p3p1P1p/4r1b2/2B6/1C7/1Cn2R3/4A4/c3KAB2 b - - 0 1",
      "id": "puzzle_438",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHOSHI Kazuharo - HUANG MinSheng\nAsian xiangqi Championship 2008 ",
      "fen": "C5b2/1N1k5/5a3/4R1p1p/9/2P3P2/P3P3r/4n4/4A4/4KACc1 w - - 0 1",
      "id": "puzzle_439",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIANG ChungHao - CENG XianWei\nAsian xiangqi Championship 2008 ",
      "fen": "C3kab2/4ac3/2N6/2P5p/4P1pn1/9/P2r2P1c/3C5/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_440",
      "title": "Mate in 1 move"
    },
    {
      "description": "SONG GuoQiang - LIU DianZhong\nChinese National Champion 2000 ",
      "fen": "Cr7/4R4/2R1bk3/2p5p/9/1NP1C4/P1c1c3P/5rn1B/9/2BAK4 b - - 0 1",
      "id": "puzzle_441",
      "title": "Mate in 1 move"
    },
    {
      "description": "BUA BinBin - JIN HaiYing\nChinese National Champion 2000 ",
      "fen": "2b1ka3/4a4/1N2b4/8p/P1P2R3/9/9/3n1A3/4r4/5K3 b - - 0 1",
      "id": "puzzle_442",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU TianLi - BU FengBo\nExhibition 1988 ",
      "fen": "2ba1a2R/2N1k2n1/4b4/2PR5/6p2/9/4P1P1P/9/3r1r3/c1BAK4 b - - 0 1",
      "id": "puzzle_443",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN HaiYing - ZHANG GuoFeng\nChina Team Championship 2002 ",
      "fen": "2ba1k3/4a4/4b4/9/pc2N3P/6B2/P2n5/2C6/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_444",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUO JiPing - WU ShuYing\nChina Team Championship 1984 ",
      "fen": "2Rckab2/1nC1a1r2/r3b1n1c/p7p/3R2p2/9/P7P/4C1N1B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_445",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG JinGang - WU ShuYing\nChina Team Championship 1984 ",
      "fen": "3ak1b2/4a4/5R3/pRN5p/6p2/3n5/P7P/3nrA3/9/5K3 b - - 0 1",
      "id": "puzzle_446",
      "title": "Mate in 1 move"
    },
    {
      "description": "CENG Li - ZHENG XiangFu\nXiangqi Fans Cup National Tournament 1995 ",
      "fen": "2bakab2/9/6n2/p3p1p1p/9/2B2NP2/P3R3P/C3CK3/4n2r1/3r5 b - - 0 1",
      "id": "puzzle_447",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHUANG YuTing - ZHENG YiHong\n ",
      "fen": "4kab2/1N3P3/6N2/9/8p/9/2n6/9/4n4/2BA1K3 w - - 0 1",
      "id": "puzzle_448",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZUO WenJing - HE Jing\nBeilun Cup National xiangqi Master Championship  2008 ",
      "fen": "2Cc3R1/2r1kr3/4b4/8p/9/2p6/4P4/2c6/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_449",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9a6c\u56fd\u680b - \u65b9\u5cb3\u5efa\nChinese National Champion 1974 ",
      "fen": "r1b1kab2/4a1c2/4c4/p1p4Rp/3P3n1/9/P1Pn2P1P/2NC2N2/7r1/R1BAKAB2 b - - 0 1",
      "id": "puzzle_450",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN ShuLan - SHAN XiaLi\nNational Games 1979 ",
      "fen": "2bakab2/5r3/1cn3n2/p1p1p3p/3R5/2P6/P3P3P/C3C1N2/4N1r2/1RBAKABc1 b - - 0 1",
      "id": "puzzle_451",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHAN XiaLi - DAI Rong\nChinese National Champion 1981 ",
      "fen": "r3kab2/3naR3/1c2b4/p1p1p3p/5Ncr1/2P3pC1/PC2P3P/9/4Nn1R1/2BAKAB2 b - - 0 1",
      "id": "puzzle_452",
      "title": "Mate in 1 move"
    },
    {
      "description": "DONG Bo - CHEN YiLan\nChinese National Champion 1985 ",
      "fen": "2ba1kb2/4a4/2R6/p3C1p2/4r3p/1NPR5/P3c1P1P/5C3/4A2r1/2BK1ABc1 w - - 0 1",
      "id": "puzzle_453",
      "title": "Mate in 1 move"
    },
    {
      "description": "DAI Rong - DONG Bo\nChinese National Champion 1985 ",
      "fen": "1r2ka3/4a4/bcn1c4/pRCrn1R1C/4p1p2/2P6/P3P1P1P/N3B1N2/9/2BAKA3 w - - 0 1",
      "id": "puzzle_454",
      "title": "Mate in 1 move"
    },
    {
      "description": "GAO Hua - DAI Rong\nChina Team Championship 1985 ",
      "fen": "2b2kb2/3R5/2C1na2c/p3C3p/1r7/2P4r1/P3P1p1P/6N2/5R3/2BAKAB2 w - - 0 1",
      "id": "puzzle_455",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIE SiMing - TAN Lifang\nAsian xiangqi Championship 1982 ",
      "fen": "r1bakaR2/4nR3/2n6/p1p1p3p/9/6P2/P7P/1r2c1N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_456",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHENG Kah Siong - TANAKA Atsushi\nAsian xiangqi Championship 2006 ",
      "fen": "3ak2r1/4a4/2C1b4/p3C3p/2p6/5R3/c3P1rcP/N3B4/4A1n2/3K1ABR1 w - - 0 1",
      "id": "puzzle_457",
      "title": "Mate in 1 move"
    },
    {
      "description": "DIAN Fitry yani - CHEN LiChun\nAsian Xiangqi Individual Championships 2007 ",
      "fen": "2baka3/9/3Rb1n2/p3p1p1p/1C7/9/P1PpP1P1P/N3r4/3KN4/2B2r3 b - - 0 1",
      "id": "puzzle_458",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG ZiJun - LIANG Yuexia\nGuangzhou,Hong kong,Macau Match 1985 ",
      "fen": "2bak4/4a4/4Rrc1n/p3p1p1p/9/PN7/2c1P1P1P/2C3N2/9/2BAKABR1 w - - 0 1",
      "id": "puzzle_459",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZANG RuYi - Lv Qin\nDu Hung Cup 1983 ",
      "fen": "4k4/3P1P3/b3Na2b/9/8c/9/9/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_460",
      "title": "Mate in 1 move"
    },
    {
      "description": "MINARTA Ifan - Lv Qin\nAsian Xiangqi Individual Championships 1985 ",
      "fen": "C1bak4/3Na4/4b4/7R1/6r1p/2B6/P3P3P/1c1A1n3/4K4/3n1AB2 b - - 0 1",
      "id": "puzzle_461",
      "title": "Mate in 1 move"
    },
    {
      "description": "Lv Qin - XU YinChuan\nYinli Cup Champion 1999 ",
      "fen": "2bak4/1Cc2P3/4ba3/p2n1C2p/3Nc4/P8/9/9/5K3/2BA1A3 w - - 0 1",
      "id": "puzzle_462",
      "title": "Mate in 1 move"
    },
    {
      "description": "Lv Qin - YAN WenQing\nPearl Star Cup 16 tournament 2002 ",
      "fen": "4ka3/4a4/9/R7p/6b2/9/2P1P3P/cr1CK2R1/3rA3N/6B2 b - - 0 1",
      "id": "puzzle_463",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN RongXing - WAN QiYou\nNA NA ",
      "fen": "3R2R2/4k4/4c4/p1p5p/9/6B2/P1P5P/9/3r5/1NBAKA1r1 w - - 0 1",
      "id": "puzzle_464",
      "title": "Mate in 1 move"
    },
    {
      "description": "DANG GuoLei - HU Ming\nNA 2004 ",
      "fen": "4kab2/4a4/1c2b4/p3C4/1R7/3r5/P4n2P/2n1B1p1N/5K2C/5AB2 b - - 0 1",
      "id": "puzzle_465",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG Yang - HONG Zhi\nBuilding Materials City Cup National Championships 2005 ",
      "fen": "1N1k5/1n2P4/9/3c5/p8/2B6/P8/5p2B/9/4KA3 w - - 0 1",
      "id": "puzzle_466",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5415\u6ca7\u6d77 - HENKE Simon\nPao Yueng Cup 1991 ",
      "fen": "2n1kab2/4a4/b8/p1PR5/1R4p2/9/4Pc2P/3KC1N1B/4Ac3/r4A3 w - - 0 1",
      "id": "puzzle_467",
      "title": "Mate in 1 move"
    },
    {
      "description": "YUEN Shu Sen - DER Lawrence\nPao Yueng Cup 1991 ",
      "fen": "2b2ab2/4k4/r1cR5/p7p/9/4C1B2/P3P3P/4C4/4A4/3AK2c1 b - - 0 1",
      "id": "puzzle_468",
      "title": "Mate in 1 move"
    },
    {
      "description": "HENKE Simon - LIN GuanHao\nPao Yueng Cup 1991 ",
      "fen": "2b1kab2/4a4/6n2/p2Np3p/3P5/3c5/P4p2P/2C1C2R1/5rr2/R1BAKAB1c b - - 0 1",
      "id": "puzzle_469",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAO HanMing - XU YinChuan\nYinli Cup Champion 1995 ",
      "fen": "2bc1kb2/9/3ac4/6p1p/2p3P2/9/1CP5P/N3B4/4Ar3/2B1K2R1 b - - 0 1",
      "id": "puzzle_470",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI QingQuan - LIU ShouPeng\nNA NA ",
      "fen": "3a1N3/9/3k5/8p/4R4/3r1p3/4P1c1P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_471",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Gui - ZENG ZhanXiong\nNA NA ",
      "fen": "4ka3/9/b5P2/9/9/9/9/5R3/5K3/3nr4 b - - 0 1",
      "id": "puzzle_472",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8def\u6613\u6b27 - LEE Kah Kheng\n ",
      "fen": "4kab2/4a4/2c1b4/p7p/4P4/2P6/P7P/n3B4/3rA2R1/2NAK1B2 b - - 0 1",
      "id": "puzzle_473",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN YiXian - WANG HaoRan\nNA NA ",
      "fen": "3ak4/4a2r1/4b4/pr4p1p/1n7/2p6/PcP1C1P1P/5R3/5R3/2BAKAB2 w - - 0 1",
      "id": "puzzle_474",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI LaiQun - WAN ChunLin\nChinese National Champion 1988 ",
      "fen": "4ka2N/r2R3c1/4b4/p1N1p3p/5n3/2P6/P3P3P/9/2nCA4/2B1KA3 w - - 0 1",
      "id": "puzzle_475",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU Ming - DANG GuoLei\nNA 2004 ",
      "fen": "3ak4/4a4/2c6/8R/4r4/P3C4/8P/4BA2B/4A4/4K4 w - - 0 1",
      "id": "puzzle_476",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG ChuCheng - DING Wa Chong\n ",
      "fen": "2b1k4/5P3/2n6/3N5/p8/9/P8/4pp3/9/3K1A3 w - - 0 1",
      "id": "puzzle_477",
      "title": "Mate in 1 move"
    },
    {
      "description": "PENG ShuSheng - XU CiHai\nNA NA ",
      "fen": "1RNk1ab2/4aC3/7r1/p4Pp2/7np/6P2/P1pc4P/4C4/4A4/2c1KAB2 b - - 0 1",
      "id": "puzzle_478",
      "title": "Mate in 1 move"
    },
    {
      "description": "DING Wa Chong - \u8def\u6613\u6b27\n ",
      "fen": "3k1a3/2N1a2r1/2n1R4/p3p3p/6p2/9/c3P3P/3CB1c2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_479",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU CiHai - PENG ShuSheng\nNA NA ",
      "fen": "3k5/4a4/4P4/3C1N3/3cp4/1n6p/P3P4/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_480",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5b59\u4e3d - HUANG ZiJun\nChinese National Champion 1982 ",
      "fen": "2b1ka3/4a4/4b1n2/p4RC1p/2p1C4/6P2/P1n1P3P/2r5R/9/2BK1AB2 b - - 0 1",
      "id": "puzzle_481",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI FuRu - ZHU XueZeng\nChinese National Champion 1966 ",
      "fen": "3nkab2/2Nc5/4b4/p1PR4p/6p2/4cN3/P2r4P/3C5/3KAr3/5AR2 b - - 0 1",
      "id": "puzzle_482",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI WangXiang - ZHANG ShenHong\nBuilding Materials City Cup National Championships 2005 ",
      "fen": "3a1k3/1c2a4/9/2C3N2/p8/2P2p2P/3n5/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_483",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG LinNa - SHAN XiaLi\nYinli Cup Champion 1999 ",
      "fen": "3a5/5k2C/3aNn3/4p3p/3r1c3/7R1/P7P/4C3B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_484",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - TAO HanMing\nYinli Cup Champion 1998 ",
      "fen": "3P1k3/6P2/5a3/4n4/9/6B2/9/5p3/1C7/2B1K4 w - - 0 1",
      "id": "puzzle_485",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG Chuan - CHEN PeiJin\nAsian Xiangqi Individual Championships 2005 ",
      "fen": "CN7/4a4/1P1k1aP2/9/2b6/9/2n2p3/3A3cB/9/4KA3 w - - 0 1",
      "id": "puzzle_486",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI DeZhi - CAI YouGuang\nDongguan mayor anzhen Xiangqi Open 2005 ",
      "fen": "2b2k2C/4R1Cn1/c2Nb4/9/5r2p/P1P2p3/4p2nP/3AB4/3K5/5AB2 w - - 0 1",
      "id": "puzzle_487",
      "title": "Mate in 1 move"
    },
    {
      "description": "SIRCI Gianluca - LIU DianZhong\nWorld Xiangqi Championships 2005 ",
      "fen": "3akab2/7c1/b4Cn2/p3p1p1p/9/P5P2/4N3P/B3r4/4A4/1R2KA3 b - - 0 1",
      "id": "puzzle_488",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG GuoFeng - \u4faf\u54f2\u519b\nZhejiang Sanhuan Cup xiangqi open tournament 2005 ",
      "fen": "7r1/4R4/C4knN1/4p3p/2b3pc1/p8/n1P1P3P/4BC1R1/2NK5/5r3 w - - 0 1",
      "id": "puzzle_489",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG GuoFeng - GANG QiuYing\nChinese National Champion 2004 ",
      "fen": "2bk1ab2/4a4/6N2/p4R2p/6P2/9/4n3P/c1C1CK3/6r2/5A3 b - - 0 1",
      "id": "puzzle_490",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO XinXin - CHEN HanHua\nBall bearing Cup xiangqi tournament 2005 ",
      "fen": "5a3/4k1P2/1C1abN3/p1n6/2bcp4/9/c3P4/B6C1/9/3AKAB2 w - - 0 1",
      "id": "puzzle_491",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO XinXin - MU SheLun\nBall bearing Cup xiangqi tournament 2005 ",
      "fen": "3a3n1/4a4/4bk3/6p1p/p2N5/6P2/c3P1c2/N4C3/1C7/2BAKAB2 w - - 0 1",
      "id": "puzzle_492",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN HaiYing - YU YouHua\nZhejiang Sanhuan Cup xiangqi open tournament 2005 ",
      "fen": "2ba1ab2/4k1N2/2n6/p1N1p3p/1C7/2PR2p2/P3P3P/4rA3/5K2c/5n3 b - - 0 1",
      "id": "puzzle_493",
      "title": "Mate in 1 move"
    },
    {
      "description": "YANG HuiWen - ANG TaiHua\nAsian Xiangqi Individual Championships 2005 ",
      "fen": "3ckc3/1R2a4/9/2p2rN1p/4R1p2/2P1n4/8P/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_494",
      "title": "Mate in 1 move"
    },
    {
      "description": "GANG QiuYing - JIN HaiYing\nChina Team Championship 2005 ",
      "fen": "2b1ka1r1/4a4/2R1bP1N1/4r3p/2p6/2P2p3/P4c2P/2Nn1A3/5C3/2BA1KB1R b - - 0 1",
      "id": "puzzle_495",
      "title": "Mate in 1 move"
    },
    {
      "description": "YIN Anna - HUANG YuYing\nWorld Xiangqi Championships 2005 ",
      "fen": "2bC1k3/4a4/4b4/P7p/9/2B6/5C3/5A2B/1c1pA4/2c1K4 b - - 0 1",
      "id": "puzzle_496",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG LinNa - LIU Huan\nChina Team Championship 2005 ",
      "fen": "3k1ab2/4a1c1n/3Nb4/4C1p1p/3c1N3/2P2nP2/8P/4B4/3CA4/4KAB2 w - - 0 1",
      "id": "puzzle_497",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUO LiPing - CUI Yan\nWacker Real Estate Cup xiangqi Master Champion 2005 ",
      "fen": "2Raka3/9/3c5/3P4p/9/6N2/6r2/3AB4/3K5/6B1c b - - 0 1",
      "id": "puzzle_498",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU RongHua - LI LaiQun\nNA 1982 ",
      "fen": "3a1k3/2C1a3n/b3bN3/3PC4/8p/4c4/5c3/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_499",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU RongHua - LI LaiQun\nNA 1990 ",
      "fen": "2b1kab2/4a4/9/2C1P2Np/2p6/6R2/3n5/9/3K5/2B2rB1c b - - 0 1",
      "id": "puzzle_500",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN XiaoKun - LI LaiQun\nNA 1982 ",
      "fen": "3k1ab2/4a1N2/9/1C2p3p/p1b6/2B3R2/1n1cr4/5C3/4A4/2BK1A3 b - - 0 1",
      "id": "puzzle_501",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU JunQiang - WEI GuoTong\nGreat Wall Electronic Cup National Championships 2006 ",
      "fen": "2C1k1b2/3Ra4/n1c3n2/2p1p1p1p/pr1r5/2P2R1NP/P3P4/3CB4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_502",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI YiTing - CHEN BaiXiang\nNA 1963 ",
      "fen": "9/3k1C3/4ba3/9/2p6/8P/4c1R2/4p4/3rA4/2B1K1B2 b - - 0 1",
      "id": "puzzle_503",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIAN XueZheng - SHEN ZhiYi\nNA NA ",
      "fen": "1rb2R3/3kr4/4c4/pcnC2p1p/2p1C4/9/P1P1P3P/9/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_504",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG JiaLiang - ZHU JianQiu\nNA 1963 ",
      "fen": "4kaNC1/2cPa4/b8/9/5n3/2B6/8P/B8/2p1A4/3A1K3 w - - 0 1",
      "id": "puzzle_505",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG LinNa - CHEN LiChun\nChina Team Championship 2006 ",
      "fen": "2bakab2/9/9/p1P1p3p/6p2/2N3n2/P2Ncn2P/2R1BC3/4R4/3AKA3 b - - 0 1",
      "id": "puzzle_506",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN XinQuan - ZHU Zhaokang\nChinese National Champion 1964 ",
      "fen": "C1N6/3ka4/4Na3/4c4/8p/5p3/P8/4B4/4A2n1/3AK1B2 w - - 0 1",
      "id": "puzzle_507",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f20\u5353\u7fa4 - \u738b\u745e\u5a23\nNational Collaboration District III tournament 2006 ",
      "fen": "3ak4/3ca4/b8/p7p/2b6/4p1N2/8P/2nC1A3/4AC3/2c1K4 b - - 0 1",
      "id": "puzzle_508",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u80e1\u5fd7\u51ef - ZHOU XiaoPing\nShanxi Yuhong Cup Chess Grand Prix 2007 ",
      "fen": "R2ak1bR1/3Pa4/4b4/4p3p/4c1p2/p8/P5P1P/2r1B1n2/3K5/2BA5 b - - 0 1",
      "id": "puzzle_509",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI QingQuan - LIN YiXian\nNA NA ",
      "fen": "4ka3/6C2/2N2a3/4C1p1p/p1c4r1/6P2/P8/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_510",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Hongbiao - \u53f6\u4ebf\u6587\nShantou Golden taste Cup xiangqi tournament 2007 ",
      "fen": "2bak4/4a4/4b4/8p/C3c4/3N4P/P3P4/4BCN2/3rAr3/2B1KAR1c b - - 0 1",
      "id": "puzzle_511",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI DeZhi - QIN JinSong\nEarth Cup xiangqi tournament 2007 ",
      "fen": "3ak4/4a4/4b4/3c5/c3N1b2/9/9/4BA2B/2nKA4/9 b - - 0 1",
      "id": "puzzle_512",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u66fe\u6b63 - LIANG Yuan\nShenzhen Shi Wei Tian Cup Cities tournament 2006 ",
      "fen": "1r1k1ab2/4a4/4R4/8p/p8/4C1P2/P3P3P/3C5/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_513",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6768\u5143\u6ce2 - QIU Hua\nNA 2007 ",
      "fen": "C1baka3/4n4/4n4/p3p3p/2r6/P5P2/2cR4P/4C3B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_514",
      "title": "Mate in 1 move"
    },
    {
      "description": "MENG LiGuo - FU GuangMing\nChinese National Champion 1964 ",
      "fen": "2Ca2b2/2R6/1Cnak4/6p1p/4r4/9/2P1c3P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_515",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIU Yu Kuen - ZHENG JianWen\nHong Kong Individual Championship 2006 ",
      "fen": "5k3/4P1c2/5P3/9/9/2B6/5p3/4B4/4A4/4K4 w - - 0 1",
      "id": "puzzle_516",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG Chuan - CHIU Yu Kuen\nThe world mind sports games 2008 ",
      "fen": "9/2C2k3/9/2N1n4/9/3p5/6n1P/9/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_517",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAO WenJie - \u6768\u519b\u82b1\nNational Collaboration District III tournament 2006 ",
      "fen": "4ka3/4a4/4N4/8p/p1b6/3c5/Cc6P/4C4/2n1A4/3K1AB2 b - - 0 1",
      "id": "puzzle_518",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f90\u6797\u5dde - \u5f20\u5409\u6210\nNational Collaboration District III tournament 2006 ",
      "fen": "5ab1r/1N1ka4/4bc3/C7p/9/9/8P/6N2/4A4/2BcK1BR1 w - - 0 1",
      "id": "puzzle_519",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHAN Chi Mui - TEO Sim Hua\nAsian Indoor Games 2007 ",
      "fen": "2b1ka3/4a4/2n1b4/2p1p3p/9/4CR3/2P1c1P1P/N8/1cC1AK3/1RBr2r2 b - - 0 1",
      "id": "puzzle_520",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5b59\u535a - MENG Chen\nChu He Han Jie Cup National xiangqi level tournament 2006 ",
      "fen": "3k2b2/4a4/3ab4/5P3/9/5CB2/9/5p3/4p4/5KB2 b - - 0 1",
      "id": "puzzle_521",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAO Qian - SHANG ZhiHua\nChuanshan Cup Nation xiangqi level tournament 2007 ",
      "fen": "2b6/4a4/1R1rk2r1/6p1p/2bC5/4C1P2/n1P1P3P/N8/4A4/5KB2 w - - 0 1",
      "id": "puzzle_522",
      "title": "Mate in 1 move"
    },
    {
      "description": "KHO Kei Kuan - TAN Henry\nAsian Xiangqi Individual Championships 2007 ",
      "fen": "2b1k1b2/5R3/r1Na5/p1p1C3p/1C2P4/1c7/P1P3p1P/9/4A4/n1BA1KB2 w - - 0 1",
      "id": "puzzle_523",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u738b\u4e91\u8c79 - \u90dd\u660e\u6b66\nJinan - Weifang Cup Xiangqi Challenge 2007 ",
      "fen": "9/C1C1a4/1R1a1kn2/8p/2P1P1p2/c8/6P1P/3NBr3/9/2BAK2c1 w - - 0 1",
      "id": "puzzle_524",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Jian - ZHANG WeiDong\nJinan - Weifang Cup Xiangqi Challenge 2007 ",
      "fen": "4ka3/4a4/3P5/p8/1R6p/6r2/P8/9/9/3AKA3 w - - 0 1",
      "id": "puzzle_525",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU DaHua - LI YiTing\nChinese National Champion 1965 ",
      "fen": "3akcb1r/4acP2/4N4/4C4/p8/2B1N4/n3P4/9/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_526",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU TianHong - WU Kui Lin\nShantung Cup 1995 ",
      "fen": "3ak1b2/4a4/2R6/p2r5/4p2Rp/P5B2/4P3P/5A2B/6r2/3A1K2c b - - 0 1",
      "id": "puzzle_527",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c2d\u6c0f\u5782\u5bb9 - DIAN Fitry yani\nAsian Xiangqi Individual Championships 2007 ",
      "fen": "9/3P1k3/8b/5P3/2b1C4/9/4pp3/3AB4/4A4/2B2K3 w - - 0 1",
      "id": "puzzle_528",
      "title": "Mate in 1 move"
    },
    {
      "description": "YANG GuanLin - HU RongHua\nChinese National Champion 1979 ",
      "fen": "3a1k3/4a1P2/4b4/3P1P3/2b6/9/3n5/3p5/N3p4/3K1A3 b - - 0 1",
      "id": "puzzle_529",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u56fd\u6797 - CAO YanLei\nGuangxi Beiliu City Yong Yong Ming Men Cup xiangqi Open 2008 ",
      "fen": "2bak4/4a2c1/4b4/p2N4p/9/4C4/P8/5r3/2C1K1n2/3A2B2 b - - 0 1",
      "id": "puzzle_530",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u80e1\u5c0f\u5e73 - ZHAO Junfeng\nGuangxi Beiliu City Yong Yong Ming Men Cup xiangqi Open 2008 ",
      "fen": "r1bak3C/7R1/5aN1b/2P1p3p/2n6/p4C3/P3c3P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_531",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG ChangQing - \u82cf\u949c\u660e\nYANG QuanLin Cup Champion 2008 ",
      "fen": "4ka3/4a4/b3N4/C1pR4p/9/2P1P4/9/9/4K4/c2n1r3 b - - 0 1",
      "id": "puzzle_532",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Hongbiao - \u674e\u521a\u56fd\nShenzhen  ",
      "fen": "3a5/5k3/5a3/1C7/2b3b2/4Nc3/7n1/4BA3/3p5/4K4 b - - 0 1",
      "id": "puzzle_533",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f6d\u7ecd\u521a - CAO YanLei\nShenzhen  ",
      "fen": "3akab2/9/9/2p3C2/2b6/6r2/PR2c1p2/4B4/4A4/4KABNc b - - 0 1",
      "id": "puzzle_534",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHANG Diana - LI Jennifer\nThe world mind sports games 2008 ",
      "fen": "1C1R2b2/4ak3/4ccn2/4C1R1p/2p6/P5P2/4P1r1P/6N2/4A4/1r1AK1B2 w - - 0 1",
      "id": "puzzle_535",
      "title": "Mate in 1 move"
    },
    {
      "description": "HE ZhiMing - XU Wei Guo\nThe world mind sports games 2008 ",
      "fen": "3a1Rb2/2N1k3C/4b2n1/4p2r1/2c4c1/8P/4P4/N3BC3/9/2BAKA3 w - - 0 1",
      "id": "puzzle_536",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG Gao Yang - XU HaoHua\nThe world mind sports games 2008 ",
      "fen": "9/4k4/5a3/8p/9/3R5/7C1/1n1A1r3/9/3K5 b - - 0 1",
      "id": "puzzle_537",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6e90\u6cc9 - ZHENG YiYing\nWacker Real Estate Cup National  1st class tournament 2009 ",
      "fen": "2bk2b2/4PR3/3a5/p3p3p/9/4P4/8P/4B4/2nr5/3AK1B2 w - - 0 1",
      "id": "puzzle_538",
      "title": "Mate in 1 move"
    },
    {
      "description": "YOU YingQin - TEO Guimin\nWorld Xiangqi Championships 2009 ",
      "fen": "5k3/4P4/2N2P3/9/9/9/9/3AB4/4cn3/4K4 w - - 0 1",
      "id": "puzzle_539",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHANG Diana - WU CaiFang\nWorld Xiangqi Championships 2009 ",
      "fen": "1R1Ckab2/4a4/4b2r1/p3C3p/9/3p5/P3P3P/6N2/4K1n2/1RBA5 w - - 0 1",
      "id": "puzzle_540",
      "title": "Mate in 1 move"
    },
    {
      "description": "DIAN Fitry yani - KHO Evie\nWorld Xiangqi Championships 2009 ",
      "fen": "4kab2/4a4/4N4/9/1C7/P7C/8P/3n5/7c1/3A1Kc2 b - - 0 1",
      "id": "puzzle_541",
      "title": "Mate in 1 move"
    },
    {
      "description": "NGO Lan Huong - KHO Evie\nWorld Xiangqi Championships 2009 ",
      "fen": "5a3/4ac3/3k2C2/1n1N4p/9/7C1/P3P3P/3AB4/6n2/3K1AB2 w - - 0 1",
      "id": "puzzle_542",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Jennifer - GAO YiPing\nWorld Xiangqi Championships 2009 ",
      "fen": "3k1ab2/4a4/4b4/pr6p/9/8P/9/2R6/N2C1p3/2BAKA1rc b - - 0 1",
      "id": "puzzle_543",
      "title": "Mate in 1 move"
    },
    {
      "description": "SONE Toshihiko - YU ZuWang\nWorld Xiangqi Championships 2009 ",
      "fen": "1rb1kab2/4a4/9/p1C1n1p1p/9/P1P1n4/3RN3P/6C2/4A4/R1B1KArc1 w - - 0 1",
      "id": "puzzle_544",
      "title": "Mate in 1 move"
    },
    {
      "description": "RUMIANTSEV Dmitriu - HU YunXi\nWorld Xiangqi Championships 2009 ",
      "fen": "2bak4/4a4/4b4/9/9/9/9/3AB4/1n3p2C/3AK1B2 b - - 0 1",
      "id": "puzzle_545",
      "title": "Mate in 1 move"
    },
    {
      "description": "YOKOYAMA Eiiela - TORNQVIST Mikko\nWorld Xiangqi Championships 2009 ",
      "fen": "C1bCkab2/3R4n/9/2p1p3p/9/2P6/4P3P/c3K1N2/1c2A4/4rA3 b - - 0 1",
      "id": "puzzle_546",
      "title": "Mate in 1 move"
    },
    {
      "description": "HOFFARTH Karsten - SONE Toshihiko\nWorld Xiangqi Championships 2009 ",
      "fen": "1nc6/4aC1r1/3kb4/p3p4/7n1/6RN1/P1p1P3P/4B4/N3A4/2B1KA3 w - - 0 1",
      "id": "puzzle_547",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHEN Hao - HII Kong Ming\nWorld Xiangqi Championships 2009 ",
      "fen": "3aka3/n1r1n4/3cb4/p1p1C3p/1Nb6/8P/Pc2p4/7CN/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_548",
      "title": "Mate in 1 move"
    },
    {
      "description": "YE RongGuang - H.M.ASNAWI Ab\nWorld Xiangqi Championships 2009 ",
      "fen": "3ak1br1/C3a4/4c2c1/p3n1R1p/2pN2p2/6P2/P1P5P/2N1B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_549",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG BoRong - REINDERS Rudolf\nWorld Xiangqi Championships 2009 ",
      "fen": "3a1ab2/2N1k4/2R1b4/p7p/9/2P3P2/P4n2P/3AB2r1/1Cc6/3AKN3 w - - 0 1",
      "id": "puzzle_550",
      "title": "Mate in 1 move"
    },
    {
      "description": "NAEGLER Michael - CHENG Kah Siong\nWorld Xiangqi Championships 2009 ",
      "fen": "3ak4/4a4/9/R8/6b1p/P3p4/6c1P/4r4/3CC4/3AKA3 b - - 0 1",
      "id": "puzzle_551",
      "title": "Mate in 1 move"
    },
    {
      "description": "BRYDON Bill - MUHAMMAND Ali\nWorld Xiangqi Championships 2009 ",
      "fen": "3a1a3/5k3/b3b4/C3c4/9/P1N6/2pn4P/4B4/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_552",
      "title": "Mate in 1 move"
    },
    {
      "description": "BRADLER Stephan - MATSUNO Yoichiro\nWorld Xiangqi Championships 2009 ",
      "fen": "5kb2/C2NR4/4b4/p3p3p/9/7r1/P3c1c1P/6N2/5p3/2BAKABR1 w - - 0 1",
      "id": "puzzle_553",
      "title": "Mate in 1 move"
    },
    {
      "description": "HE ZhiMing - HUANG BiFu\nWorld Xiangqi Championships 2009 ",
      "fen": "3nkab2/3raR3/4RnN2/p7p/9/6p2/P3P3P/2r1B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_554",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Huan - Melani\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "C1bak3r/4a4/1Rnr1c3/2C1p3p/2b2np2/1N7/P3P1P1P/6N2/4A4/2BAK1BR1 w - - 0 1",
      "id": "puzzle_555",
      "title": "Mate in 1 move"
    },
    {
      "description": "Melani - TEO Guimin\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "2bak4/4a4/3cb4/9/3C5/1NPnP4/P8/4B4/4A1n2/3K1AB2 b - - 0 1",
      "id": "puzzle_556",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHANG Diana - Melani\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "Rcb1ka3/4a4/2n1b1c2/pN1R4p/4Cnp2/4P4/P1P3PrP/6N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_557",
      "title": "Mate in 1 move"
    },
    {
      "description": "GAO YiPing - Melani\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "5k1r1/4a1Nc1/4ba1R1/4C4/p4P2p/9/P7P/4B4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_558",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIENG Ming Chuo - Melani\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "2N6/3k4C/3N5/9/p8/4P4/P7P/3AB4/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_559",
      "title": "Mate in 1 move"
    },
    {
      "description": "KIM Pawn - LO Vui Hung\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "2ba1kb2/4a4/4cN2c/8p/1P2C4/8P/6P2/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_560",
      "title": "Mate in 1 move"
    },
    {
      "description": "WONG Wan Heng - ZHANG Yan Ping\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "1nba1ar2/1R7/4k4/p1p5p/2b6/4C4/P1P1PN2P/6r1N/9/2BAKA3 w - - 0 1",
      "id": "puzzle_561",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG BoRong - ZHANG Yan Ping\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "4kc3/4a4/3a4c/4p4/2b1P1N2/6N2/9/4B4/2n1A4/2BA1K3 b - - 0 1",
      "id": "puzzle_562",
      "title": "Mate in 1 move"
    },
    {
      "description": "TRAN Chanh Tam - SHOSHI Kazuharo\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "1r2kab2/3ca4/4b3n/6p1p/p3N4/2p1C1P2/n3P3P/N8/3CA4/c3KAB2 w - - 0 1",
      "id": "puzzle_563",
      "title": "Mate in 1 move"
    },
    {
      "description": "KIM Pawn - ZHENG BoRong\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "3k5/7R1/2P6/8p/9/6B2/8P/4K3B/3rcp3/9 b - - 0 1",
      "id": "puzzle_564",
      "title": "Mate in 1 move"
    },
    {
      "description": "Melani - NGUYEN Hoang Yen\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "2bakab2/9/2n6/8p/9/9/2r6/5K3/4A4/9 b - - 0 1",
      "id": "puzzle_565",
      "title": "Mate in 1 move"
    },
    {
      "description": "WAN ChunLin - TAO HanMing\nChina National Xiangqi League 2009 ",
      "fen": "r3kab2/3ca4/6n2/p3p3p/2b4r1/1c1N1RC2/P3P3P/6N2/9/R1BAKAB2 w - - 0 1",
      "id": "puzzle_566",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU YinChuan - ZHENG Weitong\nChina National Xiangqi League 2009 ",
      "fen": "5k3/4P4/4b4/7Cn/5N3/9/9/5A3/4A4/2BK3n1 w - - 0 1",
      "id": "puzzle_567",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHUNG DeJun - ZHANG Shi\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "C3ka3/4a4/b2c2P2/p3p3p/9/9/P1pn2n1P/4B4/N5R1N/1r1AKAB2 b - - 0 1",
      "id": "puzzle_568",
      "title": "Mate in 1 move"
    },
    {
      "description": "LEUNG TatMan - AKIYOSHI Kazuyoshi\nAsian Indoor Games 2009 ",
      "fen": "4ka3/9/2N2a3/6C2/2c4P1/1pB6/2n1C4/9/4A4/4KAB1c w - - 0 1",
      "id": "puzzle_569",
      "title": "Mate in 1 move"
    },
    {
      "description": "SONE Toshihiko - KNG Ter Yong\nAsian Indoor Games 2009 ",
      "fen": "2bak3C/4a3r/2n1b4/4p4/4c4/4n1Cc1/P6RP/4B4/4N4/3AKAB2 b - - 0 1",
      "id": "puzzle_570",
      "title": "Mate in 1 move"
    },
    {
      "description": "KIM Pawn - SHOSHI Kazuharo\nAsian Indoor Games 2009 ",
      "fen": "2Rckab2/5RN2/5an1c/4p3p/3r5/1NP6/r3P1p1P/C8/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_571",
      "title": "Mate in 1 move"
    },
    {
      "description": "DENG HuiDong  - HU Michael \n2009 North American Invitation Tournament 2009 ",
      "fen": "r4Rb2/3ka4/2Pn5/p3C1c1p/2b2C1r1/9/P3P1P1P/3R2n2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_572",
      "title": "Mate in 1 move"
    },
    {
      "description": "DO Yogi Thang - LI XinDa \n2009 North American Invitation Tournament 2009 ",
      "fen": "2ba4R/C3a4/4bk3/9/2p6/5rB2/c1P6/N3B4/9/4K4 w - - 0 1",
      "id": "puzzle_573",
      "title": "Mate in 1 move"
    },
    {
      "description": "HU Michael  - LAU KeiCheong\n2009 North American Invitation Tournament 2009 ",
      "fen": "4C1b2/5k3/9/p3P4/9/9/8P/2nC5/2r6/3K1ARc1 b - - 0 1",
      "id": "puzzle_574",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUN Rulin  - LEE Paul\n2009 North American Invitation Tournament 2009 ",
      "fen": "4k1c2/9/1rNR4b/p7p/9/2P6/P3N3P/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_575",
      "title": "Mate in 1 move"
    },
    {
      "description": "TRUONG Chanh Huynh - DO Yogi Thang\n2009 North American Invitation Tournament 2009 ",
      "fen": "6b2/5R3/3ak3b/9/3P5/P8/9/9/3nr4/2B2K3 b - - 0 1",
      "id": "puzzle_576",
      "title": "Mate in 1 move"
    },
    {
      "description": "YE Hui - TRUONG Chanh Huynh\n2009 North American Invitation Tournament 2009 ",
      "fen": "3R1ab2/4aN3/4k4/9/6p2/9/9/4B3B/4r1p2/3p1K3 w - - 0 1",
      "id": "puzzle_577",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIE Kui - MIAO LiMing\nNINETOWNS home Cup National  super xiangqi  tournament 2009 ",
      "fen": "1N1k1ab2/4PP2c/1c1Nba3/9/9/9/2p6/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_578",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u660c\u6797 - ZHANG Min\n2009 annual total Fenggang Chess Final 2009 ",
      "fen": "1C1N1a3/4k4/3a4n/4p3p/r1b6/5RP2/4P3P/B2Cc4/3n5/3AKA3 w - - 0 1",
      "id": "puzzle_579",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u8fdb - LI DeZhi\nShenzhen WuFang Cup xiangqi Competition 2009 ",
      "fen": "4k4/3Ra4/4c1N2/1r2C4/2p3b2/9/8P/5A3/4A4/2BK5 w - - 0 1",
      "id": "puzzle_580",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU ZongZe - CHEN LiChun\nShenzhen WuFang Cup xiangqi Competition 2009 ",
      "fen": "2ba3RC/5k1N1/3ab4/p4P3/9/5n3/P3p4/5K3/4A3r/c2A5 b - - 0 1",
      "id": "puzzle_581",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG TianYi - TONG YanZhong\nShenzhen WuFang Cup xiangqi Competition 2009 ",
      "fen": "3a1ab2/2N1kc3/2R6/7np/P8/6P1P/5r3/3AB4/3C5/2B1K4 w - - 0 1",
      "id": "puzzle_582",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u8fdb - \u5218\u9999\u6ce2\nShenzhen WuFang Cup xiangqi Competition 2009 ",
      "fen": "2b1RCb2/9/n2kcr3/p1p1r3p/6p2/2P6/P3P1P1P/4B1N2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_583",
      "title": "Mate in 1 move"
    },
    {
      "description": "NGUYEN HoangLam - DIEP Khai Nguyen\nVietnam The 4th Phuong Trang Xiangqi cup open 2009 ",
      "fen": "4k1C2/4aR1Nn/4Pa3/r7p/1np6/4p4/2p5P/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_584",
      "title": "Mate in 1 move"
    },
    {
      "description": "Cheng Junchao - LI XueSong\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u7537\u5b50\u4e2a\u4eba 2009 ",
      "fen": "4k4/4a4/4ba3/5C3/6b2/9/4n1N2/5p3/6n2/2B2K3 b - - 0 1",
      "id": "puzzle_585",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI DeZhi - \u674e\u65ed\u5e73\n2009\u5e74\u4e2d\u5c71\u201c\u516d\u57ce\u5e02\u201d\u8c61\u68cb\u53cb\u8c0a\u5bf9\u6297\u8d5b 2009 ",
      "fen": "2baka3/2C2n3/5N1R1/p7p/6p2/c1P6/4r4/3A4B/5K3/3A5 b - - 0 1",
      "id": "puzzle_586",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU GuoYi - \u674e\u81ea\u536b\n2009 Fenggang Town, Dongguan 3rd quarter Xiangqi Open 2009 ",
      "fen": "2bakab2/2C1c4/6n2/p3p1p1p/3r5/9/P3n1P1P/2C1N1N2/4A4/R1B1KAB2 w - - 0 1",
      "id": "puzzle_587",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u8d24\u826f - \u80e1\u76db\u68ee\n2009 Fenggang Town, Dongguan 3rd quarter Xiangqi Open 2009 ",
      "fen": "2bak4/4a4/4b4/4C4/4pnp2/7R1/1rP5P/2c1B1N2/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_588",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f90\u4f1f\u5eb7 - \u674e\u6d2a\u4eae\n2009 Fenggang Town, Dongguan 3rd quarter Xiangqi Open 2009 ",
      "fen": "2bakab2/3N5/9/p2N2p1p/9/1rP3P2/P3P3c/R3B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_589",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG ShiQing - \u9ece\u575a\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "2ba1k3/1c2a4/2n1bN3/p4P1c1/4C4/P1p1nC2P/9/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_590",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u82cf\u6c49\u6797 - NG Chun Hei\n2009\u9999\u6e2f\u3001\u756a\u79ba\u3001\u987a\u5fb7\u8c61\u68cb\u8054\u8c0a\u8d5b 2009 ",
      "fen": "1Cbak4/4a4/4b4/1c7/3N5/4pnp2/9/5R3/4A1r2/3A1K3 b - - 0 1",
      "id": "puzzle_591",
      "title": "Mate in 1 move"
    },
    {
      "description": "PAN Pan - ZHAO GuanFang\nChina Team Championship 2009 ",
      "fen": "2ba1k3/4a4/6c2/p2c4p/2P3b2/5N3/4N3P/C3B4/4A1n2/2BK1A3 b - - 0 1",
      "id": "puzzle_592",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN XinAn - Cheng Junchao\nChina Team Championship 2009 ",
      "fen": "2bakab2/4c4/9/p1C1n1p1p/9/4n1P2/PC6P/2N1K4/9/2BA1AB2 b - - 0 1",
      "id": "puzzle_593",
      "title": "Mate in 1 move"
    },
    {
      "description": "QIN JinSong - \u674e\u9526\u6797\n\u201cThe 2nd  ",
      "fen": "2n1kab2/4a4/4b4/pr6p/2P1N1p2/3R5/P3C1c1P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_594",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG JunJie - \u5218\u9752\u950b\nHesheng. Spring Festival Cup team tournament 2009 ",
      "fen": "6r2/3R3R1/2N1bkn2/p3P3p/2p3p2/9/P3N3P/5c3/4Ar3/3K1AB2 w - - 0 1",
      "id": "puzzle_595",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Hongbiao - PANG CaiLiang\nHesheng. Spring Festival Cup team tournament 2009 ",
      "fen": "2bakab2/7c1/9/p7p/9/3N2P2/P7P/9/4AC3/1RBAK1c2 b - - 0 1",
      "id": "puzzle_596",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO XinXin - \u6881\u5929\u8bfa\nHesheng. Spring Festival Cup team tournament 2009 ",
      "fen": "1R1nkabr1/2cca4/4b4/p7p/4C1p2/2P6/P3P1n1P/3C2N2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_597",
      "title": "Mate in 1 move"
    },
    {
      "description": "BA GuoZhong - DONG WenTao\nChina Team Championship 2007 ",
      "fen": "5R3/4a4/3kb4/p1p5p/9/9/P1P1C3P/4r2r1/3CAK3/9 w - - 0 1",
      "id": "puzzle_598",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIE ZhouMiao - ZHANG Wei\nChina Team Championship 2007 ",
      "fen": "2b1kab2/4a4/3c2n2/p1p1n2Np/1N1CC4/2P2c3/8P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_599",
      "title": "Mate in 1 move"
    },
    {
      "description": "GANG QiuYing - TANG Dan\nChina Team Championship 2007 ",
      "fen": "C4ab2/4k4/2n1ba3/2p5p/4c1p2/P5P2/1R2r1n2/3NBK3/3C5/2BA1A3 b - - 0 1",
      "id": "puzzle_600",
      "title": "Mate in 1 move"
    },
    {
      "description": "FEBY Eunike Regina - FEBY Eunike Regina\nWorld Xiangqi Championships 2011 ",
      "fen": "2bk1ab2/3c5/5a3/p7p/1c4p2/9/P3P1P1P/3ABAN2/2n1K4/2B6 b - - 0 1",
      "id": "puzzle_601",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG Hui Chuan - NURALAM Rendi\nWorld Xiangqi Championships 2011 ",
      "fen": "3nkab2/4a4/bc7/2R1P2N1/p2P4p/6P2/4r4/4C2N1/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_602",
      "title": "Mate in 1 move"
    },
    {
      "description": "DEMIN Aleksandr - NAEGLER Michael\nWorld Xiangqi Championships 2011 ",
      "fen": "2bak4/4a4/3cb4/3C4p/P8/6p1P/4c4/3n1C3/4A4/3K3N1 b - - 0 1",
      "id": "puzzle_603",
      "title": "Mate in 1 move"
    },
    {
      "description": "NURALAM Rendi - RUDY Eric\nWorld Xiangqi Championships 2011 ",
      "fen": "3ak4/9/2N1Ca3/3R5/p5p2/2p3B2/P4r3/9/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_604",
      "title": "Mate in 1 move"
    },
    {
      "description": "GEREMY Xavier - TJHAI Tjie Kiang\nWorld Xiangqi Championships 2011 ",
      "fen": "2bak4/4a4/4b4/2PP4p/p3C4/4N4/7nP/2n5B/9/2BAKA3 b - - 0 1",
      "id": "puzzle_605",
      "title": "Mate in 1 move"
    },
    {
      "description": "Xu Guang Ya - AKIYOSHI Kazuyoshi\nWorld Xiangqi Championships 2011 ",
      "fen": "4k1b2/4a4/4ba3/9/9/4N1nr1/9/4n1p2/4A4/3AKR3 b - - 0 1",
      "id": "puzzle_606",
      "title": "Mate in 1 move"
    },
    {
      "description": "VU Minh Ngat - SLOAN Sam\nWorld Xiangqi Championships 2011 ",
      "fen": "1Rb1ka3/r3a3n/c3bc2r/p1pN2R2/6p2/2P1Cn3/P3N1p2/3C5/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_607",
      "title": "Mate in 1 move"
    },
    {
      "description": "DEMIN Aleksandr - NGUYEN Thach Ngoc \nWorld Xiangqi Championships 2011 ",
      "fen": "2baka3/9/2N1b4/9/6P2/2PNc4/P2r5/4B4/3pA4/2B1KA3 b - - 0 1",
      "id": "puzzle_608",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Kuo Hua - PAN HaiFeng\nWorld Xiangqi Championships 2011 ",
      "fen": "1R3ab2/C1N1a4/3k2n2/9/n1bP2p2/8r/4c4/N3B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_609",
      "title": "Mate in 1 move"
    },
    {
      "description": "RUMYANTSEV Dmitry - OGAWAHiroshi\nWorld Xiangqi Championships 2011 ",
      "fen": "2ba1k3/9/4b4/4C3p/4P1p2/P1R2C3/6P1P/1n2B1c2/4A4/4KA3 w - - 0 1",
      "id": "puzzle_610",
      "title": "Mate in 1 move"
    },
    {
      "description": "SONE Toshihiko - HAPCHINA Irimia\nWorld Xiangqi Championships 2011 ",
      "fen": "1R3abn1/3ka4/3cbc3/p2rC1P2/2p5p/PN7/2P1P3P/3CB4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_611",
      "title": "Mate in 1 move"
    },
    {
      "description": "YANG ShuangZheng - KNAB Reinhard\nWorld Xiangqi Championships 2011 ",
      "fen": "2Rakab2/9/9/p2N2R2/3r4p/2P6/P3P3P/4B3c/1n5r1/4K4 b - - 0 1",
      "id": "puzzle_612",
      "title": "Mate in 1 move"
    },
    {
      "description": "FEBY Eunike Regina - NGUYEN Hoang Yen\nWorld Xiangqi Championships 2011 ",
      "fen": "4kab2/4a4/4b4/p1P5p/4p4/P5p2/7R1/3AB4/3K5/2r2A2c b - - 0 1",
      "id": "puzzle_613",
      "title": "Mate in 1 move"
    },
    {
      "description": "RAMO Juoni - ABE Hidetoshi\nWorld Xiangqi Championships 2011 ",
      "fen": "3k4C/9/2Ra1a3/pc2r3p/4CR3/2P6/Pr4p1P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_614",
      "title": "Mate in 1 move"
    },
    {
      "description": "KNAB Reinhard - CHANDRA Nugruho\nWorld Xiangqi Championships 2011 ",
      "fen": "4kab2/r3a4/4b1c2/6N1p/4C4/9/nR2P3P/p3B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_615",
      "title": "Mate in 1 move"
    },
    {
      "description": "NGUYEN Hoang Yen - JIA Dan\nWorld Xiangqi Championships 2011 ",
      "fen": "2b1k3C/4aP3/4baN2/4c4/9/2p1n4/P8/9/5K3/6B2 w - - 0 1",
      "id": "puzzle_616",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEIN Kvi - STERNMAN Olavi\nWorld Xiangqi Championships 2011 ",
      "fen": "2R6/3kaN3/5a3/8p/9/2P1n4/9/4BA3/1r7/2C1KAB2 b - - 0 1",
      "id": "puzzle_617",
      "title": "Mate in 1 move"
    },
    {
      "description": "SONE Toshihiko - RUDY Eric\nWorld Xiangqi Championships 2011 ",
      "fen": "2bakabn1/4n4/1c4c2/4p1p1p/1rN6/9/P3P1P1P/R1C3N2/2C6/2BAKAB2 w - - 0 1",
      "id": "puzzle_618",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHANDRA Nugruho - OGAWAHiroshi\nWorld Xiangqi Championships 2011 ",
      "fen": "3a5/5k3/5a3/5N2p/p4CP2/9/P6pP/9/9/2BAKA3 w - - 0 1",
      "id": "puzzle_619",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Bi Jun - TAKE Aki\nSport Accord World Mind Games 2011 ",
      "fen": "3a5/C3a2R1/3rck3/pn7/2p1prb1p/P6R1/2P1P3P/N2CB1N2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_620",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAKE Aki - NGO Lan Huong\nSport Accord World Mind Games 2011 ",
      "fen": "2bakabN1/4n4/2n6/p1p5p/9/2P6/Pr2P3P/3KC1C2/6cc1/1RBA1A3 b - - 0 1",
      "id": "puzzle_621",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN HaiYing - TAKE Aki\nSport Accord World Mind Games 2011 ",
      "fen": "1Cba1k3/2N1ar3/9/p5R1p/6p2/2P6/P3P1P1P/4B1N2/4Ac1c1/2BAK4 w - - 0 1",
      "id": "puzzle_622",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAKE Aki - JIN HaiYing\nSport Accord World Mind Games 2011 ",
      "fen": "3akabr1/9/2n1b4/p3p3p/6p2/2P1c4/P2rC3P/CRNA5/6ncN/2BK1ABR1 b - - 0 1",
      "id": "puzzle_623",
      "title": "Mate in 1 move"
    },
    {
      "description": "NGO Lan Huong - TAKE Aki\nSport Accord World Mind Games 2011 ",
      "fen": "2bk1a3/6N2/3ab1r2/p1cR4p/9/6P2/P3P3P/4B1N2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_624",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN HaiYing - LIU Bi Jun\nSport Accord World Mind Games 2011 ",
      "fen": "C1b1Rar2/3kc4/n3N4/p3n4/2p1p4/6p2/P3P3P/4B4/3C5/2BAKA3 w - - 0 1",
      "id": "puzzle_625",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN ZhenJie - ZHOU Shi Jie\nHong Kong Individual Championship 2011 ",
      "fen": "1CNak1b2/5R3/3a2n1c/p7p/6p2/4r4/P5P2/9/3KA4/5A3 w - - 0 1",
      "id": "puzzle_626",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG BingWei - ZHOU Shi Jie\nHong Kong Individual Championship 2011 ",
      "fen": "1Cba1k3/4R4/9/P7p/9/9/8P/2r3n2/4A4/3AK1c2 b - - 0 1",
      "id": "puzzle_627",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN ZhenJie - WANG HaoChang\nHong Kong Individual Championship 2011 ",
      "fen": "5k3/9/4R4/p7p/9/2p6/P8/5A3/2c6/2B1KAB2 w - - 0 1",
      "id": "puzzle_628",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI Qiu Sheng - ZHENG Zi Qiang\nHong Kong Individual Championship 2011 ",
      "fen": "4kab2/9/3R5/9/5Np1p/P8/9/4r4/9/1n1K5 b - - 0 1",
      "id": "puzzle_629",
      "title": "Mate in 1 move"
    },
    {
      "description": "SU FuYin - Deng De Quan\nHong Kong Individual Championship 2011 ",
      "fen": "3ak4/9/4ba3/3N3Np/2b6/5C2P/9/1n1AB4/2p6/c2K1A3 w - - 0 1",
      "id": "puzzle_630",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN Wei Lin - LI ZanAn\nHong Kong Individual Championship 2011 ",
      "fen": "2baka3/5c3/4CN3/p1p5p/1C7/2P6/P3c3P/R4n3/3r5/2B2KB2 b - - 0 1",
      "id": "puzzle_631",
      "title": "Mate in 1 move"
    },
    {
      "description": "HE GuoPing - LO JUN Lin\nHong Kong Individual Championship 1997 ",
      "fen": "Cnbak4/4acN2/4b4/P1P1C4/5P2p/3p5/7nP/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_632",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU You Li - LIU WeiZhi\nHong Kong Individual Championship 1997 ",
      "fen": "3k5/4a1N2/3a5/p4R3/2b3b2/4C4/P3P4/4B1n2/4Ap1r1/3K1AB2 w - - 0 1",
      "id": "puzzle_633",
      "title": "Mate in 1 move"
    },
    {
      "description": "YU JuWang - HE Gan Wang\nHong Kong Individual Championship 1997 ",
      "fen": "2baR4/2r2k3/4b4/p3p3p/9/9/P3P3P/5C2B/3cA4/3AK1C2 w - - 0 1",
      "id": "puzzle_634",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAI Robin - PENG Wen Xin\nHong Kong Individual Championship 1997 ",
      "fen": "r4ab2/2Rnk1N2/3ab4/4p3p/5Cp2/2B6/p5P1P/7C1/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_635",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU KeDang - SHI Da Ming\nHong Kong Individual Championship 1997 ",
      "fen": "5kbN1/9/3N1a3/9/9/2P5C/9/4B4/2n1A4/3A1K1n1 w - - 0 1",
      "id": "puzzle_636",
      "title": "Mate in 1 move"
    },
    {
      "description": "YE Yu Lin - ZHANG YongXiang\nHong Kong Individual Championship 1997 ",
      "fen": "3ak1b2/4a4/4b4/8R/9/9/9/3KB4/2r4cc/5AB2 b - - 0 1",
      "id": "puzzle_637",
      "title": "Mate in 1 move"
    },
    {
      "description": "HONG HaiFeng - YE RongBiao\nHong Kong Individual Championship 1997 ",
      "fen": "9/6P2/5k3/2N6/3n5/9/5p3/B4A3/4K4/2B2A3 w - - 0 1",
      "id": "puzzle_638",
      "title": "Mate in 1 move"
    },
    {
      "description": "DENG HuiDong  - MO LaiJiu\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "r3k4/3P1R3/4Ca2b/p3p3p/3R2n2/9/P3P2rP/4B1p2/9/3AKAB2 w - - 0 1",
      "id": "puzzle_639",
      "title": "Mate in 1 move"
    },
    {
      "description": "TRUONG Chanh Huynh - Yu Kuai\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "3k3C1/5R3/n1rab4/p5R2/2b5p/P8/8P/4B4/1c2A4/2BA1K3 w - - 0 1",
      "id": "puzzle_640",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN Ming - ZHENG ZhengMing\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "4kab2/4a4/4b4/5R3/4p1P2/3p4P/6n2/7r1/2C1A4/2BA1K3 b - - 0 1",
      "id": "puzzle_641",
      "title": "Mate in 1 move"
    },
    {
      "description": "HSIEH His Kuan - SUN Rulin \nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "4kab2/4a4/4b4/4C3p/R8/6P2/Pr7/4B4/5K2N/2BA2nc1 b - - 0 1",
      "id": "puzzle_642",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN Ming - MA YuLin\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "8C/3ka2R1/2n2a2b/p1p1p3p/3Nc4/6C2/P5r1P/4B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_643",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG YunFeng - LI XinDa \nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "4k1b2/3c5/3a1P3/9/6b2/2B6/6N2/3A5/3KA4/2p6 b - - 0 1",
      "id": "puzzle_644",
      "title": "Mate in 1 move"
    },
    {
      "description": "Yu Kuai - LAU KeiCheong\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "2c1kab2/4a4/6P2/7N1/2b1N1n2/C8/P5C2/9/4A4/2BAK1Bnc b - - 0 1",
      "id": "puzzle_645",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - LIU KeDang\nHong Kong Individual Championship 1997 ",
      "fen": "3ak4/2n1a4/9/p1p3R1N/4p4/4c1P2/P3n3P/r2A5/4A4/4K1B2 b - - 0 1",
      "id": "puzzle_646",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Jin Can - YI ShunHua\nHong Kong Individual Championship 1997 ",
      "fen": "2R1ka3/4a2N1/4N4/2p1p3p/9/2P6/4P3P/4B4/1r7/1cBcK4 b - - 0 1",
      "id": "puzzle_647",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - LO JUN Lin\nHong Kong Individual Championship 1997 ",
      "fen": "4k4/4a4/3RN4/p7p/4C4/6P2/P7P/4B4/2c1p2r1/5KB2 w - - 0 1",
      "id": "puzzle_648",
      "title": "Mate in 1 move"
    },
    {
      "description": "DING JianQuan - LAI Robin\nHong Kong Individual Championship 1997 ",
      "fen": "3k5/9/3a1N3/p7p/9/6C2/P3R3P/9/1n2A1r2/4K3c w - - 0 1",
      "id": "puzzle_649",
      "title": "Mate in 1 move"
    },
    {
      "description": "NG Chun Hei - LI Jin Can\nHong Kong Individual Championship 1997 ",
      "fen": "1R3ab2/4a4/3kb3n/p1N2cp2/2p2r3/4C4/P3P1P2/9/9/2rAKAB2 w - - 0 1",
      "id": "puzzle_650",
      "title": "Mate in 1 move"
    },
    {
      "description": "YI ShunHua - YAN Jin Hong\nHong Kong Individual Championship 1997 ",
      "fen": "4R1br1/rc1k5/4b4/p7p/2p4n1/2P2pP2/P2Cp3P/4C4/4A4/2BAK1c2 w - - 0 1",
      "id": "puzzle_651",
      "title": "Mate in 1 move"
    },
    {
      "description": "WENG ChuWen - SU FuYin\nHong Kong Individual Championship 1997 ",
      "fen": "2bcka3/9/3ab4/p1pr4p/9/2P6/P2nR3P/4B3C/4A1r2/2B1KN3 b - - 0 1",
      "id": "puzzle_652",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI KangWah - WONG Chi Keung\nHong Kong Individual Championship 1997 ",
      "fen": "2R6/C1c1ak3/1r3a3/9/4N4/9/9/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_653",
      "title": "Mate in 1 move"
    },
    {
      "description": "NG Chun Hei - YI ShunHua\nHong Kong Individual Championship 1997 ",
      "fen": "3a5/1Cr1ak3/1R1R5/8p/6p2/9/r5P1P/4B3N/4A3n/3K1AB2 w - - 0 1",
      "id": "puzzle_654",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - HUANG BingWei\nHong Kong Individual Championship 1997 ",
      "fen": "3k1ab2/4a4/9/p3C4/4c1b2/3r3c1/P3R3P/9/4A4/3AK4 b - - 0 1",
      "id": "puzzle_655",
      "title": "Mate in 1 move"
    },
    {
      "description": "MO ZhanTu - LAI Robin\nHong Kong Individual Championship 1997 ",
      "fen": "2ba1a1n1/7CC/4k1N2/p2P5/2p3b2/5n3/Pc2P4/4B4/7c1/1NBAKA3 w - - 0 1",
      "id": "puzzle_656",
      "title": "Mate in 1 move"
    },
    {
      "description": "WEN LiShen - YUNG Tak Keung\nHong Kong Individual Championship 1997 ",
      "fen": "4kab2/3c1R1N1/n2a5/2p1C4/p3p1b2/2P3C2/P3P3P/1rNcB4/9/4KAB2 w - - 0 1",
      "id": "puzzle_657",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUAN ZhanFang - SU YiFan\nHong Kong Individual Championship 1998 ",
      "fen": "3k2b2/4a1N2/3Pba3/9/p7p/2Bn5/P3c4/3C5/9/3AKAB2 w - - 0 1",
      "id": "puzzle_658",
      "title": "Mate in 1 move"
    },
    {
      "description": "HO Sammy - XU WenHao\nHong Kong Individual Championship 1998 ",
      "fen": "2bcka3/5RN2/n3Ca2b/p1p1P3p/9/1r7/P8/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_659",
      "title": "Mate in 1 move"
    },
    {
      "description": "WENG ChuGuang - WU GuanXing\nHong Kong Individual Championship 1998 ",
      "fen": "2bak4/4a4/2N1b1n2/p1p3p1p/4C4/2P2NP2/P3c4/2C1B4/1r2A4/3RKAB1c w - - 0 1",
      "id": "puzzle_660",
      "title": "Mate in 1 move"
    },
    {
      "description": "DING JianQuan - WONG Chi Keung\nHong Kong Individual Championship 1998 ",
      "fen": "2Ca5/4a1N2/5k3/3c4p/4p4/2P6/1p1C1n2P/2n1K4/9/2BA1A3 b - - 0 1",
      "id": "puzzle_661",
      "title": "Mate in 1 move"
    },
    {
      "description": "HE GuoPing - ZHANG WenChang\nHong Kong Individual Championship 1998 ",
      "fen": "1nC1ka3/1N2a4/4b4/4C3p/3Rn4/7r1/P4p2c/9/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_662",
      "title": "Mate in 1 move"
    },
    {
      "description": "YAN Zhao Tian - YE WoSheng\nHong Kong Individual Championship 1998 ",
      "fen": "3k3r1/2N1a4/3a2n2/C3p3p/9/3R1np2/P1c1c3P/4B4/4A4/2B1KA2R w - - 0 1",
      "id": "puzzle_663",
      "title": "Mate in 1 move"
    },
    {
      "description": "HO Sammy - LONG GuangMing\nHong Kong Individual Championship 1998 ",
      "fen": "3k1ab2/4aP3/3cN4/2p1c2Cp/9/2P5P/9/5A3/2nK5/2B2A3 b - - 0 1",
      "id": "puzzle_664",
      "title": "Mate in 1 move"
    },
    {
      "description": "YU Ming - HONG HaiFeng\nHong Kong Individual Championship 2001 ",
      "fen": "2P1ka3/4a4/1n1P5/3N5/9/6B2/9/B2A5/9/3AK4 w - - 0 1",
      "id": "puzzle_665",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIU Yu Kuen - LAI Robin\nHong Kong Individual Championship 2001 ",
      "fen": "5k3/4R4/9/6N2/3P4p/P8/9/3cB4/3K1p3/4r1B2 w - - 0 1",
      "id": "puzzle_666",
      "title": "Mate in 1 move"
    },
    {
      "description": "NG Chun Hei - CHIU Yu Kuen\nHong Kong Individual Championship 2001 ",
      "fen": "2bk1ab2/3CaR3/1c7/p2R4p/2p2N3/9/P1P5P/2N2A3/6pr1/2BAK3c b - - 0 1",
      "id": "puzzle_667",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAU KeiCheong - WANG Jeff\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "9/1CN1a4/3kba2b/4cNn2/3C5/5p3/4p4/B8/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_668",
      "title": "Mate in 1 move"
    },
    {
      "description": "PAN Jack QH - XU FuWen\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "2b1k4/9/3a5/p8/6p1p/2P6/4r3P/5K2B/1R2A4/5A3 b - - 0 1",
      "id": "puzzle_669",
      "title": "Mate in 1 move"
    },
    {
      "description": "GU YiQing - MA YunRun\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "4kab2/4a4/4b4/p2R4p/9/9/P7P/3K1nRC1/2r1A4/2B2A3 b - - 0 1",
      "id": "puzzle_670",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u5c0f\u521a - \u9ad8\u5149\u8fdb\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "1C1a1abr1/1c2k4/b7n/p3Pn2p/6p2/2R6/P3P1P1P/4B4/4K4/2B2c1C1 w - - 0 1",
      "id": "puzzle_671",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZOU Weixun - \u5f90\u52e4\u534e\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "C3kab2/7C1/4b2c1/p3p3p/2c3p2/P1B6/2nR4P/3K5/4A4/1r3AB2 b - - 0 1",
      "id": "puzzle_672",
      "title": "Mate in 1 move"
    },
    {
      "description": "WONG Hok Him - \u8983\u5b50\u5b81\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "3a5/5k1N1/3a5/8C/2P3b2/5c2P/P3P4/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_673",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Hongbiao - FANG ZhaoSheng\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "C2k1ab2/1R2a4/3Nb4/p7p/6p2/9/P3P3P/3cn4/2r6/3AKA3 w - - 0 1",
      "id": "puzzle_674",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI ShaoGeng - ZHOU XiaoPing\n2010\u5e74\u5317\u6b66\u5f53\u5c71\u676f\u5168\u56fd\u8c61\u68cb\u7cbe\u82f1\u8d5b 2010 ",
      "fen": "2bakab2/3P3R1/9/p3C3p/1n2r1p2/9/Pcr5P/4n1N2/4A4/1RBAK1B2 w - - 0 1",
      "id": "puzzle_675",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f90\u542f\u8fea - ZHAO Zitong\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "1C2k4/9/b2ab1n2/4p1C1p/pN4P2/8P/P1n1P4/4B4/4K2R1/1cBr1A3 b - - 0 1",
      "id": "puzzle_676",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u738b\u5174\u4e1a - \u5218\u851a\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "2b6/3k5/3NPa3/9/4C4/9/9/4B4/4A4/4KcB2 w - - 0 1",
      "id": "puzzle_677",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HongAheng - \u5b59\u9038\u9633\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "4kab2/4a4/4b4/5P3/2p5p/P1C1c4/6c1P/3AB4/4C4/2B1KA3 b - - 0 1",
      "id": "puzzle_678",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI HanLin - DONG Bo\n2010 Wei Shi cup Shandong Province xiangqi Team Tournament 2010 ",
      "fen": "4kabn1/4a4/4b4/1R4p1p/3NC4/3p4c/n1P1c4/N8/2CK5/2BA1ABr1 w - - 0 1",
      "id": "puzzle_679",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u6587\u5b89 - \u59dc\u6653\n2010\u5e74\u7b2c\u516d\u5c4a\u5357\u4eac\u5e02\u5f08\u6770\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "3akab2/9/3c2n2/p5p1p/9/6P2/P4n2P/3Ar3c/4A4/4KR2C b - - 0 1",
      "id": "puzzle_680",
      "title": "Mate in 1 move"
    },
    {
      "description": "MA YunRun - LI XinDa \nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "5a3/4k4/5a3/2C6/9/4P1N2/3c5/4B4/4p4/3K1n3 b - - 0 1",
      "id": "puzzle_681",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - ZHANG ShenHong\nChinese National Champion 2010 ",
      "fen": "1Cbakc3/5PR2/4b4/p7p/1P7/9/4r3P/4B1p2/4K4/9 w - - 0 1",
      "id": "puzzle_682",
      "title": "Mate in 1 move"
    },
    {
      "description": "LU WeiTao - \u738b\u5efa\u950b\nChina Team Championship 2010 ",
      "fen": "1N1k5/4N4/5cC2/9/9/6B2/9/3n5/4K4/1c1A5 w - - 0 1",
      "id": "puzzle_683",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u6587\u864e - \u5434\u5146\u534e\nChina Team Championship 2010 ",
      "fen": "3P1k3/4P4/4b4/3C5/9/9/5p3/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_684",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUN Yue - ZHANG GuoFeng\nChina Team Championship 2008 ",
      "fen": "3aka3/9/b8/4C3p/2N1p4/3c2B2/c3P3P/6N2/4A1n2/3K1AB2 b - - 0 1",
      "id": "puzzle_685",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Wanxian - \u4efb\u5ad2\u9896\n2010 National Junior Xiangqi Championship 2010 ",
      "fen": "2ba1k3/4a4/4b4/4n1p1p/4pr3/C3cNP2/P3r3P/6R1B/3pN2R1/2BAKA3 b - - 0 1",
      "id": "puzzle_686",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u90b0\u6676 - \u9648\u5b66\u800c\n2010 National Junior Xiangqi Championship 2010 ",
      "fen": "4kab2/C8/N4a3/p7p/2r6/4C4/P3c3P/3A2n2/3KA4/9 b - - 0 1",
      "id": "puzzle_687",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u6e05\u548c - TAO Lei\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "2b1ka3/4a4/7N1/p6Rp/9/9/P5n1P/3C1K3/6r2/3A1Ac2 b - - 0 1",
      "id": "puzzle_688",
      "title": "Mate in 1 move"
    },
    {
      "description": "GUAN ZhiNian - \u51b7\u6613\u7eb9\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "4R4/3k5/9/p2r1c2p/9/4R4/P7P/3A5/4p3r/3A1KB2 b - - 0 1",
      "id": "puzzle_689",
      "title": "Mate in 1 move"
    },
    {
      "description": "Zhang Lei - \u5f20\u5065\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "2b2a3/R8/3kbN3/9/2pN2p1p/9/7rc/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_690",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u848b\u6d01 - \u845b\u6653\u5f81\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "9/C2cak1r1/2R2a3/p5R1p/4p1p2/5r3/P5PcP/5C3/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_691",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO Yin - YAN ZuanZhao\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "3ckab2/1R2a4/b3r4/p8/3n4p/P1R6/2C6/N8/3rA4/2B1KAB2 b - - 0 1",
      "id": "puzzle_692",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u90c1\u80dc\u91d1 - ZHANG Jun\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "5Rb2/4k4/2n1b4/p1p3P1p/4p2N1/2P6/c2r4r/3CB4/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_693",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f20\u5065 - \u5434\u5146\u534e\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "1CRak2n1/3Na4/4b4/4p1p1p/p8/2P3P2/P7P/3R5/4r1nc1/3K2B2 b - - 0 1",
      "id": "puzzle_694",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8303\u8d8a - \u8d3e\u5146\u53d1\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "3k1ab2/4a1N2/3c5/9/p2Nc4/7p1/P8/3C1A3/9/4KA3 w - - 0 1",
      "id": "puzzle_695",
      "title": "Mate in 1 move"
    },
    {
      "description": "YANG BaoLiang - LAI Robin\nHong Kong Individual Championship 2000 ",
      "fen": "1R3aC2/3k2c2/3a5/p1P3P1p/5r3/9/8P/3A5/4K4/2BA5 w - - 0 1",
      "id": "puzzle_696",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN Jian Sheng - WANG HaoChang\nHong Kong Individual Championship 2000 ",
      "fen": "4kab2/4a1R2/2Ncbc3/p1p5p/9/6P2/P7P/3ACn3/4Ar1C1/2B1K1B2 b - - 0 1",
      "id": "puzzle_697",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHOU ShiJie - CHEN Yong Cheng\nHong Kong Individual Championship 2000 ",
      "fen": "2b2k1c1/4a1N2/4ba3/4p1R1p/C6P1/9/P3P3P/4N4/1n2A2r1/1cBAK4 w - - 0 1",
      "id": "puzzle_698",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAN Jing Yang - Xiao Jifu\nHong Kong Individual Championship 2000 ",
      "fen": "3k2C2/1R2aR3/3a5/C1p5p/6r2/9/P3P2r1/N3B4/7n1/2BAKA3 w - - 0 1",
      "id": "puzzle_699",
      "title": "Mate in 1 move"
    },
    {
      "description": "WENG ChuGuang - CHEN BoHui\nHong Kong Individual Championship 2000 ",
      "fen": "4kab2/4a4/4b4/p1p5p/1r3n3/P1c6/R5pcP/2N1CA3/6C2/4KAB2 w - - 0 1",
      "id": "puzzle_700",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIU Zhen Xing - YU Ming\nHong Kong Individual Championship 2001 ",
      "fen": "2Ca3R1/3Rak3/1r1c5/p3p1r1p/2p6/P8/2P1P3P/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_701",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN ZhenJie - WANG TieMing\nHong Kong Individual Championship 2001 ",
      "fen": "2b2a1C1/3k4C/2Nn1a3/8N/6c2/9/3c1n3/3AB4/4A4/4K4 w - - 0 1",
      "id": "puzzle_702",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG FuXiang - CHAN Tat Tai\nHong Kong Individual Championship 2002 ",
      "fen": "2R1C4/4k4/9/p5p2/9/9/9/1r7/9/3A1K3 b - - 0 1",
      "id": "puzzle_703",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u6c49\u660e - CHEN YaoLin\nHong Kong Individual Championship 2002 ",
      "fen": "3k5/4P4/3Cb4/2Nn5/9/5c3/1pc1p4/4B4/3C5/2BAK4 w - - 0 1",
      "id": "puzzle_704",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u6c49\u660e - \u9999\u73b2\u73d1\nHong Kong Individual Championship 2002 ",
      "fen": "3ak4/3P5/9/4P3p/9/9/9/5n3/1C2p4/2c2K3 b - - 0 1",
      "id": "puzzle_705",
      "title": "Mate in 1 move"
    },
    {
      "description": "LU BaoCheng - \u66f9\u5c11\u5ead\nHong Kong Individual Championship 2002 ",
      "fen": "3k1ab2/2N1a4/2n1b4/p5p2/7n1/6P2/P2C5/4C4/4c4/2BA1KB2 w - - 0 1",
      "id": "puzzle_706",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHONG Jiangning - \u9999\u73b2\u73d1\nHong Kong Individual Championship 2002 ",
      "fen": "2r1k1C2/2cRaR3/2n1baN2/p7p/2n1p4/9/Pcp3r1P/B8/4A4/1N2KAB2 w - - 0 1",
      "id": "puzzle_707",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHONG Jiangning - TAN Jing Yang\nHong Kong Individual Championship 2003 ",
      "fen": "3k1a3/R2N5/9/2p5p/pn7/5rp2/4R3P/5A3/4K1n2/3A1r3 w - - 0 1",
      "id": "puzzle_708",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG WeiKun - ZHEN YingKang\nHong Kong Individual Championship 2003 ",
      "fen": "4k4/3P1P2c/3ana3/3N5/2b6/2B6/5C3/5A3/9/2BAK4 w - - 0 1",
      "id": "puzzle_709",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG HaoChang - LIU YongLiang\nHong Kong Individual Championship 2003 ",
      "fen": "3a1a3/2R6/3k2n2/p3p1p1p/9/2NrC4/Pc6P/2C6/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_710",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI HuiDong - WONG Hok Him\nHong Kong Individual Championship 2003 ",
      "fen": "4k1b2/4a4/3ab4/6P2/9/4C4/4n4/4BC3/4p4/5K3 b - - 0 1",
      "id": "puzzle_711",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN YaoLin - YAN Jin Hong\nHong Kong Individual Championship 2003 ",
      "fen": "3k1a3/4a4/2n2c2N/p1p6/8p/2P3P2/P3N3P/4C4/3r1p3/2BAK2R1 b - - 0 1",
      "id": "puzzle_712",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUNG WenWei - ZHAO Guo Wei\nHong Kong Individual Championship 2003 ",
      "fen": "1n1aka1n1/9/4C3R/p3p4/1P7/6B2/4N3P/4C4/9/1crAKA3 w - - 0 1",
      "id": "puzzle_713",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u90ed\u5251\u950b - \u738b\u632f\u4e2d\nHong Kong Individual Championship 2003 ",
      "fen": "4k1b2/4a4/5a3/5N2P/6C2/P1n1N1B2/5p3/5An1B/3pAK3/9 b - - 0 1",
      "id": "puzzle_714",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5bff\u9f99 - WANG LiangDa\nHong Kong Individual Championship 2009 ",
      "fen": "2bakab2/9/2c6/9/6p2/8P/P8/9/4A4/3AK3R b - - 0 1",
      "id": "puzzle_715",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIANG Yi Le - WENG GuoLi\nHong Kong Individual Championship 2009 ",
      "fen": "3a1a3/3k5/9/p2N2N1p/4C4/6B2/c3Pn2P/9/4A1n2/2BA1K3 w - - 0 1",
      "id": "puzzle_716",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN YaoLin - LIANG Yi Le\nHong Kong Individual Championship 2009 ",
      "fen": "3k1ab2/4a4/2C6/p1p1p4/1P4n2/4r4/PR6P/4Br3/4K4/2CA3R1 b - - 0 1",
      "id": "puzzle_717",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - LIN XiaoLong\nHong Kong Team Champion 2002 ",
      "fen": "1C1k5/4a4/4ca3/9/9/8P/p3c4/4B4/4A2C1/4KA3 b - - 0 1",
      "id": "puzzle_718",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHAN Chee Mun - \u6881\u9510\u7965\nHong Kong Team Champion 2002 ",
      "fen": "2bak4/6R2/3a5/pN1r1C1rp/9/9/P3PC3/8B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_719",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u4ee5\u7433 - HUANG XueQian\nHong Kong Team Champion 2002 ",
      "fen": "4kab2/4a4/4b4/p3R3p/2p3c2/9/P1P2c1CP/Nr7/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_720",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u51af\u67cf\u71ca - WU GuoRong\nHong Kong Team Champion 2002 ",
      "fen": "2bR4C/5kN2/2c1ba3/1r2pR3/p7p/6P2/4P4/4B4/4A4/c3KAB2 w - - 0 1",
      "id": "puzzle_721",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8fde\u7693\u5a01 - LIANG Yuan Zhong\nHong Kong Team Champion 2002 ",
      "fen": "3a1kb2/4a4/6n2/p8/2p3b1p/9/P1P5P/2N6/3p1rN2/4K1BRc b - - 0 1",
      "id": "puzzle_722",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIAO JinHua - ZHU Wenfa\nHong Kong Team Champion 2002 ",
      "fen": "3a5/1C7/3abkN1b/4P4/8p/5C3/1n6P/B4A3/9/3A1K3 w - - 0 1",
      "id": "puzzle_723",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHU Wenhao - \u5b8b\u5bb6\u4fca\nHong Kong Team Champion 2002 ",
      "fen": "2ba1ab2/4k4/9/p8/8p/P8/8P/4C4/2n1K1Cr1/2B3B2 b - - 0 1",
      "id": "puzzle_724",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ece\u5321\u664b - \u9648\u6c49\u5149\nHong Kong Team Champion 2002 ",
      "fen": "3ak4/4a4/2P1R4/9/9/9/8P/4K4/7nc/c1BA1r3 b - - 0 1",
      "id": "puzzle_725",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u90b1\u5bb6\u5b9d - \u6234\u632f\u5b87\nHong Kong Team Champion 2002 ",
      "fen": "3akab2/9/b1n5n/p5p1p/9/P1P3P2/8P/9/4r4/2rA1K1R1 b - - 0 1",
      "id": "puzzle_726",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG WenChang - CHEN YeQun\nHong Kong Team Champion 2002 ",
      "fen": "9/4ak3/2P2aN2/3c4p/p3C4/5NcnP/P8/B4A3/4A1p2/4K4 w - - 0 1",
      "id": "puzzle_727",
      "title": "Mate in 1 move"
    },
    {
      "description": "XIAO JinHua - \u9093\u4f1f\u6797\nHong Kong Team Champion 2002 ",
      "fen": "5ab2/2N1k4/4ba3/3R4p/9/4r4/P7P/1C7/4A4/3AK3c w - - 0 1",
      "id": "puzzle_728",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ece\u56fd\u5a01 - \u5b8b\u5bb6\u4fca\nHong Kong Team Champion 2002 ",
      "fen": "1R7/3ka4/3ac4/9/9/PNB6/5n2P/4B4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_729",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u66fe\u8363\u6cf0 - ZHEN Qihua\nHong Kong Team Champion 2002 ",
      "fen": "3aR2R1/3n1k3/b4a3/p7p/6p2/9/P3P1P1P/4B1N2/3rA4/1crAK4 w - - 0 1",
      "id": "puzzle_730",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u4f0d\u4fca\u5112 - ZHOU Chaowei\nHong Kong Team Champion 2002 ",
      "fen": "1N1k1ab2/2R1anr2/9/8p/2p1C4/6p2/4P3P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_731",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ea6\u6842\u7098 - ZHENG Chulin\nHong Kong Team Champion 2002 ",
      "fen": "3akab2/9/2N1b1c1n/p1p3p2/2r5p/5N1c1/P3P3P/B2CC3B/3KA4/1r3A3 b - - 0 1",
      "id": "puzzle_732",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u84dd\u5b50\u6566 - \u6797\u88d5\u660c\nHong Kong Team Champion 2002 ",
      "fen": "1r1akab2/3r5/bc2c4/p3p3p/6R2/5R3/P1n1P1P1P/2N1C1N2/C1n1K4/2BA1AB2 b - - 0 1",
      "id": "puzzle_733",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG BingWei - WENG Weiqiang\nHong Kong Team Champion 2002 ",
      "fen": "1R1a1a3/n1c3C1c/bC1k5/p1N1p3p/2p3p2/9/P3PnP1P/6N2/5K3/2Br1AB2 b - - 0 1",
      "id": "puzzle_734",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIANG Yuan Zhong - LI YuTao\nHong Kong Team Champion 2002 ",
      "fen": "9/5k1N1/2N1b4/9/p5b2/4C4/n6cp/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_735",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9093\u4f1f\u6797 - \u66fe\u8363\u6cf0\nHong Kong Team Champion 2002 ",
      "fen": "9/9/3a1k3/6N2/2b2N3/P1B5p/9/9/9/2BAKA3 w - - 0 1",
      "id": "puzzle_736",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u96f7\u5b50\u660e - ZHOU Chaowei\nHong Kong Team Champion 2002 ",
      "fen": "3akabC1/7c1/4P4/2p2N3/P3nN3/2P6/9/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_737",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u84dd\u5b50\u6566 - \u5434\u4ee5\u7433\nHong Kong Team Champion 2002 ",
      "fen": "2bakab2/9/9/2p5p/P8/9/8P/3C1K3/4A2r1/3A3n1 b - - 0 1",
      "id": "puzzle_738",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ece\u56fd\u5a01 - \u9093\u4f1f\u6797\nHong Kong Team Champion 2002 ",
      "fen": "3aka3/1N2n4/4b1Ncb/p5p1p/2p1C4/P8/2P1P3P/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_739",
      "title": "Mate in 1 move"
    },
    {
      "description": "DING JianQuan - CHAN Keung On\nHong Kong Team Champion 2002 ",
      "fen": "r2k1a1n1/2N1a4/8c/8p/2p6/6P2/2p5P/2nC5/1cC6/1NBAKAB2 w - - 0 1",
      "id": "puzzle_740",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9b4f\u5353\u9e23 - WEN LiShen\nHong Kong Team Champion 2002 ",
      "fen": "4ka3/4a4/4b4/p2P4p/4c1bn1/4R3P/r8/3p5/4AN3/4KA3 b - - 0 1",
      "id": "puzzle_741",
      "title": "Mate in 1 move"
    },
    {
      "description": "FANG WenWei - \u6c6a\u5fd7\u8f89\nHong Kong Team Champion 2002 ",
      "fen": "3R1ab2/5k1c1/3Pb1N2/p6rp/4C4/9/P3P3n/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_742",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HenGru - ZHU Jiawei\nHong Kong Team Champion 2002 ",
      "fen": "2b2k3/2N6/5P3/9/5cb2/5C3/1p7/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_743",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHOU Chaowei - ZHONG Zhiyang\nHong Kong Team Champion 2002 ",
      "fen": "3ak1P2/4a4/4N4/3c2N2/9/9/P8/B3B1p2/4A4/3AK4 w - - 0 1",
      "id": "puzzle_744",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c22\u9648 - \u5e9e\u7199\u6717\nHong Kong Team Champion 2002 ",
      "fen": "3nkab2/c3a4/4b4/8p/4C1N2/2p3C2/c3P3P/4B3N/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_745",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5c39\u5efa\u90a6 - ZHU Limin\nHong Kong Team Champion 2002 ",
      "fen": "2bakabn1/3rc4/2n6/pNC1p3p/6p2/1RP6/P2r2P1P/4C3R/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_746",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Shi En - \u9b4f\u5353\u9e23\nHong Kong Team Champion 2002 ",
      "fen": "4ka3/4a4/7R1/p3n4/3P5/6B2/5r3/4B3C/4A4/3AK4 w - - 0 1",
      "id": "puzzle_747",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHU Wenhao - \u5c39\u5efa\u90a6\nHong Kong Team Champion 2002 ",
      "fen": "4kab2/9/b8/p4Rp2/9/5n1NP/P5P2/5K3/4r4/6B2 b - - 0 1",
      "id": "puzzle_748",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHONG Zhiyang - WU Qiang\nHong Kong Team Champion 2002 ",
      "fen": "5a3/1N1k5/3a5/3N4p/9/2P3r2/9/3A5/9/2B1KAB2 w - - 0 1",
      "id": "puzzle_749",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHEN Qihua - WENG GuoLi\nHong Kong Team Champion 2002 ",
      "fen": "4kab2/9/9/4c4/2b2c3/3p5/3p5/1N1A3CB/5K3/3A2B2 b - - 0 1",
      "id": "puzzle_750",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HenGru - \u5434\u4ee5\u7433\nHong Kong Team Champion 2002 ",
      "fen": "6bC1/3k5/2N1P4/p1n3N1p/9/P3p4/4c3P/4B4/3pA4/2BAK4 w - - 0 1",
      "id": "puzzle_751",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN ZeSheng - LU HongYe\nHong Kong Team Champion 2002 ",
      "fen": "2bk1a3/4a4/n3b4/6pCC/3cp4/4c1P2/9/2N1B4/2n1A4/3K1AB2 b - - 0 1",
      "id": "puzzle_752",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u4ee5\u7433 - \u8521\u4e1a\u6797\nHong Kong Team Champion 2002 ",
      "fen": "3a3R1/1R7/4k4/p1pr4p/9/5C3/P3P3P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_753",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - ZHOU Chaowei\nHong Kong Team Champion 2002 ",
      "fen": "3ak1b2/4a4/4b4/R3p3p/2p1c4/4cp3/P7P/4B4/4A4/2rRKA3 b - - 0 1",
      "id": "puzzle_754",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Yingkang - \u5c39\u5efa\u90a6\nHong Kong Team Champion 2002 ",
      "fen": "3k5/5P3/3N1a3/9/2b6/C8/3pp4/5A3/4A4/3K5 w - - 0 1",
      "id": "puzzle_755",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG WeiKun - ZHENG Yingkang\nHong Kong Team Champion 2003 ",
      "fen": "2ba2b2/4a2R1/5k3/p3N3p/5P3/2n2p3/P4r2P/5C3/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_756",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Zhuo Hao - \u9648\u5eb7\u7a0b\nHong Kong Team Champion 2003 ",
      "fen": "3k4C/3na4/7C1/p7p/1r7/4r4/P3P3P/4B4/3R5/2BAKA3 w - - 0 1",
      "id": "puzzle_757",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u667a\u52c7 - ZHANG GuoTai\nHong Kong Team Champion 2003 ",
      "fen": "3ak1b2/4a4/4b4/4p4/4c3p/6B2/R3C4/3AB1n2/9/3AK1Nr1 b - - 0 1",
      "id": "puzzle_758",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Shi En - \u8521\u4e1a\u6797\nHong Kong Team Champion 2003 ",
      "fen": "4kab1C/7R1/1cN5b/6p1p/p8/4C1P2/P1p1P3P/9/2c1A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_759",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u660e\u8d50 - ZHOU Chaowei\nHong Kong Team Champion 2003 ",
      "fen": "3a5/4a2R1/c3bk2b/p3p1P2/5n3/9/8r/4BN3/9/3AKAB2 w - - 0 1",
      "id": "puzzle_760",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c2d\u666f\u6df1 - \u6881\u9510\u7965\nHong Kong Team Champion 2003 ",
      "fen": "5a3/3k5/3a5/3NR4/n1PC4p/9/r7P/4B4/2c1A4/2BAK4 w - - 0 1",
      "id": "puzzle_761",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG BaoXian - \u9ec4\u5609\u4f1f\nHong Kong Team Champion 2003 ",
      "fen": "2baka3/7c1/4b4/p1N5p/7N1/1CP2p3/P4p2P/6n2/4AK3/3A2B1c b - - 0 1",
      "id": "puzzle_762",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u56fd\u96c4 - \u66fe\u5146\u4e1c\nHong Kong Team Champion 2003 ",
      "fen": "r1bakab2/9/nc4n2/p1p1p1p1p/9/4R4/P1P1c1P1P/1CNAC4/4N1r2/R1BAK1B2 b - - 0 1",
      "id": "puzzle_763",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHUANG Shili - CHEN ZeSheng\nHong Kong Team Champion 2003 ",
      "fen": "4kab2/4a4/4b1n2/p3p3p/9/9/P4N2P/C1nAB4/3r3R1/1c2KA3 b - - 0 1",
      "id": "puzzle_764",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6234\u632f\u5b87 - WENG ChuWen\nHong Kong Team Champion 2003 ",
      "fen": "3a1k3/C3a4/c4r1n1/2R1N1p1p/4p4/9/6P1P/B2ABA3/9/4K4 w - - 0 1",
      "id": "puzzle_765",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f20\u5b87\u6770 - \u5c91\u4f69\u4ed5\nHong Kong Team Champion 2003 ",
      "fen": "4kab2/4a4/4b4/p7p/6N2/4P4/P1R5P/4B4/4r4/2BK1c1r1 b - - 0 1",
      "id": "puzzle_766",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG BaoXian - \u674e\u5d07\u9ad8\nHong Kong Team Champion 2003 ",
      "fen": "2bak1bR1/4a4/9/p4rp1p/4N4/6P2/P7P/5C3/4K4/2B6 w - - 0 1",
      "id": "puzzle_767",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6768\u6c11\u5149 - \u5c39\u5efa\u90a6\nHong Kong Team Champion 2003 ",
      "fen": "1R1ak4/9/C1N2a3/8p/2p1P4/p5P2/2n5P/9/4K4/5AB2 w - - 0 1",
      "id": "puzzle_768",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5218\u542f\u9716 - \u5ed6\u6210\nHong Kong Team Champion 2003 ",
      "fen": "4kab2/4a4/4b1n2/p3p1p1p/9/P1R2NP2/R3Pn2P/3CB4/4r4/2cK1C1r1 b - - 0 1",
      "id": "puzzle_769",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO Guo Wei - \u9648\u5b66\u57fa\nHong Kong Team Champion 2003 ",
      "fen": "2bk2b2/4C4/9/5N3/6p2/9/4P1P1P/4B4/3CA4/2B1KA3 w - - 0 1",
      "id": "puzzle_770",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u987e\u632f\u5f3a - \u5f20\u5b87\u6770\nHong Kong Team Champion 2003 ",
      "fen": "4k1b2/3Rc4/4b4/9/2p6/P7p/2P6/9/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_771",
      "title": "Mate in 1 move"
    },
    {
      "description": "XU BingKui - \u5ed6\u6210\nHong Kong Team Champion 2003 ",
      "fen": "C1bP1k3/9/5P3/9/2p3p1p/9/1c4P1P/4B1N2/4n4/2BA1K3 w - - 0 1",
      "id": "puzzle_772",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO Guo Wei - HUANG BingWei\nHong Kong Team Champion 2003 ",
      "fen": "9/3k1P3/C1N6/9/6b2/4c4/4pp3/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_773",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN BoHui - \u90b1\u9038\u90a6\nHong Kong Team Champion 2003 ",
      "fen": "1R1cka3/4a4/b8/p8/4R3p/9/P5r2/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_774",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u793c\u8363 - WU WeiHao\nHong Kong Team Champion 2003 ",
      "fen": "2C2a3/3k5/4bNC2/9/4p3p/c8/3c4P/4B4/2n1A4/3K1AB2 b - - 0 1",
      "id": "puzzle_775",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u793c\u8363 - WU WeiHao\nHong Kong Team Champion 2003 ",
      "fen": "2ba1kb2/2N1a4/2n1cc1r1/p3p3p/1rp3p2/2P6/P3PR3/2N1CC3/9/2BAKABn1 w - - 0 1",
      "id": "puzzle_776",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f6d\u9510\u6587 - CHU Wenhao\nHong Kong Team Champion 2003 ",
      "fen": "9/9/3k1a3/4R4/9/9/2r6/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_777",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHIU Yu Kuen - ZHANG WenChang\nHong Kong Team Champion 2003 ",
      "fen": "2Pak4/4a4/4N4/9/4n4/6Pcp/4P4/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_778",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u80b2\u9e9f - LIANG ShuRen\nHong Kong Team Champion 2003 ",
      "fen": "3k1Pb2/4a4/9/5c3/5Cb2/2nC5/2c6/2N6/4K4/3A1A3 w - - 0 1",
      "id": "puzzle_779",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u5609\u8f89 - ZHANG ZhiFeng\nHong Kong Team Champion 2003 ",
      "fen": "2bakab2/9/5C3/p3p3p/6pn1/9/P3P1P1P/2nCB1N2/1R2A4/1crAK4 b - - 0 1",
      "id": "puzzle_780",
      "title": "Mate in 1 move"
    },
    {
      "description": "FANG WenWei - JIANG WeiKun\nHong Kong Team Champion 2003 ",
      "fen": "4kab2/4C4/4b4/1P7/N1c1p4/3c5/4Pp3/4B4/4A1n2/3K1AB2 b - - 0 1",
      "id": "puzzle_781",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG ZhiFeng - \u8c2d\u666f\u6df1\nHong Kong Team Champion 2003 ",
      "fen": "C1ba1k3/9/3cb4/3N5/pP1n4p/9/P3P2RP/8p/4A4/2B1KArc1 b - - 0 1",
      "id": "puzzle_782",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u793c\u8363 - \u8521\u4e1a\u6797\nHong Kong Team Champion 2003 ",
      "fen": "2bak4/4a4/4b4/6R1p/4c2N1/3c4P/9/4B4/3KA4/1r3AB2 b - - 0 1",
      "id": "puzzle_783",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u51af\u67cf\u71ca - CHEN ZhenJie\nHong Kong Team Champion 2003 ",
      "fen": "5a3/4k1N2/1R6b/4p3p/p8/9/2P1P3P/4BC3/5K3/c1nr5 b - - 0 1",
      "id": "puzzle_784",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6234\u632f\u5b87 - ZHANG ZhiFeng\nHong Kong Team Champion 2003 ",
      "fen": "2b2ab2/3P1k3/2N2c3/9/p2N2p2/9/6n1P/1n2B4/3CA4/2BA1K3 w - - 0 1",
      "id": "puzzle_785",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU WeiHao - \u9648\u5b66\u57fa\nHong Kong Team Champion 2003 ",
      "fen": "5RbCc/3kn4/b5P2/p3p3p/rC7/2P6/4P3P/2r1B1N2/9/3AKAB2 w - - 0 1",
      "id": "puzzle_786",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u56fd\u96c4 - \u674e\u5d07\u9ad8\nHong Kong Team Champion 2003 ",
      "fen": "4ka3/4a4/n8/4p3p/p1b5P/4c4/P5n2/5K1C1/4A4/2BA3r1 b - - 0 1",
      "id": "puzzle_787",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u5609\u4eae - WU Qiang\nHong Kong Team Champion 2003 ",
      "fen": "2b1k4/3P1R1N1/n2ab4/2p3p1p/p8/9/P7P/4r3B/4A4/2BA1K1c1 w - - 0 1",
      "id": "puzzle_788",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ece\u672c\u7eb2 - \u5434\u5609\u4eae\nHong Kong Team Champion 2003 ",
      "fen": "3ckabRC/4a4/4C4/2p1n4/p8/2P6/P3c3P/2n1B4/2r6/3K1A3 b - - 0 1",
      "id": "puzzle_789",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - ZHOU Chaowei\nHong Kong Team Champion 2003 ",
      "fen": "2bak1b2/9/3a5/9/1N7/n1B6/9/9/1n1K5/9 b - - 0 1",
      "id": "puzzle_790",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u82cf\u4fca\u5f3a - \u674e\u5c55\u5c27\nHong Kong Team Champion 2011 ",
      "fen": "2b3b2/4R4/3k2C2/p3P3p/9/6P2/P2r4P/4B1N2/3cA4/2BAK4 w - - 0 1",
      "id": "puzzle_791",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6797\u664b\u8d24 - GAN YuanFeng\nHong Kong Team Champion 2011 ",
      "fen": "3rkab2/4a4/4b4/pRC5p/6p2/2p6/P3P3P/4Brc2/5Rn2/2BA1K3 b - - 0 1",
      "id": "puzzle_792",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5218\u88d5\u4f73 - \u5362\u9526\u534e\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/4b3n/p1p6/c2R2p1p/2P1C4/c4rCnP/4B1N2/2N1A4/2BAK4 w - - 0 1",
      "id": "puzzle_793",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u559c\u5e73 - \u5c39\u5e0c\u6717\nHong Kong Team Champion 2011 ",
      "fen": "R2ckab2/4a4/4b4/5N1n1/1r7/2P1C4/P5P1P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_794",
      "title": "Mate in 1 move"
    },
    {
      "description": "YU Xiong Wei - \u674e\u6e05\u6e05\nHong Kong Team Champion 2011 ",
      "fen": "r1b6/4R4/4bk3/p5N1p/2p1p1p2/9/P7P/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_795",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG JunJie - \u8427\u9526\u6743\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/4b4/p3C3p/3R2N2/2P6/4P3P/1r1A1K3/7r1/c2n1AB2 b - - 0 1",
      "id": "puzzle_796",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9a6c\u5fd7\u626c - \u6768\u60e0\u96c4\nHong Kong Team Champion 2011 ",
      "fen": "2ba1k3/4a4/4b4/2p1p3p/N4np2/2P1c4/PR7/B2CK4/3cAr3/5AB2 b - - 0 1",
      "id": "puzzle_797",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u4f1f\u96c4 - \u674e\u5146\u9f99\nHong Kong Team Champion 2011 ",
      "fen": "4kaR2/4a4/b1c2c3/p6r1/4P1PCn/8R/P7p/2rA5/4K1n2/2BA5 b - - 0 1",
      "id": "puzzle_798",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u6e05\u6e05 - \u6b27\u5fd7\u5f3a\nHong Kong Team Champion 2011 ",
      "fen": "2bak4/3c5/3ab4/p8/9/9/4c3p/4B3B/4A4/4KA3 b - - 0 1",
      "id": "puzzle_799",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6797\u664b\u8d24 - \u8fde\u667a\u5174\nHong Kong Team Champion 2011 ",
      "fen": "2b1ka3/4a4/2n1b4/p3p3p/9/1Cr2R2P/P3cp3/4B4/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_800",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6881\u65e5\u5b81 - LI ShaoBo\nHong Kong Team Champion 2011 ",
      "fen": "2ba1NR1C/4k4/n2a5/p1p6/9/PrP1P1B2/4n3P/3A5/2r1c4/1R2K4 w - - 0 1",
      "id": "puzzle_801",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8881\u7ef4\u5c27 - \u5f20\u5b66\u714c\nHong Kong Team Champion 2011 ",
      "fen": "5a3/r3ar1C1/b2k5/8p/p3R1p2/9/P1P3P1P/N2p5/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_802",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5c39\u5e0c\u6717 - \u738b\u4f1f\u5cf0\nHong Kong Team Champion 2011 ",
      "fen": "2bk3C1/4R4/2c1b4/p5p1C/2p6/9/P3N3P/8B/9/2BNKA3 w - - 0 1",
      "id": "puzzle_803",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u8fea\u7ef4 - \u6c5f\u5fb7\u4fe1\nHong Kong Team Champion 2011 ",
      "fen": "2bak1b2/4a4/4c1C2/p3R1p1p/9/4n1P2/P1p5P/6r2/N8/3AKAB2 b - - 0 1",
      "id": "puzzle_804",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f20\u5b50\u61cb - ZHOU Yehai\nHong Kong Team Champion 2011 ",
      "fen": "3k1a3/9/b3ba3/Nc5PC/p8/9/P8/3A5/4A4/2c1K4 b - - 0 1",
      "id": "puzzle_805",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8881\u7ef4\u5c27 - ZHOU Kepeng\nHong Kong Team Champion 2011 ",
      "fen": "r1bak2c1/4a2C1/4c3b/6R1p/pn2C4/2p2NP2/P3P3P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_806",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIANG Yuan - XIAO JinHua\nHong Kong Team Champion 2011 ",
      "fen": "3aP4/4k4/4ba3/9/9/9/9/9/1n1KACc2/5A3 b - - 0 1",
      "id": "puzzle_807",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8427\u9526\u6743 - YANG GuoZhang\nHong Kong Team Champion 2011 ",
      "fen": "2bak4/4a4/4b4/4p4/3n4p/C1B3P2/P4R2P/3A1C2c/2cN3r1/3A1K3 b - - 0 1",
      "id": "puzzle_808",
      "title": "Mate in 1 move"
    },
    {
      "description": "LONG GuangMing - \u7f57\u8363\u5fe0\nHong Kong Team Champion 2011 ",
      "fen": "r2a3R1/5k3/4ba3/5N2p/4CC3/9/p5P1P/9/9/2BA1KB2 w - - 0 1",
      "id": "puzzle_809",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Haoxian - \u51af\u8000\u660e\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/c3b1n2/p1P5p/9/4C4/P3r3P/4B1C2/R3A4/3AK4 w - - 0 1",
      "id": "puzzle_810",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHOU Yi - \u674e\u6e05\u6e05\nHong Kong Team Champion 2011 ",
      "fen": "r1b1kab2/4a4/2c1c4/CR2p3p/2p4n1/4PRNr1/P1P5P/2N1B1Cn1/9/3AKAB2 w - - 0 1",
      "id": "puzzle_811",
      "title": "Mate in 1 move"
    },
    {
      "description": "BI Riming - \u9648\u5f66\u7eb6\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/4b4/p7p/3RC4/9/P5P1P/3K3c1/4Nr3/1NBA1AB2 w - - 0 1",
      "id": "puzzle_812",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u738b\u4f1f\u5cf0 - \u8881\u5fd7\u5f3a\nHong Kong Team Champion 2011 ",
      "fen": "2b1ka3/4a4/2R1b1n2/p3p1p1p/9/2P6/P3P1P1P/B8/3r2c2/c1rAKAB2 b - - 0 1",
      "id": "puzzle_813",
      "title": "Mate in 1 move"
    },
    {
      "description": "DENG WeiDa - CHIU Yu Kuen\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/1C1na4/4b4/9/p3cN3/2P1nN2p/P2p5/4B4/3K5/3A1A3 b - - 0 1",
      "id": "puzzle_814",
      "title": "Mate in 1 move"
    },
    {
      "description": "Yang Xiang Yu - MA Liang\nHong Kong Team Champion 2011 ",
      "fen": "1CbRrkr2/5c3/7c1/p8/9/9/N1P1P4/4BR3/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_815",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8fde\u667a\u5174 - \u9648\u8d2f\u6052\nHong Kong Team Champion 2011 ",
      "fen": "3k5/4a4/n2N1a2b/2p5p/4R4/5C3/4P4/9/4A4/3K1Ar1c w - - 0 1",
      "id": "puzzle_816",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u5609\u4eae - \u9093\u5411\u660e\nHong Kong Team Champion 2011 ",
      "fen": "3a1a3/3k4C/4C4/5N3/7P1/c2c5/4p4/4B4/4K4/5A3 w - - 0 1",
      "id": "puzzle_817",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u9547\u70fd - \u6881\u5065\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/2n1b4/p1p1p3p/9/2P6/P3P4/B2C2NC1/4AK1n1/3A4c b - - 0 1",
      "id": "puzzle_818",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6768\u53ef - XU BingKui\nHong Kong Team Champion 2011 ",
      "fen": "1rbakab2/1C7/4c4/p1p3P1p/6r2/4c4/P1P4RP/4B3C/4A4/1R1AK1B2 b - - 0 1",
      "id": "puzzle_819",
      "title": "Mate in 1 move"
    },
    {
      "description": "BI Riming - \u674e\u5c55\u5c27\nHong Kong Team Champion 2011 ",
      "fen": "1C1k1a3/C1R1a4/4b4/p3p3p/7r1/9/P3n3P/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_820",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZOU Forthee - \u5f6d\u5e38\u4f1f\nHong Kong Team Champion 2011 ",
      "fen": "2ba1k3/5c3/5a3/9/9/3N5/8P/5n2B/4p4/5KB2 b - - 0 1",
      "id": "puzzle_821",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - \u8c2d\u6d69\u6587\nHong Kong Team Champion 2011 ",
      "fen": "C1P3b1N/3P1k3/3aba3/9/9/6B2/9/3n2p2/9/5K3 w - - 0 1",
      "id": "puzzle_822",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u51af\u8000\u660e - ZHOU Kepeng\nHong Kong Team Champion 2011 ",
      "fen": "2bk5/9/9/9/6b2/5n3/9/5N3/4p4/5K3 b - - 0 1",
      "id": "puzzle_823",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8427\u9526\u6743 - \u6797\u664b\u8d24\nHong Kong Team Champion 2011 ",
      "fen": "2b6/4a4/c1nabk3/p1p3p1p/4p4/9/P1P1N3P/5Cc2/3KA4/1RB2A3 w - - 0 1",
      "id": "puzzle_824",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5218\u88d5\u4fca - \u8521\u690d\u575a\nHong Kong Team Champion 2011 ",
      "fen": "1R1rk1Cn1/8r/2N1b4/9/p1p3b2/9/n1P1P4/N3B4/5K3/2BA5 w - - 0 1",
      "id": "puzzle_825",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c22\u6cc9\u5bbd - \u6797\u6f8d\u660c\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/C1R6/3a2c2/2N6/8p/9/2Pc1np1P/9/4A3N/2B1KAB2 b - - 0 1",
      "id": "puzzle_826",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7f2a\u5c55\u5b87 - \u9648\u7acb\u626c\nHong Kong Team Champion 2011 ",
      "fen": "r1baka3/4n4/6Nr1/p3p3p/2p3bc1/9/P1P5P/4C4/3R1R3/2BAKAB2 w - - 0 1",
      "id": "puzzle_827",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIN BuYu - \u5f6d\u5e38\u4f1f\nHong Kong Team Champion 2011 ",
      "fen": "4ka3/3P1nc2/5a2n/7Np/p5b2/4C4/9/B2C5/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_828",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6768\u53ef - \u8427\u9526\u6743\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/4b3n/p5P1p/2p6/8P/P1P1c4/3K4B/6C1R/2r2n3 b - - 0 1",
      "id": "puzzle_829",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Jinwei - \u90b1\u4ee5\u5cb3\nHong Kong Team Champion 2011 ",
      "fen": "5k3/4a4/6C2/5Cp2/4c4/3pN4/2P2n2p/9/4c4/2BAKA3 b - - 0 1",
      "id": "puzzle_830",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9a6c\u5fd7\u626c - \u5f20\u5b66\u714c\nHong Kong Team Champion 2011 ",
      "fen": "3ck4/4a4/3cb4/4R4/6r2/1n7/3n4P/4B3B/4A4/4KA3 b - - 0 1",
      "id": "puzzle_831",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZOU Forthee - \u6e29\u5146\u826f\nHong Kong Team Champion 2011 ",
      "fen": "2bak4/4a4/4bc3/p6Cp/9/3r5/8P/1Nn6/9/4K4 b - - 0 1",
      "id": "puzzle_832",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHOU ShiJie - CHEN YaoLin\nHong Kong Team Champion 2011 ",
      "fen": "2R3b2/5k3/4N4/p8/9/4C4/P3P1p1P/4B4/3rArc2/4KAB2 w - - 0 1",
      "id": "puzzle_833",
      "title": "Mate in 1 move"
    },
    {
      "description": "Yang Xiang Yu - CENG Ni Zhang\nHong Kong Team Champion 2011 ",
      "fen": "3nkab2/3Ra4/4b3n/1C1R5/3r2p1p/pr7/8P/B3C4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_834",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAI Robin - CAI Qiu Sheng\nHong Kong Team Champion 2011 ",
      "fen": "r1bakn3/1c1na2r1/4R4/3N2R1p/p8/4C4/P7P/4B1N2/9/2BAKA3 w - - 0 1",
      "id": "puzzle_835",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6797\u98de\u864e - WEN LiShen\nHong Kong Team Champion 2011 ",
      "fen": "3akab2/9/bR4n2/p3p3p/9/1N2nNP2/P2r1c2P/2R5B/4A2r1/2BA1K3 b - - 0 1",
      "id": "puzzle_836",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHONG Jiangning - \u5f20\u8fbe\u5149\nHong Kong Team Champion 2011 ",
      "fen": "1P3Nb2/9/3c1k3/4P4/5C3/9/4p2n1/4B4/3KA4/5AB2 w - - 0 1",
      "id": "puzzle_837",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u536b\u660e - DONG YuRong\nHong Kong Team Champion 2011 ",
      "fen": "2bnkab2/4a2r1/1c7/p4N2p/2p3p2/9/P1P3n1P/1CN6/8R/2BAKAB2 w - - 0 1",
      "id": "puzzle_838",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6f58\u51ef\u58f0 - \u7f57\u709c\u6770\nHong Kong Team Champion 2011 ",
      "fen": "2ck1a3/4P2R1/3abN3/9/P1b2r3/9/9/4B4/4K4/5A3 w - - 0 1",
      "id": "puzzle_839",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7f57\u8363\u5fe0 - ZHONG Xi\nHong Kong Team Champion 2011 ",
      "fen": "2C1kab2/4aR3/6n2/1r2p1p1p/2p6/4C1P2/P6rP/4c4/3cA4/2BA1K3 b - - 0 1",
      "id": "puzzle_840",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u4e39\u5c3c\u5c14 - \u674e\u6e05\u6e05\nHong Kong Team Champion 2011 ",
      "fen": "9/3ck4/4ca3/3R5/9/9/P8/4rA3/3pC4/4KA3 b - - 0 1",
      "id": "puzzle_841",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u6587\u6770 - \u6768\u60e0\u96c4\nHong Kong Team Champion 2011 ",
      "fen": "2b2P3/4k4/3a1a3/9/6b1N/2B1r4/2p6/9/9/3K5 b - - 0 1",
      "id": "puzzle_842",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u8d2f\u6052 - \u9ec4\u5b89\u8363\nHong Kong Team Champion 2011 ",
      "fen": "3akab2/9/5c3/9/9/6p2/9/9/5K3/5A3 b - - 0 1",
      "id": "puzzle_843",
      "title": "Mate in 1 move"
    },
    {
      "description": "YU Xiong Wei - \u6b27\u5fd7\u5f3a\nHong Kong Team Champion 2011 ",
      "fen": "3k1a3/3n2P2/b4a3/2N6/2b6/2B6/9/9/4K4/9 w - - 0 1",
      "id": "puzzle_844",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u90ed\u80b2\u4f1f - CAI Qiu Sheng\nHong Kong Team Champion 2011 ",
      "fen": "3R5/4k4/1N2b4/8p/2b6/9/2P6/4r3B/3c1K3/2BA5 w - - 0 1",
      "id": "puzzle_845",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u4f59\u4fca\u8d24 - ZHONG Xi\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/4b1R1c/p3p4/4c4/2B3p2/r8/C4C3/N3AK1n1/3A5 b - - 0 1",
      "id": "puzzle_846",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5362\u4f1f\u5f3a - \u8c2d\u6d69\u6587\nHong Kong Team Champion 2011 ",
      "fen": "2c1kn2R/5R3/nr2b4/p1p3C1p/4p1P2/9/P3P3P/2r1B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_847",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG JunJie - \u5f20\u5b66\u5e7f\nHong Kong Team Champion 2011 ",
      "fen": "2baka3/9/4n4/3r4p/2b3p2/4R2R1/P3P1P1P/4B4/4A3N/cr1AK4 b - - 0 1",
      "id": "puzzle_848",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9a6c\u5fd7\u626c - \u9648\u5146\u6743\nHong Kong Team Champion 2011 ",
      "fen": "3a1kb2/4a4/4b4/3R2R2/p8/9/P7P/B8/4K4/3r1r3 b - - 0 1",
      "id": "puzzle_849",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIANG Yuan - \u53f6\u4e91\u9f99\nHong Kong Team Champion 2011 ",
      "fen": "3akab2/9/c1N1b3n/prp1p1p2/5r2p/2PR2c2/P3P3P/C1N1C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_850",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG ZiQiang - CENG Ni Zhang\nHong Kong Team Champion 2011 ",
      "fen": "3k1a3/9/7R1/p3R2cr/9/6P1r/P8/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_851",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIANG Yuan - \u5f20\u5b66\u5e7f\nHong Kong Team Champion 2011 ",
      "fen": "5a3/3k2C2/2N1Pan2/2cP4p/9/9/8P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_852",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c2d\u6d69\u6587 - ZHENG Jinwei\nHong Kong Team Champion 2011 ",
      "fen": "2ba1k3/4a4/9/4P3p/2nc5/p3cNB2/9/5A3/3K5/9 b - - 0 1",
      "id": "puzzle_853",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u8fea\u7ef4 - ZHOU Yi\nHong Kong Team Champion 2011 ",
      "fen": "2baka3/4n4/5c3/7r1/p5R2/4P4/P2n2P1P/3A2N2/5K3/1NB2AB2 b - - 0 1",
      "id": "puzzle_854",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c22\u4ef2\u660e - \u90ed\u5c55\u6e90\nHong Kong Team Champion 2011 ",
      "fen": "2b1k2C1/4a4/2n1b1c2/p3p1N1p/2r3c2/5R3/P3P3P/2N1B4/4A4/2BAKR3 w - - 0 1",
      "id": "puzzle_855",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u5229\u660c - LONG GuangMing\nHong Kong Team Champion 2008 ",
      "fen": "6b2/4k4/3a5/9/5c1C1/6B2/2n6/5N3/4p4/3K5 b - - 0 1",
      "id": "puzzle_856",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u96f7\u9e3f\u624d - \u7518\u6d69\u94a7\nHong Kong Team Champion 2008 ",
      "fen": "CR1akab2/9/2N1b1n2/p3p3p/6p2/9/P5P1P/4B4/4Arn2/3AK1B2 w - - 0 1",
      "id": "puzzle_857",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUNG WenWei - \u79e6\u767e\u91cc\nHong Kong Team Champion 2008 ",
      "fen": "2bak1b2/r3a4/4c4/p2R2p1p/5N1r1/9/P1P3P1P/4C1N2/3RA4/2c1KAB2 w - - 0 1",
      "id": "puzzle_858",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u4e18\u5b97\u5143 - LI KangWah\nHong Kong Team Champion 2008 ",
      "fen": "2bakab2/9/9/C1p3p2/9/2P1p2N1/8P/R2KBA3/2r3c2/1r3AB2 b - - 0 1",
      "id": "puzzle_859",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u745e\u5f3a - \u53f6\u6625\u8317\nHong Kong Team Champion 2008 ",
      "fen": "2bak4/9/4ba3/4p2C1/4c3p/4c1C2/1r4P1P/3K5/3RA4/2BA2B2 b - - 0 1",
      "id": "puzzle_860",
      "title": "Mate in 1 move"
    },
    {
      "description": "HO Wing Kit - \u8c22\u6cc9\u5bbd\nHong Kong Team Champion 2008 ",
      "fen": "1r1aka3/4c4/9/p3R4/2N6/4C4/P3P3P/2N1B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_861",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Jinwei - \u9ec4\u80b2\u9e9f\nHong Kong Team Champion 2008 ",
      "fen": "2baka3/9/3c5/p8/9/2PN5/3p5/B4A3/3K5/4rA2R b - - 0 1",
      "id": "puzzle_862",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZOU Forthee - \u4f0d\u9707\u6607\nHong Kong Team Champion 2008 ",
      "fen": "3akab2/9/4b1n2/p3p1p1p/9/2P1P1PN1/9/3ACR3/1n2K4/c2r1AB1c b - - 0 1",
      "id": "puzzle_863",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ece\u56fd\u5a01 - \u9648\u5143\u52f3\nHong Kong Team Champion 2008 ",
      "fen": "2bak1b1r/3Ra4/6n2/p1p1pnp1p/9/6P2/P1C1c3P/B3B4/4A4/3K1A1R1 w - - 0 1",
      "id": "puzzle_864",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u66fe\u5146\u4e1c - DONG YuRong\nHong Kong Team Champion 2008 ",
      "fen": "2bnkab2/4ar3/1c7/p4N2p/2p6/6p2/P1P3n1P/1C4N2/8R/2BAKAB2 w - - 0 1",
      "id": "puzzle_865",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8881\u4f1f\u7965 - LI Zhuo Hao\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/2P1a4/4bc3/p5N2/5nb1P/9/5C3/4B4/4AK3/3A5 b - - 0 1",
      "id": "puzzle_866",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f20\u8403\u9e9f - \u9648\u745e\u5f3a\nHong Kong Team Champion 2008 ",
      "fen": "3C1k3/1C2P1N2/b4n3/p7p/9/9/P2pc3P/3NB4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_867",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f90\u6653\u6866 - LU BaoCheng\nHong Kong Team Champion 2008 ",
      "fen": "2b1kc3/4a4/4ba3/9/3R5/9/4C4/3p5/1r7/3K5 b - - 0 1",
      "id": "puzzle_868",
      "title": "Mate in 1 move"
    },
    {
      "description": "PAN ZongYao - \u53f6\u6625\u8317\nHong Kong Team Champion 2008 ",
      "fen": "4kaR1C/5R3/4b2r1/p2rp3p/6bn1/1c7/P3P3P/4B4/4AC3/2BAK4 w - - 0 1",
      "id": "puzzle_869",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c22\u9648 - \u5434\u5609\u73ae\nHong Kong Team Champion 2008 ",
      "fen": "2ba1k3/4a4/1c4n2/4p1C1p/2p3b2/5r3/3RP1P1P/N3B4/7rC/R2nKAB2 b - - 0 1",
      "id": "puzzle_870",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u5609\u4eae - \u674e\u5d07\u9ad8\nHong Kong Team Champion 2008 ",
      "fen": "3a1k1C1/3Na1N2/3c2R1b/p7p/2pn2P2/3r5/P3P3P/9/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_871",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6797\u632f\u8f89 - \u79e6\u767e\u91cc\nHong Kong Team Champion 2008 ",
      "fen": "3akab2/4n2c1/br7/p3R2Np/6N2/9/P1p1P3P/C8/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_872",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ad8\u5b50\u9633 - \u5c91\u4f69\u4ed5\nHong Kong Team Champion 2008 ",
      "fen": "2b1ka3/4a4/4b1n2/R1c1p2c1/2p1P3p/P5p2/4N1r2/C6C1/4A4/2BAK1B2 b - - 0 1",
      "id": "puzzle_873",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u90ed\u80b2\u4f1f - CHEN BoHui\nHong Kong Team Champion 2008 ",
      "fen": "CC3a3/4k4/3a2n2/4p1N1p/2bP2b2/2B1n1P2/P7c/1R7/4KN1r1/2BA1A1c1 w - - 0 1",
      "id": "puzzle_874",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUNG WenWei - \u8521\u601d\u654f\nHong Kong Team Champion 2008 ",
      "fen": "1nbaR4/5k3/3r1cN2/p1p1p3p/9/2P6/4Pc3/1C2BC3/9/2BAKA3 w - - 0 1",
      "id": "puzzle_875",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u5609\u4eae - \u9ec4\u9707\u5f3a\nHong Kong Team Champion 2008 ",
      "fen": "3a1aR2/4k4/n2Nn4/2p5p/p1P4r1/1r7/P7P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_876",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u5143\u52f3 - \u9a6c\u542f\u4e50\nHong Kong Team Champion 2008 ",
      "fen": "4kab2/4a4/2R1b4/p1p1p1p2/8p/6P2/9/5R3/4r2r1/c1BA1K3 b - - 0 1",
      "id": "puzzle_877",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u53f6\u97e6\u6881 - ZHENG Haiying\nHong Kong Team Champion 2008 ",
      "fen": "C1bak1b2/3R5/3a2Ncn/4p4/2p5p/9/P3P2rP/4n4/2C1A4/2BK1A3 w - - 0 1",
      "id": "puzzle_878",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHONG Jiangning - \u53f6\u6625\u8317\nHong Kong Team Champion 2008 ",
      "fen": "3akab2/9/1cN1b1n2/p7p/9/3R2pr1/P3P1c1P/1C2C1N1B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_879",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHU Peichen - \u9648\u5609\u6717\nHong Kong Team Champion 2008 ",
      "fen": "1rb1ka3/CN7/4ba3/P2R4p/6p2/9/3p2n1P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_880",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG JunJie - \u79e6\u767e\u91cc\nHong Kong Team Champion 2008 ",
      "fen": "3k1abC1/6N2/3ab4/3R1N2p/p3p4/5r3/P7P/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_881",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN YaoLin - WANG LiangDa\nHong Kong Team Champion 2008 ",
      "fen": "2bakc3/4a4/b8/4P1P2/9/2P1R1B2/5r3/6n2/3K5/9 b - - 0 1",
      "id": "puzzle_882",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ad8\u5b50\u9633 - \u738b\u5e86\u5409\nHong Kong Team Champion 2008 ",
      "fen": "2bk4C/4a3C/4ba1N1/p8/2p2c3/6p2/c8/5A3/2n1K4/2BA5 b - - 0 1",
      "id": "puzzle_883",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8521\u601d\u654f - \u8c2d\u6d69\u6587\nHong Kong Team Champion 2008 ",
      "fen": "2bak1r2/3Pa4/4N4/p4R3/2p3p1p/9/n1P5P/4C4/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_884",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG YanLong - \u7530\u6d69\u71ca\nHong Kong Team Champion 2008 ",
      "fen": "5a3/2Nk1P3/5a3/9/2b6/6R2/5p3/4B4/9/2BAKA1r1 w - - 0 1",
      "id": "puzzle_885",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9a6c\u5fd7\u6768 - ZHENG Weiguang\nHong Kong Team Champion 2008 ",
      "fen": "2b1k4/5c3/3a2P2/p8/9/P8/9/3K1A3/9/9 b - - 0 1",
      "id": "puzzle_886",
      "title": "Mate in 1 move"
    },
    {
      "description": "LONG GuangMing - \u5bff\u9f99\nHong Kong Team Champion 2008 ",
      "fen": "C2a5/R3ak3/n3b1n2/p3p3p/7r1/P1P3P2/4P3P/9/NC1K5/1cB1rAB2 b - - 0 1",
      "id": "puzzle_887",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7f57\u7693\u5149 - \u7518\u656c\u5b87\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/4a4/9/p4P2p/3r5/9/P3R2nP/4C4/4A4/2B1KAB2 b - - 0 1",
      "id": "puzzle_888",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - \u8c22\u9648\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/3R1P3/8b/8p/2r3n2/9/8P/p3C4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_889",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZOU Forthee - \u6797\u632f\u8f89\nHong Kong Team Champion 2008 ",
      "fen": "2bak4/4a4/9/4p4/p1b3p2/4c4/6p2/2C1BA2B/1n2A4/5K3 w - - 0 1",
      "id": "puzzle_890",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5c39\u6c49\u5f66 - CHEN ShaoHeng\nHong Kong Team Champion 2008 ",
      "fen": "1nbk1aR2/4a4/9/p1p1p3p/6p2/6P2/P1P1c3P/C1r1C4/4A4/2B1KAB2 b - - 0 1",
      "id": "puzzle_891",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG FuXiang - \u5bff\u9f99\nHong Kong Team Champion 2008 ",
      "fen": "1R1akab2/2Nr5/4b3n/4p4/p3c4/5R2P/2pr5/4B4/4A4/2CAK1B2 b - - 0 1",
      "id": "puzzle_892",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u4e18\u5b97\u5143 - \u8c22\u9648\nHong Kong Team Champion 2008 ",
      "fen": "2bak4/4a4/4c3b/p1p1CR2p/4rP3/2P6/9/4B4/4A4/2BAKC3 w - - 0 1",
      "id": "puzzle_893",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - CHEN BoHui\nHong Kong Team Champion 2008 ",
      "fen": "3k2b2/4a1N2/4b4/p7p/2p6/4P4/P1n3P1P/2C1BKn2/1c3C3/5rB2 b - - 0 1",
      "id": "puzzle_894",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u8000\u4fca - \u8c2d\u6d69\u6587\nHong Kong Team Champion 2008 ",
      "fen": "2ba1kb2/4a4/5c2n/p1p1C1p2/5r3/2P6/PR2c3P/3CBA3/9/2BA1K3 b - - 0 1",
      "id": "puzzle_895",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u6b23\u6cfd - \u4f59\u6893\u5065\nHong Kong Team Champion 2008 ",
      "fen": "3akab2/9/2n1b4/2c1p3p/p5p2/2B6/4C1n1P/9/4A4/2BAK2N1 b - - 0 1",
      "id": "puzzle_896",
      "title": "Mate in 1 move"
    },
    {
      "description": "MO ZhanTu - HUANG Haoyi\nHong Kong Team Champion 2008 ",
      "fen": "2bak4/3c5/3a2n2/C2c2C1p/3P5/6B2/3p4P/1N7/3K5/3A1A3 b - - 0 1",
      "id": "puzzle_897",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u5c11\u4f1f - ZHANG JinCong\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/4ac3/4b4/9/2b2C2p/5nB2/8P/1N7/6n2/5K3 b - - 0 1",
      "id": "puzzle_898",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5ed6\u97e6\u5c27 - \u4f55\u5bb6\u5b9d\nHong Kong Team Champion 2008 ",
      "fen": "1C1k1a3/2R1a4/C8/4p3p/9/6P1c/P3c4/4B4/4Ar3/2BAK4 w - - 0 1",
      "id": "puzzle_899",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7530\u6d69\u71ca - \u79e6\u767e\u91cc\nHong Kong Team Champion 2008 ",
      "fen": "3k5/4R4/9/4N3p/4p4/p1P5P/P3P1P2/3A5/9/2B1KAB2 w - - 0 1",
      "id": "puzzle_900",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHANG WenChang - \u5218\u5e94\u660c\nHong Kong Team Champion 2008 ",
      "fen": "2ba2b2/5k1N1/2nac4/P7C/9/6B2/4P1c2/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_901",
      "title": "Mate in 1 move"
    },
    {
      "description": "LEI Xong Cai - \u674e\u9526\u534e\nHong Kong Team Champion 2008 ",
      "fen": "2b2k3/2Nca4/5N3/9/9/3C5/5p1p1/3A5/2n1K4/3A2B2 w - - 0 1",
      "id": "puzzle_902",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7f57\u7693\u5149 - \u6797\u6770\u8d24\nHong Kong Team Champion 2008 ",
      "fen": "1C2kab2/1N2a2c1/2r5n/3R5/r1b1p3p/C5B2/P3P3P/6N2/9/1R1AKAB2 w - - 0 1",
      "id": "puzzle_903",
      "title": "Mate in 1 move"
    },
    {
      "description": "WEN HuiQiang - DENG RongSen\nHong Kong Team Champion 2008 ",
      "fen": "2bk1ab2/2R1a2C1/9/2p5p/p8/2P1p4/P7P/B5n2/5K3/3r1A3 b - - 0 1",
      "id": "puzzle_904",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u65bd\u4fca\u5b89 - \u9648\u5609\u6717\nHong Kong Team Champion 2008 ",
      "fen": "3a1k3/4n2R1/4Nan2/p2R4p/2p2r3/6P2/P1r5P/5C3/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_905",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6881\u5b87\u701a - ZHANG JunJie\nHong Kong Team Champion 2008 ",
      "fen": "1r2kab2/4a4/4b2C1/p1p1C4/4p1p2/2P1n1P1p/Pc3R2P/4B4/4A4/3A1KBR1 w - - 0 1",
      "id": "puzzle_906",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6797\u98de\u96c4 - \u53f6\u6625\u8317\nHong Kong Team Champion 2008 ",
      "fen": "1r2ka1r1/3R5/2n1Ca3/p2N4p/2pn2p2/9/Pcc3P1P/2N6/9/1RBAKAB2 w - - 0 1",
      "id": "puzzle_907",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u6717\u8f69 - \u53f6\u97e6\u6881\nHong Kong Team Champion 2008 ",
      "fen": "1Cbnkab2/3Na4/5c3/p3PN2p/2P3p2/9/P8/3rB4/5n2c/1RB1KA3 b - - 0 1",
      "id": "puzzle_908",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU Qiang - \u9648\u5143\u52f3\nHong Kong Team Champion 2008 ",
      "fen": "3ak1b2/4a4/4b4/p2R4p/2p1C4/4P1B2/P1P5P/3KB4/7nc/7r1 b - - 0 1",
      "id": "puzzle_909",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5c39\u6c49\u5f66 - \u9648\u5065\u8f89\nHong Kong Team Champion 2008 ",
      "fen": "5a2C/9/3kb2R1/p1N1p3p/6P2/4P1c2/P7P/2pA1A3/3K5/2r6 w - - 0 1",
      "id": "puzzle_910",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f20\u5b66\u5e7f - \u9a6c\u5fd7\u626c\nHong Kong Team Champion 2008 ",
      "fen": "3k5/4R4/3ab3b/9/6p1p/3R5/P1P3P1P/N2CB4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_911",
      "title": "Mate in 1 move"
    },
    {
      "description": "LU BaoCheng - \u8521\u4e1a\u6797\nHong Kong Team Champion 2008 ",
      "fen": "2baka3/9/b1c6/3NC1P2/p8/6P2/PN2P4/B2A5/4A4/1c2K4 b - - 0 1",
      "id": "puzzle_912",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7f57\u7693\u5149 - LIANG Yuan\nHong Kong Team Champion 2008 ",
      "fen": "2b1ka3/4a4/4b4/p3p4/9/2P1P1P1p/9/2n1B4/3CA2r1/2B1KARc1 b - - 0 1",
      "id": "puzzle_913",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u745e\u5f3a - ZOU Forthee\nHong Kong Team Champion 2008 ",
      "fen": "6b2/3k1NN2/3a5/pR6p/6b2/6P2/Pn2r3c/4B4/4K4/1R1A2B2 w - - 0 1",
      "id": "puzzle_914",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u5fd7\u806a - CHEN ShaoHeng\nHong Kong Team Champion 2008 ",
      "fen": "4k3C/5R3/3a5/9/9/9/6n2/9/4r4/cC1A1K3 b - - 0 1",
      "id": "puzzle_915",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u90ed\u80b2\u5049 - \u6eab\u5146\u826f\nHong Kong Team Champion 2008 ",
      "fen": "2b1kab2/4aRcr1/cR2P4/p2r4p/2p3pn1/9/P1P3P1P/3CC1N2/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_916",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u99ac\u5fd7\u63da - HUANG Haoyi\nHong Kong Team Champion 2008 ",
      "fen": "4kab2/4a4/4b4/p7p/5r3/P1B5P/4p4/4n1p2/c2RA4/3K1A3 b - - 0 1",
      "id": "puzzle_917",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u51af\u5bb6\u4fca - ZHOU ShiJie\nHong Kong Team Champion 2009 ",
      "fen": "4kab2/4a4/2n1b4/p3c1N1p/2c2P3/P1B6/8P/3A5/9/3CKAB2 b - - 0 1",
      "id": "puzzle_918",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Weicheng - \u674e\u5fd7\u4f1f\nHong Kong Team Champion 2009 ",
      "fen": "C4k3/3RR4/b1c1b4/9/p4r3/2p3P1P/P1c1P2r1/2N1B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_919",
      "title": "Mate in 1 move"
    },
    {
      "description": "PAN ZongYao - \u4fde\u4f69\u598d\nHong Kong Team Champion 2009 ",
      "fen": "5ab2/3k5/3ab1C2/3R4p/3P5/9/6c1P/B5N2/9/3ACKB2 w - - 0 1",
      "id": "puzzle_920",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u548f\u541b - \u8427\u9526\u6743\nHong Kong Team Champion 2009 ",
      "fen": "2baka3/3r5/4b2c1/pN2n4/8P/P8/4P4/9/4K1n2/3A1AB2 b - - 0 1",
      "id": "puzzle_921",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u51af\u8000\u548c - \u6797\u98de\u864e\nHong Kong Team Champion 2009 ",
      "fen": "2bk1abC1/4a4/2n1c4/p4P2P/2p6/3r3R1/P8/4B1n2/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_922",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u82cf\u4fca\u5f3a - XU BingKui\nHong Kong Team Champion 2009 ",
      "fen": "3aka3/9/4b4/p4r2p/9/PR2c4/9/2R1C3B/3rA4/4KAB1c b - - 0 1",
      "id": "puzzle_923",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u8d5e\u5b89 - \u9648\u4f1f\u96c4\nHong Kong Team Champion 2009 ",
      "fen": "8C/4P4/b1nkc2R1/2N6/9/9/c5P2/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_924",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHOU Junchang - XIAO JinHua\nHong Kong Team Champion 2009 ",
      "fen": "3akab2/9/2n1b3n/p3p3p/9/4C1c1P/P1P1P4/4B4/r3Ar3/1N2KA1Cc b - - 0 1",
      "id": "puzzle_925",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u65bd\u6069\u8000 - HUANG XueQian\nHong Kong Team Champion 2009 ",
      "fen": "2bk1a3/4a4/4b3n/p7p/2PC5/5R1N1/2n1P3P/3K5/9/1cB1rAB2 b - - 0 1",
      "id": "puzzle_926",
      "title": "Mate in 1 move"
    },
    {
      "description": "WONG Shu Kai - \u674e\u5c55\u5c27\nHong Kong Team Champion 2009 ",
      "fen": "3a1ab2/9/3kcN3/1R6p/7n1/3N2P2/P3P3P/4BC3/9/3AKAB2 w - - 0 1",
      "id": "puzzle_927",
      "title": "Mate in 1 move"
    },
    {
      "description": "YE HaiFan - \u6797\u6770\u8d24\nHong Kong Team Champion 2009 ",
      "fen": "5a3/1N1k5/8b/3P5/2b6/9/9/4K4/4A4/2BA2B2 w - - 0 1",
      "id": "puzzle_928",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6881\u60df - \u5434\u5fd7\u660e\nHong Kong Team Champion 2009 ",
      "fen": "r2akabr1/1R7/2n1b1nc1/p1p1p3p/9/2P6/P3P1p1P/C1N1C4/4AR2N/2BAK1c2 b - - 0 1",
      "id": "puzzle_929",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN Zheng - \u9648\u6c85\u94ed\nHong Kong Team Champion 2009 ",
      "fen": "2bk1a3/1NR1a4/c3b4/1N7/5n3/5p3/P7P/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_930",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG BingWei - \u6768\u6c38\u5065\nHong Kong Team Champion 2009 ",
      "fen": "2b2a3/1r3k3/3R5/5N3/2b1r3p/6pN1/P3P3P/4B4/2R1A4/2BK1A3 w - - 0 1",
      "id": "puzzle_931",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u6cfd\u6c11 - \u9ec4\u4fca\nHong Kong Team Champion 2009 ",
      "fen": "4kab2/4a4/2n1b1n2/p1p1p3p/3P2p2/P7P/3r5/4C1N2/4C1R2/c1RAKAB2 b - - 0 1",
      "id": "puzzle_932",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6881\u5b9d\u5c71 - \u9ec4\u548f\u541b\nHong Kong Team Champion 2009 ",
      "fen": "1n1a1kb2/1CN6/4ba3/p3p3p/4c4/2P2R3/P5p1P/2n1B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_933",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6881\u60df - \u9ece\u6b23\u7855\nHong Kong Team Champion 2009 ",
      "fen": "2b1kab2/4a4/4c4/3r4p/C3C1p2/9/P5P1c/2NA1n3/9/3K1AB2 b - - 0 1",
      "id": "puzzle_934",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHU Rizheng - \u8881\u4f1f\u7965\nHong Kong Team Champion 2009 ",
      "fen": "3aka3/c6R1/4b1n2/pr6p/2p1P4/6P2/2n5P/4BN3/4K4/c1Rr1ABN1 b - - 0 1",
      "id": "puzzle_935",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u5b50\u5f18 - \u9a6c\u9756\nHong Kong Team Champion 2009 ",
      "fen": "1CbRck3/1R7/2c2Cn1b/p1p1p1p1p/7r1/P8/2P1P1P1P/6N2/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_936",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c2d\u8000\u660c - \u8881\u7ef4\u5c27\nHong Kong Team Champion 2009 ",
      "fen": "2baka3/9/2R6/p7p/9/PN1pP1p2/9/4K1c2/1r2A4/5A1c1 b - - 0 1",
      "id": "puzzle_937",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8d56\u5353\u65b0 - \u4f55\u4e16\u9e4f\nHong Kong Team Champion 2009 ",
      "fen": "2ba1R3/7NC/4k3b/p7p/9/6P2/c1r5P/3A5/9/2cK1AB2 w - - 0 1",
      "id": "puzzle_938",
      "title": "Mate in 1 move"
    },
    {
      "description": "SU FuYin - CHEN YongLe\nHong Kong Team Champion 2009 ",
      "fen": "4ka3/4a4/2N1b4/C7p/2P6/P8/8P/2NK1n3/4r4/9 b - - 0 1",
      "id": "puzzle_939",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u5c11\u4f1f - \u6881\u5065\nHong Kong Team Champion 2009 ",
      "fen": "3k1ab2/9/3a5/3c4p/2bNc4/p8/8P/3nB1p2/8C/3K5 b - - 0 1",
      "id": "puzzle_940",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c2d\u6d69\u6587 - HUANG Haoyi\nHong Kong Team Champion 2009 ",
      "fen": "3k1abn1/1C2a4/4b4/p3p1p1p/9/2C3P2/P2rc2n1/B3B4/4A4/2R1KA3 b - - 0 1",
      "id": "puzzle_941",
      "title": "Mate in 1 move"
    },
    {
      "description": "TANG HaoWen - \u7518\u656c\u5b87\nHong Kong Team Champion 2009 ",
      "fen": "2ba1kb2/3na4/9/3N1C2p/4P4/3c2P2/3p5/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_942",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6234\u5bb6\u548c - \u6797\u632f\u8f89\nHong Kong Team Champion 2009 ",
      "fen": "2bak1br1/4ar3/n1C6/p3R3p/6p2/2P6/P3NnP1P/4B1N2/4A4/3AK1B2 b - - 0 1",
      "id": "puzzle_943",
      "title": "Mate in 1 move"
    },
    {
      "description": "PAN ZongYao - \u9648\u6d9b\nHong Kong Team Champion 2009 ",
      "fen": "4kab2/4a4/4b4/R7p/9/4P4/P8/3ABC3/6cr1/2BA1K2c b - - 0 1",
      "id": "puzzle_944",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u4f0d\u9707\u6607 - \u5f20\u4ef2\u6717\nHong Kong Team Champion 2009 ",
      "fen": "5a3/1N1ka4/4b4/C8/3n5/9/p8/4B4/3K5/3A1A3 w - - 0 1",
      "id": "puzzle_945",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u6c76\u9f99 - \u82cf\u4fca\u5f3a\nHong Kong Team Champion 2009 ",
      "fen": "2ba1k3/4a4/4b4/p1r5p/5Cp2/6n2/P3c3P/4B4/4A4/3RKAB2 b - - 0 1",
      "id": "puzzle_946",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6881\u60df - \u5f20\u8fbe\u671b\nHong Kong Team Champion 2009 ",
      "fen": "4kab2/4a4/4bc3/p6C1/3r4p/2P2N3/P4n2P/2n1B4/4A4/1cRAK1B2 b - - 0 1",
      "id": "puzzle_947",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ece\u56fd\u5a01 - \u5f6d\u5e38\u4f1f\nHong Kong Team Champion 2009 ",
      "fen": "2b4C1/3k4C/3aNa3/4p4/9/pnP6/4P4/4B4/9/1cBAKA3 w - - 0 1",
      "id": "puzzle_948",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHU Rizheng - \u5218\u4f1f\u6210\nHong Kong Team Champion 2009 ",
      "fen": "3k1ab2/4a4/2n1b4/p3p3p/9/2P1Pr3/P3c2CP/3rB4/4A2R1/2BAK4 b - - 0 1",
      "id": "puzzle_949",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u4f1f\u6770 - \u6e29\u5146\u826f\nHong Kong Team Champion 2009 ",
      "fen": "5k3/9/4RP3/8p/p8/2pp5/9/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_950",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u5c11\u4f1f - \u53f6\u4e91\u9f99\nHong Kong Team Champion 2009 ",
      "fen": "3k1abr1/9/3ab4/p7p/4C1p2/9/P2R4P/2r1B1N2/1c2A2c1/RN2KAB2 w - - 0 1",
      "id": "puzzle_951",
      "title": "Mate in 1 move"
    },
    {
      "description": "HO Sammy - \u6797\u4e16\u6587\nHong Kong Team Champion 2009 ",
      "fen": "1R3aC2/2rk5/9/p7p/2p6/2P6/P7P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_952",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u5b50\u806a - WONG Shu Kai\nHong Kong Team Champion 2009 ",
      "fen": "r1bck4/4aRN2/4ba3/p1n5p/2p4C1/6P2/P3P3P/N3B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_953",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6234\u5bb6\u548c - \u4f0d\u9707\u6607\nHong Kong Team Champion 2009 ",
      "fen": "2bak4/4a4/4b4/p2nCC2p/4c4/5c3/P1PR2n1P/5KN2/7r1/1NBA1AB2 b - - 0 1",
      "id": "puzzle_954",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6881\u60df - \u90b1\u4ee5\u5cb3\nHong Kong Team Champion 2009 ",
      "fen": "1r2kab2/4a4/4b4/8p/5c3/C4R2P/P3P4/9/3cApn2/3AK4 b - - 0 1",
      "id": "puzzle_955",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6e29\u5146\u826f - \u5f20\u5747\u6e90\nHong Kong Team Champion 2009 ",
      "fen": "2bak4/4a4/4P4/1P7/9/4N3c/9/1p1A5/4AK1n1/9 b - - 0 1",
      "id": "puzzle_956",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u65bd\u6069\u8000 - \u5f6d\u5e38\u4f1f\nHong Kong Team Champion 2009 ",
      "fen": "5k3/9/3P1N3/9/9/6n1C/9/5A3/3p5/4KA3 b - - 0 1",
      "id": "puzzle_957",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Zhuo Hao - ZHOU Yehai\nHong Kong Team Champion 2009 ",
      "fen": "2bak4/4a4/N3b4/p3C4/4P3p/2B6/9/4BNn2/1R2Ar3/3AK3c b - - 0 1",
      "id": "puzzle_958",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHONG Xi - \u8c2d\u8000\u660c\nHong Kong Team Champion 2009 ",
      "fen": "3a1k3/2N6/5P3/p7p/5c3/2P2C3/8P/3A4B/9/cnB1K4 w - - 0 1",
      "id": "puzzle_959",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u541b\u5f66 - \u4fde\u4f69\u598d\nHong Kong Team Champion 2009 ",
      "fen": "2C1kab2/4a4/2n6/2p1p3p/3c2p2/P8/2CR2P1P/2nA5/3K5/4rr3 b - - 0 1",
      "id": "puzzle_960",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5362\u4f1f\u5f3a - \u7f57\u8363\u5b97\nHong Kong Team Champion 2009 ",
      "fen": "2b1ka3/3Ra4/9/7Np/p8/2P6/P3P3P/B1c6/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_961",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5434\u4ee5\u7433 - \u6234\u5bb6\u548c\nHong Kong Team Champion 2009 ",
      "fen": "2Rnka3/9/2N6/p1p5p/6p2/4p4/P1P3P1P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_962",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9a6c\u542f\u4e50 - \u8427\u9526\u6743\nHong Kong Team Champion 2009 ",
      "fen": "2c1k4/4a4/2r1ba3/3R4p/P1bPC4/6r2/8P/5A2n/3CK4/3A5 w - - 0 1",
      "id": "puzzle_963",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u3000\u6b63 - \u5362\u4f1f\u5f3a\nHong Kong Team Champion 2009 ",
      "fen": "2b2RcC1/4k4/1r2b4/p5p2/9/2p6/P3c3P/9/4AK3/2BA2B2 w - - 0 1",
      "id": "puzzle_964",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Haiying - WU Qiang\nHong Kong Team Champion 2009 ",
      "fen": "5ab2/3k5/C4a3/4R4/3P5/6r2/p7P/B8/9/3AKAB2 w - - 0 1",
      "id": "puzzle_965",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u536b\u660e - \u5f20\u4ef2\u6717\nHong Kong Team Champion 2009 ",
      "fen": "2b1k2C1/3R2C2/1r3c3/p1p1n3p/5c3/2P6/P3P1P1P/4B1N2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_966",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9ec4\u548f\u541b - \u5f20\u5b66\u5e7f\nHong Kong Team Champion 2009 ",
      "fen": "2bak1b2/4a4/6n2/C7p/6n2/2r6/c3P3P/9/4A4/3AK1R2 b - - 0 1",
      "id": "puzzle_967",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9648\u4f1f\u96c4 - \u65bd\u6069\u8000\nHong Kong Team Champion 2009 ",
      "fen": "5k2C/4a4/3a2n2/8p/6p2/7R1/3r4P/3A5/1n1K5/2B2r1c1 b - - 0 1",
      "id": "puzzle_968",
      "title": "Mate in 1 move"
    },
    {
      "description": "YE HaiFan - LEI Xong Cai\nHong Kong Team Champion 2009 ",
      "fen": "2bakab2/4nc3/1N7/p3R1C1p/2P6/9/P5P1P/4C4/5K3/2B1r1nc1 b - - 0 1",
      "id": "puzzle_969",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8881\u5fd7\u5f3a - \u6234\u5bb6\u548c\nHong Kong Team Champion 2009 ",
      "fen": "3ak1b2/4a4/4b1R2/p1p1C3p/3N3n1/P8/2P1P1c1P/6N1B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_970",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u65bd\u6069\u8000 - \u9a6c\u9756\nHong Kong Team Champion 2009 ",
      "fen": "2bakabr1/4n4/4c3n/p1P1C3p/6p2/9/Pr2P1c1P/N1C1B1N2/9/R1BAKA1R1 w - - 0 1",
      "id": "puzzle_971",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u66fe\u6c38\u52e4 - \u6881\u60df\nHong Kong Team Champion 2009 ",
      "fen": "2rk1ab2/4a4/3Nb1n2/n3C3p/p2c2p2/5R3/P3P1P1P/4C1N2/1r7/2BAKAB2 w - - 0 1",
      "id": "puzzle_972",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN De - HO Wing Kit\nHong Kong Individual Championship 2002 ",
      "fen": "2bak4/4a4/3Rb4/1r4n1p/p4N3/9/P7P/4Cp3/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_973",
      "title": "Mate in 1 move"
    },
    {
      "description": "YUNG Tak Keung - LI KangWah\nHong Kong Individual Championship 2002 ",
      "fen": "3a1ab2/4k2P1/9/5P3/9/9/9/n8/4A4/2p1KA3 b - - 0 1",
      "id": "puzzle_974",
      "title": "Mate in 1 move"
    },
    {
      "description": "YUNG Tak Keung - CHEN GuoWei\nHong Kong Individual Championship 2002 ",
      "fen": "3a1k3/7R1/5a3/5P3/1n2P3p/p4C3/2r2c2P/4C3B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_975",
      "title": "Mate in 1 move"
    },
    {
      "description": "TENG Siong Liang - MA ZhongWei\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "1P1C1k3/3Na4/9/4P4/1c7/4pc3/9/4B4/4A1n2/2BA1K3 b - - 0 1",
      "id": "puzzle_976",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHOW Keng Wa - \u7ef4\u63d0\u5854\u5c14\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "1Rba1acnC/4k1N2/2c1b4/9/p8/6p2/P3P3P/N2pB4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_977",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN TuJiong - \u7ef4\u63d0\u5854\u5c14\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "2bakabnr/4n4/1c2r2c1/p1P1C3p/6p2/9/P3P1P1P/2C3N2/9/RNBAKABR1 w - - 0 1",
      "id": "puzzle_978",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7ef4\u63d0\u5854\u5c14 - SHOSHI Kazuharo\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "4kab2/4a4/3cb4/pC2p3p/2p3p2/7r1/2P1n3P/4BA3/2n4cN/3K1AB1R b - - 0 1",
      "id": "puzzle_979",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7ef4\u63d0\u5854\u5c14 - THIAN Min Nyap\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "C1bakab2/9/6n2/4p3p/6c2/2B1P4/P5r1P/2n2A3/2CK3c1/2B2A3 b - - 0 1",
      "id": "puzzle_980",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7ef4\u63d0\u5854\u5c14 - KUANG JinGuang\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "4kabr1/4a4/4b1n1c/p3p1p1p/6P2/4P4/Pn2C1C1P/9/1r4N2/3AKAB2 b - - 0 1",
      "id": "puzzle_981",
      "title": "Mate in 1 move"
    },
    {
      "description": "QIU Liang - \u7ef4\u63d0\u5854\u5c14\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "r1ba1k2r/4a4/4bN3/p3C3p/4R4/9/P1p3p1c/4B4/9/R2AKAB2 w - - 0 1",
      "id": "puzzle_982",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIANG QingMing - \u7ef4\u63d0\u5854\u5c14\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "C1Rakabn1/3R5/3c4r/p3p1p2/8p/P5P2/4P3P/B3C1N1B/4A4/4KA3 w - - 0 1",
      "id": "puzzle_983",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u52aa\u72c4\u598d\u8482 - \u5c71\u5bb6\u7231\u7f8e\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "3k1ab2/6N2/3ab4/p2R4p/2p1r4/9/P1P1C2cP/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_984",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u52aa\u72c4\u598d\u8482 - \u8339\u8776\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "2bk1ab2/6N2/3a5/p3p1p1p/2p6/3R2P2/P1P1c2rP/2rCB2c1/4A4/2BAK2R1 w - - 0 1",
      "id": "puzzle_985",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8339\u8776 - CHIENG Hie Mee\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "2bakab2/9/2n3c1n/p1p1p1p1p/5r3/P3c1P1P/9/R3Cr3/4N4/2BAKAB2 b - - 0 1",
      "id": "puzzle_986",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8339\u8776 - \u5c71\u5bb6\u7231\u7f8e\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "2bakab2/5r3/6n2/p3p1N1p/2pn5/P3P1P1P/2PRc4/4C3B/1c2Ar3/1NBAK4 b - - 0 1",
      "id": "puzzle_987",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN LiChun - CHIENG Ming Chuo\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "9/2Nka4/5a3/5n3/2b3P2/7cp/5c3/3C5/4C4/2BAKAB2 w - - 0 1",
      "id": "puzzle_988",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - ZHENG YiHong\nChina National Xiangqi League 2011 ",
      "fen": "9/3ka4/2N1PP3/5N3/6n2/6B2/4c4/3A5/3p5/4K1B2 w - - 0 1",
      "id": "puzzle_989",
      "title": "Mate in 1 move"
    },
    {
      "description": "JIN So - JIANG Chuan\nChina National Xiangqi League 2011 ",
      "fen": "4k4/4a4/1N2ba3/9/6b2/p2p5/c7P/3ABC3/2nN2C2/1c1K1AB2 b - - 0 1",
      "id": "puzzle_990",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN Zhuo - \u96f7\u9e4f\nChina National Xiangqi League 2011 ",
      "fen": "4kc3/4aR3/b2ab4/2p6/P8/2P3C1P/4rp1n1/3NB4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_991",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO GuoRong - JIANG Chuan\nHuaiyin - Han Cup International Xiangqi Tournament 2011 ",
      "fen": "5kN2/4N4/4C4/p3c4/1n7/9/P6n1/4B4/3pA4/2C1KAB1c b - - 0 1",
      "id": "puzzle_992",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5ed6\u90a6\u5747 - \u718a\u8c26\u9a70\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "3ak1b2/4a4/4b4/2N3R1P/1P1n5/2r2pp2/9/4C4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_993",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG Wei - LU Geng\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "4kab2/4a4/4b4/2C3P2/9/4p4/9/Nc2p4/2c2K3/5AB2 b - - 0 1",
      "id": "puzzle_994",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f20\u798f\u751f - \u5f20\u6625\u71d5\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "2b1k2C1/4a4/6N2/6P2/4c1bcp/9/1p1p4P/B4A2B/4ACn2/3K5 w - - 0 1",
      "id": "puzzle_995",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5ed6\u90a6\u5747 - \u9648\u7406\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "3a2b2/5P2c/b3k4/3P5/9/9/9/4BA3/5C3/3K5 w - - 0 1",
      "id": "puzzle_996",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u9093\u5b9c\u5175 - \u97e9\u601d\u751f\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2b1k4/5R2R/8n/p3r1p1p/2r6/P6NP/7c1/N2Ap4/9/4KA3 b - - 0 1",
      "id": "puzzle_997",
      "title": "Mate in 1 move"
    },
    {
      "description": "KUANG JinGuang - AKIYOSHI Kazuyoshi\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2bak4/4a3n/4b4/pN1P1R3/6p1p/9/9/B1r1C4/4A4/4KAB1c w - - 0 1",
      "id": "puzzle_998",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6c60\u7530\u5f69\u6b4c - \u9093\u5b9c\u5175\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2bakab2/1c2n1c2/2n2R3/p1p1p3p/4P1p2/1CP6/P2rN3P/B3C4/4A4/R3KAB2 b - - 0 1",
      "id": "puzzle_999",
      "title": "Mate in 1 move"
    },
    {
      "description": "SHOSHI Kazuharo - LIN ShiXiong\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "3N2C2/4k1c2/3ab1c2/pr6p/4R4/5pr2/P3P1nRP/3C2N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1000",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG BiFu - AKIYOSHI Kazuyoshi\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "1R3a2r/3ka4/4b3n/8p/2b1C1p2/9/P3P1P1P/3C2N2/4A1c2/2B1KAB2 w - - 0 1",
      "id": "puzzle_1001",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG ShiQi - DANG GuoLei\nChina Team Championship 2008 ",
      "fen": "4kaR2/4a4/4b4/9/C2c5/4n4/9/N3r4/3KA4/2B6 b - - 0 1",
      "id": "puzzle_1002",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG YingYing - SUN Yue\nChina Team Championship 2008 ",
      "fen": "3akab2/4c4/4b1n2/p2c4p/4N1p2/5N3/P7P/4C3B/9/2BK1A3 w - - 0 1",
      "id": "puzzle_1003",
      "title": "Mate in 1 move"
    },
    {
      "description": "DANG GuoLei - SHI JingJing\nChina Team Championship 2008 ",
      "fen": "3ak1b2/4aR3/b3R4/p3C3p/3Np2r1/2P3p2/P5c1P/7rB/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1004",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO Li - GUI Yi\nChina Team Championship 2008 ",
      "fen": "2ba1a3/3k4C/4P1N2/9/p1n6/5p3/2p2c3/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1005",
      "title": "Mate in 1 move"
    },
    {
      "description": "CENG HongTao - HAN DaYong\nChina Team Championship 2008 ",
      "fen": "2ca1kb2/2N1a4/2n6/6N1p/1nb1P4/C5c2/1p7/9/4AC3/2B1KAB2 w - - 0 1",
      "id": "puzzle_1006",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f90\u5efa\u658c - \u8463\u6587\u6ed4\nChina Team Championship 2008 ",
      "fen": "1R3a1r1/2Nka4/2ncb3b/p1pc4p/9/2P6/P3C4/1C7/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1007",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG Wei - LU Geng\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "4kab2/4a4/4b4/2C3P2/9/4p4/9/Nc2p4/2c2K3/5AB2 b - - 0 1",
      "id": "puzzle_1008",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6797\u5ddd\u535a - \u66fe\u5c11\u6743\nEarth Cup xiangqi tournament 2011 ",
      "fen": "2b1k4/4a4/4b4/8p/p3c4/9/P7P/5A3/2R1rr3/2RK5 b - - 0 1",
      "id": "puzzle_1009",
      "title": "Mate in 1 move"
    },
    {
      "description": "KONG LingBang - CHEN JianChang\nEarth Cup xiangqi tournament 2011 ",
      "fen": "3aka3/4c4/4b4/2N2R2p/2b6/3r5/P5N1P/8B/4A4/1cBAK4 b - - 0 1",
      "id": "puzzle_1010",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5218\u6625\u96e8 - \u4f0d\u7115\u8c6a\nEarth Cup xiangqi tournament 2011 ",
      "fen": "3aka3/9/4b1n2/p3pR2p/6p2/4r4/P1Nn2P1P/2R6/4C4/1cNAKABc1 b - - 0 1",
      "id": "puzzle_1011",
      "title": "Mate in 1 move"
    },
    {
      "description": "HUANG ZhuFeng - DONG Fei\nEarth Cup xiangqi tournament 2011 ",
      "fen": "4k1b2/4a4/4ba3/3PP4/9/9/9/3AN1nN1/4Ap3/4K3c b - - 0 1",
      "id": "puzzle_1012",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU CaiFang - GAO FangQing\n2012 2nd SportAccord World Mind Games 2012 ",
      "fen": "2ba1ab2/5k3/9/p1p5p/6p2/2P6/4c3P/4B3N/4Ar3/cR1AK1BC1 b - - 0 1",
      "id": "puzzle_1013",
      "title": "Mate in 1 move"
    },
    {
      "description": "NGUYEN Hoang Yen - TANG Dan\n2013 Sport Accord World Mind Game WR1-1 ",
      "fen": "C3kab2/4a4/4b4/R7p/4R4/9/2pN2pcP/2nr5/2N1K4/2Br1AB2 b - - 0 1",
      "id": "puzzle_1014",
      "title": "Mate in 1 move"
    },
    {
      "description": "SUN YongZheng - LEI Kam Fun\n2013 Sport Accord World Mind Game R3 ",
      "fen": "4ka3/4a4/3P2N1b/1C1R4p/2b6/1nP3P2/9/3A5/4r4/3K1ABc1 b - - 0 1",
      "id": "puzzle_1015",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO Ziyu - \u6234\u91d1\n2014 the 6 th Yang guanlin  Cup Open Group 2014 ",
      "fen": "4kacC1/3P3c1/2N3N2/2P6/6b2/4n1p2/9/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1016",
      "title": "Mate in 1 move"
    },
    {
      "description": "CAI YouGuang - JIN Bo\n2014 the 6 th Yang guanlin  Cup Open Group 2014 ",
      "fen": "4k4/4a2C1/4N4/3c5/2nC5/2B6/3c5/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1017",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHAO Jinhua - CHEN Feng\n2014\u5e74\u5e7f\u4e1c\u4e1c\u839e\u51e4\u5c97\u9547\u8c61\u68cb\u8d5b\u516c\u5f00\u8d5b\u7b2c\u4e09\u5b63\u5ea6 2014 ",
      "fen": "2bak4/4a4/2N1b1C1c/4pr2p/p1p6/3R2P2/2P5P/2nKB4/2N6/5rB2 b - - 0 1",
      "id": "puzzle_1018",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u80e1\u519b\u98ce - \u5f90\u56fd\u4f1f\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "2Rakab2/C8/3c5/p8/3P2p1p/1N7/P7P/B2AnA3/3K1p3/4r4 b - - 0 1",
      "id": "puzzle_1019",
      "title": "Mate in 1 move"
    },
    {
      "description": "CHEN HanHua - \u5f90\u4e00\u5e06\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "2bC1kb2/4R4/9/2p5p/9/6p2/1n2P3P/4r4/4A4/3AKN3 b - - 0 1",
      "id": "puzzle_1020",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Lin - \u5b8b\u5efa\u519b\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "2Rakab2/2n6/2N6/p7p/2b3p2/PcNc5/2r5P/3CB4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1021",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u5f20\u82e5\u611a - \u8bb8\u6587\u7ae0\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "3k1a3/9/9/p1N2r2p/2P1p1N2/9/P3n4/4B4/1R2Ar3/2B1KAC1c w - - 0 1",
      "id": "puzzle_1022",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u674e\u6653\u6210 - \u66fe\u519b\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "C5b2/1P7/3aka3/9/6b2/2B6/6n2/5K3/4p4/2B6 b - - 0 1",
      "id": "puzzle_1023",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6b27\u660e\u541b - \u9648\u957f\u53d1\n2014\u5e74\u798f\u5efa\u7701\u5168\u6c11\u5065\u8eab\u8fd0\u52a8\u4f1a\u201c\u7389\u6842\u676f\u201d\u8c61\u68cb\u8d5b\u7537\u5b50\u7ec4 2014 ",
      "fen": "2b6/1N1kaR3/9/p2N4p/2b5n/9/P5r2/9/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1024",
      "title": "Mate in 1 move"
    },
    {
      "description": "KE ShanLin - \u6b27\u660e\u541b\n2014\u5e74\u798f\u5efa\u7701\u5168\u6c11\u5065\u8eab\u8fd0\u52a8\u4f1a\u201c\u7389\u6842\u676f\u201d\u8c61\u68cb\u8d5b\u7537\u5b50\u7ec4 2014 ",
      "fen": "5a3/4R4/b2P1k3/9/3c5/2B6/9/9/4K4/5rB2 w - - 0 1",
      "id": "puzzle_1025",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZHENG Xin - \u725b\u7231\u5e73\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "R1Nk5/4a4/2n6/9/2b3r1p/3C5/P3P3P/9/4A4/2cK1A3 w - - 0 1",
      "id": "puzzle_1026",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u725b\u7231\u5e73 - \u5510\u4e16\u6587\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "3a1a3/6R2/5k3/p3p3p/9/9/P3P3P/1C2B1C2/2r3p2/3K3c1 b - - 0 1",
      "id": "puzzle_1027",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u6731\u5fc5\u98ce - YAO HongXin\n2014\u5e74\u91cd\u5e86\u7b2c\u4e8c\u5c4a\u91d1\u9f99\u9c7c\u00b7\u5b66\u5e9c\u676f\u8c61\u68cb\u516c\u5f00\u8d5b\u521d\u8d5b 2014 ",
      "fen": "6b2/4k4/3C1Rn2/2p1p3p/6p2/9/2P1P1n1P/1N1C1K2c/4A2r1/2BA2BN1 b - - 0 1",
      "id": "puzzle_1028",
      "title": "Mate in 1 move"
    },
    {
      "description": "SU ShaoFeng - CHEN FuJie\n2014 China Xiangqi League 2014 ",
      "fen": "3ak4/9/3a5/4C4/6b2/3N2B2/P5n2/2Nn1p3/9/3A1K3 b - - 0 1",
      "id": "puzzle_1029",
      "title": "Mate in 1 move"
    },
    {
      "description": "WU JunQiang - CHEN HongAheng\n2014 China Xiangqi League 2014 ",
      "fen": "2b2Rb2/CC7/4k4/2r5p/4p4/6n2/c3P4/N5c2/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_1030",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u53f6\u56fd\u8f89 - \u8c22\u5fd7\u660e\n2014\u5e74\u6c5f\u82cf\u65e0\u9521\u5e02\u201c\u7389\u7941\u9152\u4e1a\u676f\u201d\u66a8\u7701\u8fd0\u52a8\u4f1a\u8c61\u68cb\u9009\u62d4\u8d5b 2014 ",
      "fen": "4ka3/4a4/1P2b4/8p/6b2/5C3/5n2P/B5n2/9/1cCAK4 b - - 0 1",
      "id": "puzzle_1031",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u7530\u6625\u6797 - \u848b\u7f51\u5ea6\n2014\u5e74\u6c5f\u82cf\u65e0\u9521\u5e02\u201c\u7389\u7941\u9152\u4e1a\u676f\u201d\u66a8\u7701\u8fd0\u52a8\u4f1a\u8c61\u68cb\u9009\u62d4\u8d5b 2014 ",
      "fen": "2r1kab2/4n4/1c2ba2n/p2RC2rp/4p4/2R6/P3P3P/2N1B1C2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1032",
      "title": "Mate in 1 move"
    },
    {
      "description": "LU FengLian - \u7530\u6625\u6797\n2014\u5e74\u6c5f\u82cf\u65e0\u9521\u5e02\u201c\u7389\u7941\u9152\u4e1a\u676f\u201d\u66a8\u7701\u8fd0\u52a8\u4f1a\u8c61\u68cb\u9009\u62d4\u8d5b 2014 ",
      "fen": "1r2kab2/4a4/4n3n/p1p6/1R2C1r1p/9/P7P/4C4/8N/2BAKAB2 w - - 0 1",
      "id": "puzzle_1033",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u59dc\u5175 - \u6731\u76ca\u660e\n2014\u5e74\u6c5f\u82cf\u65e0\u9521\u5e02\u201c\u7389\u7941\u9152\u4e1a\u676f\u201d\u66a8\u7701\u8fd0\u52a8\u4f1a\u8c61\u68cb\u9009\u62d4\u8d5b 2014 ",
      "fen": "2b1k4/1N2a4/4b4/p1p5p/9/2P6/P2R1c3/9/1r2C4/1cBA1Kn2 w - - 0 1",
      "id": "puzzle_1034",
      "title": "Mate in 1 move"
    },
    {
      "description": "\u8c22\u5fd7\u660e - WANG Dong\n2014\u5e74\u6c5f\u82cf\u7701\u4e1c\u53f0\u5e02\u7b2c\u4e09\u5c4a\u7fa4\u6587\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "3k1ab2/3n2N2/3a5/p1pC4p/4p1pn1/2P6/P8/1c1C5/4K4/2BA1A3 w - - 0 1",
      "id": "puzzle_1035",
      "title": "Mate in 1 move"
    },
    {
      "description": "TAO Lei - \u5468\u4e30\u6977\n2014\u5e74\u6c5f\u82cf\u7701\u4e1c\u53f0\u5e02\u7b2c\u4e09\u5c4a\u7fa4\u6587\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "2bakr3/r3a4/n2RN4/2p1C4/p4P2c/3p5/P8/3CB4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1036",
      "title": "Mate in 1 move"
    },
    {
      "description": "LIANG Yunlong - QIN Rong\n2014\u5e74\u7b2c\u516d\u5c4a\u4e2d\u56fd\u5357\u5b81\u8c61\u68cb\u56fd\u9645\u9080\u8bf7\u8d5b\u516c\u5f00\u7ec4 2014 ",
      "fen": "2bak4/4a4/4b4/2p1C1p1p/P6c1/2N3B2/6R2/5KN2/4A1r2/2BA4c b - - 0 1",
      "id": "puzzle_1037",
      "title": "Mate in 1 move"
    },
    {
      "description": "DENG HuiDong  - LY Tomas\nNorth America  Cup Xiangqi Championship  2014 ",
      "fen": "3k1ab2/4a4/8b/p3R1C1p/9/2Nr5/P7P/B7n/1r2A4/R3KAC2 b - - 0 1",
      "id": "puzzle_1038",
      "title": "Mate in 1 move"
    },
    {
      "description": "FONG William - LI Tuyang\nNorth America  Cup Xiangqi Championship  2014 ",
      "fen": "4kab2/4a4/2C1b4/4r4/2p4P1/5R1c1/7C1/N8/1R1pA4/2B1KA2r b - - 0 1",
      "id": "puzzle_1039",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Tuyang - FONG William\nNorth America  Cup Xiangqi Championship  2014 ",
      "fen": "4kab2/4a4/2C1b4/4r4/2p4P1/5R1c1/7C1/N8/1R1pA4/2B1KA2r b - - 0 1",
      "id": "puzzle_1040",
      "title": "Mate in 1 move"
    },
    {
      "description": "LEI Kam Fun - ZELIMKHAN Gaysumov\nWorld Xiangqi Championships 2015 ",
      "fen": "3ak1bnr/3Ca4/4b2c1/p3p1p1p/2p2R3/P4NP2/4P3P/1C2B4/1c2A4/1nBAK4 w - - 0 1",
      "id": "puzzle_1041",
      "title": "Mate in 1 move"
    },
    {
      "description": "SLOAN Sam - LAI LiXiong\nWorld Xiangqi Championships 2015 ",
      "fen": "2b2k3/3NN4/9/p5p2/2p1p3p/P3c1P2/8P/3ABn3/4A4/5KB2 b - - 0 1",
      "id": "puzzle_1042",
      "title": "Mate in 1 move"
    },
    {
      "description": "XUE Honglin - FRISCHMUTH Uwe\nWorld Xiangqi Championships 2015 ",
      "fen": "2C1kab2/3R5/c1Na2nr1/p4n2p/5cp2/2P4r1/P3P3P/N3BC3/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1043",
      "title": "Mate in 1 move"
    },
    {
      "description": "WANG Weiqiang - DING Wa Chong\nWorld Xiangqi Championships 2015 ",
      "fen": "5a3/3ka4/4b4/3C4p/6b2/4Cc3/P5p1P/9/4A4/3K5 w - - 0 1",
      "id": "puzzle_1044",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAI JunJie - RUMYANTSEV Dmitry\nWorld Xiangqi Championships 2015 ",
      "fen": "C1caka2R/9/9/2R6/p1r3r2/4p4/P1n1P3P/4B4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1045",
      "title": "Mate in 1 move"
    },
    {
      "description": "HONG Chia Chuan - STERNMAN Olavi\nWorld Xiangqi Championships 2015 ",
      "fen": "3k1ab2/2N1a4/4b1n2/p1C5p/3C5/6P2/4P3c/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1046",
      "title": "Mate in 1 move"
    },
    {
      "description": "FREYER Guido - ZHENG Zhiwei\nWorld Xiangqi Championships 2015 ",
      "fen": "4kab2/4a4/4b4/7R1/4PP3/8P/9/1c1pBK3/4r4/9 b - - 0 1",
      "id": "puzzle_1047",
      "title": "Mate in 1 move"
    },
    {
      "description": "BIEG Pascal - PHUNG Kim Dang\nWorld Xiangqi Championships 2015 ",
      "fen": "2rk1ab2/4a4/4c1n2/p7p/4P1b2/9/P6RP/6N2/3rA4/1RB1K1B2 b - - 0 1",
      "id": "puzzle_1048",
      "title": "Mate in 1 move"
    },
    {
      "description": "GITTER Lucas - ZELIMKHAN Gaysumov\nWorld Xiangqi Championships 2015 ",
      "fen": "C2a5/4ak3/4N4/4PP1n1/6b2/P2p4p/9/4B4/9/3AKA3 w - - 0 1",
      "id": "puzzle_1049",
      "title": "Mate in 1 move"
    },
    {
      "description": "NAUMAN Ingo - BREITSCHAEDEL Oliver\nWorld Xiangqi Championships 2015 ",
      "fen": "3a4C/4ak1N1/4b4/p8/3n5/4pp3/P3c4/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1050",
      "title": "Mate in 1 move"
    },
    {
      "description": "MATSUNO Yoichiro - SLOAN Sam\nWorld Xiangqi Championships 2015 ",
      "fen": "3k1a3/R3anC2/9/p1P1P4/9/5r2P/6p2/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1051",
      "title": "Mate in 1 move"
    },
    {
      "description": "GOLLMAR Bastian - ARNOUT  De Leeuw\nWorld Xiangqi Championships 2015 ",
      "fen": "2bk2b2/4RR3/8n/p3n4/6p1p/6P2/P1r1c1r1P/2N3N1B/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1052",
      "title": "Mate in 1 move"
    },
    {
      "description": "LAY Kan Hock - MATSUNO Yoichiro\nWorld Xiangqi Championships 2015 ",
      "fen": "2c2k3/1CC6/4ba3/p2R1c2p/9/2P6/P3P3P/9/9/2BAKAr2 w - - 0 1",
      "id": "puzzle_1053",
      "title": "Mate in 1 move"
    },
    {
      "description": "GEREMY Xavier - FREYER Guido\nWorld Xiangqi Championships 2015 ",
      "fen": "6b2/3k5/5R3/9/p3N1rcp/4C4/4P3P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1054",
      "title": "Mate in 1 move"
    },
    {
      "description": "SLOAN Sam - TANAKA Atsushi\nWorld Xiangqi Championships 2015 ",
      "fen": "2bak4/4a4/2n6/p1p6/4pc3/2P1c4/P7P/4CK1R1/9/2BA1A3 b - - 0 1",
      "id": "puzzle_1055",
      "title": "Mate in 1 move"
    },
    {
      "description": "LI Quy Cuong - BIEG Pascal\nWorld Xiangqi Championships 2015 ",
      "fen": "3ak4/9/3ab3R/p3p4/9/3n2P2/P1P5P/8B/4r4/3K5 b - - 0 1",
      "id": "puzzle_1056",
      "title": "Mate in 1 move"
    },
    {
      "description": "BREITSCHAEDEL Oliver - HAIKOLA Petri\nWorld Xiangqi Championships 2015 ",
      "fen": "3aka3/4n4/4b4/2p1C3p/9/9/P5P1P/4C4/4A4/2BAK1c2 w - - 0 1",
      "id": "puzzle_1057",
      "title": "Mate in 1 move"
    },
    {
      "description": "ZELIMKHAN Gaysumov - GOLLMAR Bastian\nWorld Xiangqi Championships 2015 ",
      "fen": "3k1ab2/4ac2C/1R7/2N6/3rp4/2p3P2/P7P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1058",
      "title": "Mate in 1 move"
    },
    {
      "description": "FREYER Guido - RUMYANTSEV Dmitry\nWorld Xiangqi Championships 2015 ",
      "fen": "2baka1r1/9/3C2n2/p1n1p3p/6p2/4P4/P1c3PcP/2C3N2/4A4/2BAK1BR1 b - - 0 1",
      "id": "puzzle_1059",
      "title": "Mate in 1 move"
    },
    {
      "description": "SONE Toshihiko - HAIKOLA Petri\nWorld Xiangqi Championships 2015 ",
      "fen": "3k1a3/4a4/4b4/p4r2p/4N2R1/4C1P2/P1C1P3P/2c1B4/4K4/1cBr1A3 b - - 0 1",
      "id": "puzzle_1060",
      "title": "Mate in 1 move"
    }
  ],
  [
    {
      "description": "LIU DaHua - LIU YiCi\nChinese National Champion 1956 ",
      "fen": "5aC2/3k5/3a1P3/4c4/2b1N1n1p/9/P8/B8/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_1061",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - TAO HanMing\n5 Ram Cup Xiangqi Championship 1997 ",
      "fen": "3ak4/4aP3/9/p7p/4R4/4C4/P3c3P/B3B4/4A4/3r1K3 w - - 0 1",
      "id": "puzzle_1062",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU WeiZhi - ZHANG YongXiang\nHong Kong Individual Championship 1996 ",
      "fen": "2ba1a3/2R1r4/3k5/p1N6/6b2/9/9/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1063",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHAN Ling Fai - ZHANG WenChang\nHong Kong Individual Championship 1996 ",
      "fen": "1C3k3/C8/3Rba3/4p3p/p1p6/9/9/4r4/4A4/4K4 w - - 0 1",
      "id": "puzzle_1064",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU AiQin - HUANG BingWei\nHong Kong Individual Championship 1996 ",
      "fen": "3ak1b2/3Pa2N1/4b4/p4R2p/4p4/6B2/2n2c2P/4B4/4A1n2/3K1A3 w - - 0 1",
      "id": "puzzle_1065",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIANG QiYun - ZHENG JianWen\nHong Kong Individual Championship 1996 ",
      "fen": "5a3/3ka4/1R2c4/p2r5/4P3p/1Cp6/P8/2N5R/4A4/1rB1KA3 b - - 0 1",
      "id": "puzzle_1066",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YE WoSheng - ZHENG JianWen\nHong Kong Individual Championship 1996 ",
      "fen": "2ba3R1/3P1k3/2N6/8p/4p4/5n3/1r1nP4/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1067",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN De - DING JianQuan\nHong Kong Individual Championship 1996 ",
      "fen": "2bRka3/9/4b4/9/8p/6B2/8P/2nA3R1/3K5/4r4 b - - 0 1",
      "id": "puzzle_1068",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Chi Keung - LU BaoCheng\nHong Kong Individual Championship 1996 ",
      "fen": "3k1a3/2Pna4/3Nb4/p7p/3r2b2/4C4/2c1P2cP/7CB/4A4/2BAKR3 w - - 0 1",
      "id": "puzzle_1069",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WEN LiShen - ZHANG YongXiang\nHong Kong Individual Championship 1996 ",
      "fen": "4kcb2/2c1aRN2/3r1a2n/p3P1p2/8p/2P1C4/P7P/4B3N/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1070",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU Kui Lin - WONG Wan Heng\n ",
      "fen": "3k5/4P4/9/4n4/9/9/9/4K4/4A4/3C5 w - - 0 1",
      "id": "puzzle_1071",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HII Kong Ming - SAKAI Kiyotaka\nWorld Xiangqi Championships 1997 ",
      "fen": "2b1kab2/n3a2r1/2c3n2/p1C2N2p/2p1p1p2/9/P1P5P/2N1C4/4A2c1/2BAK1BR1 w - - 0 1",
      "id": "puzzle_1072",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG GuanLin - HOU YuShan\nChinese National Champion 1956 ",
      "fen": "3a2b2/4ak3/4P4/3n1N3/1Cb6/9/9/5A3/4K4/3A5 w - - 0 1",
      "id": "puzzle_1073",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XUE SiHua - WONG Wan Heng\nMalaysian Qiwang Championship 1998 ",
      "fen": "3akab2/9/b1n6/pRC1p3p/5N3/2P2r1N1/P3P2nP/7CB/4K2c1/2BA1Ac2 b - - 0 1",
      "id": "puzzle_1074",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Wang Tianbao - ZENG WenXing\nMalaysian Qiwang Championship 1998 ",
      "fen": "3k1ab2/4a4/4bc3/8p/9/3r2P2/1R6P/N3C1n1B/2R1A4/2B1KA1r1 b - - 0 1",
      "id": "puzzle_1075",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LOOK Kean Chor - WONG Wan Heng\nMalaysian Qiwang Championship 1998 ",
      "fen": "3a1kb2/4a4/4b4/p3C3p/2PR5/4P4/8P/9/2r1Ar3/c1BAKR3 b - - 0 1",
      "id": "puzzle_1076",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LOOK Kean Chor - YIN JinFa\nMalaysian Qiwang Championship 1998 ",
      "fen": "1C1a3C1/2N1k4/5a3/p3p1c2/8P/4n4/5n3/B3K4/9/3A5 b - - 0 1",
      "id": "puzzle_1077",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DaHua - LI LaiQun\n5 Ram Cup Xiangqi Championship 1986 ",
      "fen": "3k1ab2/4a4/4b4/p7p/4N1p2/3nc4/2P4RP/9/1CCr5/2B1KAB2 b - - 0 1",
      "id": "puzzle_1078",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - LIU DaHua\n5 Ram Cup Xiangqi Championship 1988 ",
      "fen": "5k3/2N1a4/5a3/2nC2P2/4C4/5p3/P4cn2/9/4A4/4K4 w - - 0 1",
      "id": "puzzle_1079",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN YaoSen - HUANG YuYing\n ",
      "fen": "3k1a3/CRC6/b4a2b/4r4/5nc2/6p2/4P4/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1080",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU DeMing - MAI Thanh Minh\n ",
      "fen": "3k5/4a3C/5N3/5c3/3c5/6B2/9/4B4/4A1n2/3K5 b - - 0 1",
      "id": "puzzle_1081",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU ChiuKing - ZHANG WangHou\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "1r2kab1r/4aR3/3cb3n/p3C1p1p/2p6/4C4/P3P3P/2NR5/4A4/2c1KAB2 w - - 0 1",
      "id": "puzzle_1082",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU Anthony - FUNG Stephen\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "3k1ab2/4a4/5c3/p1p1P3p/1R4b2/2Pr5/4C3P/4B1N2/2n6/2B2K3 b - - 0 1",
      "id": "puzzle_1083",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG WangHou - LO ChiKam\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "C2Rkab2/4a4/4b4/p3p3p/9/P1P6/4P1n1P/4BK3/4r4/9 b - - 0 1",
      "id": "puzzle_1084",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAO WeiXuan - TRUONG A Ming\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "4k1b2/5R3/2cab4/4p3p/5c3/6p2/4P2CP/2r6/1C2A3N/3A1KB1n b - - 0 1",
      "id": "puzzle_1085",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HII Kong Ming - DAO Cao Khoa\nWorld Xiangqi Championships 1999 ",
      "fen": "2bak1c2/4a4/nR2b1n2/p1N1p3p/9/2PR5/P3P3P/2C1B2C1/2r2r3/2BKNA3 b - - 0 1",
      "id": "puzzle_1086",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KNG Ter Yong - LIM Bun Kio\nWorld Xiangqi Championships 1999 ",
      "fen": "4ka3/4a3n/4b1N1b/p3p1P2/1cp6/7R1/P3P3r/2N6/2nrAC3/2BAKR3 b - - 0 1",
      "id": "puzzle_1087",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Gao Yang - RUAN You\n ",
      "fen": "2bak4/4a4/4b4/p1p1CR2p/6p2/2P1P1P2/P7P/3n2r2/c3KN3/3A2B2 b - - 0 1",
      "id": "puzzle_1088",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN Dot San - HUANG YuYing\n ",
      "fen": "3a1k3/4a4/2C6/p3R3p/2p6/9/P2r1cr1P/5R3/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1089",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU RongHua - LIU DianZhong\nRed Bull Cup TV fast game Champion 1999 ",
      "fen": "2bk5/2N1a4/9/5C3/3C2b2/2pn5/9/9/4A4/2BcK4 w - - 0 1",
      "id": "puzzle_1090",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG RongTa - HU RongHua\nChina Team Championship 1981 ",
      "fen": "2ba1k3/4a1R2/9/p7p/4C1p2/P2p5/4c3P/1N3A3/1cNn3r1/2BAK1B2 b - - 0 1",
      "id": "puzzle_1091",
      "title": "Mate in 2 moves"
    },
    {
      "description": "OUYANG ChanJuan - LIU Jing\nChina Team Championship 1999 ",
      "fen": "3a5/3ka4/4P4/3C4p/2b1N4/8c/4n4/4B4/4A4/2cAK4 w - - 0 1",
      "id": "puzzle_1092",
      "title": "Mate in 2 moves"
    },
    {
      "description": "REN ZhanQuo - HU RongHua\nChina Team Championship 1988 ",
      "fen": "3akaR2/9/3r5/p7p/9/P8/5R2P/2r3N1B/4Ac3/2BAK4 b - - 0 1",
      "id": "puzzle_1093",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU RongHua - ZHAO GuoRong\nKun Hua Cup  1984 ",
      "fen": "1nb1R1b2/3k5/r5n2/p1p1p3r/9/2PC5/P3c4/B1N1C1c2/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1094",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU RongHua - LI Aidong\nChinese National Champion 1992 ",
      "fen": "2bak4/9/2na4N/4pR1Cp/p5bn1/3rc1B2/6c1P/N2C5/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1095",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - LI LaiQun\nChinese Qiwang Championship 1994 ",
      "fen": "2ba5/4ak1N1/9/6R1p/9/6P2/P7P/5A3/2n1p4/5KB2 w - - 0 1",
      "id": "puzzle_1096",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI LaiQun - Lv Qin\nChina Team Championship 1993 ",
      "fen": "3akab2/9/4b4/R7N/9/2P1n1B2/P4n2P/4B4/4A1r2/3AKC3 b - - 0 1",
      "id": "puzzle_1097",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI LaiQun - ZHANG XiaoPing\nChinese National Champion 1989 ",
      "fen": "2Ra1ab1C/3k4C/n8/p5p2/9/9/P3P1P1P/4B1N2/2Nr3r1/2B2K3 b - - 0 1",
      "id": "puzzle_1098",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI LaiQun - JIN Bo\nChina Team Championship 1999 ",
      "fen": "5a3/3kcr3/3rN4/1R7/p1R6/9/6pp1/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1099",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG XiaoPing - TAO HanMing\nChinese National Champion 1990 ",
      "fen": "5k3/3P2P2/4R4/4p4/9/9/2r2n3/9/3pA4/2B1KA3 w - - 0 1",
      "id": "puzzle_1100",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAO HanMing - LIN HongMin\nChinese National Champion 1994 ",
      "fen": "5a3/2ck5/4R4/3rN3p/4C4/2p1P2p1/2c5P/4BA3/4A4/4K4 w - - 0 1",
      "id": "puzzle_1101",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAO HanMing - JIANG QuanSheng\nChinese National Champion 1998 ",
      "fen": "2bak4/4a4/4N4/4C4/2r1nc2p/5R3/P3c3P/2C1B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1102",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI ZhiPing - DONG XuBin\nChinese National Champion 1999 ",
      "fen": "3ak1b2/4a4/n1N1b4/C1p5p/p2PP4/1r7/P8/3Rn4/4AC2c/3K1A3 b - - 0 1",
      "id": "puzzle_1103",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN YongZheng - ZHUANG YuTing\nChinese National Champion 1999 ",
      "fen": "r4a2r/1N1kaR3/1n3R2b/3Cn3p/p8/4C1P2/1p2c3P/4B4/4A4/c2A1KB2 w - - 0 1",
      "id": "puzzle_1104",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAO HanMing - SHANG Wei\nChinese National Champion 1999 ",
      "fen": "3R1aN2/4k4/8P/p5p2/4P4/P1B1n1P2/9/B8/2p1r4/3K1c3 w - - 0 1",
      "id": "puzzle_1105",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHANG Wei - JIANG QuanSheng\nChinese National Champion 1999 ",
      "fen": "2C1k4/3P1P3/3a5/9/4c1b2/3c2B2/9/5A3/3C5/2BA1K3 w - - 0 1",
      "id": "puzzle_1106",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU JianMiao - YU YouHua\nChinese National Champion 2000 ",
      "fen": "3k2b2/4a4/8b/1C2P4/3cC4/1c7/9/4p4/9/3K5 b - - 0 1",
      "id": "puzzle_1107",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHANG Wei - HU RongHua\nChinese National Champion 2000 ",
      "fen": "9/3k5/4c4/4N4/9/4C1B2/4p4/B5n2/3pAp3/3AK4 b - - 0 1",
      "id": "puzzle_1108",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN WenQing - LI JiaHua\nChinese National Champion 2000 ",
      "fen": "2b2k3/3Rar3/4b1n1n/p2R4p/9/2PN5/P3P3P/4B2rN/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1109",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI WangXiang - QIU Dong\nChinese National Champion 2000 ",
      "fen": "2b2a3/3k2N2/4ba3/p7p/4P4/P7P/3C3Cc/4BA3/3nK4/2r2A3 w - - 0 1",
      "id": "puzzle_1110",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GONG XiaoMing - CHEN HanFeng\nChinese National Champion 2000 ",
      "fen": "2ba1a2C/9/4k4/p3p3N/3R5/4P1r2/P7P/1n1A5/1c3K3/3A2B2 b - - 0 1",
      "id": "puzzle_1111",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI XueSong - Li Hong Jia\nChina Team Championship 2000 ",
      "fen": "R4ab2/3k2C2/4ba3/9/9/7C1/9/4BN3/c3A4/cr1AK1B2 w - - 0 1",
      "id": "puzzle_1112",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG YueFei - DONG XuBin\nChina Team Championship 2000 ",
      "fen": "4ka3/4a4/4b4/p7C/8p/9/4R4/r3n3B/4A4/3K1A3 b - - 0 1",
      "id": "puzzle_1113",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DianZhong - ZHENG YiHong\nChina Team Championship 2000 ",
      "fen": "3k1a3/4a4/4b1P1b/8p/9/2P5P/2N2p3/2C1BA3/5Kn2/3p2Bc1 b - - 0 1",
      "id": "puzzle_1114",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Yu - ZHANG JunJie\nChina Team Championship 2000 ",
      "fen": "3k5/4a4/2c1P1n2/pc6p/9/2P6/P7P/B3C4/1R2KR3/3r3r1 b - - 0 1",
      "id": "puzzle_1115",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG Bin - YAN WenQing\nChina Team Championship 2000 ",
      "fen": "3k5/8C/3P1N2b/p8/1n7/6B2/P3p3P/3ABn3/1C7/4Kcp2 w - - 0 1",
      "id": "puzzle_1116",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - LI LaiQun\nChina Team Championship 1983 ",
      "fen": "2b2P2C/3k2N2/2Pa5/9/5P3/4p4/3n1c3/3A4B/4K4/2B6 w - - 0 1",
      "id": "puzzle_1117",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SONG GuoQiang - TANG ZhuoGuang\nChina Team Championship 1992 ",
      "fen": "3ak1b2/4a4/4bRn2/3N5/8p/9/8P/4C4/3r5/5K3 w - - 0 1",
      "id": "puzzle_1118",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIENG Hie Kwong - NGUYEN Thi Hong Hang\nAsian Xiangqi Individual Championships 1999 ",
      "fen": "2C1kab2/4a4/1N7/3P4p/2r1pn3/4c3P/6pn1/3RBA3/4A4/4KNB2 b - - 0 1",
      "id": "puzzle_1119",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG XiangFu - NG Chun Hei\nHong Kong Team Champion 2000 ",
      "fen": "4kabC1/4nP3/9/2N6/9/p8/9/9/1n2Ap3/4K1B2 w - - 0 1",
      "id": "puzzle_1120",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEUNG TatMan - ZHENG XiangFu\nHong Kong Team Champion 2000 ",
      "fen": "3k2b2/3c5/4b1N2/3R5/3r5/3C2P2/4n4/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1121",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FUNG Stephen - TRUONG Wen\nCanadian National Champion 2000 ",
      "fen": "3rka3/1R2a2R1/2c1b2cb/p1p4Cp/5r1n1/4P4/P7P/4C3B/N3A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1122",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LU LiangCheng - CUONG Vuong\nCanadian National Champion 2000 ",
      "fen": "2baka2R/3n1P1r1/4b4/5N3/9/2P3P2/9/3AB4/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_1123",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MA QuanQing - LAI Robin\nICCS IT 2000 ",
      "fen": "4kab2/4a4/4b4/9/5R3/P1P6/4c3P/3CB4/4Ap3/1r1AK1B2 b - - 0 1",
      "id": "puzzle_1124",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHU XiaoHu - LI QiJie\nICCS IT 2000 ",
      "fen": "R2ak4/9/4b4/9/2pN2b2/9/2P5P/2r6/9/3CKC2r w - - 0 1",
      "id": "puzzle_1125",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HE GuoPing - LAI Robin\nICCS IT 2000 ",
      "fen": "2b1ka3/4a1N2/4b4/9/4p4/3p2P1R/9/B2n5/4r4/3K5 b - - 0 1",
      "id": "puzzle_1126",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YUEN Elton - LU HaiTeng\nICCS IT 2000 ",
      "fen": "C2a1ab2/9/4k4/p1CP4p/6b2/6p2/P7P/3A2r2/c4K1R1/1c1A5 b - - 0 1",
      "id": "puzzle_1127",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DaHua - LIAO ErPing\nBGN World Xiangqi Challenge 2001 ",
      "fen": "4ka3/4a4/4b3b/p5r2/2P6/P3c4/4R4/4BA3/4Ap3/2B1K4 b - - 0 1",
      "id": "puzzle_1128",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DianZhong - TAO HanMing\nBGN World Xiangqi Challenge 2001 ",
      "fen": "C3kab2/4a4/2n1b1c2/2p2R2p/9/2P1p4/P7P/2N1C4/7r1/1RBAKAr1c b - - 0 1",
      "id": "puzzle_1129",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEE Kah Kheng - ZHANG hanZhong\nMalaysia Open 2001 ",
      "fen": "r1b1ka3/3RaR3/2ncb4/p1p1pN2p/5n1r1/6P2/P1P5P/3CC1c2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1130",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN Bo - SUN YongZheng\nChina Team Championship 2001 ",
      "fen": "5ab2/3k5/9/6P2/3C5/9/P2N5/4B4/2p1p4/3K1ABcc b - - 0 1",
      "id": "puzzle_1131",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG XiaoPing - Li Hong Jia\nChina Team Championship 2001 ",
      "fen": "3a1a3/cC5R1/2CPbk3/p7p/9/1r4p2/P5n1P/9/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1132",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN JinChun - FENG Jao\nChina Team Championship 2001 ",
      "fen": "2N1k4/9/4Pa3/8p/5Cn2/9/3p5/4B4/9/2BK1n3 w - - 0 1",
      "id": "puzzle_1133",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN YongZheng - HONG Zhi\nChina Team Championship 2001 ",
      "fen": "3k1ab2/4a4/4b4/1C7/5c3/2B5P/3Nc4/4p4/3K5/5A3 b - - 0 1",
      "id": "puzzle_1134",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU You - ZHAO XinXin\nChina Team Championship 2001 ",
      "fen": "3a2b2/4a1NNC/5k1c1/4p3p/P5n2/6B2/4P3P/3K5/1c1pA4/2B2A3 w - - 0 1",
      "id": "puzzle_1135",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI Yi - YANG YI\nChina Team Championship 2001 ",
      "fen": "2bak4/4aRcr1/4b4/1N1c4p/p2P5/4pn3/P5p1P/3CB4/4A4/1N1AK1B2 w - - 0 1",
      "id": "puzzle_1136",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GE WeiPu - TAO HanMing\nChinese National Champion 2001 ",
      "fen": "C3kabC1/4a4/9/9/p8/2Rcn1B2/P8/3A1A3/8r/2B1K4 b - - 0 1",
      "id": "puzzle_1137",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN FuJie - YUAN HongLiang\nChinese National Champion 2001 ",
      "fen": "3P1k3/1C3n3/3aba3/9/5Cb2/2B3B2/3n5/5A3/4A4/3K5 w - - 0 1",
      "id": "puzzle_1138",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN QiMing - ZHENG NaiDong\nChinese National Champion 2001 ",
      "fen": "3k2b2/2N1a3n/5R3/p5p1p/1rb6/9/P3C3P/4B4/3CA4/2BAK1r2 w - - 0 1",
      "id": "puzzle_1139",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIAO GeLian - LI DeZhi\nChinese National Champion 2001 ",
      "fen": "3a1k3/2P1a1cN1/b8/7P1/2b1C4/9/9/Bn7/4pp3/3K2B2 b - - 0 1",
      "id": "puzzle_1140",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FENG XiaoXi - GUO RuiXia\nChinese National Champion 2001 ",
      "fen": "2baka3/9/3cb4/4p3p/P1p6/9/Nn2rn2P/1C3C3/2RK4R/3A1A3 b - - 0 1",
      "id": "puzzle_1141",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO Yin - JIA Dan\nChinese National Champion 2001 ",
      "fen": "3ak1b2/2R1a4/N8/p3p3p/9/4n1B2/P1r5P/4K4/4A4/3A2B2 b - - 0 1",
      "id": "puzzle_1142",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DAI RongGuang - CHEN BaiXiang\nChinese National Champion 1962 ",
      "fen": "3k1abC1/3ca4/2C1b4/pRp5p/3PPR3/9/P4N2n/N8/3rA1r2/2B1K3c b - - 0 1",
      "id": "puzzle_1143",
      "title": "Mate in 2 moves"
    },
    {
      "description": "RAMO Juoni - YAMAZAKI Hideo\nWorld Xiangqi Championships 2001 ",
      "fen": "4kab2/1N2a4/4b1n2/p7p/2P3p2/3c5/P2r4c/B2CC4/4A4/3K1A3 b - - 0 1",
      "id": "puzzle_1144",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LUM Tek Sim - KNG Ter Yong\nWorld Xiangqi Championships 2001 ",
      "fen": "3akab2/6c2/2n1b4/p1p1p3p/9/P1P1P4/9/N1CR4n/5C1c1/2BAKA3 b - - 0 1",
      "id": "puzzle_1145",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HII Kong Ming - HENKE Simon\nWorld Xiangqi Championships 2001 ",
      "fen": "2n2a3/1R2a4/b2k2c2/4PN2p/p3r1b2/9/P4p2P/4B4/4A4/2R1KAB2 w - - 0 1",
      "id": "puzzle_1146",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MOK Mun Yew - WANG En Sen\nWorld Xiangqi Championships 2001 ",
      "fen": "4kab2/3Pa4/4b4/2n2R1Np/p8/4r4/P5c1P/4C3B/4A1c2/2BA1K3 w - - 0 1",
      "id": "puzzle_1147",
      "title": "Mate in 2 moves"
    },
    {
      "description": "BAKRA Anuar Bin - LEI Kam Fun\nWorld Xiangqi Championships 2001 ",
      "fen": "2b1kab2/4a4/8c/8p/P8/1NP4n1/4c1p1P/4C4/4N4/2BAKAB2 b - - 0 1",
      "id": "puzzle_1148",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NAEGLER Michael - YE RongGuang\nWorld Xiangqi Championships 2001 ",
      "fen": "3akab2/9/2n1b1c2/p2Cp4/1r5np/P1P1Pp3/4R1c1P/2NCB1N2/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_1149",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TEMPELMANN Claus - ZHANG WenBin\nWorld Xiangqi Championships 2001 ",
      "fen": "2bR1abn1/1R6r/r1n1ck3/p1p3p1p/6c2/4C4/P1P3P1P/4C4/8N/1NBAKAB2 w - - 0 1",
      "id": "puzzle_1150",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HATTON Tsugumitsu - RAMO Juoni\nWorld Xiangqi Championships 2001 ",
      "fen": "3a1ab2/5kN2/4b1n2/p1n1p1p1p/1cp6/P4NP2/4P3P/1C5C1/4A4/c2K1AB2 w - - 0 1",
      "id": "puzzle_1151",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG WangHou - CHEN WanWei\nWorld Xiangqi Championships 2001 ",
      "fen": "3k5/4a4/4b1c2/p1p5p/9/2P6/P7P/B2rCR3/5R3/1c2KA1r1 b - - 0 1",
      "id": "puzzle_1152",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG WenBin - TANAKA Atsushi\nWorld Xiangqi Championships 2001 ",
      "fen": "4ka3/3Pa4/b3n4/9/9/4C1B2/9/4B4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1153",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEE Kah Kheng - HUA Say Ty\nWorld Xiangqi Championships 2001 ",
      "fen": "C4kb2/4P4/4cN3/9/3n5/6p2/P8/4nA3/9/3A1K3 w - - 0 1",
      "id": "puzzle_1154",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEUNG WingOn - HUBER Siegfried\nWorld Xiangqi Championships 2001 ",
      "fen": "2bk1ab2/2N1a1R2/3P5/p7p/3r5/9/4P3c/3C4B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1155",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHOI I Kei - HATTON Tsugumitsu\nWorld Xiangqi Championships 2001 ",
      "fen": "2b2k3/2Nra4/5a3/8p/2p6/9/P3P3P/1nC4R1/4K4/5A3 w - - 0 1",
      "id": "puzzle_1156",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Graham Jones - KNOEDLER Dieter\nWorld Xiangqi Championships 2001 ",
      "fen": "2b1ka3/4a4/4b4/p2P2p1R/2p3r2/9/1n2r3P/4BA3/9/3AKN3 b - - 0 1",
      "id": "puzzle_1157",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WOO WeiCheung - GAO WeiXuan\nWorld Xiangqi Championships 2001 ",
      "fen": "4kab2/4a4/9/p1R6/3P2b2/8P/P8/2cNn4/4K1p2/2BA1r3 b - - 0 1",
      "id": "puzzle_1158",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - ZHANG Qiang\nChina Team Championship 1996 ",
      "fen": "1r6C/3k5/4R1N2/9/9/9/p3P3n/4B4/9/ncBAKA3 w - - 0 1",
      "id": "puzzle_1159",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIAN Liang - SU ZhiYong\nIXPA IT 2001 ",
      "fen": "5c3/3P5/5k3/4P4/4nN3/2B6/5p3/4BA3/4A4/3K5 w - - 0 1",
      "id": "puzzle_1160",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG YongXiang - WANG YuanJun\nIXPA IT 2001 ",
      "fen": "C3R1b2/2Nk5/c3b4/p3p3p/2p3p2/9/c3P3P/4BrN2/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1161",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI DeZhi - ZHAO WeiJie\nIXPA IT 2001 ",
      "fen": "3k1a3/4a4/4c4/p3CN2p/6P2/4c4/P8/4nA3/4A4/1N2K1B2 b - - 0 1",
      "id": "puzzle_1162",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUO YongZhen - LIU HaoHe\nChina Team Championship 1996 ",
      "fen": "5N1C1/5k3/4b4/9/c1b3N1p/9/9/2n1B4/6p2/2B1K3c b - - 0 1",
      "id": "puzzle_1163",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG ChunLin - WU You\nChina Team Championship 1996 ",
      "fen": "2bakab2/4n4/4c4/p3C1p1p/2pr4c/3R5/P1P3P2/C5N2/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1164",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DENG SongHong - HU QingYang\nChina Team Championship 1996 ",
      "fen": "1CRa1kb2/3C3c1/2N1ban2/4pc3/6p2/9/P3P4/4B4/4A4/4KABr1 w - - 0 1",
      "id": "puzzle_1165",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MA Xing - Mo Hongjin\nChina Team Championship 1996 ",
      "fen": "3a5/3rak3/6N1R/p8/2b6/P3P4/4r4/4B4/4A4/1C1AK1B2 w - - 0 1",
      "id": "puzzle_1166",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Chi Keung - CUI Jun\nIXPA IT 2001 ",
      "fen": "3ak4/4R4/9/N7p/9/P8/2P1P1n1P/5K3/4A4/2BA3r1 b - - 0 1",
      "id": "puzzle_1167",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Ming - WU Ren\nIXPA IT 2001 ",
      "fen": "3akab2/9/4b4/N1c5N/4p1p2/P8/5n2P/3A1K2B/9/2cA5 b - - 0 1",
      "id": "puzzle_1168",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FU ChunLing - JIN XiaoQing\nIXPA IT 2001 ",
      "fen": "3k5/3C5/4b4/9/6b2/6N2/1n2c3P/4B4/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_1169",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHOU YuPing - FENG RuLe\nIXPA IT 2001 ",
      "fen": "3k2b2/4a4/4b4/2p3RNp/7c1/2P3P2/9/4B4/3r5/4KAB2 b - - 0 1",
      "id": "puzzle_1170",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FENG RuLe - LO XueDong\nIXPA IT 2001 ",
      "fen": "2b6/3ka4/3Nba3/3C5/1c7/2B6/p6NP/2nKB4/9/5n3 b - - 0 1",
      "id": "puzzle_1171",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG ZhengMing - SU ZhiYong\nIXPA IT 2001 ",
      "fen": "2b2k3/4P4/5a2b/7N1/9/9/9/B8/5K3/3A1AB2 w - - 0 1",
      "id": "puzzle_1172",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CUI Jun - CAI Yi\nIXPA IT 2001 ",
      "fen": "1C2k4/4a4/3a5/4P3R/6b2/9/5p1n1/1r6c/3KA4/2BA5 b - - 0 1",
      "id": "puzzle_1173",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO LiKim - DING QingLiang\nChina Team Championship 1997 ",
      "fen": "4ka3/4aRN2/2n1b4/p1p1p4/1r2c1p2/2P6/P2C2P1P/3C2n2/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1174",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XinAn - XU Bo\nChina Team Championship 1997 ",
      "fen": "1nb1ka3/1N2a4/4b4/p3C3p/5n3/9/P1R5P/B1r6/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1175",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG Bin - YUAN HongLiang\nChina Team Championship 1997 ",
      "fen": "4kab2/4a4/9/R7p/4P4/2B6/P1n6/3C5/3r5/R1BAKAr2 b - - 0 1",
      "id": "puzzle_1176",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuoRong - KE YongQing\nPai Wei TV supper ranking Tournament 2001 ",
      "fen": "2b2ab2/3k5/c1Na5/3R5/r3P4/3CC4/P1c2p2P/2n1B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1177",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuoRong - HUANG HaiLin\nPai Wei TV supper ranking Tournament 2001 ",
      "fen": "2RR2b2/2C2k3/2c6/p7p/6p2/2B6/P1r1Nr2P/3K5/4A4/1n3AB2 w - - 0 1",
      "id": "puzzle_1178",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAO HanMing - DONG XuBin\nPai Wei TV supper ranking Tournament 2001 ",
      "fen": "9/3P1k1N1/6n2/5c3/6b2/3N2B2/9/5A3/9/4K1B2 w - - 0 1",
      "id": "puzzle_1179",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU Shuang - HE Jing\nChina Team Championship 1997 ",
      "fen": "2Ck1abr1/4a4/6n2/4p1C1p/3r5/4cN3/1p7/N2AB4/7R1/2nK1AB2 b - - 0 1",
      "id": "puzzle_1180",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YOU YingQin - WEN Jing\nYinli Cup Champion 2002 ",
      "fen": "2ba2b2/4akNrn/nr3c3/p3pR2p/6C2/6P2/P3P3P/B1p2C3/4A4/3RKAB2 w - - 0 1",
      "id": "puzzle_1181",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG YongQiang - ZHANG ZhaoHai\nChina Team Championship 1997 ",
      "fen": "1cb1ka3/3Ra4/4b1r2/1np1CP2p/p1c1C1N2/9/P5n1P/6N1B/4A4/3K1A3 w - - 0 1",
      "id": "puzzle_1182",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI YiTing - CHEN DeYuan\nExhibition NA ",
      "fen": "3r5/3c5/3kb4/4P1N1p/5n3/6P2/8P/B8/4A4/c1BAK4 w - - 0 1",
      "id": "puzzle_1183",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Li Hong Jia - ZHANG Jiang\nChina Team Championship 1997 ",
      "fen": "2bakab2/9/6n2/p3pNP1p/2p6/2PR5/P3P3P/3cC4/1crCK4/3A1AB2 b - - 0 1",
      "id": "puzzle_1184",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HE ZhaoXiaong - XU Chao\nChina Team Championship 1997 ",
      "fen": "1Cbak1b2/1R2a4/6n2/p2R4p/4N4/2P1P4/P4n3/4K4/9/2B2rB1c b - - 0 1",
      "id": "puzzle_1185",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Xuan - LIN HongMin\nChina Team Championship 1997 ",
      "fen": "2bak4/4a4/2P1b4/p3p3p/3N1Rn2/1R2P1N2/P8/3C2p1c/4AKCr1/2BA5 b - - 0 1",
      "id": "puzzle_1186",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHOU Qi - WANG XiaoHua\nChina Team Championship 1997 ",
      "fen": "2bakR3/4a4/4b4/p2PC3p/3N2p2/9/P5P2/4B3B/2r5c/4K2c1 b - - 0 1",
      "id": "puzzle_1187",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI YiTing - SHEN ZhiYi\nExhibition 1956 ",
      "fen": "2ba4R/4ak1r1/4b4/p2N5/4P4/P8/9/5C2B/9/2rAKA3 w - - 0 1",
      "id": "puzzle_1188",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI YiTing - YANG GuanLin\nChinese National Champion 1956 ",
      "fen": "3a1Rb2/9/4ka1n1/p7p/5P3/2B1C4/P8/3A5/4K4/c4rB2 w - - 0 1",
      "id": "puzzle_1189",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI YiTing - MA Kuan\nChinese National Champion 1964 ",
      "fen": "3k4C/5P1R1/3a5/9/9/2B1c1B2/3r4p/9/9/4K4 w - - 0 1",
      "id": "puzzle_1190",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHOU ShouJie - WANG JiaLiang\nChinese National Champion 1956 ",
      "fen": "C1Rrka3/3N1r1c1/3ab1n1b/p3p4/8p/2P6/P3P3P/3C4N/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1191",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG JiaLiang - LIU YiCi\nChinese National Champion 1956 ",
      "fen": "3akab2/2NC5/4b1R2/p3p3p/6p2/2P6/P6rP/3r5/4An3/1R2KAB2 w - - 0 1",
      "id": "puzzle_1192",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHAN Stephen - ZHENG Qin Lin\nIXPA Team 2002 ",
      "fen": "R4a3/3ka4/2P1N4/3r4p/9/9/9/3A5/4Ap3/2B1K4 w - - 0 1",
      "id": "puzzle_1193",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU RongHua - DAI RongGuang\nExhibition 1973 ",
      "fen": "3k1c3/4R4/9/p7p/2p3b2/1N7/P3n1r2/9/3C5/2BAKAB2 w - - 0 1",
      "id": "puzzle_1194",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU RongHua - LI LaiQun\nChinese National Champion 1979 ",
      "fen": "1nbk1a3/r3a4/4b4/p1PN1C2p/5P3/3R5/P6rP/4B4/5C3/3AKA3 w - - 0 1",
      "id": "puzzle_1195",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN Qiu - JI ZhongQi\nIXPA Team 2002 ",
      "fen": "2bakc1R1/2r1a4/4b4/4C4/9/2B6/P3P4/9/5K3/3A1c3 w - - 0 1",
      "id": "puzzle_1196",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuoRong - DAI RongGuang\nChinese National Champion 1980 ",
      "fen": "2Ca2b2/4k4/5R3/N3p3p/1r7/3n2B2/P3P3P/1r4N2/3pAR3/4KC3 w - - 0 1",
      "id": "puzzle_1197",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MA ZhongWei - WANG JiaLiang\nIXPA Team 2002 ",
      "fen": "2baka3/C8/5R3/N7p/p8/9/2P2n3/9/5K3/2B1r4 b - - 0 1",
      "id": "puzzle_1198",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHAN Stephen - SHAO YunLong\nIXPA Team 2002 ",
      "fen": "3a5/4R4/4k4/p3p3N/2b6/4P4/P7P/2nA5/3rA4/c3K1B2 b - - 0 1",
      "id": "puzzle_1199",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TSE Richard - LIU Kuo Hua\nIXPA Team 2002 ",
      "fen": "4kab2/4a4/4b4/4R3p/9/9/P1r3c1P/B2C5/3KA4/5A3 b - - 0 1",
      "id": "puzzle_1200",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI LaiQun - XU TianHong\nMu Jian Cup 1988 ",
      "fen": "2bak4/4a4/4b4/6n1p/9/Pn1R5/3r5/3R1C3/4r4/3K5 b - - 0 1",
      "id": "puzzle_1201",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU TianHong - GAO MingHai\nChinese National Champion 1990 ",
      "fen": "2b1k1b2/4aP3/9/2N2N2n/5CP1p/2P6/P7n/4B4/4A4/4KABc1 w - - 0 1",
      "id": "puzzle_1202",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuoRong - LI ZhiPing\nChinese National Champion 1991 ",
      "fen": "2r2k3/1N2a4/3a5/7R1/9/2B6/9/9/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1203",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIAKIANKAI Sanguan - HU RongHua\nAsian xiangqi Championship 1984 ",
      "fen": "2bakR3/4a4/4b4/p5N1p/9/6P2/P3P2rP/4p4/1Cn1AK3/2cA2B2 b - - 0 1",
      "id": "puzzle_1204",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG ZhengMing - LI DeZhi\n ",
      "fen": "4kab2/4a4/4b4/C2P4p/1R4p2/P8/3N4P/2p1B4/3KAn3/2r6 b - - 0 1",
      "id": "puzzle_1205",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LOOK Kean Chor - FU ChunLing\n ",
      "fen": "2b1RNb2/4c4/3k5/p1pn4p/4p4/4c4/P5r1P/B1C1C1N2/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_1206",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JI ZhongQi - LU HaiTeng\n ",
      "fen": "2bk1a1R1/2c1PN3/4b4/p7p/1N7/9/P7P/9/4K4/3n1rB2 b - - 0 1",
      "id": "puzzle_1207",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - FU GuangMing\nChinese National Champion 1993 ",
      "fen": "3k1an1c/4P4/8b/3P5/9/3c3p1/3C5/3A5/4K4/2BA5 w - - 0 1",
      "id": "puzzle_1208",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - LIU DianZhong\nChinese National Champion 1994 ",
      "fen": "3k1ab2/2n1a2R1/4b4/p1r1p2Np/2c6/4P4/P3C1c1P/3C5/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1209",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIE YeJian - Lv Qin\nChinese National sports 2002 ",
      "fen": "6b2/4a2CC/2nabk3/p5r1p/1c4R2/4P4/P7P/4BA3/4K4/3A4c w - - 0 1",
      "id": "puzzle_1210",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XiaoPing - WANG LinNa\nChinese National sports 2002 ",
      "fen": "4kab2/4a4/1c2b4/p1p1N3p/4P4/9/P3N1RCP/4r4/2n1C4/2rA1KB2 b - - 0 1",
      "id": "puzzle_1211",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuanFang - CHANG Wanhua\nChinese National sports 2002 ",
      "fen": "2bk1ab2/4a4/5c3/pR2p3p/6p2/P7P/2N1PCn2/4r4/3rAR3/2BA1K3 b - - 0 1",
      "id": "puzzle_1212",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MEI Nuo - LIU Jun\nChinese National sports 2002 ",
      "fen": "7R1/1C3k3/2CaN4/p1p1r3p/6p2/4c4/P5P1P/4B4/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_1213",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI Yi - ZHANG JinQi\nChina Team Championship 2002 ",
      "fen": "3ak4/4aP1n1/4b4/1N1cP4/6b2/6B2/9/4BA3/4A4/4K4 w - - 0 1",
      "id": "puzzle_1214",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SONG GuoQiang - Li Hong Jia\nChina Team Championship 2002 ",
      "fen": "C1bR5/1C3k3/1c2b4/5r2p/4Pc3/9/n4r2P/p3B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1215",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG RuiXiang - ZHANG JunJie\nChina Team Championship 2002 ",
      "fen": "n1b3R2/4ak3/1cN1b4/5N2p/9/2B1P4/r7P/2nA5/2cK3C1/5A3 b - - 0 1",
      "id": "puzzle_1216",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YunTao - XIE ZhouMiao\nChina Team Championship 2002 ",
      "fen": "2ba1k3/4a4/3c4n/4c2C1/2b3R2/1NB3P2/4r3P/3AC4/4K4/5AB2 b - - 0 1",
      "id": "puzzle_1217",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Tong - TAN Xiao\nChina Team Championship 2002 ",
      "fen": "2b2N2C/4R1r2/n1nkb4/pcp5p/4p4/2P2N3/4P3P/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1218",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN YiSheng - GONG XiaoMin\nChina Team Championship 2002 ",
      "fen": "2ba1Rb2/4k4/5c3/p4r2p/6N2/4c1n2/P7P/6N2/3K5/2BA1A3 b - - 0 1",
      "id": "puzzle_1219",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO Yin - ZHOU Yi\nChina Team Championship 2002 ",
      "fen": "3aka3/9/4b4/p1R5p/1P3r3/9/P3P1rpP/3RB4/4A2c1/3K1A3 w - - 0 1",
      "id": "puzzle_1220",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JING YuLei - HUANG Yong\nChina Team Championship 1984 ",
      "fen": "2b1ka3/4a4/4b4/pR6R/9/P8/8P/4B4/3Kc4/1N3r1r1 b - - 0 1",
      "id": "puzzle_1221",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG Yong - LI ZhongYu\nChina Team Championship 2002 ",
      "fen": "3ak1b2/4a1c2/4b4/R3p3p/6N2/2P6/P3P3P/4B3B/4Ap1c1/1r1CKA3 b - - 0 1",
      "id": "puzzle_1222",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WAN YaoMing - LIN ZhongBao\nChina Team Championship 1984 ",
      "fen": "2ba1a3/2R6/3Nk4/p3p2rp/6b2/3N5/4P1n1P/4B4/2C5c/2BAK4 w - - 0 1",
      "id": "puzzle_1223",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAO MingHai - MA NaiXuan\nChina Team Championship 1984 ",
      "fen": "4kab2/3na4/4b4/6P2/C3p2R1/2P6/P3P4/2N1C4/2N4c1/2BAKAr1c b - - 0 1",
      "id": "puzzle_1224",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO ChuanZhou - TANG FangYun\nChina Team Championship 1984 ",
      "fen": "R4a3/4a4/3k5/4N4/p3P4/2rr5/P4R2P/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1225",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN YuJiang - LI Jun\nChina Team Championship 1984 ",
      "fen": "3akab1C/9/4b4/5N3/2n6/9/pp4n2/5K2B/4R4/3r2B2 b - - 0 1",
      "id": "puzzle_1226",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LUO ZhongCai - GUO JiPing\nChina Team Championship 1984 ",
      "fen": "2b6/5k3/8c/5P3/2b1r4/5R3/9/4C4/6p2/2B1KAB2 w - - 0 1",
      "id": "puzzle_1227",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU DaYu - ZHENG YouPing\nChina Team Championship 1984 ",
      "fen": "2baka3/9/4b4/p7p/9/P3n4/9/1R2Kn3/r8/3A1AB2 b - - 0 1",
      "id": "puzzle_1228",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU Ming - LIAO YiQun\nChina Team Championship 1984 ",
      "fen": "1R3ab2/3ka4/b1P1nN3/9/3r5/9/8P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1229",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG ZiJun - MA Lin\nChina Team Championship 1984 ",
      "fen": "4ka3/1n1Ra4/4r4/p1p1R3p/5P3/4C4/P4r2P/4BA3/9/2B1KA3 w - - 0 1",
      "id": "puzzle_1230",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI ZhongYu - LI GuoXun\nChina Team Championship 1984 ",
      "fen": "3ak4/4R4/4bn3/3PC3p/6p2/P3c3P/1N7/4B4/3rA2n1/2B1KA3 b - - 0 1",
      "id": "puzzle_1231",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG NaiDong - LI WangXiang\nChina Team Championship 1984 ",
      "fen": "3k1ab2/4a4/4bc3/p3p3p/5n3/1N2P1R2/8P/B2r2N2/9/2n1K4 b - - 0 1",
      "id": "puzzle_1232",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU DaYu - YUAN ZhongCi\nChina Team Championship 1984 ",
      "fen": "3Pkab2/C8/2C1ba3/9/5c3/8P/3n5/3Ap4/4AK3/9 b - - 0 1",
      "id": "puzzle_1233",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YouHua - LIU DaHua\nChina Team Championship 1984 ",
      "fen": "1Cbcka3/3RaR3/2N1b2r1/p1C5p/2P6/6p2/P7P/4r1c2/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1234",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG YuCai - TANG FangYun\nChina Team Championship 1984 ",
      "fen": "2Ra1k3/3P5/9/9/9/6p2/4cr3/3A1A3/4K4/9 w - - 0 1",
      "id": "puzzle_1235",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAO Hua - FANG RuiHao\nChina Team Championship 1984 ",
      "fen": "3k1a3/2N1ac3/4Nr3/p3n3p/6p2/2P6/P7P/4B4/1c1CA4/3RKAB2 w - - 0 1",
      "id": "puzzle_1236",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG QuanSheng - CAO Lin\nChina Team Championship 1984 ",
      "fen": "4c4/4R3C/5k1P1/9/6r2/9/9/9/4A4/3CK4 w - - 0 1",
      "id": "puzzle_1237",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU TianLi - LIANG WenBin\nChina Team Championship 1984 ",
      "fen": "4kcR2/3Pa2N1/5a3/9/9/9/3r5/3AB4/9/2BAK4 w - - 0 1",
      "id": "puzzle_1238",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI ZhongYu - SUN ZhiWei\nChina Team Championship 1984 ",
      "fen": "2b1k4/4a4/4b4/2P3R2/6c2/4C4/9/4B4/3KAp1c1/2r6 b - - 0 1",
      "id": "puzzle_1239",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI WangXiang - ZHU ZhuQin\nChina Team Championship 1990 ",
      "fen": "3ak4/4a4/5nN2/7R1/9/r5B2/2p6/9/9/3AKA3 w - - 0 1",
      "id": "puzzle_1240",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU QingYang - CHEN Yu\nChinese National Champion 1990 ",
      "fen": "4ka3/4a4/9/p8/9/PN7/2P5P/5R1rB/4A1p2/3A1K1c1 b - - 0 1",
      "id": "puzzle_1241",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUO FuRen - BU FengBo\nChina Team Championship 1990 ",
      "fen": "1rbN5/3n5/5k3/p6Rp/4p1r2/9/P3P1p1P/2N5B/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1242",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XinAn - LIU Zheng\nChinese National Champion 1990 ",
      "fen": "4k4/R3aP3/6c2/4r4/6b1N/9/1p7/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1243",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU QingYang - CHEN Yu\nChinese National Champion 1990 ",
      "fen": "4ka3/4a4/9/p8/9/PN7/2P5P/5R1rB/4A1p2/3A1K1c1 b - - 0 1",
      "id": "puzzle_1244",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN ShuLan - GANG QiuYing\nChinese National Champion 1990 ",
      "fen": "2bCk1b2/4a4/9/4p1n1p/5c3/2B2N3/P3Pn2P/C4K3/4r4/R1B6 b - - 0 1",
      "id": "puzzle_1245",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG GuangZeng - HU QingYang\nChinese National Champion 1990 ",
      "fen": "5kb2/4P4/4b4/9/8p/9/8P/4p4/3p1r3/3AK2R1 b - - 0 1",
      "id": "puzzle_1246",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHU ZhuQin - HONG Zhi\nChinese National Champion 1997 ",
      "fen": "4ka3/4C4/4b4/2NC5/p5b2/9/P5N1P/4BAn2/1ccp5/3AK4 b - - 0 1",
      "id": "puzzle_1247",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUO RuiXia - HU Ming\nChinese National Champion 1997 ",
      "fen": "2b1ka1C1/4a4/4b3R/p3p1p1p/9/2B3P2/P3P3P/N4K3/3r5/1RB3r2 b - - 0 1",
      "id": "puzzle_1248",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG NaiDong - ZHAO LiKim\nChinese National Champion 1997 ",
      "fen": "2b2a3/1N1k5/3ab4/1nP5p/4C4/C8/P3P2rP/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1249",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG NaiDong - JIN YuYan\nChinese National Champion 1997 ",
      "fen": "4ka3/3c5/4ba3/8p/9/C1B6/PCcNnn2P/9/9/3AKAB2 b - - 0 1",
      "id": "puzzle_1250",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI HongBin - LIU Jun\nChina Team Championship 1991 ",
      "fen": "4ka3/2R2C3/5a3/p3p3p/2p6/4p1r2/P1P5P/N2C5/5K3/2BA1An2 b - - 0 1",
      "id": "puzzle_1251",
      "title": "Mate in 2 moves"
    },
    {
      "description": "REN Jian - MA WenTao\nChina Team Championship 1991 ",
      "fen": "2na4R/4a4/b3Nk3/p2PN4/9/4P4/P5p1P/9/2n1A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1252",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU ZhengWei - TONG BenPing\nChina Team Championship 1991 ",
      "fen": "1C2kac2/1cCRa4/4b1n2/8p/P1b6/1N7/8P/4B4/4A4/3AK1r2 w - - 0 1",
      "id": "puzzle_1253",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MIAO HuaKui - HUANG Wei\nChina Team Championship 1991 ",
      "fen": "3k1aR1C/4a4/9/4p4/1c4p2/2B5P/3rP4/9/9/3AKA3 b - - 0 1",
      "id": "puzzle_1254",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN Bo - WANG Bin\nChina Team Championship 1991 ",
      "fen": "1R1ak1b2/3Pa4/6Pnr/5N3/2b6/9/8p/4B4/4A4/2BK1A3 w - - 0 1",
      "id": "puzzle_1255",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU JianMing - CHI XinDe\nChina Team Championship 1991 ",
      "fen": "C3k4/2P1a4/9/p8/2b6/1R7/P3r4/5A3/1n1K5/3A5 b - - 0 1",
      "id": "puzzle_1256",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN Jun - KANG Hong\nChina Team Championship 1991 ",
      "fen": "3k1a3/4a4/b2R5/p1r5p/4c4/4cp3/P2r4P/4BC3/4A4/R1B1KA3 b - - 0 1",
      "id": "puzzle_1257",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HAN SongLing - HUANG Yong\nChina Team Championship 1991 ",
      "fen": "5k3/1CP6/8R/9/p7P/4pn3/6r2/4B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1258",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG JingXian - ZHU XiShi\nChina Team Championship 1991 ",
      "fen": "3a2b2/5kN2/4ba3/4r3p/p2R5/7C1/5p3/9/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1259",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI CongDe - LIAO ErPing\nChina Team Championship 1992 ",
      "fen": "2b2a3/3ka4/4b4/p3C4/5P3/2P1c3p/P4c3/2Nr1A2R/4K4/9 b - - 0 1",
      "id": "puzzle_1260",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN MuJiang - LUO ZhongCai\nChina Team Championship 1992 ",
      "fen": "4kab2/4aRN2/4b4/p7p/9/9/P7P/4C3n/4A4/2BrKA3 w - - 0 1",
      "id": "puzzle_1261",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CENG DongPing - WU YinHui\nChina Team Championship 1992 ",
      "fen": "4R4/3k1P3/9/p7p/9/9/P7P/3r2p2/9/3AK1B2 w - - 0 1",
      "id": "puzzle_1262",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YouHua - ZHAO QingGe\nChina Team Championship 1992 ",
      "fen": "1r2ka3/4a4/4b4/p3Cn3/2N6/2P6/P8/4BA3/4A4/c3K4 w - - 0 1",
      "id": "puzzle_1263",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN Ying - SHAN XiaLi\nChina Team Championship 1992 ",
      "fen": "2baka1R1/9/4r3b/6N2/p1p6/9/5n3/3nB4/9/3K1C3 b - - 0 1",
      "id": "puzzle_1264",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN FuJie - HUANG Yong\nChina Team Championship 1992 ",
      "fen": "2bak4/4a4/4b4/9/8P/P3p4/R3cnp2/3rB4/C3A4/1C2KAB2 b - - 0 1",
      "id": "puzzle_1265",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG YuHu - Gan Yihu\nChina Team Championship 1992 ",
      "fen": "4kab1C/1c1RaR3/2r6/nrp3pn1/9/9/2P5P/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1266",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YIN GuangShun - WANG GuoFu\nChina Team Championship 1992 ",
      "fen": "7C1/3k5/2c2RN2/9/pn6r/2p6/P3P4/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1267",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIAO ErPing - WU ZhengWei\nChinese National Champion 1992 ",
      "fen": "2bn1a3/R2C5/1c1k1a3/4P1N1p/2p6/9/3r4P/3AB4/4K4/5A3 w - - 0 1",
      "id": "puzzle_1268",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN FuJie - CUI Yan\nChinese National Champion 1992 ",
      "fen": "1C3k3/4c4/3ab4/5CN2/p7p/9/2n4n1/9/9/3K1A3 b - - 0 1",
      "id": "puzzle_1269",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG Jian - FU GuangMing\nChinese National Champion 1992 ",
      "fen": "3k1a2N/4a4/4c4/6r1p/2b6/C3p3P/P8/1N4Rn1/2n1AK3/2B2A3 b - - 0 1",
      "id": "puzzle_1270",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU Ming - GUO LiPing\nChinese National Champion 1992 ",
      "fen": "3a5/3P1k1N1/b8/8C/2bN4n/p2n2P1c/9/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1271",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU yi - CAI ZhongCheng\nChina Team Championship 1993 ",
      "fen": "2baka3/9/4b4/p1p1R3p/4cn3/2P6/4P4/2N3Cr1/4A4/cC1AK4 b - - 0 1",
      "id": "puzzle_1272",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DENG SongHong - LI QuanJun\nChina Team Championship 1993 ",
      "fen": "5a3/9/4ka3/9/9/9/9/1r1pR4/9/3K1A3 b - - 0 1",
      "id": "puzzle_1273",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CENG GuoRong - LI HaiJiao\nChina Team Championship 1993 ",
      "fen": "3k1a3/3c5/b3Ca3/p3C3p/3R5/6P2/P1P1P3P/B8/7R1/1r1AKArn1 w - - 0 1",
      "id": "puzzle_1274",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GE WeiPu - LIU XiangDong\nChina Team Championship 1993 ",
      "fen": "1R3abr1/C3a4/3kb3n/p1pr5/1C5cp/2P1P1N2/3c3RP/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1275",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN HanFeng - WANG DaMing\nChina Team Championship 1993 ",
      "fen": "2ba1k3/2N1a4/2P6/4pC3/2b3c1p/1C7/4p3P/4B4/2n1A3N/1cBA1K3 w - - 0 1",
      "id": "puzzle_1276",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XUE GuangRu - CUI WeiPing\nChina Team Championship 1993 ",
      "fen": "1C1k1a3/nNC1a4/bP2b1n2/p7p/9/6p1c/4P1c2/4B1N2/4K4/2BA1A3 w - - 0 1",
      "id": "puzzle_1277",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Zheng - WANG GuoFu\nChina Team Championship 1993 ",
      "fen": "4kNb2/2R6/3a5/p3C3p/4P4/6P2/P7P/1rp1B3n/4A4/1cBAK4 w - - 0 1",
      "id": "puzzle_1278",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Bo - ZANG RuYi\nChina Team Championship 1993 ",
      "fen": "5k3/CN2P4/9/9/9/9/9/1p4n2/4c4/4K4 w - - 0 1",
      "id": "puzzle_1279",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU YuZhong - DING RuYi\nChina Team Championship 1993 ",
      "fen": "2bak4/4a4/n1C1b1c2/pN2C1r1p/5R3/P1P6/8P/B8/9/3AKA3 w - - 0 1",
      "id": "puzzle_1280",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU HaoHe - QIU Hua\nChina Team Championship 1993 ",
      "fen": "2b1k2C1/4aR3/2n2cNc1/r7p/9/2p6/4P3P/2N1B4/4AR3/2BrK4 w - - 0 1",
      "id": "puzzle_1281",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG QuanSheng - YIN GuangShun\nChinese National Champion 1994 ",
      "fen": "C2a5/2R1ak3/8n/5rp2/2N1P3p/P5P2/9/4cA3/9/4KA3 w - - 0 1",
      "id": "puzzle_1282",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TONG BenPing - BU FengBo\nChinese National Champion 1994 ",
      "fen": "2b1ka3/4a4/1NP1b4/5c2p/4cn3/9/1N3R2P/9/3Cp4/2BA1K3 b - - 0 1",
      "id": "puzzle_1283",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG HanMin - LU ZengRong\nChinese National Champion 1995 ",
      "fen": "3cka3/4a4/4R4/p8/2R6/9/P7P/4B4/2nK5/2B1r4 b - - 0 1",
      "id": "puzzle_1284",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DaHua - WANG BingGuo\nChinese National Champion 1986 ",
      "fen": "9/5k3/3a2N1P/3P2N2/p1b6/9/c8/5An1B/9/4K1B2 w - - 0 1",
      "id": "puzzle_1285",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG BaoCong - CHEN XiaoKun\nChinese National Champion 1987 ",
      "fen": "3k5/4P4/9/9/2c5p/9/1n2N4/3C5/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1286",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG PeiJun - XU JinZhi\nChina Team Championship 1998 ",
      "fen": "1r1k1ab2/3c5/3NbNn2/R7p/1P4p2/2C6/8P/3Cn4/4A4/1c2KAB2 w - - 0 1",
      "id": "puzzle_1287",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LU ZengRong - QUO HaiJun\nChina Team Championship 1998 ",
      "fen": "2b2k3/n1cRa1N2/3ab4/p3R3p/4r4/1rP1N4/Pc6P/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_1288",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG DaMing - XU Bo\nChina Team Championship 1998 ",
      "fen": "2bk1ab2/4a3n/c1Rc1N3/p1r4rp/4p1p2/9/P1P3P1P/4C1N2/3R5/2BAKAB2 w - - 0 1",
      "id": "puzzle_1289",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DING QingLiang - MAO JiZhong\nChina Team Championship 1998 ",
      "fen": "2bak4/4a4/4b4/pN2p3p/4P2n1/4c1C2/PR2c4/2rA5/5K3/3A1C3 b - - 0 1",
      "id": "puzzle_1290",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIE Kui - XU JianMiao\nChina Team Championship 1999 ",
      "fen": "5kb2/4a4/4br3/p1p1p1p2/9/P2Cc1P2/3n1r2P/2R1B4/3CA4/2B1KA1R1 b - - 0 1",
      "id": "puzzle_1291",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Li Hong Jia - ZHUANG YongXi\nChina Team Championship 1999 ",
      "fen": "3aka3/3R5/4b1nr1/p1C6/4pn2p/2P3R2/P3P3P/4B4/4A4/2BK1c3 w - - 0 1",
      "id": "puzzle_1292",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Jiang - XU Bo\nChina Team Championship 1999 ",
      "fen": "3akab2/9/4b4/p2Rp3p/2r2N3/6P2/P2R4P/9/5n1c1/3AKAB2 w - - 0 1",
      "id": "puzzle_1293",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIAO ErPing - WEN Hu\nChina Team Championship 1999 ",
      "fen": "C2k2b2/4aP3/1C7/9/1cb1p1p2/9/6n2/4BA3/4A4/4K4 w - - 0 1",
      "id": "puzzle_1294",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG QuanSheng - Lv Qin\nXiaolin motor car cup 1999 ",
      "fen": "3akRb2/4a4/4b4/9/p2P4p/7N1/P3C3P/c2KB1r2/2p1A4/1c3AB2 b - - 0 1",
      "id": "puzzle_1295",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANG ZhuoGuang - XIONG XueYuan\nXiaolin motor car cup 1999 ",
      "fen": "2baka3/4c4/4b4/8C/p2P5/2P6/3r2p1P/4nA1R1/4C4/c1BA1KN2 b - - 0 1",
      "id": "puzzle_1296",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Shi - ZHENG YiHong\nXiaolin motor car cup 1999 ",
      "fen": "2b1ka3/3N5/4b4/p1r1r3p/2c1C4/4P4/P2R1p2P/4B4/3KA4/5A3 w - - 0 1",
      "id": "puzzle_1297",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU JianMiao - KE YongQing\nXiaolin motor car cup 1999 ",
      "fen": "2bak4/9/4ba3/4p3p/2R4N1/9/P3P3P/3CB4/2cnA1r2/3A1K3 b - - 0 1",
      "id": "puzzle_1298",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG ChuFang - WEN Jing\nChinese National Champion 1998 ",
      "fen": "1c1k1ab2/4PR3/6n2/8p/pnp6/6r2/P1P5P/N3C1N2/4c4/2BAKAB2 w - - 0 1",
      "id": "puzzle_1299",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIANG Yanghong - SUN GuangQi\nChinese National Champion 1998 ",
      "fen": "C3kab2/9/2c6/p7p/2b1C4/R3n4/P1r1N3P/4B4/3pA4/1c2KAB2 b - - 0 1",
      "id": "puzzle_1300",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG LinNa - ZHANG WenTong\nChinese National Champion 1998 ",
      "fen": "2b1ka3/4a3R/4b4/p2N2r1p/3R5/5p3/P7P/2p6/3K5/2cA1AB2 w - - 0 1",
      "id": "puzzle_1301",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN ShuCheng - Li Hong Jia\nChinese National Champion 1998 ",
      "fen": "1C2ka3/9/3a5/p8/5Nc2/P4Nn1p/5p3/4B4/1n2A4/4KAB2 b - - 0 1",
      "id": "puzzle_1302",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KE YongQing - LEUNG TatMan\nChinese National Champion 1998 ",
      "fen": "1CCa5/3Nk4/3abc3/p7p/9/5n3/9/3A1A3/4K4/9 w - - 0 1",
      "id": "puzzle_1303",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - LI XueSong\nChinese National Champion 1998 ",
      "fen": "1r1k5/4a2R1/5N3/5c3/1n7/4P4/9/4B4/1p2A4/2BAK4 w - - 0 1",
      "id": "puzzle_1304",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TIAN ChangXing - SONG GuoQiang\nChinese National Champion 1998 ",
      "fen": "2b1kab1C/4a4/9/p2Np4/3P5/6R2/P3P3P/3K2c2/2r1A2n1/5A3 b - - 0 1",
      "id": "puzzle_1305",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG QuanSheng - TAO HanMing\nChinese National Champion 1987 ",
      "fen": "2ba1k3/4anP2/4b4/p2N1c3/1C7/5p3/9/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1306",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAO MingHai - CHEN XiaoKun\nChinese National Champion 1987 ",
      "fen": "CR1akab2/9/4b4/8p/4P4/9/r3n3P/9/4K4/5A2c b - - 0 1",
      "id": "puzzle_1307",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DENG SongHong - CHEN HanFeng\nChina Team Championship 1988 ",
      "fen": "2b2ab2/1R2a4/2Nkc4/p7p/9/3C3r1/P3P3P/4B4/9/r2AKA3 w - - 0 1",
      "id": "puzzle_1308",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KANG Hong - BU FengBo\nChinese National Champion 1989 ",
      "fen": "3a4C/4ak3/9/p1R1p3p/3nc4/8P/9/B2A4N/5r3/4K1B2 b - - 0 1",
      "id": "puzzle_1309",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG YingFu - ZHENG XinNian\nChinese National Champion 1989 ",
      "fen": "1CNak4/3Ra4/8b/2r5p/6b2/2P1p4/9/4B4/9/2BAKn3 w - - 0 1",
      "id": "puzzle_1310",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN JinAn - LIN JianZhi\nAsian Xiangqi Individual Championships 1989 ",
      "fen": "3a2b2/4ak1N1/4N4/5P2p/p5b2/9/6c1P/3A5/4K3c/2BA2B2 w - - 0 1",
      "id": "puzzle_1311",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XiaoKun - HUANG ShaoLong\nChinese National Champion 1978 ",
      "fen": "3a1k3/4a4/5P3/9/9/4R4/5r3/2n6/9/4K4 b - - 0 1",
      "id": "puzzle_1312",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CUI Yan - LIAO ErPing\nChina Team Championship 1996 ",
      "fen": "6b2/4k4/3ac4/p7p/9/4P4/P3rR2P/B2K5/9/5N3 b - - 0 1",
      "id": "puzzle_1313",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU HongMu - LI ZhongYu\nChina Team Championship 1982 ",
      "fen": "9/C3C4/2NRbkn2/p7p/2P6/5NB2/P3P3P/3AK2c1/5r3/2BA2c2 w - - 0 1",
      "id": "puzzle_1314",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Qiang - LIAO ErPing\nChinese National Champion 1992 ",
      "fen": "4ka3/2r1a4/9/9/9/9/R7p/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1315",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Chi Keung - YANG Frank C.\nWorld Xiangqi Championships 1997 ",
      "fen": "3P2b2/1c1Ra4/4bk3/4p1N1p/pr7/2R6/P3Pnn1P/4BA3/9/2BAK4 w - - 0 1",
      "id": "puzzle_1316",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHOSHI Kazuharo - HE ZhiMing\nWorld Xiangqi Championships 1997 ",
      "fen": "4kab2/9/4b1P2/9/9/2B6/9/4B4/3pAp1n1/3AK4 b - - 0 1",
      "id": "puzzle_1317",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIAKIANKAI Sanguan - GAO WeiXuan\nWorld Xiangqi Championships 1997 ",
      "fen": "5k3/4R4/9/p7p/4p2N1/2Pc2p2/9/4B4/4A4/3rK1B2 w - - 0 1",
      "id": "puzzle_1318",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZOU LiMu - LI JiaHua\nChinese National Champion 1986 ",
      "fen": "4k1b2/3Pa4/6n2/4r1N1p/4C4/6P2/2P2R2P/9/1cN1p4/cC1n1KB2 b - - 0 1",
      "id": "puzzle_1319",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZOU LiMu - ZHANG Weimin\nChinese National Champion 1986 ",
      "fen": "1C1k5/N4P3/4b4/9/p1p3b2/3p5/P1n2c3/B3B4/4A4/5K3 w - - 0 1",
      "id": "puzzle_1320",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAO Lin - WANG BingGuo\nChinese National Champion 1986 ",
      "fen": "2bak4/4a4/4b4/9/9/9/P8/1C1nBR3/2r3p2/2BA1K3 b - - 0 1",
      "id": "puzzle_1321",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIN Kok Liang - NAEGLER Michael\nWorld Xiangqi Championships 1997 ",
      "fen": "2bakaR2/9/4b4/p4N2p/2p1p4/9/PR6P/1r2B1cr1/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1322",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NASTASIO Davide - SHOSHI Kazuharo\nWorld Xiangqi Championships 1997 ",
      "fen": "3k1ab2/4a4/4b4/p8/6P2/2P6/P7P/4Bp3/3r5/2R2KB2 b - - 0 1",
      "id": "puzzle_1323",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG BingWei - CHEN JiaSheng\nHong Kong Team Champion 2001 ",
      "fen": "4ka3/4a4/9/p5C2/3R5/2p6/9/4r4/4K4/9 w - - 0 1",
      "id": "puzzle_1324",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN ZhiEn - LEUNG TatMan\nHong Kong Team Champion 2001 ",
      "fen": "5a3/4ac3/4k3b/9/9/9/3n5/B2C5/4AK3/3A5 b - - 0 1",
      "id": "puzzle_1325",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LU BaoCheng - CAI GuanHeng\nHong Kong Team Champion 2001 ",
      "fen": "3akab2/9/4b4/p3p2NC/9/2n3B2/c7P/4B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1326",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DONG YuRong - HU ZhiWen\nHong Kong Team Champion 2001 ",
      "fen": "1R7/5k2r/3a1a3/9/p3P3p/n8/6R1P/4B2C1/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1327",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Xiao Jifu - JIAN TianNan\nHong Kong Team Champion 2001 ",
      "fen": "4R4/2NR3r1/2ncbk2c/p3p3p/9/2P1r1p1P/P8/4B1C2/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_1328",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI GuanHeng - HU ZhiWen\nHong Kong Team Champion 2001 ",
      "fen": "3R5/C3kc3/4N4/1R7/1n2P3p/2P6/8P/9/r3r4/2BK1ABc1 w - - 0 1",
      "id": "puzzle_1329",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG Ning - LEUNG TatMan\nHong Kong Team Champion 2001 ",
      "fen": "4kab2/4aC3/2n1b1n2/p1R1p1N1p/2pr5/2B3P2/P1P3R1P/1c7/1r7/1NB1K4 b - - 0 1",
      "id": "puzzle_1330",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Liang Wei Qiang - CAI GuanHeng\nHong Kong Team Champion 2001 ",
      "fen": "2bk1an2/c1N1a4/4b4/p1P3C2/3C5/6p2/P3P1n1P/6N2/4A4/2BAK1Bc1 w - - 0 1",
      "id": "puzzle_1331",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIAN TianNan - LI Bo\nHong Kong Team Champion 2001 ",
      "fen": "2bak3C/4a4/4b3N/p3C4/6P2/2p6/P3n3P/5R3/4r4/2c1KAB2 w - - 0 1",
      "id": "puzzle_1332",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU Qiang - ZHANG YaSong\nHong Kong Team Champion 2001 ",
      "fen": "3aka2R/2NP5/9/pN7/9/P2r4P/4c4/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1333",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU JuWang - FANG WenWei\nHong Kong Team Champion 2001 ",
      "fen": "2R2a3/4k4/n2P5/p3N3p/9/9/4P3P/2p3N2/3r5/1c2KA3 w - - 0 1",
      "id": "puzzle_1334",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Yu Kuai - HUANG YuYing\nCanadian National Champion 2002 ",
      "fen": "4kab2/4a4/2n1bN1c1/p1p5p/6p2/4c4/P1Pr4P/B3nC3/4AC3/R3KAB2 b - - 0 1",
      "id": "puzzle_1335",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HO Shing Kin - MA John\nCanadian National Champion 2002 ",
      "fen": "2bakab2/4n4/1P7/p3R3p/5Rp2/9/P1r1P1P1P/4B1N2/2C1A4/3r1K3 w - - 0 1",
      "id": "puzzle_1336",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU Ming - YUNG Tak Keung\nHong Kong Individual Championship 2002 ",
      "fen": "3k1a3/4aP3/8b/9/6b2/9/6N2/4B1n2/5pp2/4K4 b - - 0 1",
      "id": "puzzle_1337",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG XueQian - WANG HaoChang\nHong Kong Individual Championship 2002 ",
      "fen": "CR1ak1b2/4aR3/4b4/4p4/2p3p2/4P4/r7P/3A5/2c1A3c/4K4 w - - 0 1",
      "id": "puzzle_1338",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG WeiMing - HONG HaiFeng\nHong Kong Individual Championship 2002 ",
      "fen": "4kab2/4a2c1/4b4/pN1PC3p/3C5/3p4P/P3r4/8B/4A3R/1cBAK4 w - - 0 1",
      "id": "puzzle_1339",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JI ZhongQi - HO Shing Kin\nCanadian National Champion 2002 ",
      "fen": "r3kab2/4a2c1/4c4/1N6p/P3C4/9/4P3P/4B3B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1340",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHANG Diana - ZHAO GuanFang\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "3C1k3/4a4/b3b4/p2R2p1p/9/5rP2/9/2R6/2c6/2rAK4 b - - 0 1",
      "id": "puzzle_1341",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG WenTong - ZHANG GuoFeng\nChinese National Champion 2002 ",
      "fen": "3a1kb2/4a4/5rn2/pNp1p3p/1CPr1R3/6P2/P3c3P/B3C4/4A4/1R1AK1B2 b - - 0 1",
      "id": "puzzle_1342",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG Yang - PAN ZhenBo\nChinese National Champion 2002 ",
      "fen": "4ka3/4a4/4b4/p7C/3P2b2/P2p1n3/1R1c1r3/9/3N5/2BAKAB2 w - - 0 1",
      "id": "puzzle_1343",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG LinNa - HAN Bing\nChinese National Champion 2002 ",
      "fen": "5k3/1CR1a2R1/3ab4/p3n1p1p/9/2P2r3/P3r3P/B8/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_1344",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHOSHI Kazuharo - PHAN Kiat\nAsian xiangqi Championship 2002 ",
      "fen": "4kab2/4a4/4bc3/p1p5p/9/P1P6/2cn4P/2NCB2C1/4AKn2/2BA2N2 b - - 0 1",
      "id": "puzzle_1345",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Hok Him - WONG Chen Wei\nAsian xiangqi Championship 2002 ",
      "fen": "2ba1a1CR/4k4/9/4p4/p1bN5/2P6/P3P1n2/2n4r1/4A4/2B1KANc1 w - - 0 1",
      "id": "puzzle_1346",
      "title": "Mate in 2 moves"
    },
    {
      "description": "QUACH Anh Tu - NG Yee Hong\nAsian xiangqi Championship 2002 ",
      "fen": "2bk1abr1/4a4/6c2/pC4CNp/5P3/P3Pn3/4c3P/3pB4/4A4/2BK1A1R1 b - - 0 1",
      "id": "puzzle_1347",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN Andrew - TAGUCHI F.\nAsian xiangqi Championship 2002 ",
      "fen": "2ba1kb2/4a4/5N2P/5R1N1/3n5/p8/9/3A1A3/4K4/9 w - - 0 1",
      "id": "puzzle_1348",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LING LeeKiong - LU George\nAsian xiangqi Championship 2002 ",
      "fen": "CR1ak1b2/6n2/4b3c/9/r8/9/9/N8/4Ap3/2rRKABc1 b - - 0 1",
      "id": "puzzle_1349",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN Cheng Kuo - SIM Eng Choon\nAsian xiangqi Championship 2002 ",
      "fen": "5Rb2/4k1c2/2NPb4/6n1p/1P7/2B4rP/9/B8/4AK3/3A5 w - - 0 1",
      "id": "puzzle_1350",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SOH Ying Ying - ZHANG GuoFeng\nAsian xiangqi Championship 2002 ",
      "fen": "2bakab2/9/2N2cn2/p3p3p/9/2B6/P3Pr2P/CRN2C3/2n1AK3/3A2B2 b - - 0 1",
      "id": "puzzle_1351",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SIM Eng Choon - YUNG Tak Keung\nAsian xiangqi Championship 2002 ",
      "fen": "2bak4/4a4/8b/p8/9/6P2/P5R1P/c3B1n2/1r1rA4/C2RKAB2 b - - 0 1",
      "id": "puzzle_1352",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LU George - TRENH A Sang\nAsian xiangqi Championship 2002 ",
      "fen": "4ka3/4a4/4b3b/6C1P/1c7/P5p2/3cPnN2/1C2B1N2/4A4/4KA3 b - - 0 1",
      "id": "puzzle_1353",
      "title": "Mate in 2 moves"
    },
    {
      "description": "QING ChengYan - ZHU YongKang\nChinese National Champion 1976 ",
      "fen": "3ak4/4a4/4b4/5R3/2b6/2n1C2N1/4c3P/5p2B/6r2/4K1B2 b - - 0 1",
      "id": "puzzle_1354",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZUO YongZiang - ZHANG ZhiQi\nChinese National Champion 1976 ",
      "fen": "4kab2/4a4/2n1b4/pN2p3p/6p2/1R2n4/P3c3P/C2C1A2B/2r6/3K1R3 b - - 0 1",
      "id": "puzzle_1355",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Xing - LAI Robin\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3a1k3/2N1a4/9/p6Rp/9/2P2n3/P7P/9/4A4/3K2cr1 w - - 0 1",
      "id": "puzzle_1356",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN LiChun - LIU An Sheng\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "9/4ak2c/3aP4/5N3/9/3C5/1p7/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1357",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG ShenHong - LEE John\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "4kab2/3raP1c1/4b4/2RN1n3/p8/4C1p2/8P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1358",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG YiTing - Noyes Leung\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "4kaC2/4a4/4b4/9/2b1PP2P/5c3/1N2c4/9/4A1n2/3A1K3 b - - 0 1",
      "id": "puzzle_1359",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN Dot San - Ung Dau\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "1C2ka3/2C4R1/3ab1n2/p3p3p/c8/2P6/P3P3P/4B4/9/2BAKr3 w - - 0 1",
      "id": "puzzle_1360",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Yun - JI ZhongQi\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "5Rb2/3k5/2Pab4/c8/4P4/1C7/3r3p1/3AB4/4A4/2B1K4 w - - 0 1",
      "id": "puzzle_1361",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN LiFeng \r\n - RAMO Juoni\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3a3R1/2N1a1P2/2P2k3/9/4n4/9/9/4B4/4A4/2B1Kr3 w - - 0 1",
      "id": "puzzle_1362",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Tai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3ak1b2/4a4/4br3/p4R2N/2c1C4/3p2P2/P1n5P/B3C4/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_1363",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN HoiFan  - WANG JiaLiang\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "5R3/9/2Nk5/p7p/9/P4NP2/4P3P/9/1p1rr4/2Bc1K3 w - - 0 1",
      "id": "puzzle_1364",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUO ShuLong - CHEN DaQing\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "4ka3/9/3cCa3/3n4p/6N2/5R3/P3P3P/2N1B4/3pA2r1/4KABc1 b - - 0 1",
      "id": "puzzle_1365",
      "title": "Mate in 2 moves"
    },
    {
      "description": "RAMO Juoni - WEN LiShen\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3a1k3/4a4/4b4/9/2b3C1p/1N7/9/B4A3/3p1K1n1/8c b - - 0 1",
      "id": "puzzle_1366",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KITAGAWA Yukihiko - YAMADA Hirohide\nWorld Xiangqi Championships 2003 ",
      "fen": "3N2b2/3Ra4/C4kn1b/4p3p/4c4/3N1p3/P7P/4B4/4Ar3/3K1AB2 w - - 0 1",
      "id": "puzzle_1367",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU YinChuan - SUN QingLi\nChina National Xiangqi League 2003 ",
      "fen": "3nka3/4a4/4b2C1/8p/2p6/p5P2/2r1c1C1P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1368",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU YinChuan - JIANG Chuan\nChina National Xiangqi League 2003 ",
      "fen": "4R4/9/3k5/4N1p1p/p8/6P2/8P/B1nr5/4K4/1c4B2 w - - 0 1",
      "id": "puzzle_1369",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU Ming - GANG QiuYing\nYinli Cup Champion 2004 ",
      "fen": "1Cna2b2/2C2k3/4b3n/3R5/2p3p2/p3p2r1/2P4c1/N3B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1370",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU Ming - GANG QiuYing\nYinli Cup Champion 2004 ",
      "fen": "4R1b1r/1cc1R2C1/r1nkb1n2/p3p1p1p/9/1p7/6P1P/N1C1B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1371",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUO LiPing - ZHANG GuoFeng\nYinli Cup Champion 2004 ",
      "fen": "2bak1b2/4R4/9/1C6p/9/8P/4P4/1cpAK4/3r5/3A5 b - - 0 1",
      "id": "puzzle_1372",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG Bin - KE YongQing\nYinli Cup Champion 2004 ",
      "fen": "5a1C1/3P5/4kcN2/6n1p/p5p2/3R5/P3r3P/4B4/4A4/3K1A3 w - - 0 1",
      "id": "puzzle_1373",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG GuanLun - ZHANG XueChao\nChinese National Champion 2003 ",
      "fen": "3ak1b2/4a4/4b4/8p/2p6/3r5/4PR3/B2C5/4An2c/3K1A3 b - - 0 1",
      "id": "puzzle_1374",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAU VengTak - AI GuangZhi\nChinese National Champion 2003 ",
      "fen": "3ak1b2/4a4/4b4/p1p5p/4R4/2P1c4/5nc1P/4B1N2/4A4/R3KA3 b - - 0 1",
      "id": "puzzle_1375",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN MaoShun - Zhang De Jian\nChinese National Champion 2003 ",
      "fen": "4Rab2/3k2c2/1Nr1n2Rn/6c2/4p3p/9/P3P3P/3CB1N2/1C2A4/2B1Kr3 w - - 0 1",
      "id": "puzzle_1376",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI JiaHua - JIN YuYan\nChinese National Champion 2003 ",
      "fen": "2bak4/4a4/9/4c4/p7p/5NP2/P7P/R2AB4/3K1c3/4r1B2 b - - 0 1",
      "id": "puzzle_1377",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Xian - GUO RuiXia\nChinese National Champion 2003 ",
      "fen": "3ak4/4a4/2r2Cn2/p1p5p/4R4/2P6/P3N3P/R5c2/3C1p3/2BAKA1r1 b - - 0 1",
      "id": "puzzle_1378",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FU GuangMing - LIAO ErPing\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "3k5/4aC3/9/7P1/4c4/2B3B2/9/3C5/4p4/3K1n3 b - - 0 1",
      "id": "puzzle_1379",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIAO GeLian - XIE Jing\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "4k4/4a4/4b4/P8/9/4c4/9/3Rn4/4n4/3K5 b - - 0 1",
      "id": "puzzle_1380",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG XiaoHua - XU JianMiao\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "5a3/4a1P2/5k3/3NP4/9/4n1B2/9/9/4K4/9 w - - 0 1",
      "id": "puzzle_1381",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN HaiYing - ZHAO SiQi\nChina Team Championship 2003 ",
      "fen": "1c1ak4/5P1R1/4C4/9/9/8P/P8/3A4B/4r4/4K4 w - - 0 1",
      "id": "puzzle_1382",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU Xia - GUO RuiXia\nChina Team Championship 2003 ",
      "fen": "2nakab2/2R2R3/nr2Cr3/p3p3p/9/6P2/P8/9/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_1383",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUO LiPing - LI Xian\nChina Team Championship 2003 ",
      "fen": "4kab1C/3ca4/9/p2R3N1/9/3n2B2/P7P/9/3K5/5rB2 b - - 0 1",
      "id": "puzzle_1384",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUO RuiXia - ZHAO SiQi\nChina Team Championship 2003 ",
      "fen": "4ka3/4a4/1R7/4n3c/p3C3p/2P6/P3P3P/N3B4/4A4/2BK1r3 w - - 0 1",
      "id": "puzzle_1385",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuanFang - WU Xia\nChina Team Championship 2003 ",
      "fen": "5k3/4a4/b2N5/9/1Cb5p/9/4Rn3/B5p2/2n1AK3/3A2r2 w - - 0 1",
      "id": "puzzle_1386",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG Min - LI Chao\nChina Team Championship 2003 ",
      "fen": "1Cba1k3/2c1a4/2N1b4/4p3p/1c7/3nP4/8n/B4C2B/4A4/3AK4 b - - 0 1",
      "id": "puzzle_1387",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG GuoMin - XU Bin\nChina Team Championship 2003 ",
      "fen": "2Nnk4/5P3/5nN2/1P7/6b2/9/9/B4A3/4Ap3/3K5 w - - 0 1",
      "id": "puzzle_1388",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG ShiQing - CHEN XiaoKun\nChina Team Championship 2003 ",
      "fen": "9/5k3/3RP4/9/9/9/r3p4/4B4/2n1A4/2BK1A3 w - - 0 1",
      "id": "puzzle_1389",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FU GuangMing - ZHONG Tao\nChina Team Championship 2003 ",
      "fen": "9/4k4/c2R1N3/4p3p/2b6/6B2/1r6P/9/2p1A1n2/3K1A3 w - - 0 1",
      "id": "puzzle_1390",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Hui - LO DaoMing\nChina Team Championship 2003 ",
      "fen": "2bak4/4R4/9/p1p5p/9/2P6/PN2p3P/4r4/1R2ACn2/3AK1Br1 b - - 0 1",
      "id": "puzzle_1391",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU Bin - GAO PingGui\nChina Team Championship 2003 ",
      "fen": "3k2b2/4a4/5a3/6P2/6b2/2B1c4/4N4/4B4/3pAp1n1/3AK2C1 b - - 0 1",
      "id": "puzzle_1392",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHU GuiSen - LI Qiang\nChina Team Championship 2003 ",
      "fen": "2R1ka3/4a4/4b4/p6Rp/6p2/9/P3N3P/c2K2N2/r3A4/1c3A3 b - - 0 1",
      "id": "puzzle_1393",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU Bin - XIE ZhouMiao\nWacker Real Estate Cup xiangqi Master Champion 2004 ",
      "fen": "4ka3/4a4/2R5b/2R4Np/2p1p4/P8/2P5P/cr2BK3/6r2/3A1A3 b - - 0 1",
      "id": "puzzle_1394",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JING XueYi - LI ZhiPing\nChina National Xiangqi League 2004 ",
      "fen": "2b6/4k2N1/3a5/4p3p/2N1C4/4P4/5c2P/2cnBK3/6p2/2BA5 b - - 0 1",
      "id": "puzzle_1395",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAI MingQiang - ZHAO Li\nChina Team Championship 2004 ",
      "fen": "4ka3/9/b2R4b/6P1p/9/2P1C4/1r2P3n/4B4/4A3c/3K1A3 b - - 0 1",
      "id": "puzzle_1396",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG ShiQing - XIONG XueYuan\nChina Team Championship 2004 ",
      "fen": "9/4k4/5P3/p8/8R/9/4r3P/9/5K3/9 w - - 0 1",
      "id": "puzzle_1397",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHI SiXuan - ZHENG YiYing\nChina Team Championship 2004 ",
      "fen": "1CbRk4/4a4/4b4/p5p2/1N2p4/1n4n2/4c3P/4B4/4A4/r2CKAB2 b - - 0 1",
      "id": "puzzle_1398",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Jun - BUA BinBin\nChina Team Championship 2004 ",
      "fen": "4kab2/4a4/4b4/4C4/2p5P/P5R2/4P1c2/4KA3/8r/2B2A1c1 b - - 0 1",
      "id": "puzzle_1399",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIENG Ming Chuo - WANG LinNa\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "C2k1ab2/4a4/8b/4p4/1nN5P/P3P4/2PN3c1/4BA3/3K2n2/2cA5 b - - 0 1",
      "id": "puzzle_1400",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LING LeeKiong - NG JunMing\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "3k1a3/9/4bc3/p1P5p/6p2/P1B2p3/4PnP1P/5K3/9/3A2BN1 b - - 0 1",
      "id": "puzzle_1401",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAI Han Soon - LING LeeKiong\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "5k3/4P2R1/3n1Nn2/8p/6b2/3pp3P/3c5/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1402",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG DeQi - Lv Qin\nChina National Xiangqi League 2003 ",
      "fen": "4kab2/3Na4/4b4/p8/4p3p/4n4/P2n5/2R6/4A4/2BAKCrNc b - - 0 1",
      "id": "puzzle_1403",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Hok Him - HUANG GuanZhong\nHong Kong Sports Festival Tournament 2004 ",
      "fen": "2b1k4/4a4/3an4/p2N1C2p/6p2/P4N3/1c6P/4C3B/4A4/2nK1A3 w - - 0 1",
      "id": "puzzle_1404",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU YinChuan - LIU DaHua\nJia Zhou Cup GM Champion 2000 ",
      "fen": "7c1/3k5/9/p1p1R4/3P4p/2P6/1c2C1r1P/9/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1405",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Bi Jun - SUN YongFang\nChina Team Championship 1990 ",
      "fen": "5ab2/1r2k4/3Rb1n2/p1pN3rp/1cn3p2/4p4/P4RP1P/3C5/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1406",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FENG lan - ZHAO ShuMei\nChina Team Championship 1990 ",
      "fen": "4kab2/4a1c2/4P4/p3n3p/3R5/6p2/4C3P/B4N3/2n1A3r/c2K1AB2 w - - 0 1",
      "id": "puzzle_1407",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI FuRu - CENG GuoRong\nChinese National Champion 1981 ",
      "fen": "2b1k1b2/9/9/p1p5p/9/7r1/P7P/1R3A3/3CA4/3KC1r2 b - - 0 1",
      "id": "puzzle_1408",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG GuanLin - LIU DaHua\nChinese National Champion 1981 ",
      "fen": "2b1ka3/4a4/4b4/2P5C/9/5R2P/5n3/2cA5/9/1r1AK4 b - - 0 1",
      "id": "puzzle_1409",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - YU YouHua\nChinese National Champion 1981 ",
      "fen": "5a3/3k5/2N1ba3/p1N6/2p3b2/3nC4/4P4/3AB4/c3Ap3/3K2B2 w - - 0 1",
      "id": "puzzle_1410",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU KeXi - LIAO ErPing\nChina Team Championship 1990 ",
      "fen": "1Cb1kab2/4a1c2/R8/p1p1c2Rp/6p2/4P4/P4n2P/N2r5/4A4/2B1KAB2 b - - 0 1",
      "id": "puzzle_1411",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU YinChuan - YANG HuiSheng\nChina Team Championship 1990 ",
      "fen": "2P2ab2/3ka4/8c/3N4p/1R2C1p2/4P4/3n2P1P/9/5K3/r2A1AB2 w - - 0 1",
      "id": "puzzle_1412",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN Yu - YIN Hui\nChina Team Championship 1990 ",
      "fen": "3k1ab2/4a4/2n1bN3/prN5p/9/7R1/P3P3c/3CB4/9/3AK4 w - - 0 1",
      "id": "puzzle_1413",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DianZhong - LI WangXiang\nChina Team Championship 1990 ",
      "fen": "4ka3/3R5/2n1C4/p7p/4p1Nn1/2p6/P1c5P/4B1N1B/c3A4/3rK4 w - - 0 1",
      "id": "puzzle_1414",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Bo - ZHANG Qiang\nChina Team Championship 1990 ",
      "fen": "4ka3/4a2c1/4N2C1/p2P4p/2b1n1p2/P2C2c2/8P/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1415",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FU GuangMing - FENG MingGuang\nChina Team Championship 1990 ",
      "fen": "4kab2/2N1a4/4c2R1/8p/9/2r3P2/8P/3A5/3p5/4KA3 b - - 0 1",
      "id": "puzzle_1416",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG GuangZeng - LIU Xing\nChina Team Championship 1990 ",
      "fen": "4kab2/3Pa4/4N4/p8/4C4/P8/1c1n5/5n3/5R1rC/2BAKAB2 b - - 0 1",
      "id": "puzzle_1417",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuoRong - WANG Bin\n5 Ram Cup Xiangqi Championship 2004 ",
      "fen": "C3ka3/1R7/3a5/p1C5p/2b1p4/8P/P8/4B1nn1/4A4/4Kr3 w - - 0 1",
      "id": "puzzle_1418",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI Hong Da - WONG Chen Wei\nAsian xiangqi Championship 2004 ",
      "fen": "6b2/2Nk5/3ab4/p4R3/3P5/c1P3P2/8P/3A1p1rB/1C2K4/2B6 w - - 0 1",
      "id": "puzzle_1419",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAO YiPing - \u9ec4\u6c0f\u6d77\u5e73\nAsian xiangqi Championship 2004 ",
      "fen": "2bk1a3/9/3aP4/3N5/2bC5/p1B3P2/8P/3nB4/4K4/1c1A1A3 w - - 0 1",
      "id": "puzzle_1420",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN JiaXin - GAO YiPing\nAsian xiangqi Championship 2004 ",
      "fen": "3akab2/3n5/b8/p2N4p/9/1NP1p1P2/P5c1P/3A5/4Arn2/2BK3R1 b - - 0 1",
      "id": "puzzle_1421",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN WanWei - ZHANG Gao Yang\nAsian xiangqi Championship 2004 ",
      "fen": "3ak1b2/4R4/4b4/p3p3p/9/2PC5/2r3c1P/4r4/4A2cN/R3KA3 b - - 0 1",
      "id": "puzzle_1422",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHOSHI Kazuharo - LAY Kan Hock\nAsian xiangqi Championship 2004 ",
      "fen": "3k1a3/4a4/4b4/1Pp5p/6p2/2Prp4/3Rc3P/4n4/4A4/1CB1KA3 b - - 0 1",
      "id": "puzzle_1423",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GOK Ulong - TAGUCHI F.\nAsian xiangqi Championship 2004 ",
      "fen": "3a5/5k3/4ba2c/5R3/2pn2b2/r4C3/4C3P/2p1B4/4A4/N1B1KA3 w - - 0 1",
      "id": "puzzle_1424",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LO Vui Hung - LIM KimSin\nAsian xiangqi Championship 2004 ",
      "fen": "3akab2/9/4C4/p1p3R1p/9/2P3P2/2r1c4/2r6/4A3c/R2K1AB2 b - - 0 1",
      "id": "puzzle_1425",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Hok Him - DAO Cao Khoa\nAsian xiangqi Championship 2004 ",
      "fen": "3akR3/9/2n1C4/p1N5p/4p2n1/P6N1/2P6/3KBA3/2r3cc1/5A3 b - - 0 1",
      "id": "puzzle_1426",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAGUCHI F. - CHONG Heung Ming\nAsian xiangqi Championship 2004 ",
      "fen": "3ak1b2/4a4/3Rb4/p3C1p2/3n5/9/P1P1P1P1P/9/3K4N/4r1Bc1 b - - 0 1",
      "id": "puzzle_1427",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHOSHI Kazuharo - CHEN Song\nAsian xiangqi Championship 2004 ",
      "fen": "2bakabR1/9/9/p5rNp/9/8P/P8/4p4/9/cC1AKA3 b - - 0 1",
      "id": "puzzle_1428",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZONG YongSheng - BU FengBo\nChinese National Champion 2004 ",
      "fen": "2bakaR2/3n1P3/9/p4N3/5r3/8P/9/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1429",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Cheng Junchao - ZHENG YiHong\nChinese National Champion 2004 ",
      "fen": "4kab2/3Ra4/3cbcn2/3rpRp1p/pnpr5/4P1P2/P1P5P/N1N1C4/2C6/2BAKAB2 b - - 0 1",
      "id": "puzzle_1430",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WAN ChunLin - CHEN HanFeng\nChina National Xiangqi League 2004 ",
      "fen": "2b2a1C1/3ka4/3r1n3/1P3R1P1/2b6/9/9/4KA3/9/3A5 b - - 0 1",
      "id": "puzzle_1431",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN WenQing - BU FengBo\nChina National Xiangqi League 2004 ",
      "fen": "2bk5/2n1P4/9/2N6/2b6/6B2/3cC4/4BA1p1/4A4/4K4 w - - 0 1",
      "id": "puzzle_1432",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KE YongQing - ZHANG Jiang\nChina National Xiangqi League 2004 ",
      "fen": "2bakabRC/9/3c5/9/P5p2/9/8P/N4n3/4A4/3K1Rr2 b - - 0 1",
      "id": "puzzle_1433",
      "title": "Mate in 2 moves"
    },
    {
      "description": "QIU Dong - SHANG Wei\nChina National Xiangqi League 2004 ",
      "fen": "3k1acC1/4P4/5N3/9/8p/2Bn5/P8/5n3/3K5/2BA1A3 w - - 0 1",
      "id": "puzzle_1434",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG Chuan - QIU Dong\nChina National Xiangqi League 2004 ",
      "fen": "4k2c1/3PaP1N1/3ab4/9/p1b6/6p1p/P8/4BA3/4A4/4K4 w - - 0 1",
      "id": "puzzle_1435",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG YiHong - ZHAO GuoRong\nQi Sheng Bei Supper position Tournament 2004 ",
      "fen": "2b1ka3/4a4/4b4/p3c4/2p1N1C2/P5R2/9/4Br3/9/4K4 b - - 0 1",
      "id": "puzzle_1436",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN YongZheng - HU RongHua\nQi Sheng Bei Supper position Tournament 2004 ",
      "fen": "1Cbk5/4a4/4ba3/5N3/4C4/P2c5/1c7/5A3/2n1A4/3K2B2 b - - 0 1",
      "id": "puzzle_1437",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN JianDong - YANG Yi\nJiangsu Province, the National Fitness Games 2004 ",
      "fen": "C3kab2/4a4/4b4/4p3p/2P6/5R3/P3rn2P/B2K5/4AR3/6r2 b - - 0 1",
      "id": "puzzle_1438",
      "title": "Mate in 2 moves"
    },
    {
      "description": "PANG JianYong - ZHAO Jian\nGuan Nan Tang Gou Cup Xiangqi Championships 2005 ",
      "fen": "4kab2/1N2a4/3c5/1r2p3p/2b1c4/P4N3/2R5P/C1n1B4/3KA4/2B2A3 b - - 0 1",
      "id": "puzzle_1439",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU TianHong+ZHANG GuoFeng - XU YinChuan+WU Xia\nGuan Nan Tang Gou Cup Xiangqi Championships 2005 ",
      "fen": "2b1ka3/1c7/3Rbr3/p7p/2pR2p2/4P4/4r3P/4B4/9/1C1AKAB2 w - - 0 1",
      "id": "puzzle_1440",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU CaiFang - THIEN Fui Chuen\nWorld Xiangqi Championships 2005 ",
      "fen": "2b1kaR2/4a4/9/2p3p1p/9/4P1N2/P1c2rP1P/c1N6/4A4/3AK4 b - - 0 1",
      "id": "puzzle_1441",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN Sen-Rong - SIRCI Gianluca\nWorld Xiangqi Championships 2005 ",
      "fen": "2bak4/4a4/2C1b4/p3C3p/6p2/9/5r3/5R3/4A4/1cBA1K3 w - - 0 1",
      "id": "puzzle_1442",
      "title": "Mate in 2 moves"
    },
    {
      "description": "REINDERS Rudolf - YAMADA Hirohide\nWorld Xiangqi Championships 2005 ",
      "fen": "2ba1a3/9/4k3b/5N1c1/9/5NC2/P2p4P/4B4/3KA1n2/5AB2 w - - 0 1",
      "id": "puzzle_1443",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEUNG WingOn - LIN Sen-Rong\nWorld Xiangqi Championships 2005 ",
      "fen": "9/4k4/4b4/9/6pNP/P3R4/6P2/4B4/4r2n1/3K5 w - - 0 1",
      "id": "puzzle_1444",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN Andrew - TROMBUTTON Andres\nWorld Xiangqi Championships 2005 ",
      "fen": "2bak4/3R5/c1Nab1nnc/p1C1p1R1p/4r1p2/2P6/P5PrP/N3C4/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1445",
      "title": "Mate in 2 moves"
    },
    {
      "description": "BAKRA Anuar Bin - SUNG Peter\nWorld Xiangqi Championships 2005 ",
      "fen": "4ka3/3Ra1R2/2rcb4/p2r5/3P2p1p/9/P3C3P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1446",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TRENH A Sang - LEE Michuel\nWorld Xiangqi Championships 2005 ",
      "fen": "3a1kb2/2R1a4/4b4/pC4C1p/2P6/1N4B2/P8/3n5/4K4/3r2B1c b - - 0 1",
      "id": "puzzle_1447",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG Chounmyine - EIK YU\nWorld Xiangqi Championships 2005 ",
      "fen": "2bak2r1/4a4/3cb4/p3p4/3R1R2N/4P4/P4C2P/3p5/1rn1K4/5A3 b - - 0 1",
      "id": "puzzle_1448",
      "title": "Mate in 2 moves"
    },
    {
      "description": "EIK YU - GOK Ulong\nWorld Xiangqi Championships 2005 ",
      "fen": "2ba1kb2/9/n1c6/p1p1p3p/6p2/2PN5/P3P1n1P/R1NAB4/5r3/4KABcC b - - 0 1",
      "id": "puzzle_1449",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG ZhengMing - SHOSHI Kazuharo\nWorld Xiangqi Championships 2005 ",
      "fen": "2b2k3/3Pa4/9/5N3/2b6/9/9/3C5/9/3AKA3 w - - 0 1",
      "id": "puzzle_1450",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIANG HuoCai - LOW BoonNgee\nWorld Xiangqi Championships 2005 ",
      "fen": "2b1ka3/4ar3/4b4/7Np/9/3R5/9/2p6/3K5/6n2 b - - 0 1",
      "id": "puzzle_1451",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NG YipSing - WOOD peter\nWorld Xiangqi Championships 2005 ",
      "fen": "1R1nka3/4a4/4R4/5cC1p/p1p6/4pNP2/P3P3P/4B4/4A4/3rKAB2 w - - 0 1",
      "id": "puzzle_1452",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MOULLIER Igor - GOLLMAR Bastian\nWorld Xiangqi Championships 2005 ",
      "fen": "3k1ab2/4aP3/9/4C4/3C1cb2/5p3/2Nc5/3n1A3/9/5K3 b - - 0 1",
      "id": "puzzle_1453",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUBERTI Agostino - DEKKER Alian\nWorld Xiangqi Championships 2005 ",
      "fen": "3k1ab2/4a4/4b4/9/9/9/9/3Ap4/3pAr3/4K1B2 b - - 0 1",
      "id": "puzzle_1454",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TROMBUTTON Andres - LIANG HuoCai\nWorld Xiangqi Championships 2005 ",
      "fen": "4kab2/4a4/1C2b4/p3p1R1p/9/6P2/P3P3P/5K3/4r4/1R2r1B2 b - - 0 1",
      "id": "puzzle_1455",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LA KhanhHoa - YOKOYAMA Eiiela\nWorld Xiangqi Championships 2005 ",
      "fen": "9/2NkaR2R/4b4/p7p/6p2/9/P5P1P/6n2/3rA2n1/2B1K1B2 w - - 0 1",
      "id": "puzzle_1456",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GEREMY Xavier - MOULLIER Igor\nWorld Xiangqi Championships 2005 ",
      "fen": "1n1Rkab2/4a4/4b4/2p1C1p1p/pr7/2PN5/P3P1c1P/3AB3B/1r7/4K2c1 b - - 0 1",
      "id": "puzzle_1457",
      "title": "Mate in 2 moves"
    },
    {
      "description": "EIK YU - LAU KeiCheong\nWorld Xiangqi Championships 2005 ",
      "fen": "2b6/4k4/4b4/9/5c3/2N6/3p5/C1n1BA3/3pAp3/4K1B2 b - - 0 1",
      "id": "puzzle_1458",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KNAB Reinhard - TROMBUTTON Andres\nWorld Xiangqi Championships 2005 ",
      "fen": "1r1akaR2/4nR3/bc6c/p1p1p3p/6p2/9/P1P1P1P1P/N1C1C1N2/4A4/2BrK1B2 w - - 0 1",
      "id": "puzzle_1459",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GEREMY Xavier - MACGREGOR Angua\nWorld Xiangqi Championships 2005 ",
      "fen": "2ba1k3/4a4/3Nb2r1/p5p1p/9/2p5n/P5P2/R8/4AC3/2BA1K2c w - - 0 1",
      "id": "puzzle_1460",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LA KhanhHoa - RAMO Juoni\nWorld Xiangqi Championships 2005 ",
      "fen": "2bak4/4a4/4b4/p3C3p/6p2/4n3P/P2N5/3A1AN2/cn7/2c1K4 b - - 0 1",
      "id": "puzzle_1461",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MACGREGOR Angua - ESCOFFIER Luc\nWorld Xiangqi Championships 2005 ",
      "fen": "2b1ka3/4a4/4b4/6p2/pnr5p/6P2/P3R4/3A5/3pA4/4KCBc1 b - - 0 1",
      "id": "puzzle_1462",
      "title": "Mate in 2 moves"
    },
    {
      "description": "BU FengBo - KE YongQing\nChina National Xiangqi League 2005 ",
      "fen": "2b3R2/3kaP2C/4bn3/8N/p8/2B1p4/5r3/4B4/4A4/c1CAK4 w - - 0 1",
      "id": "puzzle_1463",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU Kui Lin - ZHANG Qiang\nChina National Xiangqi League 2005 ",
      "fen": "3kc4/4a4/b2a2n1b/2NP5/p8/3N4P/P3P4/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1464",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SONG GuoQiang - JIN So\nChina National Xiangqi League 2005 ",
      "fen": "2bk5/N3aP3/9/2p6/P5b1p/9/3c2n2/4C4/3K5/9 w - - 0 1",
      "id": "puzzle_1465",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Sheng ShiHua - SUN YongZheng\nLo Lin Cup ShangHai Xiangqi King Tournament 2005 ",
      "fen": "4kab2/4a2N1/9/p4R3/2b5p/3c5/3n4P/3A5/6C2/1rBK1AB2 b - - 0 1",
      "id": "puzzle_1466",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG DeJian - CHIU Yu Kuen\nChinese National Champion 2006 ",
      "fen": "2bk1a3/2N1a3n/4b4/p1R5p/3r5/9/P4n2P/9/5K3/3A5 b - - 0 1",
      "id": "puzzle_1467",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN Zhong - HONG Zhi\nChinese National Champion 2006 ",
      "fen": "2bk1a3/2n3N2/3Pb2c1/N6Cp/9/9/3n4P/9/4A4/1cBAK4 w - - 0 1",
      "id": "puzzle_1468",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WEN Jing - FENG XiaoXi\nChinese National Champion 2006 ",
      "fen": "2C1k1br1/3Ra4/1cna4n/p3R3p/2p2r3/9/P1PNP1p1P/2NC5/4A4/2BAK1c2 w - - 0 1",
      "id": "puzzle_1469",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU YinChuan - Lv Qin\nChinese National Champion 2006 ",
      "fen": "1R1a1kb2/2C1a4/4c4/p2nN3p/9/4R4/P3P3P/4B1c2/4K4/2BA1r3 w - - 0 1",
      "id": "puzzle_1470",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DONG Fei - JIANG Chuan\nNorth-South traffic safety grandmaster Cup Tournament 2006 ",
      "fen": "2b1k1C2/4aP2r/5a3/9/9/4R4/6c1p/B8/4AK3/6B2 w - - 0 1",
      "id": "puzzle_1471",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN YongZheng - CHEN XiaoKun\nNorth-South traffic safety grandmaster Cup Tournament 2006 ",
      "fen": "1R3Nb2/4aR3/3kc4/p1r5p/6p2/4P4/8r/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1472",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MOU HaiQin - CHEN Zheng\nNorth America  Cup Xiangqi Championship  2006 ",
      "fen": "3akabn1/3RnR3/2N6/3r2C1p/9/9/4P1r1c/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1473",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - ZHANG Qiang\nChinese National Champion 2007 ",
      "fen": "9/4ak1N1/4Pa1n1/9/4N4/5nB2/9/3A4B/9/3AK4 w - - 0 1",
      "id": "puzzle_1474",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Cheng JiJun - WANG XinGuang\nChinese National Champion 2007 ",
      "fen": "3ak3C/2c1a2P1/4R3b/4n4/1R7/4P4/P5c2/2r1B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1475",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU YunZhong - WANG JuanLong\nAo Wang Cup Hubei Grand Prix Championship 2007 ",
      "fen": "4k1b2/4a4/3cRa3/9/9/9/Pn6p/B3B1C2/2r1A2C1/3K1A3 w - - 0 1",
      "id": "puzzle_1476",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HE ZhiMing - WENG Han Ming\nWorld Xiangqi Championships 2007 ",
      "fen": "C3k4/3Pa1P2/2Na4b/5c3/2n3b2/2B6/5p3/3AB4/4A4/5K3 w - - 0 1",
      "id": "puzzle_1477",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MINARTA Ifan - WANG Hui Chuan\nWorld Xiangqi Championships 2007 ",
      "fen": "3ak4/2C1a4/N3b1n2/5R2p/2c1p4/1cB3P2/PN2r3P/9/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1478",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WOO WeiCheung - MACGREGOR Angua\nWorld Xiangqi Championships 2007 ",
      "fen": "1N1k1ar2/9/3ab4/C5p1p/2p1R4/P3p1P2/2P5c/4B1c2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1479",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LYUU Yin San - VITTAYA P.B.\nWorld Xiangqi Championships 2007 ",
      "fen": "2bak4/4a4/1P2b4/2C5R/8p/9/1n2p4/9/9/2rAKA3 b - - 0 1",
      "id": "puzzle_1480",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Zhang - RAMO Juoni\nWorld Xiangqi Championships 2007 ",
      "fen": "2b1k4/4a4/3ab4/1N3P2c/9/5C2P/9/3A5/4K4/5A3 w - - 0 1",
      "id": "puzzle_1481",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ARTO Vaara - CHEIN Kvi\nWorld Xiangqi Championships 2007 ",
      "fen": "4k1b2/4a4/4b1c2/p8/8p/2r6/P2R3NP/4p4/3KA4/2c2A3 b - - 0 1",
      "id": "puzzle_1482",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEE Michuel - WOO WeiCheung\nWorld Xiangqi Championships 2007 ",
      "fen": "4kab2/3Ra4/3Nb1n2/p4Np2/3r1c2p/3C2P2/P3P4/4B4/9/3AKA3 w - - 0 1",
      "id": "puzzle_1483",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIANG ChungHao - NAEGLER Michael\nWorld Xiangqi Championships 2007 ",
      "fen": "9/4P1R1C/3k5/p8/2pr1c3/P8/2P6/3AB4/9/4K1B2 w - - 0 1",
      "id": "puzzle_1484",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU Kui Lin - MACGREGOR Angua\nWorld Xiangqi Championships 2007 ",
      "fen": "2bakan2/9/1R2N4/p1p3p1p/9/2P3P2/P5R1P/4r3B/4A2r1/2BAK2c1 w - - 0 1",
      "id": "puzzle_1485",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NAEGLER Michael - JI ZhongQi\nWorld Xiangqi Championships 2007 ",
      "fen": "4kab2/4a4/4n4/4p4/2R6/6R2/P3P1P1P/9/3rN4/1cBA1KB2 b - - 0 1",
      "id": "puzzle_1486",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HOFFARTH Karsten - BYWAY Paul\nWorld Xiangqi Championships 2007 ",
      "fen": "2n1k4/2r1a4/4P2Nb/9/3R5/2p6/9/4BA3/3K5/5AB2 w - - 0 1",
      "id": "puzzle_1487",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAN Henry - LU GuoLong\nWorld Xiangqi Championships 2007 ",
      "fen": "2b1ka3/n3a1cR1/4b4/r1PN4p/5Np2/P1R6/4P4/4CA3/4K4/2B2Ac1r b - - 0 1",
      "id": "puzzle_1488",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NG JunMing - LIU Qin\nWorld Xiangqi Championships 2007 ",
      "fen": "3ak1b2/4a4/4bc3/p1p5p/5np2/2P6/P2R5/1C6B/4K4/2BA1A3 w - - 0 1",
      "id": "puzzle_1489",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG Xiao Lin - JIRAPARKDEEPAN Vithaya\nWorld Xiangqi Championships 2007 ",
      "fen": "4kab2/4a4/2n1b4/p3p1R2/6p2/5N2P/P3P4/3C5/4r4/r1BA1KB2 b - - 0 1",
      "id": "puzzle_1490",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HAPCHINA Irimia - STERNMAN Olavi\nWorld Xiangqi Championships 2007 ",
      "fen": "2baka3/9/9/5c3/C8/2B6/P2n4P/3C5/4p4/1cBA1K3 b - - 0 1",
      "id": "puzzle_1491",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LOOK Kean Chor - YE RongGuang\nWorld Xiangqi Championships 2007 ",
      "fen": "3k5/9/3a1a3/1N7/9/p8/P8/3N5/3C5/r1BAKnB2 w - - 0 1",
      "id": "puzzle_1492",
      "title": "Mate in 2 moves"
    },
    {
      "description": "IWAN Setiawan - ARTO Vaara\nWorld Xiangqi Championships 2007 ",
      "fen": "2bakab1r/2C1n4/4c4/p3C1p1p/2p6/9/3R2P1P/7R1/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1493",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GOOI Wen Nee - LI Jennifer\nWorld Xiangqi Championships 2007 ",
      "fen": "3a1kr2/4n2R1/4Rar1N/p1p1C4/8p/2P2p3/P3P3P/9/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1494",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TRUONG Chanh Huynh - HUANG Yao Ce\nNorth America  Cup Xiangqi Championship  2008 ",
      "fen": "C2k5/1R2P4/b7b/2p5p/9/P4p3/3r4P/4B4/3cc4/4KAB2 w - - 0 1",
      "id": "puzzle_1495",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANG Dan - DIAN Fitry yani\nAsian xiangqi Championship 2008 ",
      "fen": "3k5/2N1a4/5a3/6C2/3C5/4P1B2/1n6P/3ABA3/4K4/3c4c w - - 0 1",
      "id": "puzzle_1496",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAI LiXiong - WEI DeSheng\nAsian xiangqi Championship 2008 ",
      "fen": "4k1br1/3Ra4/4R4/p5p1p/2b6/4C1P2/P3P1c1P/6r2/4A4/2c1KAB2 w - - 0 1",
      "id": "puzzle_1497",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU YongYao - WEI DeSheng\nAsian xiangqi Championship 2008 ",
      "fen": "2raka3/4n4/3Rb4/pN6p/2b1C4/4P1p2/P8/9/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1498",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6768\u4e0a\u6c11 - ZHU ZhongQian\nAsian xiangqi Championship 2008 ",
      "fen": "6b2/2NRP3n/5k3/p6rp/1cp6/9/n1P5P/N2c5/4C4/2BAKAB2 w - - 0 1",
      "id": "puzzle_1499",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NEI TieWen - LI JiaHua\nChina National Xiangqi League 2007 ",
      "fen": "1P2kab2/c3a4/C8/3c4p/2b1pNp2/2B6/P5P1P/N3B4/2nKA4/5A3 b - - 0 1",
      "id": "puzzle_1500",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIE YeJian - LI JiaHua\nChina National Xiangqi League 2007 ",
      "fen": "2ba2c2/4a4/3kN1n1C/2N4P1/p8/9/8P/4B1n2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1501",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Li Hong Jia - XIE YeJian\nChina National Xiangqi League 2007 ",
      "fen": "2bakab2/3Rn4/1cn6/pN1cp3p/5r3/9/P3P3P/C2CB4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1502",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN FuJie - TAO HanMing\nChina National Xiangqi League 2006 ",
      "fen": "3k5/6r2/9/9/9/9/3pR4/5A3/4A3n/2BKC4 w - - 0 1",
      "id": "puzzle_1503",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANG ZhuoGuang - XIE Kui\nChina National Xiangqi League 2006 ",
      "fen": "3k5/4a4/5a3/1CN6/2b3b2/9/7p1/B2A1pn2/4K4/5A2c b - - 0 1",
      "id": "puzzle_1504",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SONG GuoQiang - KE YongQing\nChina National Xiangqi League 2006 ",
      "fen": "c3kc3/R3a4/9/9/4N4/6B2/9/3p5/3p5/2BAK1n2 w - - 0 1",
      "id": "puzzle_1505",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuoRong - SHANG Wei\nChina National Xiangqi League 2006 ",
      "fen": "3ak4/3PaP1N1/9/4c4/2b6/9/9/9/3K5/2BA1AB2 w - - 0 1",
      "id": "puzzle_1506",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG Zhi - JIN So\nChina National Xiangqi League 2006 ",
      "fen": "3ak4/1R2a4/P3b4/1R5P1/2b6/9/9/2r1C4/9/3AKAr2 w - - 0 1",
      "id": "puzzle_1507",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHANG Wei - XU WenXue\nChina National Xiangqi League 2006 ",
      "fen": "3a5/1c1k5/3N5/8p/R6P1/3pp4/8P/3C2c2/4r4/3n1KB2 w - - 0 1",
      "id": "puzzle_1508",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG ShenHong - LI Qun\nChina National Xiangqi League 2006 ",
      "fen": "4kab2/3Pa2N1/2N1b4/2n2P3/2c6/2B3B2/9/3A5/4A4/5K3 w - - 0 1",
      "id": "puzzle_1509",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHUANG YuTing - WANG YueFei\nChina National Xiangqi League 2005 ",
      "fen": "4k1b2/4a4/4ba3/1N2C4/9/4c1B2/1cp6/5p3/4A4/3K5 w - - 0 1",
      "id": "puzzle_1510",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG Bin - ZHANG XiaoPing\nChina National Xiangqi League 2005 ",
      "fen": "3a1ab2/4k4/9/2P1C2P1/7P1/6B2/4C2n1/5p3/9/c1Bp1K3 b - - 0 1",
      "id": "puzzle_1511",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN HongMin - CHEN HanFeng\nChina National Xiangqi League 2004 ",
      "fen": "2b2a1C1/3ka4/3r1n3/1P3R1P1/2b6/9/9/4KA3/9/3A5 b - - 0 1",
      "id": "puzzle_1512",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG Zhi - ZHANG ShenHong\nChina National Xiangqi League 2004 ",
      "fen": "2bakR3/4a4/4b4/R7p/2p6/9/2P1P3P/N4K3/2C1r4/2B1r4 b - - 0 1",
      "id": "puzzle_1513",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIE Jing - LI WangXiang\nChinese National Champion 2007 ",
      "fen": "1R3ab2/3k5/3nban2/p2r5/c1N5P/2BC1N3/4P4/9/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1514",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG Chuan - CAI Yi\nChinese National Champion 2007 ",
      "fen": "2b3R2/3r5/4ka3/p5p1p/7R1/2Nr2P2/P7P/4B3B/4A4/1c2KA3 w - - 0 1",
      "id": "puzzle_1515",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANG Dan - ZHAO GuanFang\nChinese National Champion 2006 ",
      "fen": "2b1ka3/4a4/1r2b1c2/p1p5p/3RPNn2/P1P6/6c1P/2CCB4/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_1516",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FENG MingGuang - XIE Jing\nChinese National Champion 2006 ",
      "fen": "3k5/3R1c3/7r1/5N3/9/9/9/3ABA3/1pn2K3/2B3p2 b - - 0 1",
      "id": "puzzle_1517",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Zhang De Jian - CHIU Yu Kuen\nChinese National Champion 2006 ",
      "fen": "2bk1a3/2N1a3n/4b4/p1R5p/3r5/9/P4n2P/9/5K3/3A5 b - - 0 1",
      "id": "puzzle_1518",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHU Xiaohu - FU GuangMing\nChinese National Champion 2006 ",
      "fen": "3a1kb2/1rNRa4/4b1n2/6p1p/9/6P2/2P1P3P/p1n2C3/2C6/2BAKAr2 w - - 0 1",
      "id": "puzzle_1519",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN Zhong - HONG Zhi\nChinese National Champion 2006 ",
      "fen": "2bk1a3/2n3N2/3Pb2c1/N6Cp/9/9/3n4P/9/4A4/1cBAK4 w - - 0 1",
      "id": "puzzle_1520",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GONG XiaoMin - LI JiaHua\nChinese National Champion 2005 ",
      "fen": "4kab2/4a4/4b4/p3R1n2/2CC2p2/1rN1P4/P2c4P/4B4/2cNA4/4KAB2 b - - 0 1",
      "id": "puzzle_1521",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KE YongQing - PAN ZhenBo\nChinese National Champion 2005 ",
      "fen": "3k1Pb2/9/4b4/4C4/P6N1/9/3p5/1c3K3/2n3p2/2BA1AB2 b - - 0 1",
      "id": "puzzle_1522",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DianZhong - HU RongHua\nChinese National Champion 2005 ",
      "fen": "4R1b2/3ka4/1cN1b4/2P1p4/8p/5N3/4P3P/1r5c1/3r5/3AKAB2 w - - 0 1",
      "id": "puzzle_1523",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHI SiXuan - FENG XiaoXi\nChinese National Champion 2005 ",
      "fen": "2bnka3/1r2a4/4N4/p1p3R1p/7n1/2P6/P2Rcr3/2N1C4/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1524",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG TingTing - YOU YingQin\nChinese National Champion 2005 ",
      "fen": "3akab2/4c4/4b1n2/C1r6/P2R3P1/4P4/2N6/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1525",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Cheng Junchao - ZHENG YiHong\nChinese National Champion 2004 ",
      "fen": "4kab2/3Ra4/3cbcn2/3rpRp1p/pnpr5/4P1P2/P1P5P/N1N1C4/2C6/2BAKAB2 b - - 0 1",
      "id": "puzzle_1526",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG YongQiang - HUO XianYong\nChina Team Championship 2007 ",
      "fen": "2bk1a1cC/4R4/nC7/p1N5n/2b5p/P8/9/4B4/4A4/4KrB2 w - - 0 1",
      "id": "puzzle_1527",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN Jun - CHEN XinAn\nChina Team Championship 2007 ",
      "fen": "2bak3C/8R/2nab4/p5p2/7C1/3np4/P5P1P/9/4r4/3AK4 w - - 0 1",
      "id": "puzzle_1528",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIE ZhouMiao - YU Bing\nChina Team Championship 2007 ",
      "fen": "2ca1k3/8C/3ab4/p2N2N1p/9/1c1n5/P8/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1529",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GE ChaoRan - SUN Qizhong\nChina Team Championship 2007 ",
      "fen": "5k3/4P4/9/5P3/4N1n2/9/4p4/3AB4/4A4/2B2K3 w - - 0 1",
      "id": "puzzle_1530",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI HuiYuan - WANG LinNa\nChina Team Championship 2007 ",
      "fen": "4kab2/4a4/4b4/p3p3p/2p6/4P4/2P3R1P/2CRB4/2r1r4/2BK5 b - - 0 1",
      "id": "puzzle_1531",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIE Kui - HAO JiChao\nChina National Xiangqi League 2008 ",
      "fen": "4kac2/4a3C/9/1N6p/4r4/1R2p4/4c4/4nC3/4AK3/9 w - - 0 1",
      "id": "puzzle_1532",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO XinXin - XU TianHong\n5 Ram Cup Xiangqi Championship 2008 ",
      "fen": "3c5/9/3k1a3/p7p/1R3c3/2BrN4/8P/4B4/4AK3/3A5 w - - 0 1",
      "id": "puzzle_1533",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU Ming - SHI FengNan\nChina Team Championship 2007 ",
      "fen": "2bk1N3/1R2R4/1n1r3c1/p3C3p/2p1p1p2/3r2P2/P1P1P3P/2N6/4A1c2/2BAK1B2 w - - 0 1",
      "id": "puzzle_1534",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XingLin - CHANG Wanhua\nChina Team Championship 2007 ",
      "fen": "4R4/3P1k3/9/9/5rb2/6B2/9/3A1A3/9/4K1B2 w - - 0 1",
      "id": "puzzle_1535",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG XinGuang - LIANG FuCong\nChina Team Championship 2006 ",
      "fen": "4ka3/4a4/4b4/8p/2R6/4cC3/6P1P/2nAB4/2r6/3K1AB2 b - - 0 1",
      "id": "puzzle_1536",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHOU XiaoPing - YU SiHai\nChina Team Championship 2006 ",
      "fen": "3a5/2C1a4/3k5/2N5p/p1p1R3c/2P6/P1n5P/4B4/4A4/3AKrB2 w - - 0 1",
      "id": "puzzle_1537",
      "title": "Mate in 2 moves"
    },
    {
      "description": "QUO HaiJun - LI ZhongYu\nChina Team Championship 2005 ",
      "fen": "2b2k1C1/9/1cNa1aC1b/2p1R3p/4p4/2P3P2/2r1P3P/2p1B4/4A4/r2AK4 w - - 0 1",
      "id": "puzzle_1538",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HAN DaYong - WU QingBin\nChina Team Championship 2005 ",
      "fen": "2P1k4/3Pa4/5a2b/1C7/3c5/4n4/2p6/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1539",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEI Kam Fun - LIU Ming\nChina Team Championship 2005 ",
      "fen": "9/3k5/3ab4/3Rp1N2/6P2/9/P8/3KB3B/7r1/5n2c w - - 0 1",
      "id": "puzzle_1540",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG ZhuFeng - Du GuangWei\nChina Team Championship 2005 ",
      "fen": "2baka3/7R1/4b3C/p3p4/1n1r5/2P3p2/P3P3P/4C1c2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1541",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI ZhiWei - BO ChunLin\nChina Team Championship 2005 ",
      "fen": "5k3/4P4/8b/5N3/9/5n3/5C3/4B4/4p4/2Bc1K3 w - - 0 1",
      "id": "puzzle_1542",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO ShunXin - LU KaiLin\nChina Team Championship 2005 ",
      "fen": "c3kab2/2R1aPN2/4b4/4r1p2/2p5p/4C1P2/4n3P/4B4/4A4/2B1K4 w - - 0 1",
      "id": "puzzle_1543",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HAN DaYong - YANG Ming\nChina Team Championship 2005 ",
      "fen": "1Cba5/3Pak3/b5N2/5P3/4p4/8P/2c6/4B1n2/9/2B1KA3 w - - 0 1",
      "id": "puzzle_1544",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LU KaiLin - NI Min\nChina Team Championship 2005 ",
      "fen": "3ak1b2/4a4/b3c4/4p3p/5n3/C1P6/P3c3P/N3B4/4A4/1RBAKC1r1 b - - 0 1",
      "id": "puzzle_1545",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Qiang - HONG Zhi\nJufeng Cup Xiangqi MasterNational Championships 2000 ",
      "fen": "1C7/3kaP3/5a3/5c3/2b2Nb2/p1B3C2/7n1/3n4B/4K4/5A3 b - - 0 1",
      "id": "puzzle_1546",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WEN Jing - WU Xia\nXianglong Cup women's 12-strong tournament 2001 ",
      "fen": "1C2kab2/4a4/9/p7p/2R6/P8/8P/4p4/3KA1r2/2c6 b - - 0 1",
      "id": "puzzle_1547",
      "title": "Mate in 2 moves"
    },
    {
      "description": "QIN HuaZhi - HUANG WeiHua\nEarth Cup xiangqi tournament 2008 ",
      "fen": "1R7/3ka1NC1/3ab3b/p7p/4P4/P4nB2/5r2P/5A3/2p1AK3/9 w - - 0 1",
      "id": "puzzle_1548",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG JinXian - YAMAZAKI Hideo\nAsian xiangqi Championship 2008 ",
      "fen": "6b2/3ka4/4baN2/9/7RC/4n1B2/9/B3K4/1r7/3p1A3 b - - 0 1",
      "id": "puzzle_1549",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LU RuiZhan - Lv Qin\nAsian xiangqi Championship 2008 ",
      "fen": "3rka3/4a4/9/p1R5p/2b3p2/4P4/P5R1P/N2AKn3/1r7/2B2A3 b - - 0 1",
      "id": "puzzle_1550",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG Zhi - ZHAO XinXin\nPan An Wei Ye Cup National Xiangqi Masters Champion 2009 ",
      "fen": "3k1ab2/4ac3/4N4/p8/6p2/2P2n2R/c3P1P2/4B4/6N1C/2BAKA1r1 b - - 0 1",
      "id": "puzzle_1551",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MIAO LiMing - LIAO ErPing\nChinese National Champion 1997 ",
      "fen": "C3k4/9/P1N6/8p/2p1r1b2/9/9/9/1n1K5/5A3 b - - 0 1",
      "id": "puzzle_1552",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI ShuYing - WANG LiHong\nChina Team Championship 2003 ",
      "fen": "4k4/4a4/3ab3b/3N5/8P/Pp1n2B2/9/3A1C3/5Ccc1/4KA3 b - - 0 1",
      "id": "puzzle_1553",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KE YongQing - SHANG Wei\nChina Team Championship 1984 ",
      "fen": "2ba1k3/4a4/4b4/pR3N2p/6p2/9/P3P3P/4B4/3pA1r2/4K2c1 b - - 0 1",
      "id": "puzzle_1554",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU ShuYing - DENG SongHong\nChina Team Championship 1984 ",
      "fen": "1r2kab2/4a4/9/p5p2/9/6P1C/P1cn4P/N3R4/1C2ANn2/2BAK4 b - - 0 1",
      "id": "puzzle_1555",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANG Ying - OUYANG ChanJuan\nChina National Junior xiangqi Tournament 1995 ",
      "fen": "1r3Rb2/1Nck5/3ab4/p2R4p/3n3r1/2B6/P7P/4C4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1556",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SONG GuoQiang - LIU ZhongLai\nNational Workers' Xiangqitournament 1996 ",
      "fen": "1r2kab2/4a4/c3bc1rn/5R2p/4N4/4C1P1P/p1n1P4/3CB1N2/4A4/2BAKR3 w - - 0 1",
      "id": "puzzle_1557",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN ZhiWei - WANG JianPing\nChina Team Championship 1998 ",
      "fen": "2Pa1kb2/9/3aPN3/8p/p1r6/9/P6cP/1C2B1p2/4A1c2/2BAKR3 w - - 0 1",
      "id": "puzzle_1558",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DING ChuanHua - ZHENG YiHong\nChina Team Championship 1998 ",
      "fen": "1nba1a1n1/3k5/9/p1p1p3p/4c4/2PN1r3/P5c1P/4K1N2/9/R1BA1AB1R b - - 0 1",
      "id": "puzzle_1559",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU RongHua - CAI FuRu\nFriendly game 1960 ",
      "fen": "9/4k4/5a3/9/p7P/3n5/P4R3/4p4/3KA4/5C3 b - - 0 1",
      "id": "puzzle_1560",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MEI Nuo - WAN Chun\n ",
      "fen": "3rka1cC/4a4/b3b4/p3C4/5n2p/5R3/P2p4P/N8/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1561",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN ChaoHui - LIU Huan\n ",
      "fen": "2b2a1r1/3ka4/7c1/1N5Rp/p1bC5/6P2/P7P/9/4K4/2BA1Ac2 w - - 0 1",
      "id": "puzzle_1562",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG TingTing - FENG XiaoXi\n ",
      "fen": "5ab2/1n1k5/2R1ba3/p2C1N2p/4p4/9/Prc5P/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1563",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XiaoKun - ZHANG Qiang\nSimon-controlled Cup xiangqi Masters National Championships 1999 ",
      "fen": "2bak4/4a4/4b4/C3Nc2P/2p6/4n1B2/P1N6/3n5/4A4/2BA1K3 b - - 0 1",
      "id": "puzzle_1564",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN HaiYing - TANG Dan\nLaiqun Cup xiangqi tournament  2007 ",
      "fen": "3a1ab2/9/3k5/2R3P2/9/9/5r3/3An4/4p4/3K2B1C b - - 0 1",
      "id": "puzzle_1565",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG GuoFeng - ZHAO GuanFang\nLaiqun Cup xiangqi tournament  2007 ",
      "fen": "C1ca1k3/3C5/4b4/1R1P4p/6p2/9/5n2P/9/9/2rAKA3 b - - 0 1",
      "id": "puzzle_1566",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Qiang - ZHU ShaoJun\nYANG QuanLin Cup Champion 2008 ",
      "fen": "2b1k1nr1/1C1Ra4/b1R3n2/p1p1p1p1p/7r1/6P2/P3P2cP/4C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1567",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZUO WenJing - LI Xian\nBeilun Cup National xiangqi Master Championship  2008 ",
      "fen": "2bakab2/5R3/8n/p4N2p/9/4C4/P7P/2r1B4/4A4/2Br1K3 w - - 0 1",
      "id": "puzzle_1568",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HAO JiChao - GUI Yi\nYingYang Chu He Han Jie Cup xiangqi Championships 2008 ",
      "fen": "R2a1k3/2N1ar3/1r4n1b/p3R3p/9/9/P3P3P/1C2B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1569",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZONG Kai - \u6c6a\u6d77\u9b41\nYingYang Chu He Han Jie Cup xiangqi Championships 2008 ",
      "fen": "1R3ab2/3k5/5aN2/4C3p/2b1C1p2/9/P1n1P3P/5A3/3r5/2c1K4 w - - 0 1",
      "id": "puzzle_1570",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG XueChao - DONG ChunHua\nYingYang Chu He Han Jie Cup xiangqi Championships 2008 ",
      "fen": "4ka3/4a1r2/4R4/1N7/P8/9/4Pn3/4BC3/4A4/3K1A2c w - - 0 1",
      "id": "puzzle_1571",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u848b\u5bb6\u5bbe - XIE DanFeng\nChinese National Champion 2008 ",
      "fen": "4ka3/2R1a4/4N1n2/p3n1p1p/2p4r1/9/PRP3PcP/4C1N2/4K4/2Br1AB2 w - - 0 1",
      "id": "puzzle_1572",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Xian - WANG Qing\nChinese National Champion 2008 ",
      "fen": "4ka1nC/4a4/1c2b4/p7p/1np1p4/3r1N3/P1c1P4/2N1B1C2/R8/3AKAB2 w - - 0 1",
      "id": "puzzle_1573",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG XiaoXia - XIE SiMing\nChina Team Championship 1985 ",
      "fen": "2bakab2/9/4c4/p1p3pn1/2c6/6P1C/P1P5P/N3N4/3rA4/1RBCKA3 b - - 0 1",
      "id": "puzzle_1574",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HAN Lun - Ge Tiehan\nChina Team Championship 1985 ",
      "fen": "3ak1b2/4a4/b1n1c4/pRC3p1C/3P5/6P2/P3Nr2c/8B/4A4/2BAK3R b - - 0 1",
      "id": "puzzle_1575",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN HaiYing - YANG HuiWen\nAsian Xiangqi Individual Championships 2005 ",
      "fen": "3R1ab2/3R5/1r2k1n2/p3p1p1p/1r7/1p4P2/P1P1N3P/9/2c1C4/2BAKAB2 w - - 0 1",
      "id": "puzzle_1576",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN Chang Ching - HUANG Qiming\nAsian xiangqi Championship 2006 ",
      "fen": "2ba1abr1/5R3/4kc3/pN2C1p1p/9/9/P1P1P3P/2N6/4A4/2BK1rB2 w - - 0 1",
      "id": "puzzle_1577",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN GuanHao - LI LaiQun\nPao Yueng Cup 1991 ",
      "fen": "2bakab2/8r/4c1C2/p3N3p/9/6P2/P3P3P/4C1N2/1rn1K4/3A1ABR1 b - - 0 1",
      "id": "puzzle_1578",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XinAn - \u83ab\u4f1f\u660e\nNA 1984 ",
      "fen": "2bnkabr1/3PaR3/1r2c1n2/p1p5p/3N5/2P6/P5p1P/4C4/4A4/RNBA1Kc2 w - - 0 1",
      "id": "puzzle_1579",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FRISCHMUTH Uwe - \u5415\u6ca7\u6d77\nPao Yueng Cup 1991 ",
      "fen": "1rbaka3/9/n1c1b1n2/p3p1p1p/2P2R3/5C3/P3P1P1P/C1c1B4/3rN4/R2AKAB2 b - - 0 1",
      "id": "puzzle_1580",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YunTao - XIAO GeLian\nBall bearing Cup xiangqi tournament 2006 ",
      "fen": "3nkabr1/4aR3/1r4N2/p1C5p/2b1p1p2/c3P4/5R2n/6NcB/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1581",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - HU RongHua\n2001-2002 Send Viagra Super Chess Cup qualifying interactive television blitz tournament 2001 ",
      "fen": "5k3/4a4/3aC3b/p5R1p/1n7/9/P3P3P/7R1/4K4/2rC1rBc1 b - - 0 1",
      "id": "puzzle_1582",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ec4\u51a0\u8363 - Lv Qin\nGuangdong Junior xiangqi Tournament 1977 ",
      "fen": "2ba1k3/4a3N/4b4/p3p3p/9/7R1/P1P3P1P/2NKB4/cC7/4rr3 b - - 0 1",
      "id": "puzzle_1583",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAO ZhengSheng - Lv Qin\nChina Team Championship 1981 ",
      "fen": "4kab2/4a4/4b4/p2P4p/9/9/P2R5/4B3B/2r1p4/2NK5 b - - 0 1",
      "id": "puzzle_1584",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG JiaLiang - Lv Qin\nJin Ling Cup 1987 ",
      "fen": "2ba3R1/4a1P2/n3bk3/5C3/2n4rp/4p4/8P/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1585",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI YuGuang - Lv Qin\nHibiscus Resort Cup Guangdong Province xq Tournament 1993 ",
      "fen": "2baka3/5Nc2/4b4/4C2nC/2p6/7N1/P7P/2nAp4/3KA4/c8 b - - 0 1",
      "id": "puzzle_1586",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU RongHua - Lv Qin\nYinli Cup Champion 1996 ",
      "fen": "2R1ka3/4a4/4b4/6P2/3PP4/4c4/5r3/4B4/4Np3/3AKAB2 b - - 0 1",
      "id": "puzzle_1587",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG Zhi - Lv Qin\nZhongli Cup TV fast game Champion 1997 ",
      "fen": "9/5k3/9/9/9/9/5r3/4p4/3RA4/4K4 b - - 0 1",
      "id": "puzzle_1588",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - XIE Kui\nChinese National Champion 2008 ",
      "fen": "8R/6CC1/4k4/pr2cn2p/2b6/4n1p2/P7P/3A2N2/4A4/2B2K3 w - - 0 1",
      "id": "puzzle_1589",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIE Jing - Lv Qin\nNA 2009 ",
      "fen": "3k2b2/2P1a1N2/2P1bac2/3C5/9/2n6/5p3/9/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_1590",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU XiaoLu - HE ShuNan\nNA NA ",
      "fen": "3R1kb2/4a4/4b4/4c4/2p2r2P/9/9/N3p4/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_1591",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU ChiuKing - DER Lawrence\nPao Yueng Cup 1991 ",
      "fen": "1nbk1ab2/1NN1a4/9/4P3p/p2P5/9/9/4n4/9/3AKA3 w - - 0 1",
      "id": "puzzle_1592",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN So - DONG XuBin\nBuilding Materials City Cup National Championships 2005 ",
      "fen": "6b2/4ak1N1/3aP4/5P3/3N5/P8/5p3/r3B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1593",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEUNG WingOn - MA ZhongWei\nPao Yueng Cup 1991 ",
      "fen": "5ab1C/5k3/4b4/5r2p/p2R2p2/4c4/2p3P2/1c2CA1N1/9/2BA1K3 b - - 0 1",
      "id": "puzzle_1594",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HOU YuShan - ZHANG DeKui\nNA NA ",
      "fen": "4kab2/9/5a3/9/9/2B6/4R4/B4K3/4r1p2/9 b - - 0 1",
      "id": "puzzle_1595",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG DeKui - HU ZhenZhou\nNA NA ",
      "fen": "4kab2/4a4/4b4/6P2/5C3/2B1c4/3n5/4BA3/2p3C2/3K1A3 b - - 0 1",
      "id": "puzzle_1596",
      "title": "Mate in 2 moves"
    },
    {
      "description": "PANG AiTing - ZHANG DeKui\nNA NA ",
      "fen": "1R3a3/9/3kb4/2NcC4/4P3p/4r1p2/P7P/5A2B/9/2BAK2c1 w - - 0 1",
      "id": "puzzle_1597",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHAO CiMing - MENG WenXuan\nNA NA ",
      "fen": "1C2kab2/5P3/3Rb4/2p5p/p2r5/9/P1P6/B8/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_1598",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Jiang - ZHU ZongSi\nLiulin Cup National xiangqi Master Championship 2001 ",
      "fen": "R1b1ka3/4a4/4N4/p3p3p/4c1p2/2R6/P3P1n1P/3C2r2/3rA4/2B1KAB2 b - - 0 1",
      "id": "puzzle_1599",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DONG WenYuan - ZHONG Zhen\nNA NA ",
      "fen": "r2k1abr1/2N1a4/7n1/p7p/2p1c4/9/n1PCP3P/N5C2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1600",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YouHua - HU RongHua\nChina Team Championship 1987 ",
      "fen": "3k2b2/4a4/3ab3c/C1R6/1r2Cn2p/2P1P4/8P/2N1B4/4A4/c3KAB2 w - - 0 1",
      "id": "puzzle_1601",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YouHua - ZHAO GuoRong\nChina Team Championship 1988 ",
      "fen": "2ba1kb2/2N1a1RN1/5n3/8p/9/3r1pP2/4P4/9/1c2A4/3A1K3 w - - 0 1",
      "id": "puzzle_1602",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHAN XiaLi - HU Ming\nYinli Cup Champion 1998 ",
      "fen": "4kab2/4a4/4b4/1N2C3p/3P5/C5c2/P1n5P/3K5/2c1A4/5A3 w - - 0 1",
      "id": "puzzle_1603",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAO Lin - DING XiaoFeng\nNational Games 1975 ",
      "fen": "3a1ab2/3k5/1R7/p1p6/3Np1b2/2P3B1p/P2c4P/3CB4/C3A4/4KA1rr w - - 0 1",
      "id": "puzzle_1604",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHANG Wei - MIAO LiMing\nWacker Real Estate Cup xiangqi Master Champion 2008 ",
      "fen": "1C3aC2/3ka4/9/p8/2bP5/2B5P/2n1N4/5p3/c3K4/1c1A1A3 b - - 0 1",
      "id": "puzzle_1605",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU YinChuan - XU TianHong\nYinli Cup Champion 1999 ",
      "fen": "C2k1a3/5PC2/3P5/9/8p/9/5c3/2pAB4/3cA4/5K3 w - - 0 1",
      "id": "puzzle_1606",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU TianHong - TAO HanMing\nYinli Cup Champion 1998 ",
      "fen": "2R2Cb2/4k4/3r1a2c/8p/9/9/P7P/4r4/4AR3/3A1K3 b - - 0 1",
      "id": "puzzle_1607",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YOU YingQin - MA TianYue\nChinese National sports 2000 ",
      "fen": "3aknR1C/9/4Na3/p7p/3PP4/9/2p5P/1r2B4/4A4/c1BAK4 w - - 0 1",
      "id": "puzzle_1608",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG LinNa - JIN HaiYing\nYinli Cup Champion 1999 ",
      "fen": "2b2a3/2N2k3/2cab1N2/p2C4p/5C3/5np2/4P3P/4B4/4A4/c2AK4 w - - 0 1",
      "id": "puzzle_1609",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WAN ChunLin - QIU Dong\nZhejiang Sanhuan Cup xiangqi open tournament 2005 ",
      "fen": "2b1ka3/4a4/2n3r2/6C1p/2N1R1c2/p8/2P5P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1610",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN HaiYing - ZHENG WEI\nAsian Xiangqi Individual Championships 2005 ",
      "fen": "2b1ka1R1/4aR3/2n1P4/p7p/2p1p4/6P2/c3r4/4C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1611",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG Chuan - TRAN Van Ninh\nAsian Xiangqi Individual Championships 2005 ",
      "fen": "2rk1a3/4c4/b3R4/p3p3p/5R3/9/P3r3P/2C1B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1612",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG XueChao - LI Lin\nChinese National Champion 2004 ",
      "fen": "4kab2/4a4/4P4/p5NNp/1n7/P1R5P/6r2/4p4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1613",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6768\u94a6\u96c4 - MU SheLun\nShantou City West Feng Cup xiangqi tournament 2006 ",
      "fen": "3nkab1C/4a4/3Rb4/6N2/p3P4/2Pc4P/4c4/9/4r4/3K5 b - - 0 1",
      "id": "puzzle_1614",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI DeZhi - HUANG HaiLin\nNA 2005 ",
      "fen": "1CRa1a3/4k3c/6nr1/4p1R1p/p2N2p2/6P2/n3P3P/4B1r2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1615",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUBERTI Agostino - NG YipSing\nWorld Xiangqi Championships 2005 ",
      "fen": "2baka3/9/9/9/p5b1P/2B3B2/3p5/6r2/3rA4/3RKA3 b - - 0 1",
      "id": "puzzle_1616",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAO YanLei - GUO LiPing\nWacker Real Estate Cup xiangqi Master Champion 2005 ",
      "fen": "3k1ab2/4a4/9/9/P3c3p/2B6/5N1nP/3CC4/3pA4/4KAB2 b - - 0 1",
      "id": "puzzle_1617",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ec4\u534e - LIU ZongZe\nShantou City West Feng Cup xiangqi tournament 2006 ",
      "fen": "2bak4/4a1r2/2r1b4/p3C2Rp/5np2/P3p4/2P3P1P/4C4/1c2A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1618",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MOULLIER Igor - REINDERS Rudolf\nWorld Xiangqi Championships 2005 ",
      "fen": "4k4/9/4bC1r1/p7p/4R1b2/2p2N3/P7P/4C3B/1n1KA4/c8 w - - 0 1",
      "id": "puzzle_1619",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GANG QiuYing - WANG LinNa\nChinese National Champion 2004 ",
      "fen": "5k3/3ca4/9/4p2C1/1Nb3b2/2B6/1p3n1p1/2n2A3/3KA4/2N3B2 b - - 0 1",
      "id": "puzzle_1620",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU RongHua - DAI RongGuang\nNA 1965 ",
      "fen": "2bak4/4anC2/4c4/5r2p/pC2N1b2/2B2N3/Pc2P3P/7R1/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1621",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUI SongXiang - SHEN ZhiSong\nNA 1963 ",
      "fen": "3akab2/4n4/2rcb4/8p/p3N4/2C1C4/P3P3P/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1622",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG Chuan - \u5f20\u5927\u5e74\nJingshan Cup xiangqi Grand Prix 2006 ",
      "fen": "2bakab2/4n4/1c7/C3p3p/2p6/2P6/PCR1c2nP/4B4/4A4/2BAK1R2 b - - 0 1",
      "id": "puzzle_1623",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUO XianYong - \u9646\u5b8f\u4f1f\nGreat Wall Electronic Cup National Championships 2006 ",
      "fen": "2bk1ab2/4a4/3Nc4/4C4/p2c1n2p/2PC5/P7P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1624",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - GOK Ulong\nNA 1982 ",
      "fen": "2bakn1R1/4a4/4N1n2/2C6/4C1p2/2B5p/4P1P1P/9/4A4/2BrK4 w - - 0 1",
      "id": "puzzle_1625",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI FuRu - WANG JiaLiang\nNA 1985 ",
      "fen": "3a2R2/4ak3/2N6/p8/9/9/P4rc1P/3CB4/2n1A4/3K1AB2 w - - 0 1",
      "id": "puzzle_1626",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG HaiLin - LIU KeFei\nJingshan Cup xiangqi Grand Prix 2006 ",
      "fen": "C1bk1ab2/2N1a4/9/4p3p/3r5/4P3P/4c2n1/4B4/4A4/R3KAB2 b - - 0 1",
      "id": "puzzle_1627",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU RunZhi - WEN ManHong\nNational Farmers Games xiangqi tournaments 2006 ",
      "fen": "2bakab2/9/4R1C2/p7p/2p6/4c1P2/P1P5P/R2Cnr3/4A4/2BAKN1r1 b - - 0 1",
      "id": "puzzle_1628",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI LaiQun - ZHU YongKang\nNA NA ",
      "fen": "2b1ka3/3RaC3/4bN3/p8/9/9/P1p1n3P/4C4/9/1cBAKAr2 w - - 0 1",
      "id": "puzzle_1629",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FAN SiYuan - \u5f20\u6765\u5e86\nGreat Wall Electronic Cup National Championships 2006 ",
      "fen": "1CbR1ar2/2r1k4/2n1b1n2/p5R1p/2p3pc1/2P6/P3N1P1P/2N1c4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1630",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DU QiShun - CHEN MaoShun\nNA NA ",
      "fen": "2bk1ab1C/4a4/2n2c3/p1p1pn3/5r3/2P3PRP/P3c4/4C3B/4A4/2BAK3R b - - 0 1",
      "id": "puzzle_1631",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u661f\u8c15 - \u738b\u745e\u5a23\nNational Collaboration District III tournament 2006 ",
      "fen": "4kab2/3ca4/9/5NC2/2b6/P1BnP4/8P/6N2/5c3/3AKAB2 w - - 0 1",
      "id": "puzzle_1632",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u661f\u8c15 - \u5218\u660e\u73c2\nNational Collaboration District III tournament 2006 ",
      "fen": "1RCa2c2/4ak3/9/5r2p/2p1Nr1R1/4p3P/P1P6/N7B/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1633",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG Chuan - BU FengBo\nBall bearing Cup xiangqi tournament 2006 ",
      "fen": "3k1a3/c3a4/4N4/8p/3N1P3/9/3n5/4B4/2nCA4/4KAB2 w - - 0 1",
      "id": "puzzle_1634",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN Chang Ching - ZHONG ShaoHong\nAsian xiangqi Championship 2006 ",
      "fen": "2b1kab2/4a4/3r5/p5R1p/9/2P2NP2/P3P3P/4B1C2/1cc1A4/1r1A1K1R1 b - - 0 1",
      "id": "puzzle_1635",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIANG HuiYuan - DUAN MingLiang\nJinshang Guo ji Cup Nation Challenge  2006 ",
      "fen": "1R3abr1/4kc3/9/p7p/2b6/4CN3/P4p2P/9/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1636",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DING XiaoHei - CHEN JinSheng\nChinese National Champion 1964 ",
      "fen": "2Ca5/C5R2/3a1kn2/4p2rp/1r5c1/9/4P4/4B2R1/9/3AKAB1c w - - 0 1",
      "id": "puzzle_1637",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DING XiaoHei - ZHU XueZeng\nChinese National Champion 1964 ",
      "fen": "4kab2/4a4/4b4/R1R5p/6P2/3C5/P3P3P/4B4/2n1K4/1r1r1AB2 b - - 0 1",
      "id": "puzzle_1638",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANG ZhuoGuang - ZHUANG YuTing\nNA 1997 ",
      "fen": "4kNbC1/3r2C2/1R7/p3pn2p/6p2/P1P1n4/6c2/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1639",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI DeZhi - \u9ec4\u6811\u8363\nDongguan mayor anzhen Xiangqi Open 2006 ",
      "fen": "2bR1ab1C/4k4/9/8r/2p3p2/4P4/2P6/2n2A3/4CK3/c2A2B2 b - - 0 1",
      "id": "puzzle_1640",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u5353\u4e00 - \u66fe\u6b63\nShenzhen Shi Wei Tian Cup Cities tournament 2006 ",
      "fen": "2baka3/5C3/9/p3N3p/2P3b2/4c4/P4r2P/B3BAn2/5K3/3A5 b - - 0 1",
      "id": "puzzle_1641",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DaHua - XIE XiaoRan\nNA 1952 ",
      "fen": "4kab2/4R4/9/p7p/2b6/6P2/P5c1P/N3r4/3CA4/2B1KA3 b - - 0 1",
      "id": "puzzle_1642",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YouHua - LI LaiQun\nNA 1987 ",
      "fen": "1n1k2b2/4a4/3abN3/p1p1C4/3N5/2P6/P6pP/4r3B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1643",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU YiCi - FU GuangMing\nChinese National Champion 1964 ",
      "fen": "5a3/2ckac2C/4R1N2/p8/3n5/5r2P/P1p4p1/B3C3B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1644",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI ZhiPing - XU TianHong\nNA 1997 ",
      "fen": "2b1ka3/4a4/4b4/p1P5p/9/3R5/4Pp3/1N1K5/8r/2BA1n3 b - - 0 1",
      "id": "puzzle_1645",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DaHua - YAN MuJiang\nNA 1984 ",
      "fen": "3r1kr2/2N1a4/9/6p1p/2P6/5C3/4N3P/8B/4AK3/2cA5 w - - 0 1",
      "id": "puzzle_1646",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEONG SioMan - \u6797\u8d3b\u8bc4\nAsian xiangqi Championship 2006 ",
      "fen": "C1rR1ab2/1c3k3/4b1c2/3N4p/6r2/9/P7P/4B4/C3A4/4KAB2 w - - 0 1",
      "id": "puzzle_1647",
      "title": "Mate in 2 moves"
    },
    {
      "description": "QIAN HongFa - CAI FuRu\nChinese National Champion 1982 ",
      "fen": "3a2R2/3nak1N1/4b4/p2P5/9/9/4rpr2/4C3C/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1648",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u80e1\u6c38\u8f89 - CHEN YunJia\nShantou Xifeng Cup Xiangqi Open 2007 ",
      "fen": "3ak4/9/5R3/4C4/P1PN4p/4P4/9/4B4/2cK1c3/5r3 w - - 0 1",
      "id": "puzzle_1649",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO QingGe - YU YouHua\nNorth-South Match 1987 ",
      "fen": "CnCk1a3/1R7/4ra3/p7p/9/2P6/P7P/2Nrc4/5R3/3AKA3 w - - 0 1",
      "id": "puzzle_1650",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YE HaiFan - CHAN Keung On\nHong Kong Individual Championship 2006 ",
      "fen": "3R5/9/4kN3/p4P3/9/1p7/P5P1P/1n2B4/4K4/2BA3r1 w - - 0 1",
      "id": "puzzle_1651",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG YouSheng - WANG GuiFu\nChinese National Champion 1964 ",
      "fen": "2bakn3/4a4/4b4/pC4p1N/C5P2/1c7/2p6/B1n2A3/9/c3KA3 b - - 0 1",
      "id": "puzzle_1652",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG Chuan - LI WangXiang\nTian Zhong Qi Yuan Xiangqi Tournamet 2009 ",
      "fen": "3aRa3/3k5/N3b4/2pP4p/9/3n5/P7P/B3B1p2/1r2A4/3AK4 w - - 0 1",
      "id": "puzzle_1653",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG TingTing - \u9f50\u6d2a\u56fd\nCangzhou, Hebei Province Chess Cup tournament 2007 ",
      "fen": "5aR1C/3ka4/b8/9/2P6/4R4/P1crP1p1P/1r7/4A4/3NKAB2 b - - 0 1",
      "id": "puzzle_1654",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5b8b\u6d77\u6d9b - YAN YuSuo\nCangzhou, Hebei Province Chess Cup tournament 2007 ",
      "fen": "4kab2/1N2a4/4b4/C8/9/3c1n2P/n8/4C4/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1655",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u674e\u535a\u6587 - ZHAO Junhui\nChu He Han Jie Cup National xiangqi level tournament 2006 ",
      "fen": "5Rb2/3ka4/3cbc3/p1p5p/3R5/2r1C1P2/P3P3P/3C2n2/4A4/2BAK1Br1 w - - 0 1",
      "id": "puzzle_1656",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YunTao - LI JingLin\nChu He Han Jie Cup National xiangqi level tournament 2006 ",
      "fen": "2bC3R1/4a1P2/n3ck3/2p1C3p/p8/2P6/P7P/N2KB4/8c/5rB2 w - - 0 1",
      "id": "puzzle_1657",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5b59\u8dc3\u5148 - HU RongHua\nChinese National Champion 1974 ",
      "fen": "2bak4/3ca4/9/6N2/P8/9/5n2P/4BC3/3KA4/5A3 b - - 0 1",
      "id": "puzzle_1658",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6797\u6606\u70ab - MA Cheng Lun\nForshang Cup Xiangqi King Tournament 2007 ",
      "fen": "2bak3C/6PR1/4ba3/p8/9/5n3/9/9/r8/5K3 b - - 0 1",
      "id": "puzzle_1659",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Xing - BU FengBo\nChina Team Championship 1981 ",
      "fen": "3k1N3/4a4/C1P6/p3c3p/4C1b2/3r5/Pn6P/7R1/4Ar3/2RAK1B2 b - - 0 1",
      "id": "puzzle_1660",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LOOK Kean Chor - Look Kong Dwo\nMalaysian Qiwang Championship 2007 ",
      "fen": "1R1cka3/3Pa4/4b4/p3n2rp/2p3p2/9/P3C1P1P/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1661",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LOOK Kean Chor - ZHENG Tianfu\nMalaysian Qiwang Championship 2005 ",
      "fen": "3a1kR2/4a4/4b4/9/p6P1/6B2/P1N6/3nB4/4r4/3K1cC2 b - - 0 1",
      "id": "puzzle_1662",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Yu - \u674e\u671d\u6797\nThe Han and Tang Dynasties Cup Xiangqi Open Tournament 2006 ",
      "fen": "3a1k1r1/5c3/1rn1b4/p5R1p/2p6/9/P1P5P/4C4/5R3/2BAKABc1 w - - 0 1",
      "id": "puzzle_1663",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LU George - HUANG MinSheng\nAsian Xiangqi Individual Championships 2007 ",
      "fen": "3a1a3/9/2c1k1n2/p1C6/4N4/2P1R1P2/Pr2c3P/4B1C2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1664",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Nguyen Thanh Bao - WANG Bin\nChinese xiangqi team visit Vietnam 2007 ",
      "fen": "3aka3/9/4r4/pR3P3/9/9/P8/9/9/3K1A3 b - - 0 1",
      "id": "puzzle_1665",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GUO ChangShun - LIU DianZhong\nNational Games 1975 ",
      "fen": "2bk1a3/9/5a3/p3C3p/2b1P4/9/P3N3P/4Bp1cB/9/3AK3c b - - 0 1",
      "id": "puzzle_1666",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZENG YiQian - YUAN TianCheng\nNA 1952 ",
      "fen": "1Cba2R2/4ak3/4R4/p1p2P3/8p/P1P6/2p1c2rP/4n3B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1667",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIU Yu Kuen - CHOW Keng Wa\nGuangzhou,Hong kong,Macau Match 2007 ",
      "fen": "4kabr1/4aR3/4b1n2/4p1C2/3R3Pp/pr3N3/c3P1C1P/4B4/4A4/c1BAK4 w - - 0 1",
      "id": "puzzle_1668",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHAN XiaLi - ZHANG GuoFeng\nNA 2000 ",
      "fen": "2bak4/4a4/4b4/4N3p/3r5/2P1P4/P8/3R5/3KAC1c1/5An2 b - - 0 1",
      "id": "puzzle_1669",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG GuoFeng - WANG LinNa\nYinli Cup Champion 2001 ",
      "fen": "5k3/3cP4/9/1N4N2/9/9/9/9/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1670",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG GuanLin - MENG LiGuo\nNA 1976 ",
      "fen": "5k3/n3P1c2/9/p8/7Np/P8/9/4BA3/2C6/3K1AB2 w - - 0 1",
      "id": "puzzle_1671",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YANG GuanLin - LIU YiCi\nChinese National Champion 1956 ",
      "fen": "5aC2/3k5/3a1P3/4c4/2b1N1n1p/9/P8/B8/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_1672",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHOSHI Kazuharo - Lv Qin\nZhenda - hanshin Cup International Tournament 2009 ",
      "fen": "1C1rkab2/4a4/4b4/8p/R3c4/4p4/R2p3nP/2C6/4N4/2BAKABr1 b - - 0 1",
      "id": "puzzle_1673",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANG Dan - XIE Jing\nJingshan Cup xiangqi Grand Prix 2006 ",
      "fen": "4kab2/9/5aN2/p7p/2b4N1/9/P2r4P/9/4AR3/1r1C1K3 b - - 0 1",
      "id": "puzzle_1674",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANG Dan - LIU Huan\nChinese National Champion 2008 ",
      "fen": "3k1a3/8C/3P5/8p/9/2B1c4/P3r4/9/4Ap3/2B1K1R2 b - - 0 1",
      "id": "puzzle_1675",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XingLin - WANG LinNa\nChinese National Champion 2008 ",
      "fen": "N1ba5/4ak1N1/4b4/4p3p/2p3c2/p8/1nP2r2P/3AB1R2/9/3AK1B2 b - - 0 1",
      "id": "puzzle_1676",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN LiChun - TANG Dan\nChinese National Champion 2008 ",
      "fen": "1C2kab2/4a4/9/p1N1P3p/2b6/2r6/P6rP/9/9/1R2KA3 b - - 0 1",
      "id": "puzzle_1677",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Qiang - HONG Zhi\nYANG QuanLin Cup Champion 2008 ",
      "fen": "3k1P3/4P4/3nC4/5C3/2n6/6B2/3c2p2/4B4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1678",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Chi Keung - WU JiangWei\nYANG QuanLin Cup Champion 2008 ",
      "fen": "1R1akab2/2Cn2R2/2c1b4/p1p1c3p/3rC4/4Pn3/P3N1P1P/4B1N2/4Ar3/4KAB2 w - - 0 1",
      "id": "puzzle_1679",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN HoiFan  - \u6587\u6c49\u5fe0\nShenzhen  ",
      "fen": "4kR3/4a4/n3b4/p3p3p/9/P3c4/3N5/4B4/4A2C1/r1rRKAB2 b - - 0 1",
      "id": "puzzle_1680",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Xing - \u5b59\u672c\u8bd7\nShenzhen  ",
      "fen": "3k1a3/9/2n2a3/p1p1R3p/3N5/c3C3P/6p2/3r4B/2c6/2BAKA3 w - - 0 1",
      "id": "puzzle_1681",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU YunTao - SUN HaoYu\nNational Farmers Games xiangqi tournaments 2008 ",
      "fen": "2b1ka1R1/3r1P3/3N5/8p/6b2/8P/9/4B4/4A4/2BAKc3 w - - 0 1",
      "id": "puzzle_1682",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAO FangQing - TANG Dan\nThe world mind sports games 2008 ",
      "fen": "4k1b2/3R1C3/4b4/6pn1/p1p2r3/8p/n1P6/3Ac2CB/c8/3K1A3 b - - 0 1",
      "id": "puzzle_1683",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG ShiChao - PHUNG Kim Dan\nThe world mind sports games 2008 ",
      "fen": "5a3/3k5/8b/9/4P1b2/9/9/3N2n2/4p4/3K5 b - - 0 1",
      "id": "puzzle_1684",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU HaoHua - ZHANG Gao Yang\nThe world mind sports games 2008 ",
      "fen": "2ba5/2N1k1r2/4b4/p4R2N/4p4/9/P3P3P/B6c1/4AK3/3A5 w - - 0 1",
      "id": "puzzle_1685",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NI Min - MENG Chen\nCai Lun Elite Bamboo Cup National Xiangqi Tournament 2009 ",
      "fen": "2b5C/4k4/4ba3/9/p4R2P/9/P8/4BC3/1rcKA4/c4A3 b - - 0 1",
      "id": "puzzle_1686",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5f90\u5929\u7ea2+\u738b\u658c - \u5f20\u5f3a+\u848b\u5ddd\nThe capital, home UEFA Cup men's double xiangqi exhibition 2007 ",
      "fen": "2bak1cR1/4a4/4b1N2/pcp1n2Np/4C4/1CP6/P2rp1n1P/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1687",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XingLin - \u6e90\u6cc9\nWacker Real Estate Cup National  1st class tournament 2009 ",
      "fen": "C4k1N1/2P1a4/9/6n2/6n2/9/9/3A1A3/9/2B1K4 w - - 0 1",
      "id": "puzzle_1688",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN JiaXin - NGO Lan Huong\nWorld Xiangqi Championships 2009 ",
      "fen": "4kab2/9/5a3/3P5/6b2/9/9/3N1A3/2p6/3K1Apc1 b - - 0 1",
      "id": "puzzle_1689",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHANG Diana - DIAN Fitry yani\nWorld Xiangqi Championships 2009 ",
      "fen": "2b1kar2/4a4/c3b1n2/5R2p/1n2N1p2/9/3R2P1P/3AC1N2/r8/3CKcB2 w - - 0 1",
      "id": "puzzle_1690",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NGO Lan Huong - WU CaiFang\nWorld Xiangqi Championships 2009 ",
      "fen": "2b1ka3/4a4/4n4/1NpC1N2p/pc7/2P2p3/P6rP/9/6R2/2BAK1B2 w - - 0 1",
      "id": "puzzle_1691",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TEO Guimin - GENDEN Oyunchimeg\nWorld Xiangqi Championships 2009 ",
      "fen": "1r1aka3/3cnR3/4b3b/p3p3p/3r1NP2/7C1/P7P/4B4/4A4/R1B1KA3 w - - 0 1",
      "id": "puzzle_1692",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YOKOYAMA Eiiela - KUANG JinGuang\nWorld Xiangqi Championships 2009 ",
      "fen": "1Nbak1b2/4a4/c8/p1r5N/2p5P/9/P3P4/9/4K4/9 b - - 0 1",
      "id": "puzzle_1693",
      "title": "Mate in 2 moves"
    },
    {
      "description": "BRADLER Stephan - CHENG Kah Siong\nWorld Xiangqi Championships 2009 ",
      "fen": "2baka3/9/4bc3/p3p3p/9/5R3/4Pn2P/1r7/2R6/4K1B2 b - - 0 1",
      "id": "puzzle_1694",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NG JunMing - LI YaChao\nWorld Xiangqi Championships 2009 ",
      "fen": "r1ba2br1/9/3k5/2p1C3p/pn2C1p2/9/P1P1P1P1P/5R1c1/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1695",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG William - NG JunMing\nWorld Xiangqi Championships 2009 ",
      "fen": "3a1k3/4a4/9/p8/3Nc1b2/9/P4R3/4B4/4Ar3/3AK1cC1 b - - 0 1",
      "id": "puzzle_1696",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU JingBin - MUHAMMAND Ali\nWorld Xiangqi Championships 2009 ",
      "fen": "3akabr1/3Pnn3/4b4/C3c3p/2r3p2/4P4/P3N1P1P/N3C4/4A2c1/R1B1KABR1 w - - 0 1",
      "id": "puzzle_1697",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TORNQVIST Mikko - LUO YuanZhang\nWorld Xiangqi Championships 2009 ",
      "fen": "2Rak2r1/4a4/1c2b4/p7p/1C1cC4/2P6/P4p1nP/9/4A4/2B1KAB2 b - - 0 1",
      "id": "puzzle_1698",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI YaChao - RAMO Juoni\nWorld Xiangqi Championships 2009 ",
      "fen": "9/5k3/5a3/4R3p/2N2r3/9/8P/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1699",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANAKA Atsushi - NURHADI Djumadi\nWorld Xiangqi Championships 2009 ",
      "fen": "3a1ab2/3k1C3/4P4/8C/p5pc1/2R6/9/4B4/4A4/3rK4 w - - 0 1",
      "id": "puzzle_1700",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG BiFu - WOO Tsung Han\nWorld Xiangqi Championships 2009 ",
      "fen": "1N1ak4/3Pa4/4b4/p3C3p/2b1c1p2/P2n5/8P/N3Bn3/4A4/3K1AB2 b - - 0 1",
      "id": "puzzle_1701",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HATTON Tsugumitsu - NAEGLER Michael\nWorld Xiangqi Championships 2009 ",
      "fen": "1R3a3/3ka4/4b4/p8/2n1N1p1p/2Nr5/P5P1P/4B4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1702",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANAKA Atsushi - RUMIANTSEV Dmitriu\nWorld Xiangqi Championships 2009 ",
      "fen": "R2aka3/9/4b1r2/5N2p/6p2/9/4P3c/3CnC2B/9/3AKA3 w - - 0 1",
      "id": "puzzle_1703",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHEN Hao - HU YunXi\nWorld Xiangqi Championships 2009 ",
      "fen": "2bak4/5R3/4c4/p3N3p/2b3p2/2P6/P7P/4C3c/4AK1n1/3A5 w - - 0 1",
      "id": "puzzle_1704",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIENG Ming Chuo - GOOI Wen Nee\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "3k2b2/4a4/3a5/p4N3/9/7n1/P3C3P/4BR3/9/1r1AKA3 w - - 0 1",
      "id": "puzzle_1705",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Melani - LIN JiaXin\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "2bak4/4a4/3cb4/p8/8p/4n4/P3r3P/2R1C1R2/4r4/3K5 b - - 0 1",
      "id": "puzzle_1706",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHOSHI Kazuharo - HUANG BiFu\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "1r3a3/3ka1N2/2R1b1c2/p3pN2p/n8/4P1p2/P7P/8B/3CA4/2BAK4 w - - 0 1",
      "id": "puzzle_1707",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KIM Pawn - TRAN Chanh Tam\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "3akab2/9/b8/p3p3p/9/4P4/PR3r2P/3KB4/9/2B1r1R2 b - - 0 1",
      "id": "puzzle_1708",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Hok Him - CHEN YaoLin\nHong Kong Individual Championship 2009 ",
      "fen": "3ak1c2/4a4/4b4/pN3r2p/6R2/4C4/P4c2P/4B2pB/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1709",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN ZhenJie - LAI Robin\nHong Kong Individual Championship 2009 ",
      "fen": "5k3/4P4/4R4/p3pc2p/9/9/P7P/B2A1p3/9/3Kr4 w - - 0 1",
      "id": "puzzle_1710",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WAN ChunLin - SHEN Peng\nChina National Xiangqi League 2009 ",
      "fen": "4k4/3P3R1/5a3/9/9/9/9/3pp4/5K3/3A2r2 b - - 0 1",
      "id": "puzzle_1711",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Shi - \u6ed5\u98de\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "3aR4/6n2/3a1k3/4N4/9/9/cC3r3/9/4K4/2BA2B2 w - - 0 1",
      "id": "puzzle_1712",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO Shuo - LIU Long\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "3a1k3/4a4/9/5C2p/p2P5/6B2/P4R2P/7rB/2p3p2/4KA3 w - - 0 1",
      "id": "puzzle_1713",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAO LianSheng - LO XueDong\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "2bak4/4a4/4bn3/4C3R/5P3/2p5P/8r/9/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1714",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FAN SiYuan - ZHAo GuoYing\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "2ba5/4a4/4k1r1c/3P5/7Rp/9/4P3P/3AK4/9/9 w - - 0 1",
      "id": "puzzle_1715",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN ZhenJie - LAI LiXiong\nAsian Indoor Games 2009 ",
      "fen": "2bak4/4a4/4b4/4p3p/3Nc2n1/1N4R2/4C2r1/9/1n2A4/2BA1K3 b - - 0 1",
      "id": "puzzle_1716",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU JinYan - LAY Chhay\nAsian Indoor Games 2009 ",
      "fen": "1C1a5/r3a2R1/4bk3/4N4/2p6/4P1P2/P8/3A2n2/3K5/2B4c1 w - - 0 1",
      "id": "puzzle_1717",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAY Chhay - CHEANG Pak Veng\nAsian Indoor Games 2009 ",
      "fen": "2Ca5/4kc3/3R5/2p5p/9/2P3B2/r8/3K3c1/9/3A1A3 b - - 0 1",
      "id": "puzzle_1718",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAY Chhay - SONE Toshihiko\nAsian Indoor Games 2009 ",
      "fen": "4ka3/4a3r/2n1bc2n/p3pR2N/1cp3b2/7CP/P1PrP4/2N3C1B/4A4/2BAK2R1 w - - 0 1",
      "id": "puzzle_1719",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Nguyen Thanh Bao - KNG Ter Yong\nAsian Indoor Games 2009 ",
      "fen": "2ba3RC/3k2C2/4b4/p3p3p/2p3p2/9/4P1n1P/3AB1n2/9/c3KAB2 w - - 0 1",
      "id": "puzzle_1720",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIA Dan - LEE Paul\n2009 North American Invitation Tournament 2009 ",
      "fen": "3a2b2/4akn2/c3bc3/p1pr4p/5RP2/2P1C4/P3P3P/5C3/4A4/2BAK1BN1 w - - 0 1",
      "id": "puzzle_1721",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YE Hui - JIA Dan\n2009 North American Invitation Tournament 2009 ",
      "fen": "3a1a3/C1R6/3P1kn2/4p1p1p/9/9/cr6P/B2A5/4K4/c8 w - - 0 1",
      "id": "puzzle_1722",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u7533\u9e4f+\u5f20\u6c5f - \u8d75\u56fd\u8363+\u9676\u6c49\u660e\nThe capital, home UEFA Cup men's double xiangqi exhibition 2007 ",
      "fen": "3a2b2/C4k3/3aNc3/2p2R2p/9/2P2n3/P4p2c/2N6/9/2BAKAr2 w - - 0 1",
      "id": "puzzle_1723",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Zhang De Jian - CAI YouGuang\nShenzhen City,  ",
      "fen": "4ka3/9/3a5/p3C1P2/2bNP4/6P2/P7c/3nB4/4A4/3A1K1n1 b - - 0 1",
      "id": "puzzle_1724",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU YinChuan - HONG Zhi\nNINETOWNS home Cup National  super xiangqi  tournament 2009 ",
      "fen": "3P1k1N1/2C2c3/2n1b4/8p/9/9/9/5A3/4K4/5AB2 w - - 0 1",
      "id": "puzzle_1725",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG Zhi - XIE Kui\nNINETOWNS home Cup National  super xiangqi  tournament 2009 ",
      "fen": "4k4/5P3/3ab4/1r6p/4p4/9/1nR6/3C5/4AK3/3A5 w - - 0 1",
      "id": "puzzle_1726",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG Yunxue - \u84dd\u653f\u9e3f\n2009 annual total Fenggang Chess Final 2009 ",
      "fen": "2bak4/4a4/1c2b2c1/8p/p1p1P4/9/PR2C1n1P/3R5/6r2/2BAKAr2 b - - 0 1",
      "id": "puzzle_1727",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8d56\u9896 - ZHANG JunJie\n2009 Guangzhou xiangqi League 2009 ",
      "fen": "2bakab2/9/4c4/p1N5p/9/P1P1n4/R7P/9/4Ap1r1/2BAKNB2 b - - 0 1",
      "id": "puzzle_1728",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAO YanLei - \u80e1\u5e7f\u548c\n2009 Guangzhou xiangqi League 2009 ",
      "fen": "5k3/3R5/b4r2n/p5r1p/2R6/9/P1P1P3P/2N1BA3/3K4c/2B6 w - - 0 1",
      "id": "puzzle_1729",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAO YanLei - \u6b27\u7167\u82b3\nShenzhen WuFang Cup xiangqi Competition 2009 ",
      "fen": "2ba5/3Rak1N1/3c2P1b/p3p4/1n4n2/9/P8/4rC3/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1730",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8d75\u548c\u5e73 - ZHANG XueChao\nShenzhen WuFang Cup xiangqi Competition 2009 ",
      "fen": "3k1RbR1/4a4/4c4/4C3p/2b6/3r5/2P5P/N4A2B/4c4/4KA3 b - - 0 1",
      "id": "puzzle_1731",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG Zhi - ZHANG Qiang\nChina National Xiangqi League 2009 ",
      "fen": "4k1b2/2c2C3/n5c2/p7p/2bNC4/P5R2/8P/4B4/5n3/r2AKA3 b - - 0 1",
      "id": "puzzle_1732",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN HanFeng - ZHAO ShunXin\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u7537\u5b50\u56e2\u4f53 2009 ",
      "fen": "5a3/9/3P1k3/6N2/p5bc1/1C6P/P8/4p4/4A1n2/3K1AB2 w - - 0 1",
      "id": "puzzle_1733",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHEN Peng - LI JiaHua\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u7537\u5b50\u56e2\u4f53 2009 ",
      "fen": "1Rc1kab2/4a4/2N1b4/p1p2n1Np/2PP5/3C5/P4r1pP/3c5/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1734",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO Yin - ZHANG Mei\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u5973\u5b50\u4e2a\u4eba\u5feb\u68cb 2009 ",
      "fen": "3ak4/1C1R1c3/4bN3/p8/9/P8/5r3/5A3/3K5/c4A3 w - - 0 1",
      "id": "puzzle_1735",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN QingTing - OUYANG Qilin\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u5973\u5b50\u4e2a\u4eba\u5feb\u68cb 2009 ",
      "fen": "3nk1b2/4a4/3ab4/p1R5p/6c2/2P6/8P/3C1N2B/3KA4/r4A3 b - - 0 1",
      "id": "puzzle_1736",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5434\u5b97\u6ecb - ZHOU JinJun\n2009 Fenggang Town, Dongguan 3rd quarter Xiangqi Open 2009 ",
      "fen": "2bak2r1/4a4/4b4/p1pnC3p/6N2/2P3B2/P3P3P/5An2/9/2B1KA3 w - - 0 1",
      "id": "puzzle_1737",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5c39\u6587\u60e0 - ZHU ShaoJun\n2009 Fenggang Town, Dongguan 3rd quarter Xiangqi Open 2009 ",
      "fen": "2bak1c2/4a4/6NRb/p1p5p/4C4/9/P1P5P/9/5r3/2BAKAp1c b - - 0 1",
      "id": "puzzle_1738",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5434\u8d24\u826f - \u674e\u6c49\u5149\n2009\u5e74\u5e7f\u4e1c\u7701\u8c61\u68cb\u9526\u6807\u8d5b\u7ade\u8d5b 2009 ",
      "fen": "2b1kab2/4R4/5c3/p3pR2p/9/P5p2/4P3P/2n2A3/5K3/4r1N2 b - - 0 1",
      "id": "puzzle_1739",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG XueChao - LI DeZhi\n2009\u5e74\u5e7f\u4e1c\u7701\u8c61\u68cb\u9526\u6807\u8d5b\u7ade\u8d5b 2009 ",
      "fen": "5a2C/3ck4/5a3/p3N4/9/2P3R2/8r/4nA3/4C4/3K5 w - - 0 1",
      "id": "puzzle_1740",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9093\u5bb6\u8363 - JIAN JiaKang\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "1R1a1kb2/4ar3/4R4/p7p/6p2/2P6/P2nP1c1P/3CC1r1B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1741",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5f20\u6d2a\u6b66 - \u82cf\u949c\u660e\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "2ba1k3/3Ca4/2N1b1c2/p1p5p/9/2P3P2/P2C4c/4B4/5r3/1RBAK4 b - - 0 1",
      "id": "puzzle_1742",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHOU Jiahong - \u6881\u80dc\u6cc9\n2009\u9999\u6e2f\u3001\u756a\u79ba\u3001\u987a\u5fb7\u8c61\u68cb\u8054\u8c0a\u8d5b 2009 ",
      "fen": "5ab2/2Cka4/CRn6/p5p1p/9/6P2/4P3P/4B2c1/4Ar3/4KA3 w - - 0 1",
      "id": "puzzle_1743",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Huan - HU Ming\nChina Team Championship 2009 ",
      "fen": "4kab2/3RaR3/4bc3/p1P1C4/2p6/2c6/P7P/r2C2p1B/3rA4/3A1K3 b - - 0 1",
      "id": "puzzle_1744",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DANG GuoLei - \u674e\u82e5\u611a\nChina Team Championship 2009 ",
      "fen": "3a1abr1/2N2k3/b1n6/pC4R1p/4P4/3p2P2/P5c1P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1745",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Yong - \u66fe\u519b\n\u201cThe 2nd  ",
      "fen": "2b3b2/CRn6/3k5/N5p2/r2n5/9/4r3P/9/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1746",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u674e\u7acb\u519b - \u5b8b\u667a\u9e4f\nHesheng. Spring Festival Cup team tournament 2009 ",
      "fen": "2ba1k3/3Ran1c1/5P2r/p5p2/1cp5p/9/P1P3P1P/4C4/5C3/2BAKABn1 w - - 0 1",
      "id": "puzzle_1747",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XingLin - LIU ZongZe\nHesheng. Spring Festival Cup team tournament 2009 ",
      "fen": "C1N6/3k5/4b1N1b/6c2/3np4/9/P7P/4B4/2n1A4/2BAK4 w - - 0 1",
      "id": "puzzle_1748",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Qiang - LI Qun\nChina National Xiangqi League 2008 ",
      "fen": "2R1kab1C/4a4/4b4/p7p/9/9/P3pNn1P/5K3/7r1/3A1AB2 b - - 0 1",
      "id": "puzzle_1749",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAO HanMing - ZHANG ShenHong\nChina National Xiangqi League 2008 ",
      "fen": "CCbNka3/7r1/6n1c/p1N5p/2p1p1b2/9/P3c3P/3rB4/4AR3/2B1KA3 w - - 0 1",
      "id": "puzzle_1750",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHENG SiMeng - \u9f50\u8f89\nChina Team Championship 2007 ",
      "fen": "2bakab2/9/9/p1RC4p/9/1CP6/P2r2n1P/2N1BA3/4K1c2/5A1c1 b - - 0 1",
      "id": "puzzle_1751",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Mei - SHI FengNan\nChina Team Championship 2007 ",
      "fen": "3c1a3/4k2C1/3a3NC/4N4/1n2p4/5n3/8P/B3B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1752",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU Dan - LI HuiYuan\nChina Team Championship 2007 ",
      "fen": "1Rbaka3/C8/4b1nc1/2p1p3p/p4rp2/4P4/P2R2P1P/2N1B1N2/6r2/C2K1AB2 w - - 0 1",
      "id": "puzzle_1753",
      "title": "Mate in 2 moves"
    },
    {
      "description": "RUDY Eric - LEI Kam Fun\nWorld Xiangqi Championships 2011 ",
      "fen": "2bR1kC2/4a1n2/2n6/p3p4/2p6/4C1B2/2P1cr2P/cr2B4/2R1A4/3AK4 b - - 0 1",
      "id": "puzzle_1754",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MATSUNO Yoichiro - PAN HaiFeng\nWorld Xiangqi Championships 2011 ",
      "fen": "4k4/4aP3/9/9/9/9/9/9/3K5/2B3B2 w - - 0 1",
      "id": "puzzle_1755",
      "title": "Mate in 2 moves"
    },
    {
      "description": "STERNMAN Olavi - WONG Wan Heng\nWorld Xiangqi Championships 2011 ",
      "fen": "r2akab2/9/4bc3/p1pR4p/9/2PnP1p2/P7P/1R3KN2/7r1/1NBA1AB2 b - - 0 1",
      "id": "puzzle_1756",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU Kuo Hua - LAU KeiCheong\nWorld Xiangqi Championships 2011 ",
      "fen": "1R1aka3/9/3C2N2/p1R3p1p/2p1p4/3r5/P1P3c1P/2C1B4/3r5/4KAB2 w - - 0 1",
      "id": "puzzle_1757",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHANDRA Nugruho - XU YinChuan\nWorld Xiangqi Championships 2011 ",
      "fen": "4kRb2/4a4/2n1b4/p1R1p3p/5cp2/2P6/P3P3P/1CN1r4/3rA1c2/2B1KA3 b - - 0 1",
      "id": "puzzle_1758",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NG JunMing - FRISCHMUTH Uwe\nWorld Xiangqi Championships 2011 ",
      "fen": "C1b2a3/3ka2r1/1RN2cn2/4p3p/2p3b2/9/P3P3P/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1759",
      "title": "Mate in 2 moves"
    },
    {
      "description": "KNAB Reinhard - DEMIN Aleksandr\nWorld Xiangqi Championships 2011 ",
      "fen": "2rak2r1/4a4/b3b1R2/p3C3p/7c1/3N5/P3P1P1P/2Cn5/4K4/2BA1nB2 b - - 0 1",
      "id": "puzzle_1760",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHOSHI Kazuharo - Nguyen Thanh Bao\nWorld Xiangqi Championships 2011 ",
      "fen": "2baka3/9/2R1b4/R1p5p/6N2/2P6/4P4/4CA3/6r2/2B1KAr1c b - - 0 1",
      "id": "puzzle_1761",
      "title": "Mate in 2 moves"
    },
    {
      "description": "STERNMAN Olavi - Xu Guang Ya\nWorld Xiangqi Championships 2011 ",
      "fen": "3Rka3/4a4/4b4/9/P5p2/9/9/1r6B/4p4/3K5 b - - 0 1",
      "id": "puzzle_1762",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TANAKA Atsushi - IWAN Setiawan\nWorld Xiangqi Championships 2011 ",
      "fen": "5a3/4kc3/9/8p/7R1/2B5P/7c1/9/3K1p3/4r1B2 b - - 0 1",
      "id": "puzzle_1763",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GU YiQing - MATSUNO Yoichiro\nWorld Xiangqi Championships 2011 ",
      "fen": "4Ra3/3P5/3k5/p3r2np/2b6/5R3/1r2c3P/4C4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1764",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HE ZhiMing - NG JunMing\nWorld Xiangqi Championships 2011 ",
      "fen": "2b2Cb2/3k3C1/5a3/9/p3p3P/9/P3c4/3pn3B/4A4/4KA3 b - - 0 1",
      "id": "puzzle_1765",
      "title": "Mate in 2 moves"
    },
    {
      "description": "BAKRA Anuar Bin - SONE Toshihiko\nWorld Xiangqi Championships 2011 ",
      "fen": "3rk1b2/9/6N2/p1R3c1p/2P6/9/P3p1p1P/4B4/4A1c1N/2BAK4 w - - 0 1",
      "id": "puzzle_1766",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG Hui Chuan - HAPCHINA Irimia\nWorld Xiangqi Championships 2011 ",
      "fen": "3rkab2/4a4/4bcn2/p5C1p/4pRC2/3cP4/P5P1P/4B1N2/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1767",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Meng Ju - WU CaiFang\nWorld Xiangqi Championships 2011 ",
      "fen": "3ak1br1/4a4/2c1b3n/p2N2p1p/4C4/6P2/P3n3P/5C3/9/2BAKABR1 w - - 0 1",
      "id": "puzzle_1768",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAN Min Fang - FEBY Eunike Regina\nWorld Xiangqi Championships 2011 ",
      "fen": "2b2ab2/6R2/5k1N1/9/2r6/P8/7p1/9/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1769",
      "title": "Mate in 2 moves"
    },
    {
      "description": "OGAWAHiroshi - FRISCHMUTH Uwe\nWorld Xiangqi Championships 2011 ",
      "fen": "2ba1k3/4a3R/6c1N/5r2p/p8/2P6/4c3n/N4A3/9/2BAK4 b - - 0 1",
      "id": "puzzle_1770",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FEBY Eunike Regina - CHIENG Ming Chuo\nWorld Xiangqi Championships 2011 ",
      "fen": "4kab2/4a4/4b4/9/9/9/9/2n1Bp3/5p2C/4K1B2 b - - 0 1",
      "id": "puzzle_1771",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIU Yu Kuen - ZHOU Shi Jie\nHong Kong Individual Championship 2011 ",
      "fen": "3aR4/n1C2k3/r4a3/p3C3p/9/9/P3P3P/4B3B/4A4/4KA1c1 w - - 0 1",
      "id": "puzzle_1772",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG YanLong - WU WeiHao\nHong Kong Individual Championship 2011 ",
      "fen": "4ka3/4a4/4Nn3/p3r3p/2R6/9/4C4/3A5/4Ap3/2BK5 w - - 0 1",
      "id": "puzzle_1773",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI Qiu Sheng - ZHANG Da Quang\nHong Kong Individual Championship 2011 ",
      "fen": "2ba1ab2/3k5/9/9/9/4C4/9/3p2n2/9/3K5 b - - 0 1",
      "id": "puzzle_1774",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG BingWei - WU WeiHao\nHong Kong Individual Championship 2011 ",
      "fen": "2ba1k3/3Ra4/4br3/2R1p3p/p8/9/4P3P/B1C1B4/9/4K1Nr1 b - - 0 1",
      "id": "puzzle_1775",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU Ming - FU ChuanYong\nHong Kong Individual Championship 2011 ",
      "fen": "2bak4/4a4/4b4/9/9/2R3P2/8P/3AR4/3K5/5rr2 b - - 0 1",
      "id": "puzzle_1776",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU Jia Wei - Yang Xiang Yu\nHong Kong Individual Championship 2011 ",
      "fen": "9/2N2k3/3R1a3/9/p8/2B2r3/9/5C3/4A4/3K2B2 w - - 0 1",
      "id": "puzzle_1777",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ISLAN Kon - WONG Shu Kai\nHong Kong Individual Championship 2011 ",
      "fen": "4kab2/4a4/4c4/4C3p/P1bN2p2/2R6/3n2c2/9/4A4/2BAK1B2 b - - 0 1",
      "id": "puzzle_1778",
      "title": "Mate in 2 moves"
    },
    {
      "description": "OU HanMin - WENG ChuGuang\nHong Kong Individual Championship 1997 ",
      "fen": "C2ak4/4a4/2R1b1n2/6p1p/9/3r2P1P/9/9/4r4/c1BA1KB1R b - - 0 1",
      "id": "puzzle_1779",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WENG GuoWei - ZHOU ZiDa\nHong Kong Individual Championship 1997 ",
      "fen": "2bak4/4a4/4b4/C7p/6p2/2P2R3/Pcn1N3P/3K1AN1c/6rr1/1RBA2B2 b - - 0 1",
      "id": "puzzle_1780",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG Haoyi - MO ZhanTu\nHong Kong Individual Championship 1997 ",
      "fen": "3aka3/4c4/n3b1n2/p1C2N2p/2b3p2/4R4/P5P1P/3AB4/4K4/c4AB2 w - - 0 1",
      "id": "puzzle_1781",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Chi Keung - YAN Zhao Tian\nHong Kong Individual Championship 1997 ",
      "fen": "2b4R1/4rk3/4N4/3n5/2p5P/6B2/9/B8/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1782",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG YunFeng - HUANG DaMing \nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "4kab2/4a4/4b4/C3C3p/1P7/4P3P/2c6/2NABA2c/2n6/5K3 b - - 0 1",
      "id": "puzzle_1783",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Ung Dau - MO LaiJiu\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "2P1k1b2/3PaP3/3ab4/3Nc4/9/6B2/7p1/4B4/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_1784",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAU KeiCheong - CHEN Zheng\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "4ka1R1/9/4nc1N1/8C/9/4p4/3p4P/4B1n2/3K5/2BA1r3 b - - 0 1",
      "id": "puzzle_1785",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Yu Kuai - HUANG DaMing \nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "3rkabR1/4a4/1Rn6/p3p3p/2br2p2/8P/P5P2/2n2C2N/4A4/2B1KAB2 b - - 0 1",
      "id": "puzzle_1786",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MA YunRun - Ung Dau\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "1R1R2b2/3ck4/9/p1p1C3p/3r2b2/2P3P2/P3P3P/N4C3/4AK3/2c4r1 b - - 0 1",
      "id": "puzzle_1787",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WONG Chi Keung - LU BaoCheng\nHong Kong Individual Championship 1997 ",
      "fen": "3a1a3/3k2C1n/4r4/p3N1p1p/1R7/6P2/P3P3c/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1788",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU KeDang - OU HanMin\nHong Kong Individual Championship 1997 ",
      "fen": "4kab2/4a1c2/4b4/1N2C4/6n2/P8/4P3P/4B4/4A4/2BK1A3 w - - 0 1",
      "id": "puzzle_1789",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAN Jin Hong - LONG GuangMing\nHong Kong Individual Championship 1997 ",
      "fen": "4kabC1/2R1a4/4R4/9/p5p2/1n1p2r2/P3P3P/2r1B4/4A4/2BAK1C2 w - - 0 1",
      "id": "puzzle_1790",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIANG Min Xing - LU HongYe\nHong Kong Individual Championship 1997 ",
      "fen": "5ab2/1N1ka4/2C1b4/8p/9/2P1C1n2/4c1R2/6c2/7r1/2BAKA3 b - - 0 1",
      "id": "puzzle_1791",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU Qiang - LU BaoCheng\nHong Kong Individual Championship 1997 ",
      "fen": "4k1b2/3P5/5a3/4C4/6N2/3p5/9/4nR3/4A4/3A1KB1r w - - 0 1",
      "id": "puzzle_1792",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HE GuoPing - LU HongYe\nHong Kong Individual Championship 1997 ",
      "fen": "4kab2/2N1ac3/4b4/2P6/9/3C5/8P/3p1n3/9/3K1A3 b - - 0 1",
      "id": "puzzle_1793",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YUNG Tak Keung - YI ShunHua\nHong Kong Individual Championship 1997 ",
      "fen": "3a1ab2/9/1c1k2N2/p1N3p2/7cp/9/P7P/4K4/3r5/2B2AB2 w - - 0 1",
      "id": "puzzle_1794",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEUNG Tsui Cheuk - YUNG Tak Keung\nHong Kong Individual Championship 1998 ",
      "fen": "C3kab2/4a4/9/p7p/2p6/9/P1P1n4/4c4/3KA4/1r3A1R1 b - - 0 1",
      "id": "puzzle_1795",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG JiaJun - LEUNG TatMan\nHong Kong Individual Championship 1998 ",
      "fen": "4kab2/2P1a1C2/4b4/pr7/9/9/9/2nN1n3/2N6/3K1A2R b - - 0 1",
      "id": "puzzle_1796",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU BingKui - ZHOU ZiDa\nHong Kong Individual Championship 1998 ",
      "fen": "3k1a3/4a4/3rN4/p7p/3R5/9/P5r1P/4C4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1797",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG WenChang - SU FuYin\nHong Kong Individual Championship 1998 ",
      "fen": "1n1a1a3/4k1N2/3R5/p3p3p/2c6/3N2P2/P1c1P3P/3CB4/6r2/3AKA3 w - - 0 1",
      "id": "puzzle_1798",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NG Chun Hei - HUANG XueQian\nHong Kong Individual Championship 1998 ",
      "fen": "2bak1b2/4a2n1/1r2c1P2/p3CN1r1/5R3/8p/P1P1P3P/2N3c2/5R3/2BAKAB2 w - - 0 1",
      "id": "puzzle_1799",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Zhen Yong Kang - YU Ming\nHong Kong Individual Championship 2001 ",
      "fen": "4k1b2/4a4/b4a3/9/9/8R/1n7/5A3/7rN/3A1K3 b - - 0 1",
      "id": "puzzle_1800",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHAN Tat Tai - LONG GuangMing\nHong Kong Individual Championship 2001 ",
      "fen": "3a2R2/C4k3/3a5/6p2/2p6/9/c1P5r/4C4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1801",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHAN Tat Tai - WONG Chi Keung\nHong Kong Individual Championship 2001 ",
      "fen": "5R3/3k1P3/4b3b/p3p3p/9/4P4/P8/3A1n3/4K3c/2r4N1 b - - 0 1",
      "id": "puzzle_1802",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TSE Richard - DENG HuiDong \nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "4kab2/4a3C/8n/4C1p2/2bNP4/P8/6PcP/4B4/1n1pAN3/2c1KA3 b - - 0 1",
      "id": "puzzle_1803",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEUNG Kwok Yau - PAN Jack QH\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "4k4/3PaP3/3a4b/3N5/4c1b2/9/7n1/4B4/3CA1p2/2BA1K3 w - - 0 1",
      "id": "puzzle_1804",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIA TingHui - CHI Run Xiang\n2003 Yangquan super chess tournament 2003 ",
      "fen": "3k1ab2/4a4/4b4/p6P1/4p4/6N2/2R6/4B3B/5R1r1/5K3 b - - 0 1",
      "id": "puzzle_1805",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG Qiang - ZHAO GuanFang\n2010\u5e74\u201c\u4f0a\u6cf0\u676f\u201d\u5168\u56fd\u8c61\u68cb\u7cbe\u82f1\u8d5b\u7b2c1\u8f6e 2010 ",
      "fen": "3ak4/4a4/6N1b/p5P2/5P3/9/P3R4/3K4B/3p3r1/4c1B2 b - - 0 1",
      "id": "puzzle_1806",
      "title": "Mate in 2 moves"
    },
    {
      "description": "PANG CaiLiang - \u4f59\u6d2a\u6ce2\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "5a3/2N1k4/3Pb4/9/3C2b2/4c4/9/4B1p2/2p1A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1807",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5434\u5b97\u6ecb - \u5b59\u5efa\u519b\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "3k5/4P4/3N1P2c/4n4/9/4C1B2/9/3K5/2p6/6B2 w - - 0 1",
      "id": "puzzle_1808",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN HaoYu - ZHAO Li\n2010\u5e74\u5317\u6b66\u5f53\u5c71\u676f\u5168\u56fd\u8c61\u68cb\u7cbe\u82f1\u8d5b 2010 ",
      "fen": "3ak1b1r/r3aR3/4R3n/p3p4/6p1p/6P2/8P/9/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1809",
      "title": "Mate in 2 moves"
    },
    {
      "description": "BU FengBo - \u725b\u5fd7\u5cf0\n2010\u5e74\u5317\u6b66\u5f53\u5c71\u676f\u5168\u56fd\u8c61\u68cb\u7cbe\u82f1\u8d5b 2010 ",
      "fen": "5kb2/4a4/2cNb4/5P3/6n2/4C4/2p6/3AB4/4A4/2B1K4 w - - 0 1",
      "id": "puzzle_1810",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIN Xin - LU YingYuan\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "5ab2/5r3/b3k1c2/c1R6/6pnp/2P6/P3P1P1P/1C4N2/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1811",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN Zhuo - ZHAO Zitong\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "2bakaP1C/9/b7N/9/5n1n1/9/5p3/3AB4/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_1812",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG Wei - CHI XinDe\n2010 Wei Shi cup Shandong Province xiangqi Team Tournament 2010 ",
      "fen": "3ak4/4aR3/2r1b1R2/8P/9/9/9/4r4/3pA4/3A1KB2 w - - 0 1",
      "id": "puzzle_1813",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ec4\u6e05\u5b5d - ZHANG WeiDong\n2010 Wei Shi cup Shandong Province xiangqi Team Tournament 2010 ",
      "fen": "1Rbk1ar2/c6c1/r8/p1R5p/2n6/2B1p4/P7P/2N1C4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1814",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5c39\u5fd7\u52c7 - \u5218\u6bc5\u8fbe\n2010\u5e74\u7b2c\u516d\u5c4a\u5357\u4eac\u5e02\u5f08\u6770\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "8C/4ck3/9/9/9/4Cp3/9/4B4/3pAp3/4KAB2 b - - 0 1",
      "id": "puzzle_1815",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Zhou Wenbing - \u59dc\u7167\u6148\n2010\u5e74\u7b2c\u516d\u5c4a\u5357\u4eac\u5e02\u5f08\u6770\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "3aka3/3n5/1r2b4/8N/9/2B1P4/8P/2n6/3R5/4KABc1 b - - 0 1",
      "id": "puzzle_1816",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG Zhi - ZHAO GuoRong\n2010\u5e74\u7b2c\u5341\u516d\u5c4a\u4e9a\u6d32\u8fd0\u52a8\u4f1a\u8c61\u68cb\u9009\u62d4\u8d5b 2010 ",
      "fen": "rn1rkabc1/1R2aR3/4b4/p7p/4C1p2/3cP4/P3N1P1P/1C7/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_1817",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5218  \u6631 - \u4f59\u548c\u53d1\n2010\u666f\u5fb7\u9547\u8c61\u68cb\u7532\u7ea7\u8054\u8d5b 2010 ",
      "fen": "2b1k4/9/3Rb3n/p4N3/8p/4P1P2/5C1r1/4B1n2/3cA4/3K1AB2 w - - 0 1",
      "id": "puzzle_1818",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI DeZhi - \u5b59\u672c\u8bd7\n2010\u5e74\u7b2c\u5341\u516d\u5c4a\u8fce\u6625\u676f\u8c61\u68cb\u56e2\u4f53\u516c\u5f00\u8d5b 2010 ",
      "fen": "4kab2/4a4/2n1bnc2/p1p4Np/3r5/P1P6/3R4P/3CC4/4A4/2c1KAB2 w - - 0 1",
      "id": "puzzle_1819",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIAO GeLian - ZHANG ShenHong\nChinese National Champion 2010 ",
      "fen": "2ba4C/8R/3ak2C1/p3p3p/6P2/1p7/Pn2P1N1P/5r3/9/2rAK4 b - - 0 1",
      "id": "puzzle_1820",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO GuoRong - DONG Fei\nChinese National Champion 2010 ",
      "fen": "4kab2/9/2C2a3/pRN5p/2P6/9/P2rN3P/9/9/4KAr2 b - - 0 1",
      "id": "puzzle_1821",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u738b\u884c\u6881 - WANG RuiXiang\nChina Team Championship 2010 ",
      "fen": "3rkab2/4a4/4b4/R3Cr2p/7N1/9/2P1n3P/B6c1/1R7/3AKAB2 b - - 0 1",
      "id": "puzzle_1822",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FU JiangWen - \u5510\u601d\u6960\n2010 National Junior Xiangqi Championship 2010 ",
      "fen": "3a1a1C1/3k2N2/9/p2P4p/2p6/P2c1NP2/1nc5P/9/4K4/2B3B2 w - - 0 1",
      "id": "puzzle_1823",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u82b1\u84c9\u84c9 - ZHOU Yijing\n2010 National Junior Xiangqi Championship 2010 ",
      "fen": "3k1abC1/3cR4/1rn6/p1p1p3p/5r3/2P6/Pc2P1P1P/2N1C1N2/5R3/2BAKAB2 w - - 0 1",
      "id": "puzzle_1824",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5218\u78ca - GUAN ZhiNian\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "5k3/4P4/9/3P5/5C3/c3C4/9/5n3/4A1p2/4K4 w - - 0 1",
      "id": "puzzle_1825",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DING JianQuan - LAI Robin\nHong Kong Individual Championship 2001 ",
      "fen": "4ka3/4an3/3PP4/1c2C4/7Cp/3p5/4c3P/9/4K4/2BA1AB2 w - - 0 1",
      "id": "puzzle_1826",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHAN Ling Fai - YUNG Tak Keung\nHong Kong Individual Championship 2001 ",
      "fen": "2baka3/9/4R4/4p3p/P8/3c3N1/3R4P/3nB4/4r4/3K2B2 b - - 0 1",
      "id": "puzzle_1827",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU Ming - SU FuYin\nHong Kong Individual Championship 2001 ",
      "fen": "4kab2/2P1a4/4b1N2/9/8p/9/P8/4r1r2/4AK3/c1RA5 b - - 0 1",
      "id": "puzzle_1828",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN ZhenJie - WONG Hok Him\nHong Kong Individual Championship 2001 ",
      "fen": "2b1P4/4a1C1C/3a1k3/7P1/p3c1b2/9/4p4/3A5/1n2A4/4K4 b - - 0 1",
      "id": "puzzle_1829",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DING JianQuan - WONG Chi Keung\nHong Kong Individual Championship 2001 ",
      "fen": "3c3R1/5k3/3ab4/9/2b2r3/P8/2N6/9/9/4K4 b - - 0 1",
      "id": "puzzle_1830",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAI Robin - DING JianQuan\nHong Kong Individual Championship 2002 ",
      "fen": "2bak4/4a4/3cb4/C4R3/p3n1P2/4P3p/P1r1N4/4B4/4A4/2BA1K2c w - - 0 1",
      "id": "puzzle_1831",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG HaoChang - YUNG Tak Keung\nHong Kong Individual Championship 2002 ",
      "fen": "2bak1C2/9/3a3P1/p8/9/2p3P2/P2R5/3AB4/1n2A3r/c4K3 b - - 0 1",
      "id": "puzzle_1832",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9999\u73b2\u73d1 - JIAN TianNan\nHong Kong Individual Championship 2002 ",
      "fen": "4kN3/9/3R1a3/p7p/6p2/9/P3P3P/3C5/crcK5/5A3 w - - 0 1",
      "id": "puzzle_1833",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YUNG Tak Keung - CHAN Keung On\nHong Kong Individual Championship 2003 ",
      "fen": "3rk4/1R2a4/1c2Nan2/4C3p/p5P2/4p4/2P6/2n6/2r1A4/2B1KABRc w - - 0 1",
      "id": "puzzle_1834",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WENG ChuWen - YU Ming\nHong Kong Individual Championship 2003 ",
      "fen": "3a1a3/4k4/3Cb4/4p4/3r5/P1P1P2p1/1R4cnP/4B4/4A4/2B1KA1N1 b - - 0 1",
      "id": "puzzle_1835",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG HaoChang - TAN Jing Yang\nHong Kong Individual Championship 2003 ",
      "fen": "2rk1ab2/3Cc4/4bN3/1R6p/2p6/P3C4/9/4B4/2n1A4/3K1AB2 w - - 0 1",
      "id": "puzzle_1836",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAN Jing Yang - LONG GuangMing\nHong Kong Individual Championship 2003 ",
      "fen": "6b2/4P4/3k5/1R7/pn3rb2/3p5/P8/5A3/4A4/5K3 w - - 0 1",
      "id": "puzzle_1837",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHAN Ling Fai - WENG ChuWen\nHong Kong Individual Championship 2003 ",
      "fen": "4k4/3PaP1N1/3ab4/9/6b2/9/9/5An1B/4K4/5AB2 w - - 0 1",
      "id": "puzzle_1838",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LU BaoCheng - LU HongYe\nHong Kong Individual Championship 2003 ",
      "fen": "2bak4/4a4/4b4/4c3C/pR6P/4P4/9/3n5/4r4/3K5 b - - 0 1",
      "id": "puzzle_1839",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAO ShuoZhang - CHAN Ling Fai\nHong Kong Individual Championship 2003 ",
      "fen": "3k2b2/4a1N2/2P1ba3/5c3/7n1/3C5/4cC3/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1840",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG HaoChang - HUANG Haoyi\nHong Kong Individual Championship 2003 ",
      "fen": "2b1R4/9/3k5/p3N4/7r1/6C2/P3P1nc1/4nC3/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1841",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIU Yu Kuen - WANG HaoChang\nHong Kong Individual Championship 2003 ",
      "fen": "3a2Rc1/2N2k3/4Pa3/2P6/p3r4/9/Pn7/3ABA3/1C7/2B2K3 w - - 0 1",
      "id": "puzzle_1842",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NG Chun Hei - LAI Robin\nHong Kong Individual Championship 2003 ",
      "fen": "6b2/3ka4/9/4PN2p/2pC5/P7c/9/B4c3/4K4/3A5 w - - 0 1",
      "id": "puzzle_1843",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SU FuYin - LIU YongLiang\nHong Kong Individual Championship 2003 ",
      "fen": "1r1akn3/4a4/4b2R1/p1p5p/4C1n2/2P6/Pc6P/4C4/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1844",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u542f\u53d1 - \u8c2d\u666f\u6df1\nHong Kong Individual Championship 2003 ",
      "fen": "6NC1/3kaR3/4b4/p1p6/3r2p2/4n4/P1P6/6n2/4A4/2BAK1B2 b - - 0 1",
      "id": "puzzle_1845",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u987e\u632f\u5f3a - LIN BuYu\nHong Kong Individual Championship 2003 ",
      "fen": "3a5/3k1C3/b3P4/3N5/3n5/9/4c4/4Bn3/4A3C/2BAK4 w - - 0 1",
      "id": "puzzle_1846",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u7f2a\u5c55\u5b87 - ZHUO Ruirong\nHong Kong Individual Championship 2003 ",
      "fen": "4k4/9/3a5/9/9/9/9/3CNA3/3p5/cn1AK1p2 b - - 0 1",
      "id": "puzzle_1847",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u51af\u5fd7\u5f6a - HUNG WenWei\nHong Kong Individual Championship 2003 ",
      "fen": "3akabn1/7R1/2n1b1cC1/4p3P/p1p6/9/P1P1PR3/4B1N2/2r1A2r1/2BAK4 w - - 0 1",
      "id": "puzzle_1848",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEE Ang - TAN Wei Lin\nHong Kong Individual Championship 2009 ",
      "fen": "9/5k3/5aN2/9/9/5R3/9/3AK4/3r5/5A2c w - - 0 1",
      "id": "puzzle_1849",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6c60\u7eea\u4fca - \u65b9\u529b\u884c\nHong Kong Individual Championship 2009 ",
      "fen": "3k1ab2/4a4/9/5P3/4cC3/5c3/9/4p3B/5K3/3A1A3 b - - 0 1",
      "id": "puzzle_1850",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8521\u5146\u6bb7 - DENG Wei Wen\nHong Kong Individual Championship 2009 ",
      "fen": "3a5/4k4/4b4/p8/9/P6N1/4P4/4nR2B/4AK3/3c4r b - - 0 1",
      "id": "puzzle_1851",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5f20\u8fbe\u5149 - DENG Wei Wen\nHong Kong Individual Championship 2009 ",
      "fen": "3k1a3/1RP6/4Ca3/p2N2r2/1r7/3N2p2/P6c1/4B1n2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1852",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG FuXiang - ZHU ZhongQian\nHong Kong Individual Championship 2009 ",
      "fen": "5Cb2/4k4/4b4/p3p3p/3c1n3/9/P2R4P/3N1A3/3K5/1r3A3 b - - 0 1",
      "id": "puzzle_1853",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAI Robin - CHEN YaoLin\nHong Kong Team Champion 2002 ",
      "fen": "2bc1k3/4a4/4b4/8p/9/9/P3rnp1P/9/3CAr3/1RBAKN1R1 b - - 0 1",
      "id": "puzzle_1854",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8c22\u9648 - OU HanMin\nHong Kong Team Champion 2002 ",
      "fen": "4k1b1C/4a4/4ba3/9/9/9/4c4/3CB4/1n1pA1p2/4KAB2 b - - 0 1",
      "id": "puzzle_1855",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YUNG Tak Keung - FANG WeiHao\nHong Kong Team Champion 2002 ",
      "fen": "2bk1abC1/2N6/1cna5/p3p3p/2pr1R3/4P1B2/P2Cc3P/7r1/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1856",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u987e\u632f\u5f3a - CAI YongGuan\nHong Kong Team Champion 2002 ",
      "fen": "C2k1a3/n6R1/3Nb4/p3p3p/5n1c1/P1P6/4Pc2P/1r5C1/4A4/4KA3 w - - 0 1",
      "id": "puzzle_1857",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WENG Weiqiang - \u5f20\u5fd7\u594e\nHong Kong Team Champion 2002 ",
      "fen": "1CbakabR1/9/9/8C/6p2/4n4/6P1P/4K1N2/5r3/r2A1AB2 b - - 0 1",
      "id": "puzzle_1858",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DENG WeiDa - \u5b8b\u5bb6\u4fca\nHong Kong Team Champion 2002 ",
      "fen": "2b2ab2/3ka4/3c5/p1p4Np/4r1p2/9/P1PRN3P/9/4A4/2BCKAB2 w - - 0 1",
      "id": "puzzle_1859",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHU Limin - \u9ea6\u5b50\u6069\nHong Kong Team Champion 2002 ",
      "fen": "2Rakab2/9/9/6p1p/p2P5/9/P7P/6r2/4AK1n1/9 b - - 0 1",
      "id": "puzzle_1860",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YUNG Tak Keung - CHAN Keung On\nHong Kong Team Champion 2002 ",
      "fen": "9/4k4/4r4/9/9/9/5R3/9/3K5/1c7 b - - 0 1",
      "id": "puzzle_1861",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEUNG TatMan - CHIU Yu Kuen\nHong Kong Team Champion 2002 ",
      "fen": "2b2N3/9/3k5/1P7/2bc5/6B1P/1n1p5/4B4/9/5K3 w - - 0 1",
      "id": "puzzle_1862",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHU Jiawei - \u90b1\u5bb6\u5b9d\nHong Kong Team Champion 2002 ",
      "fen": "C1bnka3/9/3abn3/1NR5p/1P7/4P4/3R4P/5r3/9/3K1AB1c w - - 0 1",
      "id": "puzzle_1863",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HU Jin - ZHANG BiHua\nHong Kong Team Champion 2002 ",
      "fen": "1CRak1b2/4a4/7R1/6r1p/p8/9/8P/N3n4/1c3K3/3A5 b - - 0 1",
      "id": "puzzle_1864",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN ZhenJie - CHAN Chee Mun\nHong Kong Team Champion 2002 ",
      "fen": "2ba2b2/3Ra4/2r1k1n2/p4R2p/4N1p2/9/P5P1P/4B1n2/7r1/2BAKA3 w - - 0 1",
      "id": "puzzle_1865",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u987e\u632f\u5f3a - \u5f20\u6709\u4e3a\nHong Kong Team Champion 2002 ",
      "fen": "1nnakab1r/9/4b4/p1p1N3p/6p2/2P1C2c1/P3P1P1P/4C1c2/3RA4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1866",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6234\u632f\u5b87 - LIANG Yuan Zhong\nHong Kong Team Champion 2002 ",
      "fen": "2bak4/4a4/2n1b4/4p4/2p5P/3R2R2/2P1P4/N1C1B2r1/5r1c1/2BAKA1Nc b - - 0 1",
      "id": "puzzle_1867",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5f20\u5fd7\u594e - WENG ChuGuang\nHong Kong Team Champion 2002 ",
      "fen": "CRbakn3/nN1R3c1/3abc3/2p1p3p/6p2/P1P6/4P3P/6NrB/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1868",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI YongGuan - WU Qiang\nHong Kong Team Champion 2002 ",
      "fen": "4kab2/4a4/2nc5/p1p1p3p/9/2P3R2/P1c3P1P/R1NrB1N2/C2r5/2BAKA3 b - - 0 1",
      "id": "puzzle_1869",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHONG Ming - ZHANG ZhiFeng\nHong Kong Team Champion 2002 ",
      "fen": "4kab2/4a4/9/9/p1NC2P2/9/4p4/B4A3/3K4c/4nA1c1 b - - 0 1",
      "id": "puzzle_1870",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WENG Weiqiang - CHAN Tat Tai\nHong Kong Team Champion 2002 ",
      "fen": "2bak4/4a4/c3b1Cc1/pC2N3p/1n7/4P4/P4n2P/2p1K3B/3R5/1N1A1rB2 b - - 0 1",
      "id": "puzzle_1871",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAI Robin - WONG Hok Him\nHong Kong Team Champion 2002 ",
      "fen": "CrbaknRc1/3R5/3c1a1r1/2N5p/P1b6/4P4/6p2/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1872",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG Chulin - WANG HaoChang\nHong Kong Team Champion 2002 ",
      "fen": "2bakab2/9/2n3R1c/p3p3p/9/2BN5/P3P4/1C3KN1B/3CA2r1/1R1A2r1c b - - 0 1",
      "id": "puzzle_1873",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u674e\u660e\u8d50 - \u6234\u632f\u5b87\nHong Kong Team Champion 2002 ",
      "fen": "4k4/3P5/4b4/2n2N3/6b2/2B5P/9/3AB4/3C5/3K1A3 w - - 0 1",
      "id": "puzzle_1874",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG BingWei - ZHANG ZhiFeng\nHong Kong Team Champion 2002 ",
      "fen": "1C1k1ab2/2P2P3/3cb4/9/p3c4/1N2C1B2/P1N5P/B2K5/n3A4/5A3 w - - 0 1",
      "id": "puzzle_1875",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG WenChang - CEN Pei Shi\nHong Kong Team Champion 2002 ",
      "fen": "5aC2/3kaN1C1/2n1bc3/p3pn3/2p5p/6R2/r3P3P/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1876",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUNG WenWei - \u5ed6\u6210\nHong Kong Team Champion 2003 ",
      "fen": "2bR4C/4nk3/4b4/4p1p1p/2p1c4/5r3/2P5P/N3B4/4A4/2B1KA1R1 w - - 0 1",
      "id": "puzzle_1877",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TAN Jing Yang - \u4f55\u5149\u6c49\nHong Kong Team Champion 2003 ",
      "fen": "3k1a3/4aR2C/2ncb1N2/p8/4p4/2p6/P3P4/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1878",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHONG Ming - \u90b1\u9038\u90a6\nHong Kong Team Champion 2003 ",
      "fen": "6b2/5k1N1/4Pa2n/9/5N2p/2B2C3/6P2/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1879",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU FaQiang - WU WeiHao\nHong Kong Team Champion 2003 ",
      "fen": "3c1Rbc1/3k4n/3a5/p4N3/6P1p/9/P3N3P/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1880",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HE GuoPing - LIANG ShuRen\nHong Kong Team Champion 2003 ",
      "fen": "3k2b2/4a1N2/3ab4/3PP4/3C5/4n1B2/4c4/5A3/4A4/3K2B2 w - - 0 1",
      "id": "puzzle_1881",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIANG Yuan Zhong - \u8521\u4e1a\u6797\nHong Kong Team Champion 2003 ",
      "fen": "2bak4/3P5/4CR2b/4p4/3P5/5r3/9/9/4A4/5K3 w - - 0 1",
      "id": "puzzle_1882",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HE GuoPing - \u9ec4\u5609\u4f1f\nHong Kong Team Champion 2003 ",
      "fen": "2b1ka3/9/2nR4c/p7p/2p2PN2/1R7/P3P3P/n8/3KA4/r4A3 w - - 0 1",
      "id": "puzzle_1883",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIANG ShuRen - HONG HaiFeng\nHong Kong Team Champion 2003 ",
      "fen": "R1bk1a3/4a4/4N4/9/p1p6/9/9/4BC3/1cn1AK3/2BA3r1 b - - 0 1",
      "id": "puzzle_1884",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u90b1\u9038\u90a6 - \u674e\u8d5e\u5b89\nHong Kong Team Champion 2003 ",
      "fen": "2bak4/4a1R2/c3b4/p6rp/4p1p2/9/P4NP1P/6N2/2n1K4/2BA1AB2 b - - 0 1",
      "id": "puzzle_1885",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5434\u4ee5\u7433 - \u9ec4\u88d4\u660c\nHong Kong Team Champion 2003 ",
      "fen": "3k1abC1/9/9/p1p2r2p/4c4/2P5P/P3P4/3A2R1B/2cK5/3A5 b - - 0 1",
      "id": "puzzle_1886",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU Qiang - \u674e\u5609\u8f89\nHong Kong Team Champion 2003 ",
      "fen": "2bk1a3/2n1a4/3R5/p1p2PR1p/4p1b2/P1P5n/9/B3r4/3rA4/4KA3 b - - 0 1",
      "id": "puzzle_1887",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHOU Chaowei - CHEN BoHui\nHong Kong Team Champion 2003 ",
      "fen": "4ka3/4a4/4b4/p8/6b1p/P1B3C2/1R2p1C1P/3A1K3/1c5r1/2cA5 b - - 0 1",
      "id": "puzzle_1888",
      "title": "Mate in 2 moves"
    },
    {
      "description": "OU HanMin - \u8c2d\u666f\u6df1\nHong Kong Team Champion 2003 ",
      "fen": "3aka3/3R5/4b4/n3p3p/2P3n2/C4R3/P3Pp2P/2N2A2B/4K1cr1/2BA4c b - - 0 1",
      "id": "puzzle_1889",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5362\u6807 - ZHANG GuoTai\nHong Kong Team Champion 2003 ",
      "fen": "3Rkab2/5n3/b8/p3C4/6p2/2P6/P3P3P/2N1B4/4Arc2/4K2c1 b - - 0 1",
      "id": "puzzle_1890",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u4f0d\u4fca\u5112 - CHEN BoHui\nHong Kong Team Champion 2003 ",
      "fen": "3rkabr1/4a4/1cn1b4/p3p1R1p/2p2N3/3C2B2/P3P1n1P/R2C2N2/3c5/2B1KA3 b - - 0 1",
      "id": "puzzle_1891",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8521\u4e1a\u6797 - \u4e25\u9274\u5a01\nHong Kong Team Champion 2003 ",
      "fen": "6b2/1N2P4/5k3/p3p3p/3c5/2p6/2n3C1P/2C3n2/3K4c/2BA1A3 b - - 0 1",
      "id": "puzzle_1892",
      "title": "Mate in 2 moves"
    },
    {
      "description": "PENG Rui Quan - \u9648\u5b66\u57fa\nHong Kong Team Champion 2003 ",
      "fen": "c1b1kab2/3na4/4c4/p3CNp1p/1rp6/2P3P2/P3P3P/3RC4/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1893",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YUNG Tak Keung - WONG Chi Keung\nHong Kong Team Champion 2003 ",
      "fen": "3a5/4k4/3abN3/6N1p/1R7/2P6/8P/4BA3/4r4/4K1c2 w - - 0 1",
      "id": "puzzle_1894",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG GuanZhong - XU BingKui\nHong Kong Team Champion 2003 ",
      "fen": "1r1a2bR1/5k2C/4ba3/p1pnpNn1p/5c3/2P6/P3P3P/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1895",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5c91\u4f69\u4ed5 - ZHENG Yingkang\nHong Kong Team Champion 2003 ",
      "fen": "2Rn1cb2/3ka4/4b3r/2n1P3p/6p2/2p6/6P1P/Nc7/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1896",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG YanLong - WU Qiang\nHong Kong Team Champion 2011 ",
      "fen": "5a3/3ka4/9/8p/2p3r2/RN7/2P1P1pcP/4C3B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1897",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5f6d\u5e38\u4f1f - \u674e\u6587\u6cf0\nHong Kong Team Champion 2011 ",
      "fen": "3k1ab2/4a4/4b4/6C2/4P4/8c/5p3/5A3/4AK1n1/9 b - - 0 1",
      "id": "puzzle_1898",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u90ed\u5c55\u6e90 - LUN Zi Yun\nHong Kong Team Champion 2011 ",
      "fen": "4ka3/4a4/4bP3/p5P2/9/9/3c5/9/4p4/3n1KB2 b - - 0 1",
      "id": "puzzle_1899",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU WeiHao - ZHENG Haiying\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/4b3n/p2PC1p2/2r1P3p/P5P2/1Rn1N3P/B3C4/c3A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1900",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ec4\u6c38\u5bcc - \u53f6\u4e91\u9f99\nHong Kong Team Champion 2011 ",
      "fen": "2ba1ab2/3k5/8n/4C1p1p/1r7/4C4/P1P1P1P1P/N8/5R3/c1BAKAB2 w - - 0 1",
      "id": "puzzle_1901",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG ZiQiang - \u9648\u9547\u70fd\nHong Kong Team Champion 2011 ",
      "fen": "C1rak4/9/b2Rb4/p2R4p/5n3/4p4/P8/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1902",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZOU Forthee - \u5434\u4ee5\u7433\nHong Kong Team Champion 2011 ",
      "fen": "2b1kab2/4a4/3c5/p7N/6p2/P1B1p3P/5n3/4B4/3KA1n2/5A1C1 b - - 0 1",
      "id": "puzzle_1903",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u90b1\u4ee5\u5cb3 - \u8c22\u6cc9\u5bbd\nHong Kong Team Champion 2011 ",
      "fen": "3a5/1C1na4/4k3C/p5p1p/5R3/6P2/P7P/4B4/4A4/2Br1K3 w - - 0 1",
      "id": "puzzle_1904",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8c22\u6cc9\u5bbd - ZHOU Yi\nHong Kong Team Champion 2011 ",
      "fen": "1nb1kn3/1C1R5/r1c1b4/p8/6p2/3R5/P1P1P1P1P/6N2/9/2BK1AB2 w - - 0 1",
      "id": "puzzle_1905",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5434\u4e9a\u5229 - HUNG WenWei\nHong Kong Team Champion 2011 ",
      "fen": "3k1a3/9/3N2NC1/9/3P5/9/P2n4P/B3B4/4A1n2/1c1K5 w - - 0 1",
      "id": "puzzle_1906",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u5065\u8f89 - \u4f59\u4fca\u8d24\nHong Kong Team Champion 2011 ",
      "fen": "1rb1kab2/2Rca4/9/pC4p1p/4r4/P8/2P5P/N4A3/3K5/1R1A5 b - - 0 1",
      "id": "puzzle_1907",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN BingQuan - WANG TieMing\nHong Kong Team Champion 2011 ",
      "fen": "3a1kb2/4a4/9/1P7/2b2C3/3c5/8P/4p4/2nKA4/2B6 b - - 0 1",
      "id": "puzzle_1908",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NG Chun Hei - \u674e\u6587\u6cf0\nHong Kong Team Champion 2011 ",
      "fen": "1r2ka3/4a4/4N4/p2R4p/4C2r1/5n1p1/P7P/4B4/4A4/2BK1Ac2 w - - 0 1",
      "id": "puzzle_1909",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u82cf\u4fca\u5f3a - MAI ChangXing\nHong Kong Team Champion 2011 ",
      "fen": "3a1k3/1R2a4/4b3n/p7p/6b2/2N1C3P/4P4/5r3/n8/c3K4 b - - 0 1",
      "id": "puzzle_1910",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG JinCong - \u7f2a\u5bb6\u8f89\nHong Kong Team Champion 2011 ",
      "fen": "2R2ab2/3kaR3/6N1r/p5r1p/2p3p2/9/P1P3P1P/9/4C4/2BAKAB2 w - - 0 1",
      "id": "puzzle_1911",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIAO Hao Ran - YE Hui\nHong Kong Team Champion 2011 ",
      "fen": "2bak2C1/3Ra3N/2n2r3/p5p2/2p6/9/Pcc5P/B1r6/4R4/3AKA3 b - - 0 1",
      "id": "puzzle_1912",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIAO Hao Ran - \u6c5f\u5fb7\u4fe1\nHong Kong Team Champion 2011 ",
      "fen": "3akab2/9/4b4/p8/6N2/9/P1R3P2/B3r4/4A4/1c1K1AB2 w - - 0 1",
      "id": "puzzle_1913",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u90ed\u5c55\u6e90 - \u5f20\u5b66\u714c\nHong Kong Team Champion 2011 ",
      "fen": "3aka3/9/b7b/p3p4/4n3p/P1P1N4/4n3P/3K5/4A4/1N5r1 b - - 0 1",
      "id": "puzzle_1914",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHOU ShiJie - LEI Kam Fun\nHong Kong Team Champion 2011 ",
      "fen": "C1bak4/9/2c1b4/2NCp4/5c3/3p2P2/P3P4/4n4/4A4/3K1A3 b - - 0 1",
      "id": "puzzle_1915",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAI Robin - \u5ebe\u542f\u4e30\nHong Kong Team Champion 2011 ",
      "fen": "2R6/3ka1NC1/3a5/p5P1p/2n6/9/c1r1P4/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1916",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHONG Jiangning - \u5f6d\u6d69\u5fb7\nHong Kong Team Champion 2011 ",
      "fen": "3k2b2/4PC1C1/4c2n1/N8/6c2/6B2/9/4B4/9/3AKA3 w - - 0 1",
      "id": "puzzle_1917",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u4f1f\u96c4 - \u7f57\u709c\u6770\nHong Kong Team Champion 2011 ",
      "fen": "2bak4/3ca4/4b3n/p8/4c4/4n4/9/4B4/3K5/5C3 b - - 0 1",
      "id": "puzzle_1918",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6881\u65e5\u5b81 - ZHOU Yehai\nHong Kong Team Champion 2011 ",
      "fen": "3k2r2/9/3N1R3/9/7PP/9/9/3AB4/c2pAK3/9 w - - 0 1",
      "id": "puzzle_1919",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIANG Yuan Zhong - \u6797\u98de\u864e\nHong Kong Team Champion 2011 ",
      "fen": "3n1a3/2Nc1k3/5ar2/p7p/4R4/4C4/P3P3P/BC7/9/3AKAB2 w - - 0 1",
      "id": "puzzle_1920",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI Qiu Sheng - ZHENG Yingkang\nHong Kong Team Champion 2011 ",
      "fen": "C2N1a3/1R2c4/5k3/8p/7n1/5rB2/P3P3P/1C2B4/9/4Kc3 w - - 0 1",
      "id": "puzzle_1921",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YU Ming - \u674e\u4f1f\u5f3a\nHong Kong Team Champion 2011 ",
      "fen": "3aka3/1N7/4c1n1b/8p/2p1p4/6r2/4P3P/1R4N2/6r2/3AKAB2 w - - 0 1",
      "id": "puzzle_1922",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u9547\u70fd - \u5362\u5b9d\u5149\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/3Cb1n2/pr1Np1p1p/9/2B2R3/P3P1P1P/4n1N2/3KA4/c4AB2 b - - 0 1",
      "id": "puzzle_1923",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9a6c\u5fd7\u626c - \u4f59\u4fca\u8d24\nHong Kong Team Champion 2011 ",
      "fen": "2ba1k1C1/4a4/n7b/p1p1p3p/5R3/P8/2P1cr2P/N3B4/4A4/3AK4 b - - 0 1",
      "id": "puzzle_1924",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u5146\u8f89 - \u9648\u8d2f\u6052\nHong Kong Team Champion 2011 ",
      "fen": "2b1kab2/9/3a5/9/9/9/3R5/2n1r4/3K5/9 b - - 0 1",
      "id": "puzzle_1925",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN YaoLin - \u738b\u5b50\u9f99\nHong Kong Team Champion 2008 ",
      "fen": "2raka3/4n4/b3N4/6p1p/9/2p6/P1P3P1P/4C1N2/9/1RBAKrB2 w - - 0 1",
      "id": "puzzle_1926",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u674e\u4ec1\u9686 - \u970d\u5fd7\u534e\nHong Kong Team Champion 2008 ",
      "fen": "4kab2/3Pa4/4b4/9/7c1/3r5/R8/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1927",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6881\u5b87\u701a - \u5f20\u51ef\u6770\nHong Kong Team Champion 2008 ",
      "fen": "2b1ka3/2NRa4/n8/p3p3p/9/2B2RB2/Pn6P/5K3/4A2r1/3A3r1 w - - 0 1",
      "id": "puzzle_1928",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u65bd\u4fca\u5b89 - \u90b1\u4ee5\u5cb3\nHong Kong Team Champion 2008 ",
      "fen": "2b4R1/4a1C1C/3abk3/2p6/pn4p2/9/P1P3P1P/9/4A4/2B1KrB2 w - - 0 1",
      "id": "puzzle_1929",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6e29\u5146\u826f - \u674e\u8d5e\u5b89\nHong Kong Team Champion 2008 ",
      "fen": "3akab2/9/4b4/4p3C/3R1np2/9/4c3P/2n1BA3/r3A2r1/4K1BNR b - - 0 1",
      "id": "puzzle_1930",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG TieMing - LIU YongLiang\nHong Kong Team Champion 2008 ",
      "fen": "4k4/4a4/4b4/3R5/p1c6/6B2/3p2n2/4B4/C3A4/3A1KCr1 b - - 0 1",
      "id": "puzzle_1931",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8521\u4e1a\u6797 - \u909d\u6d77\u7fd4\nHong Kong Team Champion 2008 ",
      "fen": "2bak3C/4a4/5c3/R7p/3rP4/2P3P2/4c4/5K3/4r4/2B5R b - - 0 1",
      "id": "puzzle_1932",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8521\u51a0\u4e1c - \u6797\u98de\u864e\nHong Kong Team Champion 2008 ",
      "fen": "2bak2C1/4a4/4c3b/p2CR1p1p/7c1/P1B3P2/1r6P/2n1B4/3KA4/5A3 b - - 0 1",
      "id": "puzzle_1933",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u65bd\u4fca\u5b89 - \u9648\u7ecd\u5b89\nHong Kong Team Champion 2008 ",
      "fen": "9/4N4/3k5/p3R3p/9/2P1p4/P5P1P/2r6/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1934",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6234\u632f\u5b87 - \u4f55\u4f5c\u6cc9\nHong Kong Team Champion 2008 ",
      "fen": "4kab2/4a4/4b4/1R6p/pn4p2/8P/4c4/B1NCBCn2/3K5/3A1r3 b - - 0 1",
      "id": "puzzle_1935",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LONG GuangMing - \u5173\u5fd7\u5f3a\nHong Kong Team Champion 2008 ",
      "fen": "1rb1k4/1C1R1P3/3R5/p1p5p/9/2P6/P2cr3P/2N1n4/4A4/3K1pB2 w - - 0 1",
      "id": "puzzle_1936",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU WeiHao - HUANG Haoyi\nHong Kong Team Champion 2008 ",
      "fen": "3k1ab2/4a4/b5N2/9/4c4/2P1C1B2/8c/5p3/3nC4/3A1K3 b - - 0 1",
      "id": "puzzle_1937",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NG Wing Sang - \u9ec4\u9707\u5f3a\nHong Kong Team Champion 2008 ",
      "fen": "3a1k3/2C1a4/6R2/4N3p/1n4c2/9/P3p3P/4B4/4A4/4KrB2 w - - 0 1",
      "id": "puzzle_1938",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u7199\u6587 - \u67ef\u55bb\nHong Kong Team Champion 2008 ",
      "fen": "4kab1C/4a4/9/9/3R5/p7P/3n5/4B4/9/2BAKA1r1 b - - 0 1",
      "id": "puzzle_1939",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ec4\u82cf\u5174 - \u6e29\u5146\u826f\nHong Kong Team Champion 2008 ",
      "fen": "3ak4/9/3ab1P2/pr1Cp2N1/1nR6/9/2P1P4/N3B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_1940",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u5065\u8f89 - ZHENG Haiying\nHong Kong Team Champion 2008 ",
      "fen": "4kab2/4a4/2P1bc3/p3pR2p/5cp2/PC1r5/4P3P/N1C3N2/4A1n2/2BA1K3 b - - 0 1",
      "id": "puzzle_1941",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG HaoChang - \u5f6d\u5c11\u521a\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/3Pa4/9/8p/7R1/9/r6c1/3A5/7C1/2BAK1B2 w - - 0 1",
      "id": "puzzle_1942",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ece\u7f8e\u656c - \u909d\u6d77\u7fd4\nHong Kong Team Champion 2008 ",
      "fen": "4k1b2/4a4/2nab4/p1PNp3p/6p2/2P6/P2Cc3P/1r1C2c1R/9/R1BK1AB2 b - - 0 1",
      "id": "puzzle_1943",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ec4\u82cf\u5174 - \u9ec4\u9707\u5f3a\nHong Kong Team Champion 2008 ",
      "fen": "1Cba1R3/9/4kc3/n2Np3p/2P6/2C6/4cr3/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_1944",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u4f55\u4f5c\u6cc9 - \u6797\u98de\u96c4\nHong Kong Team Champion 2008 ",
      "fen": "2bak4/5R3/4n4/4p3p/2rr2R2/9/4P3P/1C2BC3/1n2A4/4KAB2 w - - 0 1",
      "id": "puzzle_1945",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u7530\u4fca\u5f6c - \u8521\u4e1a\u6797\nHong Kong Team Champion 2008 ",
      "fen": "2b1ka3/4a4/4b4/8p/p1p1C4/3R5/2Pc5/N7B/4A4/2BK1A3 w - - 0 1",
      "id": "puzzle_1946",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5c91\u4f69\u4ed5 - \u5434\u8d85\u4f1f\nHong Kong Team Champion 2008 ",
      "fen": "9/4k4/1R3a3/6p1p/P8/2p2C3/3c1nP1P/Nn2B4/9/2rAKA3 b - - 0 1",
      "id": "puzzle_1947",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DONG YuRong - LU GuangDa\nHong Kong Team Champion 2008 ",
      "fen": "cr2kab2/3Pa4/4b4/p5R1p/4C4/9/P3Ppn1P/6N2/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_1948",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u7199\u6587 - \u9648\u5609\u6717\nHong Kong Team Champion 2008 ",
      "fen": "3Rk1b2/4a4/4b4/p8/8p/P8/2P6/8B/2rNr4/3K5 b - - 0 1",
      "id": "puzzle_1949",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6881\u5b87\u701a - \u9ec4\u4fca\nHong Kong Team Champion 2008 ",
      "fen": "3ak1b2/3RaC3/2n1b4/p1C1p1p2/8p/1c1Nc1P2/P2r2n2/1N3K3/9/3A1A3 b - - 0 1",
      "id": "puzzle_1950",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEI Xong Cai - \u674e\u9521\u534e\nHong Kong Team Champion 2008 ",
      "fen": "5R3/3k5/6N2/9/P8/9/9/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_1951",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN ShaoHeng - \u5434\u6b23\u6cfd\nHong Kong Team Champion 2008 ",
      "fen": "2b1ka3/4a4/4b4/8R/2P6/9/8P/9/4A4/r1n2K3 b - - 0 1",
      "id": "puzzle_1952",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUNG WenWei - LEI Kam Fun\nHong Kong Team Champion 2008 ",
      "fen": "4R4/3C1k3/3a1a3/8p/2C6/6B2/P2ppr2P/3A1n3/9/4K4 w - - 0 1",
      "id": "puzzle_1953",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LONG GuangMing - CHEN YaoLin\nHong Kong Team Champion 2008 ",
      "fen": "3a5/4c4/3P1k3/9/9/4R3p/9/2n1B4/9/2B1K4 w - - 0 1",
      "id": "puzzle_1954",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ad8\u5b50\u9633 - \u7f57\u9526\u6c9b\nHong Kong Team Champion 2008 ",
      "fen": "2bak4/4a4/2N1b4/p7p/9/4p3P/cn2c4/4B4/4A3C/4KAB2 b - - 0 1",
      "id": "puzzle_1955",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u53f6\u6717 - \u9ec4\u9707\u5f3a\nHong Kong Team Champion 2008 ",
      "fen": "3ckab2/9/3a5/5R3/9/4r1P2/8P/9/5K3/5An2 b - - 0 1",
      "id": "puzzle_1956",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG YanLong - ZHOU ShiJie\nHong Kong Team Champion 2008 ",
      "fen": "2bak1n2/4a4/4b4/prC3p1p/9/4P4/P1RR4P/2N6/4A4/3K1Arc1 b - - 0 1",
      "id": "puzzle_1957",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG ZiQiang - WU Qiang\nHong Kong Team Champion 2009 ",
      "fen": "C3k1b2/1R2aR3/4c4/9/6rr1/2P5p/9/4B1p2/4A4/2BAKN3 w - - 0 1",
      "id": "puzzle_1958",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6881\u5149\u660e - \u9a6c\u5fd7\u626c\nHong Kong Team Champion 2009 ",
      "fen": "4kab2/4a4/2C1b4/p3C1n1p/6p2/9/P1P1P1c1P/3R2N1B/3cA1r2/1NBK1A3 w - - 0 1",
      "id": "puzzle_1959",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u82cf\u4fca\u5f3a - \u9648\u7acb\u626c\nHong Kong Team Champion 2009 ",
      "fen": "5Rb2/3k5/4b4/p8/8p/P8/1r1r3c1/6R2/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1960",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u66fe\u6c38\u52e4 - \u8c2d\u6d69\u6587\nHong Kong Team Champion 2009 ",
      "fen": "5Rb2/2Nkc4/4b4/4p1p2/r6rp/2P6/4P3P/3C4B/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1961",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6881\u9896\u5cf0 - \u8c2d\u8000\u660c\nHong Kong Team Champion 2009 ",
      "fen": "2Rak1r2/4aR3/3cc3b/p8/3rC3p/3pP1P2/P7P/2N1B1N2/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_1962",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5f20\u8fbe\u671b - \u738b\u5bb6\u9a8f\nHong Kong Team Champion 2009 ",
      "fen": "2ba1k3/4a4/4b1n2/p1p3C2/4p3p/PN2c4/2P2r2P/4BA3/3C5/2BA1KnR1 b - - 0 1",
      "id": "puzzle_1963",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u5146\u8f89 - ZHU Tue\nHong Kong Team Champion 2009 ",
      "fen": "2baka1R1/9/2n1b4/p3p3p/2p6/4r2n1/Prc4RP/BCN6/2c1A3N/3AK4 b - - 0 1",
      "id": "puzzle_1964",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6797\u4e16\u6587 - \u4f0d\u9707\u6607\nHong Kong Team Champion 2009 ",
      "fen": "3R2b2/4Nk3/4b4/8p/2pN1n3/4C4/3rPr2P/C8/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_1965",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHOU Junchang - \u8bb8\u5b87\u7fd4\nHong Kong Team Champion 2009 ",
      "fen": "2bak1b2/4a1c2/9/4p1P1p/1n7/9/rN1RP3P/4B2c1/5r3/3AKAB2 b - - 0 1",
      "id": "puzzle_1966",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9ec4\u82cf\u5174 - \u5362\u9526\u534e\nHong Kong Team Champion 2009 ",
      "fen": "3Rkab2/9/9/p3p3p/6p2/P2rc4/2P5P/2N1B3n/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_1967",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5f20\u5b50\u61cb - \u5c91\u4f69\u4ed5\nHong Kong Team Champion 2009 ",
      "fen": "r2ak1b2/4a4/4b4/p4R2p/2p1C1p2/9/5c2P/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1968",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u5b50\u5f18 - \u6797\u632f\u8f89\nHong Kong Team Champion 2009 ",
      "fen": "2ba1a3/5k3/4b1N2/p2C2c1p/2P1C4/4P4/P7P/N3pn3/3KA4/5A1c1 b - - 0 1",
      "id": "puzzle_1969",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHONG Xi - \u51af\u67cf\u71ca\nHong Kong Team Champion 2009 ",
      "fen": "3a1a3/5k3/9/p3R3p/4N4/3p5/P3P4/4B4/4Ar1p1/3AK3c w - - 0 1",
      "id": "puzzle_1970",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YE HaiFan - CHIU Yu Kuen\nHong Kong Team Champion 2009 ",
      "fen": "5ar2/4k4/2nNb4/C7R/2p3p2/4p4/P1c3P1P/9/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1971",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6797\u8f89 - ZHENG Weicheng\nHong Kong Team Champion 2009 ",
      "fen": "1r1k1a3/4a2C1/1cn1Nc2b/pR4R1p/9/2P1np3/P2rN3P/9/4A1C2/2BAK1B2 w - - 0 1",
      "id": "puzzle_1972",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8521\u5146\u6bb7 - LI Wen Di\nHong Kong Team Champion 2009 ",
      "fen": "2bak4/4aR3/3cb1C2/p3p4/2p3p2/8p/2P5N/3C5/4A4/crBAK1BR1 w - - 0 1",
      "id": "puzzle_1973",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8c2d\u8000\u660c - \u6797\u6770\u8d24\nHong Kong Team Champion 2009 ",
      "fen": "2N1ka3/3P5/3N1a3/2P5p/6b2/9/1n7/4pA3/2n1A4/1C3K3 w - - 0 1",
      "id": "puzzle_1974",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG Haiying - \u9a6c\u4e39\u7487\nHong Kong Team Champion 2009 ",
      "fen": "C3kabn1/n3a4/4c4/2P1C3r/8p/5rp2/4P1c1P/2N3N2/9/1RBAKABR1 w - - 0 1",
      "id": "puzzle_1975",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9a6c\u5fd7\u626c - CHEN Run Xiang\nHong Kong Team Champion 2009 ",
      "fen": "2bakabr1/4n4/4c4/p1p1p3p/2r6/3C5/P2C2R1P/R1N1Bn3/4K4/2B2A1c1 b - - 0 1",
      "id": "puzzle_1976",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SU FuYin - \u5b98\u7ef4\u6b63\nHong Kong Team Champion 2009 ",
      "fen": "3akabC1/9/4b4/p1n1p1Nn1/2r6/6P2/P8/9/5R3/2BAKAB2 w - - 0 1",
      "id": "puzzle_1977",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XIAO JinHua - HUANG BingWei\nHong Kong Team Champion 2009 ",
      "fen": "C2RR4/5k3/4b4/4p4/2b5p/1r3r3/8P/8B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_1978",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU BingKui - CENG Ni Zhang\nHong Kong Team Champion 2009 ",
      "fen": "2R6/3k5/crna5/p4R2p/9/6p2/P3P1c1P/N2rC1n2/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_1979",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9a6c\u9756 - ZHU Tue\nHong Kong Team Champion 2009 ",
      "fen": "4k1bn1/4a4/1R2c4/p3p1p1C/9/2p3P1P/P4r3/2r1B3B/4K4/3A3c1 b - - 0 1",
      "id": "puzzle_1980",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZOU Forthee - \u8427\u9526\u6743\nHong Kong Team Champion 2009 ",
      "fen": "4kab2/4a4/4b4/p3pR2p/9/6P2/4P2rP/3nC1c1B/2c1A4/2BA1K3 b - - 0 1",
      "id": "puzzle_1981",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u8521\u6c38\u8c6a - \u5218\u4f1f\u6210\nHong Kong Team Champion 2009 ",
      "fen": "4ka1r1/4a4/2n1b4/pRp1p3p/6p2/2r6/P3P1c1P/CC4N1B/4AK3/2cA5 b - - 0 1",
      "id": "puzzle_1982",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u5146\u8f89 - \u9648\u4f1f\u6770\nHong Kong Team Champion 2009 ",
      "fen": "4k1b2/4a4/3ab1N2/p7p/2p3p2/9/Pn6P/3r5/4N4/4K1B2 b - - 0 1",
      "id": "puzzle_1983",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Zhuo Hao - \u5173\u5fd7\u5f3a\nHong Kong Team Champion 2009 ",
      "fen": "1Nbk5/4a4/3a5/4C3P/9/5n3/2p6/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_1984",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u7f2a\u5bb6\u8f89 - \u5f20\u8fbe\u5149\nHong Kong Team Champion 2009 ",
      "fen": "2bak4/4a2N1/4b4/1N2C4/7P1/3r5/8p/3AB4/4Ac3/4K1B2 w - - 0 1",
      "id": "puzzle_1985",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5ed6\u97e6\u5c27 - \u9648\u7acb\u626c\nHong Kong Team Champion 2009 ",
      "fen": "2b1ka3/1N3P3/3a4b/C7p/p1p3p2/8P/P2n2c2/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_1986",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u51af\u8000\u548c - \u5f20\u5747\u6e90\nHong Kong Team Champion 2009 ",
      "fen": "C2k1ab2/1C2a4/2crb4/4p2PP/2c6/4P4/3R5/B8/2N1A4/2BAK4 b - - 0 1",
      "id": "puzzle_1987",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HUANG Haoyi - \u6e29\u5146\u826f\nHong Kong Team Champion 2009 ",
      "fen": "2bakn3/9/2nab2cr/p1pNp2N1/8p/2P6/c3P3P/C6C1/6R2/2BAKAB2 w - - 0 1",
      "id": "puzzle_1988",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHAN Ling Fai - ZHANG WenChang\nHong Kong Individual Championship 2002 ",
      "fen": "1C3k3/C8/3Rba3/4p3p/p1p6/9/9/4r4/4A4/4K4 w - - 0 1",
      "id": "puzzle_1989",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN De - DING JianQuan\nHong Kong Individual Championship 2002 ",
      "fen": "2bRka3/9/4b4/9/8p/6B2/8P/2nA3R1/3K5/4r4 b - - 0 1",
      "id": "puzzle_1990",
      "title": "Mate in 2 moves"
    },
    {
      "description": "TENG Siong Liang - SHOSHI Kazuharo\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "4kab2/2r1a4/4bc3/9/9/4C4/1R6P/4B4/4A4/c1BAK4 w - - 0 1",
      "id": "puzzle_1991",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MA ZhongWei - JIANG QingMing\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "1c1akn3/4a4/4b3b/2C3P1p/2n1N4/C8/5c2P/N8/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_1992",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - MA ZhongWei\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "3a1kb2/1C7/4b4/1N1R5/5r2p/6P2/2nn4P/4B4/3pA4/4KAB2 b - - 0 1",
      "id": "puzzle_1993",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN TuJiong - CHOW Keng Wa\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "3k5/9/3P1N3/2nc5/2b6/P2N5/9/5A3/9/4K4 w - - 0 1",
      "id": "puzzle_1994",
      "title": "Mate in 2 moves"
    },
    {
      "description": "QIU Liang - THIAN Min Nyap\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "5ab2/2Nkan3/9/p4N2p/4P1b2/2p6/P2Cc4/9/4A4/1cBA1K3 w - - 0 1",
      "id": "puzzle_1995",
      "title": "Mate in 2 moves"
    },
    {
      "description": "THIAN Min Nyap - KUANG JinGuang\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "4kab2/4a4/2n1b4/p1p1p3P/4c1p2/2P6/P4r3/4rR2B/1n2A4/2BAK2R1 b - - 0 1",
      "id": "puzzle_1996",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NGUYEN HoangLam - \u88f4\u9633\u73cd\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "4ka3/9/4ba3/2C2N1c1/P1b6/2B1P4/7r1/6R1B/3nA4/3AK4 w - - 0 1",
      "id": "puzzle_1997",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Meng Ju - \u9648\u9756\u5a97\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "3a5/4k3C/3a5/p5p2/2bN1P2p/5C3/5r3/9/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_1998",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHANG Diana - CHEN LiChun\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "4kab2/4a4/2P1b4/p8/8p/6P2/2RR4P/7r1/3r5/2BAKABc1 b - - 0 1",
      "id": "puzzle_1999",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU YinChuan - CAI Yi\nChina National Xiangqi League 2011 ",
      "fen": "2bk1a3/2P6/3a2c2/3P3N1/2b3C1p/2Bn5/9/3A1A3/4K4/2p3B2 w - - 0 1",
      "id": "puzzle_2000",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CAI Yi - HAO JiChao\nChina National Xiangqi League 2011 ",
      "fen": "2C1k1b2/9/3a5/P8/6b2/9/9/2c2R3/1c2A4/2B1K4 b - - 0 1",
      "id": "puzzle_2001",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Li Hong Jia - JIN So\nChina National Xiangqi League 2011 ",
      "fen": "3a1a3/C3k4/b2P5/2nN1P3/3n5/9/5p3/4BA3/4A4/2B2K3 w - - 0 1",
      "id": "puzzle_2002",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG YiHong - WANG YueFei\nChina National Xiangqi League 2011 ",
      "fen": "2bak4/4a4/4b4/C3p3p/N8/P3cN3/1n1c4P/4BA3/3K5/5AB2 b - - 0 1",
      "id": "puzzle_2003",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU DaHua - ZHAO GuoRong\nChina National Xiangqi League 2011 ",
      "fen": "2b4R1/3Ca2R1/3c1k3/4r3p/1np3b2/9/2P5P/N2Ac3B/4K4/3A5 w - - 0 1",
      "id": "puzzle_2004",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Lv Qin - DONG Fei\nChina National Xiangqi League 2011 ",
      "fen": "c1r1kab2/1N2a4/1P2b4/4C4/n7p/9/5p2P/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2005",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG RuiXiang - WANG Bin\nChina National Xiangqi League 2011 ",
      "fen": "1C2kab2/4a4/3rb4/pN2p3p/9/P3c4/1R1R4P/2r6/4An3/3K1AB2 b - - 0 1",
      "id": "puzzle_2006",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO XinXin - WOO Tsung Han\nHuaiyin - Han Cup International Xiangqi Tournament 2011 ",
      "fen": "3akab2/9/9/N1C1p4/2b2c2p/P4n3/8P/3ApA2B/5K3/6B2 b - - 0 1",
      "id": "puzzle_2007",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WANG LinNa - CHEN LiChun\n2011 World Mind Games Chess Classic Trials 2011 ",
      "fen": "3a1kb2/3ca4/4b3n/3N2p2/4C3p/P2p2P2/4P3c/4B4/4AC3/4KAB2 w - - 0 1",
      "id": "puzzle_2008",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI DeZhi - \u9648\u4e91\u8d35\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "5a3/3k5/4ba3/r7p/p3C4/9/P3R3P/4B1p2/2nCA4/3AK4 w - - 0 1",
      "id": "puzzle_2009",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG HuaMing - \u5f20\u6625\u71d5\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "1C4R2/4ak3/3anr3/p3p3p/2b6/4c4/P7P/1C2B1N2/4A4/4KA3 w - - 0 1",
      "id": "puzzle_2010",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u4f55\u6587\u54f2 - ZHANG HuaMing\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "3R2b2/4R4/5kn2/8p/9/6p2/4P3P/3N5/rC2K1c2/2B2r3 w - - 0 1",
      "id": "puzzle_2011",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG Chuan - HONG Zhi\n2011 The 1st Chongqing Qianjiang Cup National Xiangqi Championship Tournament 2011 ",
      "fen": "3P1k3/9/3abP3/9/1C4b1c/9/9/5A3/9/2B1KAB2 w - - 0 1",
      "id": "puzzle_2012",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN HaiYing - CHEN LiChun\n2011 The 1st Chongqing Qianjiang Cup National Xiangqi Championship Tournament 2011 ",
      "fen": "2bak4/5cN2/4ba3/p2R5/1C7/9/P7P/3AB4/4K1n2/2B2r3 b - - 0 1",
      "id": "puzzle_2013",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIN HaiYing - YOU YingQin\n2011 The 1st Chongqing Qianjiang Cup National Xiangqi Championship Tournament 2011 ",
      "fen": "2ba1k3/4a1P2/9/3R5/6b2/4N4/4P4/3KBr2B/2n6/c2A1A3 b - - 0 1",
      "id": "puzzle_2014",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6f58\u5f66\u6587 - CENG XianWei\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2b1k1c2/9/4P4/3N5/3r5/9/5R3/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2015",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6c60\u7530\u5f69\u6b4c - LIN ShiXiong\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "4kab2/4a4/4b4/p1p6/1r7/2Pn5/4p4/9/Nc2K1n2/1RBA1AB2 b - - 0 1",
      "id": "puzzle_2016",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MOU HaiQin - NGO Lan Huong\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2ba5/4a2R1/2n1ck1N1/p5n1p/2p6/3p2B2/P7P/4BA3/4A4/4K4 w - - 0 1",
      "id": "puzzle_2017",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LAY Kan Hock - TANAKA Atsushi\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "1C1R1ab2/4c2R1/4k4/p5r1p/2p6/6p2/P1P1P3P/2N1BA3/9/3AK3c w - - 0 1",
      "id": "puzzle_2018",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHENG Kah Siong - SHOSHI Kazuharo\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "r3kab2/1N2a4/4b4/p3C3p/4c1c2/P3np3/1R6P/4B4/2C1A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2019",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NGUYEN HoangLam - WENG Han Ming\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "r1b1ka3/3RCR3/7r1/p1N1n3p/2b3pn1/9/P3P3P/6c2/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2020",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN FaZuo - KUANG JinGuang\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "6N2/4P4/3kb2C1/9/4p4/1p7/4c2n1/4B4/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_2021",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LEI Xong Cai - CHENG Kah Siong\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "3a1ab2/1R1nk4/3Nb4/p3r4/9/2P3P1P/4P4/3CB4/4A4/crBAK4 w - - 0 1",
      "id": "puzzle_2022",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHIANG ChungHao - SHOSHI Kazuharo\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "3ak4/4a4/2nnb4/3N3R1/p1p2rb1p/6N2/P1P6/1r2C4/4A2c1/2B1KAB2 w - - 0 1",
      "id": "puzzle_2023",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CENG XianWei - WOO WeiCheung\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "4kab2/4a4/6n2/6NRp/2b1P4/3N5/8P/3A5/c4K1C1/1cBA2r2 b - - 0 1",
      "id": "puzzle_2024",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6881\u598d\u5a77 - CHEN XingLin\nChina Team Championship 2008 ",
      "fen": "2bk1ab2/4a4/9/8p/9/4Cc3/PN1n4P/4B4/5p3/3AK1B2 b - - 0 1",
      "id": "puzzle_2025",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN Yue - DONG Bo\nChina Team Championship 2008 ",
      "fen": "3k1a3/4a4/4b4/p1P6/3n5/P5Bp1/3p2C2/1N2B1n2/3K3c1/3A1A1N1 b - - 0 1",
      "id": "puzzle_2026",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI Chao - ZHOU ZhangXiao\nChina Team Championship 2008 ",
      "fen": "2bak4/3P1R3/9/p7p/9/4C4/3c5/9/4A1n2/2B1KAB2 w - - 0 1",
      "id": "puzzle_2027",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SHI JingJing - \u9f50\u8f89\nChina Team Championship 2008 ",
      "fen": "3R1kb2/4a4/4b4/p4P2p/1n7/6B2/P7P/4CK3/4r4/2r6 b - - 0 1",
      "id": "puzzle_2028",
      "title": "Mate in 2 moves"
    },
    {
      "description": "WU JunQiang - ZHENG FuJun\nChina Team Championship 2008 ",
      "fen": "2b3b2/4R1R2/3c1kn2/2p1p3p/r5p2/2P6/4P1P1P/4B1N2/4A4/2BrKA3 w - - 0 1",
      "id": "puzzle_2029",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHAO LiKim - SUN HaoYu\nChina Team Championship 2008 ",
      "fen": "4kab2/4a4/b1P6/3P4p/6p2/3N5/P2n1RP2/1r3n3/4AN3/4KABc1 b - - 0 1",
      "id": "puzzle_2030",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5c14\u6ee8\u738b\u5251\u950b\uff084\u53f0\uff09 - ZHAO Yan\nChina Team Championship 2008 ",
      "fen": "2bk5/4a4/4c4/p8/6p1p/P3R4/3C2P1P/2r1n1N2/9/4K4 b - - 0 1",
      "id": "puzzle_2031",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u76ae\u4f20\u6d2a - \u5f20\u4e00\u7537\nChina Team Championship 2008 ",
      "fen": "2bak4/4a4/4n4/p3n2Np/9/1N7/7RP/3AC3B/cr7/3A1K3 w - - 0 1",
      "id": "puzzle_2032",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u7ee5\u4e2d \u8463\u8d85 - \u7ee5\u4e2d \u6768\u6d77\u751f\n2010 The 1st Suizhong County Xiangqi League 2010 ",
      "fen": "4ka3/4a4/3nb4/pR7/4C1b1p/4p1B2/P7P/9/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2033",
      "title": "Mate in 2 moves"
    },
    {
      "description": "AN Nuo - \u5510\u601d\u6960\nWacker Real Estate Cup National  1st class tournament 2011 ",
      "fen": "5Rb2/3ka1R2/3rc4/p1p5p/9/2P3P2/P2n5/C2AK4/4A3r/9 b - - 0 1",
      "id": "puzzle_2034",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Li Hong Jia - \u8d56\u5b8f\nEarth Cup xiangqi tournament 2011 ",
      "fen": "r1ba1k3/1c1Ca1N2/n3b2R1/p1pnp3p/9/2P6/P3P1p1P/2N6/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2035",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHEN XingLin - OUYANG Qilin\nChinese National Champion 2011 ",
      "fen": "1CRa1k3/4a4/9/8p/p6c1/4n4/P1N5P/2r6/4K4/2BA1A3 b - - 0 1",
      "id": "puzzle_2036",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u79e6\u6717 - \u5ed6\u5e2e\u5747\n2011 Chongqing Chess Individual Qualifying 2011 ",
      "fen": "2b1ka3/4a4/4b3N/8p/p5n2/c6C1/3rP3P/1RN1B4/2n1K4/5AB2 b - - 0 1",
      "id": "puzzle_2037",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIA Dan - WU CaiFang\n2012 2nd SportAccord World Mind Games 2012 ",
      "fen": "3R5/3R3n1/r4k3/4P4/7r1/6B2/P3P3P/6N2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2038",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GAO FangQing - WU CaiFang\n2012 2nd SportAccord World Mind Games 2012 ",
      "fen": "r4a3/1R2a1N2/2Nkb1n2/p1P2R2p/9/4C4/P2r4P/9/9/2B1KAB2 w - - 0 1",
      "id": "puzzle_2039",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIA Dan - TANG Dan\n2013 Sport Accord World Mind Game WR2-1 ",
      "fen": "2nk1abC1/4a4/4b1R2/4p3p/p1p1c4/2Pr5/P2N4P/N3B4/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_2040",
      "title": "Mate in 2 moves"
    },
    {
      "description": "CHANG Diana - NGUYEN Hoang Yen\n2013 Sport Accord World Mind Game WR2-1 ",
      "fen": "3ak1b2/4a4/4b4/p1C1p1C2/4c1p2/2P5P/P3R1P2/4Brn2/6Rc1/1r1AK1BN1 b - - 0 1",
      "id": "puzzle_2041",
      "title": "Mate in 2 moves"
    },
    {
      "description": "BU FengBo - LIU LiShan\n2014 the 6 th Yang guanlin  Cup Open Group 2014 ",
      "fen": "4k4/5R3/4Na3/p1P6/8p/P5B2/6PnP/9/3KA4/3r5 w - - 0 1",
      "id": "puzzle_2042",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG LanTian - ZHAO JinCheng\n2014 the 6 th Yang guanlin  Cup Open Group 2014 ",
      "fen": "3ak4/4ac3/9/9/6bP1/2B3N2/7n1/3A5/4AK3/6B2 b - - 0 1",
      "id": "puzzle_2043",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MA ZhongWei - LEI Xong Cai\n2014 the 6th Yang guanlin Cup Over sea Group 2014 ",
      "fen": "4R4/3C1k3/4b1N2/2c1p3p/2b6/9/4P3P/4B4/4A4/3AKrB2 w - - 0 1",
      "id": "puzzle_2044",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u949f\u4e91\u9e64 - \u9648\u96c4\u5fe0\n2014\u5e74\u6d59\u6c5f\u201c\u767d\u9e64\u8336\u5858\u676f\u201d\u53f0\u5dde\u5e02\u7b2c\u4e8c\u5c4a\u8c61\u68cb\u5feb\u68cb\u8d5b 2014 ",
      "fen": "3k2b2/4a4/3ab4/5N2p/p8/5n3/P7P/4BR3/2R1K4/1r1r2B2 b - - 0 1",
      "id": "puzzle_2045",
      "title": "Mate in 2 moves"
    },
    {
      "description": "JIANG YeBin - LI JinXiong\n2014\u5e74\u5e7f\u4e1c\u4e1c\u839e\u51e4\u5c97\u9547\u8c61\u68cb\u8d5b\u516c\u5f00\u8d5b\u7b2c\u4e09\u5b63\u5ea6 2014 ",
      "fen": "1Cb4R1/5k3/3cCa3/p2Np4/9/9/P2n4P/3r5/4K2n1/2B3B2 b - - 0 1",
      "id": "puzzle_2046",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5434\u519b\u80dc - \u8d75\u56db\u6e05\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "C3kab2/2R1a3c/2N2nn2/3rp3p/6p2/2P6/P3P1P1P/4B1N2/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2047",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u7f57\u6797 - PAN Pan\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "2b1ka3/4a4/2c1b4/R5P2/9/2B1P4/9/9/4KR3/2rr1A3 b - - 0 1",
      "id": "puzzle_2048",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u674e\u6d2a\u91d1 - \u6c85\u98de\u9f99\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "3a3R1/2C1a4/4nk3/p3NnN1p/7r1/9/4P3P/4B4/4A4/3AK3c w - - 0 1",
      "id": "puzzle_2049",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Cheng JiJun - \u6c88\u601d\u51e1\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "2Rcka3/4a4/4b4/4C3p/pn2P1p2/9/6P1P/B6C1/4A4/3rK1B2 w - - 0 1",
      "id": "puzzle_2050",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u9648\u78a7\u7231 - \u6797\u60a6\n2014\u5e74\u798f\u5efa\u7701\u5168\u6c11\u5065\u8eab\u8fd0\u52a8\u4f1a\u201c\u7389\u6842\u676f\u201d\u8c61\u68cb\u8d5b\u5973\u5b50\u7ec4 2014 ",
      "fen": "2ba5/4k1N2/n4R3/p3C3p/2b4r1/6Bc1/P3P3P/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2051",
      "title": "Mate in 2 moves"
    },
    {
      "description": "MA SongYing - \u5434\u771f\n2014\u5e74\u798f\u5efa\u7701\u5168\u6c11\u5065\u8eab\u8fd0\u52a8\u4f1a\u201c\u7389\u6842\u676f\u201d\u8c61\u68cb\u8d5b\u5973\u5b50\u7ec4 2014 ",
      "fen": "3ckab2/4a4/2R6/2NR4p/2b6/9/r2pr3P/4C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2052",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIANG Jun - XU WenXue\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "C2k1ab2/4a4/4b4/3C4P/P2c5/5n3/9/4p4/3KA4/2B6 b - - 0 1",
      "id": "puzzle_2053",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LI HanLin - MIAO LiMing\n2014 China Xiangqi League 2014 ",
      "fen": "3k1a3/2RCa4/3c5/4c4/2b3b2/6B2/3r5/3N5/3K5/5AB2 b - - 0 1",
      "id": "puzzle_2054",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHUANG YuTing - SUN YongZheng\n2014 China Xiangqi League 2014 ",
      "fen": "3k5/9/4b4/4c4/9/6B2/9/CC1nB1n2/5K3/3Ap4 b - - 0 1",
      "id": "puzzle_2055",
      "title": "Mate in 2 moves"
    },
    {
      "description": "SUN YongZheng - NEI TieWen\n2014 China Xiangqi League 2014 ",
      "fen": "2bak2r1/r2C1RR2/2naC4/2p1p3p/6p2/4P4/5c2P/4B1Nc1/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2056",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6c88\u7389\u5065 - \u59dc\u5175\n2014\u5e74\u6c5f\u82cf\u65e0\u9521\u5e02\u201c\u7389\u7941\u9152\u4e1a\u676f\u201d\u66a8\u7701\u8fd0\u52a8\u4f1a\u8c61\u68cb\u9009\u62d4\u8d5b 2014 ",
      "fen": "1R3abr1/3k5/2raR4/p1p1C3p/2b6/4Pnp2/P7P/2C3N2/4A4/2BAK1c2 w - - 0 1",
      "id": "puzzle_2057",
      "title": "Mate in 2 moves"
    },
    {
      "description": "PAN ZhenBo - WANG Yang\n2014 China Xiangqi League 2014 ",
      "fen": "2bak4/9/3ab4/6p2/2p2N3/6P2/9/4n4/3NA2Cc/2BAK2n1 b - - 0 1",
      "id": "puzzle_2058",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG Weitong - SHEN Peng\n2014 China Xiangqi League 2014 ",
      "fen": "2bakc1RC/4a4/4b4/8p/6p2/9/4P1P1P/3n2N2/c1rCK4/3A1A3 b - - 0 1",
      "id": "puzzle_2059",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6797\u6587\u6c49 - \u738b\u5f00\u4ed5\n2014\u5e74\u7b2c11\u5c4a\u201c\u5a01\u51ef\u676f\u201d\u5168\u56fd\u8c61\u68cb\u7b49\u7ea7\u8d5b\u7537\u5b50\u7ec4 2014 ",
      "fen": "1nba1R2C/1c2kr3/4b4/p3N3p/2p3n2/4P4/P5P1P/5C3/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_2060",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5c1a\u57f9\u5cf0 - \u674e\u8fdb\nChinese National Champion Man B 2014 ",
      "fen": "4nk3/4a3r/4N4/p4C2p/5R3/9/c3P3P/9/9/1rBAKAB2 w - - 0 1",
      "id": "puzzle_2061",
      "title": "Mate in 2 moves"
    },
    {
      "description": "YAO HongXin - SU ShaoFeng\nChinese National Champion Man B 2014 ",
      "fen": "2ba5/2N1a1R2/5k3/p3p1r1R/5n3/9/P3r3P/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2062",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u6797\u7ef4 - XU ChongFeng\n2014\u5e74\u7b2c\u516d\u5c4a\u4e2d\u56fd\u5357\u5b81\u8c61\u68cb\u56fd\u9645\u9080\u8bf7\u8d5b\u516c\u5f00\u7ec4 2014 ",
      "fen": "3k5/4a4/b3b1N2/5R3/9/8P/P2C5/2C1B4/3r1p3/4K1B2 b - - 0 1",
      "id": "puzzle_2063",
      "title": "Mate in 2 moves"
    },
    {
      "description": "LIU An Sheng - NGUYEN Tran Do Ninh\n2014\u5e74\u7b2c\u516d\u5c4a\u4e2d\u56fd\u5357\u5b81\u8c61\u68cb\u56fd\u9645\u9080\u8bf7\u8d5b\u56fd\u9645\u7ec4 2014 ",
      "fen": "2ba1k1n1/1N2a4/4b4/4C3p/pR3Pp2/2pc4P/P3C1PN1/9/2n2r2c/3K2B2 b - - 0 1",
      "id": "puzzle_2064",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHENG Weitong - LIU YiDa\nChinese National Champion Man A 2014 ",
      "fen": "5a3/5k3/4Na3/3P4p/4C4/5n3/8c/4B4/3K5/3A1AB2 w - - 0 1",
      "id": "puzzle_2065",
      "title": "Mate in 2 moves"
    },
    {
      "description": "Chen Dong - JIN Bo\nChinese National Champion Man A Final 2014 ",
      "fen": "3k5/9/6P2/9/2b6/3C5/9/4pA3/3p2p2/4KABc1 b - - 0 1",
      "id": "puzzle_2066",
      "title": "Mate in 2 moves"
    },
    {
      "description": "HONG Zhi - JIN Bo\nChinese National Champion Man A Final 2014 ",
      "fen": "4k4/3Na4/3c1a3/3Cp4/2pn4p/6P2/P7P/3KB4/5C3/2BA1n3 b - - 0 1",
      "id": "puzzle_2067",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5468\u4ec1\u6770 - \u5f20\u6210\u5c31\n2014\u5e74\u5e7f\u4e1c\u6df1\u5733\u201c\u6000\u5fb7\u516c\u5143\u676f\u201d\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "2bakab2/3c5/2nN2P2/p7p/2p6/4P4/P7P/C3B2rC/4K4/Rc1r1AR2 b - - 0 1",
      "id": "puzzle_2068",
      "title": "Mate in 2 moves"
    },
    {
      "description": "XU Chao - SU ShaoFeng\n2014 China Xiangqi League 2014 ",
      "fen": "1CP6/3ka2cC/5a3/3P5/6b2/9/2p3p2/4B2c1/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2069",
      "title": "Mate in 2 moves"
    },
    {
      "description": "\u5f90\u5fd7\u607a - WANG GuoMin\n2014\u5e74\u4e0a\u6d77\u5e02\u540c\u5cf0\u676f\u8c61\u68cb\u7532\u7ec4\u68cb\u624b\u8054\u8d5b 2014 ",
      "fen": "C1b2ab2/1RC1k4/5a3/p3p4/8p/6p2/2r3c1P/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_2070",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ZHANG LanTian - LI ZhiPing\n2014 China Xiangqi League 2014 ",
      "fen": "5ab2/1N1ka4/4b2c1/p1R5p/4C1P2/3r5/Pn2P4/6n1N/4A4/2BAK1B2 b - - 0 1",
      "id": "puzzle_2071",
      "title": "Mate in 2 moves"
    },
    {
      "description": "FRISCHMUTH Uwe - ARNOUT  De Leeuw\nWorld Xiangqi Championships 2015 ",
      "fen": "2bak4/4a4/n3b2c1/4p4/p7C/1RB2NP1P/P3P4/3A2N1B/3p2r2/4KA1r1 b - - 0 1",
      "id": "puzzle_2072",
      "title": "Mate in 2 moves"
    },
    {
      "description": "NAUMAN Ingo - DING Wa Chong\nWorld Xiangqi Championships 2015 ",
      "fen": "3ak4/4a4/9/3R4p/9/4P3P/R1P6/4B4/2r1r4/2BK1c3 b - - 0 1",
      "id": "puzzle_2073",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GITTER Lucas - MATSUNO Yoichiro\nWorld Xiangqi Championships 2015 ",
      "fen": "2bakab2/9/4c4/Crp1R4/9/2PN2P2/P6rP/4B4/2n1A4/R2K1AB2 b - - 0 1",
      "id": "puzzle_2074",
      "title": "Mate in 2 moves"
    },
    {
      "description": "STERNMAN Olavi - ZELIMKHAN Gaysumov\nWorld Xiangqi Championships 2015 ",
      "fen": "R8/5k2C/4b4/p1p2NP1p/6c2/7r1/P1P1N3P/4C4/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_2075",
      "title": "Mate in 2 moves"
    },
    {
      "description": "GEREMY Xavier - CHIU Yen Chieh\nWorld Xiangqi Championships 2015 ",
      "fen": "2bakab2/9/9/p6r1/6p2/2P6/P5nNP/N8/3pA4/2BAK4 b - - 0 1",
      "id": "puzzle_2076",
      "title": "Mate in 2 moves"
    },
    {
      "description": "DING Wa Chong - SLOAN Sam\nWorld Xiangqi Championships 2015 ",
      "fen": "2bak2r1/nR2a4/3cb4/p3p3p/2p2n3/P5pN1/2C1P3P/c3B4/2C1A4/3AK2R1 w - - 0 1",
      "id": "puzzle_2077",
      "title": "Mate in 2 moves"
    },
    {
      "description": "ARNOUT  De Leeuw - NAUMAN Ingo\nWorld Xiangqi Championships 2015 ",
      "fen": "4kab2/4a4/4b4/3N4p/p1P6/4C4/3C1c2P/1c6B/4K4/2BA1A3 w - - 0 1",
      "id": "puzzle_2078",
      "title": "Mate in 2 moves"
    }
  ],
  [
    {
      "description": "Lv Qin - LIU DianZhong\nJiafun Cup National Champion 1997 ",
      "fen": "9/2R1ak3/5a3/4Rn3/9/6P2/p4C2P/9/2Nrc4/1r1AK1B2 w - - 0 1",
      "id": "puzzle_2079",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG YuTing - SAKAI Kiyotaka\nWorld Xiangqi Championships 1997 ",
      "fen": "5N2c/9/3k1n3/p8/6p1p/4R4/P7P/2NAB4/4r4/4K1B2 w - - 0 1",
      "id": "puzzle_2080",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUBER Siegfried - ZHANG WangHou\nWorld Xiangqi Championships 1997 ",
      "fen": "3k1ab2/2r1a1N2/1R2b1C2/p5R1p/9/4p4/P2p2P1P/4r4/N3A4/4KAB1c w - - 0 1",
      "id": "puzzle_2081",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG XiaoPing - XU JianMiao\nChinese National Champion 1996 ",
      "fen": "4k1c2/6R2/4ba3/7rC/2b5p/2B6/7n1/3A5/3C5/2B1KA3 w - - 0 1",
      "id": "puzzle_2082",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHIU Yu Kuen - LI YuLin\nHong Kong Individual Championship 1996 ",
      "fen": "1rba1k2C/4a1nR1/1cn6/p3p3p/2p3p2/1c3N3/P1P1P3P/2N6/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2083",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN JianMing - LU BaoCheng\nHong Kong Individual Championship 1996 ",
      "fen": "9/5k3/4P1N1c/9/9/9/9/9/4K4/2B2A3 w - - 0 1",
      "id": "puzzle_2084",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIANG DeRong - XIAO Di\nHong Kong Individual Championship 1996 ",
      "fen": "3a1ab2/4k4/9/3Np4/P1p6/3CPn2P/2P3N2/3cB3B/4p4/3K1n3 b - - 0 1",
      "id": "puzzle_2085",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LAI Robin - ZENG YiQian\nHong Kong Individual Championship 1996 ",
      "fen": "2bak4/1N2a4/4bc3/5N3/3C5/2P2c2p/P4np2/9/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_2086",
      "title": "Mate in 3 moves"
    },
    {
      "description": "OU HanMin - CHAN Chee Mun\nHong Kong Individual Championship 1996 ",
      "fen": "3k1ab2/2N1a4/4b1n2/1Nn5p/9/2p3P2/p4C2P/4B4/c2C1K3/2B1c4 w - - 0 1",
      "id": "puzzle_2087",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN JianYun - ZHENG Guoliang\nHong Kong Individual Championship 1996 ",
      "fen": "2bak1bR1/9/5R3/p7p/1r1n5/4C4/c3P3P/B5r2/4A4/3A1KB2 b - - 0 1",
      "id": "puzzle_2088",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIANG ChuCheng - LIU Kuo Hua\n ",
      "fen": "4kab2/4a4/2n1b4/p3p4/7RC/4rC2P/P5c2/2N1B4/4A2cN/4KA3 b - - 0 1",
      "id": "puzzle_2089",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG JingYuan - CHIENG Ming Chuo\nWorld Xiangqi Championships 1997 ",
      "fen": "2b1kab2/4a4/4c4/p4r2p/2P2C3/6B2/P3c4/2C1B4/4A2n1/3RKA3 b - - 0 1",
      "id": "puzzle_2090",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZENG XianJun - LAY Kan Hock\nMalaysian Qiwang Championship 1998 ",
      "fen": "3rkaR2/2R1a2r1/4b4/pc2C3p/9/1C1cP4/P7P/9/4K4/2B6 w - - 0 1",
      "id": "puzzle_2091",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHOU JiRong - XIE SiChi\nMalaysian Qiwang Championship 1998 ",
      "fen": "5ab1N/1N1ka4/2P1b4/3P5/9/9/4c4/4B4/4A2n1/2BAK4 w - - 0 1",
      "id": "puzzle_2092",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI LaiQun - LIU DaHua\n5 Ram Cup Xiangqi Championship 1991 ",
      "fen": "3a5/3k3N1/4b4/1P1N4p/6bn1/1p7/c3Pn2P/4B4/4AC3/4KAB2 w - - 0 1",
      "id": "puzzle_2093",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU RongHua - LIU DaHua\n5 Ram Cup Xiangqi Championship 1987 ",
      "fen": "5ab2/2N1a1P2/5k3/4P4/6b2/3p5/6c2/3A5/4A1n2/4KC3 w - - 0 1",
      "id": "puzzle_2094",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DaHua - LI LaiQun\n5 Ram Cup Xiangqi Championship 1990 ",
      "fen": "9/4a4/3k1a3/2N6/9/9/4c4/3A1A3/C8/2B1K1B2 w - - 0 1",
      "id": "puzzle_2095",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU RongHua - LIU DaHua\n5 Ram Cup Xiangqi Championship 1993 ",
      "fen": "2ba5/5kN2/2N2a3/p4P3/2b2C3/P5B2/4p4/9/5K1n1/2n5c w - - 0 1",
      "id": "puzzle_2096",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - Lv Qin\n5 Ram Cup Xiangqi Championship 1995 ",
      "fen": "3a1a3/5k3/9/9/7C1/P3c1n1P/3p5/1N7/1c2K4/1NBA1AB2 b - - 0 1",
      "id": "puzzle_2097",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - LIU DianZhong\nXiaolin motor car cup 1999 ",
      "fen": "3a1a1r1/2C2k3/1R7/2N1p3p/4c4/7n1/2P1P3P/4B4/6r2/3AK4 w - - 0 1",
      "id": "puzzle_2098",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - LIU Xing\nChinese National Champion 1987 ",
      "fen": "3a3R1/1C1cak3/8b/p8/6p2/8P/P3PrP2/6N2/r3A4/cRBAK1B2 w - - 0 1",
      "id": "puzzle_2099",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - LIU DaHua\nChina Team Championship 1988 ",
      "fen": "9/4P2R1/4bkr2/9/9/2B3B2/9/3A1c3/9/4K4 w - - 0 1",
      "id": "puzzle_2100",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - ZHENG XiangFu\nChinese Qiwang Championship 1989 ",
      "fen": "3k1abC1/1R7/9/p1p1RNP1p/9/2P2p3/P2rc4/2r1B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2101",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - CHEN JinAn\nAsian Xiangqi Individual Championships 1989 ",
      "fen": "2C1kab2/CR7/2N2an2/2p1p3p/9/c8/4P1cnP/4B1N2/9/2BrKA3 w - - 0 1",
      "id": "puzzle_2102",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - ZHENG NaiDong\nChinese National Champion 1996 ",
      "fen": "2bak2R1/4a4/3cb4/9/4p1p2/3CP4/6PNP/3ABC3/1n1K5/4rAB2 b - - 0 1",
      "id": "puzzle_2103",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIN YiShi - NG Wing Sang\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2b1kr3/3R5/2N1b4/9/p8/2P1c4/9/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2104",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WONG Chi Keung - CHIN Kok Liang\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2bak1b2/3RaR3/nrN3n2/p1p1p1p1p/4c4/6P2/P7P/2r1C4/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_2105",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LOOK Kean Chor - ZHANG WangHou\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "6Rc1/4R4/3k1r3/p7p/9/7C1/n1p1P4/N5N2/4A4/2BAK2r1 w - - 0 1",
      "id": "puzzle_2106",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WOO WeiCheung - HUA Say Ty\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2bk1ab2/4aR3/4n2r1/4C3p/2pNp1p2/9/cr4n1P/4C1N1B/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2107",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LEUNG TatMan - LIN YaoSen\n ",
      "fen": "3a2R2/7C1/5k2C/7cp/9/P8/4P3P/3KB4/2r3n2/2BA1A3 w - - 0 1",
      "id": "puzzle_2108",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LEE Kah Kheng - HONG Chia Chuan\n ",
      "fen": "2ba5/4ak1N1/4b4/9/7P1/2B3C2/8C/4BA3/1cn2K3/6c2 w - - 0 1",
      "id": "puzzle_2109",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YAN WenQing - Lv Qin\nRed Bull Cup TV fast game Champion 1999 ",
      "fen": "2b1kab2/4a4/4C4/p8/8p/2PR3N1/P7P/3KB4/r3A4/1r3ABR1 b - - 0 1",
      "id": "puzzle_2110",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU WenXue - GE WeiPu\nChinese National Champion 1999 ",
      "fen": "2bakc3/4a4/4b4/9/3P1C3/2NnC4/P3p3P/9/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_2111",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU RongHua - CHENG Richard\nAsian xiangqi Championship 1982 ",
      "fen": "1Cbak4/4a4/2N1b4/p3p3p/7n1/P3P4/4N3P/2C3R2/c8/2rA1K3 w - - 0 1",
      "id": "puzzle_2112",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU RongHua - XU WenXue\nChinese National Champion 1997 ",
      "fen": "2bak4/C1n1a2N1/9/p7R/1r7/P3p4/5c3/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2113",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - LI LaiQun\nChinese Qiwang Championship 1994 ",
      "fen": "C1bak1b2/4a4/5R3/9/2p6/9/P1P2r2P/N3B1n2/9/4KABcR b - - 0 1",
      "id": "puzzle_2114",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TANG ZhuoGuang - TAO HanMing\nChinese National Champion 1994 ",
      "fen": "2ba3R1/4a1C1C/4bk3/9/4c4/4n4/3r5/4B3B/4K4/9 b - - 0 1",
      "id": "puzzle_2115",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI LaiQun - HUANG JingXian\nChina Team Championship 1991 ",
      "fen": "4k4/3caP3/3N5/9/9/6B2/9/5K3/9/9 w - - 0 1",
      "id": "puzzle_2116",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DONG XuBin - KE YongQing\nChinese National Champion 1999 ",
      "fen": "2bk1a3/4a4/4b4/7rp/p1p6/9/P1Prp4/N4AR2/9/2NA1KB2 b - - 0 1",
      "id": "puzzle_2117",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN YongZheng - KE YongQing\nChinese National Champion 1999 ",
      "fen": "3Ck4/3P1c3/9/5N3/2b3b2/4P4/2p2n3/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2118",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Qiang - LIU DaHua\nJiafun Cup National Champion 1994 ",
      "fen": "2b2a3/3ck4/3Nb4/4p3p/p8/1N1n5/1c7/3CB3C/4A1n2/3K1AB2 b - - 0 1",
      "id": "puzzle_2119",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Li Hong Jia - LI WangXiang\nChinese National Champion 2000 ",
      "fen": "3ak4/3ca4/4N3R/p4N2p/1n7/4P2p1/6r2/B8/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2120",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Peng - XIAO GeLian\nChinese National Champion 2000 ",
      "fen": "3a5/C3a4/N4k1c1/p1R5p/4r4/3n5/P7P/5A3/9/3K1AB2 w - - 0 1",
      "id": "puzzle_2121",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHANG ZhiHua - FENG XiaoXi\nChinese National Champion 2000 ",
      "fen": "3k1ab2/4a1N2/2n1b4/p7p/2n6/1N7/P5R1P/3Ac3B/3r1C1r1/R1B1KA3 b - - 0 1",
      "id": "puzzle_2122",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GUO LiPing - HAN Bing\nChinese National Champion 2000 ",
      "fen": "4kab2/7N1/2n1P4/4c3p/2p3r2/9/2p5P/3C5/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_2123",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Xuan - YANG YongMing\nChinese National Champion 2000 ",
      "fen": "2b1ka3/4R4/4b4/p4R2N/4P4/8N/n3P1p1P/2C1BA3/6cr1/2BA1K2c b - - 0 1",
      "id": "puzzle_2124",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG Fang - OUYANG ChanJuan\nChinese National Champion 2000 ",
      "fen": "2r1kab2/3ca1c2/b5r2/C4R2p/4N4/P1n2N1p1/4P3P/4C3B/4A4/2B1KA2R b - - 0 1",
      "id": "puzzle_2125",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG YiHong - LEI Kam Fun\nChinese National Champion 2000 ",
      "fen": "CRbak4/4a4/4b4/2p5p/5r3/4P3c/r8/4BC1R1/4A1n2/3A1KB2 b - - 0 1",
      "id": "puzzle_2126",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHU ZongSi - YANG BoLin\nChinese National Champion 2000 ",
      "fen": "3R2b2/5k3/4Pan2/1r4N1p/9/4N1P2/pn6P/4C4/4Kc3/1c1A1AB2 w - - 0 1",
      "id": "puzzle_2127",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FENG XiaoGuang - FU GuangMing\nChinese National Champion 2000 ",
      "fen": "3a1R3/4k4/2n6/p1p1p3p/2b4C1/2B2NP2/4P3P/2c2K3/1c1rA4/2C6 b - - 0 1",
      "id": "puzzle_2128",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI DeZhi - LIN HongMin\nChina Team Championship 2000 ",
      "fen": "5a3/3k5/3N1P3/C8/8p/2B2n3/1p1p5/9/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_2129",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU You - LIN WenXian\nChina Team Championship 2000 ",
      "fen": "1rb2k3/1N2R4/4b4/3R4p/9/4P4/c5p2/9/4A4/2B1KrB2 w - - 0 1",
      "id": "puzzle_2130",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YUAN HongLiang - CHEN FuJie\nChina Team Championship 2000 ",
      "fen": "6cR1/4R4/c4k3/4p3p/p1p6/5r3/2P6/2n1B4/4A4/4K4 w - - 0 1",
      "id": "puzzle_2131",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG NaiDong - XIE ZhouMiao\nChina Team Championship 2000 ",
      "fen": "C1b2ab2/1R2R3C/3k1a3/2p5p/6r2/3r5/P3P3P/4B4/4A4/4KA2c w - - 0 1",
      "id": "puzzle_2132",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG LinNa - SHAN XiaLi\nYinli Cup Champion 2000 ",
      "fen": "4k4/4a4/3aN4/5P3/3C2n2/4c4/2Cc1p3/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2133",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GAO YiPing - SHAN XiaLi\nYinli Cup Champion 2000 ",
      "fen": "9/1CPn1kN2/3a5/4R3p/4p4/9/5rpcP/8B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2134",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - ZHUANG YuTing\nChinese National Champion 1992 ",
      "fen": "1C7/2C1k4/3ab2R1/4p3p/9/9/4n4/3AB4/6r2/2BAK3c w - - 0 1",
      "id": "puzzle_2135",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG GuanLin - HU RongHua\nChinese National Champion 1979 ",
      "fen": "3a1k3/4aP3/4b4/4PP3/2b6/9/4n4/9/4p4/3K5 b - - 0 1",
      "id": "puzzle_2136",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU RongZhou - LEI Kam Fun\nAsian Xiangqi Individual Championships 1999 ",
      "fen": "6b2/3kc4/4bN3/p8/1n7/8P/c5n2/N8/9/5K3 b - - 0 1",
      "id": "puzzle_2137",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU BingKui - HUANG XueQian\nHong Kong Team Champion 2000 ",
      "fen": "C2k1ab2/2R6/1r1a2n2/p3p3p/9/3R5/Prc5P/B2C5/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2138",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIANG WeiKun - DING JianQuan\nHong Kong Team Champion 2000 ",
      "fen": "2bak4/4a3C/8b/p4R2p/5c3/2P1P4/P7P/5nr1B/4K4/9 b - - 0 1",
      "id": "puzzle_2139",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WONG Teddy - HUANG WenSheng\nICCS IT 2000 ",
      "fen": "3k1a3/1R2a4/b3n4/2r1CR2p/6p2/3r2P2/P1c1P3P/9/9/3AK1B2 b - - 0 1",
      "id": "puzzle_2140",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TSE Richard - LIU Zheng\nICCS IT 2000 ",
      "fen": "2bak1b2/4a1C2/4C4/p2Rp4/1P2P3p/9/P1n1p3P/3K5/4A4/6r2 b - - 0 1",
      "id": "puzzle_2141",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN WenHao - WANG YongJing\nICCS IT 2000 ",
      "fen": "3k5/1R2a4/1c1a2c2/p1pr4p/3C5/2P6/P3P1n1P/4B1N2/7R1/3AKAB2 w - - 0 1",
      "id": "puzzle_2142",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Qiang - LIU DianZhong\nBGN World Xiangqi Challenge 2001 ",
      "fen": "9/9/4ka3/9/9/9/9/5K3/5C3/5rR2 b - - 0 1",
      "id": "puzzle_2143",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN Bo - YU YouHua\nBGN World Xiangqi Challenge 2001 ",
      "fen": "2bak1b2/4a4/9/8p/N1c4R1/1cC1n4/P7P/4B1r2/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_2144",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG hanZhong - LI ChengJie\nMalaysia Open 2001 ",
      "fen": "3aka3/2R6/9/4CR2p/2p6/6P2/P7P/6r1B/4A4/3r1K3 w - - 0 1",
      "id": "puzzle_2145",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YAN WenQing - FU GuangMing\nChina Team Championship 2001 ",
      "fen": "1nb1ka3/3Ra4/4r4/p1P1C2rp/6R2/8P/P8/4B4/4A2p1/2BAK4 w - - 0 1",
      "id": "puzzle_2146",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAI Yi - XIE YeJian\nChina Team Championship 2001 ",
      "fen": "2bk1a3/4a4/4b4/pR2R3p/2p2r3/P3C3P/4n4/4B4/3rA4/4KABc1 b - - 0 1",
      "id": "puzzle_2147",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG YI - ZHU XiaoHu\nChina Team Championship 2001 ",
      "fen": "2ba1a3/4k4/5N3/8p/2C1P4/2P6/6R1P/4BA3/5K3/2B1n2rc w - - 0 1",
      "id": "puzzle_2148",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHU ZongSi - CAI Yi\nChina Team Championship 2001 ",
      "fen": "3ak4/9/3a5/4N4/3cp1b1P/3n5/4p4/3A5/3K5/5AC2 b - - 0 1",
      "id": "puzzle_2149",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CUI Yan - ZHAO XinXin\nChinese National Champion 2001 ",
      "fen": "5Cb2/3R4C/5k3/n3p4/2PN5/PN7/4P3P/4B4/3K1r1n1/3A5 w - - 0 1",
      "id": "puzzle_2150",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YUAN HongLiang - KE YongQing\nChinese National Champion 2001 ",
      "fen": "3k1a3/9/5a2b/9/3P5/2N1N4/9/4BAp2/4K3c/2BA3c1 b - - 0 1",
      "id": "puzzle_2151",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIANG Chuan - XIE YeJian\nChinese National Champion 2001 ",
      "fen": "3ak4/4a4/4b4/9/3r4p/3R5/4P3P/4B1N2/4p4/1cNA1K3 b - - 0 1",
      "id": "puzzle_2152",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN HaiYing - GANG QiuYing\nChinese National Champion 2001 ",
      "fen": "2Rakrb2/9/9/9/9/3n5/7R1/p3B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2153",
      "title": "Mate in 3 moves"
    },
    {
      "description": "REN Jian - NG Chun Hei\nChinese National Champion 2001 ",
      "fen": "3a1k3/4a4/4P4/3Nc4/6P2/1p3Cn2/9/9/4A4/3K5 w - - 0 1",
      "id": "puzzle_2154",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HATTON Tsugumitsu - LOW Gin Wan\nWorld Xiangqi Championships 2001 ",
      "fen": "4k2cR/1r2a4/4ba1r1/p2N5/6p2/2PC5/P5P1P/4C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2155",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MOK Mun Yew - YAN Andrew\nWorld Xiangqi Championships 2001 ",
      "fen": "3aka3/9/4R4/p7p/2bC1Np2/4c4/P4n2P/9/7r1/3AKAB2 b - - 0 1",
      "id": "puzzle_2156",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Gao Yang - CHEN WanWei\nWorld Xiangqi Championships 2001 ",
      "fen": "5a2C/3ka4/2Pc5/R8/9/5p3/9/4B4/4A4/2r1K4 w - - 0 1",
      "id": "puzzle_2157",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TRUONG Oan Tha - SCHMIDT BRAUNS Joachim\nWorld Xiangqi Championships 2001 ",
      "fen": "2ba4C/4a2R1/2nc1kn2/p3p2Rp/2pr2b2/9/P1P1P3P/2r1B1N2/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2158",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TANAKA Atsushi - Peter Wood\nWorld Xiangqi Championships 2001 ",
      "fen": "2ck1abn1/2N1a4/2C6/p3p1p1p/5r3/1R3NP2/P3P3P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2159",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GAO YiPing - HUANG ZiJun\nWorld Xiangqi Championships 2001 ",
      "fen": "3ak4/4a4/2n1n4/8p/4c2r1/r1P3R2/5R1cP/2C1C1N1B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2160",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LOW Gin Wan - Peter Wood\nWorld Xiangqi Championships 2001 ",
      "fen": "2ck1a3/4a4/4N4/p3p4/2r3p1p/PR7/2N1P3P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2161",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Zheng - ZHANG Xiang\nIXPA IT 2001 ",
      "fen": "3r1a2C/R3a4/3k2N2/3r5/8p/p1B3p2/8P/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2162",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DianZhong - ZHAO GuoRong\n5 Ram Cup Xiangqi Championship 2002 ",
      "fen": "3k2C2/2R6/3a1a3/4p3p/2P2nr2/1R7/1r2c3P/4C3B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_2163",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - XU YinChuan\n5 Ram Cup Xiangqi Championship 2002 ",
      "fen": "3ak4/4a4/4N4/1R7/4C4/P5P1P/4p4/5p3/2r6/3AKABc1 w - - 0 1",
      "id": "puzzle_2164",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YUAN ShiQiao - WANG XinHai\nChina Team Championship 1996 ",
      "fen": "3ak1b2/2c1a4/3c5/4C4/P4Rb2/2N6/8p/4BA3/1r2A1n2/3K2B2 b - - 0 1",
      "id": "puzzle_2165",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG ZhiMing - JIN Bo\nIXPA IT 2001 ",
      "fen": "4k4/4a4/4P4/9/6N2/3p2Cc1/9/4B2n1/3p1p3/2B1K4 b - - 0 1",
      "id": "puzzle_2166",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LU JianHong - JIN So\nIXPA IT 2001 ",
      "fen": "4ka3/9/5a2b/9/6b2/4rp2P/9/5pRN1/4C4/3n1K3 b - - 0 1",
      "id": "puzzle_2167",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Ming - LIANG JunMing\nIXPA IT 2001 ",
      "fen": "3a3R1/1Cn1ak3/9/p5r1p/2N6/P7P/4pn3/4BA3/9/2BAK4 w - - 0 1",
      "id": "puzzle_2168",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU Shuang - GAO YiPing\nChina Team Championship 1997 ",
      "fen": "1N7/4k4/2Na1aC2/8p/4p4/c8/8P/4n4/4A4/1n2KA3 b - - 0 1",
      "id": "puzzle_2169",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIANG GuoHua - LI JiaHua\nChina Team Championship 1997 ",
      "fen": "3a1ab2/6R2/5k3/p1p5p/1C2P4/2P1c4/P4p1NP/4B4/5K3/1cBAr4 b - - 0 1",
      "id": "puzzle_2170",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU XinHua - LU Jian\nChina Team Championship 1997 ",
      "fen": "2R2ab2/3ka4/3N5/2pr4c/9/2PC5/P3P4/9/9/2rAKAB2 w - - 0 1",
      "id": "puzzle_2171",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIAO GeLian - JING Cong\nChina Team Championship 1997 ",
      "fen": "3ak2C1/4aR3/9/p3p3p/6R2/5NP2/P3P3P/n8/4r4/1cBAKAB2 w - - 0 1",
      "id": "puzzle_2172",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN YongZheng - TAO HanMing\nYinli Cup Champion 2002 ",
      "fen": "4kab2/3P5/1c2baC2/C6N1/4P3p/5n3/5p2P/2Nn4B/9/c1BAKA3 w - - 0 1",
      "id": "puzzle_2173",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG LinNa - YOU YingQin\nYinli Cup Champion 2002 ",
      "fen": "3k1ab2/1r2a4/4br1c1/2R1C4/4p4/5RP2/4P3P/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2174",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XinAn - XIONG XueYuan\nJiutian Xiangqi Master Championships 2001 ",
      "fen": "4kab2/4aP3/4b4/p3N4/4P3p/P2Rn4/7rP/C4n3/2p1K4/3A1AB2 b - - 0 1",
      "id": "puzzle_2175",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GUO FuRen - LIAO ErPing\nJiutian Xiangqi Master Championships 2001 ",
      "fen": "5a3/1N1ka4/4b4/3C5/3P1P3/8p/4p4/3Kn4/4A2c1/2B2A3 b - - 0 1",
      "id": "puzzle_2176",
      "title": "Mate in 3 moves"
    },
    {
      "description": "QIN JinSong - TONG BenPing\nChina Team Championship 1997 ",
      "fen": "2b3b2/1Nr1ak3/3R5/p4P2p/9/9/P3C3n/4C4/9/2BAKA1pc w - - 0 1",
      "id": "puzzle_2177",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHAN XiaLi - HUANG Wei\nChina Team Championship 1997 ",
      "fen": "3akab2/9/4b4/2R1C4/4c4/9/Pp1r4P/4B4/4A4/1cBAKN3 b - - 0 1",
      "id": "puzzle_2178",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI YiTing - SHEN ZhiSong\nChinese National Champion 1964 ",
      "fen": "5k1c1/4P1R2/4b4/8p/6p2/p1B6/9/3AC3B/9/3K1r3 w - - 0 1",
      "id": "puzzle_2179",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JI BenHan - HU RongHua\nExhibition 1973 ",
      "fen": "4ka3/9/N1Ra5/p8/6p2/2P6/P3rn2P/C4K3/6r2/R1BA1A3 b - - 0 1",
      "id": "puzzle_2180",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU RongHua - JIANG ZhiLiang\nChinese National Champion 1978 ",
      "fen": "4ka3/9/3aN4/p2r4p/5R1n1/1N3p3/c6r1/2R1B3B/9/3AKA3 w - - 0 1",
      "id": "puzzle_2181",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU YinChuan - HUANG ShiQing\nChina Team Championship 1992 ",
      "fen": "2b1k4/CC3R3/4b4/p8/4p4/P8/4P4/9/3c5/1r3K3 w - - 0 1",
      "id": "puzzle_2182",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - YU HongMu\nChina Team Championship 1978 ",
      "fen": "3ak4/2R2R3/b3C4/2P1p3p/9/6n2/9/5A3/1C2K1r2/5A2c w - - 0 1",
      "id": "puzzle_2183",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Qiang - LIU Kuo Hua\nIXPA Team 2002 ",
      "fen": "1R1aka3/9/2C4r1/4P4/2C2n3/p7p/6p1P/4B4/9/c1BAK2N1 w - - 0 1",
      "id": "puzzle_2184",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TAN Cheak Joo - FENG RuLe\nIXPA Team 2002 ",
      "fen": "2b1k4/4a4/2n6/p1N5p/6p2/2P1R4/Pr2C3P/3R5/3C5/2B1Kc1r1 w - - 0 1",
      "id": "puzzle_2185",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - XIAO GeLian\nChinese National Champion 1990 ",
      "fen": "3a2n2/n3k1C2/3N3C1/4p1P1p/9/2N6/P7P/9/4AK3/c2A3c1 w - - 0 1",
      "id": "puzzle_2186",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - LI Aidong\nChina Team Championship 1985 ",
      "fen": "5kb2/3RP4/4b4/2r6/9/9/9/4B4/4A4/1c1AK4 w - - 0 1",
      "id": "puzzle_2187",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XiaoKun - ZHAO GuoRong\nChina Team Championship 1987 ",
      "fen": "6N2/C1P6/3k5/4n1p1p/9/1R7/2r1c4/9/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2188",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - XU TianHong\nChina Team Championship 1983 ",
      "fen": "3ak4/2P2P3/4ba3/3P5/2b2C3/4c4/5p3/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2189",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WAN ChunLin - ZHAO GuoRong\nChinese National Champion 1993 ",
      "fen": "3ak1b2/4a4/4b4/p1c2r2N/9/9/P6cP/B3CC3/4A1nR1/3A1KB2 b - - 0 1",
      "id": "puzzle_2190",
      "title": "Mate in 3 moves"
    },
    {
      "description": "RUAN You - Yan Qun\n ",
      "fen": "5k3/4P4/4bN3/9/1n2c4/6B2/3C5/3AB4/4A4/5K3 w - - 0 1",
      "id": "puzzle_2191",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG XiangMing - GUO HanLin\n ",
      "fen": "2ba1kb2/4a1N2/5P3/p4R3/2n2P3/9/P8/9/4A4/2B1KrB2 w - - 0 1",
      "id": "puzzle_2192",
      "title": "Mate in 3 moves"
    },
    {
      "description": "QIAN HongFa - Lv Qin\nChinese National Champion 1985 ",
      "fen": "2bak4/4a4/4b4/C3R4/4c4/3r4p/PC1n5/Np2B4/4A4/3K1AB2 b - - 0 1",
      "id": "puzzle_2193",
      "title": "Mate in 3 moves"
    },
    {
      "description": "BU FengBo - Lv Qin\nChinese National Champion 1986 ",
      "fen": "2ba1a3/4k4/4b4/4pN2p/9/2P1P1P2/6R1P/5K3/c2nr4/6B2 b - - 0 1",
      "id": "puzzle_2194",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAI Yi - ZHAO GuoRong\nChinese National sports 2002 ",
      "fen": "4kab2/4a4/2P1b4/p8/3c5/6N2/PC7/4B1N2/5p1nc/3AK1B2 b - - 0 1",
      "id": "puzzle_2195",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIANG FengShan - JIN YuYan\nChinese National sports 2002 ",
      "fen": "3k1ab2/4a4/4b4/9/9/3RP4/9/4B1N2/n1CrA4/c3KAB2 b - - 0 1",
      "id": "puzzle_2196",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAI Yi - GONG XiaoMin\nChina Team Championship 2002 ",
      "fen": "C5b2/3ka4/2N1ba1n1/p3C3p/2p3r2/5R3/P3c1N1P/9/4AK3/3A5 w - - 0 1",
      "id": "puzzle_2197",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XinAn - YANG Hao\nChina Team Championship 2002 ",
      "fen": "2RakaR2/9/7r1/p1c1n1N1p/2p6/9/P3P3P/B1N6/9/3K1cr2 w - - 0 1",
      "id": "puzzle_2198",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG WenLin - OUYANG ChanJuan\nChina Team Championship 2002 ",
      "fen": "3akab2/9/4R4/p3p3p/2p6/1C4B2/P7P/2n1B4/3K5/5r3 b - - 0 1",
      "id": "puzzle_2199",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DianZhong - JIN Bo\nChina Team Championship 2002 ",
      "fen": "4ka3/3c5/9/4N3p/9/3R5/3Cr4/Bp1K5/8c/3A1A3 b - - 0 1",
      "id": "puzzle_2200",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG Ding - BUA BinBin\nChina Team Championship 2002 ",
      "fen": "2b1ka1R1/4a4/2nrb4/p3C3p/2p1p4/5R3/P7P/B2C5/4A4/3AK1r2 w - - 0 1",
      "id": "puzzle_2201",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YE ZhengGao - ZHOU ChangLin\nChina Team Championship 2002 ",
      "fen": "3aka3/4n4/3Pr4/p3R4/1C6p/5c3/4P4/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2202",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU YunTao - MIAO Quan\nChina Team Championship 2002 ",
      "fen": "3akar2/3Rc4/4R4/4C3p/9/2p3P2/P7P/4B3N/4A4/1r2KAB2 w - - 0 1",
      "id": "puzzle_2203",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG ZhiHui - SONG DaoXin\nChina Team Championship 1984 ",
      "fen": "9/3Rak3/4P4/9/8p/9/4c4/9/4K4/2BA1r3 w - - 0 1",
      "id": "puzzle_2204",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG YuanQi - TANG FangYun\nChina Team Championship 1984 ",
      "fen": "4R1b2/3k5/3ab1n2/2p1r3p/p8/2PN5/P7P/5p3/3C5/2BAKAB2 w - - 0 1",
      "id": "puzzle_2205",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG XinNian - SONG DaoXin\nChina Team Championship 1984 ",
      "fen": "1Rc1kab2/4a4/2r6/4P3p/4R1p2/2B6/P5P1P/4BK3/9/9 b - - 0 1",
      "id": "puzzle_2206",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIANG WenWei - YU ZhiQing\nChina Team Championship 1984 ",
      "fen": "2baka3/9/4b2c1/p3p3p/9/4C4/P3r3P/B8/NC2A1n2/1R1A1KN2 b - - 0 1",
      "id": "puzzle_2207",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI LaiQun - MA NaiXuan\nChina Team Championship 1984 ",
      "fen": "9/3ka4/4ba2n/4C4/p2N2b2/9/P8/3A5/3C5/4KA3 w - - 0 1",
      "id": "puzzle_2208",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG YuYing - HUANG YaoJue\nChina Team Championship 1984 ",
      "fen": "4k1b2/4a4/3ab4/9/9/4n1N2/5p3/8B/3pAK3/6B2 b - - 0 1",
      "id": "puzzle_2209",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI GuoXun - REN ZhanQuo\nChina Team Championship 1984 ",
      "fen": "3a2b2/4ak3/9/3R4p/p8/4CN2P/Pn2P4/3AB3B/2r6/c3KA3 w - - 0 1",
      "id": "puzzle_2210",
      "title": "Mate in 3 moves"
    },
    {
      "description": "QIAN HongFa - ZHAO Feng\nChina Team Championship 1984 ",
      "fen": "3ak1b2/r2PaR3/4b4/p3r3p/9/P1R6/9/4C4/9/3AK1B2 w - - 0 1",
      "id": "puzzle_2211",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU ZhiQing - YAO Chun\nChina Team Championship 1986 ",
      "fen": "1C1R1ab2/4k4/9/N7p/6p2/P8/8P/9/3K5/5rBc1 w - - 0 1",
      "id": "puzzle_2212",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI JiaHua - BU FengBo\nChinese National Champion 1990 ",
      "fen": "5ab2/4a4/3k5/8p/3N2p2/9/P3P3P/3r1R3/4AK3/2BA2rn1 w - - 0 1",
      "id": "puzzle_2213",
      "title": "Mate in 3 moves"
    },
    {
      "description": "BU FengBo - DENG SongHong\nChinese National Champion 1990 ",
      "fen": "5CC2/2R1a4/3k1c1R1/4p4/2c3p2/9/P3P3P/2r6/3rA4/2BAK4 w - - 0 1",
      "id": "puzzle_2214",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIAO ErPing - XU Bo\nChinese National Champion 1990 ",
      "fen": "CRbak4/R3a4/4b4/8p/4p1p2/2P6/4P1c1P/2r1B1N1B/1n1rAc3/3CKA3 b - - 0 1",
      "id": "puzzle_2215",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Jun - LIN HongMin\nChinese National Champion 1990 ",
      "fen": "3k2b2/3ca4/3ab4/9/1P3R3/2B6/4N4/B2A5/2r1p4/3K5 b - - 0 1",
      "id": "puzzle_2216",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Jun - HUANG ShiQing\nChinese National Champion 1990 ",
      "fen": "5k3/3P5/4c4/4c4/4N1b2/1C7/9/4B4/1n2Ap3/4KAB2 b - - 0 1",
      "id": "puzzle_2217",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU QingYang - GUO FuRen\nChinese National Champion 1990 ",
      "fen": "3n1k3/4a4/3abN2b/6R1p/6p2/4C4/P1r3P1P/4B4/4A4/c3KA3 w - - 0 1",
      "id": "puzzle_2218",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LUO ZhongCai - ZHAO Wei\nChinese National Champion 1990 ",
      "fen": "r1b1kaR2/2R1ar3/2N1c4/p1p1C1p2/8p/6P2/P7P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2219",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN ShuLan - LI DeLing\nChinese National Champion 1990 ",
      "fen": "3k1ab2/3na1N2/4b4/pN2p3p/3r5/2r1PR3/P1R3c1P/B2C5/4A1n2/3A1K3 w - - 0 1",
      "id": "puzzle_2220",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU QingYang - REN ZhanQuo\nChinese National Champion 1990 ",
      "fen": "4kab2/1N2a4/4bn3/4C3p/p2P5/2n6/8P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2221",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU JianMiao - LI Aidong\nChinese National Champion 1997 ",
      "fen": "2bak4/4a4/4b1n2/4p1P1p/R8/4p1N2/2P1c4/N1c6/8r/C1BAKAB2 b - - 0 1",
      "id": "puzzle_2222",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZONG YongSheng - SHANG Wei\nChinese National Champion 1997 ",
      "fen": "1C1a1ab2/2R6/3Nk4/9/3P5/4pcP1p/P8/4B4/3K4c/2B1r4 w - - 0 1",
      "id": "puzzle_2223",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIAO ErPing - LI WangXiang\nChinese National Champion 1997 ",
      "fen": "2ba5/1CC4R1/3a1kn2/pN2p3p/5r3/6p2/P3c1P1P/4B1c2/4A4/3K1A3 w - - 0 1",
      "id": "puzzle_2224",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI DeZhi - YE XinZhou\nChinese National Champion 1997 ",
      "fen": "2ba1k2r/2N1a2r1/4b4/p3p1n2/2pn4p/9/P1P1PC2P/2N1C4/9/2BAKAcR1 w - - 0 1",
      "id": "puzzle_2225",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GAN XiaoJin - CHEN HanHua\nChina Team Championship 1991 ",
      "fen": "3k5/9/3C5/3P4p/9/4N3P/9/3Ap4/1c3K3/2n6 b - - 0 1",
      "id": "puzzle_2226",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHI XinDe - LUO ZhongCai\nChina Team Championship 1991 ",
      "fen": "1R4b2/5kN2/3aPa3/p7p/9/2B6/P1c5P/9/rn2A4/4KA3 b - - 0 1",
      "id": "puzzle_2227",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CENG JiuQin - JIN YuYan\nChina Team Championship 1991 ",
      "fen": "2bakab2/9/6n2/p3p1p1p/2P2r3/4RnP2/P2Cc3P/4C4/4A4/2BA1KB1R b - - 0 1",
      "id": "puzzle_2228",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FENG MingGuang - ZHAO GuoRong\nChina Team Championship 1991 ",
      "fen": "2Nakc2R/4a4/2r1b4/9/9/4C4/P8/4BA3/9/3AK1B2 w - - 0 1",
      "id": "puzzle_2229",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Lin - LI QuanJun\nChina Team Championship 1992 ",
      "fen": "1r1nkab2/4a4/4b4/p1R1C3p/7r1/2P2R3/P1c1PNp1P/5C3/9/2BAKAc2 w - - 0 1",
      "id": "puzzle_2230",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIE HongWei - ZHANG Weimin\nChina Team Championship 1992 ",
      "fen": "3akab2/9/4b4/p3p1C2/2P3p2/9/P3P1n1P/6r2/CR5c1/3AKA3 b - - 0 1",
      "id": "puzzle_2231",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SONG GuoQiang - HUANG Yong\nChina Team Championship 1992 ",
      "fen": "2b2a3/4a1P2/4bk3/8p/p2Nn4/8P/9/9/4AC3/4K4 w - - 0 1",
      "id": "puzzle_2232",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAI ZhongCheng - CHEN XiaoKun\nChina Team Championship 1992 ",
      "fen": "2r1kab2/4a4/R3c2r1/pNp1C3p/9/2P6/P3P3P/B2C5/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2233",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU JianMing - ZANG RuYi\nChina Team Championship 1992 ",
      "fen": "2ba1k3/4aC3/4c3b/p1p5p/9/1R2P1P2/P1P5P/C1nR5/3rAr3/2BAK1B2 b - - 0 1",
      "id": "puzzle_2234",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Xing - FENG MingGuang\nChina Team Championship 1992 ",
      "fen": "5kb2/7c1/3Cb4/9/9/9/9/3p5/9/4K4 b - - 0 1",
      "id": "puzzle_2235",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG JianFeng - NIU Yu\nChina Team Championship 1992 ",
      "fen": "CR1ak1b2/4a4/4bc2n/2pr2p1p/9/9/P1P1r1P1P/4C4/5R3/2BAKAB2 w - - 0 1",
      "id": "puzzle_2236",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MA Lin - GANG QiuYing\nChina Team Championship 1992 ",
      "fen": "3k1ab2/4a4/2C1b1n2/p3p1R2/6p2/2PR2P2/1n1rP4/9/1r2A4/2BNKAB2 b - - 0 1",
      "id": "puzzle_2237",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN JianMin - GAN XiaoJin\nChinese National Champion 1992 ",
      "fen": "2b1k4/9/3abR3/p3pN2p/9/c5B2/3nP4/4BC3/4Ar1n1/4KA3 b - - 0 1",
      "id": "puzzle_2238",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHAN XiaLi - HU Ming\nChinese National Champion 1992 ",
      "fen": "3Rkab2/4a4/2n1b4/p1p5p/4R4/2P3B2/P3N3P/9/4r1r2/2BC1K2c b - - 0 1",
      "id": "puzzle_2239",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Lin - LIU LiMei\nChinese National Champion 1992 ",
      "fen": "3k2b2/2Cna1N2/3ab4/p1pC4p/9/2P6/P5pcP/9/1R2r4/2B1KAB2 w - - 0 1",
      "id": "puzzle_2240",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI DeLing - LIU Bi Jun\nChinese National Champion 1992 ",
      "fen": "1C3a3/9/CR1ak4/p1p1p3p/2P2n3/9/P7P/B8/4A4/4KArc1 w - - 0 1",
      "id": "puzzle_2241",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU Ming - LIU Bi Jun\nChinese National Champion 1992 ",
      "fen": "4ka3/4a4/7R1/p1r5p/2b1p1p2/9/P5P1P/4B1N2/1RnrA4/3AK1B2 b - - 0 1",
      "id": "puzzle_2242",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG Bin - XIAO GeLian\nChina Team Championship 1993 ",
      "fen": "5k3/3Pa4/8b/p2r5/1R6p/9/9/B3B1n2/4A4/4KA3 w - - 0 1",
      "id": "puzzle_2243",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN ShuCheng - YU YouHua\nChina Team Championship 1993 ",
      "fen": "2b1ka3/2cRaR3/2N1b4/p3C3p/2p3p2/4n4/P7P/9/9/2Br1KB2 w - - 0 1",
      "id": "puzzle_2244",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI JiaHua - YANG YongMing\nChina Team Championship 1993 ",
      "fen": "2b1ka3/1Pn6/2Nab4/1N6p/9/3R5/4P1p2/4B4/r2pA4/4KAB1c w - - 0 1",
      "id": "puzzle_2245",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHI Gang - JIANG ZhiLiang\nChina Team Championship 1993 ",
      "fen": "2bk1a3/3Ra4/4bc3/p2r4p/2p6/5C1RP/P3c4/4Bpr2/4A4/2BA1KC2 b - - 0 1",
      "id": "puzzle_2246",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI QiJie - LU YueDong\nChina Team Championship 1993 ",
      "fen": "1rb1kaR2/3Ra4/1c2cr3/p7p/2p6/4C1p2/P1P3P1P/2N1C1n2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2247",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HE LianSheng - GUO FuRen\nChina Team Championship 1993 ",
      "fen": "3ak4/4a4/n3b1Cc1/p3p1PNp/3r5/4R4/P7P/2n1B3N/2c1A3R/2rAK4 b - - 0 1",
      "id": "puzzle_2248",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU WuMing - CHEN DongGuo\nChina Team Championship 1993 ",
      "fen": "6b1C/5R3/3k5/2P3n2/9/9/3r1p3/4B2p1/4A4/3NKABc1 w - - 0 1",
      "id": "puzzle_2249",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG SuiWang - ZHANG ZhiShu\nChina Team Championship 1993 ",
      "fen": "3k1a3/9/b4a3/9/2b6/4r4/9/2pA5/9/R2K5 b - - 0 1",
      "id": "puzzle_2250",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TONG BenPing - SUN ShuCheng\nChina Team Championship 1994 ",
      "fen": "2bak1b2/4a4/c3c4/2p1C2Np/p3n4/2P3B2/P3P3P/4BC3/2n1A4/3K1A1N1 w - - 0 1",
      "id": "puzzle_2251",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG LinNa - HU Ming\nChinese National Champion 1994 ",
      "fen": "2b1k1b2/9/9/p7p/2p1P4/4C4/P1P1r2c1/NR3A2B/4AKn2/6B2 b - - 0 1",
      "id": "puzzle_2252",
      "title": "Mate in 3 moves"
    },
    {
      "description": "BU FengBo - ZHAO ShunXin\nChinese National Champion 1994 ",
      "fen": "3ak4/4a4/4b4/2p3p2/p7p/2PRPnB2/P3c4/3A1N3/2N4r1/2BAK4 b - - 0 1",
      "id": "puzzle_2253",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU Xia - GUO LiPing\nChinese National Champion 1995 ",
      "fen": "r4ab2/5k3/3Nb3c/p3C4/6R2/9/P3P4/8B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_2254",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WAN ChunLin - LI Aidong\nChinese National Champion 1995 ",
      "fen": "2ba1k3/4a1r1n/2nR3c1/p3C3p/9/2P6/Pc2P3P/5CN2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2255",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DaHua - YANG BoLin\nChinese National Champion 1995 ",
      "fen": "1R3ab2/1CC6/5k3/p3p4/9/2p3N2/P8/4r4/3rA4/2B1KA3 w - - 0 1",
      "id": "puzzle_2256",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN YongZheng - YANG HanMin\nChinese National Champion 1995 ",
      "fen": "3R1a3/4k4/n2R5/8p/pcp1c4/6p2/2P1r3P/9/3CAK3/2BA5 w - - 0 1",
      "id": "puzzle_2257",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XiaoKun - HE LianSheng\nChinese National Champion 1986 ",
      "fen": "3aka3/3P1P1C1/C3b4/c2c5/9/9/3p5/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2258",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHANG Wanhua - WU Yi\nChina Team Championship 1998 ",
      "fen": "3nkab2/4a2N1/2c6/prN1p3p/2P6/c3P4/5R2P/1rCRB4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2259",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU QingYang - JIN Bo\nChina Team Championship 1998 ",
      "fen": "4ka3/1C2a4/b1c5N/4p3p/p1b6/6r2/P1nR5/4K4/3CA4/3A5 b - - 0 1",
      "id": "puzzle_2260",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU Jiang - Li Hong Jia\nChina Team Championship 1998 ",
      "fen": "r3kab2/4a4/4b1c1n/CR6p/2p1N4/2P6/P3P1P1P/2r6/4ARn2/3A1KB2 w - - 0 1",
      "id": "puzzle_2261",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZOU TieLi - ZHANG PeiJun\nChina Team Championship 1998 ",
      "fen": "2ba1k1C1/4a4/9/6PNp/4p4/5c3/P2n1c3/3AB4/4K4/2BA5 b - - 0 1",
      "id": "puzzle_2262",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FENG MingGuang - WANG JianPing\nChina Team Championship 1998 ",
      "fen": "1Rc1kab2/4a4/2N1b3n/C7p/4N4/2p1c1P2/r7P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2263",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LUO ZhongCai - JIN Hua\nChina Team Championship 1999 ",
      "fen": "1nb1k1b2/4a4/4na3/P3P2Np/2p6/9/6R1P/9/3K5/2BA1A2c w - - 0 1",
      "id": "puzzle_2264",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SONG GuoQiang - GUO FuRen\nChina Team Championship 1999 ",
      "fen": "3k5/9/b2a5/p3CN2p/2b2R3/P3P4/7r1/2n1B4/4AK3/2BA4c w - - 0 1",
      "id": "puzzle_2265",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WAN ChunLin - WANG Bin\nChina Team Championship 1999 ",
      "fen": "2bak4/2n1a2N1/4bc3/p1p2N2p/9/2P1C1P2/P8/4B2n1/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2266",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CUI Yan - GU JiaHua\nChina Team Championship 1999 ",
      "fen": "4kC3/4R4/2n1b1R2/p7p/9/2B1n3P/Pc2r4/9/4A4/3AKC2r b - - 0 1",
      "id": "puzzle_2267",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIE ZhouMiao - ZHANG Shi\nChina Team Championship 1999 ",
      "fen": "2Rak1r2/5P1R1/4C4/8p/6b2/2p1p4/4c4/4B4/4A4/3rK4 w - - 0 1",
      "id": "puzzle_2268",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI XueSong - XU Bo\nChina Team Championship 1999 ",
      "fen": "3k1ab2/6N2/Rr1a2n2/2C4cp/p5b2/3n5/P7P/3C5/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2269",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Yu - YU Bing\nChina Team Championship 1999 ",
      "fen": "2bak1N2/3R5/4c4/p1p2R2p/6p2/2Pn5/P5P2/5A3/2r5c/3K1AB2 w - - 0 1",
      "id": "puzzle_2270",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DaHua - CHEN XiaoKun\nXiaolin motor car cup 1999 ",
      "fen": "3k1a3/2R1aN3/9/4p4/9/6B1p/9/4C4/9/3AKArc1 w - - 0 1",
      "id": "puzzle_2271",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GONG XiaoMing - LIN JinChun\nChinese National Champion 1998 ",
      "fen": "2bak1br1/1N1Ra1R2/n7n/p3p1p1p/9/2P3P2/P3P2cP/2r1B1N2/4A4/2C1KAB2 w - - 0 1",
      "id": "puzzle_2272",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZONG YongSheng - YAN WenQing\nChinese National Champion 1998 ",
      "fen": "2b1ka3/4a4/8b/2p1p3p/9/2P1P4/7R1/7R1/3KAr1n1/5Ac2 b - - 0 1",
      "id": "puzzle_2273",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI DeLing - ZHENG ChuFang\nChinese National Champion 1998 ",
      "fen": "6R2/4a4/2n1ck3/pr3CN2/1c6p/9/P1p1P3P/2N1B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2274",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU Xia - ZHU WeiPin\nChinese National Champion 1998 ",
      "fen": "4k3C/2r1a2R1/4b1N2/p8/c3n1b2/6P1P/9/4B4/1n2A4/2BAK4 w - - 0 1",
      "id": "puzzle_2275",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YAO Hong Xin - CHI XinDe\nChinese National Champion 1998 ",
      "fen": "5k2C/4a4/4P3b/p7p/3n5/9/9/7C1/6r2/2BAKA3 w - - 0 1",
      "id": "puzzle_2276",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI GuoXun - SUN ZhiWei\nChina Team Championship 1987 ",
      "fen": "2b2k3/2N1a4/4ba3/3Pp4/9/9/4P4/4N4/2CRn1r2/2B1K2c1 b - - 0 1",
      "id": "puzzle_2277",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GAO Hua - MA GeYing\nChinese National Champion 1989 ",
      "fen": "3a3R1/4ak3/9/p7p/4c4/3p3N1/P7P/B1C5B/9/cr1AKA3 b - - 0 1",
      "id": "puzzle_2278",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DaHua - LIU DianZhong\nChinese National Champion 1989 ",
      "fen": "2b3nc1/C1C1n4/5k2b/p1N3r1p/9/1R7/P3P3P/6p2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2279",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Aidong - HU QingYang\nChina Team Championship 1989 ",
      "fen": "4k1b2/4a4/4ba3/3P3N1/C7p/n8/6c1P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2280",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TAO HanMing - HUANG JingXian\nChina Team Championship 1989 ",
      "fen": "3k5/4PR3/4b4/p7p/9/4n4/P5p1P/4Bn3/4KN1c1/2BA5 w - - 0 1",
      "id": "puzzle_2281",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CENG DongPing - MENG LiGuo\nChina Team Championship 1989 ",
      "fen": "3k2b2/2N2R3/b2a5/1C6p/9/9/P3P3P/B2K5/1r7/6n1c w - - 0 1",
      "id": "puzzle_2282",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAO Lin - FU GuangMing\nChina Team Championship 1978 ",
      "fen": "4kab2/4a4/1cn1bc3/p4R2R/2pr5/8N/P3r3P/9/N2pA4/2BAK2C1 b - - 0 1",
      "id": "puzzle_2283",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XiaoKun - YU YouHua\nChinese National Champion 1978 ",
      "fen": "1R1ak4/3R5/4bC2b/p7p/3P1N3/2P3P2/P8/6n2/9/3rKAr2 w - - 0 1",
      "id": "puzzle_2284",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU TianHong - TAO HanMing\nYinli Cup Champion 2000 ",
      "fen": "3k1ab2/3ca4/4N4/8p/4C4/6C2/1p4n1c/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2285",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN YongZheng - TAO HanMing\nZhongli Cup TV fast game Champion 1997 ",
      "fen": "2bakr3/4a4/4b4/p7p/2p6/1r2C4/2P1c1P1P/N1n6/R2KA3C/2B2ABR1 b - - 0 1",
      "id": "puzzle_2286",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU ChiuKing - SUWANDI Eddy\nWorld Xiangqi Championships 1997 ",
      "fen": "3akr1n1/1R2a1c2/b3c4/p1C3p1p/2p3b2/4C4/P1P1P3P/2N5B/4A4/2BAK1rR1 w - - 0 1",
      "id": "puzzle_2287",
      "title": "Mate in 3 moves"
    },
    {
      "description": "KUMAGAI Yasuhiro - NG Shiu Chin\nWorld Xiangqi Championships 1997 ",
      "fen": "3ak4/9/3a4b/p1P1C3p/4p2R1/9/2c1n3P/1rC1B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2288",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Kuo Hua - YANG ChunMian\nWorld Xiangqi Championships 1997 ",
      "fen": "2b2a2c/2Nka1PC1/4b2n1/3P5/9/9/P2c5/3CB4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2289",
      "title": "Mate in 3 moves"
    },
    {
      "description": "KUMAGAI Yasuhiro - SHOSHI Kazuharo\nWorld Xiangqi Championships 1997 ",
      "fen": "2bR1kc2/2N1a4/4ba3/5r3/6p2/9/9/4B4/4p4/3K2B2 b - - 0 1",
      "id": "puzzle_2290",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU ZhengWei - ZHANG ZhiZhong\nChinese National Champion 1986 ",
      "fen": "3Rkab1C/4ac3/4bN3/p4c3/9/6C2/8P/3A2n2/7r1/3AK4 b - - 0 1",
      "id": "puzzle_2291",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG WangHou - LIN Sen-Rong\nWorld Xiangqi Championships 1997 ",
      "fen": "2N1k4/4a4/3Pb4/p7p/5np2/4C4/P7P/3CBrn2/4K4/R6c1 b - - 0 1",
      "id": "puzzle_2292",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HENKE Simon - SHOSHI Kazuharo\nWorld Xiangqi Championships 1997 ",
      "fen": "3Rk1b2/4a4/4b1n2/4p3p/2p3p2/R8/3rP2cP/BC2B1N2/4A1r2/1N1A1K2c b - - 0 1",
      "id": "puzzle_2293",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HII Kong Ming - SCHMIDT BRAUNS Joachim\nWorld Xiangqi Championships 1997 ",
      "fen": "2bak4/4a4/4b1n2/p2R4p/2p1N4/9/n3C2rP/2N6/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_2294",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG GuoTai - ZHANG ZiLiang\nHong Kong Team Champion 2001 ",
      "fen": "3k1c3/4R4/b3R4/p3C4/9/3r5/P1p1n4/9/4A4/2BNKAB2 w - - 0 1",
      "id": "puzzle_2295",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG ZhiFeng - PAN ZongYao\nHong Kong Team Champion 2001 ",
      "fen": "4kab2/4a4/C3b4/p3p3p/4c1p2/9/3n1rP1P/4B1N2/4AR3/2BAK4 b - - 0 1",
      "id": "puzzle_2296",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LONG GuangMing - FANG WenWei\nHong Kong Team Champion 2001 ",
      "fen": "6R2/4k3C/7Cn/4pP2p/9/p2p5/4c3P/2r5B/2N1A4/3AK4 w - - 0 1",
      "id": "puzzle_2297",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG ZhiHong - CAI GuanHeng\nHong Kong Team Champion 2001 ",
      "fen": "3ak4/4anN2/3c5/2p4C1/p5p2/5C3/P5P1r/B8/4A2R1/3AK1B2 w - - 0 1",
      "id": "puzzle_2298",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG YaSong - ZHANG ZhiFeng\nHong Kong Team Champion 2001 ",
      "fen": "2baka3/9/3Pb4/2P6/9/7R1/9/3p5/5rn2/4K4 b - - 0 1",
      "id": "puzzle_2299",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU Jin - YUNG Tak Keung\nHong Kong Team Champion 2001 ",
      "fen": "9/3k1r3/3aR4/9/9/9/9/8B/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2300",
      "title": "Mate in 3 moves"
    },
    {
      "description": "PAN ZongYao - CAI YongGuan\nHong Kong Team Champion 2001 ",
      "fen": "2rakab2/9/1c2R4/p1C5p/6p2/1R2cr3/P5P1P/2N3n2/9/2BAKAB2 b - - 0 1",
      "id": "puzzle_2301",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MA John - JI ZhongQi\nCanadian National Champion 2002 ",
      "fen": "2bak2C1/4a4/4b4/p2R4p/9/P8/2r5P/4rn3/4A4/3K1A1R1 b - - 0 1",
      "id": "puzzle_2302",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DING JianQuan - YU Ming\nHong Kong Individual Championship 2002 ",
      "fen": "2ba1k3/6N2/4ba3/8C/4nR3/P3r4/2p2pp2/B8/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_2303",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TOM Jing - FUNG Stephen\nNew York vs Toronto Xiangqi Match 2002 ",
      "fen": "2b1k4/9/9/8p/6b2/P3r4/6R1P/5C3/9/3K1n3 b - - 0 1",
      "id": "puzzle_2304",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHIENG Kuok Wu - ZHANG WangHou\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "2r1kab2/1c2a4/4b4/p1RNn3p/7n1/4C4/P3P3P/3C2p1B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2305",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Nguyen Thanh Bao - LIU An Sheng\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "5k3/4R4/4r4/8p/9/R8/6P1P/3A2Nr1/9/2BAK4 w - - 0 1",
      "id": "puzzle_2306",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHIENG Hie Mee - CHANG Diana\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "3ak1b2/4a4/2c1b1n2/4p3p/p1p6/4PN3/P1P5P/C2cB1N2/1rn1K4/2RA1AB2 b - - 0 1",
      "id": "puzzle_2307",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHANG Diana - CHIENG Ming Chuo\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "4kab2/4a4/4b4/1N2P3p/3C5/2P3n2/4cn3/4p4/9/5K3 w - - 0 1",
      "id": "puzzle_2308",
      "title": "Mate in 3 moves"
    },
    {
      "description": "BU FengBo - WAN ChunLin\nPearl Star Cup 16 tournament 2002 ",
      "fen": "2c1kabC1/2R2P1R1/4bar2/4pn2p/p1p3r2/4P4/P5c1P/N3B1N2/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2309",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YAN ChaoHui - WEN Jing\nChinese National Champion 2002 ",
      "fen": "2ba1kb2/4a4/2N2c3/p1R1p4/2p1c1p2/9/P6rP/C3C4/4A4/2BAK1B2 b - - 0 1",
      "id": "puzzle_2310",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG ShenHong - XU Chao\nChinese National Champion 2002 ",
      "fen": "4kab2/4ar3/4R4/p1N1p3p/9/2P6/c3P3P/4B4/4K1R1N/2nr5 b - - 0 1",
      "id": "puzzle_2311",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHANG Wanhua - WU Xia\nChinese National Champion 2002 ",
      "fen": "3P1kc2/4a4/9/9/2R4Rp/9/P5r2/4r4/3pA4/1C2KA3 b - - 0 1",
      "id": "puzzle_2312",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIE Jing - WANG Bin\nChinese National Champion 2002 ",
      "fen": "2bak4/4a4/8b/9/9/9/4r4/1R4p2/4AK3/2p2A3 b - - 0 1",
      "id": "puzzle_2313",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Hui - SHANG SiYuan\nChinese National Champion 2002 ",
      "fen": "2baka3/9/4c3R/p1p2N2p/6p2/P6c1/2P1P1n1P/6N2/4A4/2rCKAB2 w - - 0 1",
      "id": "puzzle_2314",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GONG Qin - GUO LiPing\nChinese National Champion 2002 ",
      "fen": "2bk1ab2/4a4/6n2/p7p/6P2/3R5/PnCrc3P/2N1C4/1c2Ar3/R1BAK1B2 b - - 0 1",
      "id": "puzzle_2315",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN QiMing - FENG MingGuang\nChinese National Champion 2002 ",
      "fen": "6b1C/5kr2/n2aP4/3N5/9/9/9/9/4A4/2BcK2R1 w - - 0 1",
      "id": "puzzle_2316",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - LI Xuan\nChinese National Champion 2002 ",
      "fen": "3k5/4a4/4Pac2/3N2N2/4C1n2/6B2/1c2p4/9/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2317",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FENG MingGuang - CHEN HanFeng\nChinese National Champion 2002 ",
      "fen": "3k5/4a1CC1/4Nc3/p7p/4p4/2P6/1cN2n1nP/4BA3/9/2BAK4 b - - 0 1",
      "id": "puzzle_2318",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TAO HanMing - JIANG Chuan\nChinese National Champion 2002 ",
      "fen": "2b1k1P2/5P2c/3n5/9/9/9/9/5A3/4AC3/3K5 w - - 0 1",
      "id": "puzzle_2319",
      "title": "Mate in 3 moves"
    },
    {
      "description": "J ayme - KUSTOMO B.\nAsian xiangqi Championship 2002 ",
      "fen": "2bk5/9/4b4/p2C5/9/2r3P2/4c4/4B4/4A4/3RKAB2 w - - 0 1",
      "id": "puzzle_2320",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NG Yee Hong - SUN Chang Ching\nAsian xiangqi Championship 2002 ",
      "fen": "2r1kaR2/7r1/5a1cb/p3N2Rp/9/9/c3P3P/4C3B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2321",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHIENG Ming Chuo - SOH Ying Ying\nAsian xiangqi Championship 2002 ",
      "fen": "5a3/3k3C1/b8/4P4/6N2/6P2/8r/4B4/3r5/1R1AKAB2 w - - 0 1",
      "id": "puzzle_2322",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GUO RuiXia - DAN Xin\nChina Team Championship 2003 ",
      "fen": "3ak4/4a4/bc2N4/C3p3p/6Rr1/2p6/n3P3n/4B3B/4A4/1N1AK4 w - - 0 1",
      "id": "puzzle_2323",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Xing - CHEN BaoQuan\nChinese National Champion 1976 ",
      "fen": "3a1a3/4k1c2/4N1n2/3R2N1p/4p4/4C1R2/P3P3P/9/2r1A2r1/1cBAK1B2 w - - 0 1",
      "id": "puzzle_2324",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Tai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3ak4/4ar3/4R3b/9/2p6/9/9/4C4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_2325",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YAN Andrew - Joern TESSEN\nWorld Xiangqi Championships 2003 ",
      "fen": "2ba1RR2/4kr3/n4cN2/p1p1p3p/3r5/9/P3P3P/4B4/1C2A4/2BAK4 w - - 0 1",
      "id": "puzzle_2326",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU RongHua - MIAO LiMing\nChina National Xiangqi League 2003 ",
      "fen": "3k1aC2/4a4/4b4/p3CR2p/6p2/2P6/4c3P/2N6/3r3r1/2BAKAB2 b - - 0 1",
      "id": "puzzle_2327",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG Bin - WAN ChunLin\nChina National Xiangqi League 2003 ",
      "fen": "C3kab2/1c1Pa4/N3b1n2/3rn3p/4p2c1/2PR5/4P3P/1C2B1N2/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2328",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN YuYan - PAN ZhenBo\nChinese National Champion 2003 ",
      "fen": "R4ab2/1CNck4/3ab1n2/4p1p1p/9/9/P1P1Pn2c/N3BCr2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2329",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WEN Jing - JIN HaiYing\nChinese National Champion 2003 ",
      "fen": "1Cbakan1C/2R6/2n1b4/p1r1p4/9/2P6/P3P4/4B4/3RA4/4KrB1c w - - 0 1",
      "id": "puzzle_2330",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CUI Yan - CHUN Zhong\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "5a3/4a4/RN1k4b/8p/4pn3/9/p1P1c2rP/4C4/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_2331",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHUN Zhong - CAO Lin\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "6C2/5k3/9/8p/3N5/4Rn3/8P/3A5/c5r2/3p1K3 w - - 0 1",
      "id": "puzzle_2332",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG Bin - DONG XuBin\nYe Shi  Bei Supper position Tournament 2003 ",
      "fen": "4kab2/4a4/1r2b4/p1R1n3p/9/4C4/P1P1c1P1P/3RB1r2/4Ac3/1NNK1AB2 w - - 0 1",
      "id": "puzzle_2333",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN YongZheng - ZONG YongSheng\nYe Shi  Bei Supper position Tournament 2003 ",
      "fen": "2bNk4/6R2/3a1c3/4C4/p8/4p1B2/Pn1r4P/1c2C4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2334",
      "title": "Mate in 3 moves"
    },
    {
      "description": "OUYANG Qilin - DONG Bo\nChina Team Championship 2003 ",
      "fen": "3a2bn1/2P1k4/5P3/4C4/r5b1p/4R4/9/3AB4/4A4/2B1K4 w - - 0 1",
      "id": "puzzle_2335",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DAN Xin - WANG Ding\nChina Team Championship 2003 ",
      "fen": "3a1k3/2C5R/3ar4/9/p1b1pnp2/2P6/6P1P/4B4/4A4/1C2KA3 w - - 0 1",
      "id": "puzzle_2336",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUA Rui - HUANG Min\nChina Team Championship 2003 ",
      "fen": "3k1Rb2/4a4/9/p1p5p/9/2Prp1P2/P3c3n/1C2B4/4A4/3AKRr2 b - - 0 1",
      "id": "puzzle_2337",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Xian - ZHANG XiaoXia\nChina Team Championship 2003 ",
      "fen": "5ab2/2Nka2R1/1P2bc3/p3p3p/2cn1Cp2/9/P3Pr2P/2C1B1N1B/9/3AKA3 w - - 0 1",
      "id": "puzzle_2338",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GUO LiPing - LIU Jun\nChina Team Championship 2003 ",
      "fen": "1R1rkab2/4a4/4b3n/pN3P2p/9/4C1B2/4P3P/3A5/9/c1B1KA3 w - - 0 1",
      "id": "puzzle_2339",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TANG JianHua - CHI XiaoFang\nChina Team Championship 2003 ",
      "fen": "2bak4/4a4/1c2b2c1/2p3CRp/p2NP4/2P3B2/P4rn1P/2N6/9/3RKAB1r b - - 0 1",
      "id": "puzzle_2340",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU You - TANG Ke\nWacker Real Estate Cup xiangqi Master Champion 2004 ",
      "fen": "5ar2/4ak3/6n1b/8p/2p3b2/9/P3R3P/9/1C7/2BAKA3 w - - 0 1",
      "id": "puzzle_2341",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GAI MingQiang - KE ShanLin\nChina Team Championship 2004 ",
      "fen": "C1ba5/2R2k3/4b4/3N4p/6p2/P8/8P/3ApA3/3K4c/4r4 b - - 0 1",
      "id": "puzzle_2342",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG XiaoHua - YANG Jian\nChina Team Championship 2004 ",
      "fen": "5ab2/C1P2k3/4b4/9/9/2B2N3/3pn4/9/3cp4/2B2K3 b - - 0 1",
      "id": "puzzle_2343",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIE YeJian - GUO DongWen\nChina Team Championship 2004 ",
      "fen": "2bN5/3R5/5k3/9/p8/9/9/9/4A1n2/3K4r w - - 0 1",
      "id": "puzzle_2344",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUO XianYong - LIN WenXian\nChina Team Championship 2004 ",
      "fen": "5kb2/2N1a4/2n6/9/2b1p4/1p5p1/5C3/3ABA2c/5C3/2B1K4 w - - 0 1",
      "id": "puzzle_2345",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI ShuYing - GUO RuiXia\nChina Team Championship 2004 ",
      "fen": "2bak1b2/4a4/9/p1CRN3p/4c1n2/2P1n4/P3N3P/B3K4/1r7/5A3 b - - 0 1",
      "id": "puzzle_2346",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuanFang - HUANG Wei\nChina Team Championship 2004 ",
      "fen": "2bC1k3/9/4N4/8p/5P3/9/9/B1n2A3/c5p2/1c3K3 b - - 0 1",
      "id": "puzzle_2347",
      "title": "Mate in 3 moves"
    },
    {
      "description": "BUA BinBin - JIN HaiYing\nChina Team Championship 2004 ",
      "fen": "2ba1a3/6R2/5k1N1/4P4/p8/8r/P8/8B/4A1n2/3AK1B2 w - - 0 1",
      "id": "puzzle_2348",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GUO LiPing - GUO RuiXia\nChina Team Championship 2004 ",
      "fen": "3ak3C/5R3/4b4/4p3p/p8/5rP2/P8/B2A4B/3c3C1/3c1K3 w - - 0 1",
      "id": "puzzle_2349",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG LinNa - HO Li Pheng\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "3ak1b2/4aP3/4b4/9/p5c2/7p1/P1R6/4C4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2350",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LAU VengTak - JIRAPARKDEEPAN Vithaya\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "4kab2/4a2N1/2P1b2c1/1R6p/4C4/6B2/2p6/9/4A4/3rK4 w - - 0 1",
      "id": "puzzle_2351",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Cheng Kuo - LAI Han Soon\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "2N6/9/5k3/9/5n3/9/2R1r4/B2A4B/4A4/5K3 w - - 0 1",
      "id": "puzzle_2352",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIRAPARKDEEPAN Vithaya - LUM Tek Sim\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "2b1ka3/1R2c4/4b1NC1/2p5p/9/2P1CR3/P3P1r1P/4B4/4A4/3rKAB2 w - - 0 1",
      "id": "puzzle_2353",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LUM Tek Sim - LAU VengTak\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "4kab2/4a4/4b4/p6Rp/6r2/2p5P/P3P4/5N3/2c1A4/3A1K3 b - - 0 1",
      "id": "puzzle_2354",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI DeZhi - LU ZengRong\nChina National Xiangqi League 2003 ",
      "fen": "7R1/1N2k4/3a1a3/8p/4C4/4r4/P3c4/9/9/4KAB2 w - - 0 1",
      "id": "puzzle_2355",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU Ming - LI CuiFang\nChina Team Championship 1990 ",
      "fen": "5kb2/4P4/5a3/9/9/9/6R2/B3B4/4A4/3r1K3 w - - 0 1",
      "id": "puzzle_2356",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MA Lin - XIONG Yan\nChina Team Championship 1990 ",
      "fen": "5ab2/3Rk4/4b4/p3p4/9/PN4P1C/2P5n/4BK3/1r7/5nB2 b - - 0 1",
      "id": "puzzle_2357",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XiaoKun - HU YuanMao\nChinese National Champion 1981 ",
      "fen": "4kab2/9/2n1bR2c/p1p1p1N1p/3r5/2P6/P3P3P/2n1B2C1/9/3AKA3 w - - 0 1",
      "id": "puzzle_2358",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU QingYang - ZHU GuiBao\nChina Team Championship 1990 ",
      "fen": "3k1C3/n1R1a1N2/1c2banr1/p3R4/6b1p/Pr7/4P4/3CB4/4A4/3AK1B1c w - - 0 1",
      "id": "puzzle_2359",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI CongDe - CHEN XinAn\nChina Team Championship 1990 ",
      "fen": "1C3P3/3k2NC1/b3ba3/8p/4c4/9/8P/8B/3p1r3/4K4 b - - 0 1",
      "id": "puzzle_2360",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG MingZhong - DING JiGuang\nChina Team Championship 1990 ",
      "fen": "2cP1ab2/2N1k4/4b4/p3p3p/9/1rBR5/4c3P/9/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2361",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIAO ErPing - LI Bo\nChina Team Championship 1990 ",
      "fen": "2b1ka3/4a4/2P1b4/2p5C/9/2P3C2/P5c1P/2r3n2/5R3/2BAKABc1 w - - 0 1",
      "id": "puzzle_2362",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TONG BenPing - YAN WenQing\nChina Team Championship 1990 ",
      "fen": "2C1kRb2/4a4/r3c4/p3p3p/6p2/2n3c2/P7P/B1C3N2/4N4/3AKAB2 b - - 0 1",
      "id": "puzzle_2363",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHE XingGuo - ZHAO ZhuoYu\nChina Team Championship 1990 ",
      "fen": "3a1k1C1/4a1R2/b3b4/p3p3p/5cp2/2P3B2/P1Nn1r2P/N8/4A4/2BAK2R1 w - - 0 1",
      "id": "puzzle_2364",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG YingFu - TONG BenPing\nChina Team Championship 1990 ",
      "fen": "9/5k1P1/6r2/9/4R1c2/9/9/5A3/4K4/3A5 w - - 0 1",
      "id": "puzzle_2365",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG TianYi - WANG HaoChang\nAsian xiangqi Championship 2004 ",
      "fen": "2R6/3nR4/1r1kC4/p3p3p/2b6/9/P3P3P/6r2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2366",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Cheng Junchao - XU TianHong\nChinese National Champion 2004 ",
      "fen": "2Ra5/3k4C/2nrb1P1b/p1c1p3p/9/6C2/P3P3P/3p2N2/9/2BcKAB2 w - - 0 1",
      "id": "puzzle_2367",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - MIAO LiMing\nChinese National Champion 2004 ",
      "fen": "1R1kc1b2/9/4b4/8p/p2P1R3/9/P7P/7r1/4r4/5K3 b - - 0 1",
      "id": "puzzle_2368",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI ZhiPing - Lv Qin\nChina National Xiangqi League 2004 ",
      "fen": "2ba1ab1r/7R1/1c2kN2c/p1p5n/4pn3/9/P1P1r3P/N3B2C1/6R2/2BAKA3 w - - 0 1",
      "id": "puzzle_2369",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DONG Bo - CHEN LiChun\nCi Xi Xiang Xie Cup Master Champion 2004 ",
      "fen": "2baka3/9/8b/p1p3R1p/9/2Pnr4/P7P/9/4Ar3/2BAKCBN1 b - - 0 1",
      "id": "puzzle_2370",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Qun - WANG JinRong\nJiangsu Province, the National Fitness Games 2004 ",
      "fen": "3a2b2/2N1k2r1/3ab4/p3p4/2P2np2/5R3/P3P3p/4B4/1C7/2BAKAc2 w - - 0 1",
      "id": "puzzle_2371",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN FuLu - LU FengLian\nJiangsu Province, the National Fitness Games 2004 ",
      "fen": "2RakCb2/5c3/9/p1C1p3p/6p2/2P6/4r3P/B2n1A2B/3K5/3A5 b - - 0 1",
      "id": "puzzle_2372",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MATA Nicole Ta - SOH Ying Ying\nWorld Xiangqi Championships 2005 ",
      "fen": "2bakc3/4a4/2n5R/p1p5p/6P2/2P6/P3P3P/B3B4/1R1KAr3/4r3c b - - 0 1",
      "id": "puzzle_2373",
      "title": "Mate in 3 moves"
    },
    {
      "description": "THIEN Fui Chuen - SCIMIDT Lan\nWorld Xiangqi Championships 2005 ",
      "fen": "2bakc3/4a4/2n5R/p1p5p/6P2/2P6/P3P3P/B3B4/1R1KAr3/4r3c b - - 0 1",
      "id": "puzzle_2374",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TOLONEN Juoni - TRENH A Sang\nWorld Xiangqi Championships 2005 ",
      "fen": "3k1ab2/2c1a4/4b4/p1R5p/9/3C5/P1P1c1P2/N3B1r2/3rA4/4KAB2 b - - 0 1",
      "id": "puzzle_2375",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHOSHI Kazuharo - NG YipSing\nWorld Xiangqi Championships 2005 ",
      "fen": "4ka3/4a4/1c2b3b/9/3R4p/9/P3C3P/4B4/4A4/3K1rB2 w - - 0 1",
      "id": "puzzle_2376",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NGUYEN Vu Quan - SHOSHI Kazuharo\nWorld Xiangqi Championships 2005 ",
      "fen": "5kb2/n1N1a4/3a5/2c3P2/6b2/9/9/4B4/4AC3/4KAB2 w - - 0 1",
      "id": "puzzle_2377",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TAM ShaoYi - HOR Weng Yeow\nWorld Xiangqi Championships 2005 ",
      "fen": "3a5/2P1ak3/4b4/4R3p/2b6/6B2/2c5P/5r3/C1n2N3/2BA1K3 b - - 0 1",
      "id": "puzzle_2378",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WOOD peter - HONG Chia Chuan\nWorld Xiangqi Championships 2005 ",
      "fen": "2bk1abn1/9/5n3/8p/p8/2B1P1P2/P1p6/3RK4/N2r5/6r2 b - - 0 1",
      "id": "puzzle_2379",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GREGUS Laslo - REINDERS Rudolf\nWorld Xiangqi Championships 2005 ",
      "fen": "1R1akab1C/9/r8/4p4/9/p4R3/c3P1r2/4B4/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_2380",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LEE Michuel - WOO WeiCheung\nWorld Xiangqi Championships 2005 ",
      "fen": "1r1k5/6R2/3a2N2/p2N5/1P4p2/9/1c6P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2381",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEUNG WingOn - GOLLMAR Bastian\nWorld Xiangqi Championships 2005 ",
      "fen": "2b1kabn1/4a4/4c4/p3C1P1p/2NR5/2p6/P3P3P/5rNnB/4AK3/9 w - - 0 1",
      "id": "puzzle_2382",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NAEGLER Michael - LAI Han Soon\nWorld Xiangqi Championships 2005 ",
      "fen": "3a1ab2/4k4/1P7/9/6b2/9/5n3/4B3B/4Ap3/4K4 b - - 0 1",
      "id": "puzzle_2383",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TROMBUTTON Andres - BAKRA Anuar Bin\nWorld Xiangqi Championships 2005 ",
      "fen": "3k2b2/2c1P3n/3Nb4/9/p3C4/3p2P2/8P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2384",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MACGREGOR Angua - GOLLMAR Bastian\nWorld Xiangqi Championships 2005 ",
      "fen": "2ba2b2/1CN1ak3/8n/p1P1p1p1p/P7r/3c2P2/7R1/4BN3/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_2385",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YE RongGuang - FUNG Stephen\nWorld Xiangqi Championships 2005 ",
      "fen": "3ak4/3Ra4/4b4/p6rp/5P3/3Nc4/P7P/2R1B3C/1p1K5/4rA3 b - - 0 1",
      "id": "puzzle_2386",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TANAKA Atsushi - LIN Sen-Rong\nWorld Xiangqi Championships 2005 ",
      "fen": "9/5k3/9/p1N3p2/8p/5CP2/P3P3P/4B3B/3Cr2r1/5K3 b - - 0 1",
      "id": "puzzle_2387",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GREGUS Laslo - GEREMY Xavier\nWorld Xiangqi Championships 2005 ",
      "fen": "5Nb2/4k4/9/R3C4/8p/P8/3r4c/4B4/4K4/5AB2 w - - 0 1",
      "id": "puzzle_2388",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - YU YouHua\n5 Ram Cup Xiangqi Championship 2006 ",
      "fen": "2bakc3/4a4/4b4/4C4/4P3p/6R2/3r3CP/4B4/2n1A4/3A1K3 w - - 0 1",
      "id": "puzzle_2389",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MIAO LiMing - NEI TieWen\nChinese National Champion 2005 ",
      "fen": "4k4/4R4/8C/p1p5p/9/P8/1nPp3r1/4B4/4N4/3AKA1C1 b - - 0 1",
      "id": "puzzle_2390",
      "title": "Mate in 3 moves"
    },
    {
      "description": "BU FengBo - ZHANG ShenHong\nChinese National Champion 2005 ",
      "fen": "4k4/4a4/1n1CN4/4C4/p7p/2P6/1c1nP3P/8B/5K3/3A1A3 w - - 0 1",
      "id": "puzzle_2391",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIE YeJian - JIN So\nChina National Xiangqi League 2005 ",
      "fen": "4kab2/3ca4/4b4/p2rp4/6c2/2R6/P5P1P/B2C4N/3KA4/5AB2 b - - 0 1",
      "id": "puzzle_2392",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIE YeJian - Lv Qin\nChina National Xiangqi League 2005 ",
      "fen": "2bak1b2/4a4/9/C3N4/9/2B6/R1c1P3P/3r5/4K1n2/5AB2 b - - 0 1",
      "id": "puzzle_2393",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHANG Wei - CAI Yi\nChina National Xiangqi League 2005 ",
      "fen": "2RakaR2/5P3/9/9/pn1r1c2p/9/P7P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2394",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG GuoFeng - LIU Zheng\nWorld Xiangqi masters MMI Final 2006 ",
      "fen": "3ak1b2/3Ra3n/4b4/2C3R1p/2p6/5NP2/p1P1P4/4N4/7r1/1crAKAB1c b - - 0 1",
      "id": "puzzle_2395",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIANG Chuan - ZHENG YiHong\nChinese National Champion 2006 ",
      "fen": "1r1a1ab2/CcNrk4/3Rb4/3R4p/P3pn3/9/9/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2396",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO XinXin - HUANG ZhuFeng\nChinese National Champion 2006 ",
      "fen": "3k1ab2/4a4/3cbN2n/4C4/4P3p/p1B2N3/p3C3P/3RB4/n8/1r1AKA3 w - - 0 1",
      "id": "puzzle_2397",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FENG XiaoXi - CHEN LiChun\nChinese National Champion 2006 ",
      "fen": "5a3/4n1RN1/4k4/p1pPp3p/9/4r4/P1P5P/4C4/4A4/2cA1Kc2 w - - 0 1",
      "id": "puzzle_2398",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG Yang - GONG XiaoMin\nChina National Xiangqi League 2006 ",
      "fen": "3akR3/9/4b1n2/p8/2p2PR2/9/P1P5P/3K1C3/1r2r4/1NBc5 b - - 0 1",
      "id": "puzzle_2399",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CUI Yan - SUN HaoYu\nChinese National Champion 2007 ",
      "fen": "4k1b2/9/3a1a2b/3R5/9/4r4/9/4p4/9/3A1K3 b - - 0 1",
      "id": "puzzle_2400",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN QiMing - SU ShaoFeng\nChinese National Champion 2007 ",
      "fen": "5k3/9/n1N2a1R1/2p1n1p1p/9/p1c3P2/rN6P/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2401",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHEN Peng - LIU Ming\nChinese National Champion 2007 ",
      "fen": "5aN2/1N1ka4/b8/p8/6P2/P3nc3/5n3/4BA2C/5K3/3A2B2 b - - 0 1",
      "id": "puzzle_2402",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG JingYuan - TSE Richard\nCalgary Cup North America xiangqi Championship 2007 ",
      "fen": "2bc5/4a3C/3kba3/p3pPRN1/4r1P2/P8/8P/4B4/4A4/2rAK4 b - - 0 1",
      "id": "puzzle_2403",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TAO HanMing - WANG Bin\nJia Zhou Cup GM Champion 2007 ",
      "fen": "CCba1k1n1/4a1c2/4R4/7r1/2P5p/P1B3p2/4P3P/9/2c1A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2404",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DaHua - Lv Qin\nJia Zhou Cup GM Champion 2007 ",
      "fen": "3ak1P2/4aP3/4c4/4R4/2b5r/1p4B2/9/4C4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2405",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NGUYEN Vu Quan - TAN ZhenBang\nWorld Xiangqi Championships 2007 ",
      "fen": "2b1k4/3P5/c2ab1P2/3N5/9/9/3p1n3/4BA3/2nCA3C/4K1B2 w - - 0 1",
      "id": "puzzle_2406",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Nguyen Thanh Bao - MINARTA Ifan\nWorld Xiangqi Championships 2007 ",
      "fen": "1CCa5/3ck4/3a5/4p3p/5n3/5Np2/P3Pn2P/4BA3/9/4KAB2 w - - 0 1",
      "id": "puzzle_2407",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WOO WeiCheung - YANG Xiao Lin\nWorld Xiangqi Championships 2007 ",
      "fen": "3a2c2/4a1P2/4bkN1b/1N7/9/1c4B2/p8/3ABAn2/4C4/4K4 w - - 0 1",
      "id": "puzzle_2408",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU YinChuan - NG JunMing\nWorld Xiangqi Championships 2007 ",
      "fen": "3ak4/2n1a2N1/4b3b/4C3p/P1p3p2/4p3P/6Pc1/1c2B4/3NA4/4KAB2 w - - 0 1",
      "id": "puzzle_2409",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YE RongGuang - JIRAPARKDEEPAN Vithaya\nWorld Xiangqi Championships 2007 ",
      "fen": "4kab2/4C4/2P1b4/9/9/4N4/4p4/3A5/n3A1p2/1c3K3 b - - 0 1",
      "id": "puzzle_2410",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU Xiao Lan - CHAN Chi Mui\nWorld Xiangqi Championships 2007 ",
      "fen": "4k1b2/1R1Pa4/4bc3/p6r1/3C4p/6pc1/P2nP3P/N8/3C5/2BAKAB2 w - - 0 1",
      "id": "puzzle_2411",
      "title": "Mate in 3 moves"
    },
    {
      "description": "BETTS Nathalie - GOOI Wen Nee\nWorld Xiangqi Championships 2007 ",
      "fen": "3k1ab2/4a4/1r7/p7p/P3p2C1/8P/9/4B4/2n1A4/3A1K3 b - - 0 1",
      "id": "puzzle_2412",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHIU Yu Kuen - LI HengHong\nGuangzhou,Hong kong,Macau Match 2008 ",
      "fen": "3k2b2/4P4/3Nb4/9/7P1/5n3/3p5/4B4/4A4/2BA1Kp2 w - - 0 1",
      "id": "puzzle_2413",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MA YunRun - LAU KeiCheong\nNorth America  Cup Xiangqi Championship  2008 ",
      "fen": "4kaR2/9/1r1cN4/p7p/3nP1p2/9/P2r2P1P/4C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2414",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JI JiaQing - TRUONG Chanh Huynh\nNorth America  Cup Xiangqi Championship  2008 ",
      "fen": "4kab2/4a4/4bc3/p3p3p/9/9/P3n3P/1C1RC4/N3A2r1/3A1K3 b - - 0 1",
      "id": "puzzle_2415",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TEO Guimin - NGO Lan Huong\nAsian xiangqi Championship 2008 ",
      "fen": "2bak1b2/4a4/2n5n/p1p1p3p/3N5/1R2N3P/P1P6/4K4/3r1r3/9 b - - 0 1",
      "id": "puzzle_2416",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHU ZhongQian - GONG JieSheng\nAsian xiangqi Championship 2008 ",
      "fen": "3a3C1/2n1ak2C/4bcN2/4c4/2b1pP3/6B2/9/9/4K4/2B2A3 w - - 0 1",
      "id": "puzzle_2417",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN Bo - ZHAO GuoRong\nChina National Xiangqi League 2007 ",
      "fen": "4kabC1/R3a4/2n1b1c2/4C4/2N3r2/3p5/2p6/4B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_2418",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN So - JIANG Chuan\nChina National Xiangqi League 2007 ",
      "fen": "3k4C/4aP3/3a5/3PN4/n4c3/9/9/9/4p4/4K4 w - - 0 1",
      "id": "puzzle_2419",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG HaiLin - HE Gang\nChina National Xiangqi League 2007 ",
      "fen": "2ba2P2/4ak2C/7P1/7C1/4n1b2/9/9/3A5/4K4/5A3 w - - 0 1",
      "id": "puzzle_2420",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HAO JiChao - ZHANG Qiang\nChina National Xiangqi League 2007 ",
      "fen": "2r1kab2/4a4/4b4/pN1RC3p/4C1pP1/4P1P2/6n2/9/c3A1c2/3KNA1r1 w - - 0 1",
      "id": "puzzle_2421",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHU ZongSi - TAO HanMing\nChina National Xiangqi League 2007 ",
      "fen": "3a4R/4ak3/4b4/9/p5b2/4nr3/2P4RP/2r1B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2422",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU WenXue - LIU DianZhong\nChina National Xiangqi League 2006 ",
      "fen": "3akR3/9/4b1n2/p8/2p2PR2/9/P1P5P/3K1C3/1r2r4/1NBc5 b - - 0 1",
      "id": "puzzle_2423",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - WANG Bin\nChina National Xiangqi League 2006 ",
      "fen": "5aC2/4ac3/4k4/pR1P5/2b6/4c4/P2rN3P/9/4C4/2BA1KB2 b - - 0 1",
      "id": "puzzle_2424",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN FuJie - SHANG Wei\nChina National Xiangqi League 2006 ",
      "fen": "C4k3/4P4/2N2a3/9/2c6/9/3p5/6p2/4A4/2B2KB2 w - - 0 1",
      "id": "puzzle_2425",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU WenXue - YU YouHua\nChina National Xiangqi League 2006 ",
      "fen": "4ka3/3R5/3R5/7rp/3C5/9/P1P1P3P/2N1BA3/3rAK3/2c6 w - - 0 1",
      "id": "puzzle_2426",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HONG Zhi - ZHANG Qiang\nChina National Xiangqi League 2006 ",
      "fen": "1Cbak4/1R2a4/4bcr2/4p3p/P2N5/2BR5/2P1P3n/4B4/9/3A1K3 b - - 0 1",
      "id": "puzzle_2427",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN HaoYu - ZHANG ShenHong\nChina National Xiangqi League 2005 ",
      "fen": "3k1ab1C/4a2C1/9/p3p4/2pR5/9/P3n3P/Bc2K4/3r5/5AB2 b - - 0 1",
      "id": "puzzle_2428",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Jun - WANG Qing\nChinese National Champion 2007 ",
      "fen": "1r2k4/3R4R/4n4/4p1p1p/2b4r1/1c7/p5P1P/2C3N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2429",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU JunQiang - ZHANG Jiang\nChinese National Champion 2006 ",
      "fen": "5kb2/3c5/3aba3/2P1CN2p/9/4P1N2/9/3nB1n2/3KA4/2B6 b - - 0 1",
      "id": "puzzle_2430",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Zhong - PAN ZhenBo\nChinese National Champion 2006 ",
      "fen": "4kabn1/2n1aR3/4b3c/p1Nr2R1p/4C2r1/P1P1p4/8P/1CN6/4A4/2c1KAB2 w - - 0 1",
      "id": "puzzle_2431",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI DeZhi - LIU ZongZe\nChinese National Champion 2005 ",
      "fen": "2bak4/1N2a4/9/8p/p1R6/4R4/P7P/9/3r5/2BcKAr2 w - - 0 1",
      "id": "puzzle_2432",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN QiMing - MENG Chen\nChinese National Champion 2005 ",
      "fen": "2ba1a3/2R1C2C1/3k5/8p/2bNP4/P1p1c1P2/2Pr2n2/B3B1N2/c3K4/5A3 w - - 0 1",
      "id": "puzzle_2433",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YAN WenQing - ZONG YongSheng\nChinese National Champion 2005 ",
      "fen": "4kab1C/4aR3/9/p8/4c1p2/4N4/P1r2n3/4B4/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_2434",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Huan - SHI SiXuan\nChinese National Champion 2005 ",
      "fen": "1R1akaC2/9/4b4/2P6/4c2r1/9/9/4p1n2/4A4/2CAK4 b - - 0 1",
      "id": "puzzle_2435",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Cheng Junchao - XU TianHong\nChinese National Champion 2004 ",
      "fen": "2Ra5/3k4C/2nrb1P1b/p1c1p3p/9/6C2/P3P3P/3p2N2/9/2BcKAB2 w - - 0 1",
      "id": "puzzle_2436",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FAN SiYuan - ZHANG Kai\nChina Team Championship 2007 ",
      "fen": "6C2/3ka4/1R2na1C1/r8/4p4/6B2/P3P3P/3AB4/9/c3KA3 w - - 0 1",
      "id": "puzzle_2437",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI GuanNeng - DONG Bo\nChina Team Championship 2007 ",
      "fen": "3a1kb2/9/2P1ban2/4C2Np/4P4/5c3/P6C1/2c6/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2438",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO LiKim - ZHAO JinCheng\nChina Team Championship 2007 ",
      "fen": "4k1c2/4a4/4b4/4p3R/2b5p/2N3P2/2r1N3P/1C1n4B/9/c2K1AB2 b - - 0 1",
      "id": "puzzle_2439",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIAO MingLi - GUO DaDi\nChina Team Championship 2007 ",
      "fen": "5a3/3ka4/3cb4/4r4/2P6/6B2/3R5/4B4/3CA4/4KA1p1 w - - 0 1",
      "id": "puzzle_2440",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU Chao - SHANG Wei\nChina National Xiangqi League 2008 ",
      "fen": "1C1a2b2/4k4/2R1nRn2/4p1p1p/9/9/4P1P1P/6N2/4A2rC/r1c1KAB2 w - - 0 1",
      "id": "puzzle_2441",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DANG GuoLei - ZHAO Yin\nChina Team Championship 2007 ",
      "fen": "2bak4/4a4/4b4/9/9/8P/9/cn1CKA3/3p2p1C/3A2B2 b - - 0 1",
      "id": "puzzle_2442",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN HaoYu - CUI Jun\nChina Team Championship 2006 ",
      "fen": "4RN3/2rk5/b8/9/9/p8/2P6/9/4K4/5cB2 w - - 0 1",
      "id": "puzzle_2443",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Yong - ZHANG Kai\nChina Team Championship 2006 ",
      "fen": "3a1kb2/9/2n1b4/pcp1c3p/5N2r/2P6/P3PN3/4BC3/4A4/4K1BR1 w - - 0 1",
      "id": "puzzle_2444",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FAN SiYuan - LIANG FuCong\nChina Team Championship 2006 ",
      "fen": "3k1ab2/2N1a4/9/7Cp/p1R6/3np1P2/P1n3r1P/5A3/7c1/3K1A3 b - - 0 1",
      "id": "puzzle_2445",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI YanWei - Du GuangWei\nChina Team Championship 2006 ",
      "fen": "2bak3C/6R2/b1nc1an2/p3p2Cp/5P1N1/2p6/P3P4/4B4/4A4/2BAK2r1 w - - 0 1",
      "id": "puzzle_2446",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Lin - CHI XinDe\nChina Team Championship 2005 ",
      "fen": "4k4/1N2a4/4b4/4C3p/2b6/4n4/9/4C1n2/1cp1A4/2B1K4 b - - 0 1",
      "id": "puzzle_2447",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HOU ZhaoZhong - LIU JinYu\nChina Team Championship 2005 ",
      "fen": "1CCa1a3/3Nk1c2/4b4/p2r4p/4pr3/2P3BR1/PR6P/3AB4/4A3c/4K4 w - - 0 1",
      "id": "puzzle_2448",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Lin - LI ZhongYu\nChina Team Championship 2005 ",
      "fen": "5k3/4P2R1/4b3b/p8/9/P4r3/9/6p2/4K4/2B3B2 w - - 0 1",
      "id": "puzzle_2449",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Xin Yu - ZHOU XiaoPing\nChina Team Championship 2005 ",
      "fen": "3a1ab2/1R3k3/9/p2Np3p/2bn2p2/P8/2P1c3P/4C4/4A2n1/2rCKAB2 b - - 0 1",
      "id": "puzzle_2450",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI ShouQian - CHENG Long\nChina Team Championship 2005 ",
      "fen": "2bak4/4ar3/4b1P2/p2RCC3/6r1p/9/P3P4/4B4/4A4/2BK1A2c w - - 0 1",
      "id": "puzzle_2451",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN Bo - SONG GuoQiang\nJufeng Cup Xiangqi MasterNational Championships 2000 ",
      "fen": "3k1abC1/4P2R1/4b4/4p3p/9/2p6/P3P3P/B1n6/5K3/c2r5 b - - 0 1",
      "id": "puzzle_2452",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN Bo - HONG Zhi\nJufeng Cup Xiangqi MasterNational Championships 2000 ",
      "fen": "1CPakab2/1n1R5/4b4/p7p/4p4/1N7/r7P/c3B1p2/4A4/4KAc2 w - - 0 1",
      "id": "puzzle_2453",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TAO HanMing - SUN ShuCheng\nChinese National Champion 1989 ",
      "fen": "2ba1k3/4a4/2R1b4/4C3p/2p6/6P2/P1P1P3P/3AK1N1C/6cc1/1NBA1r3 b - - 0 1",
      "id": "puzzle_2454",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YAN WenQing - ZHAO GuoRong\nXianglong Cup xiangqi Tournament 2000 ",
      "fen": "1Cb3R2/3k5/2P6/9/7np/9/4P3P/3pn4/4K4/2Br5 b - - 0 1",
      "id": "puzzle_2455",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU Xia - WEN Jing\nXianglong Cup women's 12-strong tournament 2001 ",
      "fen": "3k1a3/9/4PN3/5c3/4P3p/1p7/9/3A5/4K4/3A5 w - - 0 1",
      "id": "puzzle_2456",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YOU YingQin - WU Xia\nXianglong Cup women's 12-strong tournament 2001 ",
      "fen": "2r1kab2/4a4/4b4/p3C1p2/1N5np/3R2P2/4P3P/B8/4A4/3K2B2 w - - 0 1",
      "id": "puzzle_2457",
      "title": "Mate in 3 moves"
    },
    {
      "description": "QIU Liang - WU JiangWei\nAsian xiangqi Championship 2008 ",
      "fen": "2baka3/9/4b4/p3p4/5N3/9/2C6/c8/1n1KA1n2/5AB2 b - - 0 1",
      "id": "puzzle_2458",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CENG XianWei - Nguyen Thanh Bao\nAsian xiangqi Championship 2008 ",
      "fen": "2bakab2/9/9/8R/9/9/PN2r3P/3p5/3RA4/2B1KAr2 b - - 0 1",
      "id": "puzzle_2459",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN YongZheng - YAMAZAKI Hideo\nAsian xiangqi Championship 2008 ",
      "fen": "3k1ab2/r3a4/1R7/p7p/2b1p4/1N4P2/P1n1P1nRP/C5N2/4Ar3/2B1KAB2 w - - 0 1",
      "id": "puzzle_2460",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DING RuYi - JIANG QuanSheng\nChina Team Championship 1984 ",
      "fen": "3ak2r1/3PaR3/3Pb4/4C3p/6b2/1p4B2/8P/9/4A4/c4KB2 w - - 0 1",
      "id": "puzzle_2461",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAO WeiMin - WANG GuiFu\nChina Team Championship 1984 ",
      "fen": "9/4a4/3k5/5c3/p3C1b1p/9/P3C3P/9/3p5/5Kn2 b - - 0 1",
      "id": "puzzle_2462",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - XU YinChuan\nHibiscus Resort Cup Guangdong Province xq Tournament 1995 ",
      "fen": "4nk3/R2nP4/9/6r2/9/2B6/9/4B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_2463",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG LinNa - HU Ming\nTieli Cup Top 8 Women's Challenge 1996 ",
      "fen": "4R1b2/1C1Nak1r1/b8/p1p1p3p/9/6p2/P3P3P/1nC3c2/3K2c2/3A1A3 w - - 0 1",
      "id": "puzzle_2464",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GANG QiuYing - WU Xia\nTieli Cup Top 8 Women's Challenge 1996 ",
      "fen": "4kab2/4a4/4bc3/p3p3p/4c4/2B1n4/P6R1/N8/2C1A4/2BAKCr2 b - - 0 1",
      "id": "puzzle_2465",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HE LianSheng - XU Bo\nNational Workers' Xiangqitournament 1996 ",
      "fen": "5ab2/4k4/5a3/p7p/6b2/6P1P/P2Cr3R/3K3c1/9/3A1A3 b - - 0 1",
      "id": "puzzle_2466",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG DeQi - ZHU ZongSi\n ",
      "fen": "1n1ak1b2/2C1aR3/4b4/p1pc5/4C1p2/2P6/P1r1P1n1P/2N1B4/4A1N2/3AK1Bc1 w - - 0 1",
      "id": "puzzle_2467",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XingLin - YANG YI\n ",
      "fen": "4k1b2/4a4/2c1ba3/p3P2N1/3C5/1p5p1/3c5/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2468",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XiaoKun - ZHUANG YuTing\nSimon-controlled Cup xiangqi Masters National Championships 1999 ",
      "fen": "5ab2/3ka4/4b4/1R2C3p/n2P5/4C4/2r1p3P/9/9/3AKAB1c w - - 0 1",
      "id": "puzzle_2469",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI XueSong - CHEN FuJie\nSimon-controlled Cup xiangqi Masters National Championships 1999 ",
      "fen": "C3kab2/3R5/1N7/4p3p/1r3n3/9/c8/4B4/3KA4/5AB2 w - - 0 1",
      "id": "puzzle_2470",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WAN ChunLin - CHEN XiaoKun\nSimon-controlled Cup xiangqi Masters National Championships 1999 ",
      "fen": "2b2ab2/6RC1/3kca3/N1p1C3p/9/2P6/P7c/4Bp3/3r5/2B1KA3 b - - 0 1",
      "id": "puzzle_2471",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XUE WenQiang - XIAO GeLian\nSimon-controlled Cup xiangqi Masters National Championships 1999 ",
      "fen": "2ba5/5kN2/n3ba1c1/p1p5p/2P2N3/9/9/B4C3/9/3K1AB2 w - - 0 1",
      "id": "puzzle_2472",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HONG Zhi - YU YouHua\nLaiqun Cup xiangqi tournament  2007 ",
      "fen": "2bak1b2/4a4/3c2P2/p1p1c3p/9/1CP4N1/P7P/4r4/4A4/1R2KA3 b - - 0 1",
      "id": "puzzle_2473",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG DeQi - DANG GuoLei\nBeilun Cup National xiangqi Master Championship  2008 ",
      "fen": "CNC1k4/5R3/7c1/4p3p/2b6/1n7/9/8B/4r4/4K4 w - - 0 1",
      "id": "puzzle_2474",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Bo - JIANG QuanSheng\nChinese National Champion 1992 ",
      "fen": "3k5/9/4R4/9/9/9/3p2n2/3ApC3/3K5/3A2r2 b - - 0 1",
      "id": "puzzle_2475",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHOU Meiyi - LIU JunLi\nChinese National Champion 1992 ",
      "fen": "1rbkca3/n8/3a2C1c/p1p1N3p/4C1p2/9/P1P5P/4B4/4A4/3RKAB2 w - - 0 1",
      "id": "puzzle_2476",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZANG RuYi - CHEN JianYun\nSeven Star Cup International Invitational Tournament 1988 ",
      "fen": "3k5/5R3/4b4/p1r2N2p/9/9/Pp2P3P/3C5/4A4/c3KAB2 w - - 0 1",
      "id": "puzzle_2477",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO XinXin - ZHAO GuoRong\nGuangdong TV fast xiangqi game 2008 ",
      "fen": "c2a1ab2/7R1/2CNbk3/p7p/c1p3p2/4C4/2P1P3P/2r6/4A4/2BAKrB2 w - - 0 1",
      "id": "puzzle_2478",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHOU ShouJie - LIU DaHua\nChinese National Champion 1957 ",
      "fen": "r1bak4/4a4/4b4/p3C3p/4P1c2/1CR6/P7P/B5N2/4K1p2/2RA1rBc1 b - - 0 1",
      "id": "puzzle_2479",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GUO ChangShun - MENG LiGuo\nChinese National Champion 1974 ",
      "fen": "2ba1a3/1R1Ck4/r3c1n2/p3c3p/9/9/P1P3P1P/2C3N2/2n1A4/R2K1AB2 b - - 0 1",
      "id": "puzzle_2480",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DianZhong - \u9a6c\u56fd\u680b\nNational Games 1975 ",
      "fen": "r1baka3/1R1R5/n2cC1n2/2p5p/p8/2P2N3/P3P1P1P/8N/9/2BrKAB2 w - - 0 1",
      "id": "puzzle_2481",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FENG XiaoXi - ZHANG Mei\nChinese National Champion 1995 ",
      "fen": "1Nb1knc1r/4aR3/3ab4/p2C5/4P3p/2P3p2/P5P1c/4C3N/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2482",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MA FengYou - HONG LeiXin\nNA 1984 ",
      "fen": "C1bakR3/9/1c2b1c2/2N5p/9/2P2p3/P3P3P/1R4N1n/3rA2r1/2B1KAB2 b - - 0 1",
      "id": "puzzle_2483",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG JiaLiang - Lv Qin\nBeifang Cup 1982 ",
      "fen": "2bakc3/4a4/4b4/p7p/2p1CP3/8P/P1P3N2/9/3Kn4/1r4BR1 b - - 0 1",
      "id": "puzzle_2484",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - \u8c22\u5927\u660e\nGuangzhou,Hong kong,Macau Match 1983 ",
      "fen": "5ab2/4k4/b2N1a3/p1R6/2nCP3P/2B6/P2r2p2/3c1A3/9/3AK4 w - - 0 1",
      "id": "puzzle_2485",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - LIU DianZhong\nChinese National Champion 1984 ",
      "fen": "2r6/4ak2c/6R2/p3n1N1p/6p2/9/P1r5P/B2CC4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_2486",
      "title": "Mate in 3 moves"
    },
    {
      "description": "QIAN HongFa - Lv Qin\nChinese National Champion 1985 ",
      "fen": "2bak4/4a4/4b4/C3R4/4c4/3r4p/PC1n5/Np2B4/4A4/3K1AB2 b - - 0 1",
      "id": "puzzle_2487",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - JIANG ZhiLiang\nNational  Games xiangqi teams preliminary  1987 ",
      "fen": "4ka1r1/4a4/1R2n4/p7p/2R3p2/4C4/P2r2c1P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2488",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DianZhong - Lv Qin\nNorth-South Match 1987 ",
      "fen": "2bakab2/9/5c1N1/4p4/6p1p/R8/P3P2nP/2N6/1C3K3/3Ar4 b - - 0 1",
      "id": "puzzle_2489",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - LIU DaHua\nNA 1988 ",
      "fen": "4kRb2/4a4/4b4/C3p4/9/9/4P3P/3CNKN2/c1c4r1/3A1A3 b - - 0 1",
      "id": "puzzle_2490",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - HU RongHua\nNA 1996 ",
      "fen": "2ba1k3/3c5/3ab1P2/6P2/9/6N2/9/4pA3/3p5/4K4 b - - 0 1",
      "id": "puzzle_2491",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU TianHong - Lv Qin\nPai Wei TV supper ranking Tournament 2002 ",
      "fen": "4ka3/R8/3P1a3/6p1p/5C1r1/6P2/4c4/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2492",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - HONG Zhi\nPai Wei TV supper ranking Tournament 2002 ",
      "fen": "2ba4R/4ak3/4b1c2/pr2CP2p/4n4/P4p3/8P/N3B4/2C1A4/2BAK4 w - - 0 1",
      "id": "puzzle_2493",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN ZhiJun - Lv Qin\nHesheng. Spring Festival Cup team tournament 2009 ",
      "fen": "3akaC2/9/4b1n2/7C1/7P1/9/c2c5/4p4/1p2A4/3KNAB2 b - - 0 1",
      "id": "puzzle_2494",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MEI Nuo - CHANG Wanhua\nBuilding Materials City Cup National Championships 2005 ",
      "fen": "3k1ab2/4a4/3rb4/p6Rp/6NR1/4P4/P3r3P/B3B4/4A4/4KA3 b - - 0 1",
      "id": "puzzle_2495",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Xian - LIU Huan\nBuilding Materials City Cup National Championships 2005 ",
      "fen": "2r2ab2/3k2N2/3ab4/p2R4p/2NP1R1n1/3r5/P5c1P/3pB4/2c1C4/2BAKA3 w - - 0 1",
      "id": "puzzle_2496",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHAN Tat Tai - ZHANG YuanXin\nPao Yueng Cup 1991 ",
      "fen": "2b6/3k1N3/4b2R1/9/6p2/9/9/9/6pr1/2B2K3 b - - 0 1",
      "id": "puzzle_2497",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5415\u6ca7\u6d77 - MA PeiHong\nPao Yueng Cup 1991 ",
      "fen": "2bk1a3/4a4/4b4/5P2p/4N2R1/2P6/P8/5p3/3r5/4K4 b - - 0 1",
      "id": "puzzle_2498",
      "title": "Mate in 3 moves"
    },
    {
      "description": "PANG AiTing - CHEN KaiTai\nNA NA ",
      "fen": "1rb1kab2/3RaR3/nC4n2/p1p1p3p/9/9/P1P1c3P/N3C1r2/4A4/2cK1AB2 w - - 0 1",
      "id": "puzzle_2499",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG SongXuan - LU Hui\nNA 1931 ",
      "fen": "9/4k4/3a1a3/4PC3/6R2/7c1/r8/4B4/9/3K1AB2 w - - 0 1",
      "id": "puzzle_2500",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DOU GuoZhu - DENG ChunLin\nNA NA ",
      "fen": "6b2/3k5/1R1aba3/4C3p/2p3p2/9/P1P1P2cP/1N2B1n1B/4A4/3K1r3 w - - 0 1",
      "id": "puzzle_2501",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU YouHua - SUN ZhiWei\nChinese National Champion 1985 ",
      "fen": "4ka3/4a4/3cb4/p2R4p/2bNP4/5rB2/P1R5P/1r1C4B/4A1n2/3K1A3 b - - 0 1",
      "id": "puzzle_2502",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Gao Yang - LIN Sen-Rong\n ",
      "fen": "5ab2/3R5/1CN1bk2n/p3p1p1p/7r1/P5n2/4c3P/4N4/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_2503",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU ShangLing - WU ZhaoLong\nNA NA ",
      "fen": "2ba1k3/3Ra4/4b4/p4r2p/2p1p4/6P2/P1PNP3P/1R2B4/4K1c2/5A3 b - - 0 1",
      "id": "puzzle_2504",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU Kui Lin - CHIU Yu Kuen\nYinli Cup Champion 1998 ",
      "fen": "3k1a3/4a4/7c1/9/3P5/8P/9/1RR6/1n2K4/6r2 w - - 0 1",
      "id": "puzzle_2505",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU TianHong - TAO HanMing\nYinli Cup Champion 1999 ",
      "fen": "2ba1k3/4a4/4b4/6p2/2pN5/4C1P2/4P3P/1n1AB4/5C1c1/1cBAK4 w - - 0 1",
      "id": "puzzle_2506",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN HaiYing - HU Ming\nYinli Cup Champion 1999 ",
      "fen": "1r2ka3/4a4/b3cn2b/1N1RC4/9/2P6/3NP4/3CB4/4A4/2B1Kr3 w - - 0 1",
      "id": "puzzle_2507",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Du GuangWei - JIANG FengShan\nChinese National sports 2006 ",
      "fen": "C4ab2/3ka4/3r5/p3p4/8p/9/P7P/3AC1nR1/3KA4/2B4c1 b - - 0 1",
      "id": "puzzle_2508",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIN HongMin - XING Yi\nZhejiang Sanhuan Cup xiangqi open tournament 2005 ",
      "fen": "3k1a3/4a4/4R4/6P1P/p8/9/r8/2R1Bn3/4KC3/2Br1A3 b - - 0 1",
      "id": "puzzle_2509",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DANG GuoLei - LI Xian\nChina Team Championship 2005 ",
      "fen": "2ba5/4a1R1C/5kr1n/p5NCp/2p6/6P2/c3P3P/9/2c1A4/4KAB2 w - - 0 1",
      "id": "puzzle_2510",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAO Lin - CAO YanLei\nWacker Real Estate Cup xiangqi Master Champion 2005 ",
      "fen": "2bak4/3Na4/3c4b/p1p5p/9/P2RC4/2PNP3P/4B4/4rn1c1/3K5 b - - 0 1",
      "id": "puzzle_2511",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GUO RuiXia - LIU Huan\nChinese National Champion 2004 ",
      "fen": "3R1k3/4a4/8b/p8/9/9/P7P/B5r2/5r3/1C2K2c1 b - - 0 1",
      "id": "puzzle_2512",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHUANG YuTing - OUYANG Qilin\nWacker Real Estate Cup xiangqi Master Champion 2005 ",
      "fen": "3ak4/1N2a4/4b1R2/4p4/5P3/P2R3rp/2n2r3/4B4/3cA4/2BAKC3 w - - 0 1",
      "id": "puzzle_2513",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIN HaiYing - YOU YingQin\nChina Team Championship 2005 ",
      "fen": "3a1P2C/4k4/2R2R3/4p4/3c5/3r5/1n7/p2A4B/9/2CK1A3 w - - 0 1",
      "id": "puzzle_2514",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHU Xiaohu - YU Bing\nNational Xiangqi Grade tournament 2005 ",
      "fen": "2b1kab2/n3a4/N8/pN2p3p/6p2/2P6/P7P/3C5/1C1rA4/2BAK1c2 w - - 0 1",
      "id": "puzzle_2515",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u534e - FU GuangMing\nChinese National Champion 2004 ",
      "fen": "2R2ar2/3ka4/c8/C1pP4p/2b1R4/5p3/P5n1P/3A2c2/9/2B1KAB2 w - - 0 1",
      "id": "puzzle_2516",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8d3a\u8fdb - CAO YanLei\nShenzhen Gold city Cup individual tournament 2005 ",
      "fen": "4kab2/4a4/4b4/p3p4/8p/3R1N1N1/P3P3P/1r6B/cc1pA4/3A1K3 b - - 0 1",
      "id": "puzzle_2517",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHONG Heung Ming - LING LeeKiong\nAsian Xiangqi Individual Championships 2005 ",
      "fen": "4ka3/4a4/4N4/pr7/4p2rn/8c/P3P1p2/3CB4/2R6/2BAKA3 w - - 0 1",
      "id": "puzzle_2518",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU RongHua - TAO LuWen\nNA 1973 ",
      "fen": "1RN1kab2/4a4/4b1r2/p7p/5cp2/4C4/P3P3P/4c4/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_2519",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Qiang - CUI Yan\nChinese National sports 2006 ",
      "fen": "3akab2/9/2Rn1r3/2p1r1p1p/1R7/2P6/P5P1P/1C2p4/4A4/2B1KAB2 b - - 0 1",
      "id": "puzzle_2520",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u534e - YAN Jun\nGreat Wall Electronic Cup National Championships 2006 ",
      "fen": "2b1k2r1/4a4/3Pb4/5N3/9/9/3R5/3KBA3/4p4/2B1p4 w - - 0 1",
      "id": "puzzle_2521",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GUO ChangShun - ZHAO GuoRong\nNA 1980 ",
      "fen": "1R1a1kb2/4R1N2/4b4/p5c2/4p2P1/3n5/P7P/4B1r1B/4Ar3/4K4 b - - 0 1",
      "id": "puzzle_2522",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI LaiQun - JIANG ZhiLiang\nNA 1985 ",
      "fen": "1C3ab2/C3k4/2Pcba2n/3N5/4p3p/9/4Pcp1P/4B1N2/4A1n2/3A1KB2 w - - 0 1",
      "id": "puzzle_2523",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHENG FuChen - WANG JiaLiang\nNA 1975 ",
      "fen": "r1b1k1b2/3R1R3/2n6/p3p3p/2p6/7N1/P3P3P/B2C1A3/4K4/1cc2Nr2 b - - 0 1",
      "id": "puzzle_2524",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHEN ZhiYi - GAO Qi\nNA NA ",
      "fen": "3a2b2/4ak1N1/9/p8/3P2p2/3n4C/P5P1P/2r1B4/4A4/2BAKr3 w - - 0 1",
      "id": "puzzle_2525",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Jun - TANG ZhuoGuang\nNA NA ",
      "fen": "2bRk4/4a4/1R2b4/p1p5p/4P1p2/2P6/P5P1P/3Cc1N2/3r1c3/2BAKA3 b - - 0 1",
      "id": "puzzle_2526",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU YouHua - LI LaiQun\nNA 1987 ",
      "fen": "4kab2/4a4/2C1b4/p3p3p/2p2P3/6R2/P3P3P/3CKAN1B/cc7/2r2A3 b - - 0 1",
      "id": "puzzle_2527",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG XinHai - ZHOU Fei\nNA 1993 ",
      "fen": "2bakcPr1/4a2N1/4b4/2p1nR3/p8/2P1p1R2/P8/9/4A4/2BAK1B1r w - - 0 1",
      "id": "puzzle_2528",
      "title": "Mate in 3 moves"
    },
    {
      "description": "RUAN DeDing - HU RongHua\nNA 1966 ",
      "fen": "1C2ka3/4a2R1/2n1b4/p3p4/2b5p/2B3P2/P3P1N1P/3N5/3rA2c1/1R1AK1c1r b - - 0 1",
      "id": "puzzle_2529",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG JiaLiang - SONG JingDai\nNA 1957 ",
      "fen": "1r2ka3/9/3nN1rR1/p7C/9/5p3/P4c2P/9/4A1n2/2BK1A3 w - - 0 1",
      "id": "puzzle_2530",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU RongHua - FU GuangMing\nNorth-South Match 1987 ",
      "fen": "2C1ka3/4a4/9/p3rn3/2pNc4/3n5/P8/4BK3/9/1R1A2R2 b - - 0 1",
      "id": "puzzle_2531",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5510\u6377 - \u5f90\u9a81\nNational Collaboration District III tournament 2006 ",
      "fen": "2bak2r1/4a4/n1c1b1n2/4pNR1p/p1p6/7R1/P1P1P3P/2N1BC3/3r5/2BAKA3 w - - 0 1",
      "id": "puzzle_2532",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HONG Zhi - XU TianHong\n Intertek Real Estate Cup Chinese Chess Grandmaster Tournament 2007 ",
      "fen": "4kab1C/9/4Pa3/5N3/4N4/5n3/1c7/B8/2p1A4/2BA1Kc2 w - - 0 1",
      "id": "puzzle_2533",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU TianHong - ZHAO GuoRong\n Intertek Real Estate Cup Chinese Chess Grandmaster Tournament 2007 ",
      "fen": "5kb2/c3a4/4ba3/9/9/2N6/9/1R2BA3/1p1K5/1r3A3 b - - 0 1",
      "id": "puzzle_2534",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MEI Nuo - FENG XiaoXi\nNorth-South traffic safety grandmaster Cup Tournament 2006 ",
      "fen": "9/3k3N1/3a1a1n1/9/p1N6/2P5P/1R2n2r1/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2535",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MEI Nuo - YAN ChaoHui\nNorth-South traffic safety grandmaster Cup Tournament 2006 ",
      "fen": "4kab2/4ac3/1cn1b4/p2N1np1p/4N4/4C1P1P/P3P4/3C5/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2536",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Lv Qin - LIN HongMin\nNational Games 1979 ",
      "fen": "3ak1b2/2C1a4/2R1b4/4p3p/p2N2p2/6P2/P1P2Rn1P/2nAKA1r1/2r6/2B3B1c b - - 0 1",
      "id": "puzzle_2537",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Li Hong Jia - CHEN Ling Wei\nAsian xiangqi Championship 2006 ",
      "fen": "3aknb2/2NRar3/4b2c1/p5R1p/2P3p2/9/P5P1P/B2KC1NC1/3rA4/5Ac2 w - - 0 1",
      "id": "puzzle_2538",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI DeZhi - WANG WenZhi\nNA 2007 ",
      "fen": "2ca1c1n1/2N1k4/5P2b/5r3/p1p4R1/9/P1P5P/N8/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_2539",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIANG Yuan - \u5f20\u6cfd\u5cad\nShenzhen Shi Wei Tian Cup Cities tournament 2006 ",
      "fen": "4ka3/4a4/4b4/p7p/9/3R5/P7P/2C1r1p2/2r6/1N3K3 b - - 0 1",
      "id": "puzzle_2540",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG Hongbiao - \u5434\u5e73\u5357\nShantou Xifeng Cup Xiangqi Open 2007 ",
      "fen": "2b4R1/5k3/n1r1b4/2p1C3p/p4cpc1/9/P3PNP1P/5C3/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2541",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHOU ShunFa - DING XiaoHei\nChinese National Champion 1964 ",
      "fen": "C4Rb2/4k4/3ab4/7r1/9/9/6p2/1C2B3B/4A1c2/3A1K2c b - - 0 1",
      "id": "puzzle_2542",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JI BenHan - LIU DaHua\nChinese National Champion 1964 ",
      "fen": "3Rk1b2/5c3/4ba3/5r3/9/9/8P/1p1AK4/4A4/4C1p2 b - - 0 1",
      "id": "puzzle_2543",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU Chao - LEI Kam Fun\nChinese National sports 2006 ",
      "fen": "3k1aRC1/3n5/4ca3/pr2r3p/1cb6/6C2/P3P3P/4B4/4A4/3RKAB2 w - - 0 1",
      "id": "puzzle_2544",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG Bin - LI DeZhi\nNA 2007 ",
      "fen": "5ab2/3k5/N2ab4/1C1R5/2P5p/9/4n3P/B8/1rc1K4/9 b - - 0 1",
      "id": "puzzle_2545",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DianZhong - LIU DaHua\nChinese National Champion 1964 ",
      "fen": "4kab2/1R1Pa4/4b4/p7p/6p2/4p4/P2c2P1P/C2K5/1R3r3/4r1B2 b - - 0 1",
      "id": "puzzle_2546",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIAN JiaKang - \u7f57\u632f\u8fdc\nShenzhen individual Xiangqi Championship 2007 ",
      "fen": "2b1R1b2/6c2/1r1k5/p1pnp2rp/7n1/2PN5/P3P1P1P/3C2N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2547",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TRAN Huu-Ngang - TANAKA Atsushi\nAsian xiangqi Championship 2006 ",
      "fen": "5a3/4k4/9/p1r1P3p/1c7/5NB2/P3R3P/3CB2C1/3nA4/3AK4 w - - 0 1",
      "id": "puzzle_2548",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MOU HaiQin - ZHAO GuoRong\nChinese Xiangqi Team visit USA 2006 ",
      "fen": "3k1ab2/2N1a4/4b4/p5r1p/7R1/P1Rrp4/9/5A3/9/4Kc3 b - - 0 1",
      "id": "puzzle_2549",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NGO Lan Huong - SOH Ying Ying\nAsian xiangqi Championship 2006 ",
      "fen": "3akaR2/9/4n4/c1r6/9/9/9/3AR4/9/4KA3 w - - 0 1",
      "id": "puzzle_2550",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NGUYEN HoangLam - \u6797\u8d3b\u8bc4\nAsian xiangqi Championship 2006 ",
      "fen": "3k2c2/4R4/r7b/p1p5p/9/2Pn5/PR6P/3A4B/9/2BAK4 w - - 0 1",
      "id": "puzzle_2551",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Shi - LI Xuan\nNA 2001 ",
      "fen": "3a5/3k1c3/1R2P1C2/p7p/2p6/7n1/3rP3P/4B4/9/4K4 w - - 0 1",
      "id": "puzzle_2552",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TANG HaoWen - NG JunMing\nAsian xiangqi Championship 2006 ",
      "fen": "2ba2n2/5P3/3k5/p2N5/2P5p/5C3/5c3/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2553",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO GuoRong - JIANG ZhiLiang\nNorth-South Match 1987 ",
      "fen": "1C3kb2/9/4PN3/p4c3/6b2/3C2B2/4N4/7nB/4p3c/3K5 w - - 0 1",
      "id": "puzzle_2554",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MOU HaiQin - JIANG Chuan\nThe world mind sports games 2008 ",
      "fen": "3rkabr1/4a4/1Cc1b4/pN6p/2n1Cnp2/2p1P4/P5PcP/4B1N2/9/1R1AKABR1 w - - 0 1",
      "id": "puzzle_2555",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG DeQi - \u67f3\u6b67\u745e\nCangzhou, Hebei Province Chess Cup tournament 2007 ",
      "fen": "1r1ak4/C1c1aP3/4R4/9/9/9/5p3/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2556",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u67f3\u6b67\u745e - MIAO LiMing\nCangzhou, Hebei Province Chess Cup tournament 2007 ",
      "fen": "2bk1a3/4a4/4b4/9/9/p5P2/4r3P/3p5/2C2K3/2RA1A3 b - - 0 1",
      "id": "puzzle_2557",
      "title": "Mate in 3 moves"
    },
    {
      "description": "KHOO Chin Chin - CHAN Chi Mui\nAsian Indoor Games 2007 ",
      "fen": "5a3/3k3c1/2N1P4/p3C3p/5rR2/9/5p2P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2558",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU JunQiang - \u5f20\u4e00\u7537\nChu He Han Jie Cup National xiangqi level tournament 2006 ",
      "fen": "2c4C1/5kN2/2N1ba3/8p/p1n2c3/2B6/P3P1n2/5C3/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2559",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHU ShaoJun - SUN HaoYu\nHunan Province Xiangqi Championship 2007 ",
      "fen": "C3k1b2/3P1R3/3ab4/p7p/9/9/P3r3P/3K5/5c3/2BA1Ap2 w - - 0 1",
      "id": "puzzle_2560",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAI FuRu - HU RongHua\nNA 1978 ",
      "fen": "3ak1b2/4a4/4b4/p7p/5R3/P3N1P2/8P/4B3B/4r2r1/1R3K3 b - - 0 1",
      "id": "puzzle_2561",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHEN Peng - KE YongQing\nNankai Tianjin Bohai Cup xiangqi  tournament 2007 ",
      "fen": "C1Ra1k3/1C7/b2a2n2/p7p/6p2/4p4/P6rP/5A3/4Acn2/2B1K4 w - - 0 1",
      "id": "puzzle_2562",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO XinXin - GU ShaoYin\nWenling Cup, Zhejiang Province secondary schools Xiangqi tournament 2008 ",
      "fen": "2bak4/3ra4/4b4/p2RC3p/9/6P2/P1P1P2rP/N5c2/5R3/2BK1AB2 w - - 0 1",
      "id": "puzzle_2563",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CENG HongTao - LI XiaoHui\nAo Wang Cup Hubei Grand Prix Championship 2007 ",
      "fen": "3ak1b2/4a4/9/1c1C5/3P2N2/2B6/7p1/2p6/4A4/c2K1AB2 b - - 0 1",
      "id": "puzzle_2564",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YIN Anna - ZHANG GuoFeng\nNA 1990 ",
      "fen": "1Rbk1a3/4a4/4b4/p6Pp/4N4/2p1n4/P3C3P/4Bn3/2C2K3/3r2B2 b - - 0 1",
      "id": "puzzle_2565",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI DeLing - ZHANG GuoFeng\nNA 2000 ",
      "fen": "3rkab2/4aP1c1/R3b4/9/9/9/4C4/4B4/6n2/2B2K3 b - - 0 1",
      "id": "puzzle_2566",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GANG QiuYing - ZHANG GuoFeng\nYinli Cup Champion 2001 ",
      "fen": "1C2kab2/3R5/1P3a3/1C6p/2b3p2/4p4/3c4P/3An4/3r5/4K4 b - - 0 1",
      "id": "puzzle_2567",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG GuoFeng - DANG GuoLei\nDevelopment Group Cup Women's xiangqi Masters Tournament 2003 ",
      "fen": "2r1kab2/3Pa4/3cbc3/5R3/4N4/2B6/4C2p1/4B4/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_2568",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU YouHua - Lv Qin\nMaoshan - Bao Hua Shan Cup National Championship 2009 ",
      "fen": "2b2a3/3R5/4ka3/5P3/9/1p7/9/3nB4/4AK2r/3A2B2 w - - 0 1",
      "id": "puzzle_2569",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO XinXin - MIAO LiMing\nChinese National Champion 2008 ",
      "fen": "R4a3/3ka4/9/4n1p2/9/2P3B2/3C4P/4N4/3rA4/2c1KAB2 w - - 0 1",
      "id": "puzzle_2570",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SUN HaoYu - LI DeZhi\nChinese National Champion 2008 ",
      "fen": "4k4/9/2R1Nc3/5r2p/n8/1C7/2p5P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2571",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU YinChuan - CHEN Zhong\nChinese National Champion 2008 ",
      "fen": "2Ca5/1C1k5/b8/p3p3p/6r2/5n3/P3P2RP/4B4/4Ac3/2BAK4 w - - 0 1",
      "id": "puzzle_2572",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XingLin - YOU YingQin\nChinese National Champion 2008 ",
      "fen": "3Rkab2/4a4/2n1b4/p3p3p/2p1c4/P6N1/8P/4n3B/1C1rA4/R2NKA3 b - - 0 1",
      "id": "puzzle_2573",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO XinXin - ZHANG Jiang\nYANG QuanLin Cup Champion 2008 ",
      "fen": "3akaN1C/6c2/4P4/p8/6p2/2P6/7nP/9/4K4/2BA1AB2 w - - 0 1",
      "id": "puzzle_2574",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU GuoYi - CHAN Keung On\nShenzhen  ",
      "fen": "1R7/4k4/4b3r/p1p1N1p2/4C3r/4P4/P8/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2575",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SOH Ying Ying - ZHAO GuanFang\nThe world mind sports games 2008 ",
      "fen": "3k1ab2/4a4/2n1b1n2/p1C1p1R1p/9/2P3P2/P8/NRC6/3r5/2B1KNr2 b - - 0 1",
      "id": "puzzle_2576",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Nguyen Thanh Bao - CENG XianWei\nThe world mind sports games 2008 ",
      "fen": "5k3/4a1P2/1r3P3/9/9/9/2p1R4/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2577",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HONG Zhi - WONG Hok Him\nThe world mind sports games 2008 ",
      "fen": "4C1b2/4P4/5kN2/6P2/5r3/9/4p3P/8B/4A4/4KA3 w - - 0 1",
      "id": "puzzle_2578",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MOU HaiQin - YE RongGuang\nThe world mind sports games 2008 ",
      "fen": "2b1ka3/1N2a4/4bn3/2R6/P2R5/6B1p/1r7/9/4A4/c1BAK4 w - - 0 1",
      "id": "puzzle_2579",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG ShiQing - SONG GuoQiang\nCai Lun Elite Bamboo Cup National Xiangqi Tournament 2009 ",
      "fen": "3k5/4a4/b3b4/p7p/4PCp2/c8/4R1P2/9/1n1r1C3/4KA3 b - - 0 1",
      "id": "puzzle_2580",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU KeFei - LIU YiDa\nWacker Real Estate Cup National  1st class tournament 2009 ",
      "fen": "3ak1b2/4a4/4b4/3R4p/1P2C4/4P1P2/3c3r1/4nA3/C8/3K1AB2 w - - 0 1",
      "id": "puzzle_2581",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u6768  \u8d3a - LIAN ZeTe\nWacker Real Estate Cup National  1st class tournament 2009 ",
      "fen": "3ak1N2/1cC5C/3R5/p3p2r1/9/9/Pn2P3P/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2582",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YOU YingQin - KHO Evie\nWorld Xiangqi Championships 2009 ",
      "fen": "3ak1b2/4a4/1c2b3n/pN3R2p/2C1C1p2/2N1P4/P7P/4B4/4A1r2/4KA1c1 w - - 0 1",
      "id": "puzzle_2583",
      "title": "Mate in 3 moves"
    },
    {
      "description": "KHO Evie - GAO YiPing\nWorld Xiangqi Championships 2009 ",
      "fen": "3ak4/4a4/4b4/3Cp4/9/P2cP2p1/3ppn3/N2A5/3K5/5AB2 b - - 0 1",
      "id": "puzzle_2584",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XUE Zhong - TANAKA Atsushi\nWorld Xiangqi Championships 2009 ",
      "fen": "2r1kabr1/4a4/2c1b2c1/p2N3Rp/2pn5/6p2/P1P3P1P/3CC4/4A4/1RB1KAB2 w - - 0 1",
      "id": "puzzle_2585",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU JiangWei - NAEGLER Michael\nWorld Xiangqi Championships 2009 ",
      "fen": "C2R1ab2/1N2k4/3c1a3/8p/4P4/2P2p3/P3c2rP/4B1n1B/4A4/3RKA3 w - - 0 1",
      "id": "puzzle_2586",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG Chun Long - HU YunXi\nWorld Xiangqi Championships 2009 ",
      "fen": "3a1RbC1/4k4/9/p1p6/4N1b2/P1P1P2np/4c4/2r1B4/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_2587",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU Kui Lin - LEI Kam Fun\nWorld Xiangqi Championships 2009 ",
      "fen": "5k3/4P1N2/b8/3n5/5P2p/9/2p6/4BA3/4A1cC1/3K2B2 w - - 0 1",
      "id": "puzzle_2588",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MATSUNO Yoichiro - ISLAN Kon\nWorld Xiangqi Championships 2009 ",
      "fen": "9/3k5/5a3/p8/9/6B2/2p4r1/3AB2C1/5p3/3AK4 b - - 0 1",
      "id": "puzzle_2589",
      "title": "Mate in 3 moves"
    },
    {
      "description": "U Yan Lee - YU ZuWang\nWorld Xiangqi Championships 2009 ",
      "fen": "3ak1b2/4a4/4b4/1R6p/9/2P6/5r2P/2Np5/4C4/3K1nB1c b - - 0 1",
      "id": "puzzle_2590",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HOFFARTH Karsten - LI YaChao\nWorld Xiangqi Championships 2009 ",
      "fen": "2baka3/9/4C3b/p3p1C1p/2c6/2B1c4/P5P1P/2N3N2/1r7/2RAKAB2 b - - 0 1",
      "id": "puzzle_2591",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XUE Zhong - LUO YuanZhang\nWorld Xiangqi Championships 2009 ",
      "fen": "3k3C1/2R1a4/5a1N1/p7p/2p3p2/4n1P2/P7P/9/4K4/2Br1AB2 w - - 0 1",
      "id": "puzzle_2592",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TEO Guimin - GAO YiPing\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "4k1b2/4a4/4ba3/9/5N3/9/1c7/3nCA2B/3p2p2/2B2K3 b - - 0 1",
      "id": "puzzle_2593",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TRAN Chanh Tam - NGUYEN Tran Do Ninh\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "4k1b2/3Pa4/4b4/9/1c7/3c5/9/3C5/4C4/4K4 w - - 0 1",
      "id": "puzzle_2594",
      "title": "Mate in 3 moves"
    },
    {
      "description": "KIM Pawn - Lv Qin\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "2bak4/4a4/3cC1n2/3Rp1p1p/9/p1P3P2/4P2RP/4B4/3NK4/3r1rB2 b - - 0 1",
      "id": "puzzle_2595",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TEO Guimin - GOOI Wen Nee\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "5ab2/3kacC2/b8/3r4p/1R2N4/6P2/4P3c/B3B4/4A4/4KA3 w - - 0 1",
      "id": "puzzle_2596",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO Wei - JIN Bo\nChina National Xiangqi League 2009 ",
      "fen": "3k1ab2/9/4ba3/2C3P2/4P4/9/4C4/2p6/4Ap3/ccBAK4 b - - 0 1",
      "id": "puzzle_2597",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GE WeiPu - WANG Yang\nChina National Xiangqi League 2009 ",
      "fen": "2b2R3/5k3/4ba3/9/5N3/2P6/8p/B2K4B/1r4p1c/9 b - - 0 1",
      "id": "puzzle_2598",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG TianYi - SUN YongZheng\nChina National Xiangqi League 2009 ",
      "fen": "1R3a3/c3k4/n2a1c3/2p1N3p/9/2r6/P3P3n/2N1C4/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_2599",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU JunQiang - WANG Yang\nChina National Xiangqi League 2009 ",
      "fen": "2Ca2b2/9/4kaR2/8p/p3N3c/4n1P2/9/B8/9/1r1AKAB2 w - - 0 1",
      "id": "puzzle_2600",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HAO JiChao - ZHAO Feng\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "1nba1k2r/4ac3/2cNR4/4C4/p4np1p/2P6/P3P1P1P/5C2N/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2601",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u6ed5\u98de - XIE HongFeng\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "3ck2C1/4aP3/4baR2/9/9/8p/9/4B4/4A4/4KrB2 w - - 0 1",
      "id": "puzzle_2602",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u6ed5\u98de - ZHONG ShaoHong\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "3c1kb2/9/9/8p/2b6/r8/5C2P/4p4/1R1KA4/3A5 b - - 0 1",
      "id": "puzzle_2603",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN ZhenJie - WOO Tsung Han\nAsian Indoor Games 2009 ",
      "fen": "2b2Rb2/4R4/3k3r1/8p/9/3p2P2/2n1P2cP/4r1N2/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2604",
      "title": "Mate in 3 moves"
    },
    {
      "description": "KIM Pawn - Nguyen Thanh Bao\nAsian Indoor Games 2009 ",
      "fen": "1Rb1ka3/4a4/2n1b4/p1p1p3p/9/2PN5/P2CNR2P/4C4/4K2n1/2BA1r2c b - - 0 1",
      "id": "puzzle_2605",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG DaMing  - ZHENG ZhengMing\n2009 North American Invitation Tournament 2009 ",
      "fen": "2b1ka3/4a4/4b4/p2R2C1p/4P1p2/P1P6/8P/9/N5r2/2BAKA1nc b - - 0 1",
      "id": "puzzle_2606",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u80e1\u514b\u534e - \u5362\u519b\n2009 annual total Fenggang Chess Final 2009 ",
      "fen": "5a3/5k3/4N1N2/9/9/9/P3p3n/4B4/3K5/6B2 w - - 0 1",
      "id": "puzzle_2607",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI JinXiong - \u66fe\u5baa\u8f89\n2009 annual total Fenggang Chess Final 2009 ",
      "fen": "3k1ab2/9/b2r5/6p1p/5R3/P5P2/6n1P/5K3/1c2A4/2B1C4 b - - 0 1",
      "id": "puzzle_2608",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9646\u5b89\u4eac - CAO YanLei\n2009 Guangzhou xiangqi League 2009 ",
      "fen": "N3kab2/4a4/2c1b1n2/8p/4c4/5p3/P5P1P/3Cn4/4A4/3K1A1N1 b - - 0 1",
      "id": "puzzle_2609",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU YinChuan - MIAO LiMing\nChina National Xiangqi League 2009 ",
      "fen": "2b1k4/9/3P5/2n1N4/9/9/9/3nB4/4C4/5KB2 w - - 0 1",
      "id": "puzzle_2610",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI Qun - JIANG Chuan\nChina National Xiangqi League 2009 ",
      "fen": "3k1RC2/4a4/3a5/9/2p6/p8/8P/4n1N1B/1c2A2r1/3A1K3 b - - 0 1",
      "id": "puzzle_2611",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG XiangFu - TRAN ChanhTam\nVietnam The 4th Phuong Trang Xiangqi cup open 2009 ",
      "fen": "1Cb1ka3/4a4/2n1b4/p1C1p4/3N2r1p/P2RP4/2P5P/5A3/3RAr3/2B1K2c1 b - - 0 1",
      "id": "puzzle_2612",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG TianYi - DONG Fei\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u9752\u5e74\u7ec4\u7537\u5b50\u56e2\u4f53 2009 ",
      "fen": "4R4/5k3/3a1a3/p7p/4N4/2P3r2/P8/1C1AB4/2cc5/2B1K4 w - - 0 1",
      "id": "puzzle_2613",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GANG QiuYing - YAO Qian\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u5973\u5b50\u4e2a\u4eba\u5feb\u68cb 2009 ",
      "fen": "2ba1k3/9/cr3an2/p4NR2/6p2/5C3/P5P1P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2614",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FENG XiaoXi - YOU YingQin\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u5973\u5b50\u4e2a\u4eba\u5feb\u68cb 2009 ",
      "fen": "2bRk1b2/4a4/n1N6/2p3p1p/P1n1p4/2C1c2R1/4C3P/4B4/5r3/2BcKAr2 b - - 0 1",
      "id": "puzzle_2615",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Huan - XIE Yun\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u5973\u5b50\u4e2a\u4eba\u5feb\u68cb 2009 ",
      "fen": "1R1akcR2/4a4/4N4/p3C3p/4P2r1/2Pr2B2/P5n1P/4c4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2616",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YOU YingQin - DONG Bo\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u5973\u5b50\u4e2a\u4eba\u5feb\u68cb 2009 ",
      "fen": "C2k1ab2/1rR1ac3/3Nb4/4p4/8p/6P2/4P3n/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2617",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAO YanLei - HUANG Jing Ci\n2009 Fenggang Town, Dongguan 3rd quarter Xiangqi Open 2009 ",
      "fen": "2R2a1n1/3kaR1C1/c3r3b/5C3/4p1p2/5r3/P3P1P2/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_2618",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5c39\u6587\u60e0 - \u5f90\u4f1f\u5eb7\n2009 Fenggang Town, Dongguan 3rd quarter Xiangqi Open 2009 ",
      "fen": "5a3/4aC3/3k5/8p/2P1r1p2/6P2/P7P/9/3r5/1cBR1KB1R b - - 0 1",
      "id": "puzzle_2619",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u90ed\u80dc\u6587 - CHONG Heung Ming\n2009\u9996\u5c4a\u5357\u5b81\u8c61\u68cb\u56fd\u9645\u9080\u8bf7\u8d5b 2009 ",
      "fen": "2b2a3/4aR1C1/3k5/p3p1N1p/2pn2p2/9/P5n2/4BK3/3rA4/2cA2B2 b - - 0 1",
      "id": "puzzle_2620",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8521\u690d\u575a - CAO YanLei\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "2baka3/3P5/4b4/9/9/3p5/1r7/2pAR4/3KN4/5A3 b - - 0 1",
      "id": "puzzle_2621",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u80e1\u5e7f\u548c - ZHU ShaoJun\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "4ka3/4a4/2c1b4/p7p/4P4/2B6/P2R4P/9/5r3/2B1KAR1r b - - 0 1",
      "id": "puzzle_2622",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u674e\u660c\u6797 - \u6797\u521b\u5f3a\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "3k1abCC/1R2a4/5c3/2p1n4/1n7/2P6/4P3P/2N1B4/4A4/r3KAB2 w - - 0 1",
      "id": "puzzle_2623",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI XiaoGang - \u4f59\u4e1c\u4e1c\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "2b1k4/3C1P3/4P4/4n4/9/6p2/9/9/4A4/3K1A3 w - - 0 1",
      "id": "puzzle_2624",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIE Jing - Lv Qin\nGuang Yang flowers Cup Fourth National Chess grandmaster big battle 2009 ",
      "fen": "3k2b2/2P1a1N2/4bac2/2PC5/9/9/4np3/9/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_2625",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f20\u6ed4 - \u5f6d\u82f1\u5f3a\n2009 Guangdong Sanshui,Shunde attack grind Tournament 2009 ",
      "fen": "2R2a3/3k5/3a2n2/3N4p/4p2r1/4P1P2/8P/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2626",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHEN Peng - ZHANG ShenHong\nDaoquan Tea Cup National xiangqi All-Star Game 2008 ",
      "fen": "5k3/4Pn3/4rR3/8p/p8/9/P8/3A5/9/2BAK1B2 w - - 0 1",
      "id": "puzzle_2627",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG DeQi - ZHANG ShenHong\nDaoquan Tea Cup National xiangqi All-Star Game 2008 ",
      "fen": "3k5/C1C6/3a5/1R7/6P2/1r7/6r2/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2628",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU YouHua - Lv Qin\nMaoshan - Bao Hua Shan Cup National Championship 2009 ",
      "fen": "2b2a3/3R5/4ka3/5P3/9/1p7/9/3nB4/4AK2r/3A2B2 w - - 0 1",
      "id": "puzzle_2629",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU YouHua - ZHANG XiaoPing\nChina National Xiangqi League 2008 ",
      "fen": "2bk1ab2/6c2/3a2c2/3P5/3C5/4C4/P6p1/5A2B/8n/2BAK4 w - - 0 1",
      "id": "puzzle_2630",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CAI Yi - SHEN Peng\nChina National Xiangqi League 2008 ",
      "fen": "2bakab1R/9/5c3/9/9/1C1r5/5n1n1/N3CA3/5K3/2B6 b - - 0 1",
      "id": "puzzle_2631",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG Yang - ZHUANG YuTing\nChina National Xiangqi League 2008 ",
      "fen": "3k1ab2/4c4/4ba3/2P2Nn2/9/3CC3p/3p5/B2A5/4A4/4K4 w - - 0 1",
      "id": "puzzle_2632",
      "title": "Mate in 3 moves"
    },
    {
      "description": "BU FengBo - LIU DaHua\nChina National Xiangqi League 2008 ",
      "fen": "2bakP3/4a1P2/4b4/9/4C4/4c4/2n6/9/4p3C/3K1p3 b - - 0 1",
      "id": "puzzle_2633",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU TianHong - ZHANG ShenHong\nChina National Xiangqi League 2008 ",
      "fen": "CcC2k3/4R4/3Nc4/8p/5n3/3r5/4P3P/9/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2634",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHEN Peng - ZHENG YiHong\nChina National Xiangqi League 2008 ",
      "fen": "1CRa1k3/4a4/3c3n1/9/p3N3p/4p4/P3cr2P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2635",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MENG Chen - QIN JinSong\nChina Team Championship 2007 ",
      "fen": "2b1ka3/9/4ca3/p3p4/6bc1/9/PC2P3P/4B4/4N4/1N1AKA3 b - - 0 1",
      "id": "puzzle_2636",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG Chun Long - YANG ShuangZheng\nWorld Xiangqi Championships 2011 ",
      "fen": "3k4C/5P3/3a3r1/9/8p/9/P1R6/4B4/4A2n1/4KAB2 w - - 0 1",
      "id": "puzzle_2637",
      "title": "Mate in 3 moves"
    },
    {
      "description": "OGAWAHiroshi - LIAO Su Cheng\nWorld Xiangqi Championships 2011 ",
      "fen": "3a1k3/9/3a3Nb/4p3C/9/1p6P/r8/3nB4/5p3/2BK1A3 b - - 0 1",
      "id": "puzzle_2638",
      "title": "Mate in 3 moves"
    },
    {
      "description": "PENG Oscar  - SONE Toshihiko\nWorld Xiangqi Championships 2011 ",
      "fen": "3akab2/3nn4/4b4/p3Cr2p/2c1c4/3R1N3/P3P3P/6N2/2C1A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_2639",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LOOK Kean Chor - NAEGLER Michael\nWorld Xiangqi Championships 2011 ",
      "fen": "2R2a3/4a3n/3kc4/2Nr5/4C1b2/9/P7P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2640",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FRISCHMUTH Uwe - CHEN FaZuo\nWorld Xiangqi Championships 2011 ",
      "fen": "3R1k3/4a4/1n2b4/4p3p/5r3/9/4c3P/C1p1B4/4N4/2BAKA3 b - - 0 1",
      "id": "puzzle_2641",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TJHAI Tjie Kiang - PENG Oscar \nWorld Xiangqi Championships 2011 ",
      "fen": "3k5/9/3C5/p8/9/8p/9/3A1A3/9/4K1B2 w - - 0 1",
      "id": "puzzle_2642",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI GuoQiang - LIAO Hao Ran\nHong Kong Individual Championship 2011 ",
      "fen": "3k1a3/2rna4/b3b4/3RC3p/2cC5/3N4P/P3P1c2/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2643",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHI Da Ming - HUANG Haoyi\nHong Kong Individual Championship 1997 ",
      "fen": "C2Cka3/4a4/4b3b/p1p1p3p/9/8P/Pn1c5/4B4/4Ar3/2BAK1R2 b - - 0 1",
      "id": "puzzle_2644",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LAU KeiCheong - FONG William\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "3N5/3R5/5kn2/2p1p3p/4c4/2B6/3r5/4C4/4A4/2BK1A3 w - - 0 1",
      "id": "puzzle_2645",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CUONG Vuong - CHEN Jing Liang\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "2b2a3/4k1N2/9/p3p3p/6P2/3R5/P3P3P/7C1/4r4/2BAK1B2 w - - 0 1",
      "id": "puzzle_2646",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Ung Dau - LY Tomas\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "4ka3/4a4/4b4/1R7/9/9/6r1P/3Ap3B/3C1KN2/3A3r1 b - - 0 1",
      "id": "puzzle_2647",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TRUONG Wen - YAN RunZe\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "9/3k5/3r4b/4RN3/9/9/9/3A5/4K4/9 w - - 0 1",
      "id": "puzzle_2648",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HU Michael  - TAN Ming Zhang\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "3P1k3/4P4/9/4p4/9/1p7/4p4/4N3B/4A4/2BAK2r1 w - - 0 1",
      "id": "puzzle_2649",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CUONG Vuong - PENG Oscar \nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "2b6/4kP3/3a5/9/7c1/9/9/1C1p1p3/4A4/4KA3 b - - 0 1",
      "id": "puzzle_2650",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WENG ChuGuang - NG Chun Hei\nHong Kong Individual Championship 1997 ",
      "fen": "5a3/1R2a4/2rk2C2/4P3p/2b6/9/9/5A1nB/9/3AKpB1c w - - 0 1",
      "id": "puzzle_2651",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN YaoLin - ZENG YiQian\nHong Kong Individual Championship 1997 ",
      "fen": "C1ba1k3/5R3/3a5/8p/5r3/7n1/P3cr2P/4C3B/4A4/2BAK2R1 b - - 0 1",
      "id": "puzzle_2652",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG BiHua - CHIU Yu Kuen\nHong Kong Individual Championship 1997 ",
      "fen": "4kR2N/c8/3ab4/6C1p/2p6/6P2/1nP2r3/4B4/4A4/3AK4 b - - 0 1",
      "id": "puzzle_2653",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YAN Jin Hong - HUANG Haoyi\nHong Kong Individual Championship 1997 ",
      "fen": "R5br1/3ka4/4n4/pR2C3p/2P3pc1/3N5/P3P1P1P/9/9/2BAKnB2 w - - 0 1",
      "id": "puzzle_2654",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIAO Di - HUANG Haoyi\nHong Kong Individual Championship 1997 ",
      "fen": "3P1a3/3nkr3/2R6/6R2/8p/9/P8/3A5/4A4/3K2c1r b - - 0 1",
      "id": "puzzle_2655",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU FaQiang - WENG ChuGuang\nHong Kong Individual Championship 1998 ",
      "fen": "2Rak1b2/3Ra4/9/p1C1p3p/2P4n1/4c4/4c2r1/3A4B/3C5/2BK1A3 w - - 0 1",
      "id": "puzzle_2656",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DING JianQuan - CHAN Keung On\nHong Kong Individual Championship 1998 ",
      "fen": "3aka1c1/4n4/4b4/5R2p/1r7/2B3P2/p7P/4C3B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_2657",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LAI Robin - LIU YongLiang\nHong Kong Individual Championship 1998 ",
      "fen": "C1bR2b2/5k2C/8n/4c1p1p/2r6/1p5R1/P3P1c1P/4B1N2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2658",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LAI Robin - XU BingKui\nHong Kong Individual Championship 1998 ",
      "fen": "2bR5/2c2kN2/n1cab4/p5p1p/7C1/1r4P2/P3P3P/4BC3/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2659",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIAO Di - CHEN ZeSheng\nHong Kong Individual Championship 2001 ",
      "fen": "5nb2/1C1cak3/3NRa3/4p1p1p/9/6P2/P8/N3rA3/9/4KAB1c w - - 0 1",
      "id": "puzzle_2660",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG BaiDuan - LO ChiKam\nHong Kong Individual Championship 2001 ",
      "fen": "3a5/2N1a4/1C3k3/4p1N1p/P5b2/7c1/1n7/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2661",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG HaoChang - HE Ping\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "2ba1k3/4a4/4b4/p5P1p/9/2P3P2/8P/1r2C2R1/3RK4/r4ABc1 w - - 0 1",
      "id": "puzzle_2662",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI XinDa  - Ung Dau\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "3k1ab2/4a4/4b4/p7p/9/P1n1r3P/4cR3/B4N3/4K4/3A1A3 b - - 0 1",
      "id": "puzzle_2663",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MEI Hui - XU FuWen\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "3aka3/4n4/4R4/p3p3p/9/3p5/4P1P1P/7C1/1rcNK4/3A1ABN1 w - - 0 1",
      "id": "puzzle_2664",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TAN Ming - LEUNG Kwok Yau\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "4k4/9/5R3/9/9/6B2/4C4/1n1A1A3/3p1r3/4K1B2 b - - 0 1",
      "id": "puzzle_2665",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHOU Dezhang - \u8a79\u52cb\u6977\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "2bakab2/9/n5R2/p1p1p3p/9/2P3P2/P3P3P/N8/1c1rr4/1RB2K1C1 b - - 0 1",
      "id": "puzzle_2666",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUNG WenWei - PANG CaiLiang\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "3a5/2C2k3/3a5/p2N4p/1C7/P4c3/4p3P/9/4AKn2/1cBA5 b - - 0 1",
      "id": "puzzle_2667",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG Weitong - JIN Bo\n2010\u5e74\u5317\u6b66\u5f53\u5c71\u676f\u5168\u56fd\u8c61\u68cb\u7cbe\u82f1\u8d5b 2010 ",
      "fen": "2b1k4/1CP2R3/4b2c1/p3p1p1p/9/2r6/P7P/9/9/3K5 w - - 0 1",
      "id": "puzzle_2668",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u5149\u9896 - \u8212\u5929\u8d8a\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "2R1R4/3k5/8b/pn2P3p/2p1n1p2/9/P1P5P/9/4A1c2/2BrK1B2 w - - 0 1",
      "id": "puzzle_2669",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u738b\u6069\u4e88 - \u9ec4\u5149\u9896\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "3k1a3/6N2/3r5/pR7/2cN3np/9/P5P1P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2670",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DaHua - HONG Zhi\n2010\u5e74\u7b2c02\u5c4a\u53e5\u5bb9\u8305\u5c71\u676f\u5168\u56fd\u8c61\u68cb\u51a0\u519b\u9080\u8bf7\u8d5b 2010 ",
      "fen": "2b1k4/3P5/n4R3/2p6/p8/2P6/P2C5/3A5/2c1pK3/1r1A5 w - - 0 1",
      "id": "puzzle_2671",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU YouHua - TAO HanMing\n2010\u5e74\u7b2c02\u5c4a\u53e5\u5bb9\u8305\u5c71\u676f\u5168\u56fd\u8c61\u68cb\u51a0\u519b\u9080\u8bf7\u8d5b 2010 ",
      "fen": "2bak4/1n2a4/4b1n2/1P3r2p/p4c3/2N6/P3N2R1/4BK3/6C2/2BA1A3 b - - 0 1",
      "id": "puzzle_2672",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU DianZhong - XU Chao\n2010\u5e74\u7b2c05\u5c4a\u540e\u8096\u676f\u8c61\u68cb\u5927\u5e08\u7cbe\u82f1\u8d5b 2010 ",
      "fen": "4kab2/1N2a4/4b4/3nc1C1p/6p2/P3c4/6P1P/4B4/4N4/2BAKA3 b - - 0 1",
      "id": "puzzle_2673",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u674e\u8363 - ZHU LongKui\n2010\u5e74\u7b2c\u516d\u5c4a\u5357\u4eac\u5e02\u5f08\u6770\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "6CC1/4a4/3k5/3N5/9/2B6/4c4/4n4/4Ap3/c3K1B2 b - - 0 1",
      "id": "puzzle_2674",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5434\u5e86\u5fb7 - BAI TianXiao\n2010\u5e74\u7b2c\u516d\u5c4a\u5357\u4eac\u5e02\u5f08\u6770\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "1rbak4/1C1Rar3/2N1N4/p4R2p/9/2P4n1/P3P1p1P/4CA3/3K4c/c4A3 w - - 0 1",
      "id": "puzzle_2675",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u59dc\u6653 - DONG WenTao\n2010\u5e74\u7b2c\u516d\u5c4a\u5357\u4eac\u5e02\u5f08\u6770\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "2r1kab2/2NRa4/2c4c1/p4np2/9/1R6C/P3P3r/4C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2676",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5b59\u9038\u9633 - \u82d1\u6b63\u5b58\n2010\u5e74\u7b2c\u516d\u5c4a\u5357\u4eac\u5e02\u5f08\u6770\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "RN1k1ab2/4a4/2P1b4/9/6p2/4P3p/P5P1n/4B4/4K4/3r1AB2 w - - 0 1",
      "id": "puzzle_2677",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f6d\u708e\u519b - \u8bb8\u660e\n2010\u666f\u5fb7\u9547\u8c61\u68cb\u7532\u7ea7\u8054\u8d5b 2010 ",
      "fen": "1R3abr1/3ka4/2P6/p2N4p/2c6/6p1P/9/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2678",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO ShunXin - SHEN Peng\nChina Team Championship 2010 ",
      "fen": "4ka3/4a4/4b4/p6NC/4c4/4c4/9/4N4/4A2n1/2BAK4 b - - 0 1",
      "id": "puzzle_2679",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LOU JiChu - SU ShaoFeng\nChina Team Championship 2009 ",
      "fen": "3k1ab2/4a4/4b4/p1p3C1p/9/4n1C2/P6rP/2R5n/4AK3/2cA1N3 b - - 0 1",
      "id": "puzzle_2680",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u674e\u96e8\u771f - \u6797\u5ef6\u79cb\n2010 National Junior Xiangqi Championship 2010 ",
      "fen": "1r1k1a3/4a4/n3R1N1b/p1p6/9/5R3/P1r6/6C2/9/1cBAKAB2 w - - 0 1",
      "id": "puzzle_2681",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5218\u5cf0 - \u9a6c\u9f99\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "5k3/4c4/4R4/6N2/3r2p2/9/P8/3A1Ap2/9/4K1B2 w - - 0 1",
      "id": "puzzle_2682",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN XinJun - \u51b7\u6613\u7eb9\n2010 Long-kun Cup Zhejiang and Anhui city Xiangqi Tournament  2010 ",
      "fen": "3nkab2/9/3ab4/pC2p4/8p/1R1RN4/P1P1P1P2/3KB4/5r3/1N3nBc1 b - - 0 1",
      "id": "puzzle_2683",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIN XiaoLong - LO ChiKam\nHong Kong Individual Championship 2000 ",
      "fen": "2ba5/4akN2/4b4/4P4/3CcCp2/9/9/4nA3/4A4/4K4 w - - 0 1",
      "id": "puzzle_2684",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NG Chun Hei - WEN LiShen\nHong Kong Individual Championship 2000 ",
      "fen": "2bak4/3R5/2n1Ca3/p1p3Rcp/6p2/2P1p4/Pr2r3P/6N2/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2685",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG HaoChang - HUANG Guan Gnan\nHong Kong Individual Championship 2000 ",
      "fen": "4kab2/4a4/4b4/1P7/6p2/2Brn4/P7R/4B4/3rA4/3NKA3 b - - 0 1",
      "id": "puzzle_2686",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TAN Jing Yang - WONG Hok Him\nHong Kong Individual Championship 2000 ",
      "fen": "3k1ab2/2N1a4/2n1c4/p1Crp3p/9/9/P1R1P3P/4B1R2/9/2BAKA1rc b - - 0 1",
      "id": "puzzle_2687",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU FaQiang - ZHENG FuXiang\nHong Kong Individual Championship 2001 ",
      "fen": "5k3/4a4/5a2N/5PP2/2b6/7R1/3nr4/5A2B/3K2c2/9 b - - 0 1",
      "id": "puzzle_2688",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG BaoLiang - ZHENG FuXiang\nHong Kong Individual Championship 2002 ",
      "fen": "1N1a5/4k4/3c2n2/6C1p/3N1R3/9/p5r1P/9/3cA4/2BA1KB2 w - - 0 1",
      "id": "puzzle_2689",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YUNG Tak Keung - CHAN Keung On\nHong Kong Individual Championship 2002 ",
      "fen": "3a2b2/4a4/2C2k3/3P5/6R2/4p4/P1r4p1/2N1B4/4A4/4KABc1 w - - 0 1",
      "id": "puzzle_2690",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN ZhiEn - LONG GuangMing\nHong Kong Individual Championship 2002 ",
      "fen": "2R2a3/3k2C2/3a1P3/9/9/P5B2/3r5/9/9/4KABc1 w - - 0 1",
      "id": "puzzle_2691",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f20\u5b50\u61cb - PAN ZongYao\nHong Kong Individual Championship 2002 ",
      "fen": "1R3ab2/3ka1N2/b8/N1p1r3p/3cCnp2/2P6/P2R4P/9/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_2692",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YANG BaoLiang - HUANG Guan Gnan\nHong Kong Individual Championship 2003 ",
      "fen": "9/3k5/4bP3/9/6b2/6B2/9/3A5/4K4/2B4C1 w - - 0 1",
      "id": "puzzle_2693",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI HuiDong - LIN XiaoLong\nHong Kong Individual Championship 2003 ",
      "fen": "4kab2/3P4C/2Ncb2Cc/p1n6/2p6/P3P4/9/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2694",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LEE Ang - YU Ming\nHong Kong Individual Championship 2003 ",
      "fen": "3ck4/9/3a4b/8p/4r4/2R5P/P1Pr5/N3R4/4A4/4KA1N1 b - - 0 1",
      "id": "puzzle_2695",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHONG Jiangning - LU BaoCheng\nHong Kong Individual Championship 2003 ",
      "fen": "3ak1b2/4aP3/4bc3/p2PC4/8p/9/9/B8/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_2696",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIANG WeiKun - WANG TieMing\nHong Kong Individual Championship 2003 ",
      "fen": "3k2r2/4PR3/8b/9/9/2P6/5n3/4B4/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_2697",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHUO Ruirong - WU WeiHao\nHong Kong Individual Championship 2003 ",
      "fen": "3ak2r1/4a4/b3NR3/4C3p/4P4/2P6/P1Cn4P/2n6/4p4/2BAK1B2 w - - 0 1",
      "id": "puzzle_2698",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u90ed\u5251\u950b - CHEN BoHui\nHong Kong Individual Championship 2003 ",
      "fen": "4k4/3P1P3/3ab4/2N1n4/9/9/9/5A2B/4K4/5AB2 w - - 0 1",
      "id": "puzzle_2699",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUNG WenWei - \u987e\u632f\u5f3a\nHong Kong Individual Championship 2003 ",
      "fen": "2bak3C/5P3/5aN2/9/8p/7n1/P7P/4BA3/4A4/5Kc2 w - - 0 1",
      "id": "puzzle_2700",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHU ZhongQian - CHEN YongLe\nHong Kong Individual Championship 2009 ",
      "fen": "4ka3/4a4/4b4/p7p/3P5/2B3p2/P4C1RP/1crAK1N2/9/c4AB2 b - - 0 1",
      "id": "puzzle_2701",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN YongLe - ZHENG FuXiang\nHong Kong Individual Championship 2009 ",
      "fen": "3ak1br1/3RaR3/4P4/r7p/p1p3b2/1cP6/n3c3P/N3C4/4C4/2BAKAB2 w - - 0 1",
      "id": "puzzle_2702",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU WeiHao - TANG HaoWen\nHong Kong Individual Championship 2009 ",
      "fen": "3ak4/9/4ba3/9/9/5R3/4c2n1/4B4/4A4/2BAKC2r b - - 0 1",
      "id": "puzzle_2703",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU Shi En - \u5218\u6587\u94a6\nHong Kong Team Champion 2002 ",
      "fen": "5a3/3Ra4/4k4/1rp5p/2b1N1b2/P5B2/4P3P/3C5/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2704",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FAN YuQing - LI YanLong\nHong Kong Team Champion 2002 ",
      "fen": "3Rkab2/9/4bc3/p8/4c4/7r1/PC1n4P/N3B4/4A4/2BAKC3 b - - 0 1",
      "id": "puzzle_2705",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ea6\u6842\u7098 - YAO GuoNan\nHong Kong Team Champion 2002 ",
      "fen": "3akR3/9/5r3/p7p/9/4c2N1/P7P/B2K4B/9/3A1n3 b - - 0 1",
      "id": "puzzle_2706",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DENG RongSen - \u9ea6\u524d\u6e90\nHong Kong Team Champion 2002 ",
      "fen": "3aka3/4c4/4R4/C5p2/2p1p3n/2P3P2/P7c/2N6/9/2BAKrB2 w - - 0 1",
      "id": "puzzle_2707",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8427\u4e1a\u901a - CHEN JiaSheng\nHong Kong Team Champion 2002 ",
      "fen": "1C2kab2/9/4b4/p1p5p/6p2/3p5/P5r1P/1R2n4/4A4/3K1A3 b - - 0 1",
      "id": "puzzle_2708",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u90b1\u5bb6\u5b9d - \u9ea6\u6842\u7098\nHong Kong Team Champion 2002 ",
      "fen": "C1ba1k3/4a4/4b4/p3p1p2/3n1r1np/4N1P2/PR2c3P/4BN3/4A4/3AK2c1 b - - 0 1",
      "id": "puzzle_2709",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WENG ChuWen - LIANG ShuRen\nHong Kong Team Champion 2002 ",
      "fen": "2b1kab2/4a4/n1r1c4/1N1R5/3R5/4C4/2p1P1p2/4B4/9/2BAKr3 w - - 0 1",
      "id": "puzzle_2710",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HUANG XueQian - ZHANG GuoTai\nHong Kong Team Champion 2002 ",
      "fen": "3ak1b2/1R2a2c1/2r3c2/p7p/4R1p2/2P1C4/P3P3P/6NrB/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2711",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHAN Keung On - YANG GuoZhang\nHong Kong Team Champion 2002 ",
      "fen": "5a3/4k4/3a5/p1R1C3p/1c1N1r3/9/P3P3P/9/4A4/c2K1AB2 w - - 0 1",
      "id": "puzzle_2712",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8c22\u9648 - CAI YongGuan\nHong Kong Team Champion 2002 ",
      "fen": "2bk1a3/4a4/4b4/p8/8P/6P2/4N4/9/4p4/1cBn1K3 b - - 0 1",
      "id": "puzzle_2713",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JIAN TianNan - YUNG Tak Keung\nHong Kong Team Champion 2003 ",
      "fen": "2b6/4k4/9/p3C4/6r1p/9/P4Rn1P/4BK3/3NA4/2cA5 b - - 0 1",
      "id": "puzzle_2714",
      "title": "Mate in 3 moves"
    },
    {
      "description": "DONG YuRong - \u51af\u67cf\u71ca\nHong Kong Team Champion 2003 ",
      "fen": "C4ab2/4k4/2NRb4/p1p5p/4p2n1/2P6/P7P/6c1B/6r2/1rBAKA3 w - - 0 1",
      "id": "puzzle_2715",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9648\u6893\u6770 - CHEN BingQuan\nHong Kong Team Champion 2003 ",
      "fen": "2ba1a3/5kc2/4b4/2CNn1C1p/5r3/4N1P2/4P3P/1R7/9/2BAKABr1 b - - 0 1",
      "id": "puzzle_2716",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN BoHui - \u5434\u5609\u4eae\nHong Kong Team Champion 2003 ",
      "fen": "4k1b2/4a4/3aN4/4C4/2b6/9/3R4P/3A1A3/1r1c5/3K5 w - - 0 1",
      "id": "puzzle_2717",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YUNG Tak Keung - ZHANG WenChang\nHong Kong Team Champion 2003 ",
      "fen": "3k5/9/Nc7/p8/9/2Pr2B2/4R4/B4A1n1/9/4KAC2 w - - 0 1",
      "id": "puzzle_2718",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8c2d\u666f\u6df1 - \u9ec4\u80b2\u9e9f\nHong Kong Team Champion 2003 ",
      "fen": "4kaR2/4a4/b8/p3p3p/6p2/9/4P1P1P/2n4R1/2r1A4/r1BAKNB2 b - - 0 1",
      "id": "puzzle_2719",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9648\u667a\u52c7 - \u5434\u5609\u73ae\nHong Kong Team Champion 2003 ",
      "fen": "4k1b2/4a4/4b1n2/p3N4/6p1p/2R2R3/P3c1P1P/3r4N/3r5/2B1KAB2 b - - 0 1",
      "id": "puzzle_2720",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG Chulin - SU FuYin\nHong Kong Team Champion 2003 ",
      "fen": "3akab2/9/b1P6/p4Pp1p/9/P7P/4r1P2/B3B2r1/9/1R1AKAR1c b - - 0 1",
      "id": "puzzle_2721",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FU ChuanYong - LAI Robin\nHong Kong Team Champion 2003 ",
      "fen": "3k5/2R1P3C/3a1a3/4r4/9/9/3p1n3/5A3/9/2BAK1B2 w - - 0 1",
      "id": "puzzle_2722",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LU BaoCheng - WU WeiHao\nHong Kong Team Champion 2003 ",
      "fen": "5k3/3P5/9/p8/5n2p/9/3r5/4RA3/9/3AKCB2 w - - 0 1",
      "id": "puzzle_2723",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO Guo Wei - \u90b1\u9038\u90a6\nHong Kong Team Champion 2003 ",
      "fen": "3k2b2/4a4/3a5/p3C4/1R3P3/9/9/4B4/2r1A4/c1BAK4 w - - 0 1",
      "id": "puzzle_2724",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TANG HaoWen - \u5c39\u5efa\u90a6\nHong Kong Team Champion 2003 ",
      "fen": "2baka3/4n4/3cb4/4C1CRp/2p6/6P2/P1P1P3P/4B1N2/9/1rNrKAB2 w - - 0 1",
      "id": "puzzle_2725",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WU Qiang - \u6768\u4fca\u5f3a\nHong Kong Team Champion 2003 ",
      "fen": "2bakc3/4a4/4b4/p1p2R2p/5Pp2/2PR5/P3C4/4B4/4Ar3/3K1Ar1c b - - 0 1",
      "id": "puzzle_2726",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WONG Chi Keung - DING JianQuan\nHong Kong Team Champion 2003 ",
      "fen": "4kab2/4a4/1r2b4/p1p1P3p/1C1N5/1RP6/P5n2/3C2n2/4AK3/3A2B1c b - - 0 1",
      "id": "puzzle_2727",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u84dd\u653f\u9e3f - CHEN BingQuan\nHong Kong Team Champion 2011 ",
      "fen": "4k4/3P1P3/5C3/9/2bn2b2/9/9/5A3/9/2BK1AB2 w - - 0 1",
      "id": "puzzle_2728",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SU FuYin - LIN JiaLong\nHong Kong Team Champion 2011 ",
      "fen": "1Cbak1b2/4a4/1c7/8R/2n3r2/3C5/P7P/2cAB4/9/2B1KA3 b - - 0 1",
      "id": "puzzle_2729",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u66fe\u6c38\u52e4 - CHEN Zheng\nHong Kong Team Champion 2011 ",
      "fen": "2b6/3k5/9/p8/2b3p2/8p/r8/2R5B/4Ap3/4KA3 b - - 0 1",
      "id": "puzzle_2730",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIANG Yuan - ZHENG Haoxian\nHong Kong Team Champion 2011 ",
      "fen": "3ak1br1/3RC4/r1c1b4/p4R2p/2p6/9/P1P1p3P/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2731",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5434\u5c11\u4f1f - XIAO Di\nHong Kong Team Champion 2011 ",
      "fen": "5a3/C2R1k3/b3b4/9/p8/2P5P/4P4/2C1B4/4Nr3/c1BAK4 b - - 0 1",
      "id": "puzzle_2732",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO Guo Wei - \u6881\u5065\nHong Kong Team Champion 2011 ",
      "fen": "2bRka3/9/n3b4/2p1N3p/p3P4/2P6/P5N2/9/4p4/1cBA1KBr1 b - - 0 1",
      "id": "puzzle_2733",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f20\u5747\u6e90 - \u9ec4\u5c0f\u9f99\nHong Kong Team Champion 2011 ",
      "fen": "4ka3/4a4/4b4/3c5/6b2/4p4/1C5n1/2p1B4/4A4/3K1AB2 b - - 0 1",
      "id": "puzzle_2734",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5ebe\u542f\u4e30 - \u5434\u4e9a\u5229\nHong Kong Team Champion 2011 ",
      "fen": "2Pa1k3/3c5/3ab4/p6Rp/2b6/4P1B2/P2C1r2P/2N1n4/9/4K4 b - - 0 1",
      "id": "puzzle_2735",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9648\u8d2f\u6052 - \u5218\u88d5\u4f73\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/4b4/p1P1p4/8p/2r6/3r4c/5K2C/4A4/5A3 b - - 0 1",
      "id": "puzzle_2736",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8fde\u667a\u5174 - WU Xiao Zeng\nHong Kong Team Champion 2011 ",
      "fen": "3k1ab2/n3a4/4b4/3C5/P7N/3r5/7RP/5p3/4K4/2cA5 b - - 0 1",
      "id": "puzzle_2737",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Run Xiang - \u8c2d\u6d69\u6587\nHong Kong Team Champion 2011 ",
      "fen": "2b2aC1C/4k1c2/4ca1Rn/p3r4/2p6/9/P1P1P1p1P/2N1B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2738",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHONG Jiangning - \u8427\u9526\u6743\nHong Kong Team Champion 2011 ",
      "fen": "2r1ka1n1/4a4/4b4/p2N4p/1R4b2/2Cp5/P7P/4C4/4A4/c3KAB2 w - - 0 1",
      "id": "puzzle_2739",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u66fe\u8d85\u534e - LUN Zi Yun\nHong Kong Team Champion 2011 ",
      "fen": "3k1ab2/4a4/8n/p2rp1N1p/3R5/4c4/P7P/4C3B/1nC1A4/1NB1KA3 b - - 0 1",
      "id": "puzzle_2740",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIANG Yuan Zhong - \u6b27\u5fd7\u5f3a\nHong Kong Team Champion 2011 ",
      "fen": "3k1a3/4a1N2/9/p3r2np/9/1R7/P7P/9/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_2741",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u738b\u654f\u6770 - \u82cf\u4fca\u5f3a\nHong Kong Team Champion 2011 ",
      "fen": "4kab2/4a4/4b4/5r2p/P1p1P4/9/2P2n2P/4B1N2/3rAK3/RcB6 b - - 0 1",
      "id": "puzzle_2742",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5c39\u5e0c\u6717 - \u6797\u6770\u8d24\nHong Kong Team Champion 2011 ",
      "fen": "1CbakR3/4a4/9/p7p/2p3b2/4r1B2/P7P/9/4A4/1crAK4 b - - 0 1",
      "id": "puzzle_2743",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8521\u51a0\u4e1c - \u6797\u4e16\u6587\nHong Kong Team Champion 2011 ",
      "fen": "2bak4/2r1a4/4b1N2/pC5R1/5N2p/6p2/P6rP/4C4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_2744",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WONG Hok Him - CHAN Chee Mun\nHong Kong Team Champion 2011 ",
      "fen": "2b2ab2/2Nka4/9/5N3/3C4p/2P1P4/3p4c/8B/2n1A4/4KA3 w - - 0 1",
      "id": "puzzle_2745",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG YanLong - \u674e\u8d5e\u5b89\nHong Kong Team Champion 2011 ",
      "fen": "3a5/3P5/4k4/8p/p2PN4/1N7/P4C3/5An2/n2KA3c/9 w - - 0 1",
      "id": "puzzle_2746",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u82cf\u4fca\u5f3a - \u5f20\u5747\u6e90\nHong Kong Team Champion 2011 ",
      "fen": "3k5/9/2P6/p8/4R4/7p1/P8/3r5/9/2B1KAB2 w - - 0 1",
      "id": "puzzle_2747",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8521\u5146\u6bb7 - \u5c91\u4f69\u4ed5\nHong Kong Team Champion 2011 ",
      "fen": "4R4/3k1N3/b8/4r4/8p/9/8P/3A5/4K4/3c5 w - - 0 1",
      "id": "puzzle_2748",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN BingQuan - \u5362\u56fd\u534e\nHong Kong Team Champion 2011 ",
      "fen": "2b2k3/3Pa4/5a3/p6N1/1cb2n3/P5B1p/5C3/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2749",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u826f\u8fbe - \u9ec4\u5b66\u534e\nHong Kong Team Champion 2008 ",
      "fen": "9/4ak3/4P4/9/9/7R1/5r3/4B4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_2750",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u5c0f\u9f99 - \u9ec4\u8000\u8f89\nHong Kong Team Champion 2008 ",
      "fen": "C2a5/4k4/5a3/9/N1b5p/4c1P2/6r2/4B4/4A4/2BAK2R1 w - - 0 1",
      "id": "puzzle_2751",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU KeDang - \u8c2d\u6d69\u6587\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/4a4/8b/6p1p/2PR5/P1B5r/9/B3R1N2/4A4/3K1r3 w - - 0 1",
      "id": "puzzle_2752",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LEI Xong Cai - FANG WenWei\nHong Kong Team Champion 2008 ",
      "fen": "2b2a3/2P6/3k1a3/3r5/4R4/5NB2/9/3A5/9/2B1KA3 w - - 0 1",
      "id": "puzzle_2753",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u7f57\u7ef5\u6c9b - \u5f20\u8fbe\u5149\nHong Kong Team Champion 2008 ",
      "fen": "9/3k5/2N1b3b/8p/2c2N3/3C5/8P/1n7/4A4/5K3 w - - 0 1",
      "id": "puzzle_2754",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG ZiQiang - \u7f2a\u5bb6\u8f89\nHong Kong Team Champion 2008 ",
      "fen": "1r1RR4/5kN2/4b1n2/p3p4/9/6P2/4P4/4B4/9/cr1AKAB2 w - - 0 1",
      "id": "puzzle_2755",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u5efa\u5f6c - \u738b\u5b50\u9f99\nHong Kong Team Champion 2008 ",
      "fen": "4kab2/9/4b4/p1p5p/9/2P4R1/r7P/3N5/3KA4/1r3A3 b - - 0 1",
      "id": "puzzle_2756",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f20\u4ef2\u6717 - \u6e29\u5146\u826f\nHong Kong Team Champion 2008 ",
      "fen": "1rba2R1C/4ak3/4b2c1/9/p2r2p2/8R/2p1P1P1P/6N2/4A4/c1BNKAB2 w - - 0 1",
      "id": "puzzle_2757",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u8000\u4fca - \u79e6\u767e\u91cc\nHong Kong Team Champion 2008 ",
      "fen": "1R1ak1br1/4a4/2r1bc2n/p3CR3/6p2/9/P3P1P1P/N3B1N2/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2758",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u6881\u6d69\u7136 - \u8c2d\u6d69\u6587\nHong Kong Team Champion 2008 ",
      "fen": "3ak1b2/4a4/4b3n/p1p1C1p2/5R3/7r1/P3N1P1P/6N1B/4A4/3r1K3 w - - 0 1",
      "id": "puzzle_2759",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ad8\u5b50\u9633 - WEN LiShen\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/4a4/4b4/p5P2/6b2/P3c4/5pN2/B8/4p4/5K3 b - - 0 1",
      "id": "puzzle_2760",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIAO Di - \u5f20\u4ef2\u6717\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/2P1a4/b1n1b4/p1R2N2p/2r6/9/P3P3P/3CB4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2761",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u80e1\u56fd\u7199 - \u4f55\u52b2\u5149\nHong Kong Team Champion 2008 ",
      "fen": "2b1kab2/4R4/c1n2c3/p1p1p3p/6P2/4P4/P1P1Nn3/C3B4/2R1C1r2/2BAKA2r b - - 0 1",
      "id": "puzzle_2762",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u65bd\u4fca\u5b89 - ZHENG Rongbo\nHong Kong Team Champion 2008 ",
      "fen": "2b2k3/4R2rR/2r6/9/2p3p2/9/P1P1P1P2/2N1B4/4A3p/3AK1B2 w - - 0 1",
      "id": "puzzle_2763",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u674e\u5d69\u9ad8 - \u8427\u9526\u6743\nHong Kong Team Champion 2008 ",
      "fen": "4kab2/4a4/4b4/9/4c3p/4n4/8P/2RA4B/6r2/2BK2C2 b - - 0 1",
      "id": "puzzle_2764",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f20\u8403\u9e9f - HUANG Haoyi\nHong Kong Team Champion 2008 ",
      "fen": "3akab2/9/4N4/p7p/9/4P1P2/4c4/4B4/4A2n1/3AK1B2 b - - 0 1",
      "id": "puzzle_2765",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHENG ZiQiang - WENG ChuWen\nHong Kong Team Champion 2008 ",
      "fen": "R1b1k4/3Pa4/1n1ab3N/9/4p1p2/3r5/4P1P2/4B4/2RnA4/1r1CKAB2 w - - 0 1",
      "id": "puzzle_2766",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u7f57\u9526\u6c9b - ZHENG JianWen\nHong Kong Team Champion 2008 ",
      "fen": "3k1Rb2/4a4/2n1b4/p3c3p/2p3p2/6P2/PCP1N3P/B3B2r1/3r5/R2AKANc1 b - - 0 1",
      "id": "puzzle_2767",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SU FuYin - \u6797\u4e16\u6587\nHong Kong Team Champion 2009 ",
      "fen": "2bak4/6n2/3a5/pnC1C1N1p/7P1/9/4c4/2p1B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2768",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHEN Run Xiang - LUN Zi Yun\nHong Kong Team Champion 2009 ",
      "fen": "4ka3/4a4/4b4/p8/6b1P/9/P2R5/1N2B4/5p3/r2nKA3 b - - 0 1",
      "id": "puzzle_2769",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u5c0f\u9f99 - CHEN Run Xiang\nHong Kong Team Champion 2009 ",
      "fen": "9/C1R6/1C2k4/p1p1p3p/5n3/2P6/P7P/3c1A3/4r4/4K4 w - - 0 1",
      "id": "puzzle_2770",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NG Wing Sang - \u5f6d\u5e38\u4f1f\nHong Kong Team Champion 2009 ",
      "fen": "2bk1a3/1Rn1a1N1n/2Ncb4/8p/p1r6/9/P3P4/3cB2C1/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2771",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8521\u4e1a\u6797 - ZHANG WenChang\nHong Kong Team Champion 2009 ",
      "fen": "2bRka3/9/4b4/2n1p3p/p8/7R1/P3cr3/4B4/4A4/2BAKCr2 b - - 0 1",
      "id": "puzzle_2772",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u6b27\u5fd7\u5f3a - TANG HaoWen\nHong Kong Team Champion 2009 ",
      "fen": "4ka3/4a4/4b4/4p4/p8/4r4/8P/3A1nC2/4R4/3N1K1c1 b - - 0 1",
      "id": "puzzle_2773",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU BingKui - \u84dd\u653f\u9e3f\nHong Kong Team Champion 2009 ",
      "fen": "C3kc3/4a4/N3n4/5P3/6b2/2B6/9/4BA3/4A4/3K5 w - - 0 1",
      "id": "puzzle_2774",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8c2d\u8000\u660c - \u5f20\u5747\u6e90\nHong Kong Team Champion 2009 ",
      "fen": "2baka3/cR7/4b4/p3P3p/6p2/4n4/8P/4B4/3KA4/r4AB2 b - - 0 1",
      "id": "puzzle_2775",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIANG Yuan - \u8521\u6c38\u8c6a\nHong Kong Team Champion 2009 ",
      "fen": "1nb2ab2/1N1k2cR1/5a3/p3P3p/6p2/2P1c4/P2C4P/4C4/4A4/3AK1B2 w - - 0 1",
      "id": "puzzle_2776",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MA Liang - \u53f6\u4e91\u9f99\nHong Kong Team Champion 2009 ",
      "fen": "1rba3R1/4ak3/4b1R2/p4C3/2p3p2/4P4/P1P6/2N1C4/9/2BAKr3 w - - 0 1",
      "id": "puzzle_2777",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u82cf\u5174 - \u9ea6\u6d69\u8d24\nHong Kong Team Champion 2009 ",
      "fen": "2bak1b2/5P3/9/4rN3/2p2P3/7R1/2P6/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2778",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9648\u51a0\u8c6a - \u6797\u6f8d\u660c\nHong Kong Team Champion 2009 ",
      "fen": "3akab2/9/4b4/p3P3p/1R7/9/4n1R2/9/r8/2rAKA3 b - - 0 1",
      "id": "puzzle_2779",
      "title": "Mate in 3 moves"
    },
    {
      "description": "MA Liang - \u6797\u6770\u8d24\nHong Kong Team Champion 2009 ",
      "fen": "2b1k4/4a4/4b4/4PN3/8p/5RB1r/p8/9/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_2780",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5434\u6ce2 - \u7518\u656c\u5b87\nHong Kong Team Champion 2009 ",
      "fen": "2ba5/C3k4/1c1P1a3/2nN5/9/4P3p/1p3C1c1/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2781",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f6d\u5e38\u4f1f - \u5f20\u4ef2\u6717\nHong Kong Team Champion 2009 ",
      "fen": "3ak1b2/4P4/4b4/7R1/9/2P6/P8/4B3B/5r1nc/3K5 b - - 0 1",
      "id": "puzzle_2782",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHIU Yu Kuen - LI YuLin\nHong Kong Individual Championship 2002 ",
      "fen": "1rba1k2C/4a1nR1/1cn6/p3p3p/2p3p2/1c3N3/P1P1P3P/2N6/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2783",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LAI Robin - ZENG YiQian\nHong Kong Individual Championship 2002 ",
      "fen": "2bak4/1N2a4/4bc3/5N3/3C5/2P2c2p/P4np2/9/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_2784",
      "title": "Mate in 3 moves"
    },
    {
      "description": "OU HanMin - CHAN Chee Mun\nHong Kong Individual Championship 2002 ",
      "fen": "3k1ab2/2N1a4/4b1n2/1Nn5p/9/2p3P2/p4C2P/4B4/c2C1K3/2B1c4 w - - 0 1",
      "id": "puzzle_2785",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TENG Siong Liang - Lv Qin\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "2b1kab2/4a3n/n8/4C1p1p/C1P2N3/3R2P2/P3P3P/6c1B/7r1/2BAK3c b - - 0 1",
      "id": "puzzle_2786",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5c71\u5bb6\u7231\u7f8e - CHIENG Ming Chuo\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "3aka1r1/9/4Cc3/p5R1p/4p4/3p2P2/P1r5P/4B4/2n1AK3/R2A2B2 b - - 0 1",
      "id": "puzzle_2787",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LI ShaoGeng - ZHANG XiaoPing\nChina National Xiangqi League 2011 ",
      "fen": "2ba1aR2/4k4/5N1r1/p7p/2b1N4/9/1c6P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2788",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u88f4\u6881\u6210 - TRAN Chanh Tam\n2011 Vietnam National Chess Tournament 2011 ",
      "fen": "3a1kb2/1R7/4N4/9/9/2P3r2/4P4/3K5/cp7/9 b - - 0 1",
      "id": "puzzle_2789",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NGUYEN HoangLam - Nguyen Thanh Bao\n2011 Vietnam National Chess Tournament 2011 ",
      "fen": "4ka3/1R7/3a5/p3c4/2b2r3/P1N1n4/6c2/N2CB4/4A4/2BK1AC2 b - - 0 1",
      "id": "puzzle_2790",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f20\u798f\u751f - WANG ChengQiang\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "2b2N1C1/4aR3/2nkc4/p3p2Np/9/2r6/P3P3P/8B/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_2791",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG HuaMing - \u66fe\u519b\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "1Cb1R4/3k5/9/p7p/9/PN4p2/2P5P/2C1r4/2c6/2B1K4 w - - 0 1",
      "id": "puzzle_2792",
      "title": "Mate in 3 moves"
    },
    {
      "description": "NG JunMing - SHOSHI Kazuharo\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "1Cba1k2r/3R1n3/2N1b4/p7p/9/9/2p1P3P/4B4/4A4/c2A1K3 w - - 0 1",
      "id": "puzzle_2793",
      "title": "Mate in 3 moves"
    },
    {
      "description": "KNG Ter Yong - CHIU Yu Kuen\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2bak4/4a4/3rb2c1/2N1p3p/p8/2Bn1N3/P3P2CP/1C7/3RA4/2cK1A3 b - - 0 1",
      "id": "puzzle_2794",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u962e\u6e05\u6d01 - WOO WeiCheung\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "3a3R1/4k4/3ab2Nr/6P2/2p1N1b2/1p7/6c2/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2795",
      "title": "Mate in 3 moves"
    },
    {
      "description": "CHIANG ChungHao - \u6f58\u5f66\u6587\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2b1ka3/4a4/2R6/p7p/2p1c3r/3R5/P1P6/4r4/4AK3/2BA5 b - - 0 1",
      "id": "puzzle_2796",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9093\u5b9c\u5175 - LIN ShiXiong\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "4kab2/4a4/4b3c/p1N2R3/6p2/P2RP4/1rP1n4/1c1K5/4N4/2BA2r2 b - - 0 1",
      "id": "puzzle_2797",
      "title": "Mate in 3 moves"
    },
    {
      "description": "AKIYOSHI Kazuyoshi - \u97e9\u601d\u751f\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "C3k1b2/3Pa4/4b4/1R7/2p3p1p/9/9/4c1n2/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2798",
      "title": "Mate in 3 moves"
    },
    {
      "description": "GANG QiuYing - \u738b  \u6674\nChina Team Championship 2008 ",
      "fen": "5aR2/3k5/b5N2/p7p/2p3p2/5RP2/P1n1P3P/9/4Kc3/2Br1r3 w - - 0 1",
      "id": "puzzle_2799",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9f50\u8f89 - ZHANG Mei\nChina Team Championship 2008 ",
      "fen": "3k1ab2/4a4/4b4/p5p1p/2p1R4/P3C1P2/4n3P/3r5/9/1NBAK1B2 b - - 0 1",
      "id": "puzzle_2800",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u6768\u4e66\u6743 - \u5f90\u5efa\u658c\nChina Team Championship 2008 ",
      "fen": "3ck1b2/4aC3/3C5/4R4/8p/6P2/3n4P/9/2r6/3K1ABc1 b - - 0 1",
      "id": "puzzle_2801",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LIU Long - HUANG GuanLun\nChina Team Championship 2008 ",
      "fen": "3k1abc1/3n2N2/2Pa5/p3p3p/3c2p2/2R6/P4N2P/9/3C5/2BAKAB2 w - - 0 1",
      "id": "puzzle_2802",
      "title": "Mate in 3 moves"
    },
    {
      "description": "Xin Yu - GAO HaiJun\nChina Team Championship 2008 ",
      "fen": "2rak1R2/4a4/4b3b/p3C3N/4P1p2/2B3P2/8P/3R1A3/rc7/c2K1A3 b - - 0 1",
      "id": "puzzle_2803",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG GuangZeng - HUANG GuanLun\nChina Team Championship 2008 ",
      "fen": "1R3a3/3k5/3ab4/p2N4p/2p1p1cr1/6N2/c1P3P1P/4B4/9/4KAB2 w - - 0 1",
      "id": "puzzle_2804",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO Wei - LIU Long\nChina Team Championship 2008 ",
      "fen": "3ak1b2/3RaR3/3c5/4NP2p/pnp3b2/9/P1P5P/N1C1C4/3rr4/2B2K3 w - - 0 1",
      "id": "puzzle_2805",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u674e\u8fdb - \u5b8b\u5fd7\u9e4f\n2010\u5e74\u7b2c\u5341\u516d\u5c4a\u8fce\u6625\u676f\u8c61\u68cb\u56e2\u4f53\u516c\u5f00\u8d5b 2010 ",
      "fen": "2ba1a3/r8/3k4r/p3n1p2/3N3Rp/9/P5P1P/4C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2806",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u738b\u660a - XU GuoYi\nWacker Real Estate Cup National  1st class tournament 2011 ",
      "fen": "1C3k3/3Ca4/2Pab4/p3p4/4c1p2/9/c3N2n1/4BA3/2n6/1N1A1KB2 b - - 0 1",
      "id": "puzzle_2807",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO Li - ZHU Xiaohu\nWacker Real Estate Cup National  1st class tournament 2011 ",
      "fen": "2bk1a3/4a4/3r5/p7p/9/2P6/P7P/4C4/4R1r2/2B2K1R1 b - - 0 1",
      "id": "puzzle_2808",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG RuiXiang - LI DeZhi\nWacker Real Estate Cup National  1st class tournament 2011 ",
      "fen": "1R1R5/3ck4/9/p2rr3p/2p6/9/P7P/9/4A4/3A1K3 b - - 0 1",
      "id": "puzzle_2809",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU SiYuan - ZHANG Lihan\nWacker Real Estate Cup National  1st class tournament 2010 ",
      "fen": "3akab2/4n1R2/4b1n2/p3p1p1p/5R3/6P2/c3c3P/B1C1N4/4A4/3r1KB2 w - - 0 1",
      "id": "puzzle_2810",
      "title": "Mate in 3 moves"
    },
    {
      "description": "YU SiYuan - \u6768\u98de\nWacker Real Estate Cup National  1st class tournament 2010 ",
      "fen": "9/1c2k4/4bR3/4N3p/p8/2B6/P7P/3rC4/5K3/5AB2 w - - 0 1",
      "id": "puzzle_2811",
      "title": "Mate in 3 moves"
    },
    {
      "description": "WANG XinGuang - TANG Dan\nWacker Real Estate Cup National  1st class tournament 2010 ",
      "fen": "2bakab2/9/9/p3p3p/5Rp2/2P2nBr1/P3c1P1c/2NN5/1C7/2BAKA3 b - - 0 1",
      "id": "puzzle_2812",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u59dc\u6653 - \u6797\u5ddd\u535a\nEarth Cup xiangqi tournament 2011 ",
      "fen": "1n2kab2/9/3Rb4/2p3p1p/p2N5/9/P3P1P1P/3C2c2/9/1r1cK1B2 w - - 0 1",
      "id": "puzzle_2813",
      "title": "Mate in 3 moves"
    },
    {
      "description": "TANG Dan - ZHANG GuoFeng\nChinese National Champion 2011 ",
      "fen": "5a3/4a4/b3k4/p4R2p/4Nnp2/2P6/P3P3P/9/9/2B1Kr3 w - - 0 1",
      "id": "puzzle_2814",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG Yong - CHE XingGuo\n2011 Chongqing Chess Individual Qualifying 2011 ",
      "fen": "6C2/4ak3/4c4/6p1p/9/2Nn2n2/6r1P/N3B4/4A4/2BAK2R1 b - - 0 1",
      "id": "puzzle_2815",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG ShenHong - SU ShaoFeng\n2014 the 6 th Yang guanlin  Cup Open Group 2014 ",
      "fen": "3a1kb2/C1NPa4/4c4/4R3p/6b2/6B1P/5r3/2n6/3KA4/9 b - - 0 1",
      "id": "puzzle_2816",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5218\u536b\u56fd - \u8d75\u660c\u793c\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "3akRb2/1Rc3c2/4b1N2/p8/9/9/P3r3P/3C4B/1n2A4/3AKC1r1 b - - 0 1",
      "id": "puzzle_2817",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u9ec4\u5f6d\u6e05 - \u9648\u5fd7\u534e\n2014\u5e74\u5e7f\u4e1c\u4e1c\u839e\u51e4\u5c97\u9547\u8c61\u68cb\u8d5b\u516c\u5f00\u8d5b\u7b2c\u4e09\u5b63\u5ea6 2014 ",
      "fen": "4k4/1R2a1rc1/4P4/9/9/6B2/9/3A5/4K4/2BA5 w - - 0 1",
      "id": "puzzle_2818",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIA Gang - \u5434\u4ee3\u660e\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "2n3R2/3ka4/6N2/p3p3p/2r2Cp2/5n3/c1p1P3P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2819",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u738b\u7433 - \u9648\u78a7\u7231\n2014\u5e74\u798f\u5efa\u7701\u5168\u6c11\u5065\u8eab\u8fd0\u52a8\u4f1a\u201c\u7389\u6842\u676f\u201d\u8c61\u68cb\u8d5b\u5973\u5b50\u7ec4 2014 ",
      "fen": "5k3/4R4/4bN3/9/3r2b2/2N6/P8/4BA3/c3Ap3/3K2B2 w - - 0 1",
      "id": "puzzle_2820",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u6797\u8f89\u6587 - \u6797\u957f\u6c34\n2014\u5e74\u798f\u5efa\u7701\u5168\u6c11\u5065\u8eab\u8fd0\u52a8\u4f1a\u201c\u7389\u6842\u676f\u201d\u8c61\u68cb\u8d5b\u7537\u5b50\u7ec4 2014 ",
      "fen": "4kab2/4aN3/4b4/p6R1/9/9/P4R2P/4Bc3/2r1AK3/4r1B2 b - - 0 1",
      "id": "puzzle_2821",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f20\u6625\u71d5 - \u4efb\u4ef2\u654f\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "1R1ak4/8C/3ab4/9/4N2r1/4c1P2/6p2/4B4/3KA4/5AB2 w - - 0 1",
      "id": "puzzle_2822",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU YinChuan - WEI Qiang\n2014 China Xiangqi League 2014 ",
      "fen": "1C3k3/3Pc4/4b4/5NN2/6b2/2p4p1/1n2c4/4BA3/4A4/3K5 w - - 0 1",
      "id": "puzzle_2823",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u5f20\u6155\u9e3f - TAO Lei\n2014\u5e74\u6c5f\u82cf\u7701\u7b2c\u4e03\u5c4a\u8c61\u68cb\u68cb\u738b\u8d5b 2014 ",
      "fen": "2ba1k3/4a4/3c5/3C1N2p/9/9/P1npP4/B3K4/4A4/5AB2 b - - 0 1",
      "id": "puzzle_2824",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u8bb8\u660e - \u9ec4\u666f\u5cf0\n2014\u5e74\u6c5f\u82cf\u65e0\u9521\u5e02\u201c\u7389\u7941\u9152\u4e1a\u676f\u201d\u66a8\u7701\u8fd0\u52a8\u4f1a\u8c61\u68cb\u9009\u62d4\u8d5b 2014 ",
      "fen": "2ba1a3/c3k1R2/n8/P1p1p3p/9/2P4C1/4P3P/R3NA3/3r5/1crAK1B2 b - - 0 1",
      "id": "puzzle_2825",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU YinChuan - ZHENG YiHong\n2014 China Xiangqi League 2014 ",
      "fen": "3ak4/4a4/3n5/3N1R3/5C3/1rB6/9/9/9/1cBAKA3 w - - 0 1",
      "id": "puzzle_2826",
      "title": "Mate in 3 moves"
    },
    {
      "description": "HOU WenBo - \u7f57\u8fdb\u57ce\n2014\u5e74\u7b2c\u516d\u5c4a\u4e2d\u56fd\u5357\u5b81\u8c61\u68cb\u56fd\u9645\u9080\u8bf7\u8d5b\u516c\u5f00\u7ec4 2014 ",
      "fen": "3k5/c2na4/3PbN3/p8/3C2Nnp/9/P1p5P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_2827",
      "title": "Mate in 3 moves"
    },
    {
      "description": "\u4f55\u5f66\u6770 - NGUYEN Tran Do Ninh\n2014\u5e74\u7b2c\u516d\u5c4a\u4e2d\u56fd\u5357\u5b81\u8c61\u68cb\u56fd\u9645\u9080\u8bf7\u8d5b\u56fd\u9645\u7ec4 2014 ",
      "fen": "4kab2/4a4/4b4/p7p/1n1C5/3c4P/4p4/B1CA1A3/1Nn6/1c3K3 b - - 0 1",
      "id": "puzzle_2828",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHANG XueChao - \u8d75\u6bbf\u5b87\nChinese National Champion Man A Final 2014 ",
      "fen": "3a1k3/2CNa4/4P4/9/9/4pn3/7c1/4p3C/4An3/4K1B2 b - - 0 1",
      "id": "puzzle_2829",
      "title": "Mate in 3 moves"
    },
    {
      "description": "ZHAO XinXin - ZHENG Weitong\nChinese National Champion Man A Final 2014 ",
      "fen": "2b1k4/3R1R3/9/p7p/2b3P2/9/P7P/3Kr4/4A3c/2B2Ac2 w - - 0 1",
      "id": "puzzle_2830",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU GuoYi - \u5218\u5b50\u5065\n2014 China Xiangqi League 2014 ",
      "fen": "4kab2/4a4/4b4/p2Cp3p/6pN1/5R3/4P1P1P/3nr4/4A4/5K2R b - - 0 1",
      "id": "puzzle_2831",
      "title": "Mate in 3 moves"
    },
    {
      "description": "PAN ZhenBo - ZHUANG YuTing\n2014 China Xiangqi League 2014 ",
      "fen": "4R1b2/3k4C/2Pa5/9/2p3n2/9/1cP1P3P/9/9/2BrKA3 w - - 0 1",
      "id": "puzzle_2832",
      "title": "Mate in 3 moves"
    },
    {
      "description": "LA Chuong - JIANG Wei\nNorth America  Cup Xiangqi Championship  2014 ",
      "fen": "4ka3/4a4/4b4/p6rp/2b3p2/P1B5P/4p4/7R1/1cN1AK3/1R1A4r b - - 0 1",
      "id": "puzzle_2833",
      "title": "Mate in 3 moves"
    },
    {
      "description": "JI JiaQing - PENG Oscar \nNorth America  Cup Xiangqi Championship  2014 ",
      "fen": "2bakab2/9/4c1n2/p1p5p/5P3/5n3/P1P5P/C3BC2R/2R1A1r2/crBNKN3 b - - 0 1",
      "id": "puzzle_2834",
      "title": "Mate in 3 moves"
    },
    {
      "description": "FREYER Guido - STERNMAN Olavi\nWorld Xiangqi Championships 2015 ",
      "fen": "9/4NP3/3k1a3/9/9/6B2/9/9/4K4/3A1AB2 w - - 0 1",
      "id": "puzzle_2835",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SHOSHI Kazuharo - BREITSCHAEDEL Oliver\nWorld Xiangqi Championships 2015 ",
      "fen": "4ka3/4a4/1rn1N4/2R6/P1p6/9/9/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2836",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XU Wei Guo - HAIKOLA Petri\nWorld Xiangqi Championships 2015 ",
      "fen": "2ba4C/1C2a2R1/2nc1k3/p1p6/9/2P1p4/P3P3P/B1N6/4Ar3/4KAB2 w - - 0 1",
      "id": "puzzle_2837",
      "title": "Mate in 3 moves"
    },
    {
      "description": "XIE Jing - NGUYEN Marc Antoine\nWorld Xiangqi Championships 2015 ",
      "fen": "1n1ak1br1/3N5/4r2c1/p1R3p2/2b5p/9/P3c1P1P/4C1C2/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_2838",
      "title": "Mate in 3 moves"
    },
    {
      "description": "SIM Yip How - MATSUNO Yoichiro\nWorld Xiangqi Championships 2015 ",
      "fen": "2ba1kcR1/4a4/n1cNb4/5rR1p/6P2/4Cr3/4P3P/3CB4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2839",
      "title": "Mate in 3 moves"
    },
    {
      "description": "STERNMAN Olavi - XUE Zhong\nWorld Xiangqi Championships 2015 ",
      "fen": "3Nkab2/1R7/c3bP3/p3R4/2p1c1r1p/9/P1P5P/5n3/4K4/2BA1AB2 b - - 0 1",
      "id": "puzzle_2840",
      "title": "Mate in 3 moves"
    }
  ],
  [
    {
      "description": "FU GuangMing - YUNG Tak Keung\nBeijing,Hong Kong,Kaoshiung Match 1995 ",
      "fen": "2bak4/4a4/9/8p/2b1c1p2/2P1n4/3R5/3CB4/4A4/2BAKC2r b - - 0 1",
      "id": "puzzle_2841",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU DaHua - HUANG Yong\nChinese National Champion 1991 ",
      "fen": "2b1k2C1/3na2N1/5c3/p4P2p/9/3r5/P3R3P/8B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_2842",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SUNG Peter - SHOSHI Kazuharo\nWorld Xiangqi Championships 1997 ",
      "fen": "1Cba5/C4k3/4b1n1c/p6rp/2p3p2/3R5/8P/8B/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2843",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Ung Dau - Lv Qin\nWorld Xiangqi Championships 1997 ",
      "fen": "2b1ka3/9/4bN3/p7p/2P3p2/9/P3P3P/9/3RK1n2/3r1ABc1 b - - 0 1",
      "id": "puzzle_2844",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG BiHua - HO Wing Kit\nHong Kong Individual Championship 1996 ",
      "fen": "4k4/5N2C/5P3/p7p/9/8P/P8/2nrB4/5K3/3p2B2 b - - 0 1",
      "id": "puzzle_2845",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YE RongBiao - CHEN JianMing\nHong Kong Individual Championship 1996 ",
      "fen": "2rk1ab2/4a4/3cbNc2/9/p4P1np/4C4/P3N4/4B4/3R5/2BAKA3 w - - 0 1",
      "id": "puzzle_2846",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HO Wing Kit - ZHANG YongXiang\nHong Kong Individual Championship 1996 ",
      "fen": "3ak2C1/6R2/3nb1N1b/8p/p5P2/9/4c3P/N4A3/9/2r1K1B2 w - - 0 1",
      "id": "puzzle_2847",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI ZuoYing - LONG GuangMing\nHong Kong Individual Championship 1996 ",
      "fen": "CR1ak4/4a4/4b4/8p/6p2/2P1cR3/P1r1c1P1P/2n1B4/4AK3/2BA3r1 b - - 0 1",
      "id": "puzzle_2848",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI LaiQun - LIU DaHua\n5 Ram Cup Xiangqi Championship 1985 ",
      "fen": "4k4/1n1P5/4b4/p7p/4N1b2/4r4/P2R4P/4B4/4An3/2B1KA3 w - - 0 1",
      "id": "puzzle_2849",
      "title": "Mate in 4 moves"
    },
    {
      "description": "MA ZhongWei - LIN YiShi\n ",
      "fen": "1R1a2R2/4ak3/4P4/9/9/9/5r3/4B4/4C4/2B1K4 w - - 0 1",
      "id": "puzzle_2850",
      "title": "Mate in 4 moves"
    },
    {
      "description": "MOU HaiQin - DANG Thanh Trung\n ",
      "fen": "2b4R1/4k3C/3a1aC2/2p1p3p/pn3r3/6B2/9/4N3B/4A4/3AK3c w - - 0 1",
      "id": "puzzle_2851",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIN JianZhi - DAO Cao Khoa\n ",
      "fen": "2ck1ab2/4aR3/2r1b1c2/pN2C1p2/4C1r1p/4P4/P5n2/4B4/4A4/1R2KAB2 w - - 0 1",
      "id": "puzzle_2852",
      "title": "Mate in 4 moves"
    },
    {
      "description": "DING JianQuan - MOU HaiQin\n ",
      "fen": "2b2a1C1/3kR4/2c1b4/4p3p/2p6/6P2/4P1n1P/3C1K3/4A1r2/3A5 b - - 0 1",
      "id": "puzzle_2853",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NGUYEN Huu Phuc - CHEN LuoPing\n ",
      "fen": "3a1k3/4a4/6R2/p7p/3P5/9/P4r2P/4K4/6cRc/2BA1A3 w - - 0 1",
      "id": "puzzle_2854",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XU JianMiao - HU RongHua\nChinese National Champion 1988 ",
      "fen": "2bak1R2/4a4/3c5/p7p/9/2P6/PR2P3P/9/2rp5/4KNB2 b - - 0 1",
      "id": "puzzle_2855",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XU TianLi - HU RongHua\nKun Hua Cup  1984 ",
      "fen": "1C1a5/4ak3/b3P3n/p3N4/6p2/P7P/7n1/4BA1N1/2c4c1/2BAK4 w - - 0 1",
      "id": "puzzle_2856",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU YouHua - HU RongHua\nChina Team Championship 1992 ",
      "fen": "2b2k3/4a4/5a2b/p8/6N2/6B1p/P4R2c/2r2C3/9/3AKAB1c w - - 0 1",
      "id": "puzzle_2857",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO QingGe - LI LaiQun\nChina Team Championship 1986 ",
      "fen": "4k4/1c1Pa4/9/3N5/9/9/9/4BKn2/4A4/6B2 w - - 0 1",
      "id": "puzzle_2858",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YANG YongMing - XIE ZhouMiao\nChinese National Champion 2000 ",
      "fen": "4k1b2/4a4/4b4/1r6p/4N4/2PN5/P3P3P/1c2B3B/1R3p3/3AK2c1 b - - 0 1",
      "id": "puzzle_2859",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Lv Qin - XU TianHong\nChina Team Championship 2000 ",
      "fen": "3rkab2/4aR3/4b4/9/p8/7nr/P1C6/N4A3/9/1R3K3 b - - 0 1",
      "id": "puzzle_2860",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XU XianLiang - LI LaiQun\nChina Team Championship 1978 ",
      "fen": "rc1aR4/5k3/4b4/2p1N3p/9/P1B1C4/9/3A4B/9/3AK4 w - - 0 1",
      "id": "puzzle_2861",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG JiaLiang - JIANG QuanSheng\nChina Team Championship 1987 ",
      "fen": "3ack3/5P3/3P5/9/3r5/6B2/1p7/B4A1R1/4p4/5K3 b - - 0 1",
      "id": "puzzle_2862",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHONG Heung Ming - SHOSHI Kazuharo\nAsian Xiangqi Individual Championships 1999 ",
      "fen": "2C4R1/3ka4/4b4/1C6p/rnp1p1p2/5R2P/2P3n2/4B4/9/2BAKA2r w - - 0 1",
      "id": "puzzle_2863",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI KangWah - LAI Robin\nHong Kong Team Champion 2000 ",
      "fen": "4kabC1/3Pa4/4b4/2r2R3/8p/3n5/8P/9/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_2864",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HE GuoPing - CHAN Tat Tai\nHong Kong Team Champion 2000 ",
      "fen": "2b1ka3/C2R5/9/p1P2N2p/9/9/P7P/2c1B4/2r1A4/3A1Kp2 w - - 0 1",
      "id": "puzzle_2865",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WONG Steve - LEE Paul\nCanadian National Champion 2000 ",
      "fen": "2b1ka3/4a4/2n3R1c/prp1p3p/9/2PN5/P3c3P/4BCN2/4A2r1/3AK1R2 b - - 0 1",
      "id": "puzzle_2866",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG XiangMing - CHEN BoRen\nICCS IT 2000 ",
      "fen": "5k3/4P2R1/9/p7p/9/P7P/9/4r4/5p3/2B1KA3 w - - 0 1",
      "id": "puzzle_2867",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU YongLiang - LAU Mui Ping\nICCS IT 2000 ",
      "fen": "2ba1a3/1C3k3/n3b1n2/p2Np1p1p/2p6/6P2/cR6P/4B4/4A4/r3KAB2 w - - 0 1",
      "id": "puzzle_2868",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZENG YiQian - CHAN Stephen\nICCS IT 2000 ",
      "fen": "4k1n2/3PaP1N1/4b4/9/6b2/9/9/B8/4K4/3A1A3 w - - 0 1",
      "id": "puzzle_2869",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YAO Jie Lai - CHENG Richard\nICCS IT 2000 ",
      "fen": "2bak4/3RR4/n8/N1p1p3p/9/P1P6/9/4B4/3c3r1/1rCK1CB1c b - - 0 1",
      "id": "puzzle_2870",
      "title": "Mate in 4 moves"
    },
    {
      "description": "FENG Jao - ZHANG Hong\nChina Team Championship 2001 ",
      "fen": "3Rkab2/7c1/4b3n/8p/2p6/C1P4R1/P3P1P1P/2N1B4/4Ncn2/2BAKA3 b - - 0 1",
      "id": "puzzle_2871",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU JunLi - MA Lin\nChinese National Champion 2001 ",
      "fen": "2bak1b2/r3R4/6n2/p5N1p/9/6P2/P5c2/4r4/2C1A4/1R2KA3 b - - 0 1",
      "id": "puzzle_2872",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YANG GuanLin - LI YiTing\nChinese National Champion 1962 ",
      "fen": "5a3/4a4/4k4/6R2/4N4/9/4r4/4B3B/4A4/4KA3 w - - 0 1",
      "id": "puzzle_2873",
      "title": "Mate in 4 moves"
    },
    {
      "description": "REINDERS Rudolf - BAKRA Anuar Bin\nWorld Xiangqi Championships 2001 ",
      "fen": "2baka3/9/4b4/p7p/2R1c4/2P6/P7P/2C1CN3/3rA4/2B1KA1r1 b - - 0 1",
      "id": "puzzle_2874",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG WangHou - CHOI I Kei\nWorld Xiangqi Championships 2001 ",
      "fen": "C1baRkn2/9/9/9/9/P8/9/9/3p1r3/4K1B2 b - - 0 1",
      "id": "puzzle_2875",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LUO XiaoTao - WANG XinLi\nChina Team Championship 1996 ",
      "fen": "3ak4/4a4/4c4/6R1p/9/2P1C1P2/4Pr2P/N3B1r2/4A4/3AK2R1 w - - 0 1",
      "id": "puzzle_2876",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HOU LongDeng - YUAN HongLiang\nChina Team Championship 1996 ",
      "fen": "3a1k3/4a4/b8/6N2/4P4/9/2n1p4/3K5/4A2Cc/2p2AB2 b - - 0 1",
      "id": "puzzle_2877",
      "title": "Mate in 4 moves"
    },
    {
      "description": "QUO HaiJun - BAO YunLong\nChina Team Championship 1996 ",
      "fen": "4ka3/1r2a4/4b3b/p2NCr2p/6p1c/4n4/P1P6/6C2/1R7/2BAKAB2 w - - 0 1",
      "id": "puzzle_2878",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG Bin - LIAO ErPing\nJiutian Xiangqi Master Championships 2001 ",
      "fen": "2n2a3/1R2a4/3kCc1C1/p1P5p/9/9/P3n1R1P/9/5K3/2Br2B2 w - - 0 1",
      "id": "puzzle_2879",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CUI Jinbo - YAO weiMin\nChina Team Championship 1997 ",
      "fen": "1rb1ka1r1/n8/3a5/p1p5p/3N2p2/2P6/P5PcP/B1N1C4/7R1/3AKAB2 w - - 0 1",
      "id": "puzzle_2880",
      "title": "Mate in 4 moves"
    },
    {
      "description": "QIN JinSong - HOU ZhaoZhong\nChina Team Championship 1997 ",
      "fen": "2CRkab2/4a4/4c4/p7p/2R1p4/2N1c4/P4r2P/4B1n2/4C4/3AKAB2 b - - 0 1",
      "id": "puzzle_2881",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI YiTing - GAO Qi\nExhibition 1957 ",
      "fen": "4kab2/3Ra4/2n6/p6Np/2p1p1b2/5r3/P1P5c/4C1p1B/4C4/2BAKA3 w - - 0 1",
      "id": "puzzle_2882",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HU RongHua - YANG GuanLin\nNational Games 1975 ",
      "fen": "1R3a1c1/r2ka4/2P1N4/8p/p8/9/9/8B/9/4K4 w - - 0 1",
      "id": "puzzle_2883",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO GuoRong - LIU DianZhong\nChina Team Championship 1982 ",
      "fen": "2bak4/4a4/4b4/7N1/1PP6/2CcPn3/6r2/4B1p2/8R/2BAKA3 w - - 0 1",
      "id": "puzzle_2884",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG JiaLiang - HU RongHua\nChinese National Champion 1974 ",
      "fen": "3a5/4k4/9/pc2C3p/9/4R4/P3P4/1C7/9/2BAKAr1c w - - 0 1",
      "id": "puzzle_2885",
      "title": "Mate in 4 moves"
    },
    {
      "description": "FU ChunLing - WANG XiangMing\n ",
      "fen": "2N1k4/4a4/4P4/5c1C1/p5p2/9/4P1c1P/4B4/5K3/3A1A3 w - - 0 1",
      "id": "puzzle_2886",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU Zheng - DU Yu\n ",
      "fen": "3ak4/4a4/c3b4/4R1R1p/6b2/2p6/4P3P/2N1B3r/C4r3/2BcKN3 b - - 0 1",
      "id": "puzzle_2887",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHIN Kok Liang - JI ZhongQi\n ",
      "fen": "3c1k3/4a4/8N/5r2p/9/2PR2B2/P7P/2Nn5/4K4/3A5 b - - 0 1",
      "id": "puzzle_2888",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN XiaoPing - CHANG Wanhua\nChinese National sports 2002 ",
      "fen": "2b1kaRCC/4a4/4cc3/p1p3p2/9/2Pn5/P1r2p3/R1N2A3/9/4KABr1 b - - 0 1",
      "id": "puzzle_2889",
      "title": "Mate in 4 moves"
    },
    {
      "description": "GUO FuRen - Lv Qin\nChina Team Championship 2002 ",
      "fen": "2b2a3/1Rck5/4NR3/4n3p/2b6/9/4P3P/3p5/2c2K3/3r5 w - - 0 1",
      "id": "puzzle_2890",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI ShuYing - OUYANG ChanJuan\nChina Team Championship 2002 ",
      "fen": "4R1br1/3R5/5k3/p7p/2p3p2/9/6P1P/1C2r4/9/2BAKABc1 w - - 0 1",
      "id": "puzzle_2891",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHOU ChangLin - ZHANG Hui\nChina Team Championship 2002 ",
      "fen": "2b1k4/3R3R1/4b4/p8/6p2/6P1P/3nP4/4B4/2n1A4/3K1rB2 w - - 0 1",
      "id": "puzzle_2892",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG GuoFeng - ZHAO GuanFang\nChina Team Championship 2002 ",
      "fen": "2ba1ab2/4k4/9/p3p4/2N5p/6B2/P2N5/1R2K4/5r2c/3A1n3 b - - 0 1",
      "id": "puzzle_2893",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG Lin - WANG WenLin\nChina Team Championship 2002 ",
      "fen": "3ak1b2/4a4/4br3/N7R/6P2/P8/r8/2R1B4/4A1n2/3K1AB2 b - - 0 1",
      "id": "puzzle_2894",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHENG XinNian - HUANG ZhiHui\nChina Team Championship 1984 ",
      "fen": "5a3/5k3/2n1Rc1r1/p4R2C/5Cp2/9/P3P3P/6Nc1/2n1A4/2rAK4 w - - 0 1",
      "id": "puzzle_2895",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YAN YuSuo - CHEN MingSheng\nChina Team Championship 2002 ",
      "fen": "3k5/1C2P4/3Nb2c1/9/p1b6/4Cn3/P5p2/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2896",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HONG LeiXin - YAN YuSuo\nChina Team Championship 1984 ",
      "fen": "2bak4/4a4/4b4/pRR2C2p/4c4/2P6/P7P/5A3/9/3nK1Br1 b - - 0 1",
      "id": "puzzle_2897",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HUANG YouYi - KE YongQing\nChina Team Championship 1984 ",
      "fen": "3k5/4a4/4P4/p3p3p/9/9/4C3P/6r2/3CA4/4KA3 w - - 0 1",
      "id": "puzzle_2898",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG JinGang - HE LianSheng\nChina Team Championship 1984 ",
      "fen": "5ab2/RN1rk4/6n2/8p/9/4p4/P3c1r1P/4B4/4A4/1RBA1K3 b - - 0 1",
      "id": "puzzle_2899",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG YuCai - LI JiaHua\nChina Team Championship 1984 ",
      "fen": "1r2ka3/2R1aP3/8b/9/9/9/9/B2KBA3/9/3c1C3 w - - 0 1",
      "id": "puzzle_2900",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZANG RuYi - LIANG WenBin\nChina Team Championship 1986 ",
      "fen": "3a2b2/4k4/b2a5/5P3/3NC3p/9/4P3P/1c1nB1N2/c4K3/5AB2 w - - 0 1",
      "id": "puzzle_2901",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BU FengBo - DENG SongHong\nChinese National Champion 1990 ",
      "fen": "5CCR1/2R1ac3/3k5/4p4/2c3p2/9/P3P3P/2r6/3rA4/2BAK4 w - - 0 1",
      "id": "puzzle_2902",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HUANG YuYing - XU YunZhi\nChinese National Champion 1990 ",
      "fen": "2ck1ab2/r8/3a2n2/p2N4p/2p1R4/9/P1P5P/3C4B/9/2BAKA3 w - - 0 1",
      "id": "puzzle_2903",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI ZhiPing - TANG ZhuoGuang\nChinese National Champion 1990 ",
      "fen": "3k1Cb2/4R1N2/9/9/9/4pp3/9/3AB4/2n5r/4KAB2 w - - 0 1",
      "id": "puzzle_2904",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU ZhongLai - GUO FuRen\nChinese National Champion 1990 ",
      "fen": "3akab2/9/9/p7p/r8/9/8P/8B/1R2A1r2/3K2R2 b - - 0 1",
      "id": "puzzle_2905",
      "title": "Mate in 4 moves"
    },
    {
      "description": "GAN XiaoJin - Zhou Qun\nChinese National Champion 1990 ",
      "fen": "1CPa2b2/4ak3/4P1P2/9/4c4/9/5p3/3AB4/9/2BAK4 w - - 0 1",
      "id": "puzzle_2906",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HONG Zhi - LIN HongMin\nChinese National Champion 1997 ",
      "fen": "2baka3/9/3R5/9/9/9/8P/4r4/5K1R1/3r5 b - - 0 1",
      "id": "puzzle_2907",
      "title": "Mate in 4 moves"
    },
    {
      "description": "FU GuangMing - JING XueYi\nChinese National Champion 1997 ",
      "fen": "1cbak2r1/3R2R2/4C4/4pr2p/1np6/9/2P2c2P/N4C3/4A4/2B1KnB2 w - - 0 1",
      "id": "puzzle_2908",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI YueJun - MA WenQing\nChina Team Championship 1991 ",
      "fen": "9/4P4/5k3/4R4/p7p/6P2/5r3/4BA3/8r/3AKCB2 w - - 0 1",
      "id": "puzzle_2909",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU YouHua - ZHOU ChangLin\nChina Team Championship 1991 ",
      "fen": "2ba1kb2/4a1N2/2n6/p3C3p/2P6/2r2N3/P3c3P/Cr3R3/9/3A1K3 w - - 0 1",
      "id": "puzzle_2910",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG Dong - WANG GuiHu\nChina Team Championship 1991 ",
      "fen": "4kab2/4a4/4C4/p7p/2p6/4R4/P6RP/3K5/1r7/2r2A3 b - - 0 1",
      "id": "puzzle_2911",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIAO ErPing - CHEN HanHua\nChina Team Championship 1992 ",
      "fen": "CrN1kab2/2R6/3ab4/2p5p/9/2P6/P3P3P/5C3/4A4/2BAKRr1c w - - 0 1",
      "id": "puzzle_2912",
      "title": "Mate in 4 moves"
    },
    {
      "description": "GAO MingHai - JIANG ZhiLiang\nChina Team Championship 1992 ",
      "fen": "2bkP4/3caR3/4b4/p8/9/P3p4/8P/1p1R5/4r1r2/5K3 b - - 0 1",
      "id": "puzzle_2913",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SHANG Wei - WANG CongXiang\nChina Team Championship 1992 ",
      "fen": "C1cak1br1/1R2a4/4b4/2p1C3p/6p2/4P2c1/P4R2P/9/4A4/2r1KAB2 w - - 0 1",
      "id": "puzzle_2914",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU Chun - WANG SuiWang\nChina Team Championship 1993 ",
      "fen": "2bk5/3cP4/2PNb4/9/9/2Bc5/3C3p1/5A2B/9/4KA3 w - - 0 1",
      "id": "puzzle_2915",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHE XingGuo - HU QingYang\nChina Team Championship 1993 ",
      "fen": "R2a1k1r1/9/3r1a3/4C3p/2pNp4/1Nc3R2/P4p2P/9/4K4/9 w - - 0 1",
      "id": "puzzle_2916",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YAN WenQing - WAN ChunLin\nChina Team Championship 1993 ",
      "fen": "3k1ab1C/9/5R3/p8/9/4P1N2/P1p4r1/3ABK3/4A4/7cc w - - 0 1",
      "id": "puzzle_2917",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI WangXiang - WAN ChunLin\nChina Team Championship 1993 ",
      "fen": "2bk1a3/1RP6/3N5/8p/p1b3p2/4P4/P1n5P/9/4A4/2BAKr3 w - - 0 1",
      "id": "puzzle_2918",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG GuangZeng - CHEN HanFeng\nChina Team Championship 1993 ",
      "fen": "1R1ak1N2/7C1/9/4p1p1p/9/6P1P/P3P4/9/4rK3/2B4cc w - - 0 1",
      "id": "puzzle_2919",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI QiJie - HOU ZhaoZhong\nChinese National Champion 1994 ",
      "fen": "2b1kan2/1C1R5/2r1b4/2p1p3p/p5p2/6P2/1RP1n1r1P/6N2/4A4/2BK1AB2 w - - 0 1",
      "id": "puzzle_2920",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI Lin - XIAO GeLian\nChina Team Championship 1995 ",
      "fen": "3ak1b2/4a4/6N2/p1R3p1p/9/2P3P2/Pr2P3P/c1N1C4/3KA4/2c2AB2 b - - 0 1",
      "id": "puzzle_2921",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BU FengBo - CHEN XiaoKun\nChinese National Champion 1986 ",
      "fen": "5a3/5nN2/bP2k4/2R1nN3/1Pb6/6B2/5p3/5A3/4A4/r1B1K4 w - - 0 1",
      "id": "puzzle_2922",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG XiaoPing - HUANG ShiQing\nChina Team Championship 1998 ",
      "fen": "2ba1k3/4a4/4b4/pN2P1R1p/3N1P3/6R2/P2n1r2P/4B4/4Ac3/4K1Br1 w - - 0 1",
      "id": "puzzle_2923",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG Bin - ZHANG PeiJun\nChina Team Championship 1998 ",
      "fen": "3ak1n2/4a4/2n1bcN1b/p3C2C1/5R3/P3p3P/3rP4/N3B4/c3A4/2BAK4 w - - 0 1",
      "id": "puzzle_2924",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU JunLi - WU Xia\nChina Team Championship 1999 ",
      "fen": "1CbR1k3/4a4/2N1b4/4p3p/2P6/9/P4r3/4B1n1B/4A4/3AK3c b - - 0 1",
      "id": "puzzle_2925",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN JianChang - XIE ZhouMiao\nChina Team Championship 1999 ",
      "fen": "4ka3/2Nra4/4b4/p3C3p/9/9/8P/CR3r3/6p2/5K3 w - - 0 1",
      "id": "puzzle_2926",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG XiaoXia - HU XiaoFrang\nChina Team Championship 1999 ",
      "fen": "3a5/4c4/4bk3/2P2cN2/9/9/7C1/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2927",
      "title": "Mate in 4 moves"
    },
    {
      "description": "OUYANG ChanJuan - LIU Jing\nChina Team Championship 1999 ",
      "fen": "2ca5/3k5/3aP4/4C1N1p/2b6/8c/4n4/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2928",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SONG GuoQiang - KE YongQing\nXiaolin motor car cup 1999 ",
      "fen": "3a1k3/4a1c2/3NR4/8p/3c1P3/P1B6/7CP/9/5p3/1r1AKAB2 w - - 0 1",
      "id": "puzzle_2929",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YAN MuJiang - LIANG WenBin\nChinese National Champion 1987 ",
      "fen": "C4a3/3k5/4b4/p8/9/4r4/P5r1P/1R7/4A4/3A1K1R1 w - - 0 1",
      "id": "puzzle_2930",
      "title": "Mate in 4 moves"
    },
    {
      "description": "GAN XiaoJin - TONG BenPing\nChina Team Championship 1988 ",
      "fen": "3ak4/4a4/4b4/1P1P5/9/r1R6/8p/2Nn5/9/3A1KB2 b - - 0 1",
      "id": "puzzle_2931",
      "title": "Mate in 4 moves"
    },
    {
      "description": "JIANG ZhiLiang - ZHENG RongSheng\nChinese National Champion 1978 ",
      "fen": "3a1ab2/4k4/9/p7p/1R3Nb2/3p5/P1r1C3P/3nB4/5K3/2BA1A3 w - - 0 1",
      "id": "puzzle_2932",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XU XianLiang - DING XiaoFeng\nChina Team Championship 1978 ",
      "fen": "C3kab2/1C3c2R/4ba3/N3p4/9/2P6/3nP4/3K5/6r2/5A2c b - - 0 1",
      "id": "puzzle_2933",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HU RongHua - Lv Qin\nChina Team Championship 1996 ",
      "fen": "5ab2/4k1N2/2Nc3c1/3C4p/2b1C2n1/2B3p2/4P3P/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2934",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SONG GuoQiang - YANG KeXiong\nChinese National Champion 1996 ",
      "fen": "2r1k1br1/9/5R3/p1p2c2p/3R5/2P6/P3P1p1P/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2935",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BU FengBo - TAO HanMing\nHua Ya Fang Shui Cup GM CM Champion 2001 ",
      "fen": "1n2ka3/4a4/3PN3b/p5C1p/9/c3C3n/3p5/4B4/4K4/2BA1A3 w - - 0 1",
      "id": "puzzle_2936",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YAN WenQing - WAN FuChu\nChinese National Champion 1986 ",
      "fen": "3akab2/3P5/3r4b/8N/8p/5n3/2p1R3P/4B4/4p4/2B2K3 b - - 0 1",
      "id": "puzzle_2937",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIN JiaLong - ZHUANG WeiJi\nHong Kong Team Champion 2001 ",
      "fen": "3k1ab2/4a4/b3c1P2/p3CR3/8P/9/P3p4/4B4/3rAC1r1/2B1K4 b - - 0 1",
      "id": "puzzle_2938",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HU ZhiWen - HUANG XueQian\nHong Kong Team Champion 2001 ",
      "fen": "3ak1b2/4a4/7r1/1PN1p3p/2b1c4/3Rc4/2p5P/3K5/9/3A2B2 b - - 0 1",
      "id": "puzzle_2939",
      "title": "Mate in 4 moves"
    },
    {
      "description": "MAI WenJu - HONG HaiFeng\nHong Kong Team Champion 2001 ",
      "fen": "1nb1ka3/3ca4/4c3b/p1R5p/3N5/4C1P2/P3Pr2P/6C2/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_2940",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LONG GuangMing - ZHANG BiHua\nHong Kong Team Champion 2001 ",
      "fen": "2b1ka3/4a4/4c4/p1p5p/6p2/2Pn1n3/r8/3A5/9/2R1KR3 b - - 0 1",
      "id": "puzzle_2941",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CAI GuanHeng - ZHANG JiaHui\nHong Kong Team Champion 2001 ",
      "fen": "4k1b2/C2R5/5R2n/6c2/5rp1p/9/P3P1r1P/2N1B1N2/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_2942",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LU HongYe - CAI YongGuan\nHong Kong Team Champion 2001 ",
      "fen": "R2ak1b2/9/2N1b4/9/3R4p/9/3nP3P/3A5/2c3p2/1cB1K4 w - - 0 1",
      "id": "puzzle_2943",
      "title": "Mate in 4 moves"
    },
    {
      "description": "KOH Sin - XU XiRong\nSingapore Team Championship 2002 ",
      "fen": "5aC2/3k2R2/3a5/p7p/9/9/P3P3P/3AK2c1/r8/3A4c b - - 0 1",
      "id": "puzzle_2944",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WEN Chong Shang - CHONG Heung Ming\nAsian Xiangqi Individual Championships 2001 ",
      "fen": "6b2/2Rk1C3/4ban2/p3pR2p/2p3P2/9/P1P5P/4B4/2r1r4/c4K3 b - - 0 1",
      "id": "puzzle_2945",
      "title": "Mate in 4 moves"
    },
    {
      "description": "TANG ZhuoGuang - JIANG Chuan\nChinese National Champion 2002 ",
      "fen": "4k4/9/9/4P4/6R2/2r6/4p2c1/4C4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_2946",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHENG NaiDong - BU FengBo\nChinese National Champion 2002 ",
      "fen": "2ba2C2/4k4/4ba3/5N3/4P4/2P6/9/1N1A5/2p1A1nc1/1c3K3 b - - 0 1",
      "id": "puzzle_2947",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HU QingYang - ZHANG Jiang\nChinese National Champion 2002 ",
      "fen": "2baka3/9/2r1b4/5R2p/9/2B6/P5P2/c4K2N/1c2A1C2/3n2B2 b - - 0 1",
      "id": "puzzle_2948",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHENG YiHong - JIANG Chuan\nYinli Cup Champion 2003 ",
      "fen": "2b2kb2/4a4/2n2C3/p7p/2p1C4/4p4/P5r1P/2N6/4AR1c1/2B1KAB2 w - - 0 1",
      "id": "puzzle_2949",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SIM Eng Choon - LUM Tek Sim\nAsian xiangqi Championship 2002 ",
      "fen": "2rckab1C/9/1Rc1bR3/p4N3/4P4/9/P5P1P/9/4r4/2BAK1B2 w - - 0 1",
      "id": "puzzle_2950",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YAO HaiJing - NGO Lan Huong\nAsian xiangqi Championship 2002 ",
      "fen": "2ba1k3/4a4/9/9/2p3b2/5RB2/9/8B/3pAr3/4K4 b - - 0 1",
      "id": "puzzle_2951",
      "title": "Mate in 4 moves"
    },
    {
      "description": "QUACH Anh Tu - WONG Hok Him\nAsian xiangqi Championship 2002 ",
      "fen": "3akab2/9/4b4/4p3p/9/5NP2/2n1P3P/2CKN4/cr5C1/3A1AB2 b - - 0 1",
      "id": "puzzle_2952",
      "title": "Mate in 4 moves"
    },
    {
      "description": "EDIANTO P. - TAGUCHI F.\nAsian xiangqi Championship 2002 ",
      "fen": "2R2ab2/3ka4/9/8p/2n6/1NB3P1P/2c1P4/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2953",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI LaiQun - DENG SongHong\nChinese National Champion 1976 ",
      "fen": "3k5/9/9/8r/2b1R1P2/2B2c3/3C5/4C4/1n2AK3/2BA5 w - - 0 1",
      "id": "puzzle_2954",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG JiaLiang - JIANG ZhiLiang\nChinese National Champion 1976 ",
      "fen": "3aka3/2Rc5/4b4/p8/9/9/7n1/4K4/3r5/4R4 b - - 0 1",
      "id": "puzzle_2955",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN Guang - TSE Richard\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "1Cbak4/5P3/8n/9/4p1b2/9/9/6R2/9/1r1AKA3 w - - 0 1",
      "id": "puzzle_2956",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XIE Jing - SHAO YunLong\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "2bP1kb2/4ac3/5N3/4P4/5C3/4n4/9/4BA3/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_2957",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WOOD peter - HE ZhiMing\nWorld Xiangqi Championships 2003 ",
      "fen": "3rka3/2P1a4/9/p1R5p/3cR4/9/P4p2P/4B4/2nrA4/4KAB2 b - - 0 1",
      "id": "puzzle_2958",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XIE ZhouMiao - YU Bing\nChina National Xiangqi League 2003 ",
      "fen": "1Ccak1b2/3RN4/4b4/4C4/4r1p2/9/1p2P3P/4c4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_2959",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG Jiang - JIANG FengShan\nChina National Xiangqi League 2003 ",
      "fen": "4ka3/3C4c/4ba3/4p4/2b6/4P4/1r7/N1n2A3/5p3/R2AK4 b - - 0 1",
      "id": "puzzle_2960",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO XinXin - LI JiaHua\nChinese National Champion 2003 ",
      "fen": "3k1ab2/4a4/4b4/p1R1C4/4p4/P1B1P4/5R2P/5KN2/1cN1A1r2/3r5 b - - 0 1",
      "id": "puzzle_2961",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HUANG Fang - MEI Lin\nChinese National Champion 2003 ",
      "fen": "C2a2b2/4ak3/4R3n/2C1N3p/2p1r4/7r1/P1P1P3P/2N3p2/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_2962",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO Dong - HE Jing\nChinese National Champion 2003 ",
      "fen": "3a1k3/2r1a4/5N2R/8p/3R1P3/4p4/P4r3/2c6/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_2963",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XU JianMiao - HU QingYang\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "3a1ab2/2Nk4n/4b4/p3p1P1p/9/3p5/P6RP/BC3A3/1r7/1c2KAB2 w - - 0 1",
      "id": "puzzle_2964",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NEI TieWen - JIANG Chuan\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "3ak4/4a4/3c5/p2N4p/4R4/6P2/2C1cCn1P/B1r6/4A4/4KA3 w - - 0 1",
      "id": "puzzle_2965",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SUN YongZheng - XIE Jing\nPan An Wei Ye Cup National Xiangqi Masters Champion 2003 ",
      "fen": "4kabr1/4a4/4b4/p1p1R3p/4C4/PCP1P1N2/7rP/5R3/4N4/2BAKAp1c b - - 0 1",
      "id": "puzzle_2966",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LING ZhiChun - ZHAO Jian\nGuan Nan Tang Gou Cup Xiangqi Championships 2004 ",
      "fen": "2bk1ab2/4a4/9/p7C/9/P2R2P2/1c6P/3ABC3/2r6/c3KAB2 b - - 0 1",
      "id": "puzzle_2967",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Lv Qin - WANG Bin\nGuan Nan Tang Gou Cup Xiangqi Championships 2004 ",
      "fen": "1R3ab2/2n1k4/4c4/p8/2N2Nb1p/P8/9/9/3r5/2BAKAB2 w - - 0 1",
      "id": "puzzle_2968",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI Xian - ZHENG ChuFang\nChina Team Championship 2003 ",
      "fen": "3k1abn1/1R7/b2ac4/p3C1p1p/1N2pN3/r5P2/3n4P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2969",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CUI Yan - ZHANG ZhiGuo\nChina Team Championship 2003 ",
      "fen": "1R3ab2/3k5/2Pa5/3P5/9/9/9/2rC5/5K1n1/9 w - - 0 1",
      "id": "puzzle_2970",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI ShouQian - LO DaoMing\nChina Team Championship 2003 ",
      "fen": "1R3a3/3k5/5a3/p2N5/4p4/2P6/4P4/1n7/4AK3/c7r b - - 0 1",
      "id": "puzzle_2971",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU YouHua - YAN Dot San\nWorld Xiangqi Championships 2003 ",
      "fen": "5a3/3ka4/2N1b2c1/4P4/8p/9/3C5/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2972",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XIE YeJian - ZHENG YiHong\nChina Team Championship 2004 ",
      "fen": "2b2ab2/3ka4/2Nc5/p7p/9/3R4P/P7r/3C5/4AK3/9 w - - 0 1",
      "id": "puzzle_2973",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN XingLin - GUO RuiXia\nChina Team Championship 2004 ",
      "fen": "2bakab2/9/4R1n2/p1p1p3p/6p2/2P6/P2CP1c1P/C1N1B2r1/4Ar3/2BAK4 b - - 0 1",
      "id": "puzzle_2974",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIN YaoSen - JIRAPARKDEEPAN Vithaya\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "3N3R1/4k4/4b4/9/1Nb6/9/5p2P/3A5/5c3/1r1AK4 w - - 0 1",
      "id": "puzzle_2975",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HUANG YaoJue - LIN XiuQin\nChina Team Championship 1990 ",
      "fen": "4kab2/4a4/4b4/9/4c4/4C4/9/3NBn3/4A4/2BA1KR1r b - - 0 1",
      "id": "puzzle_2976",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU HongMu - ZOU LiMu\nChinese National Champion 1981 ",
      "fen": "3k5/2R1R4/3C2P2/p7p/9/9/Pn5cP/N3B3B/4A4/3K2r2 w - - 0 1",
      "id": "puzzle_2977",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Lv Qin - HU YuanMao\nChinese National Champion 1981 ",
      "fen": "n2ak1b2/C3a4/2P1b4/1N3R3/8p/2B6/1c4p2/3A5/4AK3/2r6 w - - 0 1",
      "id": "puzzle_2978",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN ShuLan - LIN Ye\nChinese National Champion 1981 ",
      "fen": "2ra5/3c1k3/5a3/p3P4/4R4/9/P7P/3A2C2/4K2c1/5A3 w - - 0 1",
      "id": "puzzle_2979",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU DianZhong - SHANG Wei\nChina Team Championship 1990 ",
      "fen": "4k1b2/3Pa4/4b4/7N1/9/2B6/2n2p3/5n3/3Cp4/5K3 b - - 0 1",
      "id": "puzzle_2980",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HOU PingAn - LIAO ErPing\nChina Team Championship 1990 ",
      "fen": "3k1ab1N/3ca4/4b4/4p3p/7R1/3CP3P/9/3A2n2/6r2/3A1K3 b - - 0 1",
      "id": "puzzle_2981",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHIENG Ming Chuo - GAO YiPing\nAsian xiangqi Championship 2004 ",
      "fen": "2b1ka3/4ac3/4b4/6p1p/2P1P4/3R5/P4N2P/2C2n3/2n1A1r2/2BA1K3 b - - 0 1",
      "id": "puzzle_2982",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XIE Jing - YUNG Tak Keung\nAsian xiangqi Championship 2004 ",
      "fen": "3ak1b2/3Ra4/4b4/C1p1p3p/1R4p2/2P6/P7P/6r2/4r4/2BAKAB2 w - - 0 1",
      "id": "puzzle_2983",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN LiFeng \r\n - YAN Andrew\nAsian xiangqi Championship 2004 ",
      "fen": "4kab2/4a4/Nr2b4/p4RC2/6p2/2P1P4/P3c4/B2R5/8r/3AKnB2 b - - 0 1",
      "id": "puzzle_2984",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HU RongHua - LI Qun\nChina National Xiangqi League 2004 ",
      "fen": "N2ak4/C3a1c2/3n2N2/9/8p/6n2/9/2C1p4/4A4/4KABc1 b - - 0 1",
      "id": "puzzle_2985",
      "title": "Mate in 4 moves"
    },
    {
      "description": "QUAN DeLi - JIN Bo\nChina National Xiangqi League 2004 ",
      "fen": "4R4/3r1k3/6P2/p8/9/9/4c4/3A1A3/4K4/9 w - - 0 1",
      "id": "puzzle_2986",
      "title": "Mate in 4 moves"
    },
    {
      "description": "QIU Dong - JIANG FengShan\nChina National Xiangqi League 2004 ",
      "fen": "3k1ab2/4c4/3P1a2b/4N4/5N3/4C4/cp7/2n1B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_2987",
      "title": "Mate in 4 moves"
    },
    {
      "description": "JIE XuChu - XU Chao\nGuan Nan Tang Gou Cup Xiangqi Championships 2005 ",
      "fen": "2bk1a3/4a4/2n6/p1p1c3p/3r5/4n1R2/P5P1P/3Rr4/4A4/2B1KABN1 b - - 0 1",
      "id": "puzzle_2988",
      "title": "Mate in 4 moves"
    },
    {
      "description": "FU GuangMing - XU JianMiao\nGuan Nan Tang Gou Cup Xiangqi Championships 2005 ",
      "fen": "3a1k3/4R4/5P3/p1R5p/4c4/9/9/5r3/9/r1BAKA1C1 w - - 0 1",
      "id": "puzzle_2989",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LA KhanhHoa - ATLAN Olivier\nWorld Xiangqi Championships 2005 ",
      "fen": "2bk1a3/4a4/4b4/p2N4p/2p4n1/6R2/P1P3p1P/2N1C4/4AK3/2BA3rc w - - 0 1",
      "id": "puzzle_2990",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ATLAN Olivier - NG YipSing\nWorld Xiangqi Championships 2005 ",
      "fen": "3k1R3/4a4/9/p8/2b1N3n/2C1c4/P2r4P/4B4/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_2991",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ISLAN Kon - HOR Weng Yeow\nWorld Xiangqi Championships 2005 ",
      "fen": "4ka3/4a4/b3R3b/p7p/4P4/6P2/P7P/9/3p3r1/2B1K1B2 b - - 0 1",
      "id": "puzzle_2992",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BU FengBo - ZHANG ShenHong\nChinese National Champion 2005 ",
      "fen": "4k4/3na4/3aN4/4C4/p7p/2P6/1c1nP3P/3C4B/5K3/3A1A3 w - - 0 1",
      "id": "puzzle_2993",
      "title": "Mate in 4 moves"
    },
    {
      "description": "PAN ZhenBo - XU YinChuan\nChinese National Champion 2005 ",
      "fen": "4c4/3kaP3/3r5/2P1P4/9/9/7R1/4B4/2p1A4/2B1KA3 w - - 0 1",
      "id": "puzzle_2994",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI LaiQun - WANG Bin\nJia Zhou Cup GM Champion 2007 ",
      "fen": "5a3/4k4/5a3/1P1P5/6b2/9/3c4P/n3p4/4AC3/3K1A3 b - - 0 1",
      "id": "puzzle_2995",
      "title": "Mate in 4 moves"
    },
    {
      "description": "KOAY Hean Hong - KLEIN Andreas\nWorld Xiangqi Championships 2007 ",
      "fen": "3a5/3Pak3/b5N2/p4C3/5cb2/5C3/P8/2nK5/4A1c2/5AB2 w - - 0 1",
      "id": "puzzle_2996",
      "title": "Mate in 4 moves"
    },
    {
      "description": "JIRAPARKDEEPAN Vithaya - LYUU Yin San\nWorld Xiangqi Championships 2007 ",
      "fen": "3a1kb2/2N1a4/2R1b4/4p1R1p/r8/5C3/4P3n/4r4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_2997",
      "title": "Mate in 4 moves"
    },
    {
      "description": "TAN ZhenBang - Ung Dau\nWorld Xiangqi Championships 2007 ",
      "fen": "1r1a1abC1/2N1k3n/4b4/p1p1R1N1p/6P2/1CP2p3/P7P/4B4/4A3c/3K1AB2 w - - 0 1",
      "id": "puzzle_2998",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN Ling Wei - YAN Dot San\nWorld Xiangqi Championships 2007 ",
      "fen": "3N1k3/9/4br3/9/9/9/4R4/5A3/9/3AK1B2 w - - 0 1",
      "id": "puzzle_2999",
      "title": "Mate in 4 moves"
    },
    {
      "description": "TAN Wei TaT - SOUR SAMPHY\nWorld Xiangqi Championships 2007 ",
      "fen": "2b1ka3/4a4/4b4/9/p3N1pNp/5c3/P4c3/3AB2C1/2n1A4/3K5 b - - 0 1",
      "id": "puzzle_3000",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NGO Lan Huong - KHOO Chin Chin\nWorld Xiangqi Championships 2007 ",
      "fen": "5ab2/1CN1a4/b1nk5/p1R3p1p/3c5/P5P2/3c4P/2N1B4/4A4/2BAK2r1 w - - 0 1",
      "id": "puzzle_3001",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHIENG Ming Chuo - WU Xia\nWorld Xiangqi Championships 2007 ",
      "fen": "3ckab2/9/3a5/8p/2b6/3NP1P2/4pn2P/3K1N2B/4A4/2BA5 b - - 0 1",
      "id": "puzzle_3002",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NGO Lan Huong - DIAN Fitry yani\nAsian xiangqi Championship 2008 ",
      "fen": "2b1ka3/3P5/3N5/5P3/4C1P2/6B2/9/4B4/9/cp1AKn3 w - - 0 1",
      "id": "puzzle_3003",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHU ZhongQian - LAI LiXiong\nAsian xiangqi Championship 2008 ",
      "fen": "2baka3/9/4b4/N2Rp3p/9/2P6/4c3P/R3B4/4r4/3K1ABr1 b - - 0 1",
      "id": "puzzle_3004",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SUN YongZheng - TENG Siong Liang\nAsian xiangqi Championship 2008 ",
      "fen": "3a1ab2/3n2NC1/1c2bk3/p1n1p3p/9/4P4/PRr5P/4B3N/9/3AKAB2 w - - 0 1",
      "id": "puzzle_3005",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BU FengBo - MIAO LiMing\nChina National Xiangqi League 2007 ",
      "fen": "2ca2R1C/3nak3/5c1r1/p3n3p/4pN3/5C3/P3P3P/2r1B4/4A4/1R2KAB2 w - - 0 1",
      "id": "puzzle_3006",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SUN YongZheng - SHANG Wei\nChina National Xiangqi League 2006 ",
      "fen": "3a1k3/5NP2/4P3b/9/9/4c1N2/2p1C1n2/B4K3/9/3A1A3 w - - 0 1",
      "id": "puzzle_3007",
      "title": "Mate in 4 moves"
    },
    {
      "description": "JING XueYi - LIU DianZhong\nChina National Xiangqi League 2006 ",
      "fen": "3NR4/5k3/8n/p3C1p1p/9/3p2P2/2r2n2P/5c3/4A4/1cBCK1B2 w - - 0 1",
      "id": "puzzle_3008",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HONG Zhi - ZHAO GuoRong\nChina National Xiangqi League 2006 ",
      "fen": "3N1a3/4n4/3Rbk3/p8/4r4/5C3/P7P/B8/9/c2K5 w - - 0 1",
      "id": "puzzle_3009",
      "title": "Mate in 4 moves"
    },
    {
      "description": "QUAN DeLi - JIN Bo\nChina National Xiangqi League 2004 ",
      "fen": "4R4/3r1k3/6P2/p8/9/9/4c4/3A1A3/4K4/9 w - - 0 1",
      "id": "puzzle_3010",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HU RongHua - TANG ZhuoGuang\nChinese National Champion 2005 ",
      "fen": "2b1kabN1/4a4/4c4/p7p/6N2/2n1R4/P3c1PCP/3p3R1/1r7/2BAKAB2 b - - 0 1",
      "id": "puzzle_3011",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO Dong - LIU Huan\nChinese National Champion 2005 ",
      "fen": "1CbR4R/4k1r2/c3b4/9/9/2r6/4P3P/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_3012",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YANG YI - TANG Dan\nChinese National Champion 2005 ",
      "fen": "3R1kb2/4a4/5a3/3N5/9/3r5/6n2/5K3/4A4/5AB2 b - - 0 1",
      "id": "puzzle_3013",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO LiKim - QUO HaiJun\nChina Team Championship 2007 ",
      "fen": "3k1ab2/C1P1aN3/3Pb4/5n2p/3c5/4C3P/6p2/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_3014",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG JianFeng - HUO XianYong\nChina Team Championship 2007 ",
      "fen": "2b1ka3/9/4c4/2p5p/p3N1b2/2P6/3Rc3P/1C5N1/1n2r4/2rA1KB2 w - - 0 1",
      "id": "puzzle_3015",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG ZhiPing - WANG RuiXiang\nChina Team Championship 2007 ",
      "fen": "2b1kab2/9/3aP4/6P2/9/2B6/c4N3/9/1n3p3/2BAK4 b - - 0 1",
      "id": "puzzle_3016",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN Zhong - ZHANG ShenHong\nChina National Xiangqi League 2008 ",
      "fen": "4kab2/4a4/N1n1b2Rc/p3p3p/2P2N3/6P2/P3P4/5K3/4C1R2/2Br4r b - - 0 1",
      "id": "puzzle_3017",
      "title": "Mate in 4 moves"
    },
    {
      "description": "TANG Dan - CHEN LiChun\nChina Team Championship 2007 ",
      "fen": "3akab2/8R/3Pb4/8p/6p2/9/Pnr1c1P1P/2N1B2C1/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_3018",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG Yan - FAN Lei\nChina Team Championship 2006 ",
      "fen": "C4k3/2P4R1/b2aba3/9/4n4/2P6/9/4B4/4A4/2B1Kr3 w - - 0 1",
      "id": "puzzle_3019",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG Yong - GAI MingQiang\nChina Team Championship 2005 ",
      "fen": "3a1kb2/2N1a4/2R1b4/9/5R2p/5r3/1p7/4BA3/6n2/5KB2 b - - 0 1",
      "id": "puzzle_3020",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU JinYu - HAN DaYong\nChina Team Championship 2005 ",
      "fen": "1r1a1a3/1C2k2C1/3N5/n7p/2b1p1b2/p7c/4P4/5R3/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_3021",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HUO XianYong - HOU ZhaoZhong\nChina Team Championship 2005 ",
      "fen": "4kab2/3ca4/4b4/4rN2p/3R5/2PR5/8P/4C1r2/1nN1A4/2BK1ABc1 w - - 0 1",
      "id": "puzzle_3022",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI Qiang - HE Gang\nChina Team Championship 2005 ",
      "fen": "3akab2/3n4r/2N3c2/p3p4/5rb1p/4N4/P3P4/1C2B1n2/3R5/2BAKA1R1 w - - 0 1",
      "id": "puzzle_3023",
      "title": "Mate in 4 moves"
    },
    {
      "description": "GUO FuRen - LI Qiang\nChina Team Championship 2005 ",
      "fen": "3a1k3/2N1a4/4b3n/1R4p1p/2b3c2/9/5r2P/2NRC3B/4A4/r1c1KA3 w - - 0 1",
      "id": "puzzle_3024",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BO ChunLin - LIU Zhi\nChina Team Championship 2005 ",
      "fen": "1r3k3/4P4/3Nba3/9/4R3p/9/5c2P/4B4/9/3AK4 w - - 0 1",
      "id": "puzzle_3025",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIANG FuChun - HAN DaYong\nChina Team Championship 2005 ",
      "fen": "3k1ab2/4a4/4b4/p1p2R2p/2P2R3/2P6/8P/3AC4/5N3/1rc1KA3 w - - 0 1",
      "id": "puzzle_3026",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WU QingBin - YANG Ming\nChina Team Championship 2005 ",
      "fen": "4kab2/4a4/2c1b1n2/RN2p1C1p/9/2P3P2/n4r2P/4B4/2N1A4/2BAK4 w - - 0 1",
      "id": "puzzle_3027",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI ZhiPing - ZHANG Qiang\nJufeng Cup Xiangqi MasterNational Championships 2000 ",
      "fen": "2b2k3/3RP4/4b4/9/9/2B3B2/P8/5A3/1n6r/3K1A3 w - - 0 1",
      "id": "puzzle_3028",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YANG DeQi - ZHUANG YuTing\nJufeng Cup Xiangqi MasterNational Championships 2000 ",
      "fen": "2b1k4/4a4/4ba3/9/1P2N4/1R4P2/9/3AB4/2r1A1p2/4K2c1 b - - 0 1",
      "id": "puzzle_3029",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG Jiang - PAN ZhenBo\nJufeng Cup Xiangqi MasterNational Championships 2000 ",
      "fen": "2b1kab2/2N1a4/9/p3P3p/2p3p2/6P2/1r6P/2cRBK1R1/9/c2n1A3 b - - 0 1",
      "id": "puzzle_3030",
      "title": "Mate in 4 moves"
    },
    {
      "description": "PONG Daruganont - TAN Henry\nAsian xiangqi Championship 2008 ",
      "fen": "4k1b2/4an3/9/p5c2/4R4/1r2C1B2/P8/3C4B/3KA4/5A3 w - - 0 1",
      "id": "puzzle_3031",
      "title": "Mate in 4 moves"
    },
    {
      "description": "QIU Liang - YANG JinXian\nAsian xiangqi Championship 2008 ",
      "fen": "2b1ka3/4a4/4bn3/2PN4p/3CC1p2/9/P5P2/4B4/4A4/2B1KA2c w - - 0 1",
      "id": "puzzle_3032",
      "title": "Mate in 4 moves"
    },
    {
      "description": "TENG Siong Liang - NGUYEN Vu Quan\nAsian xiangqi Championship 2008 ",
      "fen": "2ba1Rb1c/r3k4/2n6/p3p1p1p/5N3/2B3P2/P1P5P/3R5/4A4/1r1A1KB2 w - - 0 1",
      "id": "puzzle_3033",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO SiQi - ZHAO Yin\nChina Team Championship 2003 ",
      "fen": "1R2kab2/4a4/4b2c1/p3N3p/4P4/P1P6/8P/3AB3B/6r2/3AK3c b - - 0 1",
      "id": "puzzle_3034",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG XiaoPing - ZHANG MingZhong\nChina Team Championship 1994 ",
      "fen": "2bak4/4a4/4b4/6N1p/p3N1p2/n1C6/2r3P2/4c3C/3RA4/2BK1A3 w - - 0 1",
      "id": "puzzle_3035",
      "title": "Mate in 4 moves"
    },
    {
      "description": "QIAN HongFa - HU RongHua\nChinese National Champion 1978 ",
      "fen": "4kab2/4a4/8b/1r2N4/5R3/3NP1B2/P8/4B4/3pA2r1/3AK4 b - - 0 1",
      "id": "puzzle_3036",
      "title": "Mate in 4 moves"
    },
    {
      "description": "FU GuangMing - WU Kui Lin\nHong Kong Sports Festival Tournament 1995 ",
      "fen": "4kab2/2NRa4/b1r6/n3P3p/1Cc6/9/1p7/4BA3/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_3037",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN XinAn - FENG MingGuang\nChina Team Championship 1998 ",
      "fen": "2b2R3/3k5/3ab1r2/p3C3p/6PR1/9/2p1c3P/3A5/2c2K3/3A5 w - - 0 1",
      "id": "puzzle_3038",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI Xian - FENG XiaoXi\n ",
      "fen": "3k5/4C4/3aN4/p1p2R2p/2n6/P2r5/2P3P2/2n6/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_3039",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG XiaoHua - ZHU ZongSi\n ",
      "fen": "C2ak1b2/4a4/4b4/5P3/1Rp5P/2P6/4c4/N3B4/4p4/2BK1A1r1 b - - 0 1",
      "id": "puzzle_3040",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO GuoRong - SUN YongZheng\n ",
      "fen": "3k1a3/4a4/2n1N4/p1p4Rp/6P2/2P1n3P/Pc4r2/2N1C4/3rA4/1RB1KA3 b - - 0 1",
      "id": "puzzle_3041",
      "title": "Mate in 4 moves"
    },
    {
      "description": "JIN Bo - XUE WenQiang\nSimon-controlled Cup xiangqi Masters National Championships 1999 ",
      "fen": "2ba3CC/4ak3/2n3P2/p3p3R/2r1c4/5N3/P3cr3/2p2A3/9/1RB1KAB2 w - - 0 1",
      "id": "puzzle_3042",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Lv Qin - HONG Zhi\nLaiqun Cup xiangqi tournament  2007 ",
      "fen": "3k1a3/6CrC/R3P4/p7p/9/4p1P2/P8/8B/9/3AKABnc w - - 0 1",
      "id": "puzzle_3043",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI DeZhi - ZHUANG YuTing\nYANG QuanLin Cup Champion 2008 ",
      "fen": "5k1c1/CN2R4/9/4p3p/6n2/2B1P4/8P/3A5/6r2/2c1KA3 w - - 0 1",
      "id": "puzzle_3044",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LONG GuangMing - GAN YuanFeng\nHong Kong  ",
      "fen": "1r2kab2/4aR3/3cb4/p1p5p/4C4/2P1p4/P5R1P/5C3/4Kn1rN/2BA1A2c w - - 0 1",
      "id": "puzzle_3045",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU ZongZe - \u8d75\u5927\u9e4f\nYingYang Chu He Han Jie Cup xiangqi Championships 2008 ",
      "fen": "5R2C/3k5/5aN2/9/p1p3P2/9/P3P4/3r5/2c3r2/2BAK4 w - - 0 1",
      "id": "puzzle_3046",
      "title": "Mate in 4 moves"
    },
    {
      "description": "KHOO Chin Chin - LI Jennifer\nWorld Xiangqi Championships 2007 ",
      "fen": "2bak2C1/4a4/9/p4RR1p/2p6/4c4/P3N1P1P/C8/1n1rAr3/2B1KAB2 w - - 0 1",
      "id": "puzzle_3047",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u7a0b\u5fd7\u8fdc - DENG SongHong\nChina Team Championship 1976 ",
      "fen": "r2Rkab2/4a1c2/2n1b3n/p1p1p2R1/9/2P6/P3P2pP/1CN5B/3CNr1c1/2BAKA3 b - - 0 1",
      "id": "puzzle_3048",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5f20\u6653\u94a2 - Li Hong Jia\nWMM World xiangqi Masters tournament 2006 ",
      "fen": "2ba1k3/4a4/1c5R1/6p1p/2b1C4/R3PrP2/n1P2r2P/N3B4/4A4/2BAK4 b - - 0 1",
      "id": "puzzle_3049",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Lv Qin - LIU DaHua\nChina Team Championship 1983 ",
      "fen": "2bak4/4a4/2c1bc3/2p1CR2C/pn4N1r/9/P7P/B8/4A4/3A1KB2 w - - 0 1",
      "id": "puzzle_3050",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN XiaoKun - Lv Qin\nChinese National Champion 1985 ",
      "fen": "3k5/2R3NC1/b8/4n3r/6b1p/9/9/4BA2B/4AK2c/9 w - - 0 1",
      "id": "puzzle_3051",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BU FengBo - Lv Qin\nNA 1987 ",
      "fen": "C3k1b2/3R5/9/4p1r1p/p8/1C7/P3P3P/4B4/4r4/c3K1B2 w - - 0 1",
      "id": "puzzle_3052",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU YouHua - Lv Qin\nChinese National sports 2000 ",
      "fen": "2ba2R2/4ak3/n3b2c1/5C3/p1P6/8P/P4RP2/N1r3r2/3KAn3/9 b - - 0 1",
      "id": "puzzle_3053",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Lv Qin - Cheng Junchao\nChina National Xiangqi League 2005 ",
      "fen": "3k1a3/4a4/3C5/p3p3p/1np2c3/P1PNP4/6p1P/4r4/3K3R1/2BA2Cc1 b - - 0 1",
      "id": "puzzle_3054",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Lv Qin - ZHENG YiHong\nChina National Xiangqi League 2008 ",
      "fen": "CNR2ab2/4k4/3a5/p1p5p/6p2/3c5/Pr1n2P1P/3AB4/3K5/2B2A3 b - - 0 1",
      "id": "puzzle_3055",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI ZhiYing - ZHANG JinRong\nNA NA ",
      "fen": "4ka3/4a4/4R4/p7p/7r1/3R5/P1P5P/9/3KA4/3c1AB2 w - - 0 1",
      "id": "puzzle_3056",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u6768\u54ac\u9752 - WAN ChunLin\nShanghai Cup xiangqi Challenge 1990 ",
      "fen": "1rbak1r2/2R1a4/9/p2N4R/2b3p2/9/P1P5P/4B4/c3K4/2BA1A3 w - - 0 1",
      "id": "puzzle_3057",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HU RongHua - YU YouHua\nChina Team Championship 1986 ",
      "fen": "3a2b2/1R2a4/C1N1bk3/2n1p3p/9/P1p1p4/8r/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_3058",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIN GuanHao - HU RongHua\nPao Yueng Cup 1991 ",
      "fen": "2b1k1b2/4a4/9/6N2/9/p3P1P2/5R3/4pA3/4AK3/1c5r1 b - - 0 1",
      "id": "puzzle_3059",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LU Hui - HUANG SongXuan\nNA NA ",
      "fen": "5R3/3k5/4b4/3P5/4r2c1/8p/9/B2A4B/4C4/5K3 w - - 0 1",
      "id": "puzzle_3060",
      "title": "Mate in 4 moves"
    },
    {
      "description": "GAO YiPing - GAO Hua\nYinli Cup Champion 1999 ",
      "fen": "4k4/4P4/b4a3/4r4/9/2B6/9/3R2p2/4p4/3K2B2 b - - 0 1",
      "id": "puzzle_3061",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG Yang - XU WenXue\nBuilding Materials City Cup National Championships 2005 ",
      "fen": "1Rck1ab2/4a4/3PN4/8p/9/3r2B2/8P/6n2/2R1A4/2r1KA3 w - - 0 1",
      "id": "puzzle_3062",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI DeZhi - LIANG WenBin\nDongguan mayor anzhen Xiangqi Open 2005 ",
      "fen": "4kaN2/2R6/5a3/p3C3p/6p2/1n7/4P1P1P/9/4A4/c1BAK1r2 w - - 0 1",
      "id": "puzzle_3063",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHU YongKang - YANG GuanLin\nNA 1963 ",
      "fen": "2bak1b2/2c1a4/9/4pR1Np/9/2PC5/7rP/C2AB4/3c5/2BA1K3 b - - 0 1",
      "id": "puzzle_3064",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BAI DianYou - NEI TieWen\nNA 1994 ",
      "fen": "4kab2/4aN3/4b4/p3C3p/3Rn4/r8/4P3P/4B4/4A4/1cBK1A3 w - - 0 1",
      "id": "puzzle_3065",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN LiChun - LI Xian\nChinese National sports 2006 ",
      "fen": "2bk1ab2/4a3r/n3c4/p3C3p/3N5/2R6/P3n3P/7C1/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_3066",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG JiaLiang - HOR Weng Yeow\nNA 1980 ",
      "fen": "2ba1kb2/4a4/4c3n/5Rp1p/C1p2r3/6P1P/P1P3r2/2N1B2R1/4A4/3AK1B2 b - - 0 1",
      "id": "puzzle_3067",
      "title": "Mate in 4 moves"
    },
    {
      "description": "GUO LiPing - DANG GuoLei\nChinese National sports 2006 ",
      "fen": "4k4/2N1a4/9/8p/9/9/9/4B4/3RAp1n1/3AK2c1 b - - 0 1",
      "id": "puzzle_3068",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5510\u6377 - YU Bing\nNational Collaboration District III tournament 2006 ",
      "fen": "2bak4/4a4/4b4/p3R3p/7n1/P1P1P3P/5r3/C1R6/4A3c/1rBK1A3 b - - 0 1",
      "id": "puzzle_3069",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU HongMu - CHEN Qi\nNA 1978 ",
      "fen": "4ka3/R8/2N1Ca3/7rp/7n1/4p4/P7P/1R6B/4A4/2Br1K1c1 w - - 0 1",
      "id": "puzzle_3070",
      "title": "Mate in 4 moves"
    },
    {
      "description": "FU GuangMing - JI BenHan\nChinese National Champion 1964 ",
      "fen": "1rbak1b1R/3Ra4/n8/p1P2N3/6p2/7r1/5cP1P/2C1B2C1/4A4/c1BAK4 w - - 0 1",
      "id": "puzzle_3071",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WU Kui Lin - LIU Kuo Hua\nForshang Cup Xiangqi King Tournament 2007 ",
      "fen": "3k1ab2/4n4/3a1N3/2P2P3/8p/6C2/4p4/9/4A4/2BAK2c1 w - - 0 1",
      "id": "puzzle_3072",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5218\u660e\u73c2 - DONG XingGen\nNational Collaboration District III tournament 2006 ",
      "fen": "2Raka3/9/1C4n2/p1P3p1p/9/4p1P2/P7P/8B/3KArn2/7c1 b - - 0 1",
      "id": "puzzle_3073",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHU Pobit - ZHAO Ming\nChinese National Champion 1964 ",
      "fen": "CRbak4/4a4/9/p7p/6R2/9/P3PN2P/2r1r4/c4K3/4n4 b - - 0 1",
      "id": "puzzle_3074",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIN YiSheng - \u674e\u6c49\u5149\nShantou Xifeng Cup Xiangqi Open 2007 ",
      "fen": "3rkab2/2R1a4/c1R1n2rc/p1p1C3p/2b6/P8/4P3P/1C4N2/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_3075",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u6797\u8d3b\u8bc4 - TANAKA Atsushi\nAsian xiangqi Championship 2006 ",
      "fen": "2RaR1b2/5k3/9/p7p/2pr5/9/P4Np2/3A5/9/4KAB1c w - - 0 1",
      "id": "puzzle_3076",
      "title": "Mate in 4 moves"
    },
    {
      "description": "JIANG Chuan - WANG HuaZhang\nHesheng. Spring Festival Cup team tournament 2009 ",
      "fen": "3Ck1b2/4aR3/1R2b2r1/p3C3p/2P6/1N4p2/P1n1n1c2/8B/4A4/2BAK2c1 w - - 0 1",
      "id": "puzzle_3077",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN Hui - CAO WenJie\nNational Collaboration District III tournament 2006 ",
      "fen": "1r2kab1C/4a4/4b4/p8/2n1C1p2/3R5/P3n3P/4B4/4A4/c2K1AB2 b - - 0 1",
      "id": "puzzle_3078",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIU Zhi - YAN YuSuo\nBeijing, Tianjin, Nankai Cup Xiangqi Tournament 2006 ",
      "fen": "5k3/4c4/2n1Na3/p6Rp/9/9/8P/3C2r1B/4A4/c1BA1K3 w - - 0 1",
      "id": "puzzle_3079",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u9ec4\u957f\u4e30 - HUANG MinSheng\nAsian Xiangqi Individual Championships 2007 ",
      "fen": "4kab2/3P5/7c1/4C3p/p5p2/9/4P1c1P/3CB1N2/9/2BAKA3 w - - 0 1",
      "id": "puzzle_3080",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO XinXin - CHEN HanHua\nWenling Cup, Zhejiang Province secondary schools Xiangqi tournament 2008 ",
      "fen": "1R1rkab2/c3a4/4b3c/p3C4/6p2/2N6/nR2P3P/3Cn1N2/5r3/3AKAB2 w - - 0 1",
      "id": "puzzle_3081",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHENG FuChen - HAN FuDe\nNational Games 1979 ",
      "fen": "3kcNb2/4R4/3Pb4/p7p/9/3p5/P1n1P3P/9/3CA4/2BAK1r2 w - - 0 1",
      "id": "puzzle_3082",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WU Kui Lin - CHIU Yu Kuen\nZhenda - hanshin Cup International Tournament 2009 ",
      "fen": "5k3/1c7/5P3/9/9/2B1R4/9/9/3rK4/2B2A3 w - - 0 1",
      "id": "puzzle_3083",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI DeZhi - \u674e\u7acb\u660e\nGuangxi Beiliu City Yong Yong Ming Men Cup xiangqi Open 2008 ",
      "fen": "2R2a3/r3k4/3P1r3/4n1R1p/9/9/8P/9/9/3AKAB2 w - - 0 1",
      "id": "puzzle_3084",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI DeZhi - \u674e\u7acb\u660e\nGuangxi Beiliu City Yong Yong Ming Men Cup xiangqi Open 2008 ",
      "fen": "2R2a3/r3k4/3P1r3/4n1R1p/9/9/8P/9/9/3AKAB2 w - - 0 1",
      "id": "puzzle_3085",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XIE Jing - LI YongQin\nChinese National Champion 2008 ",
      "fen": "2N2ab2/3k4C/2N2P3/9/9/p8/c3P4/9/2n1A4/3AK4 w - - 0 1",
      "id": "puzzle_3086",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LOOK Kean Chor - WU JiangWei\nYANG QuanLin Cup Champion 2008 ",
      "fen": "3a1ab2/5kN2/4b1n2/p7p/3R2p2/9/P3P1P1P/4B2r1/4AC3/3K1AB2 w - - 0 1",
      "id": "puzzle_3087",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SUN HaoYu - \u9ece\u660e\nNational Farmers Games xiangqi tournaments 2008 ",
      "fen": "3ak1b2/9/5P3/9/9/9/9/4B4/4K4/1R1r3n1 b - - 0 1",
      "id": "puzzle_3088",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HATTON Tsugumitsu - LEI Kam Fun\nThe world mind sports games 2008 ",
      "fen": "4kab2/4a4/4b4/8p/p1P6/4C4/P1R1n3P/3KNA3/1rN2c3/5Ac2 b - - 0 1",
      "id": "puzzle_3089",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHU YongJi - HONG Zhi\nThe world mind sports games 2008 ",
      "fen": "C4ab2/4k4/3Nb1n2/p2Rp1p1p/4c4/2B2nP1P/7r1/4B4/4A4/3A1K3 b - - 0 1",
      "id": "puzzle_3090",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG RuiXiang - CHEN QiHuan\nWacker Real Estate Cup National  1st class tournament 2009 ",
      "fen": "2b1k4/3Pa2N1/3nb4/5c3/4C4/7p1/9/8B/4A4/4KA3 w - - 0 1",
      "id": "puzzle_3091",
      "title": "Mate in 4 moves"
    },
    {
      "description": "MEYERSIEK Michael - HUANG BiFu\nWorld Xiangqi Championships 2009 ",
      "fen": "2bakab2/9/2n5c/p1p3p1p/3C5/2P1R4/P5P1P/2N5B/2nrAr3/1RBAK4 b - - 0 1",
      "id": "puzzle_3092",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WU Kui Lin - CHIU Yu Kuen\nWorld Xiangqi Championships 2009 ",
      "fen": "5Rb2/4k4/4b1c2/N8/6p2/2Nn3r1/P1P1c4/3C1A1C1/9/4KAB2 w - - 0 1",
      "id": "puzzle_3093",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BRYDON Bill - SOUR Samphy\nWorld Xiangqi Championships 2009 ",
      "fen": "3a1k3/4a4/4b4/6c2/2b6/9/3N1n3/4p4/3KA2C1/5A3 b - - 0 1",
      "id": "puzzle_3094",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NGUYEN Tran Do Ninh - WU JiangWei\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "4RN3/3k5/3a5/9/9/9/9/3A5/4Kr3/9 w - - 0 1",
      "id": "puzzle_3095",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HUANG BingWei - CHEN ShaoHeng\nHong Kong Individual Championship 2009 ",
      "fen": "2bk5/1R3P3/9/C8/2b6/9/1p3r2p/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3096",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5f20\u8fc5\u56fd - CAO YanLei\nShenzhen WuFang Cup xiangqi Competition 2009 ",
      "fen": "3akaC2/9/4b4/R7p/9/6P2/4c4/2n1B4/4A4/1rB1KA3 b - - 0 1",
      "id": "puzzle_3097",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5434\u9022\u5c71 - \u5434\u4e9a\u5229\n2009\u6df1\u5733\u7b2c\u56db\u5c4a\u516c\u56ed\u6587\u5316\u8282\u798f\u6c38\u8c61\u68cb\u5927\u8d5b 2009 ",
      "fen": "2b1k4/1Cn6/4banr1/p1p5p/4N4/4r4/P1P4R1/5C3/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_3098",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u6797\u5ddd\u535a - \u674e\u81ea\u536b\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "2b1k4/4aP3/3Rb4/8p/2p6/9/2P1r3P/3K1A3/4C4/2B6 w - - 0 1",
      "id": "puzzle_3099",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI ZhiPing - WANG Bin\nDaoquan Tea Cup National xiangqi All-Star Game 2008 ",
      "fen": "4k1C2/3N1P3/9/9/5n3/9/2n6/4Bp3/3K5/6B2 w - - 0 1",
      "id": "puzzle_3100",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN Zhong - ZHANG ShenHong\nChina National Xiangqi League 2008 ",
      "fen": "4kab2/4a4/N1n1b2Rc/p3p3p/2P2N3/6P2/P3P4/5K3/4C1R2/2Br4r b - - 0 1",
      "id": "puzzle_3101",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WOO Tsung Han - HAPCHINA Irimia\nWorld Xiangqi Championships 2011 ",
      "fen": "4kab2/4a4/4c4/2p1C3p/p2R5/2n6/P7P/4B4/4K4/3A1AB2 w - - 0 1",
      "id": "puzzle_3102",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Xu Guang Ya - SONE Toshihiko\nWorld Xiangqi Championships 2011 ",
      "fen": "4kab2/4a4/1rN1b4/p1p5p/4C1p2/2P6/1c3cn1P/5RN1B/C3A4/2BA1K3 w - - 0 1",
      "id": "puzzle_3103",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ISLAN Kon - BAKRA Anuar Bin\nWorld Xiangqi Championships 2011 ",
      "fen": "3cka3/4a4/4R4/p4rp1p/4N1n2/3R5/P7P/9/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_3104",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEIN Kvi - KNAB Reinhard\nWorld Xiangqi Championships 2011 ",
      "fen": "3aka3/9/9/5P2p/4c4/6r1P/2R6/4Bn2B/4A4/3A1K3 b - - 0 1",
      "id": "puzzle_3105",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HAPCHINA Irimia - ZORIN Daniil\nWorld Xiangqi Championships 2011 ",
      "fen": "2b1kab2/4ar3/3c5/P7p/9/4pn3/1C3R2P/2NAK4/6r2/2B4R1 b - - 0 1",
      "id": "puzzle_3106",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG YongXiang - LIANG Min Xing\nHong Kong Individual Championship 1997 ",
      "fen": "2bk1a3/4a4/4b4/4R4/9/3rp4/3Nr4/B8/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_3107",
      "title": "Mate in 4 moves"
    },
    {
      "description": "FONG William - TA Benjamim\nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "5a3/3ka4/9/p1p1n1R1p/2n6/9/P2r2C1P/4B4/1r2A4/1cRAK1BN1 b - - 0 1",
      "id": "puzzle_3108",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHAN Ling Fai - LI Shi Qian\nHong Kong Individual Championship 1997 ",
      "fen": "3N1k3/4a4/4R4/8r/9/9/9/9/2p6/2BAKAB2 w - - 0 1",
      "id": "puzzle_3109",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZENG YiQian - WU Qiang\nHong Kong Individual Championship 1997 ",
      "fen": "2R2ab2/3ka4/9/4c4/4N4/6P2/9/4B4/4A4/1rB1KA3 w - - 0 1",
      "id": "puzzle_3110",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NG Chun Hei - Gao WeiHua\nHong Kong Individual Championship 1998 ",
      "fen": "3k2b2/C2n1R3/3Nb4/6p2/7r1/P5P1p/1c7/4B4/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_3111",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YUNG Tak Keung - WU FaQiang\nHong Kong Individual Championship 1998 ",
      "fen": "3a2b2/2CPa4/4bk3/N3p1R1p/4c4/P1n6/8P/2r2A3/9/3AK4 b - - 0 1",
      "id": "puzzle_3112",
      "title": "Mate in 4 moves"
    },
    {
      "description": "OU HanMin - HUANG JiaJun\nHong Kong Individual Championship 1998 ",
      "fen": "3k1ab2/2P1a4/3Nb4/p5n2/5r2p/4C4/P2R5/4C4/1n7/2BAKAB2 w - - 0 1",
      "id": "puzzle_3113",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIANG Yuan Zhong - Liang Wei Qiang\nHong Kong Individual Championship 2001 ",
      "fen": "1Nb2ab2/3k3C1/3c1a3/3R5/8p/n1BN5/8P/B8/3r5/c3KA3 w - - 0 1",
      "id": "puzzle_3114",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NG Chun Hei - WU FaQiang\nHong Kong Individual Championship 2001 ",
      "fen": "C4k3/4a2R1/3cba3/3rN3c/6b1p/9/P3P3P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3115",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LO ChiKam - LI KangWah\nHong Kong Individual Championship 2001 ",
      "fen": "3a2b2/2N2R3/2Nkb4/9/P7p/2P3B2/5n2P/3p5/5r3/4K1B2 b - - 0 1",
      "id": "puzzle_3116",
      "title": "Mate in 4 moves"
    },
    {
      "description": "DING JianQuan - JIANG WeiKun\nHong Kong Individual Championship 2001 ",
      "fen": "4ka1r1/1R7/3a2c1b/2rC1P3/p5bc1/2P6/P6RP/N3B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3117",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHENG FuXiang - LEE Ang\nHong Kong Individual Championship 2001 ",
      "fen": "5k3/9/4R4/p8/8p/9/r7P/4C4/9/3AKA3 w - - 0 1",
      "id": "puzzle_3118",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WENG ChuWen - LONG GuangMing\nHong Kong Individual Championship 2001 ",
      "fen": "2bakab2/9/2n6/p1p1p3p/4C4/2P2C1N1/P2RP3P/7cB/4A1r2/3A1K2c b - - 0 1",
      "id": "puzzle_3119",
      "title": "Mate in 4 moves"
    },
    {
      "description": "TAN Ming - LI YaChao\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "2b1k1P2/c2Ca2R1/3aN1r2/4C3p/9/9/P3n3P/4B4/c3A4/4KAB2 w - - 0 1",
      "id": "puzzle_3120",
      "title": "Mate in 4 moves"
    },
    {
      "description": "PENG Oscar  - TAN Ming\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "9/3k5/4N3b/4r3p/p5b2/9/P4R2P/4C4/4A4/2BA1KB2 w - - 0 1",
      "id": "puzzle_3121",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI YaChao - CUONG Vuong\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "4k1b2/R4NN2/3a5/p7p/2P3b2/P8/4P1cc1/3r5/4A4/2B1KAB2 w - - 0 1",
      "id": "puzzle_3122",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5b59\u4f1f\u5409 - FANG ZiYou\n2009\u5e74\u6d59\u6c5f\u7701\u7b2c13\u5c4a\u5b8b\u57ce\u6d66\u6c5f\u5fc6\u6148\u676f\u8c61\u68cb\u6bd4\u8d5b 2009 ",
      "fen": "2b1k4/3Pa4/6N2/p7p/9/2PN2P1P/P4R3/4B4/7n1/3rKcB2 w - - 0 1",
      "id": "puzzle_3123",
      "title": "Mate in 4 moves"
    },
    {
      "description": "PANG CaiLiang - ZHAO Ruzheng\n2010\u5e74\u4e1c\u839e\u51e4\u5c97\u5b63\u5ea6\u8c61\u68cb\u516c\u5f00\u8d5b 2010 ",
      "fen": "1R3ab2/3ka4/4b4/4C4/3NPP2p/p2r5/c7P/4B4/4A2c1/2BAK4 w - - 0 1",
      "id": "puzzle_3124",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u674e\u82e5\u8fb0 - \u77f3\u4f1f\u5e73\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "3akcb2/4a4/4b3n/R7p/4r1p2/2R3P2/4C3P/1C2B1c2/9/3AK4 w - - 0 1",
      "id": "puzzle_3125",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WANG Bin - LIU DaHua\n2010\u5e74\u7b2c05\u5c4a\u540e\u8096\u676f\u8c61\u68cb\u5927\u5e08\u7cbe\u82f1\u8d5b 2010 ",
      "fen": "4R2r1/4R4/2rk5/4p3p/7n1/9/4P3P/9/9/2BAKABc1 w - - 0 1",
      "id": "puzzle_3126",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI DeZhi - CAO YanLei\n2010\u5e74\u7b2c\u5341\u516d\u5c4a\u8fce\u6625\u676f\u8c61\u68cb\u56e2\u4f53\u516c\u5f00\u8d5b 2010 ",
      "fen": "2b3R2/3k5/2N5c/4p1p1p/2p3b2/9/4P1r2/4r4/4A4/4KAR1c b - - 0 1",
      "id": "puzzle_3127",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHENG Weitong - ZHANG XueChao\nChinese National Champion 2010 ",
      "fen": "3a5/4a4/5k3/3r4p/3Nc1n2/3pp4/2R5P/4BC3/C8/2BAKA3 w - - 0 1",
      "id": "puzzle_3128",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU YouHua - Li Hong Jia\nChinese National Champion 2010 ",
      "fen": "6R2/4ak3/9/p1r5p/4P4/5CN2/8P/2n6/9/c1BAK4 w - - 0 1",
      "id": "puzzle_3129",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XIE Kui - HUANG HaiLin\nChinese National Champion 2010 ",
      "fen": "2b2k3/4R1P1n/3r1n3/P7p/5c3/9/4P3P/7C1/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3130",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NI Min - LI HanLin\nChina Team Championship 2010 ",
      "fen": "4k1b2/3P5/5a3/7N1/2b3p2/9/9/B7B/4A4/3A1K3 w - - 0 1",
      "id": "puzzle_3131",
      "title": "Mate in 4 moves"
    },
    {
      "description": "REN Jie - TIAN Chengcheng\nChina Team Championship 2009 ",
      "fen": "5kb2/4R4/4b4/p3p1p1N/9/6P2/2n1P1r1P/4c1N1C/2r1A4/cC1AK4 w - - 0 1",
      "id": "puzzle_3132",
      "title": "Mate in 4 moves"
    },
    {
      "description": "Lv Qin - XIE YeJian\nChinese National sports 2010 ",
      "fen": "2bak1r2/4aP1R1/4b4/9/3N5/3R4P/1r7/3AB4/9/2n1K4 w - - 0 1",
      "id": "puzzle_3133",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LEUNG TatMan - CAI ZhiLi\nHong Kong Individual Championship 2000 ",
      "fen": "2r2R3/C3R1c2/b2kb4/p1p1P1n1p/9/5N3/P1P3p1P/8B/4K4/3r5 w - - 0 1",
      "id": "puzzle_3134",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WU FaQiang - CHEN De\nHong Kong Individual Championship 2000 ",
      "fen": "3aR4/C4k3/4Pa3/p5p1p/9/9/P1P5P/1r2K4/9/2c2A3 w - - 0 1",
      "id": "puzzle_3135",
      "title": "Mate in 4 moves"
    },
    {
      "description": "HUANG Guan Gnan - TAN Jing Yang\nHong Kong Individual Championship 2000 ",
      "fen": "1R2kab2/4a4/2n1bc3/9/C5p1p/4p4/4P3P/NC2BA3/3r4n/2BAK2c1 b - - 0 1",
      "id": "puzzle_3136",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHENG FuXiang - CHIU Yu Kuen\nHong Kong Individual Championship 2001 ",
      "fen": "2b1k4/9/4b4/4C4/1P3N3/2B6/9/5n2B/4p4/3K3c1 b - - 0 1",
      "id": "puzzle_3137",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHUANG WeiJi - \u4e8e\u5fd7\u5eb7\nHong Kong Individual Championship 2002 ",
      "fen": "4k1b2/4a4/3ab1n2/1N7/4P4/8R/6r1P/B2C5/4A4/2BK1A3 w - - 0 1",
      "id": "puzzle_3138",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LEE Ang - \u5f20\u767e\u6270\nHong Kong Individual Championship 2003 ",
      "fen": "3k2bN1/n1C1a4/3P5/p1P5p/6p2/9/P3c1n1P/4BK3/7cN/r6R1 b - - 0 1",
      "id": "puzzle_3139",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHONG Jiangning - OU HanMin\nHong Kong Individual Championship 2003 ",
      "fen": "2b1kR3/4a4/n3b4/p7p/2pN5/1c4p2/P7P/3AKR3/1r2A4/4r1B2 b - - 0 1",
      "id": "puzzle_3140",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5f20\u5b50\u61cb - LI HuiDong\nHong Kong Individual Championship 2003 ",
      "fen": "2b6/2ck5/2Nab4/2PR1N3/p8/9/9/5r3/4AK3/3A5 w - - 0 1",
      "id": "puzzle_3141",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI HuiDong - SU FuYin\nHong Kong Individual Championship 2003 ",
      "fen": "2C6/4a4/5k3/p5N1P/3R2b2/9/P6n1/4B4/4A4/1r1K1AB2 w - - 0 1",
      "id": "puzzle_3142",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XIAO Di - DING JianQuan\nHong Kong Individual Championship 2003 ",
      "fen": "2N2k3/4a4/5aC2/p7p/7r1/5p3/P1R2n2P/9/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_3143",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NG Chun Hei - YUNG Tak Keung\nHong Kong Individual Championship 2003 ",
      "fen": "1Cb2a3/1R7/C2k5/6N1p/2r3b2/6p2/P1P1P1n1P/6N2/6c2/2BAKAB2 w - - 0 1",
      "id": "puzzle_3144",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIANG Yuan Zhong - GAN YuanFeng\nHong Kong Individual Championship 2003 ",
      "fen": "4k4/9/3P5/9/1P7/3n5/9/B2A5/9/4CK3 w - - 0 1",
      "id": "puzzle_3145",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU Ming - HU Jin\nHong Kong Team Champion 2002 ",
      "fen": "C1ba1a3/9/4k4/p8/2b6/P8/1r7/4C4/9/4K4 b - - 0 1",
      "id": "puzzle_3146",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIN BuYu - LO ZhaoKun\nHong Kong Team Champion 2002 ",
      "fen": "1C2kab2/2CRa4/3cb4/p3p4/8p/2P2r1n1/P3P3P/N3B4/9/2BAKAc2 w - - 0 1",
      "id": "puzzle_3147",
      "title": "Mate in 4 moves"
    },
    {
      "description": "WENG GuoLi - LIANG ShuRen\nHong Kong Team Champion 2002 ",
      "fen": "4k3C/5R3/3abN3/4p4/p5b2/9/P3n3P/2c1B3B/4A2rc/3A1K3 b - - 0 1",
      "id": "puzzle_3148",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SU FuYin - HUANG Haoyi\nHong Kong Team Champion 2002 ",
      "fen": "R4a3/3k4C/9/3r4p/2pNpr3/9/P3Pn3/2c4R1/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3149",
      "title": "Mate in 4 moves"
    },
    {
      "description": "PAN ZongYao - TAN Jing Yang\nHong Kong Team Champion 2003 ",
      "fen": "4kab2/2R1a4/4b4/1n6p/2P6/9/4r4/4CR3/4A4/2BA1K2c w - - 0 1",
      "id": "puzzle_3150",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5c39\u5efa\u90a6 - PENG Rui Quan\nHong Kong Team Champion 2003 ",
      "fen": "3a5/3k5/4b1n2/8p/r8/1NR6/1c6P/1Cn1C4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3151",
      "title": "Mate in 4 moves"
    },
    {
      "description": "DENG WeiDa - PAN ZongYao\nHong Kong Team Champion 2003 ",
      "fen": "R2ak4/4aP3/6R1b/8p/2r3p2/9/6P1P/3CB3B/4A4/3AK2c1 w - - 0 1",
      "id": "puzzle_3152",
      "title": "Mate in 4 moves"
    },
    {
      "description": "TANG HaoWen - \u5434\u56fd\u96c4\nHong Kong Team Champion 2003 ",
      "fen": "3akabC1/4n4/b3c4/p3C3p/9/P1R6/4r3P/N4R3/4A4/2BrKAB2 w - - 0 1",
      "id": "puzzle_3153",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5c91\u4f69\u4ed5 - \u65b9\u529b\u884c\nHong Kong Team Champion 2003 ",
      "fen": "3aka3/9/8b/5P2p/p8/9/P4R2P/B1n6/5K3/4r4 b - - 0 1",
      "id": "puzzle_3154",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LI ShaoBo - WONG Hok Him\nHong Kong Team Champion 2011 ",
      "fen": "2b2anCC/3kR4/2N1b4/p5p2/2p6/6P2/P1P1P3P/9/3r5/ccBAK1B2 b - - 0 1",
      "id": "puzzle_3155",
      "title": "Mate in 4 moves"
    },
    {
      "description": "DENG Wei Wen - \u6f58\u51ef\u58f0\nHong Kong Team Champion 2011 ",
      "fen": "9/3R2R2/4k2r1/p3p3p/2p4P1/9/P1n1P4/2N1r4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_3156",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u9ec4\u5b89\u8363 - \u6e29\u5146\u826f\nHong Kong Team Champion 2011 ",
      "fen": "8r/9/2RRrk3/9/8p/9/3p2p2/9/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3157",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u9648\u8fbe\u96c4 - YE Hui\nHong Kong Team Champion 2011 ",
      "fen": "R2ckab2/3Pa4/4b4/4r1p1p/9/3RC1P2/P2r5/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3158",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u674e\u6e05\u6e05 - \u674e\u5c55\u5c27\nHong Kong Team Champion 2011 ",
      "fen": "4k4/3PaP3/b1n3N2/9/9/6p2/9/3A5/4A4/5KB2 w - - 0 1",
      "id": "puzzle_3159",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u6c88\u4fca\u5f3a - \u7f57\u709c\u6770\nHong Kong Team Champion 2011 ",
      "fen": "3a1kcr1/4a4/N3b1c2/p6rp/4C4/6n2/P3P3P/R5N2/5C3/2BAKAB2 w - - 0 1",
      "id": "puzzle_3160",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU Ming - HO Sammy\nHong Kong Team Champion 2011 ",
      "fen": "2r1ka1r1/1R1PaR3/4b4/8p/2b6/9/P1p4pP/2nC5/4AK3/1cBA5 w - - 0 1",
      "id": "puzzle_3161",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5434\u4e9a\u5229 - \u4f59\u4fca\u8d24\nHong Kong Team Champion 2011 ",
      "fen": "3a5/3ka4/R8/p5p1p/7r1/6P2/P3P3P/1R7/4A4/2BrKC3 w - - 0 1",
      "id": "puzzle_3162",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u6881\u5149\u660e - \u738b\u654f\u6770\nHong Kong Team Champion 2011 ",
      "fen": "2bakab2/4n4/4c4/p1P5p/4C4/1N1R1Nr1P/P3P4/B3C4/4A4/3K1A1c1 w - - 0 1",
      "id": "puzzle_3163",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u9ea6\u6d69\u8d24 - \u65bd\u6069\u8000\nHong Kong Team Champion 2011 ",
      "fen": "3ak4/4a4/5c3/3P5/1r6p/9/3p4P/4p4/2RKA4/9 b - - 0 1",
      "id": "puzzle_3164",
      "title": "Mate in 4 moves"
    },
    {
      "description": "MA Liang - \u674e\u6587\u6cf0\nHong Kong Team Champion 2011 ",
      "fen": "1P1ak4/4a4/b3bP3/8p/4C4/4c4/5p1n1/3AB4/4A4/3K5 b - - 0 1",
      "id": "puzzle_3165",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YU Ming - XU BingKui\nHong Kong Team Champion 2011 ",
      "fen": "3k2R2/5C3/5P3/p3p3p/2p6/9/P6n1/4B4/3rA4/1rB1KA3 b - - 0 1",
      "id": "puzzle_3166",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO Guo Wei - \u8521\u4e1a\u6797\nHong Kong Team Champion 2008 ",
      "fen": "3k1a3/2r1a2R1/2c2N2b/p1R6/8p/2p1p4/P1P1P3P/2N6/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_3167",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN ZhenJie - \u90ed\u7389\u4f1f\nHong Kong Team Champion 2008 ",
      "fen": "3k5/4P4/4c4/9/9/3C2B2/4N4/3ABA3/9/4K4 w - - 0 1",
      "id": "puzzle_3168",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u7f2a\u5c55\u5b87 - \u738b\u5bb6\u4fca\nHong Kong Team Champion 2008 ",
      "fen": "C3kabr1/1R7/3a2n2/8p/2b6/5NP2/P1p5P/9/3K5/1Rc1rA1N1 b - - 0 1",
      "id": "puzzle_3169",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u590f\u8054\u6839 - \u8881\u7ef4\u5c27\nHong Kong Team Champion 2008 ",
      "fen": "2b1ka3/4a4/2n1b4/p1p1p4/9/2P1c3R/P8/2N1B4/4A1prN/3A1K3 b - - 0 1",
      "id": "puzzle_3170",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5362\u4f1f\u5f3a - \u8881\u4f1f\u7965\nHong Kong Team Champion 2008 ",
      "fen": "2baka3/9/4b4/9/9/1R7/9/5A3/1n1KA4/2r6 b - - 0 1",
      "id": "puzzle_3171",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u9648\u8c6a\u94a7 - \u674e\u9521\u534e\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/4a4/5c3/p7p/3R5/2p1p4/P7P/2nKB4/4r4/9 b - - 0 1",
      "id": "puzzle_3172",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN Zheng - \u5c91\u4f69\u4ed5\nHong Kong Team Champion 2009 ",
      "fen": "4kcb2/4a4/4ba3/p8/9/9/PR2p1r1P/3K3R1/4C4/2B1r4 b - - 0 1",
      "id": "puzzle_3173",
      "title": "Mate in 4 moves"
    },
    {
      "description": "PAN ZongYao - LI GuoQiang\nHong Kong Team Champion 2009 ",
      "fen": "C2P5/4ak3/3cba2b/p8/2r6/4p4/PR6P/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_3174",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LIANG Yuan - \u5434\u5b50\u806a\nHong Kong Team Champion 2009 ",
      "fen": "2bak4/4c4/3a4b/5P3/5C2p/1n4P2/P7P/5p2B/3K5/5A1N1 b - - 0 1",
      "id": "puzzle_3175",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u8881\u5fd7\u5f3a - \u9648\u4f1f\u6770\nHong Kong Team Champion 2009 ",
      "fen": "3k1a3/9/2P2a3/p2Cr3p/2R1c4/9/4PcN1P/4B4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_3176",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5434\u5b50\u806a - \u5bff\u9f99\nHong Kong Team Champion 2009 ",
      "fen": "3a5/4k4/3ab4/2PN5/9/2P6/2r6/9/4K4/9 b - - 0 1",
      "id": "puzzle_3177",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5f20\u8fbe\u5149 - \u6797\u8f89\nHong Kong Team Champion 2009 ",
      "fen": "9/5P3/3k5/9/3P2b2/9/9/3cB4/3C5/2B2K3 w - - 0 1",
      "id": "puzzle_3178",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5c71\u5bb6\u7231\u7f8e - \u8339\u8776\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "n1b2a3/3ka4/4b3r/P1R5p/3NC1p2/2P6/6P1P/6N2/9/1RBAKAB2 w - - 0 1",
      "id": "puzzle_3179",
      "title": "Mate in 4 moves"
    },
    {
      "description": "BU FengBo - Cheng Junchao\nChina National Xiangqi League 2011 ",
      "fen": "5k3/9/9/9/P4r3/2B6/9/B1RC5/2p1K4/9 b - - 0 1",
      "id": "puzzle_3180",
      "title": "Mate in 4 moves"
    },
    {
      "description": "JIN HaiYing - LIU Huan\n2011 World Mind Games Chess Classic Trials 2011 ",
      "fen": "4kab2/4aRN2/4bc3/p7p/2pn2r2/1R7/P1P3p1P/3C4B/4r4/2BAK4 w - - 0 1",
      "id": "puzzle_3181",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u9ec4\u79c0\u6210 - ZHAO Jianjun\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "3aka3/7c1/2R1c3b/p7p/2p6/6P2/P1P1P3P/2N1BC3/3rA2r1/2BA1K2R b - - 0 1",
      "id": "puzzle_3182",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO GuoRong - LIU DaHua\n2011 The 1st Chongqing Qianjiang Cup National Xiangqi Championship Tournament 2011 ",
      "fen": "4kab2/4a4/4b4/p3p3p/4c4/6r2/P3P3P/3A1RN1R/2nCA4/1r1NK4 b - - 0 1",
      "id": "puzzle_3183",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LAI LiXiong - WANG HaoChang\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2Pak2c1/4a4/8b/p1p3R2/9/4R4/P3P4/9/3K1c3/4r4 w - - 0 1",
      "id": "puzzle_3184",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5f6d\u6c38\u6d2a - XIE ZhouMiao\nYANG QuanLin Cup Champion 2010 ",
      "fen": "3Rk1b2/4a4/6n2/p1P3p1p/3Np4/6P2/9/2nC1R3/4Ar3/2BAKCr1c b - - 0 1",
      "id": "puzzle_3185",
      "title": "Mate in 4 moves"
    },
    {
      "description": "CHEN LiuGang - LIN QinSi\nYANG QuanLin Cup Champion 2010 ",
      "fen": "1c3k3/9/4b4/p1N6/3N4C/P8/1r6n/B7B/9/3AKA3 w - - 0 1",
      "id": "puzzle_3186",
      "title": "Mate in 4 moves"
    },
    {
      "description": "GUI Yi - ZHOU Tao\nChina Team Championship 2008 ",
      "fen": "2bakab2/9/2n6/p1p1p3p/9/1NP6/P3Pn1c1/2NR1A3/C8/2BAKCr1c b - - 0 1",
      "id": "puzzle_3187",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NG JunMing - CHEN FaZuo\n2012 2nd SportAccord World Mind Games 2012 ",
      "fen": "2Ca1a3/4k4/3R1P3/6p1p/9/6P2/3r4P/B1n1B1N2/3KA4/c4A3 w - - 0 1",
      "id": "puzzle_3188",
      "title": "Mate in 4 moves"
    },
    {
      "description": "PU Fang Yao - SUN YongZheng\n2013 Sport Accord World Mind Game R1 ",
      "fen": "4k4/4a4/3ab4/3C1NP2/p1b6/1c7/2pp5/5A3/2nK5/5AB2 b - - 0 1",
      "id": "puzzle_3189",
      "title": "Mate in 4 moves"
    },
    {
      "description": "XIE Jing - NEI TieWen\n2014 the 6th Yang guanlin Cup Professional Man group 2014 ",
      "fen": "2ba2b2/4k4/3N3R1/9/9/2P1C4/4r1r1P/6c2/4A4/3K1A3 w - - 0 1",
      "id": "puzzle_3190",
      "title": "Mate in 4 moves"
    },
    {
      "description": "NG Chun Hei - HAIKOLA Petri\n2014 the 6th Yang guanlin Cup Over sea Group 2014 ",
      "fen": "2baR3R/1N1k5/9/p1P5p/6p2/4pn3/P7P/4B4/4Ar3/2BAK1Cr1 w - - 0 1",
      "id": "puzzle_3191",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHANG Yong - \u5f20\u7384\u5f08\n2014\u5e74\u6cb3\u5357\u9e64\u58c1\u5e02\u6d5a\u53bf\u7b2c\u4e09\u5c4a\u5bb6\u548c\u76db\u4e16\u00b7\u4e2d\u6b63\u82b1\u56ed\u676f\u8c61\u68cb\u516c\u5f00\u8d5b 2014 ",
      "fen": "2bakaR2/9/9/p3N3p/5C1n1/2B1P4/7r1/4B4/4AK3/3A4c w - - 0 1",
      "id": "puzzle_3192",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u4efb\u4ef2\u654f - \u90d1\u51cc\u5fd7\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "2bk1a3/4a4/4b1n2/4p1p1p/2P6/3R2P2/4P3P/N1nC2R2/2CrAr3/2B1KABc1 b - - 0 1",
      "id": "puzzle_3193",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5218\u4fca - \u674e\u6210\u4e4b\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "2bak3C/5P1R1/8n/p1p5p/9/5p3/P7P/1c2r4/9/2BAKA3 w - - 0 1",
      "id": "puzzle_3194",
      "title": "Mate in 4 moves"
    },
    {
      "description": "ZHAO JinCheng - WANG RuiXiang\n2014 China Xiangqi League 2014 ",
      "fen": "5k3/2N6/3a1a3/4P3p/6C2/4pp3/3n1c2c/4B4/4AC3/2BAK4 w - - 0 1",
      "id": "puzzle_3195",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SHEN Peng - DONG Fei\n2014 China Xiangqi League 2014 ",
      "fen": "2Ca2b2/4ak3/3c5/pR6p/5P3/2P6/P4r2P/4B4/3p5/4K1B2 b - - 0 1",
      "id": "puzzle_3196",
      "title": "Mate in 4 moves"
    },
    {
      "description": "\u5218\u7ee7\u5cf0 - \u9646\u5b89\u4eac\n2014\u5e74\u7b2c\u516d\u5c4a\u4e2d\u56fd\u5357\u5b81\u8c61\u68cb\u56fd\u9645\u9080\u8bf7\u8d5b\u516c\u5f00\u7ec4 2014 ",
      "fen": "3ak1b2/9/3a5/4P1P2/4r4/2n6/3R5/9/3K5/9 b - - 0 1",
      "id": "puzzle_3197",
      "title": "Mate in 4 moves"
    },
    {
      "description": "SUN HaoYu - ZHAO Ziyu\nChinese National Champion Man B 2014 ",
      "fen": "3a1a3/3kR4/9/8p/p3c4/5pP2/2P5P/2nr5/2N6/2B1KAB2 b - - 0 1",
      "id": "puzzle_3198",
      "title": "Mate in 4 moves"
    },
    {
      "description": "DONG XueWu - \u6c88\u7389\u6e05\n2014\u5e74\u6c5f\u82cf\u7701\u201c\u6e56\u6865\u676f\u201d\u8c61\u68cb\u9526\u6807\u8d5b 2014 ",
      "fen": "CCbak4/1P2a1c2/4b4/4p3p/3R5/9/2r1p3P/B3n4/4A4/4KAN2 b - - 0 1",
      "id": "puzzle_3199",
      "title": "Mate in 4 moves"
    },
    {
      "description": "YAO Desong - HU Michael \nNorth America  Cup Xiangqi Championship  2014 ",
      "fen": "2bk1R3/4a4/n8/p1pr4p/1R2CrP2/2P6/P3c3P/4B4/4A4/2B1KA3 b - - 0 1",
      "id": "puzzle_3200",
      "title": "Mate in 4 moves"
    },
    {
      "description": "LAI JunJie - TANAKA Atsushi\nWorld Xiangqi Championships 2015 ",
      "fen": "3akcR2/4a4/2C6/p3R3p/2p6/5rP2/P3P3c/2N1B4/4A4/2BrK4 w - - 0 1",
      "id": "puzzle_3201",
      "title": "Mate in 4 moves"
    }
  ],
  [
    {
      "description": "Ung Dau - HO Shing Kin\nCanadian National Champion 1998 ",
      "fen": "3ak1b2/4a4/4b1n2/p4R2p/2pnC1Pr1/9/P1P1P3P/1c2C1N2/2N1A4/2BA1K2c b - - 0 1",
      "id": "puzzle_3202",
      "title": "Mate in ? moves"
    },
    {
      "description": "HU RongHua - YANG GuanLin\n5 Ram Cup Xiangqi Championship 1981 ",
      "fen": "3k1a3/1R5C1/4ba2b/p5N1p/9/9/4P3P/2nrB3B/6C2/c3KA3 w - - 0 1",
      "id": "puzzle_3203",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHANG Gao Yang - YU DeMing\n ",
      "fen": "3akr3/4a4/4R4/p1N5p/6p2/2P4c1/P3p1r1P/5A1R1/2n5N/2BA1KB2 b - - 0 1",
      "id": "puzzle_3204",
      "title": "Mate in ? moves"
    },
    {
      "description": "JIANG ChuCheng - HUANG YuYing\n ",
      "fen": "2bak4/9/2nab3n/p1N3p2/8p/2PC1RP2/8P/8B/4A4/c1rA1K3 w - - 0 1",
      "id": "puzzle_3205",
      "title": "Mate in ? moves"
    },
    {
      "description": "TRUONG A Ming - KE YongQing\nWorld Xiangqi Champion Tournament 1999 ",
      "fen": "2b1ka3/4a4/3c4b/N7p/9/3n5/P7P/1R1C5/2r1A4/3K1A3 b - - 0 1",
      "id": "puzzle_3206",
      "title": "Mate in ? moves"
    },
    {
      "description": "HU RongHua - WANG HongLu\nChinese National Champion 1983 ",
      "fen": "3aka3/2r4c1/3C2R2/p1p1pN2p/7C1/9/P3P3P/2n5B/4A4/3AK4 w - - 0 1",
      "id": "puzzle_3207",
      "title": "Mate in ? moves"
    },
    {
      "description": "TAO HanMing - XU YinChuan\nYinli Cup Champion 2000 ",
      "fen": "2bC3R1/4ak3/5c3/p5r2/5N3/P1rp5/8P/N3C4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_3208",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHAO GuoRong - HUANG ZengGuang\nChina Team Championship 1990 ",
      "fen": "2b2RbC1/4k4/4n4/r3p4/4c1p2/9/5R2P/4B4/4A4/3A1Kr2 w - - 0 1",
      "id": "puzzle_3209",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU ZhongMing - DENG YuanCheng\nMalaysia Open 2001 ",
      "fen": "2ba1kb2/9/2NRc4/p7p/2p3p2/9/P1P2rP1P/2N1B4/4n4/2BK5 b - - 0 1",
      "id": "puzzle_3210",
      "title": "Mate in ? moves"
    },
    {
      "description": "MOU HaiQin - Thianchai SARINNAPHAKORN\nWorld Xiangqi Championships 2001 ",
      "fen": "4ka3/2n1a4/8b/2p2N2p/2c6/9/1R6P/4B4/9/3AKA3 w - - 0 1",
      "id": "puzzle_3211",
      "title": "Mate in ? moves"
    },
    {
      "description": "CAI RongZhou - YIN HaiFeng\nIXPA IT 2001 ",
      "fen": "R4a3/2r1N4/3k5/8p/2b2N3/9/8P/1p2B4/4A4/1c2KAB2 w - - 0 1",
      "id": "puzzle_3212",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG FuPing - WANG YongQiang\nChina Team Championship 1996 ",
      "fen": "1R3a3/3k5/3ab4/9/p8/cNP2n3/7n1/5A1p1/9/2BA1KB1r b - - 0 1",
      "id": "puzzle_3213",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHANG ShenHong - JIN Bo\nPai Wei TV supper ranking Tournament 2001 ",
      "fen": "2N2a3/2R6/4ka2n/p8/6b2/9/P5C2/c2A1A3/9/4rK3 w - - 0 1",
      "id": "puzzle_3214",
      "title": "Mate in ? moves"
    },
    {
      "description": "XIAO GeLian - XU TianHong\nChina Team Championship 1991 ",
      "fen": "C1ba1k3/3ca4/4b4/1N4c1p/4pN3/P8/5n3/4B4/3KA4/5A3 b - - 0 1",
      "id": "puzzle_3215",
      "title": "Mate in ? moves"
    },
    {
      "description": "YOU YingQin - LIU Jun\nChinese National sports 2002 ",
      "fen": "4ka3/4a4/2N1b4/p1p5p/2b6/9/P3r3P/2C1p4/1C1rA2R1/R1B1KABc1 b - - 0 1",
      "id": "puzzle_3216",
      "title": "Mate in ? moves"
    },
    {
      "description": "GUO LiPing - DANG GuoLei\nChinese National sports 2002 ",
      "fen": "3ak4/4a4/c3b4/3P2N2/2b1C4/8P/9/1n1AB4/4A4/2B2K3 w - - 0 1",
      "id": "puzzle_3217",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG JiRong - KE YongQing\nChina Team Championship 1984 ",
      "fen": "2b6/4k4/3N5/p8/3R5/P8/2p6/9/3KA4/1r7 w - - 0 1",
      "id": "puzzle_3218",
      "title": "Mate in ? moves"
    },
    {
      "description": "CAO WeiMin - MA FengYou\nChina Team Championship 1984 ",
      "fen": "5aC2/9/2Rak4/p2P2p2/2p5p/6P2/P1r2n3/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3219",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU Bo - REN ZhanQuo\nChina Team Championship 1984 ",
      "fen": "4ka3/4a4/4b4/C8/2b5R/9/5r2P/4B1n2/9/3K2B2 b - - 0 1",
      "id": "puzzle_3220",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU DianZhong - KE YongQing\nChinese National Champion 1990 ",
      "fen": "3R1ab2/3rk4/3nb4/3N2r1p/3C2p2/9/P6RP/6c1B/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3221",
      "title": "Mate in ? moves"
    },
    {
      "description": "LI DeLing - MA GeYing\nChinese National Champion 1990 ",
      "fen": "4R4/5k3/9/p2r4p/2N3p2/2Pp5/P8/9/4K4/2BA2B2 w - - 0 1",
      "id": "puzzle_3222",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU JianMiao - ZHENG XinNian\nChinese National Champion 1990 ",
      "fen": "3k1a3/2P3C2/4R4/9/9/5r3/8P/4B4/2c1Ap3/2BAK4 w - - 0 1",
      "id": "puzzle_3223",
      "title": "Mate in ? moves"
    },
    {
      "description": "CENG DongPing - DONG DingYi\nChina Team Championship 1991 ",
      "fen": "5k3/C3a4/3ab4/1P2p3R/5rr2/9/PnR5c/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3224",
      "title": "Mate in ? moves"
    },
    {
      "description": "WU ZhengWei - TONG BenPing\nChina Team Championship 1992 ",
      "fen": "5a1C1/4k4/2R2a3/p3N3p/9/2p6/4P4/5n3/3r5/5K3 w - - 0 1",
      "id": "puzzle_3225",
      "title": "Mate in ? moves"
    },
    {
      "description": "GAN XiaoJin - Zhou Qun\nChina Team Championship 1992 ",
      "fen": "C6R1/4k4/9/4N3p/6p2/9/P3P3P/4K2c1/1r7/2BA1Ac2 w - - 0 1",
      "id": "puzzle_3226",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZANG RuYi - ZHONG YiSheng\nChina Team Championship 1993 ",
      "fen": "2b1ka3/n3a4/4b4/p2R1N2p/5P3/P3C4/8P/2R1B4/3KA1c2/cr3AB2 w - - 0 1",
      "id": "puzzle_3227",
      "title": "Mate in ? moves"
    },
    {
      "description": "REN JianPing - GAO JiXian\nChina Team Championship 1999 ",
      "fen": "4kab2/rc2a4/2R6/p1p1p3p/9/2P2N3/P3P3P/r7B/3RA4/3AK4 w - - 0 1",
      "id": "puzzle_3228",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG Bin - NEI TieWen\nChina Team Championship 1999 ",
      "fen": "2Rckab2/3R5/3a5/p3C3p/9/2P6/P7r/4B4/4A4/1r2KAB2 w - - 0 1",
      "id": "puzzle_3229",
      "title": "Mate in ? moves"
    },
    {
      "description": "YU YunTao - XING Dong\nChina Team Championship 1999 ",
      "fen": "1r2kab2/3R1R1c1/2nabN3/p1C5p/2p3p2/1C7/P3P1P2/9/3K2r2/2BA1A3 w - - 0 1",
      "id": "puzzle_3230",
      "title": "Mate in ? moves"
    },
    {
      "description": "JIN HaiYing - HU Ming\nChina Team Championship 1999 ",
      "fen": "4ka3/4a4/1r2R4/1N6p/p2Rc1p2/6P2/P2r5/B8/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_3231",
      "title": "Mate in ? moves"
    },
    {
      "description": "LI ZhiPing - ZHANG ShenHong\nChinese National Champion 1998 ",
      "fen": "3k1ab2/4a4/4b4/2P1C1C2/5c2p/P5R2/2r5P/4B4/4An3/4K1B2 w - - 0 1",
      "id": "puzzle_3232",
      "title": "Mate in ? moves"
    },
    {
      "description": "TEMPELMANN Claus - TRUONG A Ming\nWorld Xiangqi Championships 1997 ",
      "fen": "7N1/5k3/4ba3/3N5/6b1P/9/P8/6n2/c8/2p1K4 b - - 0 1",
      "id": "puzzle_3233",
      "title": "Mate in ? moves"
    },
    {
      "description": "YAN Dot San - HU YunXi\nWorld Xiangqi Championships 1997 ",
      "fen": "R5b2/5k3/2NNba3/6p2/8p/5n3/Pr7/4BA3/4A4/4K1B2 w - - 0 1",
      "id": "puzzle_3234",
      "title": "Mate in ? moves"
    },
    {
      "description": "CHEN YaoLin - MO ZhanTu\nHong Kong Team Champion 2001 ",
      "fen": "1Cbak4/1c2a1PR1/b5r2/9/9/9/9/4B4/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_3235",
      "title": "Mate in ? moves"
    },
    {
      "description": "DENG RongSen - CHEN ZhenJie\nHong Kong Team Champion 2001 ",
      "fen": "3n1kb2/3Ra4/1r2b4/p7p/2p1N3r/9/2P1p4/5C3/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_3236",
      "title": "Mate in ? moves"
    },
    {
      "description": "SU FuYin - CHEN ZhiEn\nHong Kong Individual Championship 2002 ",
      "fen": "2bak1bR1/4a4/3r5/p3p3p/9/4c1C2/P1nc1R2P/2N5B/4K4/2BA1A3 w - - 0 1",
      "id": "puzzle_3237",
      "title": "Mate in ? moves"
    },
    {
      "description": "OUYANG Qilin - ZHANG GuoFeng\nChinese National Champion 2002 ",
      "fen": "3k2b2/R6C1/2c1b4/1r6C/2pn2pr1/6P2/P4R2P/2Nn2N2/1c2A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_3238",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU JianMiao - DONG XuBin\nChinese National Champion 2002 ",
      "fen": "R3kab2/4a4/4b4/9/9/9/9/3A4C/5p1r1/3AK4 b - - 0 1",
      "id": "puzzle_3239",
      "title": "Mate in ? moves"
    },
    {
      "description": "HE Jing - YOU YingQin\nChinese National Champion 2002 ",
      "fen": "5a3/3k5/4R4/p1cN4p/3n5/3C5/4P4/3C5/4A4/4Krc2 w - - 0 1",
      "id": "puzzle_3240",
      "title": "Mate in ? moves"
    },
    {
      "description": "YUAN HongLiang - JING XueYi\nChinese National Champion 2002 ",
      "fen": "2ba1k3/4a4/4b4/9/6C2/8P/9/2n2n2B/3p1N3/4K2C1 b - - 0 1",
      "id": "puzzle_3241",
      "title": "Mate in ? moves"
    },
    {
      "description": "SHOSHI Kazuharo - TJHAI Tjie Kiang\nAsian xiangqi Championship 2002 ",
      "fen": "2bak4/4a2N1/1CP1b4/p8/4R2P1/2B6/1r7/5K3/3nA1p2/c1BA5 b - - 0 1",
      "id": "puzzle_3242",
      "title": "Mate in ? moves"
    },
    {
      "description": "SUN QingLi - ZHANG ShenHong\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "4kab1C/n8/4Ca3/p8/2N6/9/P3P3P/B8/1r3R1r1/4K4 b - - 0 1",
      "id": "puzzle_3243",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG GuoMin - GAO PingGui\nChina Team Championship 2003 ",
      "fen": "2bakab2/9/6N2/p3p3p/2p1n4/2P2R3/P5C1P/4B1p1c/1n1KA4/7r1 b - - 0 1",
      "id": "puzzle_3244",
      "title": "Mate in ? moves"
    },
    {
      "description": "JIRAPARKDEEPAN Vithaya - LU George\nAsian Xiangqi Individual Championships 2003 ",
      "fen": "2R3b2/3ka4/C2ab4/p1P1p3p/9/9/4P3P/1n2r4/4Ap3/3K5 b - - 0 1",
      "id": "puzzle_3245",
      "title": "Mate in ? moves"
    },
    {
      "description": "CHEN QiMing - LI Qun\nChina National Xiangqi League 2003 ",
      "fen": "2bak4/4a4/1c2b4/2R4PC/2c6/1C7/8r/9/4A2r1/3AKR3 b - - 0 1",
      "id": "puzzle_3246",
      "title": "Mate in ? moves"
    },
    {
      "description": "JIN Bo - LI DeZhi\nChina National Xiangqi League 2003 ",
      "fen": "2bak4/4a4/9/2p6/4P3N/1R2n4/8c/4B4/4Ar3/2BK1A3 b - - 0 1",
      "id": "puzzle_3247",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZONG YongSheng - ZHANG YingFu\nChina Team Championship 1990 ",
      "fen": "3a1ab2/3k3R1/4b4/p2r4p/9/4P4/P4np1P/4B4/8N/3AKAB2 b - - 0 1",
      "id": "puzzle_3248",
      "title": "Mate in ? moves"
    },
    {
      "description": "YANG Jian - YU YouHua\nChina Team Championship 1990 ",
      "fen": "4kab2/4a4/b1C2c3/p7p/6R2/2P3n2/P8/6n2/5K3/2B6 b - - 0 1",
      "id": "puzzle_3249",
      "title": "Mate in ? moves"
    },
    {
      "description": "SUN ShouHua - LIU LiShan\nChina Team Championship 1990 ",
      "fen": "9/9/3k1N3/8p/2P2n3/4R4/P5r1P/B8/4K4/c8 w - - 0 1",
      "id": "puzzle_3250",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHENG YiTing - TAGUCHI F.\nAsian xiangqi Championship 2004 ",
      "fen": "R1r1kab2/4a4/4b1n2/1N4c1p/2p1p4/9/R1Pr4P/N2CB4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3251",
      "title": "Mate in ? moves"
    },
    {
      "description": "LING LeeKiong - TAGUCHI F.\nAsian xiangqi Championship 2004 ",
      "fen": "3ak1b2/3Ra4/c1R5r/1r6p/2p6/9/2P1np2P/2N1C4/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_3252",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG Yang - ZHUANG YuTing\nYANG QuanLin Cup Champion 2004 ",
      "fen": "9/4a4/1C1abk1NR/8p/p8/4P1P2/3p4P/7rB/4K4/c1B2A3 w - - 0 1",
      "id": "puzzle_3253",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU JianMiao - CHEN JianDong\nGuan Nan Tang Gou Cup Xiangqi Championships 2005 ",
      "fen": "R4a3/3k5/3a5/p3p1p1p/6P2/9/2rNc2RP/r2C5/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_3254",
      "title": "Mate in ? moves"
    },
    {
      "description": "WU Kui Lin+GAO YiPing - XU TianHong+ZHANG GuoFeng\nGuan Nan Tang Gou Cup Xiangqi Championships 2005 ",
      "fen": "2b1ka3/4a4/7N1/8P/p3n4/4r4/1R7/3K5/9/3A5 b - - 0 1",
      "id": "puzzle_3255",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIANG HuoCai - KNAB Reinhard\nWorld Xiangqi Championships 2005 ",
      "fen": "5abC1/3k5/9/p2r4p/4R4/PNc6/8P/3A5/4K3c/3A2B2 w - - 0 1",
      "id": "puzzle_3256",
      "title": "Mate in ? moves"
    },
    {
      "description": "DEKKER Alian - ARNOUT  De Leeuw\nWorld Xiangqi Championships 2005 ",
      "fen": "R2aR4/5k3/1c2b4/4C4/3r5/4P1Pn1/9/4B4/4A4/3AKN1r1 w - - 0 1",
      "id": "puzzle_3257",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHANG ZhiGuo - XU TianHong\nChinese National Champion 2005 ",
      "fen": "2b1kc3/9/5a3/9/4r4/2P6/9/5A3/3R1K3/2B6 b - - 0 1",
      "id": "puzzle_3258",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU DaHua - ZHAO ShunXin\nChinese National Champion 2006 ",
      "fen": "2ba5/9/3ak4/p2R4p/9/p8/7n1/5A3/2C6/1rBA1KB2 w - - 0 1",
      "id": "puzzle_3259",
      "title": "Mate in ? moves"
    },
    {
      "description": "Lv Qin - JIN So\nChinese National Champion 2006 ",
      "fen": "4k3R/4a4/4b4/9/9/9/4r4/9/4Ar3/3CK1B2 b - - 0 1",
      "id": "puzzle_3260",
      "title": "Mate in ? moves"
    },
    {
      "description": "Lv Qin - WANG Yang\nWorld Xiangqi masters MMI Final 2006 ",
      "fen": "3ak1b2/r8/4b4/2P5p/9/PR7/4p2nP/4B4/4A4/4KAB2 b - - 0 1",
      "id": "puzzle_3261",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU DaHua - TIAN ChangXing\nChinese National Champion 2007 ",
      "fen": "2ba1ab2/5k3/1P6n/c5p1p/2r6/2C6/2R3P2/4C1N2/9/2BAKAB1c w - - 0 1",
      "id": "puzzle_3262",
      "title": "Mate in ? moves"
    },
    {
      "description": "TORNQVIST Mikko - KNAB Reinhard\nWorld Xiangqi Championships 2007 ",
      "fen": "2bak1bc1/4a4/4n4/p3C4/5r2p/3NPR3/6r1P/4CR2B/4A4/2BA1K3 w - - 0 1",
      "id": "puzzle_3263",
      "title": "Mate in ? moves"
    },
    {
      "description": "WU JunQiang - JIANG Chuan\nChina National Xiangqi League 2007 ",
      "fen": "c3kab2/2NRa4/4b4/9/9/C8/P8/4r4/9/4KAB1n w - - 0 1",
      "id": "puzzle_3264",
      "title": "Mate in ? moves"
    },
    {
      "description": "HUANG HaiLin - MIAO LiMing\nChina National Xiangqi League 2007 ",
      "fen": "C2k1a3/2P1a4/9/p5p1p/2b6/6P2/P7P/3R1K3/cc7/2B3r2 b - - 0 1",
      "id": "puzzle_3265",
      "title": "Mate in ? moves"
    },
    {
      "description": "Cheng JiJun - CHIU Yu Kuen\nChinese National Champion 2006 ",
      "fen": "3ak4/5R2R/3rC4/pc7/9/9/P3c1r1P/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_3266",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU ZongZe - XU WenXue\nChinese National Champion 2006 ",
      "fen": "9/2R1R4/3k5/3r4p/6p2/8P/P3cr3/9/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3267",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU PeiGang - WANG RuiXiang\nChina Team Championship 2008 ",
      "fen": "3a2R2/7Rc/5k3/p5p2/6b2/9/P3r3P/6r2/9/3AKA3 w - - 0 1",
      "id": "puzzle_3268",
      "title": "Mate in ? moves"
    },
    {
      "description": "YAN ChengLong - CHEN QiMing\nChina Team Championship 2005 ",
      "fen": "2bak4/2C1a4/4b1n2/p1C1p1p1p/9/2PR2P1P/P8/4BAc2/1rN1A4/3K3c1 b - - 0 1",
      "id": "puzzle_3269",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU Bo - XIAO GeLian\nJufeng Cup Xiangqi MasterNational Championships 2000 ",
      "fen": "3k1a3/n1N3RC1/5a3/p7C/4p4/9/P3P3P/B8/2nrAK3/1c4B2 w - - 0 1",
      "id": "puzzle_3270",
      "title": "Mate in ? moves"
    },
    {
      "description": "QIN JinSong - QIN HuaZhi\nEarth Cup xiangqi tournament 2008 ",
      "fen": "4ka3/4aN3/4b4/8p/6b2/9/5R2P/3nC2C1/5K3/1cBr5 b - - 0 1",
      "id": "puzzle_3271",
      "title": "Mate in ? moves"
    },
    {
      "description": "HU RongHua - YAN YuSuo\nChinese National Champion 1986 ",
      "fen": "1R3a3/3kan3/3c5/3N5/4R1p2/3r5/P5P1P/9/3c5/4K4 w - - 0 1",
      "id": "puzzle_3272",
      "title": "Mate in ? moves"
    },
    {
      "description": "LUO ZhongCai - REN ZhanQuo\nChina Team Championship 1984 ",
      "fen": "2b1kab2/9/3P5/p3C3p/3R5/4P4/P1r3p2/9/8N/2c1K4 w - - 0 1",
      "id": "puzzle_3273",
      "title": "Mate in ? moves"
    },
    {
      "description": "SHANG Wei - WANG YueFei\nChina Team Championship 1998 ",
      "fen": "4kab2/4a4/2c1b4/4C4/p3p4/6B1P/P2R5/4B4/9/3K1rC2 w - - 0 1",
      "id": "puzzle_3274",
      "title": "Mate in ? moves"
    },
    {
      "description": "LI HuiDong - ZANG RuYi\nSeven Star Cup International Invitational Tournament 1988 ",
      "fen": "9/3k5/3cb4/p2P4p/8r/9/P3R4/3C5/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_3275",
      "title": "Mate in ? moves"
    },
    {
      "description": "Lv Qin - ZHAO GuoRong\nGuangdong TV fast xiangqi game 1999 ",
      "fen": "3ak1b2/1R3P3/N2ab4/9/9/6B2/P6p1/4BAn2/4Kr3/9 w - - 0 1",
      "id": "puzzle_3276",
      "title": "Mate in ? moves"
    },
    {
      "description": "HU RongHua - ZHAO GuoRong\nYinli Cup Champion 1992 ",
      "fen": "r2a1k3/6R2/3a5/pRC4rp/2N3b2/9/P3n1P1P/4B4/2C1A4/4KAB2 w - - 0 1",
      "id": "puzzle_3277",
      "title": "Mate in ? moves"
    },
    {
      "description": "HU RongHua - LI LaiQun\nNA NA ",
      "fen": "1Cba1k3/2N1a4/b7R/4p3p/6p2/3c5/3N4P/9/4Ancr1/4K4 b - - 0 1",
      "id": "puzzle_3278",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHENG YiYing - SHANG ZhiHua\nChina Team Championship 2006 ",
      "fen": "1c2ka1r1/3R5/n3b1n1c/4p3p/3P5/2R1C1p2/4P1P1P/3CB1N2/9/3AKrB2 w - - 0 1",
      "id": "puzzle_3279",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG JiaLiang - LI LaiQun\nNA NA ",
      "fen": "2bakc3/4a1R2/4b4/p2RCP2p/9/1p7/Pn2r3P/4B4/4A4/3K1AB2 w - - 0 1",
      "id": "puzzle_3280",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHU XueZeng - HU RongHua\nChinese National Champion 1964 ",
      "fen": "3ak4/4a4/4b4/8R/2b1N2P1/9/1r7/4BA2n/2p1A4/4K2c1 b - - 0 1",
      "id": "puzzle_3281",
      "title": "Mate in ? moves"
    },
    {
      "description": "YANG DeQi - YU YouHua\nWacker Real Estate Cup xiangqi Master Champion 2006 ",
      "fen": "1Ccak1b2/1R2a4/6C2/5r2p/p1b1r1p2/2P6/P5P2/4B4/3RA4/3K1AB1c w - - 0 1",
      "id": "puzzle_3282",
      "title": "Mate in ? moves"
    },
    {
      "description": "LOW BoonNgee - TRENH A Sang\nAsian xiangqi Championship 2006 ",
      "fen": "2bk1a3/4a4/4b4/p2R2p2/3r4p/P1C3P2/5n2P/4B4/9/3AKAB2 b - - 0 1",
      "id": "puzzle_3283",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU WenXue - ZHi Hui\nChongQing Xiangqi Tournament 2006 ",
      "fen": "2b6/1CN1nk3/5a3/p1p1p4/6b1p/2PN3r1/P3P4/9/4KR3/2BA1Ac1c w - - 0 1",
      "id": "puzzle_3284",
      "title": "Mate in ? moves"
    },
    {
      "description": "FAN XiangJun - \u674e\u8d3a\nChu He Han Jie Cup National xiangqi level tournament 2006 ",
      "fen": "4kab2/1R2a4/r3b1R2/p2rC1p1p/9/2P3P2/P3P3P/2c6/4A4/2BAK1B2 w - - 0 1",
      "id": "puzzle_3285",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHENG Hongbiao - \u6234\u91d1\nChuanshan Cup Nation xiangqi level tournament 2007 ",
      "fen": "5ab2/1R2a1cC1/c2kbR2C/p1p6/9/2P6/P3P3P/6r2/4K4/2Br2B2 w - - 0 1",
      "id": "puzzle_3286",
      "title": "Mate in ? moves"
    },
    {
      "description": "LU George - YE HanMin\nAsian Xiangqi Individual Championships 2007 ",
      "fen": "2ba2b2/n1N2k3/5aP2/p1P3n1p/3Np4/8P/cC2P4/4BA3/5C3/1c2KAB2 w - - 0 1",
      "id": "puzzle_3287",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU YinChuan - LU RuiZhan\nThe world mind sports games 2008 ",
      "fen": "3k1abCC/R8/3a5/6p1p/1n1r5/3c2P2/1R2P3P/4B4/4A4/c1B1K4 w - - 0 1",
      "id": "puzzle_3288",
      "title": "Mate in ? moves"
    },
    {
      "description": "MATSUNO Yoichiro - TESSEN Joern\nWorld Xiangqi Championships 2009 ",
      "fen": "2bak2R1/4a4/4b4/p5R1p/6p2/2P1r4/8P/9/3K5/4r1B2 b - - 0 1",
      "id": "puzzle_3289",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHAO XinXin - Nguyen Thanh Bao\nWorld Xiangqi Championships 2009 ",
      "fen": "3N1a3/1R7/4bk3/p3p3p/5np2/6P2/P3r2cP/3CC4/4A4/2B1KrB2 w - - 0 1",
      "id": "puzzle_3290",
      "title": "Mate in ? moves"
    },
    {
      "description": "PAN ZhenBo - YANG BaoZhong\nLiaoning Province Snowflake Sumio Cup Tournament 2009 ",
      "fen": "9/2Nk5/3aP3b/3P5/1P7/9/9/2nC1A3/4pK3/c8 w - - 0 1",
      "id": "puzzle_3291",
      "title": "Mate in ? moves"
    },
    {
      "description": "DO Yogi Thang - HU Michael \n2009 North American Invitation Tournament 2009 ",
      "fen": "8C/1R2C2R1/2n1bk2b/4p4/2p2r3/p8/2r5P/9/4A4/2B1KA3 w - - 0 1",
      "id": "puzzle_3292",
      "title": "Mate in ? moves"
    },
    {
      "description": "LI JiaHua - CAO Lin\n2009\u5e74\u9996\u5c4a\u5168\u56fd\u667a\u529b\u8fd0\u52a8\u4f1a\u8c61\u68cb\u8d5b\u4e13\u4e1a\u7ec4\u7537\u5b50\u4e2a\u4eba 2009 ",
      "fen": "2Rak4/9/3aN4/9/p3c4/4C3P/P3Pr3/1C7/4A4/c3KA3 w - - 0 1",
      "id": "puzzle_3293",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u6768\u6fb9 - \u674e\u7acb\u519b\n2009\u5e74\u4e2d\u5c71\u201c\u516d\u57ce\u5e02\u201d\u8c61\u68cb\u53cb\u8c0a\u5bf9\u6297\u8d5b 2009 ",
      "fen": "6R2/4ak3/3c1a3/p7p/2p3p2/9/P4rP1P/7R1/4r4/2BnKCB2 w - - 0 1",
      "id": "puzzle_3294",
      "title": "Mate in ? moves"
    },
    {
      "description": "LI DeZhi - CAO YanLei\n2009\u5e74\u5e7f\u4e1c\u7701\u8c61\u68cb\u9526\u6807\u8d5b\u7ade\u8d5b 2009 ",
      "fen": "2R2a1r1/3k2c2/3a5/p2R4p/7c1/9/P7P/9/9/2B1KAB2 w - - 0 1",
      "id": "puzzle_3295",
      "title": "Mate in ? moves"
    },
    {
      "description": "LI DeZhi - \u4e01\u90a6\u548c\n2009 Fenggang Town, Dongguan second quarter Xiangqi Open 2009 ",
      "fen": "3NR4/3r1k3/1r1a4b/7Pp/2P6/9/8P/5A3/9/2B1KAB2 w - - 0 1",
      "id": "puzzle_3296",
      "title": "Mate in ? moves"
    },
    {
      "description": "WAN ChunLin - YANG DeQi\nChina National Xiangqi League 2008 ",
      "fen": "4R4/1n1Ra4/4ka2c/p2Pp3C/2b1r4/2r3P2/P7P/9/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3297",
      "title": "Mate in ? moves"
    },
    {
      "description": "UONG DuongBac - TRENH A Sang\nVietnam The 4th Phuong Trang Xiangqi cup open 2010 ",
      "fen": "2ba1n3/5k1r1/3cNNc2/p2P5/6b2/7p1/P5R2/4C4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3298",
      "title": "Mate in ? moves"
    },
    {
      "description": "HUANG Haoyi - LIANG Yi Le\nHong Kong Individual Championship 2011 ",
      "fen": "3aka3/3c1P2c/b4R3/2r6/p3C4/4P4/P7P/4B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3299",
      "title": "Mate in ? moves"
    },
    {
      "description": "MA YuLin - PENG Oscar \nNorth America  Cup Xiangqi Championship  2011 ",
      "fen": "N2aka3/6r2/4b4/8R/2p6/2Pnp4/4c3P/9/9/2BAKA3 b - - 0 1",
      "id": "puzzle_3300",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHENG Guoliang - DING JianQuan\nHong Kong Individual Championship 1998 ",
      "fen": "1R7/CN7/4ka3/2p6/9/2p5p/4P3c/4B4/4Ar3/2B1KA3 w - - 0 1",
      "id": "puzzle_3301",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHANG YongXiang - HO Sammy\nHong Kong Individual Championship 1998 ",
      "fen": "4k4/4a4/9/p7p/2n1R4/4p4/P8/5rn2/4K4/9 b - - 0 1",
      "id": "puzzle_3302",
      "title": "Mate in ? moves"
    },
    {
      "description": "MI Zhen Zhu - LIU TieHan\n2003 Yangquan super chess tournament 2003 ",
      "fen": "3Rkab2/9/4b4/2p1p3p/p3c4/9/P4r2P/4C3B/4AR1n1/2BAK1Cr1 b - - 0 1",
      "id": "puzzle_3303",
      "title": "Mate in ? moves"
    },
    {
      "description": "LEONG SioMan - GAI MingQiang\nChina Team Championship 2009 ",
      "fen": "3nkab2/3RaR3/4b1n2/p1N1p3p/4P1p2/2P4r1/6P1P/4C4/1r2A4/cNc1KAB2 b - - 0 1",
      "id": "puzzle_3304",
      "title": "Mate in ? moves"
    },
    {
      "description": "JIANG Chuan - CHEN XinAn\nChina Team Championship 2009 ",
      "fen": "3k5/4R2N1/n8/p4c2p/6b2/P8/8P/5r3/3c5/3AKAB2 w - - 0 1",
      "id": "puzzle_3305",
      "title": "Mate in ? moves"
    },
    {
      "description": "TANG HaoWen - ZHONG Jiangning\nHong Kong Individual Championship 2002 ",
      "fen": "4kab2/4a4/2n1b4/p7p/4R4/2P1P4/P7P/3A1pr2/2c1K4/cR1A5 b - - 0 1",
      "id": "puzzle_3306",
      "title": "Mate in ? moves"
    },
    {
      "description": "CHAN Ling Fai - LAI Robin\nHong Kong Individual Championship 2003 ",
      "fen": "3ak1R2/4a4/4b4/9/4c3p/3r5/1n1r5/2R1B4/4A3C/2B1KA3 b - - 0 1",
      "id": "puzzle_3307",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHENG ZiQiang - \u65b9\u529b\u884c\nHong Kong Individual Championship 2009 ",
      "fen": "1c1k1a1R1/9/4PR3/9/9/2B6/1p2P4/3r5/5K3/3p5 w - - 0 1",
      "id": "puzzle_3308",
      "title": "Mate in ? moves"
    },
    {
      "description": "WU Qiang - ZHEN Qihua\nHong Kong Team Champion 2002 ",
      "fen": "1R1a1k1N1/4Rc3/9/p7p/2p1N4/4r4/3r2P1P/2n1B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3309",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u9ec4\u88d4\u660c - \u674e\u5609\u8f89\nHong Kong Team Champion 2003 ",
      "fen": "3a1N3/3k5/4b4/p8/2p4P1/9/4c4/4B4/1n2A4/4KAB2 b - - 0 1",
      "id": "puzzle_3310",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u674e\u6e05\u6e05 - LIAO Hao Ran\nHong Kong Team Champion 2011 ",
      "fen": "1nbak2r1/4a4/4b4/p1p3p1p/3NP4/2P3P2/PR6P/9/2n1A4/2BA1KB2 b - - 0 1",
      "id": "puzzle_3311",
      "title": "Mate in ? moves"
    },
    {
      "description": "LONG GuangMing - ZHOU ShiJie\nHong Kong Team Champion 2008 ",
      "fen": "4ka3/4a4/c3b1n2/R1PPp1C1p/4cR3/6P2/4r3P/9/1r2A4/3AK1B2 b - - 0 1",
      "id": "puzzle_3312",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u5362\u4f1f\u5f3a - \u5434\u5609\u73ae\nHong Kong Team Champion 2008 ",
      "fen": "2bk1R1R1/4a4/2n1bc3/p3p3p/3r1n3/8P/2p1c4/4B1C1N/4N4/2BAKA3 b - - 0 1",
      "id": "puzzle_3313",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u4f59\u6893\u5065 - ZHANG JinCong\nHong Kong Team Champion 2008 ",
      "fen": "1Rb1kab2/4a4/8n/3NP4/6p1p/9/p5P1P/4n4/4A4/1crAK4 b - - 0 1",
      "id": "puzzle_3314",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u9ec4\u80b2\u9e9f - LIU YongLiang\nHong Kong Team Champion 2008 ",
      "fen": "6n2/3Ra4/2C2kC1b/p3N3p/9/2P3P2/P3c3P/7rN/4A2c1/2BK1rBR1 w - - 0 1",
      "id": "puzzle_3315",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u5f20\u5b50\u61cb - \u987e\u632f\u5f3a\nHong Kong Team Champion 2008 ",
      "fen": "2R2Rb2/4k4/5a3/p1p2r2p/5np1c/1r7/P1P3P1P/4B4/4A4/3CKAB2 w - - 0 1",
      "id": "puzzle_3316",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHONG Jiangning - \u5362\u9526\u534e\nHong Kong Team Champion 2008 ",
      "fen": "3k1abC1/4a4/3c5/p3R1p1p/3N5/3C5/3n2P1P/n4r3/9/N3K1B2 w - - 0 1",
      "id": "puzzle_3317",
      "title": "Mate in ? moves"
    },
    {
      "description": "LEI Xong Cai - \u7518\u656c\u5b87\nHong Kong Team Champion 2009 ",
      "fen": "1R1a2br1/4Nk3/b5R2/C1p1p3p/4r4/2P6/P3P3c/2N6/4A4/2B1KABc1 w - - 0 1",
      "id": "puzzle_3318",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHOU ShiJie - LIU YongLiang\nHong Kong Team Champion 2009 ",
      "fen": "4R4/5k3/r8/9/2N6/9/p5p2/5A3/9/2BAK1B2 w - - 0 1",
      "id": "puzzle_3319",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u5f20\u8fbe\u671b - LUN Zi Yun\nHong Kong Team Champion 2009 ",
      "fen": "C3ka3/9/b1c1ba3/4p4/2p3pn1/P8/4P1P1P/3R5/4AK3/2B3r2 b - - 0 1",
      "id": "puzzle_3320",
      "title": "Mate in ? moves"
    },
    {
      "description": "WONG Wan Heng - CHEN TuJiong\nAsian Xiangqi Individual Championships 2011 ",
      "fen": "C2k1ab2/4a4/2n1b1n2/2p5p/4C1p2/2P6/P1c2R3/2r1B4/4A4/4KAB2 w - - 0 1",
      "id": "puzzle_3321",
      "title": "Mate in ? moves"
    },
    {
      "description": "SHOSHI Kazuharo - MOU HaiQin\nYANG QuanLin Cup Champion 2010 Over Sea ",
      "fen": "2b1ka3/3Pa4/2c4r1/4p3p/p1R1C4/4p4/P7P/4r4/4N4/3AK1R2 w - - 0 1",
      "id": "puzzle_3322",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU PeiGang - WANG RuiXiang\nChina Team Championship 2008 ",
      "fen": "3a2R2/7Rc/5k3/p5p2/6b2/9/P3r3P/6r2/9/3AKA3 w - - 0 1",
      "id": "puzzle_3323",
      "title": "Mate in ? moves"
    },
    {
      "description": "TIAN ChangXing - XUE WenQiang\nChina Team Championship 2008 ",
      "fen": "R1b1ka3/2Nca4/4b4/4C1n1p/9/2N1P4/P5r1P/4B3B/4Ap3/4KA1c1 w - - 0 1",
      "id": "puzzle_3324",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG YueFei - JIN Bo\nChinese National Champion 2011 ",
      "fen": "C3k4/4a4/b3ba3/p3p4/9/PCP1P4/1R3n1rP/4N4/4AK3/3A4c b - - 0 1",
      "id": "puzzle_3325",
      "title": "Mate in ? moves"
    },
    {
      "description": "HONG Zhi - ZHAO XinXin\n2014 the 6th Yang guanlin Cup Professional Man group 2014 ",
      "fen": "2b2k1C1/4a1P2/5aN2/2r5p/9/4Pn3/p8/1R7/C1c1A4/2c1KAB2 w - - 0 1",
      "id": "puzzle_3326",
      "title": "Mate in ? moves"
    },
    {
      "description": "BU FengBo - DONG Fei\n2014 the 6 th Yang guanlin  Cup Open Group 2014 ",
      "fen": "4kab2/4a4/1R1cbc3/p1p3p1p/4C4/2P1P1P2/P3n3P/4C4/4A4/1NB1KAr2 w - - 0 1",
      "id": "puzzle_3327",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u6797\u5efa\u4e2d - ZHENG Xin\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "1c1k2P2/4aP3/9/1N7/9/9/9/5A2B/9/4KAB2 w - - 0 1",
      "id": "puzzle_3328",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIANG Jun - \u5f20\u82e5\u611a\n2014\u5e74\u56db\u5ddd\u7701\u7b2c\u56db\u5c4a\u8c61\u68cb\u540d\u624b\u9080\u8bf7\u8d5b 2014 ",
      "fen": "2bCkabR1/4R4/2r1c4/p5p1p/9/9/P3c1P1P/N3r4/4A4/3AKN3 b - - 0 1",
      "id": "puzzle_3329",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHANG Qiang - ZHU Xiaohu\n2014 China Xiangqi League 2014 ",
      "fen": "2ba1R3/4k4/9/2p2R2p/7r1/9/P5c1P/4BCn2/2n1AK3/2BA5 w - - 0 1",
      "id": "puzzle_3330",
      "title": "Mate in ? moves"
    },
    {
      "description": "LU WeiTao - XU GuoYi\n2014 China Xiangqi League 2014 ",
      "fen": "9/3ka4/3r5/4P4/3R5/9/9/4B4/9/3K2B2 w - - 0 1",
      "id": "puzzle_3331",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u5c39\u5fd7\u52c7 - \u5f20\u4e2d\u534e\n2014\u5e74\u6c5f\u82cf\u7701\u201c\u6e56\u6865\u676f\u201d\u8c61\u68cb\u9526\u6807\u8d5b 2014 ",
      "fen": "3akRb2/9/4b1R2/8p/6P2/9/P7P/4K1N2/1r1r5/3A1A3 b - - 0 1",
      "id": "puzzle_3332",
      "title": "Mate in ? moves"
    },
    {
      "description": "YAN Allen - LE Chinh\nNorth America  Cup Xiangqi Championship  2014 ",
      "fen": "2baka3/4n4/4brr2/p1pR4p/9/1N2C3P/P3P4/3RB4/4A4/2BcK4 w - - 0 1",
      "id": "puzzle_3333",
      "title": "Mate in ? moves"
    },
    {
      "description": "LAI LiXiong - XUE Zhong\nWorld Xiangqi Championships 2015 ",
      "fen": "4R4/C3R4/3k2c1b/p5r1p/4p4/2pn5/P3P3P/N3B4/4A4/3AKrB2 w - - 0 1",
      "id": "puzzle_3334",
      "title": "Mate in ? moves"
    },
    {
      "description": "NGUYEN Huu Phuc - YANG JinXian\nWorld Xiangqi Championships 1997 ",
      "fen": "2b4C1/3k1cR2/4R4/p3p3p/5P3/2P6/P7P/4n4/3rA4/2BAK4 w - - 0 1",
      "id": "puzzle_3335",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHAO QingGe - HU RongHua\nChinese National Champion 1978 ",
      "fen": "4kab2/4a4/9/C3p4/2b5P/6N2/3n5/3AB4/c3K4/3n1AB2 b - - 0 1",
      "id": "puzzle_3336",
      "title": "Mate in ? moves"
    },
    {
      "description": "CUI Yan - JIANG QuanSheng\nChina Team Championship 1992 ",
      "fen": "3k1a3/9/5a3/P8/2RN4p/4C3r/5n3/5A3/4AK3/9 w - - 0 1",
      "id": "puzzle_3337",
      "title": "Mate in ? moves"
    },
    {
      "description": "KE YongQing - LIAO ErPing\nChinese National Champion 2001 ",
      "fen": "2bak1b2/4a1N2/4n4/p1p1R3p/4P4/3r5/P1P3p1P/4B4/2nCr2cN/2BK1A1R1 b - - 0 1",
      "id": "puzzle_3338",
      "title": "Mate in ? moves"
    },
    {
      "description": "YU YouHua - WANG YueFei\nChinese National Champion 2001 ",
      "fen": "R4ab2/3kaRC2/5r3/9/6n2/4r1B1p/8P/4B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_3339",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIAO ErPing - ZHUANG YuTing\nChinese National Champion 2001 ",
      "fen": "9/n4k3/9/p4N2p/4P4/6R2/P1r5P/9/4KR1r1/2Bc1A3 w - - 0 1",
      "id": "puzzle_3340",
      "title": "Mate in ? moves"
    },
    {
      "description": "YU ChiuKing - HOFFARTH Karsten\nWorld Xiangqi Championships 2001 ",
      "fen": "2baka2R/5rN2/3cb4/2p6/p8/2P3P2/P1n1P2r1/2N1B4/9/2BAKA2R w - - 0 1",
      "id": "puzzle_3341",
      "title": "Mate in ? moves"
    },
    {
      "description": "GUO YongZhen - ZHANG ZhiMing\nChina Team Championship 1996 ",
      "fen": "2b1k4/3ca4/5aP2/2P2C3/6b2/6B2/4p4/3K5/5p3/9 b - - 0 1",
      "id": "puzzle_3342",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU QuanBao - HU RongHua\nExhibition 1965 ",
      "fen": "2bk1R3/4a1R2/4b1N2/8p/9/9/3n3pP/3AB4/3r4N/1r1AK4 b - - 0 1",
      "id": "puzzle_3343",
      "title": "Mate in ? moves"
    },
    {
      "description": "PAN DeBao - HU RongHua\nExhibition 1973 ",
      "fen": "4ka3/4a4/2R1N4/p7p/6p2/2P1c4/P7P/6r2/5n3/3AKA3 b - - 0 1",
      "id": "puzzle_3344",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIANG WenBin - HU RongHua\nNational Games 1979 ",
      "fen": "R2ak4/9/9/9/3C5/3pp1P2/P3n4/8B/4K4/3A3r1 b - - 0 1",
      "id": "puzzle_3345",
      "title": "Mate in ? moves"
    },
    {
      "description": "LI YongHua - WANG DaMing\nChina Team Championship 2002 ",
      "fen": "4k4/3P5/8b/p4NN1p/9/2P6/8P/2n6/3KA4/5Ac2 w - - 0 1",
      "id": "puzzle_3346",
      "title": "Mate in ? moves"
    },
    {
      "description": "TONG BenPing - TANG FangYun\nChina Team Championship 1984 ",
      "fen": "3ak1b2/3PaP3/4n3b/c8/1R7/9/9/9/9/2BAKAB2 w - - 0 1",
      "id": "puzzle_3347",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZANG RuYi - SONG GuoQiang\nChina Team Championship 1999 ",
      "fen": "4ka3/4a4/2R1N4/p3p3p/9/9/P3P3P/1r6B/4A4/5KCrn b - - 0 1",
      "id": "puzzle_3348",
      "title": "Mate in ? moves"
    },
    {
      "description": "NG Hak Lok - WANG HaoChang\nHong Kong Team Champion 2001 ",
      "fen": "4kCbC1/4a4/9/6p1p/4R4/1r4P2/2P1P3P/9/c8/2BAKAB2 w - - 0 1",
      "id": "puzzle_3349",
      "title": "Mate in ? moves"
    },
    {
      "description": "YE ZhaoJing - CHAN Keung On\nTai Lee Cheong Metals Cup Team Tournament 2003 ",
      "fen": "3k1a3/2rnRc3/2N6/p7p/2P6/9/P7P/4C4/4A4/1cBAK1B2 w - - 0 1",
      "id": "puzzle_3350",
      "title": "Mate in ? moves"
    },
    {
      "description": "KE ShanLin - FENG Jao\nChinese National Champion 2003 ",
      "fen": "2r1kab2/4a4/4b4/pNR5p/4r1p2/2P1c4/P5P2/4B4/1R2A4/4KAB2 w - - 0 1",
      "id": "puzzle_3351",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG ShengQiang - XIE Jing\nChinese National Champion 2003 ",
      "fen": "3rkab2/1R2a4/4b4/9/4P4/2P3p2/P3c1c1n/2N1B3B/4N4/1R1AKA3 b - - 0 1",
      "id": "puzzle_3352",
      "title": "Mate in ? moves"
    },
    {
      "description": "CHEN QiHuan - SHEN YunRu\nGuan Nan Tang Gou Cup Xiangqi Championships 2005 ",
      "fen": "r1bR1abr1/5k2n/4c4/p1pNn1p1p/9/6P2/P1C5P/N3B2c1/4A4/2BAK2R1 w - - 0 1",
      "id": "puzzle_3353",
      "title": "Mate in ? moves"
    },
    {
      "description": "LAI Han Soon - HONG Chia Chuan\nWorld Xiangqi Championships 2005 ",
      "fen": "2rk1ab2/4a4/4b4/p3CR2p/4c4/2p3B2/P5p1P/1C3R3/9/3AKA1r1 w - - 0 1",
      "id": "puzzle_3354",
      "title": "Mate in ? moves"
    },
    {
      "description": "JIN YuYan - NEI TieWen\nChina National Xiangqi League 2005 ",
      "fen": "9/4k4/5a2b/p1R5p/3C5/3n4P/P5P2/4B2c1/4K1N2/1r7 b - - 0 1",
      "id": "puzzle_3355",
      "title": "Mate in ? moves"
    },
    {
      "description": "OUYANG Qilin - WANG GuoMin\nLo Lin Cup ShangHai Xiangqi King Tournament 2005 ",
      "fen": "2ba1kR1C/4a3n/4b4/C8/pc7/2B3B2/4P1P1P/3A2N2/7r1/2c1KA3 b - - 0 1",
      "id": "puzzle_3356",
      "title": "Mate in ? moves"
    },
    {
      "description": "JING XueYi - YU YouHua\nChina National Xiangqi League 2007 ",
      "fen": "5k3/9/3P1N3/9/5c3/3n2B2/1p7/5A3/5C3/4KAB2 w - - 0 1",
      "id": "puzzle_3357",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHANG Jiang - ZHANG Qiang\nChina National Xiangqi League 2006 ",
      "fen": "2bakacC1/5RN2/4b4/p3p4/3n1R3/P8/4P3P/4B1n2/1r3K3/2BA5 w - - 0 1",
      "id": "puzzle_3358",
      "title": "Mate in ? moves"
    },
    {
      "description": "WU QingBin - LI Bing\nChina Team Championship 2005 ",
      "fen": "3aka3/3r5/3c2R2/4p3p/9/4P1P1P/P8/3pB1N2/2n1K4/5AB2 b - - 0 1",
      "id": "puzzle_3359",
      "title": "Mate in ? moves"
    },
    {
      "description": "SUWANDI Eddy - CHENG ZongYu\nAsian xiangqi Championship 2008 ",
      "fen": "2b1R2R1/rc1k5/2n1b4/2Nr4p/2P1p1P2/9/p7P/4B4/4A4/2BAK4 w - - 0 1",
      "id": "puzzle_3360",
      "title": "Mate in ? moves"
    },
    {
      "description": "XIE Jing - ZHANG ShenHong\nBuilding Materials City Cup National Championships 2005 ",
      "fen": "C2k1Nb2/4a2R1/1C3c3/p3p3p/1n7/9/P2rP4/r3B4/4A1n2/1R1AK1B2 w - - 0 1",
      "id": "puzzle_3361",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHANG DeKui - WAN QiYou\nNA 1929 ",
      "fen": "5a1C1/3ka4/2c3R2/p3p3p/9/5N3/P3P3P/2rCn4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_3362",
      "title": "Mate in ? moves"
    },
    {
      "description": "NEI TieWen - KE YongQing\nChinese National Champion 2008 ",
      "fen": "1R1rka3/C8/nR3a3/4p3p/1n4p2/1r7/7cP/4B4/4A4/2C1KAB2 w - - 0 1",
      "id": "puzzle_3363",
      "title": "Mate in ? moves"
    },
    {
      "description": "SONE Toshihiko - HANKINSON Chris\nWorld Xiangqi Championships 2009 ",
      "fen": "2b1ka1r1/1r2a4/4b4/p3p3p/1NP2cp2/4P4/P1R4nP/4B4/4A4/1R2KAB2 b - - 0 1",
      "id": "puzzle_3364",
      "title": "Mate in ? moves"
    },
    {
      "description": "ZHANG Yan Ping - LAY Kan Hock\nAsian Xiangqi Individual Championships 2009 ",
      "fen": "C3kab2/2P1a4/4b4/1R7/p5P2/9/5r3/3K1A3/8c/2BA3n1 b - - 0 1",
      "id": "puzzle_3365",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u535c\u51e4\u6ce2+\u91d1\u6ce2 - \u5f90\u5929\u7ea2+\u738b\u658c\nThe capital, home UEFA Cup men's double xiangqi exhibition 2007 ",
      "fen": "5ab2/3k1N3/3R1P3/p7p/9/P8/7rP/9/4p4/2B1cK3 b - - 0 1",
      "id": "puzzle_3366",
      "title": "Mate in ? moves"
    },
    {
      "description": "PENG Oscar  - TSE Richard\nNorth America  Cup Xiangqi Championship  2012 ",
      "fen": "5kNc1/9/9/5r2P/9/R8/9/4B4/4A4/3AK4 w - - 0 1",
      "id": "puzzle_3367",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u738b  \u6674 - SUN MengTian\n2010\u5e74\u535a\u745e\u676f\u7b2c03\u5c4a\u5168\u56fd\u9752\u5e74\u8c61\u68cb\u9526\u6807\u8d5b 2010 ",
      "fen": "3k1ab2/1R2a4/4b4/2pP4p/6N1c/p3C4/4r4/4B4/9/3AKA3 w - - 0 1",
      "id": "puzzle_3368",
      "title": "Mate in ? moves"
    },
    {
      "description": "WANG TianYi - PANG CaiLiang\n2010\u5e74\u7b2c\u5341\u516d\u5c4a\u8fce\u6625\u676f\u8c61\u68cb\u56e2\u4f53\u516c\u5f00\u8d5b 2010 ",
      "fen": "4k1C1R/4a4/3a1nN2/p8/6N2/9/P3P4/7r1/5K3/c2A5 w - - 0 1",
      "id": "puzzle_3369",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u9648\u6c49\u5149 - ZHEN Qihua\nHong Kong Team Champion 2002 ",
      "fen": "2ba1k3/4a4/4b4/p5p1C/9/5N2P/4P4/4B2R1/4K4/c1B2r3 w - - 0 1",
      "id": "puzzle_3370",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u5218\u88d5\u4f73 - \u5434\u4ee5\u7433\nHong Kong Team Champion 2011 ",
      "fen": "3aka3/9/1R2b4/p1R1pr2p/9/9/P1P1C1P2/2N1r4/4A4/4KAB1c w - - 0 1",
      "id": "puzzle_3371",
      "title": "Mate in ? moves"
    },
    {
      "description": "LI DeZhi - \u5f20\u671d\u5fe0\n22011 Chongqing National Day Chess Open 2011 ",
      "fen": "1R3N3/4k4/3ab3n/6p1p/9/2C3P2/P3P3P/4B4/2r1AK3/2BA3r1 w - - 0 1",
      "id": "puzzle_3372",
      "title": "Mate in ? moves"
    },
    {
      "description": "TAO HanMing - XU Bo\nChinese National Champion 1997 ",
      "fen": "2c1kab2/4a4/n3b4/CN2p3p/7r1/P2R5/2P1P3P/C3c1p2/4A4/3K1A3 w - - 0 1",
      "id": "puzzle_3373",
      "title": "Mate in ? moves"
    },
    {
      "description": "TAO HanMing - XU Bo\nChinese National Champion 1997 ",
      "fen": "2c1kab2/4a4/n3b4/CN2p3p/7r1/P2R5/2P1P3P/C3c1p2/4A4/3K1A3 w - - 0 1",
      "id": "puzzle_3374",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIAO ErPing - YU YouHua\nChinese National Champion 1995 ",
      "fen": "6R2/2R1ak3/9/p1p1p4/6n1p/2P6/3r2r1P/9/4A4/4KA3 w - - 0 1",
      "id": "puzzle_3375",
      "title": "Mate in ? moves"
    },
    {
      "description": "SHANG Wei - HONG Zhi\nChinese National Champion 1995 ",
      "fen": "2bak4/9/4b4/p2N4p/2P3P2/9/P8/3K4c/3C1R3/2Br1n3 b - - 0 1",
      "id": "puzzle_3376",
      "title": "Mate in ? moves"
    },
    {
      "description": "CHEN YeQun - WONG Hok Him\nHong Kong Team Champion 2001 ",
      "fen": "2b1ka3/4a3C/4b1R2/8p/4r4/6P2/8P/1r7/4A4/3K1A3 b - - 0 1",
      "id": "puzzle_3377",
      "title": "Mate in ? moves"
    },
    {
      "description": "HONG Zhi - QIU Dong\nChina National Xiangqi League 2004 ",
      "fen": "9/3k3N1/3ab4/3R5/9/9/1r2p4/4B4/4K3C/1c1A1AB2 w - - 0 1",
      "id": "puzzle_3378",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU DaHua - ZHAO GuoRong\nChina National Xiangqi League 2005 ",
      "fen": "4ka3/3Ca4/9/p3p1N2/6b1p/P5B2/3nNc1RP/3CK4/1n2A4/4rcB2 b - - 0 1",
      "id": "puzzle_3379",
      "title": "Mate in ? moves"
    },
    {
      "description": "LIU Zheng - ZHANG GuoFeng\nWorld Xiangqi masters MMI Final 2006 ",
      "fen": "3aR2NC/r1c6/3k1c3/4N4/pn2p4/2p6/P3P3P/4B4/9/3AKAB2 w - - 0 1",
      "id": "puzzle_3380",
      "title": "Mate in ? moves"
    },
    {
      "description": "HUANG ShiQing - CHEN HanHua\nAo Wang Cup Hubei Grand Prix Championship 2007 ",
      "fen": "3k1a3/4a4/bcn2c3/1R5Np/1r7/2P1C4/P3P3P/3C5/4Ap3/2B1KA3 w - - 0 1",
      "id": "puzzle_3381",
      "title": "Mate in ? moves"
    },
    {
      "description": "XU TengFei - HAN LiPang\nEarth Cup xiangqi tournament 2008 ",
      "fen": "9/4k1N1c/b1nRb1C2/p3p3p/2r3r2/9/P3P3P/3C5/3R5/2BAKAB2 w - - 0 1",
      "id": "puzzle_3382",
      "title": "Mate in ? moves"
    },
    {
      "description": "CHEN HanFeng - JIN YuYan\nChinese National Champion 2000 ",
      "fen": "3a1Rb2/9/2N1k4/p7p/2p6/9/P7P/B8/3KcC2c/6r2 w - - 0 1",
      "id": "puzzle_3383",
      "title": "Mate in ? moves"
    },
    {
      "description": "\u88f4\u56fd\u5e86 - \u6f58\u798f\u7965\n2011 Vietnam National Chess Tournament 2011 ",
      "fen": "C4k3/6R2/1n2b4/2N6/2c6/8P/P5P2/4B4/4Ar3/3K1AB2 w - - 0 1",
      "id": "puzzle_3384",
      "title": "Mate in ? moves"
    },
    {
      "description": "YANG Zhong - \u76ae\u4f20\u6d2a\nChina Team Championship 2008 ",
      "fen": "3akc3/9/1r2b1R2/3P4p/2b3p2/3N5/P4Rc1P/4B4/3KA4/1r3AB2 b - - 0 1",
      "id": "puzzle_3385",
      "title": "Mate in ? moves"
    }
  ]
];
