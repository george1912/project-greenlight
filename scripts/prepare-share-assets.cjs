/* Rebuild the code-native pixel stoplight and share card with the bundled sharp runtime. */
const fs=require('node:fs'),path=require('node:path');
let sharp;
try { sharp=require('sharp'); } catch {
  if (!process.env.GREENLIGHT_NODE_MODULES) throw Error('Provide sharp through node_modules or set GREENLIGHT_NODE_MODULES to its package directory.');
  sharp=require(require.resolve('sharp',{paths:[process.env.GREENLIGHT_NODE_MODULES]}));
}
const root=path.resolve(__dirname,'..');
const lamp=(y,color)=>`<path fill="${color}" d="M28 ${y}h8v2h2v2h2v8h-2v2h-2v2h-8v-2h-2v-2h-2v-8h2v-2h2z"/>`;
const icon=`<path fill="#192b25" d="M20 0h24v4h4v52h-4v4H20v-4h-4V4h4z"/><path fill="#30483b" d="M20 4h24v52H20z"/>${lamp(4,'#69423c')}${lamp(22,'#6d5b35')}${lamp(40,'#87df65')}<path fill="#bff79c" d="M28 44h4v2h-2v4h-2z"/>`;
const favicon=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="crispEdges"><title>Pixel stoplight with green light on</title>${icon}</svg>\n`;
fs.writeFileSync(path.join(root,'favicon.svg'),favicon);
const glyphs={
 P:['11110','10001','10001','11110','10000','10000','10000'],R:['11110','10001','10001','11110','10100','10010','10001'],O:['01110','10001','10001','10001','10001','10001','01110'],J:['00111','00010','00010','00010','10010','10010','01100'],E:['11111','10000','10000','11110','10000','10000','11111'],C:['01111','10000','10000','10000','10000','10000','01111'],T:['11111','00100','00100','00100','00100','00100','00100'],G:['01111','10000','10000','10111','10001','10001','01110'],N:['10001','11001','11001','10101','10011','10011','10001'],L:['10000','10000','10000','10000','10000','10000','11111'],I:['11111','00100','00100','00100','00100','00100','11111'],H:['10001','10001','10001','11111','10001','10001','10001'],' ':Array(7).fill('00000')};
function pixelText(text,y,unit,color){
 const width=(text.length*6-1)*unit,x=(1200-width)/2;let result='';
 [...text].forEach((letter,index)=>glyphs[letter].forEach((row,ri)=>[...row].forEach((cell,ci)=>{if(cell==='1')result+=`<rect x="${x+(index*6+ci)*unit}" y="${y+ri*unit}" width="${unit}" height="${unit}"/>`;})));
 return `<g fill="${color}" shape-rendering="crispEdges">${result}</g>`;
}
const card=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><title>Project Green Light — Your nursing study hub.</title><rect width="1200" height="630" fill="#faf7ef"/><path fill="#dce8d4" d="M80 76h16v16H80zM1104 76h16v16h-16zM80 538h16v16H80zM1104 538h16v16h-16z"/><g transform="translate(472 42) scale(4)" shape-rendering="crispEdges">${icon}</g>${pixelText('PROJECT',326,6,'#626b64')}${pixelText('GREEN LIGHT',394,8,'#245644')}<text x="600" y="517" text-anchor="middle" font-family="Arial, sans-serif" font-size="31" fill="#192b25">Your nursing study hub.</text><path d="M424 555h352v3H424z" fill="#b87753"/></svg>\n`;
fs.writeFileSync(path.join(root,'assets/share-green-light.svg'),card);
(async()=>{
 await sharp(Buffer.from(card)).png().toFile(path.join(root,'assets/share-green-light.png'));
 await sharp(Buffer.from(favicon)).resize(48,48).png().toFile(path.join(root,'assets/favicon-48.png'));
 const touch=`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><rect width="180" height="180" fill="#faf7ef"/><g transform="translate(26 28) scale(2)" shape-rendering="crispEdges">${icon}</g></svg>`;
 await sharp(Buffer.from(touch)).png().toFile(path.join(root,'assets/apple-touch-icon.png'));
 console.log('Prepared the 1200×630 sharing preview, pixel stoplight favicon and 180×180 touch icon.');
})().catch(error=>{console.error(error);process.exitCode=1;});
