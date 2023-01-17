import * as util from 'util';
import * as xml2js from 'xml2js';

const xml2jsObject = new xml2js.Parser({ explicitArray: false });
const parseXmlAsync = util.promisify(xml2jsObject.parseString).bind(xml2js);

const response = '<Services><Asd><Return_Code>0</Return_Code><Return_Msg>All went well</Return_Msg><Exp_Date>31-Dec-2022</Exp_Date><Folio_No>8220706</Folio_No></Asd></Services>';

(async () => {
  const res = await parseXmlAsync(response)
  console.log(res)
})()