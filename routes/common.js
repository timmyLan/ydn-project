/**
 * Created by llan on 2017/5/5.
 */
import Faddish from '../models/faddish';
import Fresh from '../models/fresh';
import Main from '../models/main';
import Company from '../models/company';
const getSidebar = async()=> {
    try {

        let faddishResult = await Faddish.findAll({
            where: {
                isShow: true
            }
        });
        let freshResult = await Fresh.findAll({
            where: {
                isShow: true
            }
        });
        let mainResult = await Main.findAll({
            where: {
                isShow: true
            },
            raw: true
        });
        return {
            faddish: faddishResult,
            fresh: freshResult,
            main: mainResult
        }
    } catch (err) {
        console.log('Error with getSidebar', err);
    }
};
const getCompany = async()=> {
    try {
        let companyResult = await Company.findAll({
            raw: true
        });
        return {
            company: companyResult[0]
        }
    } catch (err) {
        console.log('Error with getCompany', err);
    }
};
export {getSidebar, getCompany} ;
