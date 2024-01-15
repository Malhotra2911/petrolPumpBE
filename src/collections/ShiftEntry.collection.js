const { Op } = require("sequelize");
const db = require("../models");

db.shiftEntry.hasMany(db.shiftEntryList, {
    foreignKey : "shiftEntryId",
    as : "shiftEntryList"
});

db.shiftEntryList.belongsTo(db.shiftEntry, {
    foreignKey : "shiftEntryId"
});

const TblShiftEntry = db.shiftEntry;
const TblShiftEntryList = db.shiftEntryList;

class ShiftEntry {
    addShiftEntry = async (req) => {
        try {
            const { inDate, inTime, outDate, outTime, name, stockOpenMS, stockCloseMS, testingMS, densityMS, du1OpenMS, du1CloseMS, du2OpenMS, du2CloseMS, du1DiffMS, du2DiffMS, meterRateMS, readingCashMS, stockOpenHSD, stockCloseHSD, testingHSD, densityHSD, du1OpenHSD, du1CloseHSD, du2OpenHSD, du2CloseHSD, du1DiffHSD, du2DiffHSD, meterRateHSD, readingCashHSD, phonePe, pos, totalCash, readingCash, totalShiftCollection, grandTotal, remark, shiftEntryList } = req.body;    
            const ADDED_BY = req.user;
            const data = await TblShiftEntry.create({
                inDate,
                inTime,
                outDate,
                outTime,
                name,
                stockOpenMS,
                stockCloseMS,
                testingMS,
                densityMS,
                du1OpenMS,
                du1CloseMS,
                du2OpenMS,
                du2CloseMS,
                du1DiffMS,
                du2DiffMS,
                meterRateMS,
                readingCashMS,
                stockOpenHSD,
                stockCloseHSD,
                testingHSD,
                densityHSD,
                du1OpenHSD,
                du1CloseHSD,
                du2OpenHSD,
                du2CloseHSD,
                du1DiffHSD,
                du2DiffHSD,
                meterRateHSD,
                readingCashHSD,
                phonePe,
                pos,
                totalCash,
                readingCash,
                totalShiftCollection,
                grandTotal,
                remark,
                ADDED_BY,
                shiftEntryList
            }).then(async (res) => {
                let shiftEntryLists = [];
                shiftEntryList.forEach((e) => {
                    shiftEntryLists.push({
                        shiftEntryId : res.id,
                        oldCredit : e.oldCredit,
                        oldCollectionName : e.oldCollectionName,
                        oldDate : e.oldDate,
                        newCredit : e.newCredit,
                        borrowerName : e.borrowerName,
                        borrowerMobileNo : e.borrowerMobileNo
                    })
                });
                await TblShiftEntryList.bulkCreate(shiftEntryLists).then(async (resp) => {
                    res.dataValues["shiftEntryLists"] = resp;
                });
                return {
                    data: res.dataValues
                }
            });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    getShiftEntry = async (req) => {
        try {
            let searchObj = {};
            const { fromDate, toDate, id } = req.query;
            const getMonth = new Date().getMonth() + 1;
            const getYear = new Date().getFullYear();
            searchObj.inDate = { [Op.between] : [`${getYear}-${getMonth}-01`, `${getYear}-${getMonth}-31`] }
            if (fromDate && toDate) {
                searchObj.inDate = { [Op.between] : [fromDate, toDate] }
            }
            if (id) {
                const data = await TblShiftEntry.findAll({
                    include : [
                        {
                            model : TblShiftEntryList,
                            as : "shiftEntryList"
                        }
                    ],
                    where : {
                        id : id
                    },
                    order : [["inDate", "ASC"]]
                });
                return data;
            }
            const data = await TblShiftEntry.findAll({
                include : [
                    {
                        model : TblShiftEntryList,
                        as : "shiftEntryList"
                    }
                ],
                where : searchObj,
                order : [["inDate", "ASC"]]
            });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    editShiftEntry = async (req) => {
        try {
            const { id, inDate, inTime, outDate, outTime, name, stockOpenMS, stockCloseMS, testingMS, densityMS, du1OpenMS, du1CloseMS, du2OpenMS, du2CloseMS, du1DiffMS, du2DiffMS, meterRateMS, readingCashMS, stockOpenHSD, stockCloseHSD, testingHSD, densityHSD, du1OpenHSD, du1CloseHSD, du2OpenHSD, du2CloseHSD, du1DiffHSD, du2DiffHSD, meterRateHSD, readingCashHSD, phonePe, pos, totalCash, readingCash, totalShiftCollection, grandTotal, remark, shiftEntryList } = req.body;
            const data = await TblShiftEntry.update(
                {
                    inDate : inDate,
                    inTime : inTime,
                    outDate : outDate,
                    outTime : outTime,
                    name : name,
                    stockOpenMS : stockOpenMS,
                    stockCloseMS : stockCloseMS,
                    testingMS : testingMS,
                    densityMS : densityMS,
                    du1OpenMS : du1OpenMS,
                    du1CloseMS : du1CloseMS,
                    du2OpenMS : du2OpenMS,
                    du2CloseMS : du2CloseMS,
                    du1DiffMS : du1DiffMS,
                    du2DiffMS : du2DiffMS,
                    meterRateMS : meterRateMS,
                    readingCashMS : readingCashMS,
                    stockOpenHSD : stockOpenHSD,
                    stockCloseHSD : stockCloseHSD,
                    testingHSD : testingHSD,
                    densityHSD : densityHSD,
                    du1OpenHSD : du1OpenHSD,
                    du1CloseHSD : du1CloseHSD,
                    du2OpenHSD : du2OpenHSD,
                    du2CloseHSD : du2CloseHSD,
                    du1DiffHSD : du1DiffHSD,
                    du2DiffHSD : du2DiffHSD,
                    meterRateHSD : meterRateHSD,
                    readingCashHSD : readingCashHSD,
                    phonePe : phonePe,
                    pos : pos,
                    totalCash : totalCash,
                    readingCash : readingCash,
                    totalShiftCollection : totalShiftCollection,
                    grandTotal : grandTotal,
                    remark : remark,
                },
                {
                    where : {
                        id : id
                    }
                }
            );
            const updatedShiftEntryLists = await Promise.all(shiftEntryList.map(async (e) => {
                const updatedShiftEntryList = await TblShiftEntryList.update(
                    {
                        oldCredit : e.oldCredit,
                        oldCollectionName : e.oldCollectionName,
                        oldDate : e.oldDate,
                        newCredit : e.newCredit,
                        borrowerName : e.borrowerName,
                        borrowerMobileNo : e.borrowerMobileNo
                    },
                    {
                        where : {
                            shiftEntryId : id,
                            id : e.id
                        }
                    }
                );
                return updatedShiftEntryList;
            }));

            const responseData = {
                ShiftEntry: data,
                ShiftEntryLists: updatedShiftEntryLists
            };
            return responseData;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    deleteShiftEntry = async (req) => {
        try {
            const { id } = req.query;
            const data = await TblShiftEntry.destroy({
                where : {
                    id : id
                }
            }).then(async (res) => {
                await TblShiftEntryList.destroy({
                    where : {
                        shiftEntryId : id
                    }
                });
                return {
                    msg : "Deleted Successfully"
                }
            });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };
}

module.exports = new ShiftEntry();