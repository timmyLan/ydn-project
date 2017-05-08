/**
 * Created by llan on 2017/5/5.
 */
import Faddish from '../models/faddish';
import Fresh from '../models/fresh';
import Main from '../models/main';
import Company from '../models/company';
import Category from '../models/category';
import Property from '../models/property';
const countPerPage = 10;
const currentPage = 1;
const paging = {
    'limit': countPerPage,                      // 每页多少条
    'offset': countPerPage * (currentPage - 1)  // 跳过多少条
};
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
const getMoreCategory = async(id)=> {
    try {
        let faddishResult = await Faddish.findAll({
            where: {
                category_id: id
            },
            include: Property,
            raw: true,
            ...paging
        });
        let freshResult = await Fresh.findAll({
            where: {
                category_id: id
            },
            include: Property,
            raw: true,
            ...paging
        });
        let mainResult = await Main.findAll({
            where: {
                category_id: id
            },
            include: Property,
            raw: true,
            ...paging
        });
        return [...freshResult, ...faddishResult, ...mainResult];
    } catch (err) {
        console.log('Error with getMoreCategory', err);
    }
};
const getMore = async(type)=> {
    try {
        if (type) {
            switch (type) {
                case 'faddish': {
                    return await Faddish.findAll({
                        raw: true,
                        include: Property,
                        ...paging
                    });
                }
                case 'fresh': {
                    return await Fresh.findAll({
                        raw: true,
                        include: Property,
                        ...paging
                    });
                }
                case 'main': {
                    return await Main.findAll({
                        raw: true,
                        include: Property,
                        ...paging
                    });
                }
                default:
                    throw 'type is error';
            }
        } else {
            throw 'type must be';
        }
    } catch (err) {
        console.log('Error with getMore', err);
    }
};

export {getBaseInfo, getCategory, getMore, getMoreCategory,getCompany};
