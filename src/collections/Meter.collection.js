const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const sequelize = require("../db/db-connection");

const TblMeterReading = db.meterReading;
const TblMeterReadingDiesel = db.meterReadingDiesel;

class Meter {
    addMeterReading = async (req) => {
        try {
            const { Date, Time, Density, Dip, WaterDip, Stock, Receipt, Nozzle1, Nozzle2, Testing, Remark } = req.body;
            const ADDED_BY = req.user;
            const data = await TblMeterReading.create({
                Date,
                Time,
                Density,
                Dip,
                WaterDip,
                Stock,
                OpeningStock : Stock,
                Receipt,
                TotalStock : Stock + Receipt,
                Nozzle1,
                Nozzle2,
                Testing,
                Remark,
                ADDED_BY
            });

            const previousData = await TblMeterReading.findOne({
                where : {
                    id : data.id - 1
                }
            });

            // const oneMorePreviousData = await TblMeterReading.findOne({
            //     where : {
            //         id : data.id - 2
            //     }
            // });

            if(previousData) {
                const updatedData = await TblMeterReading.update(
                    {
                        ClosingStock : previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing),
                        PhysicalStock : Stock,
                        StockLossGain : Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)),
                        // CummLossGain : oneMorePreviousData ? oneMorePreviousData.CummLossGain + Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)) : previousData.CummLossGain + Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)),
                        Nozzle1Diff : Nozzle1 - previousData.Nozzle1,
                        Nozzle2Diff : Nozzle2 - previousData.Nozzle2,
                        TotalNozzleSales : (Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2),
                        ActualNozzleSales : ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing,
                        // CummNozzleSales : oneMorePreviousData ? oneMorePreviousData.CummNozzleSales + ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing : previousData.CummNozzleSales + ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing
                    },
                    {
                        where : {
                            id : data.id - 1
                        }
                    }
                )
            }
            return data;    
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    getMeterReading = async (req) => {
        try {
            let searchObj = {};
            const { fromDate, toDate, id } = req.query;
            const getMonth = new Date().getMonth() + 1;
            const getYear = new Date().getFullYear();
            searchObj.Date = { [Op.between] : [`${getYear}-${getMonth}-01`, `${getYear}-${getMonth}-31`] }
            if (fromDate && toDate) {
                const [data] = await sequelize.query(`SELECT
                    id,
                    Date,
                    Time,
                    Density,
                    Dip,
                    WaterDip,
                    Stock,
                    OpeningStock,
                    Receipt,
                    TotalStock,
                    ClosingStock,
                    PhysicalStock,
                    StockLossGain,
                    SUM(COALESCE(StockLossGain, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummLossGain,
                    Nozzle1,
                    Nozzle2,
                    Nozzle1Diff,
                    Nozzle2Diff,
                    TotalNozzleSales,
                    Testing,
                    ActualNozzleSales,
                    SUM(COALESCE(ActualNozzleSales, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummNozzleSales,
                    Remark,
                    ADDED_BY
                FROM
                    tbl_meter_readings
                WHERE
                    Date BETWEEN '${fromDate}' AND '${toDate}'
                ORDER BY
                    Date ASC;
                `);
                return data;
            }
            if (id) {
                const [data] = await sequelize.query(`SELECT
                    id,
                    Date,
                    Time,
                    Density,
                    Dip,
                    WaterDip,
                    Stock,
                    OpeningStock,
                    Receipt,
                    TotalStock,
                    ClosingStock,
                    PhysicalStock,
                    StockLossGain,
                    SUM(COALESCE(StockLossGain, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummLossGain,
                    Nozzle1,
                    Nozzle2,
                    Nozzle1Diff,
                    Nozzle2Diff,
                    TotalNozzleSales,
                    Testing,
                    ActualNozzleSales,
                    SUM(COALESCE(ActualNozzleSales, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummNozzleSales,
                    Remark,
                    ADDED_BY
                FROM
                    tbl_meter_readings
                WHERE
                    id = '${id}'
                ORDER BY
                    Date ASC;
                `);
                return data;
            }
            const [data] = await sequelize.query(`SELECT
                id,
                Date,
                Time,
                Density,
                Dip,
                WaterDip,
                Stock,
                OpeningStock,
                Receipt,
                TotalStock,
                ClosingStock,
                PhysicalStock,
                StockLossGain,
                SUM(COALESCE(StockLossGain, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummLossGain,
                Nozzle1,
                Nozzle2,
                Nozzle1Diff,
                Nozzle2Diff,
                TotalNozzleSales,
                Testing,
                ActualNozzleSales,
                SUM(COALESCE(ActualNozzleSales, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummNozzleSales,
                Remark,
                ADDED_BY
            FROM
                tbl_meter_readings
            WHERE
                Date BETWEEN '${getYear}-${getMonth}-01' AND '${getYear}-${getMonth}-31'
            ORDER BY
                Date ASC;
            `);
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    editMeterReading = async (req) => {
        try {
            const { id, Date, Time, Density, Dip, WaterDip, Stock, Receipt, Nozzle1, Nozzle2, Testing, Remark } = req.body;
            const data = await TblMeterReading.update(
                {
                    Date : Date,
                    Time : Time,
                    Density : Density,
                    Dip : Dip,
                    WaterDip : WaterDip,
                    Stock : Stock,
                    OpeningStock : Stock,
                    Receipt : Receipt,
                    TotalStock : Stock + Receipt,
                    Nozzle1 : Nozzle1,
                    Nozzle2 : Nozzle2,
                    Testing : Testing,
                    Remark : Remark
                },
                {
                    where : {
                        id : id
                    }
                }
            );
                
            const previousData = await TblMeterReading.findOne({
                where : {
                    id : id - 1
                }
            });

            // const oneMorePreviousData = await TblMeterReading.findOne({
            //     where : {
            //         id : id - 2
            //     }
            // });

            if(previousData) {
                const updatedData = await TblMeterReading.update(
                    {
                        ClosingStock : previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing),
                        PhysicalStock : Stock,
                        StockLossGain : Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)),
                        // CummLossGain : oneMorePreviousData ? oneMorePreviousData.CummLossGain + Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)) : previousData.CummLossGain + Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)),
                        Nozzle1Diff : Nozzle1 - previousData.Nozzle1,
                        Nozzle2Diff : Nozzle2 - previousData.Nozzle2,
                        TotalNozzleSales : (Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2),
                        ActualNozzleSales : ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing,
                        // CummNozzleSales : oneMorePreviousData ? oneMorePreviousData.CummNozzleSales + ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing : previousData.CummNozzleSales + ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing
                    },
                    {
                        where : {
                            id : id - 1
                        }
                    }
                )
            }
            return data;  
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    deleteMeterReading = async (req) => {
        try {
            const { id } = req.query;
            const data = await TblMeterReading.destroy({
                where : {
                    id : id
                }
            });
            return data;      
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    addMeterReadingDiesel = async (req) => {
        try {
            const { Date, Time, Density, Dip, WaterDip, Stock, Receipt, Nozzle1, Nozzle2, Testing, Remark } = req.body;
            const ADDED_BY = req.user;
            const data = await TblMeterReadingDiesel.create({
                Date,
                Time,
                Density,
                Dip,
                WaterDip,
                Stock,
                OpeningStock : Stock,
                Receipt,
                TotalStock : Stock + Receipt,
                Nozzle1,
                Nozzle2,
                Testing,
                Remark,
                ADDED_BY
            });

            const previousData = await TblMeterReadingDiesel.findOne({
                where : {
                    id : data.id - 1
                }
            });

            const oneMorePreviousData = await TblMeterReadingDiesel.findOne({
                where : {
                    id : data.id - 2
                }
            });

            if(previousData) {
                const updatedData = await TblMeterReadingDiesel.update(
                    {
                        ClosingStock : previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing),
                        PhysicalStock : Stock,
                        StockLossGain : Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)),
                        // CummLossGain : oneMorePreviousData ? oneMorePreviousData.CummLossGain + Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)) : previousData.CummLossGain + Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)),
                        Nozzle1Diff : Nozzle1 - previousData.Nozzle1,
                        Nozzle2Diff : Nozzle2 - previousData.Nozzle2,
                        TotalNozzleSales : (Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2),
                        ActualNozzleSales : ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing,
                        // CummNozzleSales : oneMorePreviousData ? oneMorePreviousData.CummNozzleSales + ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing : previousData.CummNozzleSales + ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing
                    },
                    {
                        where : {
                            id : data.id - 1
                        }
                    }
                )
            }
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    getMeterReadingDiesel = async (req) => {
        try {
            let searchObj = {};
            const { fromDate, toDate, id } = req.query;
            const getMonth = new Date().getMonth() + 1;
            const getYear = new Date().getFullYear();
            searchObj.Date = { [Op.between] : [`${getYear}-${getMonth}-01`, `${getYear}-${getMonth}-31`] }
            if (fromDate && toDate) {
                const [data] = await sequelize.query(`SELECT
                    id,
                    Date,
                    Time,
                    Density,
                    Dip,
                    WaterDip,
                    Stock,
                    OpeningStock,
                    Receipt,
                    TotalStock,
                    ClosingStock,
                    PhysicalStock,
                    StockLossGain,
                    SUM(COALESCE(StockLossGain, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummLossGain,
                    Nozzle1,
                    Nozzle2,
                    Nozzle1Diff,
                    Nozzle2Diff,
                    TotalNozzleSales,
                    Testing,
                    ActualNozzleSales,
                    SUM(COALESCE(ActualNozzleSales, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummNozzleSales,
                    Remark,
                    ADDED_BY
                FROM
                    tbl_meter_reading_diesels
                WHERE
                    Date BETWEEN '${fromDate}' AND '${toDate}'
                ORDER BY
                    Date ASC;
                `);
                return data;
            }
            if (id) {
                const [data] = await sequelize.query(`SELECT
                    id,
                    Date,
                    Time,
                    Density,
                    Dip,
                    WaterDip,
                    Stock,
                    OpeningStock,
                    Receipt,
                    TotalStock,
                    ClosingStock,
                    PhysicalStock,
                    StockLossGain,
                    SUM(COALESCE(StockLossGain, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummLossGain,
                    Nozzle1,
                    Nozzle2,
                    Nozzle1Diff,
                    Nozzle2Diff,
                    TotalNozzleSales,
                    Testing,
                    ActualNozzleSales,
                    SUM(COALESCE(ActualNozzleSales, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummNozzleSales,
                    Remark,
                    ADDED_BY
                FROM
                    tbl_meter_reading_diesels
                WHERE
                    id = '${id}'
                ORDER BY
                    Date ASC;
                `);
                return data;
            }
            const [data] = await sequelize.query(`SELECT
                id,
                Date,
                Time,
                Density,
                Dip,
                WaterDip,
                Stock,
                OpeningStock,
                Receipt,
                TotalStock,
                ClosingStock,
                PhysicalStock,
                StockLossGain,
                SUM(COALESCE(StockLossGain, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummLossGain,
                Nozzle1,
                Nozzle2,
                Nozzle1Diff,
                Nozzle2Diff,
                TotalNozzleSales,
                Testing,
                ActualNozzleSales,
                SUM(COALESCE(ActualNozzleSales, 0)) OVER (PARTITION BY EXTRACT(YEAR_MONTH FROM Date) ORDER BY Date) AS CummNozzleSales,
                Remark,
                ADDED_BY
            FROM
                tbl_meter_reading_diesels
            WHERE
                Date BETWEEN '${getYear}-${getMonth}-01' AND '${getYear}-${getMonth}-31'
            ORDER BY
                Date ASC;
            `);
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    editMeterReadingDiesel = async (req) => {
        try {
            const { id, Date, Time, Density, Dip, WaterDip, Stock, Receipt, Nozzle1, Nozzle2, Testing, Remark } = req.body;
            const data = await TblMeterReadingDiesel.update(
                {
                    Date : Date,
                    Time : Time,
                    Density : Density,
                    Dip : Dip,
                    WaterDip : WaterDip,
                    Stock : Stock,
                    OpeningStock : Stock,
                    Receipt : Receipt,
                    TotalStock : Stock + Receipt,
                    Nozzle1 : Nozzle1,
                    Nozzle2 : Nozzle2,
                    Testing : Testing,
                    Remark : Remark
                },
                {
                    where  : {
                        id : id
                    }
                }
            );

            const previousData = await TblMeterReadingDiesel.findOne({
                where : {
                    id : id - 1
                }
            });

            // const oneMorePreviousData = await TblMeterReadingDiesel.findOne({
            //     where : {
            //         id : id - 2
            //     }
            // });

            if(previousData) {
                const updatedData = await TblMeterReadingDiesel.update(
                    {
                        ClosingStock : previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing),
                        PhysicalStock : Stock,
                        StockLossGain : Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)),
                        // CummLossGain : oneMorePreviousData ? oneMorePreviousData.CummLossGain + Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)) : previousData.CummLossGain + Stock - (previousData.TotalStock - (((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing)),
                        Nozzle1Diff : Nozzle1 - previousData.Nozzle1,
                        Nozzle2Diff : Nozzle2 - previousData.Nozzle2,
                        TotalNozzleSales : (Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2),
                        ActualNozzleSales : ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing,
                        // CummNozzleSales : oneMorePreviousData ? oneMorePreviousData.CummNozzleSales + ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing : previousData.CummNozzleSales + ((Nozzle1 - previousData.Nozzle1) + (Nozzle2 - previousData.Nozzle2)) - previousData.Testing
                    },
                    {
                        where : {
                            id : id - 1
                        }
                    }
                )
            }
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    deleteMeterReadingDiesel = async (req) => {
        try {
            const { id } = req.query;
            const data = await TblMeterReadingDiesel.destroy({
                where : {
                    id : id
                }
            });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    getStockFromDip = async (req) => {
        try {
            const { dip } = req.query;
            const [[data]] = await sequelize.query(`SELECT Stock FROM tbl_meter_readings WHERE Dip = ${dip} ORDER BY Date DESC`);
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };
}

module.exports = new Meter();