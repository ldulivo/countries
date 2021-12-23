import { Request, Response } from "express";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export const gteInfo = async ( req: Request, res: Response ) => {
    const { country } = req.params;

    const dataCountry = await countryMapBox( country )
    const data = await countryData(dataCountry[0].lat, dataCountry[0].lng)

    res.json(data)
}

const countryMapBox = async ( myCountry:any ) => {
    /**
     * get the weather
     */    
     const paramsMapbox: any = {
        'access_token': process.env.MAPBOX_KEY,
        'limit': 1,
        'language': 'en'
    }

     try {
         
         const instance:any = axios.create({
             
             baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ myCountry }.json`,
             params: paramsMapbox
            });
            
            const resp = await instance.get();

        return resp.data.features.map( (lugar:any) => ({
            id: lugar.id,
            nombre: lugar.place_name,
            lng: lugar.center[0],
            lat: lugar.center[1]
        }))

    } catch (error) {
        return [];
    }
}

const countryData = async ( lat:any, lon:any ) => {
    try {
        const params = {
            lat,
            lon,
            'appid': process.env.OPENWEATHER_KEY,
            'lang': 'en',
            'units' : 'metric'
        };

        const instance:any = axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather`,
            params
        })

        const resp = await instance.get();
        return {
            desc: resp.data.weather[0].description,
            min: resp.data.main.temp_min,
            max: resp.data.main.temp_max,
            temp: resp.data.main.temp
        };
        
    } catch (error) {
        //console.log(error);
    }
}