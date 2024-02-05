const { Op } = require("sequelize");
const db = require("../models");
const sequelize = require("../db/db-connection");

const TblTT = db.tt;

class TT {
    addTT = async (req) => {
        try {
            const { ttDate, invoiceNo, ttNo, ttLoadMS, ttLoadHSD, transporter, driverName, MPB, MOB, ttLoadingDate, ttLoadingTime, ttUnloadingDate, ttUnloadingTime, invoiceMS, invoiceMSRemark, invoiceHSD, invoiceHSDRemark, sampleMSHydro, sampleMSTemp, sampleMS, sampleHSDHydro, sampleHSDTemp, sampleHSD, tlbrMSDip, tlbrMSStock, tlbrMSDU1, tlbrMSDU2, tlbrHSDDip, tlbrHSDStock, tlbrHSDDU1, tlbrHSDDU2, tlarMSDip, tlarMSStock, tlarMSDU1, tlarMSDU2, tlarHSDDip, tlarHSDStock, tlarHSDDU1, tlarHSDDU2, ptlarMSStock, ptlarMSDU1, ptlarMSDU2, ptlarHSDStock, ptlarHSDDU1, ptlarHSDDU2, saleTestingMS, saleTestingHSD, resultDensityMS, resultDensityHSD, resultStockMS, resultStockHSD, ttSalesMSDU1Sale, ttSalesHSDDU1Sale, ttSalesMSDU2Sale, ttSalesHSDDU2Sale, ttSalesMStotalSale, ttSalesHSDtotalSale, ttSalesMSSale, ttSalesHSDSale, ttSalesMSStock, ttSalesHSDStock, remark } = req.body;
            const ADDED_BY = req.user;
            const data = await TblTT.create({
                ttDate,
                invoiceNo,
                ttNo,
                ttLoadMS,
                ttLoadHSD,
                transporter,
                driverName,
                MPB,
                MOB,
                ttLoadingDate,
                ttLoadingTime,
                ttUnloadingDate,
                ttUnloadingTime,
                invoiceMS,
                invoiceMSRemark,
                invoiceHSD,
                invoiceHSDRemark,
                sampleMSHydro,
                sampleMSTemp,
                sampleMS,
                sampleHSDHydro,
                sampleHSDTemp,
                sampleHSD,
                tlbrMSDip,
                tlbrMSStock,
                tlbrMSDU1,
                tlbrMSDU2,
                tlbrHSDDip,
                tlbrHSDStock,
                tlbrHSDDU1,
                tlbrHSDDU2,
                tlarMSDip,
                tlarMSStock,
                tlarMSDU1,
                tlarMSDU2,
                tlarHSDDip,
                tlarHSDStock,
                tlarHSDDU1,
                tlarHSDDU2,
                ptlarMSStock,
                ptlarMSDU1,
                ptlarMSDU2,
                ptlarHSDStock,
                ptlarHSDDU1,
                ptlarHSDDU2,
                saleTestingMS,
                saleTestingHSD,
                resultDensityMS, 
                resultDensityHSD,
                resultStockMS,
                resultStockHSD,
                ttSalesMSDU1Sale,
                ttSalesHSDDU1Sale,
                ttSalesMSDU2Sale,
                ttSalesHSDDU2Sale,
                ttSalesMStotalSale,
                ttSalesHSDtotalSale,
                ttSalesMSSale,
                ttSalesHSDSale,
                ttSalesMSStock,
                ttSalesHSDStock,
                remark,
                ADDED_BY
            });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    getTT = async (req) => {
        try {
            let searchObj = {};
            const { fromDate, toDate, id } = req.query;
            // const getMonth = new Date().getMonth() + 1;
            // const getYear = new Date().getFullYear();
            // searchObj.ttDate = { [Op.between] : [`${getYear}-${getMonth}-01`, `${getYear}-${getMonth}-31`] }
            if (fromDate && toDate) {
                searchObj.ttDate = { [Op.between] : [fromDate, toDate] }
            }
            if (id) {
                const data = await TblTT.findAll({
                    where : {
                        id : id
                    },
                    order : [["ttDate", "ASC"]]
                });
                return data;
            }
            const data = await TblTT.findAll({
                where : searchObj,
                order : [["ttDate", "ASC"]]
            });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    editTT = async (req) => {
        try {
            const { id, ttDate, invoiceNo, ttNo, ttLoadMS, ttLoadHSD, transporter, driverName, MPB, MOB, ttLoadingDate, ttLoadingTime, ttUnloadingDate, ttUnloadingTime, invoiceMS, invoiceMSRemark, invoiceHSD, invoiceHSDRemark, sampleMSHydro, sampleMSTemp, sampleMS, sampleHSDHydro, sampleHSDTemp, sampleHSD, tlbrMSDip, tlbrMSStock, tlbrMSDU1, tlbrMSDU2, tlbrHSDDip, tlbrHSDStock, tlbrHSDDU1, tlbrHSDDU2, tlarMSDip, tlarMSStock, tlarMSDU1, tlarMSDU2, tlarHSDDip, tlarHSDStock, tlarHSDDU1, tlarHSDDU2, ptlarMSStock, ptlarMSDU1, ptlarMSDU2, ptlarHSDStock, ptlarHSDDU1, ptlarHSDDU2, saleTestingMS, saleTestingHSD, resultDensityMS, resultDensityHSD, resultStockMS, resultStockHSD, ttSalesMSDU1Sale, ttSalesHSDDU1Sale, ttSalesMSDU2Sale, ttSalesHSDDU2Sale, ttSalesMStotalSale, ttSalesHSDtotalSale, ttSalesMSSale, ttSalesHSDSale, ttSalesMSStock, ttSalesHSDStock, remark } = req.body;
            const data = await TblTT.update(
                {
                    ttDate,
                    invoiceNo,
                    ttNo,
                    ttLoadMS,
                    ttLoadHSD,
                    transporter,
                    driverName,
                    MPB,
                    MOB,
                    ttLoadingDate,
                    ttLoadingTime,
                    ttUnloadingDate,
                    ttUnloadingTime,
                    invoiceMS,
                    invoiceMSRemark,
                    invoiceHSD,
                    invoiceHSDRemark,
                    sampleMSHydro,
                    sampleMSTemp,
                    sampleMS,
                    sampleHSDHydro,
                    sampleHSDTemp,
                    sampleHSD,
                    tlbrMSDip,
                    tlbrMSStock,
                    tlbrMSDU1,
                    tlbrMSDU2,
                    tlbrHSDDip,
                    tlbrHSDStock,
                    tlbrHSDDU1,
                    tlbrHSDDU2,
                    tlarMSDip,
                    tlarMSStock,
                    tlarMSDU1,
                    tlarMSDU2,
                    tlarHSDDip,
                    tlarHSDStock,
                    tlarHSDDU1,
                    tlarHSDDU2,
                    ptlarMSStock,
                    ptlarMSDU1,
                    ptlarMSDU2,
                    ptlarHSDStock,
                    ptlarHSDDU1,
                    ptlarHSDDU2,
                    saleTestingMS,
                    saleTestingHSD,
                    resultDensityMS,
                    resultDensityHSD,
                    resultStockMS,
                    resultStockHSD,
                    ttSalesMSDU1Sale,
                    ttSalesHSDDU1Sale,
                    ttSalesMSDU2Sale,
                    ttSalesHSDDU2Sale,
                    ttSalesMStotalSale,
                    ttSalesHSDtotalSale,
                    ttSalesMSSale,
                    ttSalesHSDSale,
                    ttSalesMSStock,
                    ttSalesHSDStock,
                    remark
                },
                {
                    where : {
                        id : id
                    }
                }
            );
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    deleteTT = async (req) => {
        try {
            const { id } = req.query;
            const data = await TblTT.destroy({
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
}

module.exports = new TT();