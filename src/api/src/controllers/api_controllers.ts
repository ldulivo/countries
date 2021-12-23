import { json, Request, Response } from 'express';
import dotenv from 'dotenv'

import loadFile from '../bin/db_connect';
import CountryModels from '../models/country_models';

dotenv.config();

const file = process.env.DB_FILE;

export const getAll = async ( req: Request, res: Response ) => {
    const fileData = await loadFile( file );
    const countryModel = new CountryModels;

    let { countryFind, orderBy = "countryName", firstChar = false } = req.query;

    countryModel.created(fileData.countries, 'all', false, countryFind)
    countryModel.orderBy( String( orderBy ));

    if( firstChar ){
        countryModel.firstChar( String( firstChar ) );
    }
    
    const data = countryModel.data();
    res.status(200).json(data)
}

export const getContinent = async ( req: Request, res: Response ) => {
    const fileData = await loadFile( file );
    const countryModel = new CountryModels;

    let { continent }   = req.params;
    let { countryFind, orderBy = "countryName", firstChar = false } = req.query;
    
    continent   = continent.toLowerCase();
    
    countryModel.created(fileData.countries, 'continentName', continent, countryFind)
    countryModel.orderBy( String( orderBy ));

    if( firstChar ){
        countryModel.firstChar( String( firstChar ) );
    }

    const data = countryModel.data();
    res.status(200).json(data)
}

export const getList = async ( req: Request, res: Response ) => {
    const fileData = await loadFile( file );
    const countryModel = new CountryModels;
    let aux:any[] = [];

    const { search } = req.query;

    let data = countryModel.data();
    countryModel.created(fileData.countries, 'all', false, false)
    countryModel.orderBy( String( search ));

    
    data.map( continent => {

        switch (search) {
            case 'continentName':
                if( !aux.includes(continent.continentName) ) {
                    aux.push(continent.continentName)
                }
                break;
        
            default:
                if( !aux.includes( continent.countryName.substr(0, 1) ) ) {
                    aux.push( continent.countryName.substr(0, 1) )
                }
                break;
        }
    })

    data = aux;
    res.status(200).json(data)
}