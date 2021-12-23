import fs from 'fs';

const loadFile = ( file: any ): any => {

    if( !fs.existsSync(file) ) {
        return;
    }

    const info = fs.readFileSync( file, { encoding: 'utf-8'} );
    if( info === "[]" || info === "" ) return;
    const data =JSON.parse( info );

    return data;
}

export default loadFile;