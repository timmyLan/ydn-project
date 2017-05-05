/**
 * Created by llan on 2017/5/5.
 */
import Faddish from '../models/faddish';
import Fresh from '../models/fresh';
import Main from '../models/main';
import Company from '../models/company';
import Category from '../models/category';
const getSidebar = async()=> {
    try {
        let faddishResult = await Faddish.findAll({
            where: {
                isShow: true
            },
            raw: true
        });
        let freshResult = await Fresh.findAll({
            where: {
                isShow: true
            },
            raw: true
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
const getBaseInfo = async()=> {
    let sideBarResult = await   getSidebar();
    let company = await getCompany();
    return {
        ...sideBarResult,
        ...company
    }
};
const getCategory = async()=> {
    try {
        let categories = await Category.findAll({
            raw: true
        });
        return {
            categories: categories
        }
    } catch (err) {
        console.log('Error with getCategory', err);
    }
};
const getBelongCategory = async(id)=> {
    try {
        let faddishResult = await Faddish.findAll({
            where: {
                category_id: id
            },
            raw: true
        });
        let freshResult = await Fresh.findAll({
            where: {
                category_id: id
            },
            raw: true
        });
        let mainResult = await Main.findAll({
            where: {
                category_id: id
            },
            raw: true
        });
        return [...freshResult, ...faddishResult, ...mainResult];
    } catch (err) {
        console.log('Error with getBelongCategory', err);
    }
};
export {getBaseInfo, getCategory, getBelongCategory} ;
