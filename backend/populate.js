// this file was only created upload data to database so its easy to work with it not create each Redoo, and the main reason is for the stats page which needs different published times
// this only runs once to populate DATA (fake data)
import { readFile } from 'fs/promises'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'
import Redoo from './Models/Redoo.js'

const start = async () => {
  try {
    await connectDB(process.env.DB_URL, process.env.DB_PASSWORD)
    await Redoo.deleteMany()

    const jsonProducts = JSON.parse(
      await readFile(new URL('./testData.json', import.meta.url))
    )
    await Redoo.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}







import { promises as fsPromises } from 'fs';

const generate = async () => {
  try {
    const base64Images = JSON.parse(await fsPromises.readFile('./base64Images.json', 'utf-8'));
    const testData = JSON.parse(await fsPromises.readFile('./testData.json', 'utf-8'));

    // Update the image field for each item in testData
    for (let i = 0; i < testData.length; i++) {
      testData[i].likes = Math.floor(Math.random() * 100) ;
      testData[i].comments = Math.floor(Math.random() * 100) ;

    }

    // Print the modified testData

    // Write the modified testData back to the file
    await fsPromises.writeFile('./testData.json', JSON.stringify(testData, null, 2));

    console.log('testData.json updated successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// generate(); ///// MERG VALUES


// start() /////// deploy to database
