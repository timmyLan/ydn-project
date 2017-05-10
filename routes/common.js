/**
 * Created by llan on 2017/5/5.
 */

import Product from '../models/product';
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
        let faddishResult = await Product.findAll({
            where: {
                isShow: true,
                property_id: '1'
            },
            raw: true
        });
        let freshResult = await Product.findAll({
            where: {
                isShow: true,
                property_id: '2'
            },
            raw: true
        });
        let mainResult = await Product.findAll({
            where: {
                isShow: true,
                property_id: '3'
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
const getProperty = async()=> {
    try {
        let propertyResult = await Property.findAll({
            raw: true
        });
        return {
            properties: propertyResult
        }
    } catch (err) {
        console.log('Error with getProperty', err);
    }
};
const getBaseInfo = async()=> {
    let sideBarResult = await getSidebar();
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
const getProduct = async(id)=> {
    try {
        return {
            product: await Product.findById(id, {
                raw: true
            })
        };
    } catch (err) {
        console.log('Error with getProduct', err);
    }
};
const getAllProduct = async(currentPage)=> {
    try {
        return await Product.findAndCountAll({
            raw: true,
            limit: countPerPage,                      // 每页多少条
            offset: countPerPage * (currentPage - 1),  // 跳过多少条
            include: [Property, Category]
        });
    } catch (err) {
        console.log('Error with getProduct', err);
    }
};
const getProductByOption = async(name, property_id, category_id, currentPage)=> {
    try {
        let option = {};
        if (name) {
            option = {...option, name: {'$like': `%${name}%`}};
        }
        if (property_id != 0) {
            option = {...option, property_id: property_id};
        }
        if (category_id != 0) {
            option = {...option, category_id: category_id};
        }
        return await Product.findAndCountAll({
            raw: true,
            where: option,
            limit: countPerPage,                      // 每页多少条
            offset: countPerPage * (currentPage - 1),  // 跳过多少条
            include: [Property, Category]
        });
    } catch (err) {
        console.log('Error with getProductByOption', err);
    }
};
const getMoreCategory = async(id)=> {
    try {
        return await Product.findAll({
            where: {
                category_id: id
            },
            include: Property,
            raw: true,
            ...paging
        });
    } catch (err) {
        console.log('Error with getMoreCategory', err);
    }
};
const getMore = async(type)=> {
    try {
        return await Product.findAll({
            where: {
                property_id: type
            },
            raw: true,
            include: Property,
            ...paging
        });
    } catch (err) {
        console.log('Error with getMore', err);
    }
};

const editProduct = async(id, body)=> {
    try {
        return await Product.update(body, {
            where: {
                id: id
            }
        });
    } catch (err) {
        console.log('Error with getMore', err);
    }
};
const isEmptyObject = (obj)=> {
    return Object.keys(obj).length === 0;
};

export {
    getBaseInfo, getCategory, getMore,
    getMoreCategory, getCompany, getProperty,
    getProduct, editProduct, getAllProduct,
    getProductByOption, isEmptyObject, countPerPage
};

